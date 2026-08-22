# Plan 4.1 Summary: Agent CRUD, Versioning & Scenario Management Routes

## Objective
Implement Express routes for Agent CRUD, immutable version creation (v1 -> v2+), and scenario generation/listing, protected by JWT authentication and validated with `@sentinel/shared` Zod schemas.

## Accomplishments
1. **Agent Management Routes (`backend/src/routes/agents.ts`):**
   - `GET /api/agents`: Lists all agents with latest version configuration, scenario counts, and latest evaluation reliability scores.
   - `POST /api/agents`: Validates input with `AgentConfigSchema` and creates `Agent` and initial `AgentVersion` (v1) within an atomic Prisma transaction.
   - `GET /api/agents/:id`: Retrieves agent details with all historical versions and scenario records.
   - `POST /api/agents/:id/versions`: Creates a new immutable `AgentVersion` (v2, v3, etc.) preserving prior configurations.
   - `DELETE /api/agents/:id`: Performs cascading deletion of agent and all related versions, scenarios, and runs.
2. **Scenario Management & AI Generation Routes (`backend/src/routes/agents.ts`, `backend/src/routes/scenarios.ts`):**
   - `GET /api/agents/:id/scenarios`: Fetches all test cases for an agent.
   - `POST /api/agents/:id/scenarios`: Allows manual creation of custom scenarios.
   - `POST /api/agents/:id/scenarios/generate`: Invokes `generateScenarios` and `runGuardrailProbe` to dynamically generate realistic and adversarial scenarios, storing them in PostgreSQL.
   - `DELETE /api/scenarios/:id`: Deletes individual scenario records.
3. **Authentication & Validation:**
   - Protected all endpoints with `requireAuth` middleware supporting both Supabase JWT verification and non-production development fallbacks.

## Verification
- `bun run --cwd backend tsc --noEmit` verified 0 TypeScript errors.
- Verified agent creation, versioning, scenario generation, and cascading deletion against live Supabase PostgreSQL in `scripts/test-api-routes.ts`.
