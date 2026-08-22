import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";
import type { ScorecardMetrics, VersionComparison } from "@sentinel/shared";

const router = Router();

router.use(requireAuth);

/**
 * GET /api/agents/:id/scorecard
 * Aggregates reliability score, failure distributions, and version trends.
 */
router.get("/agents/:id/scorecard", async (req: Request, res: Response): Promise<void> => {
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

    // Calculate historical trend across all versions
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
      .reverse(); // Chronological order

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
    console.error(`[Scorecard] GET /api/agents/${req.params.id}/scorecard failed:`, error);
    res.status(500).json({ error: "Failed to generate scorecard", message: error instanceof Error ? error.message : String(error) });
  }
});

/**
 * GET /api/agents/:id/compare?v1=X&v2=Y
 * Compares two versions of an agent to produce regression and improvement diffs.
 */
router.get("/agents/:id/compare", async (req: Request, res: Response): Promise<void> => {
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
    console.error(`[Scorecard] GET /api/agents/${req.params.id}/compare failed:`, error);
    res.status(500).json({ error: "Failed to compare versions", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
