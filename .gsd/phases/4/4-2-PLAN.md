---
phase: 4
plan: 2
wave: 2
gap_closure: false
---

# Plan 4.2: Asynchronous Evaluation Pipeline & Run Management

## Objective
Implement `POST /api/agents/:id/run` which creates an `EvaluationJob` record with status `QUEUED` and immediately responds with 202 Accepted, while executing the full evaluation pipeline asynchronously in the background. Implement `GET /api/jobs/:id`, `GET /api/runs/:id`, and `GET /api/agents/:id/runs`.

## Context
- .gsd/SPEC.md
- backend/src/sandbox/index.ts
- backend/src/ai/index.ts
- backend/src/db/client.ts

## Tasks

<task type="auto">
  <name>Implement Asynchronous Evaluation Pipeline & Job endpoints</name>
  <files>
    backend/src/routes/evaluation.ts
    backend/src/routes/jobs.ts
    backend/src/routes/runs.ts
  </files>
  <action>
    1. In backend/src/routes/evaluation.ts:
       - POST /api/agents/:id/run:
         - Fetches agent and active/specified agentVersion
         - Fetches scenarios (if agent has none, dynamically calls `generateScenarios` and `runGuardrailProbe` and saves them first)
         - Creates `EvaluationJob` record with status `QUEUED` and `totalScenarios = scenarios.length`
         - Immediately responds with `res.status(202).json({ jobId: job.id, status: "QUEUED", totalScenarios: scenarios.length })`
         - Spawns asynchronous background worker function `runEvaluationJob(jobId, agentVersion, scenarios)`
    2. Background worker `runEvaluationJob`:
       - Updates job status to `RUNNING`, sets `startedAt = new Date()`
       - Iterates through scenarios:
         - Creates `Run` record with status `RUNNING`
         - Executes `executeInSandbox(agentConfig, scenario)` -> captures `Trace`
         - Calls `classifyRun(trace, scenario)` -> captures `Classification`
         - Saves `Trace` and `Classification` to database in a Prisma transaction, updates `Run` status to `COMPLETED` (or `FAILED` on error)
       - Computes batch aggregation: `passedScenarios`, `failedScenarios`, `reliabilityScore` ((passed/total)*100), `summaryMetrics` (failure type distribution counts)
       - Updates `EvaluationJob` with status `COMPLETED` (or `FAILED`), `completedAt = new Date()`
    3. In backend/src/routes/jobs.ts:
       - GET /api/jobs/:id: Returns job status, progress counts, and summary metrics
    4. In backend/src/routes/runs.ts:
       - GET /api/runs/:id: Returns single run with associated Scenario, Trace, and Classification
       - GET /api/agents/:id/runs: Returns list of runs for an agent (with filtering options for version, category, passFail)
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Asynchronous evaluation pipeline and run inspection routes compile cleanly.
  </done>
</task>

## Must-Haves
- [ ] Non-blocking 202 Accepted response for `POST /api/agents/:id/run`
- [ ] Background worker executing sandbox harness -> LLM classifier -> Prisma persistence
- [ ] Job status polling endpoint `GET /api/jobs/:id`
- [ ] Run detail endpoint `GET /api/runs/:id` with full Trace and Classification
