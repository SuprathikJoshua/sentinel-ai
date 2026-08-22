# DECISIONS.md — Architecture Decision Records

> **Purpose**: Log significant technical decisions and their rationale for Sentinel AI.

---

## Decisions

### [DECISION-001] Bun Monorepo Workspace Strategy
**Date**: 2026-08-22  
**Status**: Accepted  

- **Context**: The project spans shared TypeScript types, an Express backend execution harness, and a Next.js 15 frontend application.
- **Decision**: Adopt native Bun Workspaces with `/shared`, `/backend`, and `/frontend` packages.
- **Rationale**: Bun provides zero-overhead package resolution, fast execution for backend TypeScript, unified package scripts, and shared Zod schemas without compilation bottlenecks.
- **Consequences**: Next.js transpiles `@sentinel/shared` directly via `transpilePackages: ["@sentinel/shared"]`.

---

### [DECISION-002] Supabase PostgreSQL with Prisma ORM
**Date**: 2026-08-22  
**Status**: Accepted  

- **Context**: The evaluation engine stores complex relational data (Agents, Versions, Scenarios, Runs, Traces, Classifications) with high telemetry volume.
- **Decision**: Use Supabase PostgreSQL managed database with Prisma ORM, configuring `url = env("DATABASE_URL")` (connection pooler) and `directUrl = env("DIRECT_URL")` (direct connection for migrations).
- **Rationale**: Prisma provides type-safe query generation, schema migrations, and explicit foreign key cascading (`onDelete: Cascade`) to ensure zero orphaned traces or classifications.
- **Consequences**: Environment variables must supply both `DATABASE_URL` (pooler mode) and `DIRECT_URL` (direct mode).

---

### [DECISION-003] Supabase Auth with SSR & Backend JWT Verification
**Date**: 2026-08-22  
**Status**: Accepted  

- **Context**: User sessions must be securely managed across the Next.js frontend and Express backend.
- **Decision**: Use `@supabase/ssr` on the Next.js frontend for cookie-based session management and JWT verification middleware on the Express backend.
- **Rationale**: Standardizes authentication flow, protects REST endpoints, and scopes all agents and evaluation runs per user.
- **Consequences**: Frontend API client passes `Authorization: Bearer <token>` with every request.

---

### [DECISION-004] Vercel AI SDK with Anthropic Provider for Scenario Gen & Classification
**Date**: 2026-08-22  
**Status**: Accepted  

- **Context**: Scenario generation and LLM-as-a-judge classification require strictly validated JSON schema outputs, while sandbox execution requires dynamic tool interception.
- **Decision**: Use Vercel AI SDK (`ai`, `@ai-sdk/anthropic`, `zod`). Utilize `generateObject` for deterministic schema outputs and `generateText` with mocked tool interceptors for sandbox execution.
- **Rationale**: Eliminates JSON-parsing errors, guarantees Zod validation, and provides unified tool calling APIs.
- **Consequences**: Standardized AI functions across scenarios, guardrails, and classifier modules.

---

*Last updated: 2026-08-22*
