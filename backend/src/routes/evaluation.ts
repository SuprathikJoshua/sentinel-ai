import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";
import { executeInSandbox } from "../sandbox";
import { classifyRun, generateScenarios, runGuardrailProbe } from "../ai";
import type { AgentConfig, Scenario } from "@sentinel/shared";
import { z } from "zod";

const router = Router();

router.use(requireAuth);

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

      // 1. Create Run row
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
        // 2. Execute Sandbox loop
        const trace = await executeInSandbox(agentConfig, scenario);

        // 3. Classify with LLM-as-a-judge
        const classification = await classifyRun(trace, scenario);

        // 4. Update counts
        if (classification.passFail === "pass") {
          passedCount++;
        } else {
          failedCount++;
          if (classification.failureType in failureDistribution) {
            failureDistribution[classification.failureType] = (failureDistribution[classification.failureType] || 0) + 1;
          }
        }

        const durationMs = Date.now() - scenarioStart;

        // 5. Store Trace and Classification in Prisma
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
 * Trigger an asynchronous evaluation run across scenarios.
 * Responds immediately with 202 Accepted and executes pipeline in the background.
 */
router.post("/agents/:id/run", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const { versionId, autoGenerateScenarios } = RunEvaluationOptionsSchema.parse(req.body || {});

    // Fetch agent and target version
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

    // If agent has no scenarios yet and autoGenerateScenarios is true, generate a base test suite
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

    // 1. Create EvaluationJob with status QUEUED
    const job = await prisma.evaluationJob.create({
      data: {
        agentVersionId: activeVersion.id,
        status: "QUEUED",
        triggerSource: "MANUAL",
        totalScenarios: scenarios.length,
      },
    });

    // 2. Immediately respond with 202 Accepted
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

    // 3. Fire-and-forget background execution
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
    console.error(`[EvaluationPipeline] POST /api/agents/${req.params.id}/run failed:`, error);
    res.status(500).json({ error: "Failed to queue evaluation job", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
