import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";
import { executeInSandbox } from "../sandbox";
import { classifyRun, generateScenarios, runGuardrailProbe } from "../ai";
import {
  AgentConfigSchema,
  ToolDefSchema,
  ScenarioSchema,
  type AgentConfig,
  type Scenario,
  type ScorecardMetrics,
  type VersionComparison,
} from "@sentinel/shared";
import { z } from "zod";

const router = Router();

router.use(requireAuth);

/**
 * GET /api/agents
 * List all agents with latest version summary, scenario counts, and latest reliability scores.
 */
router.get("/", async (_req: Request, res: Response): Promise<void> => {
  try {
    const agents = await prisma.agent.findMany({
      include: {
        versions: {
          orderBy: { version: "desc" },
          include: {
            evaluationJobs: {
              orderBy: { createdAt: "desc" },
              take: 1,
            },
          },
        },
        _count: {
          select: {
            scenarios: true,
          },
        },
      },
      orderBy: { updatedAt: "desc" },
    });

    const formatted = agents.map((agent) => {
      const latestVersion = agent.versions[0] || null;
      const latestJob = latestVersion?.evaluationJobs[0] || null;

      return {
        id: agent.id,
        name: agent.name,
        domain: agent.domain,
        description: agent.description,
        createdAt: agent.createdAt,
        updatedAt: agent.updatedAt,
        scenarioCount: agent._count.scenarios,
        latestVersion: latestVersion
          ? {
              id: latestVersion.id,
              version: latestVersion.version,
              systemPrompt: latestVersion.systemPrompt,
              tools: latestVersion.tools,
              model: latestVersion.model,
              createdAt: latestVersion.createdAt,
            }
          : null,
        latestReliabilityScore: latestJob?.reliabilityScore ?? null,
        latestJobStatus: latestJob?.status ?? null,
        totalVersions: agent.versions.length,
      };
    });

    res.json(formatted);
  } catch (error) {
    console.error("[Agents] GET /api/agents failed:", error);
    res.status(500).json({ error: "Failed to list agents", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * POST /api/agents
 * Create a new agent along with initial AgentVersion (v1).
 */
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const parseResult = AgentConfigSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        error: "Validation failed",
        issues: parseResult.error.flatten(),
      });
      return;
    }

    const { name, systemPrompt, tools, domain, description } = parseResult.data;

    const agent = await prisma.$transaction(async (tx) => {
      const createdAgent = await tx.agent.create({
        data: {
          name,
          domain,
          description: description || null,
        },
      });

      const version = await tx.agentVersion.create({
        data: {
          agentId: createdAgent.id,
          version: 1,
          systemPrompt,
          tools: tools as any,
          model: "claude-sonnet-4-20250514",
        },
      });

      return {
        ...createdAgent,
        activeVersion: version,
      };
    });

    res.status(201).json(agent);
  } catch (error) {
    console.error("[Agents] POST /api/agents failed:", error);
    res.status(500).json({ error: "Failed to create agent", message: error instanceof Error ? error.message : String(error) });
  }
});

// Specific sub-resource routes MUST be registered before generic `/:id`

const CreateVersionSchema = z.object({
  systemPrompt: z.string().min(1, "System prompt is required"),
  tools: z.array(ToolDefSchema),
  model: z.string().optional().default("claude-sonnet-4-20250514"),
  temperature: z.number().optional().default(0.0),
});

/**
 * POST /api/agents/:id/versions
 * Create a new immutable version for an existing agent (v2, v3, etc.).
 */
router.post("/:id/versions", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const parseResult = CreateVersionSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        error: "Validation failed",
        issues: parseResult.error.flatten(),
      });
      return;
    }

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
          take: 1,
        },
      },
    });

    if (!agent) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    const nextVersion = (agent.versions[0]?.version || 0) + 1;
    const { systemPrompt, tools, model, temperature } = parseResult.data;

    const newVersion = await prisma.agentVersion.create({
      data: {
        agentId: id,
        version: nextVersion,
        systemPrompt,
        tools: tools as any,
        model,
        temperature,
      },
    });

    await prisma.agent.update({
      where: { id },
      data: { updatedAt: new Date() },
    });

    res.status(201).json(newVersion);
  } catch (error) {
    console.error(`[Agents] POST /api/agents/${req.params.id}/versions failed:`, error);
    res.status(500).json({ error: "Failed to create version", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/scenarios
 * List all saved scenarios for an agent.
 */
router.get("/:id/scenarios", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const scenarios = await prisma.scenario.findMany({
      where: { agentId: id },
      orderBy: { createdAt: "desc" },
    });

    res.json(scenarios);
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id}/scenarios failed:`, error);
    res.status(500).json({ error: "Failed to list scenarios", message: error instanceof Error ? error.message : String(error) });
  }
});

const CreateScenarioBodySchema = ScenarioSchema.omit({ id: true });

/**
 * POST /api/agents/:id/scenarios
 * Manually add a scenario to an agent.
 */
router.post("/:id/scenarios", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const parseResult = CreateScenarioBodySchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        error: "Validation failed",
        issues: parseResult.error.flatten(),
      });
      return;
    }

    const { prompt, category, riskType, expectedBehavior } = parseResult.data;

    const scenario = await prisma.scenario.create({
      data: {
        agentId: id,
        prompt,
        category,
        riskType,
        expectedBehavior,
      },
    });

    res.status(201).json(scenario);
  } catch (error) {
    console.error(`[Agents] POST /api/agents/${req.params.id}/scenarios failed:`, error);
    res.status(500).json({ error: "Failed to create scenario", message: error instanceof Error ? error.message : String(error) });
  }
});

const GenerateOptionsSchema = z.object({
  count: z.number().min(2).max(12).optional().default(6),
  includeGuardrails: z.boolean().optional().default(true),
  versionId: z.string().optional(),
});

/**
 * POST /api/agents/:id/scenarios/generate
 * Trigger AI generation of realistic + adversarial scenarios and store them in database.
 */
router.post("/:id/scenarios/generate", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { count, includeGuardrails, versionId } = GenerateOptionsSchema.parse(req.body || {});

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
        },
      },
    });

    if (!agent || agent.versions.length === 0) {
      res.status(404).json({ error: "Agent or AgentVersion not found" });
      return;
    }

    const activeVersion = versionId
      ? agent.versions.find((v) => v.id === versionId) || agent.versions[0]
      : agent.versions[0];

    const agentConfig: AgentConfig = {
      name: agent.name,
      domain: agent.domain,
      systemPrompt: activeVersion.systemPrompt,
      tools: (activeVersion.tools as any[]) || [],
      version: activeVersion.version,
    };

    const standardScenarios = await generateScenarios(agentConfig, count);
    let guardrailScenarios: typeof standardScenarios = [];
    if (includeGuardrails) {
      guardrailScenarios = await runGuardrailProbe(agentConfig, 2);
    }

    const allGenerated = [...standardScenarios, ...guardrailScenarios];

    const createdScenarios = await prisma.$transaction(
      allGenerated.map((s) =>
        prisma.scenario.create({
          data: {
            agentId: id,
            prompt: s.prompt,
            category: s.category,
            riskType: s.riskType,
            expectedBehavior: s.expectedBehavior,
          },
        })
      )
    );

    res.status(201).json({
      message: `Generated and stored ${createdScenarios.length} scenarios`,
      total: createdScenarios.length,
      scenarios: createdScenarios,
    });
  } catch (error) {
    console.error(`[Agents] POST /api/agents/${req.params.id}/scenarios/generate failed:`, error);
    res.status(500).json({ error: "Failed to generate scenarios", message: error instanceof Error ? error.message : String(error) });
  }
});

const RunEvaluationOptionsSchema = z.object({
  versionId: z.string().optional(),
  autoGenerateScenarios: z.boolean().optional().default(true),
});

/**
 * Background worker executing evaluation job asynchronously
 */
async function processEvaluationJob(
  jobId: string,
  agentConfig: AgentConfig,
  agentVersionId: string,
  scenarios: Scenario[]
): Promise<void> {
  console.log(`[EvaluationPipeline] Starting background evaluation for job ${jobId} with ${scenarios.length} scenarios...`);

  await prisma.evaluationJob.update({
    where: { id: jobId },
    data: {
      status: "RUNNING",
      startedAt: new Date(),
    },
  });

  let passedCount = 0;
  let failedCount = 0;
  const failureDistribution: Record<string, number> = {
    tool_loop: 0,
    hallucinated_confidence: 0,
    unsafe_destructive_action: 0,
    goal_drift: 0,
  };

  try {
    for (const scenario of scenarios) {
      const scenarioStart = Date.now();

      const run = await prisma.run.create({
        data: {
          evaluationJobId: jobId,
          agentVersionId,
          scenarioId: scenario.id || "",
          status: "RUNNING",
          startedAt: new Date(),
        },
      });

      try {
        const trace = await executeInSandbox(agentConfig, scenario);
        const classification = await classifyRun(trace, scenario);

        if (classification.passFail === "pass") {
          passedCount++;
        } else {
          failedCount++;
          if (classification.failureType in failureDistribution) {
            failureDistribution[classification.failureType] = (failureDistribution[classification.failureType] || 0) + 1;
          }
        }

        const durationMs = Date.now() - scenarioStart;

        await prisma.$transaction([
          prisma.trace.create({
            data: {
              runId: run.id,
              messages: trace.messages as any,
              turnCount: trace.turnCount,
              hitTurnLimit: trace.hitTurnLimit,
              toolCallsCount: trace.toolCallsCount,
            },
          }),
          prisma.classification.create({
            data: {
              runId: run.id,
              passFail: classification.passFail,
              failureType: classification.failureType,
              confidence: classification.confidence,
              reasoning: classification.reasoning,
            },
          }),
          prisma.run.update({
            where: { id: run.id },
            data: {
              status: "COMPLETED",
              durationMs,
              completedAt: new Date(),
            },
          }),
        ]);
      } catch (runErr) {
        console.error(`[EvaluationPipeline] Scenario run ${run.id} failed:`, runErr);
        await prisma.run.update({
          where: { id: run.id },
          data: {
            status: "FAILED",
            errorMessage: runErr instanceof Error ? runErr.message : String(runErr),
            completedAt: new Date(),
          },
        });
        failedCount++;
      }
    }

    const total = passedCount + failedCount;
    const reliabilityScore = total > 0 ? (passedCount / total) * 100 : 0;

    await prisma.evaluationJob.update({
      where: { id: jobId },
      data: {
        status: "COMPLETED",
        passedScenarios: passedCount,
        failedScenarios: failedCount,
        reliabilityScore,
        summaryMetrics: {
          failureDistribution,
          totalExecuted: total,
        } as any,
        completedAt: new Date(),
      },
    });

    console.log(`[EvaluationPipeline] Job ${jobId} completed. Reliability: ${reliabilityScore.toFixed(1)}% (${passedCount}/${total} passed).`);
  } catch (jobErr) {
    console.error(`[EvaluationPipeline] Job ${jobId} failed with critical error:`, jobErr);
    await prisma.evaluationJob.update({
      where: { id: jobId },
      data: {
        status: "FAILED",
        errorMessage: jobErr instanceof Error ? jobErr.message : String(jobErr),
        completedAt: new Date(),
      },
    });
  }
}

/**
 * POST /api/agents/:id/run
 * Trigger asynchronous evaluation run across scenarios.
 * Immediately returns 202 Accepted.
 */
router.post("/:id/run", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { versionId, autoGenerateScenarios } = RunEvaluationOptionsSchema.parse(req.body || {});

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
        },
        scenarios: true,
      },
    });

    if (!agent || agent.versions.length === 0) {
      res.status(404).json({ error: "Agent or AgentVersion not found" });
      return;
    }

    const activeVersion = versionId
      ? agent.versions.find((v) => v.id === versionId) || agent.versions[0]
      : agent.versions[0];

    const agentConfig: AgentConfig = {
      name: agent.name,
      domain: agent.domain,
      systemPrompt: activeVersion.systemPrompt,
      tools: (activeVersion.tools as any[]) || [],
      version: activeVersion.version,
    };

    let scenarios = agent.scenarios;

    if (scenarios.length === 0 && autoGenerateScenarios) {
      const standardScenarios = await generateScenarios(agentConfig, 4);
      const guardrailScenarios = await runGuardrailProbe(agentConfig, 2);
      const allScenarios = [...standardScenarios, ...guardrailScenarios];

      scenarios = await prisma.$transaction(
        allScenarios.map((s) =>
          prisma.scenario.create({
            data: {
              agentId: id,
              prompt: s.prompt,
              category: s.category,
              riskType: s.riskType,
              expectedBehavior: s.expectedBehavior,
            },
          })
        )
      );
    }

    if (scenarios.length === 0) {
      res.status(400).json({
        error: "No scenarios available",
        message: "This agent has no scenarios to evaluate. Add scenarios or enable auto-generation.",
      });
      return;
    }

    const job = await prisma.evaluationJob.create({
      data: {
        agentVersionId: activeVersion.id,
        status: "QUEUED",
        triggerSource: "MANUAL",
        totalScenarios: scenarios.length,
      },
    });

    res.status(202).json({
      message: "Evaluation job queued successfully",
      jobId: job.id,
      status: "QUEUED",
      agentId: agent.id,
      versionId: activeVersion.id,
      version: activeVersion.version,
      totalScenarios: scenarios.length,
      createdAt: job.createdAt,
    });

    processEvaluationJob(
      job.id,
      agentConfig,
      activeVersion.id,
      scenarios.map((s) => ({
        id: s.id,
        prompt: s.prompt,
        category: s.category as any,
        riskType: s.riskType as any,
        expectedBehavior: s.expectedBehavior,
      }))
    ).catch((err) => {
      console.error(`[EvaluationPipeline] Unhandled background error on job ${job.id}:`, err);
    });
  } catch (error) {
    console.error(`[Agents] POST /api/agents/${req.params.id}/run failed:`, error);
    res.status(500).json({ error: "Failed to queue evaluation job", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/runs
 * Retrieve all evaluation runs for an agent with optional filtering.
 */
router.get("/:id/runs", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { version, category, passFail, failureType, limit, offset } = req.query;

    const whereClause: any = {
      agentVersion: {
        agentId: id,
      },
    };

    if (version) {
      whereClause.agentVersion.version = parseInt(String(version), 10);
    }

    if (category) {
      whereClause.scenario = {
        category: String(category),
      };
    }

    if (passFail || failureType) {
      whereClause.classification = {};
      if (passFail) {
        whereClause.classification.passFail = String(passFail);
      }
      if (failureType) {
        whereClause.classification.failureType = String(failureType);
      }
    }

    const runs = await prisma.run.findMany({
      where: whereClause,
      include: {
        scenario: {
          select: {
            id: true,
            prompt: true,
            category: true,
            riskType: true,
            expectedBehavior: true,
          },
        },
        classification: {
          select: {
            id: true,
            passFail: true,
            failureType: true,
            confidence: true,
            reasoning: true,
          },
        },
        agentVersion: {
          select: {
            id: true,
            version: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: limit ? parseInt(String(limit), 10) : 50,
      skip: offset ? parseInt(String(offset), 10) : 0,
    });

    res.json(runs);
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id}/runs failed:`, error);
    res.status(500).json({ error: "Failed to list runs", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/scorecard
 * Aggregates reliability score, failure distributions, and version trends.
 */
router.get("/:id/scorecard", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
          include: {
            runs: {
              where: { status: "COMPLETED" },
              include: {
                classification: true,
              },
            },
          },
        },
      },
    });

    if (!agent || agent.versions.length === 0) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    const latestVersion = agent.versions[0];
    const latestRuns = latestVersion.runs;

    const failureDistribution: Record<string, number> = {
      tool_loop: 0,
      hallucinated_confidence: 0,
      unsafe_destructive_action: 0,
      goal_drift: 0,
    };

    let passedRuns = 0;
    let failedRuns = 0;

    for (const run of latestRuns) {
      if (run.classification?.passFail === "pass") {
        passedRuns++;
      } else if (run.classification?.passFail === "fail") {
        failedRuns++;
        const fType = run.classification.failureType;
        if (fType in failureDistribution) {
          failureDistribution[fType] = (failureDistribution[fType] || 0) + 1;
        }
      }
    }

    const totalRuns = passedRuns + failedRuns;
    const reliabilityScore = totalRuns > 0 ? Math.round((passedRuns / totalRuns) * 1000) / 10 : 0;

    const versionHistory = agent.versions
      .map((v) => {
        let vPassed = 0;
        let vFailed = 0;
        for (const r of v.runs) {
          if (r.classification?.passFail === "pass") vPassed++;
          else if (r.classification?.passFail === "fail") vFailed++;
        }
        const vTotal = vPassed + vFailed;
        const vScore = vTotal > 0 ? Math.round((vPassed / vTotal) * 1000) / 10 : 0;

        return {
          version: v.version,
          reliabilityScore: vScore,
          totalRuns: vTotal,
          passedRuns: vPassed,
          failedRuns: vFailed,
          createdAt: v.createdAt.toISOString(),
        };
      })
      .reverse();

    const scorecard: ScorecardMetrics = {
      agentId: agent.id,
      agentName: agent.name,
      version: latestVersion.version,
      reliabilityScore,
      totalRuns,
      passedRuns,
      failedRuns,
      failureDistribution,
      versionHistory,
    };

    res.json(scorecard);
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id}/scorecard failed:`, error);
    res.status(500).json({ error: "Failed to generate scorecard", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/compare?v1=X&v2=Y
 * Compares two versions of an agent to produce regression and improvement diffs.
 */
router.get("/:id/compare", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const v1Num = parseInt(String(req.query.v1 || "1"), 10);
    const v2Num = parseInt(String(req.query.v2 || "2"), 10);

    const [v1Record, v2Record] = await Promise.all([
      prisma.agentVersion.findUnique({
        where: { agentId_version: { agentId: id, version: v1Num } },
        include: {
          runs: {
            where: { status: "COMPLETED" },
            include: { classification: true },
          },
        },
      }),
      prisma.agentVersion.findUnique({
        where: { agentId_version: { agentId: id, version: v2Num } },
        include: {
          runs: {
            where: { status: "COMPLETED" },
            include: { classification: true },
          },
        },
      }),
    ]);

    if (!v1Record || !v2Record) {
      res.status(404).json({
        error: "Version comparison failed",
        message: `Could not find records for both Version ${v1Num} and Version ${v2Num}.`,
      });
      return;
    }

    const processVersion = (v: typeof v1Record) => {
      const distribution: Record<string, number> = {
        tool_loop: 0,
        hallucinated_confidence: 0,
        unsafe_destructive_action: 0,
        goal_drift: 0,
      };

      let passed = 0;
      let failed = 0;

      for (const run of v.runs) {
        if (run.classification?.passFail === "pass") {
          passed++;
        } else if (run.classification?.passFail === "fail") {
          failed++;
          const fType = run.classification.failureType;
          if (fType in distribution) {
            distribution[fType] = (distribution[fType] || 0) + 1;
          }
        }
      }

      const total = passed + failed;
      const score = total > 0 ? Math.round((passed / total) * 1000) / 10 : 0;

      return {
        version: v.version,
        reliabilityScore: score,
        passedCount: passed,
        failedCount: failed,
        failureDistribution: distribution,
      };
    };

    const v1Data = processVersion(v1Record);
    const v2Data = processVersion(v2Record);

    const scoreDiff = Math.round((v2Data.reliabilityScore - v1Data.reliabilityScore) * 10) / 10;
    const improvedFailures: string[] = [];
    const regressedFailures: string[] = [];

    const failureTypes = ["tool_loop", "hallucinated_confidence", "unsafe_destructive_action", "goal_drift"];
    for (const ft of failureTypes) {
      const v1Count = v1Data.failureDistribution[ft] || 0;
      const v2Count = v2Data.failureDistribution[ft] || 0;

      if (v2Count < v1Count) {
        improvedFailures.push(ft);
      } else if (v2Count > v1Count) {
        regressedFailures.push(ft);
      }
    }

    const comparison: VersionComparison = {
      agentId: id,
      v1: v1Data,
      v2: v2Data,
      delta: {
        scoreDiff,
        improvedFailures,
        regressedFailures,
      },
    };

    res.json(comparison);
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id}/compare failed:`, error);
    res.status(500).json({ error: "Failed to compare versions", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/report
 * Generates and downloads a comprehensive markdown evaluation report.
 */
router.get("/:id/report", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
          include: {
            runs: {
              where: { status: "COMPLETED" },
              include: {
                scenario: true,
                classification: true,
              },
            },
          },
        },
      },
    });

    if (!agent || agent.versions.length === 0) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    const latestVersion = agent.versions[0];
    const runs = latestVersion.runs;

    const passedRuns = runs.filter((r) => r.classification?.passFail === "pass");
    const failedRuns = runs.filter((r) => r.classification?.passFail === "fail");
    const totalRuns = runs.length;
    const reliabilityScore = totalRuns > 0 ? ((passedRuns.length / totalRuns) * 100).toFixed(1) : "0.0";

    const failureCounts: Record<string, number> = {
      tool_loop: 0,
      hallucinated_confidence: 0,
      unsafe_destructive_action: 0,
      goal_drift: 0,
    };

    for (const r of failedRuns) {
      const type = r.classification?.failureType || "unknown";
      if (type in failureCounts) {
        failureCounts[type] = (failureCounts[type] || 0) + 1;
      }
    }

    const markdown = `# Sentinel AI — Agent Reliability & Evaluation Report

**Generated:** ${new Date().toUTCString()}  
**Agent:** ${agent.name} (\`${agent.id}\`)  
**Domain:** ${agent.domain}  
**Active Version:** v${latestVersion.version}  
**Model Config:** ${latestVersion.model} (temp: ${latestVersion.temperature})

---

## 1. Executive Summary

- **Overall Reliability Score:** **${reliabilityScore}%**
- **Total Scenarios Evaluated:** ${totalRuns}
- **Passed Scenarios:** ${passedRuns.length}
- **Failed Scenarios:** ${failedRuns.length}

---

## 2. Failure Mode Taxonomy Breakdown

| Failure Taxonomy Category | Count | % of Total Failures | Status |
|---|---|---|---|
| 🔄 **Tool Loop** | ${failureCounts.tool_loop} | ${failedRuns.length > 0 ? Math.round((failureCounts.tool_loop / failedRuns.length) * 100) : 0}% | ${failureCounts.tool_loop === 0 ? "✅ Clear" : "⚠️ Detected"} |
| 🎭 **Hallucinated Confidence** | ${failureCounts.hallucinated_confidence} | ${failedRuns.length > 0 ? Math.round((failureCounts.hallucinated_confidence / failedRuns.length) * 100) : 0}% | ${failureCounts.hallucinated_confidence === 0 ? "✅ Clear" : "⚠️ Detected"} |
| 🛑 **Unsafe Destructive Action** | ${failureCounts.unsafe_destructive_action} | ${failedRuns.length > 0 ? Math.round((failureCounts.unsafe_destructive_action / failedRuns.length) * 100) : 0}% | ${failureCounts.unsafe_destructive_action === 0 ? "✅ Safe" : "🚨 Action Required"} |
| 🧭 **Goal Drift** | ${failureCounts.goal_drift} | ${failedRuns.length > 0 ? Math.round((failureCounts.goal_drift / failedRuns.length) * 100) : 0}% | ${failureCounts.goal_drift === 0 ? "✅ Clear" : "⚠️ Detected"} |

---

## 3. Sample Failure Case Studies

${
  failedRuns.length === 0
    ? "*Zero failures detected in the active evaluation suite. All scenarios passed expected behaviors.*"
    : failedRuns
        .slice(0, 5)
        .map(
          (r, idx) => `
### Case ${idx + 1}: ${r.scenario.category.toUpperCase()} — \`${r.classification?.failureType}\`
- **Scenario Prompt:** """${r.scenario.prompt}"""
- **Target Risk Type:** \`${r.scenario.riskType}\`
- **Expected Behavior:** ${r.scenario.expectedBehavior}
- **Judge Confidence:** ${((r.classification?.confidence || 0) * 100).toFixed(0)}%
- **Judge Reasoning:**
  > ${r.classification?.reasoning || "No reasoning captured"}
`
        )
        .join("\n")
}

---

## 4. Version History & Regression Tracking

| Version | Total Runs | Passed | Failed | Reliability % | Created At |
|---|---|---|---|---|---|
${agent.versions
  .map((v) => {
    const vPassed = v.runs.filter((r) => r.classification?.passFail === "pass").length;
    const vFailed = v.runs.filter((r) => r.classification?.passFail === "fail").length;
    const vTotal = v.runs.length;
    const vScore = vTotal > 0 ? ((vPassed / vTotal) * 100).toFixed(1) : "0.0";
    return `| v${v.version} | ${vTotal} | ${vPassed} | ${vFailed} | **${vScore}%** | ${v.createdAt.toISOString().split("T")[0]} |`;
  })
  .join("\n")}

---

*Report automatically generated by Sentinel AI Evaluation Engine.*
`;

    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="${agent.name.toLowerCase().replace(/\s+/g, "_")}_evaluation_report.md"`);
    res.send(markdown);
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id}/report failed:`, error);
    res.status(500).json({ error: "Failed to generate report", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id
 * Get agent details, full version history, and active configuration.
 */
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const agent = await prisma.agent.findUnique({
      where: { id },
      include: {
        versions: {
          orderBy: { version: "desc" },
          include: {
            evaluationJobs: {
              orderBy: { createdAt: "desc" },
              take: 1,
            },
          },
        },
        scenarios: {
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!agent) {
      res.status(404).json({ error: "Agent not found" });
      return;
    }

    const latestVersion = agent.versions[0] || null;

    res.json({
      id: agent.id,
      name: agent.name,
      domain: agent.domain,
      description: agent.description,
      createdAt: agent.createdAt,
      updatedAt: agent.updatedAt,
      activeVersion: latestVersion,
      versions: agent.versions,
      scenarios: agent.scenarios,
    });
  } catch (error) {
    console.error(`[Agents] GET /api/agents/${req.params.id} failed:`, error);
    res.status(500).json({ error: "Failed to retrieve agent", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * DELETE /api/agents/:id
 * Delete an agent and all associated versions, scenarios, and runs via cascade.
 */
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    await prisma.agent.delete({
      where: { id },
    });

    res.json({ message: "Agent deleted successfully" });
  } catch (error) {
    console.error(`[Agents] DELETE /api/agents/${req.params.id} failed:`, error);
    res.status(500).json({ error: "Failed to delete agent", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
