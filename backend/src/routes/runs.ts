import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.use(requireAuth);

/**
 * GET /api/runs/:id
 * Retrieve a single execution run with its full Trace and Classification verdict.
 */
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    const run = await prisma.run.findUnique({
      where: { id },
      include: {
        scenario: true,
        trace: true,
        classification: true,
        agentVersion: {
          include: {
            agent: true,
          },
        },
        evaluationJob: {
          select: {
            id: true,
            status: true,
            createdAt: true,
          },
        },
      },
    });

    if (!run) {
      res.status(404).json({ error: "Run not found" });
      return;
    }

    res.json(run);
  } catch (error) {
    console.error(`[Runs] GET /api/runs/${req.params.id} failed:`, error);
    res.status(500).json({ error: "Failed to retrieve run", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
