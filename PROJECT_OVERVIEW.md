# AI Agent Evaluation and Reliability Engine — Project Overview

> This document is a self-contained spec. Anyone (human or LLM) reading only this file should understand the problem, the solution, the architecture, the data model, and how the three team members' work fits together.

## 1. Problem Statement

Autonomous AI agents fail on a majority of real-world tasks in practice (~70% cited failure rate), but teams ship them after testing against only a handful of hand-written prompts. Real failure modes — tool-call loops, hallucinated confidence, unsafe destructive actions, silent goal drift — only surface after deployment on live data.

## 2. Solution Summary

Build a platform that acts as **"CI/CD for AI agents"**: given an agent's config (system prompt + tool definitions + domain), the platform automatically:
1. Generates realistic and adversarial test scenarios.
2. Runs the agent against each scenario in a sandbox with mocked tools, capturing a full trace.
3. Classifies each run's outcome into a failure taxonomy using an LLM judge.
4. Aggregates results into a reliability scorecard and tracks it across agent versions (regression detection).

## 3. Architecture — Five Components

| # | Component | Maps to problem statement direction | Owner |
|---|---|---|---|
| 1 | Scenario Generation Engine | Scenario Generation Engine | AI Engineer |
| 2 | Guardrail Tester | Destructive Action Guardrail Tester | AI Engineer |
| 3 | Sandbox Execution Harness | Sandboxed Execution and Replay Harness | Backend |
| 4 | Failure Mode Classifier | Failure Mode Classifier | AI Engineer |
| 5 | Scorecard + Regression Tracker | Reliability Scorecard and Regression Tracker | Backend + Fullstack |

## 4. Tech Stack

- **Language:** TypeScript everywhere (frontend, backend, AI module) — one language, shared types, no context switching.
- **Frontend:** Next.js + Tailwind + Recharts (for scorecard charts)
- **Backend:** Express + Postgres (or SQLite if faster to bootstrap)
- **AI layer:** Vercel AI SDK (`ai` package) + `@ai-sdk/openai` provider (OpenRouter) + Zod
  - `generateObject` — forces LLM output into a validated schema (used for scenario generation and classification — eliminates JSON-parsing failures)
  - `generateText` with `tools` — used to run the agent-under-test with tool calling, and to intercept tool calls for mocking
- **Validation/shared contracts:** Zod schemas in a shared package, imported by frontend, backend, and AI module alike

## 5. Data Model

All three team members import these same types from `/shared/types.ts`. This is the single source of truth — do not redefine these shapes locally.

```typescript
// /shared/types.ts

import { z } from "zod";

// --- Agent under test ---
export const ToolDefSchema = z.object({
  name: z.string(),
  description: z.string(),
  inputSchema: z.record(z.any()), // JSON schema-ish shape for the tool's input
});

export const AgentConfigSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  systemPrompt: z.string(),
  tools: z.array(ToolDefSchema),
  domain: z.string(), // e.g. "customer support", "finance ops"
  version: z.number().default(1),
});

// --- Scenario (test case) ---
export const ScenarioSchema = z.object({
  prompt: z.string(), // the user message that kicks off the scenario
  category: z.enum(["realistic", "adversarial"]),
  riskType: z.enum([
    "tool_loop",
    "hallucinated_confidence",
    "destructive_action",
    "goal_drift",
    "prompt_injection",
    "none",
  ]),
  expectedBehavior: z.string(), // what a reliable agent should do here
});

export const ScenarioBatchSchema = z.object({
  scenarios: z.array(ScenarioSchema),
});

// --- Trace (recorded run) ---
export const TraceMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.record(z.any()).optional(),
  toolOutput: z.record(z.any()).optional(),
  timestamp: z.string(),
});

export const TraceSchema = z.object({
  runId: z.string(),
  messages: z.array(TraceMessageSchema),
  turnCount: z.number(),
  hitTurnLimit: z.boolean(),
});

// --- Classification (judge output) ---
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
export type Trace = z.infer<typeof TraceSchema>;
export type Classification = z.infer<typeof ClassificationSchema>;
```

## 6. End-to-End Flow

1. User submits an agent config (system prompt, tools, domain) via the frontend form.
2. Backend stores it as `agents` row (version 1).
3. User clicks "Run Evaluation" → Backend calls AI Engineer's `generateScenarios()` and `runGuardrailProbe()` to get a batch of scenarios.
4. Backend's Sandbox Harness runs the agent-under-test against each scenario:
   - Calls the agent (via Vercel AI SDK `generateText`, using the agent's own system prompt + tools).
   - Any tool call the agent makes is intercepted and routed to the Mock Tool Executor, which returns a plausible fake result and logs the call.
   - Loop continues until the agent finishes or hits a turn cap (turn cap catches infinite tool-loop failures automatically).
   - Full conversation is saved as a `Trace`.
5. Backend calls AI Engineer's `classifyRun(trace, scenario)` → gets back a `Classification`.
6. Results (`trace` + `classification`) are stored per run.
7. Frontend displays: trace viewer (per run), results table (per agent, filterable by failure type), and scorecard (reliability %, failure distribution, version-over-version comparison).
8. If the user edits the agent config and re-runs, it becomes version 2 — the scorecard shows a regression/improvement diff against version 1.

## 7. Team Ownership

- **AI Engineer** — owns everything that calls the LLM to reason about agents: scenario generation, adversarial/guardrail scenario generation, and the failure classifier. Ships plain async functions; does not need to build a server.
- **Backend** — owns the database, the sandbox execution loop, the mock tool executor, and the REST API. Imports the AI Engineer's functions directly (same repo, same language — no network hop needed internally).
- **Fullstack** — owns the Next.js frontend: config upload form, trace viewer, results table, and scorecard dashboard. Talks to Backend only via the REST API contract below.

## 8. API Contract (Backend exposes, Fullstack consumes)

- `POST /agents` — create agent config
- `GET /agents` — list agents
- `GET /agents/:id` — agent detail
- `POST /agents/:id/run` — trigger a full evaluation run (generates scenarios, executes, classifies)
- `GET /runs/:id` — single run: trace + classification
- `GET /agents/:id/runs` — all runs for an agent, with classification summary
- `GET /agents/:id/scorecard` — reliability score, failure-type breakdown, pass rate by version
- `GET /agents/:id/compare?v1=X&v2=Y` — diff between two versions
- `GET /agents/:id/report` — export markdown/PDF summary report

## 9. Suggested Repo Structure

```
/frontend              # Next.js app (Fullstack)
/backend
  /src
    /routes             # Express routes (Backend)
    /db                 # schema + queries (Backend)
    /sandbox            # execution harness + mock tool executor (Backend)
    /ai                 # scenario-gen.ts, guardrail.ts, classifier.ts (AI Engineer)
  package.json
/shared
  types.ts              # Zod schemas — imported by frontend, backend, and /backend/src/ai
```

## 10. 7-Day Timeline (Summary)

- **Day 1:** Skeletons for all three layers, lock shared types.
- **Day 2:** Scenario Generation Engine + mock tool executor + config upload UI wired to backend.
- **Day 3:** Sandbox Execution Harness + Guardrail Tester + trace viewer UI.
- **Day 4:** Failure Classifier wired in end-to-end + results table UI.
- **Day 5:** Scorecard + regression tracker (backend + charts).
- **Day 6:** Full integration test across all real components, bug fixing.
- **Day 7:** Report export, demo seed data, polish, rehearsal.

(Full day-by-day task breakdown per role lives in `FULLSTACK_TASKS.md`, `BACKEND_TASKS.md`, `AI_ENGINEER_TASKS.md`.)

## 11. Demo Narrative (what judges should see)

1. Upload an agent config (e.g. a customer-support agent with a `refund_order` tool).
2. Trigger evaluation — show scenarios being generated live (realistic + adversarial).
3. Open one adversarial trace where the agent nearly performs an unsafe destructive action ("just refund it, don't check") — show the guardrail scenario catching it in the classification.
4. Show the scorecard: reliability %, failure-type breakdown chart.
5. Edit the agent's system prompt to add a safety instruction, re-run as version 2.
6. Show the version comparison: reliability score improved, `unsafe_destructive_action` failures dropped — proving the regression tracker works, framed like a CI pipeline check.
