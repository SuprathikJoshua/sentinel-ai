---
phase: 4
plan: 1
wave: 1
gap_closure: false
---

# Plan 4.1: Agent CRUD, Versioning & Scenario Management Routes

## Objective
Implement Express routes for Agent management, version snapshot creation (v1 -> v2+), and scenario generation/listing, protected by `requireAuth` and validated with `@sentinel/shared` Zod schemas.

## Context
- .gsd/SPEC.md
- backend/src/db/client.ts
- backend/src/middleware/auth.ts
- backend/src/ai/index.ts
- shared/types.ts

## Tasks

<task type="auto">
  <name>Implement Agent and Version management routes</name>
  <files>
    backend/src/routes/agents.ts
  </files>
  <action>
    Create backend/src/routes/agents.ts with router handling:
    - GET /api/agents (lists agents with their latest version summary, scenario counts, and latest reliability score)
    - POST /api/agents (validates body with AgentConfigSchema, creates Agent and AgentVersion 1 in a Prisma transaction)
    - GET /api/agents/:id (returns agent detail with full versions list and active configuration)
    - POST /api/agents/:id/versions (creates a new immutable AgentVersion by finding current max version and incrementing, storing systemPrompt and toolsJson)
    - DELETE /api/agents/:id (deletes agent with cascading removal of versions/scenarios/runs)
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Agent routes compile cleanly with zero TypeScript errors.
  </done>
</task>

<task type="auto">
  <name>Implement Scenario management & AI generation routes</name>
  <files>
    backend/src/routes/scenarios.ts
  </files>
  <action>
    Create backend/src/routes/scenarios.ts with router handling:
    - GET /api/agents/:id/scenarios (lists all saved scenarios for the agent)
    - POST /api/agents/:id/scenarios (manual creation of a scenario)
    - POST /api/agents/:id/scenarios/generate (triggers AI scenario generation via `generateScenarios` and `runGuardrailProbe`, saves generated scenarios to database, and returns saved scenarios)
    - DELETE /api/scenarios/:id (deletes a single scenario)
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Scenario routes compile cleanly.
  </done>
</task>

## Must-Haves
- [ ] Agent CRUD & immutable version creation
- [ ] AI scenario generation endpoint saving scenarios to PostgreSQL
- [ ] Routes protected with `requireAuth`
