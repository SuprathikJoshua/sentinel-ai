---
milestone: v1.0
version: 1.0.0
updated: 2026-08-22T20:26:00Z
---

# ROADMAP.md — Sentinel AI Roadmap

> **Milestone Status:** ✅ v1.0 Complete & Fully Verified

---

## Must-Haves (from SPEC)

- [x] Bun monorepo linking `/shared`, `/backend`, and `/frontend` with shared Zod types
- [x] Supabase PostgreSQL database persistence via Prisma (`url = env("DATABASE_URL")` and `directUrl = env("DIRECT_URL")`) with Prisma 7 and `@prisma/adapter-pg`
- [x] Supabase Auth SSR on frontend and JWT verification middleware on Express backend
- [x] AI Scenario Generation Engine producing realistic and adversarial test cases via Vercel AI SDK
- [x] Destructive Action Guardrail Probe generator testing safety under pressure and prompt injection
- [x] Sandboxed Execution Harness with mock tool executor, turn cap loop, and chronological telemetry trace recording
- [x] LLM-as-a-Judge Failure Classifier evaluating traces into 5 taxonomy categories (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`, `none`)
- [x] Backend REST API with async 202 evaluation pipeline, scorecard analytics, version comparison, and markdown export
- [x] Reliability Scorecard & Version-over-Version Regression Tracker with visual Recharts charts
- [x] Next.js 15 interactive frontend (Agent editor, Trace timeline viewer, Scorecard dashboard, Report export)
- [x] End-to-End demo sequence demonstrating $v_1$ vulnerability detection $\to$ $v_2$ guardrail fix $\to$ regression proof on `/compare`

---

## Phases

### Phase 1: Foundation & Shared Architecture
**Status:** ✅ Complete  
**Objective:** Establish monorepo workspace resolution, shared Zod schemas & types, Supabase PostgreSQL schema with Prisma ORM, and Supabase Auth integration.  
**Requirements:** REQ-01, REQ-02, REQ-03, REQ-04  

**Plans:**
- [x] Plan 1.1: Configure Bun monorepo workspace resolution, `/shared` exports, and verify cross-workspace type imports.
- [x] Plan 1.2: Implement Supabase PostgreSQL Prisma 7 schema (`url = env("DATABASE_URL")`, `directUrl = env("DIRECT_URL")`), migrations, and `@prisma/adapter-pg` singleton client.
- [x] Plan 1.3: Configure Supabase Auth with `@supabase/ssr` on frontend and Express JWT verification middleware on backend.

---

### Phase 2: AI Engine Core (Scenarios, Guardrails & Classifier)
**Status:** ✅ Complete  
**Objective:** Build structured AI generation functions using Vercel AI SDK (`ai`, `@ai-sdk/anthropic`, `zod`) for scenario synthesis, destructive action guardrails, and LLM-as-a-judge classification.  
**Requirements:** REQ-05, REQ-06, REQ-09  
**Depends on:** Phase 1  

**Plans:**
- [x] Plan 2.1: Implement `generateScenarios(agentConfig, count)` for realistic and adversarial scenario generation with strict Zod validation.
- [x] Plan 2.2: Implement `runGuardrailProbe(agentConfig)` for targeted high-risk destructive action and prompt injection probing.
- [x] Plan 2.3: Implement `classifyRun(trace, scenario)` with comprehensive rubric prompt, failure taxonomy categorization, and confidence scoring.

---

### Phase 3: Sandboxed Execution Harness & Mock Tool Executor
**Status:** ✅ Complete  
**Objective:** Build safe execution loop running agents with tool calling against synthetic mock tools, capturing chronological telemetry traces, and enforcing turn caps.  
**Requirements:** REQ-07, REQ-08  
**Depends on:** Phase 1, Phase 2  

**Plans:**
- [x] Plan 3.1: Build schema-aware Mock Tool Executor generating realistic synthetic JSON responses.
- [x] Plan 3.2: Implement Sandboxed Execution Loop using `generateText` with intercepted tool calls, turn limits (max 6 turns), and structured `Trace` capture.

---

### Phase 4: Backend REST API & Evaluation Pipeline
**Status:** ✅ Complete  
**Objective:** Expose complete REST API for agent management, version snapshots, evaluation execution, run inspection, scorecard analytics, and report export.  
**Requirements:** REQ-10, REQ-11, REQ-15, REQ-16  
**Depends on:** Phase 2, Phase 3  

**Plans:**
- [x] Plan 4.1: Implement Agent CRUD, version snapshotting, and scenario storage routes (`/api/agents`, `/api/agents/:id/versions`, `/api/agents/:id/scenarios`).
- [x] Plan 4.2: Build batch evaluation orchestration endpoint (`POST /api/agents/:id/run`) executing runs asynchronously and storing traces/classifications.
- [x] Plan 4.3: Implement Scorecard aggregation, version comparison diffing (`GET /api/agents/:id/compare`), and markdown report export (`GET /api/agents/:id/report`).

---

### Phase 5: Frontend UI (Agent Studio, Trace Viewer & Scorecard)
**Status:** ✅ Complete  
**Objective:** Build modern, responsive Next.js 15 App Router web application for agent management, live evaluation, interactive trace timelines, and regression scorecards.  
**Requirements:** REQ-12, REQ-13, REQ-14, REQ-15, REQ-16  
**Depends on:** Phase 4  

**Plans:**
- [x] Plan 5.1: Build Agent Studio & configuration editor with dynamic tool definition builder and prompt editor.
- [x] Plan 5.2: Build Interactive Trace Timeline Viewer (`/runs/[id]`) with collapsible tool invocation payloads and LLM judge verdict badges.
- [x] Plan 5.3: Build Results Table and Reliability Scorecard Dashboard (`/agents/[id]`) with Recharts visualizations, version comparison diffs, and report download.

---

### Phase 6: End-to-End Integration, Demo Scenarios & Verification
**Status:** ✅ Complete  
**Objective:** Perform full end-to-end verification showing live failure detection on v1 vs guardrail pass on v2, seed demo data, and validate against success criteria.  
**Requirements:** REQ-01 through REQ-16  
**Depends on:** Phase 5  

**Plans:**
- [x] Plan 6.1: Seed realistic demo agents (Customer Support Refund Agent) and pre-generated evaluation runs.
- [x] Plan 6.2: Execute complete regression demo workflow ($v_1 \to v_2$) demonstrating automated CI/CD guardrail catching destructive actions and regression tracking.

---

## Progress Summary

| Phase | Status | Plans | Complete |
|---|---|---|---|
| 1. Foundation & Shared Architecture | ✅ | 3/3 | 100% |
| 2. AI Engine Core | ✅ | 3/3 | 100% |
| 3. Sandboxed Execution Harness | ✅ | 2/2 | 100% |
| 4. Backend REST API & Pipeline | ✅ | 3/3 | 100% |
| 5. Frontend UI | ✅ | 3/3 | 100% |
| 6. E2E Integration & Verification | ✅ | 2/2 | 100% |

---

*Last updated: 2026-08-22*
