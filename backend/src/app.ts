import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { prisma } from "./db/client";

// Import Route Handlers
import agentsRouter from "./routes/agents";
import jobsRouter from "./routes/jobs";
import runsRouter from "./routes/runs";
import scenariosRouter from "./routes/scenarios";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

// Public Health Check Route
app.get("/health", async (_req, res) => {
  try {
    // Quick DB connectivity check using Prisma 7 client
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      db: "connected",
    });
  } catch (error) {
    res.status(503).json({
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
      "GET    /health",
      "GET    /api/agents",
      "POST   /api/agents",
      "GET    /api/agents/:id",
      "POST   /api/agents/:id/versions",
      "DELETE /api/agents/:id",
      "GET    /api/agents/:id/scenarios",
      "POST   /api/agents/:id/scenarios",
      "POST   /api/agents/:id/scenarios/generate",
      "POST   /api/agents/:id/run",
      "GET    /api/agents/:id/runs",
      "GET    /api/agents/:id/scorecard",
      "GET    /api/agents/:id/compare?v1=1&v2=2",
      "GET    /api/agents/:id/report",
      "GET    /api/jobs/:id",
      "GET    /api/runs/:id",
      "DELETE /api/scenarios/:id",
    ],
  });
});

// Mount Protected Routers
app.use("/api/agents", agentsRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/runs", runsRouter);
app.use("/api/scenarios", scenariosRouter);

export default app;
