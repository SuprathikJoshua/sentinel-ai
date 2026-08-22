# Plan 4.3 Summary: Scorecards, Version Comparison & Markdown Reports

## Objective
Implement Scorecard aggregation (`GET /api/agents/:id/scorecard`), Version comparison diffing (`GET /api/agents/:id/compare?v1=1&v2=2`), and Markdown report generation (`GET /api/agents/:id/report`), mounted cleanly in the Express application.

## Accomplishments
1. **Scorecard Aggregation (`GET /api/agents/:id/scorecard`):**
   - Calculates aggregate reliability score for the latest active version.
   - Aggregates failure taxonomy counts across `tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, and `goal_drift`.
   - Computes historical version trend array (`versionHistory`) tracking reliability trajectories across versions.
2. **Version Comparison Engine (`GET /api/agents/:id/compare`):**
   - Compares performance metrics between two specified version numbers (`v1` and `v2`).
   - Calculates `scoreDiff` (v2 reliability % - v1 reliability %).
   - Computes `improvedFailures` and `regressedFailures` lists based on changes in failure distribution counts.
3. **Markdown Report Generator (`GET /api/agents/:id/report`):**
   - Builds downloadable, formatted markdown audit document containing Executive Summary, Failure Taxonomy Breakdown table, Case Studies with LLM judge reasoning, and Version History tables.
   - Sets `Content-Type: text/markdown` and `Content-Disposition` header for instant export.
4. **Express Application Architecture (`backend/src/app.ts`, `backend/src/index.ts`):**
   - Modularized Express app into `app.ts` (route configuration) and `index.ts` (server listener) to prevent listener side-effects in test harnesses.
   - Mounted protected routes under `/api/agents`, `/api/jobs`, `/api/runs`, and `/api/scenarios`.

## Verification
- Verified `GET /api/agents/:id/scorecard` returning valid `ScorecardMetrics` payload.
- Verified `GET /api/agents/:id/compare` calculating delta metrics.
- Verified `GET /api/agents/:id/report` generating formatted markdown report.
- Zero TypeScript compiler errors (`bun run --cwd backend tsc --noEmit`).
