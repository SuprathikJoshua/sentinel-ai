import express from "express";
import cors from "cors";
import { prisma } from "./db/client";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/health", async (_req, res) => {
  try {
    // Quick DB connectivity check
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "healthy", timestamp: new Date().toISOString(), db: "connected" });
  } catch (error) {
    res.json({
      status: "degraded",
      timestamp: new Date().toISOString(),
      db: "disconnected",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// Root API Information
app.get("/api", (_req, res) => {
  res.json({
    name: "Sentinel AI — AI Agent Reliability Engine API",
    version: "1.0.0",
    endpoints: [
      "GET  /health",
      "GET  /api/agents",
      "POST /api/agents",
      "GET  /api/agents/:id",
      "POST /api/agents/:id/run",
      "GET  /api/runs/:id",
      "GET  /api/agents/:id/runs",
      "GET  /api/agents/:id/scorecard",
      "GET  /api/agents/:id/compare",
      "GET  /api/agents/:id/report",
    ],
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Sentinel AI Backend running at http://localhost:${PORT}`);
});

export default app;
