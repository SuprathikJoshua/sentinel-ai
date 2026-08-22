import { Router, type Request, type Response } from "express";
import { prisma } from "../db/client";
import { requireAuth } from "../middleware/auth";

const router = Router();

router.use(requireAuth);

/**
 * DELETE /api/scenarios/:id
 * Delete a single scenario.
 */
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;

    await prisma.scenario.delete({
      where: { id },
    });

    res.json({ message: "Scenario deleted successfully" });
  } catch (error) {
    console.error(`[Scenarios] DELETE /api/scenarios/${req.params.id} failed:`, error);
    res.status(500).json({ error: "Failed to delete scenario", message: error instanceof Error ? error.message : String(error) });
  }
});

export default router;
