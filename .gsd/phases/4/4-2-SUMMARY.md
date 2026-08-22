# Plan 4.2 Summary: Asynchronous Evaluation Pipeline & Run Management

## Objective
Implement asynchronous evaluation pipeline execution (`POST /api/agents/:id/run`), job status polling (`GET /api/jobs/:id`), and execution run telemetry inspection (`GET /api/runs/:id`, `GET /api/agents/:id/runs`).

## Accomplishments
1. **Asynchronous Evaluation Pipeline (`backend/src/routes/agents.ts`):**
   - `POST /api/agents/:id/run`:
     - Fetches target agent version and associated scenarios.
     - Auto-generates baseline scenarios with AI probes if no scenarios exist.
     - Creates `EvaluationJob` record with status `QUEUED`.
     - Immediately responds with HTTP `202 Accepted` returning `{ jobId, status: "QUEUED", totalScenarios }`.
     - Dispatches background worker `processEvaluationJob` without blocking the HTTP request thread.
2. **Background Evaluation Worker (`processEvaluationJob`):**
   - Transitions job status from `QUEUED` to `RUNNING`.
   - Iterates through scenarios sequentially:
     - Creates `Run` record with status `RUNNING`.
     - Executes agent in sandboxed harness with mock tool executor (`executeInSandbox`).
     - Evaluates execution trace against expected behaviors using LLM-as-a-judge (`classifyRun`).
     - Atomically writes `Trace` telemetry and `Classification` verdict rows to PostgreSQL and marks `Run` as `COMPLETED` (or `FAILED` with error log).
     - Tracks pass/fail counts and failure distributions across `tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, and `goal_drift`.
   - Computes batch `reliabilityScore` ((passed / total) * 100) and marks `EvaluationJob` as `COMPLETED`.
3. **Job & Run Inspection Endpoints (`backend/src/routes/jobs.ts`, `backend/src/routes/runs.ts`):**
   - `GET /api/jobs/:id`: Returns live evaluation job status, progress percentage, scenario execution counts, and summarized failure distributions.
   - `GET /api/runs/:id`: Returns full run payload including agent configuration, scenario prompt, chronological trace messages, and judge reasoning.
   - `GET /api/agents/:id/runs`: Lists runs with flexible filtering on version, category, passFail, and failureType.

## Verification
- `POST /api/agents/:id/run` verified returning non-blocking HTTP 202 Accepted.
- Background worker lifecycle (`QUEUED` -> `RUNNING` -> `COMPLETED`) verified via `GET /api/jobs/:id`.
- Zero TypeScript errors across all route handlers.
