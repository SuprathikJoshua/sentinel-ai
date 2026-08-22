---
phase: 4
plan: 3
wave: 3
gap_closure: false
---

# Plan 4.3: Scorecards, Version Comparison & Markdown Reports

## Objective
Implement `GET /api/agents/:id/scorecard`, `GET /api/agents/:id/compare?v1=1&v2=2`, and `GET /api/agents/:id/report`, and mount all route modules cleanly in `backend/src/index.ts`.

## Context
- .gsd/SPEC.md
- shared/types.ts (`ScorecardMetrics`, `VersionComparison`)
- backend/src/index.ts

## Tasks

<task type="auto">
  <name>Implement Scorecard, Version Comparison, and Report export routes</name>
  <files>
    backend/src/routes/scorecard.ts
    backend/src/routes/reports.ts
    backend/src/index.ts
  </files>
  <action>
    1. In backend/src/routes/scorecard.ts:
       - GET /api/agents/:id/scorecard:
         - Fetches all evaluation runs across all versions for the agent
         - Computes latest version reliability score, passed/failed run counts, failure distribution per category (tool_loop, hallucinated_confidence, unsafe_destructive_action, goal_drift)
         - Computes version history array (version number, reliability score, run counts, timestamps)
         - Returns validated ScorecardMetrics payload
       - GET /api/agents/:id/compare:
         - Accepts `?v1=X&v2=Y` query params
         - Aggregates runs and failure distributions for both versions
         - Computes delta metrics (scoreDiff, improvedFailures, regressedFailures)
         - Returns validated VersionComparison payload
    2. In backend/src/routes/reports.ts:
       - GET /api/agents/:id/report:
         - Generates formatted markdown report summarizing the agent's latest scorecard, reliability percentage, failure distribution table, top failure examples with judge reasoning, and version comparison history
         - Sets `Content-Type: text/markdown` or JSON download
    3. In backend/src/index.ts:
       - Mount `/api/agents`, `/api/scenarios`, `/api/jobs`, `/api/runs`, `/api/scorecard`, `/api/reports`
       - Ensure all endpoints use `requireAuth` (or optionalAuth where appropriate)
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    All REST routes compile cleanly and server mounts all endpoints.
  </done>
</task>

## Must-Haves
- [ ] Scorecard analytics endpoint (`GET /api/agents/:id/scorecard`)
- [ ] Version comparison diff endpoint (`GET /api/agents/:id/compare`)
- [ ] Markdown evaluation report exporter (`GET /api/agents/:id/report`)
- [ ] All routes mounted in `backend/src/index.ts` and protected with `requireAuth`
