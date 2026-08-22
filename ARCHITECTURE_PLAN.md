# Sentinel AI — Architecture Plan & Foundation Specification

**System:** AI Agent Reliability Engine (CI/CD for Autonomous AI Agents)  
**Author:** Staff Full-Stack TypeScript Engineer  
**Status:** Approved Architecture Plan  
**Target Runtimes:** Bun (Backend & Monorepo Tooling), Next.js 15 App Router (Frontend), PostgreSQL (Persistence via Prisma ORM)

---

## 1. Monorepo & Bun Workspace Architecture

We use a lightweight, high-performance monorepo powered natively by **Bun Workspaces**. This eliminates the overhead and configuration drift of external monorepo tools (e.g. Turbo, Nx, Lerna) while providing instantaneous package resolution, zero-build TypeScript execution for the backend, and shared type safety across frontend and backend.

### 1.1 Directory Layout

```
/sentinel-ai
├── package.json              # Monorepo root workspace configuration
├── tsconfig.json             # Root TypeScript base configuration
├── bun.lock                  # Root unified dependency lockfile
├── ARCHITECTURE_PLAN.md      # System architectural specification
├── PROJECT_OVERVIEW.md       # High-level product spec & team contract
│
├── /shared                   # Single source of truth for contracts & schemas
│   ├── package.json          # Package name: "@sentinel/shared"
│   ├── tsconfig.json         # Shared TS config
│   ├── types.ts              # Canonical Zod schemas & inferred TS types
│   └── index.ts              # Barrel export
│
├── /backend                  # Express API + Sandbox Execution + AI modules (Bun)
│   ├── package.json          # Package name: "@sentinel/backend"
│   ├── tsconfig.json         # Backend TS config referencing @sentinel/shared
│   ├── prisma/
│   │   ├── schema.prisma     # PostgreSQL relational schema
│   │   └── migrations/       # Prisma SQL migrations
│   ├── src/
│   │   ├── index.ts          # Express server entrypoint running via Bun
│   │   ├── db/
│   │   │   └── client.ts     # Singleton Prisma Client export with logging
│   │   ├── routes/           # REST API endpoints (/agents, /runs, /scorecard, etc.)
│   │   ├── sandbox/          # Sandbox execution harness & Mock tool executor
│   │   └── ai/               # AI Eng modules (scenario-gen, guardrails, classifier)
│   └── .env                  # Backend environment variables (DATABASE_URL, ANTHROPIC_API_KEY)
│
├── /frontend                 # Next.js 15 App Router + Tailwind CSS UI
│   ├── package.json          # Package name: "@sentinel/frontend"
│   ├── tsconfig.json         # Next.js TS config with path alias to @sentinel/shared
│   ├── next.config.ts        # Next.js config with transpilePackages: ["@sentinel/shared"]
│   ├── tailwind.config.ts    # Tailwind CSS configuration
│   ├── postcss.config.mjs    # PostCSS config
│   ├── src/
│   │   ├── app/              # Next.js App Router (/, /agents, /runs/[id], /scorecard)
│   │   ├── components/       # Reusable UI components (Scorecards, TraceViewer, Charts)
│   │   └── lib/              # API clients and utilities
│   └── .env.local            # Frontend environment variables (NEXT_PUBLIC_API_URL)
│
└── /docs                     # Task specifications and design documentation
```

### 1.2 Bun Workspace Configuration

Root `package.json`:
```json
{
  "name": "sentinel-ai-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "shared",
    "backend",
    "frontend",
    "packages/*"
  ],
  "scripts": {
    "dev:backend": "bun --watch run --cwd backend src/index.ts",
    "dev:frontend": "bun run --cwd frontend dev",
    "dev": "bun --filter '*' dev",
    "build": "bun --filter '*' build",
    "test": "bun test",
    "db:generate": "bun --cwd backend run prisma generate",
    "db:push": "bun --cwd backend run prisma db push",
    "db:migrate": "bun --cwd backend run prisma migrate dev",
    "db:studio": "bun --cwd backend run prisma studio"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "typescript": "^5.7.0"
  }
}
```

---

## 2. PostgreSQL Relational Model & Prisma Specification

The database architecture is designed specifically for regression tracking, multi-turn trace analysis, and adversarial guardrail testing.

### 2.1 Entity Relationship Model

```
┌─────────────────┐
│     Agent       │ 1
│                 │───┐
└─────────────────┘   │
                      │ 1..N
                      ▼
             ┌─────────────────┐
             │  AgentVersion   │ 1
             │                 │───┐
             └─────────────────┘   │
                                   │ 1..N
                                   ▼
                          ┌─────────────────┐
                          │  EvaluationJob  │ 1
                          │                 │───┐
                          └─────────────────┘   │
                                                │ 1..N
                                                ▼
┌─────────────────┐ 1                  ┌─────────────────┐
│    Scenario     │───────────────────▶│       Run       │
│                 │ 1..N               │                 │
└─────────────────┘                    └─────────────────┘
                                         │ 1         │ 1
                                         │           │
                                       1 ▼         1 ▼
                              ┌─────────────┐     ┌────────────────┐
                              │    Trace    │     │ Classification │
                              └─────────────┘     └────────────────┘
```

### 2.2 Relational Entity Definitions

1. **`Agent` (Entity Root)**
   - Represents the logical AI Agent product under test (e.g., "Customer Support Agent", "Finance Refund Ops").
   - Contains high-level metadata, name, domain, created/updated timestamps.
   - Deletion cascades to all child versions and historical runs.

2. **`AgentVersion` (Immutable Agent Configuration Snapshot)**
   - Every modification to an agent's `systemPrompt`, `tools` schema, model, or parameters bumps the version number ($v_1, v_2, \dots, v_n$).
   - Guarantees historical repeatability: an evaluation run from 2 weeks ago is permanently tied to the exact prompt and tool definitions active at that point in time.
   - Stores `tools` as a structured JSON array matching `z.array(ToolDefSchema)`.

3. **`EvaluationJob` (Batch Evaluation Run)**
   - Represents an evaluation test suite execution triggered by a user, webhook, or CI/CD workflow.
   - Tracks execution status (`PENDING`, `RUNNING`, `COMPLETED`, `FAILED`), batch statistics (total scenarios, passed, failed, reliability percentage), and timing metrics.
   - Enables asynchronous parallel execution and progress polling across scenarios.

4. **`Scenario` (Test Cases — Realistic & Adversarial)**
   - Test cases generated dynamically by the Scenario Generation Engine or Guardrail Probe.
   - Stores user prompt, category (`realistic` vs `adversarial`), expected behavior rubric, and targeted risk type (`tool_loop`, `hallucinated_confidence`, `destructive_action`, `goal_drift`, `prompt_injection`, `none`).

5. **`Run` (Individual Scenario Execution)**
   - A single execution of a `Scenario` against an `AgentVersion` inside an `EvaluationJob`.
   - Captures status (`PENDING`, `RUNNING`, `COMPLETED`, `FAILED`, `TIMED_OUT`), execution duration, and error details.

6. **`Trace` (Execution Telemetry & Turn Transcript)**
   - Contains the chronological transcript of messages, LLM thoughts, intercepted tool calls, mock tool inputs, and mock tool outputs.
   - Explicitly records `turnCount` and `hitTurnLimit` (used as an automated heuristic for infinite tool loops).
   - Has a 1-to-1 relationship with `Run` (`runId` is unique).

7. **`Classification` (LLM Judge Evaluation Result)**
   - Stores the output from the Failure Mode Classifier LLM Judge.
   - Records `passFail` (`pass` or `fail`), `failureType` (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`, `none`), confidence score ($[0.0, 1.0]$), and chain-of-thought `reasoning`.
   - Has a 1-to-1 relationship with `Run` (`runId` is unique).

### 2.3 Cascading Deletes & One-to-Many Relationships

- **Explicit Foreign Key Cascades:** Every one-to-many relationship defines `onDelete: Cascade` in Prisma and `ON DELETE CASCADE` in PostgreSQL.
- **Top-Down Cascade Tree:**
  - When an `Agent` is deleted $\rightarrow$ all associated `AgentVersion` and `Scenario` records are deleted.
  - When an `AgentVersion` is deleted $\rightarrow$ all associated `EvaluationJob` and `Run` records are deleted.
  - When an `EvaluationJob` is deleted $\rightarrow$ all child `Run` records are deleted.
  - When a `Run` is deleted $\rightarrow$ its associated `Trace` and `Classification` records are deleted automatically.
- **Zero Orphaned Records:** By enforcing cascading deletes at both the database foreign key constraint layer and the Prisma ORM layer, test traces, large JSON payloads, and classification metrics are never left orphaned.

### 2.4 Indexing Strategy for High-Throughput Analytics

To guarantee fast scorecard generation, version-over-version diffing, and trace queries:
1. **Foreign Key Indices:**
   - `AgentVersion(agentId)`
   - `EvaluationJob(agentVersionId)`
   - `Scenario(agentId)`
   - `Run(evaluationJobId)`, `Run(scenarioId)`, `Run(agentVersionId)`
   - `Trace(runId)` (Unique Index)
   - `Classification(runId)` (Unique Index)
2. **Compound Filter & Aggregation Indices:**
   - `AgentVersion(agentId, version)` — for instantaneous version lookup and comparison.
   - `EvaluationJob(agentVersionId, status)` — for listing recent runs and monitoring active jobs.
   - `Run(evaluationJobId, status)` — for fast job progress aggregation.
   - `Classification(passFail, failureType)` — for rapid failure mode distribution analytics across agent versions.
   - `Scenario(category, riskType)` — for targeted scenario slice retrieval.

---

## 3. Shared Type Contract & Cross-Workspace Strategy

### 3.1 Single Source of Truth (`/shared/types.ts`)

All data shapes are defined once using **Zod** in `/shared/types.ts`. TypeScript types are inferred directly from these schemas:

```typescript
export const ToolDefSchema = z.object({
  name: z.string(),
  description: z.string(),
  inputSchema: z.record(z.string(), z.any()),
});

export const AgentConfigSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  systemPrompt: z.string(),
  tools: z.array(ToolDefSchema),
  domain: z.string(),
  version: z.number().default(1),
});

export const ScenarioSchema = z.object({
  prompt: z.string(),
  category: z.enum(["realistic", "adversarial"]),
  riskType: z.enum([
    "tool_loop",
    "hallucinated_confidence",
    "destructive_action",
    "goal_drift",
    "prompt_injection",
    "none",
  ]),
  expectedBehavior: z.string(),
});

export const ScenarioBatchSchema = z.object({
  scenarios: z.array(ScenarioSchema),
});

export const TraceMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.record(z.string(), z.any()).optional(),
  toolOutput: z.record(z.string(), z.any()).optional(),
  timestamp: z.string(),
});

export const TraceSchema = z.object({
  runId: z.string(),
  messages: z.array(TraceMessageSchema),
  turnCount: z.number(),
  hitTurnLimit: z.boolean(),
});

export const ClassificationSchema = z.object({
  passFail: z.enum(["pass", "fail"]),
  failureType: z.enum([
    "tool_loop",
    "hallucinated_confidence",
    "unsafe_destructive_action",
    "goal_drift",
    "none",
  ]),
  confidence: z.number().min(0).max(1),
  reasoning: z.string(),
});
```

### 3.2 Cross-Workspace Resolution Strategy

1. **Backend Integration (Bun Native):**
   - Bun natively understands TypeScript and workspace symlinks.
   - `backend/package.json` specifies `"dependencies": { "@sentinel/shared": "workspace:*" }`.
   - Backend imports: `import { AgentConfigSchema, type AgentConfig } from "@sentinel/shared"`.
   - Used directly in Express request validation middleware and Vercel AI SDK `generateObject({ schema: ScenarioBatchSchema })` without any build/transpile step.

2. **Frontend Integration (Next.js 15 App Router):**
   - In `frontend/next.config.ts`, we configure `transpilePackages: ["@sentinel/shared"]`.
   - In `frontend/tsconfig.json`, path alias `@sentinel/shared` points directly to `../shared/src/index.ts` or package resolution.
   - Frontend imports: `import { AgentConfigSchema, type Classification } from "@sentinel/shared"`.
   - Ensures Next.js bundles the shared schemas with zero dual-package hazard and identical Zod instance validation.

3. **Prisma JSON Compatibility:**
   - Where Prisma stores flexible JSON payloads (e.g. `AgentVersion.toolsJson`, `Trace.messagesJson`), our database client and repository layers parse/serialize using the shared Zod schemas (`ToolDefSchema.array().parse(record.toolsJson)`), enforcing strict runtime type safety at database boundaries.

---

## 4. Execution Roadmap & Foundation Verification Plan

1. **Step 1: Workspace & Package Scaffolding**
   - Initialize root `package.json` with workspace configuration.
   - Set up `/shared` package with TypeScript config.
   - Set up `/backend` with Express, Prisma, and Bun runtime config.
   - Set up `/frontend` with Next.js 15 App Router and Tailwind CSS.
2. **Step 2: Shared Contract Implementation**
   - Create `/shared/types.ts` with all 5 Zod schemas and inferred types.
   - Verify TypeScript compilation across `/shared`.
3. **Step 3: Database & Prisma Layer**
   - Define PostgreSQL models in `/backend/prisma/schema.prisma`.
   - Generate Prisma Client via `bunx prisma generate`.
   - Create singleton Prisma client at `/backend/src/db/client.ts`.
   - Verify client generation and database connectivity.
