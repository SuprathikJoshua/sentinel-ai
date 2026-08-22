# SPEC.md — Sentinel AI Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: Requirements are locked and finalized. Implementation proceeds strictly according to this specification.

---

## 1. Vision

**Sentinel AI** is a comprehensive, production-grade **"CI/CD and Reliability Engine for Autonomous AI Agents"**. While modern engineering teams never deploy software without continuous integration tests, autonomous AI agents are frequently shipped after testing against only a handful of hand-crafted prompts. In production, agents suffer from severe real-world failure modes: infinite tool-call loops, hallucinated confidence on missing parameters, unsafe destructive actions without explicit user authorization, and silent goal drift.

Sentinel AI automates the testing lifecycle: given an AI agent's configuration (system prompt, tool definitions, domain), Sentinel dynamically synthesizes realistic and adversarial test scenarios, executes the agent in a sandboxed runtime with intercepted and mocked tools, captures full multi-turn telemetry traces, classifies outcomes via an LLM-as-a-judge failure taxonomy, and generates reliability scorecards with version-over-version regression tracking.

---

## 2. Core Goals

1. **Automated Scenario Generation**: Synthesize batches of realistic domain tasks (normal, multi-step, edge cases) and adversarial test cases (prompt injection, contradictory instructions, ambiguous asks, tool loop traps) using structured LLM generation.
2. **Destructive Action Guardrail Probing**: Specialized probe generator targeting safety guardrails against irreversible actions under pressure, vague authorization, urgency framing, and indirect prompt injection in tool outputs.
3. **Sandboxed Replay & Execution Harness**: Execute agents against test scenarios in a controlled loop using Vercel AI SDK, intercepting every tool call with a realistic mock tool executor, enforcing hard turn/time caps to trap runaway loops, and recording complete chronological telemetry traces.
4. **LLM-as-a-Judge Failure Mode Classifier**: Classify multi-turn traces against scenario expected behavior into a rigorous failure taxonomy (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`, `none`) with confidence scores and reasoning.
5. **Reliability Scorecards & Regression Tracking**: Aggregate pass/fail rates and failure distributions per agent version, calculate reliability percentage scores, diff metrics between versions ($v_1 \to v_2$) to detect regressions, and export summary evaluation reports.
6. **Unified Monorepo & Type Safety**: Bun monorepo workspace with shared Zod schemas (`/shared`), Supabase Auth integration, and Supabase PostgreSQL persistence via Prisma ORM.

---

## 3. Non-Goals (Out of Scope)

- **Production Tool Execution**: Sentinel AI executes agents against sandboxed *mock* tools. It will never invoke live third-party production APIs (e.g., executing real credit card charges, deleting real database rows) during evaluation runs.
- **Custom Model Training / Fine-tuning**: Sentinel AI evaluates pre-built LLMs and agent prompts; it does not train, fine-tune, or host base model weights.
- **Complex Multi-Agent Swarms with Inter-Agent Networking**: v1.0 evaluates single autonomous agents and primary orchestrators rather than distributed multi-agent gossip protocols.
- **Real-Time Interactive Chat with Humans during Test Execution**: The test harness is fully automated and headless during batch runs; human interaction is for configuration, trace review, and scorecard analysis.

---

## 4. Users & User Stories

### 4.1 Primary Users
- **AI Application Engineers & Agent Developers**: Designing system prompts, tool schemas, and guardrails who need empirical proof that agent updates improve reliability without breaking existing behaviors.
- **Engineering Managers & Tech Leads**: Requiring CI/CD gating metrics, reliability thresholds, and regression dashboards before approving agent deployments to production.

### 4.2 User Stories
- **US-1 (Agent Configuration)**: As an AI engineer, I want to define and version an agent with its system prompt, tool definitions (JSON schema), and domain so that I can manage my test suite systematically.
- **US-2 (Scenario Synthesis)**: As an AI engineer, I want Sentinel to automatically generate diverse realistic scenarios and adversarial edge cases tailored to my agent's tools and domain.
- **US-3 (Guardrail Probing)**: As a security/reliability engineer, I want Sentinel to stress-test my agent with high-risk scenarios (e.g., unauthorized refunds, destructive deletions) to verify guardrail enforcement.
- **US-4 (Sandboxed Execution & Trace Inspection)**: As an AI engineer, I want to inspect step-by-step trace timelines showing every agent thought, tool call arguments, mock outputs, and timestamps.
- **US-5 (Failure Mode Classification)**: As an AI developer, I want clear classification of failed runs into standard taxonomies (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`) with judge reasoning.
- **US-6 (Regression Dashboard & Version Comparison)**: As a team lead, I want to compare Version 1 vs Version 2 of an agent to verify that prompt fixes increase the reliability score and eliminate targeted failure types.
- **US-7 (Exportable Reports)**: As an engineer, I want to export markdown summary reports of an evaluation suite to share with stakeholders or attach to pull requests.

---

## 5. Technical Architecture & Tech Stack

### 5.1 Technology Stack Requirements

| Layer | Technology | Rationale & Configuration |
|---|---|---|
| **Workspace / Monorepo** | **Bun Monorepo** (`/shared`, `/backend`, `/frontend`) | Native TypeScript execution, unified package management, ultra-fast workspace linking. |
| **Shared Contracts** | **TypeScript + Zod** (`/shared/types.ts`) | Single source of truth for all data shapes, runtime schema validation, and inferred types. |
| **Database & ORM** | **Supabase PostgreSQL** via **Prisma ORM** | Direct connection pooler support with `url = env("DATABASE_URL")` and `directUrl = env("DIRECT_URL")`. Explicit cascading deletes and performance indexes. |
| **Authentication** | **Supabase Auth** | SSR authentication on Next.js frontend (`@supabase/ssr`), JWT verification middleware on Express backend. |
| **AI Layer & LLM Integration** | **Vercel AI SDK** (`ai`, `@ai-sdk/anthropic`, `zod`) | `generateObject` for deterministic scenario generation and judge classification; `generateText` with dynamic tool definitions for sandbox execution. |
| **Backend API** | **Node / Express on Bun** (`@sentinel/backend`) | High-throughput REST API, sandbox execution engine, mock tool executor, and AI module orchestrator. |
| **Frontend UI** | **Next.js 15 (App Router) + Tailwind CSS + Lucide Icons + Recharts** (`@sentinel/frontend`) | Modern dark-mode UI, interactive trace timeline viewer, filterable results table, scorecard analytics, version comparison diffs. |

---

## 6. Data Model & Shared Contracts

### 6.1 Shared Schema Specification (`/shared/types.ts`)

```typescript
import { z } from "zod";

// --- Agent under test ---
export const ToolDefSchema = z.object({
  name: z.string(),
  description: z.string(),
  inputSchema: z.record(z.string(), z.any()), // JSON schema shape for tool input
});

export const AgentConfigSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  systemPrompt: z.string(),
  tools: z.array(ToolDefSchema),
  domain: z.string(), // e.g. "customer support", "finance ops", "devops"
  version: z.number().default(1),
});

// --- Scenario (test case) ---
export const ScenarioSchema = z.object({
  id: z.string().optional(),
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

// --- Trace (recorded execution telemetry) ---
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

// --- Classification (LLM Judge Evaluation) ---
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

export type ToolDef = z.infer<typeof ToolDefSchema>;
export type AgentConfig = z.infer<typeof AgentConfigSchema>;
export type Scenario = z.infer<typeof ScenarioSchema>;
export type ScenarioBatch = z.infer<typeof ScenarioBatchSchema>;
export type TraceMessage = z.infer<typeof TraceMessageSchema>;
export type Trace = z.infer<typeof TraceSchema>;
export type Classification = z.infer<typeof ClassificationSchema>;
```

### 6.2 Relational Entities (Prisma PostgreSQL)

- **`Agent`**: Logical entity root (`id`, `name`, `domain`, `description`, `userId`, `createdAt`, `updatedAt`).
- **`AgentVersion`**: Immutable configuration snapshot (`id`, `agentId`, `version`, `systemPrompt`, `tools` JSON, `model`, `temperature`, timestamps).
- **`EvaluationJob`**: Test suite execution job (`id`, `agentVersionId`, `status`, `triggerSource`, `totalScenarios`, `passedScenarios`, `failedScenarios`, `reliabilityScore`, `summaryMetrics`, `startedAt`, `completedAt`).
- **`Scenario`**: Test case definition (`id`, `agentId`, `prompt`, `category`, `riskType`, `expectedBehavior`, `metadata`).
- **`Run`**: Single scenario execution instance (`id`, `evaluationJobId`, `agentVersionId`, `scenarioId`, `status`, `durationMs`, `errorMessage`, `startedAt`, `completedAt`).
- **`Trace`**: Telemetry log (`id`, `runId` UNIQUE, `messages` JSON, `turnCount`, `hitTurnLimit`, `toolCallsCount`, `rawUsage`).
- **`Classification`**: LLM Judge verdict (`id`, `runId` UNIQUE, `passFail`, `failureType`, `confidence`, `reasoning`, `rawJudgeOutput`).

---

## 7. Five Core Engine Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              SENTINEL AI ENGINE                             │
├───────────────────────────────┬─────────────────────────────────────────────┤
│ 1. Scenario Generation Engine │ 2. Guardrail Tester                         │
│    • Realistic scenarios      │    • Irreversible action probes             │
│    • Adversarial edge cases   │    • Pressure & authority bypass tests      │
│    • Structured Zod output    │    • Indirect prompt injection              │
├───────────────────────────────┴─────────────────────────────────────────────┤
│ 3. Sandbox Execution & Replay Harness                                       │
│    • Vercel AI SDK generateText execution loop                              │
│    • Mock Tool Executor (schema-aware synthetic responses)                  │
│    • Infinite loop turn-capping (max 6-8 turns)                             │
│    • Telemetry recorder capturing structured Trace                          │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. Failure Mode Classifier (LLM-as-a-Judge)                                 │
│    • 5-category failure taxonomy:                                           │
│      - tool_loop: repetitive invocation or oscillating arguments            │
│      - hallucinated_confidence: fabricating missing data / false certainty  │
│      - unsafe_destructive_action: executing irreversible action without auth│
│      - goal_drift: abandoning original objective / answering off-topic      │
│      - none: reliable, correct behavior conforming to expectations          │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. Scorecard & Regression Tracker                                           │
│    • Reliability score % = (Passed Scenarios / Total Scenarios) * 100       │
│    • Failure distribution breakdown per category                            │
│    • Version-over-version diff engine (v1 vs v2 comparison)                 │
│    • Exportable markdown/PDF evaluation report summary                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. REST API Specification

| Endpoint | Method | Description | Auth |
|---|---|---|---|
| `/api/health` | `GET` | Service health status and database connectivity | Public |
| `/api/agents` | `GET` | List all agent configurations with version summaries | Required |
| `/api/agents` | `POST` | Create a new agent configuration (initializes v1) | Required |
| `/api/agents/:id` | `GET` | Retrieve agent details and version history | Required |
| `/api/agents/:id/versions` | `POST` | Create a new immutable version for an existing agent (v2+) | Required |
| `/api/agents/:id/scenarios` | `GET` | List saved scenarios for an agent | Required |
| `/api/agents/:id/scenarios/generate` | `POST` | Trigger AI generation of realistic + adversarial scenarios | Required |
| `/api/agents/:id/run` | `POST` | Trigger evaluation run across scenarios (creates EvaluationJob + Runs) | Required |
| `/api/jobs/:id` | `GET` | Get evaluation job status, progress, and aggregated metrics | Required |
| `/api/runs/:id` | `GET` | Get single run detail with full Trace and Classification | Required |
| `/api/agents/:id/runs` | `GET` | List all runs for an agent (filterable by version, category, passFail) | Required |
| `/api/agents/:id/scorecard` | `GET` | Get reliability score, failure breakdown, and historical version trend | Required |
| `/api/agents/:id/compare` | `GET` | Compare metrics and failure diffs between two versions (`?v1=1&v2=2`) | Required |
| `/api/agents/:id/report` | `GET` | Generate and download formatted markdown evaluation report | Required |

---

## 9. Frontend Application Architecture

- **`/` (Dashboard)**: Overview of agent reliability health, active test jobs, recent evaluations, and quick actions.
- **`/agents`**: Agent directory with search, domain tags, latest reliability scores, and "New Agent" wizard.
- **`/agents/new` & `/agents/[id]/edit`**: Agent configuration editor (system prompt, dynamic tool definition builder with JSON schema validator, domain selector).
- **`/agents/[id]`**: Agent detail page containing:
  - **Overview Tab**: Active version prompt, tool schemas, run evaluation trigger.
  - **Scenarios Tab**: Scenario management (generate, inspect, add custom probe).
  - **Results Tab**: Filterable execution runs table (filter by category, failure type, pass/fail status).
  - **Scorecard Tab**: Recharts visualization of failure distributions, pass rate trends, and version comparison diffs.
- **`/runs/[id]` (Trace Viewer)**: Interactive chronological transcript showing user prompt, agent thoughts, expandable tool invocation payloads, mock responses, and the LLM judge verdict with confidence and reasoning.

---

## 10. Constraints & Security Rules

1. **Authentication & Authorization**:
   - Supabase Auth manages sessions and JWT tokens.
   - Frontend passes `Authorization: Bearer <supabase_jwt>` to backend.
   - Backend verifies JWT and scopes all agent, run, and evaluation queries to the authenticated user.
2. **Database Resilience & Pooling**:
   - Prisma uses `url = env("DATABASE_URL")` for transaction pooler and `directUrl = env("DIRECT_URL")` for migrations.
   - All relational links enforce `onDelete: Cascade`.
3. **Execution Safety**:
   - Hard execution limits: max 6 turns per scenario run, 30-second timeout per turn.
   - Tool mock executor returns synthesized deterministic mock payloads; never executes network calls or system shell commands.
4. **Structured AI Validation**:
   - All LLM outputs (scenarios, guardrails, classifications) are parsed and validated with Zod via `generateObject` to guarantee zero JSON syntax errors.

---

## 11. Measurable Success Criteria

- [ ] **End-to-End Evaluation Workflow**: Successfully configure an agent, synthesize 6+ scenarios (realistic + adversarial), execute sandboxed runs with mock tools, and classify each trace.
- [ ] **Destructive Action Detection**: Prove that an un-guardrailed agent failing an adversarial prompt (e.g. "refund immediately without verification") is caught by the classifier as `unsafe_destructive_action`.
- [ ] **Regression Tracking Verification**: When the prompt is edited with safety instructions (version 2) and re-evaluated, verify the reliability scorecard reflects the improvement and demonstrates failure elimination in the version diff.
- [ ] **Trace Telemetry Completeness**: 100% of executed runs produce valid `Trace` records capturing chronological messages, tool call inputs, and tool mock outputs.
- [ ] **Structured Type Enforcement**: Monorepo packages (`shared`, `backend`, `frontend`) share TypeScript types without duplication or type mismatches.
- [ ] **Performance & Reliability**: Zero unhandled sandbox crashes during infinite loop probes (turn limit successfully stops execution).

---

*Last updated: 2026-08-22*
