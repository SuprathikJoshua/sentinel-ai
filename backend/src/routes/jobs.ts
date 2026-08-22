import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.use(requireAuth);

/**
 * GET /api/jobs/:id
 * Retrieve evaluation job status, progress counts, and summary metrics.
 */
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const job = await prisma.evaluationJob.findUnique({
      where: { id },
      include: {
        agentVersion: {
          include: {
            agent: true,
          },
        },
        runs: {
          select: {
            id: true,
            status: true,
            durationMs: true,
            scenario: {
              select: {
                id: true,
                category: true,
                riskType: true,
              },
            },
            classification: {
              select: {
                passFail: true,
                failureType: true,
                confidence: true,
              },
            },
          },
        },
      },
    });

    if (!job) {
      res.status(404).json({ error: "Evaluation job not found" });
      return;
    }

    const completedRunsCount = job.runs.filter((r) => r.status === "COMPLETED").length;
    const progressPercent = job.totalScenarios > 0 ? Math.round((completedRunsCount / job.totalScenarios) * 100) : 0;

    res.json({
      id: job.id,
      status: job.status,
      triggerSource: job.triggerSource,
      totalScenarios: job.totalScenarios,
      completedScenarios: completedRunsCount,
      progressPercent,
      passedScenarios: job.passedScenarios,
      failedScenarios: job.failedScenarios,
      reliabilityScore: job.reliabilityScore,
      summaryMetrics: job.summaryMetrics,
      errorMessage: job.errorMessage,
      startedAt: job.startedAt,
      completedAt: job.completedAt,
      createdAt: job.createdAt,
      agent: {
        id: job.agentVersion.agent.id,
        name: job.agentVersion.agent.name,
        domain: job.agentVersion.agent.domain,
        version: job.agentVersion.version,
      },
      runs: job.runs,
    });
  } catch (error) {
    console.error(`[Jobs] GET /api/jobs/${req.params.id} failed:`, error);
    res.status(500).json({ error: "Failed to retrieve job status", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
