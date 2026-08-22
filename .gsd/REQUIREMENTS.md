# REQUIREMENTS.md — Sentinel AI Requirements Matrix

> **Status**: `IN_PROGRESS`
> **Linked Specification**: [.gsd/SPEC.md](file:///home/x2007Lucky/Desktop/Btech/Hackathons/sentinel-ai/.gsd/SPEC.md)

---

## Requirements Matrix

| ID | Requirement | Category | Source | Status |
|---|---|---|---|---|
| **REQ-01** | Bun monorepo workspace linking `/shared`, `/backend`, and `/frontend` | Infrastructure | SPEC §5.1 | ✅ Complete (Phase 1) |
| **REQ-02** | Shared Zod schemas in `/shared/types.ts` for ToolDef, AgentConfig, Scenario, Trace, Classification, EvaluationJob, Scorecard | Core Contracts | SPEC §6.1 | ✅ Complete (Phase 1) |
| **REQ-03** | Supabase PostgreSQL schema with Prisma 7 ORM (`url = env("DATABASE_URL")` and `directUrl = env("DIRECT_URL")`) with `@prisma/adapter-pg` driver | Persistence | SPEC §5.1, §6.2 | ✅ Complete (Phase 1) |
| **REQ-04** | Supabase Auth SSR on frontend (`@supabase/ssr`) and JWT verification middleware on Express backend | Authentication | SPEC §5.1, §10 | ✅ Complete (Phase 1) |
| **REQ-05** | Scenario Generation Engine: structured LLM synthesis of realistic and adversarial scenarios using Vercel AI SDK (`ai`, `@ai-sdk/anthropic`, `zod`) | AI Module | SPEC §2.1, §7 | ✅ Complete (Phase 2) |
| **REQ-06** | Destructive Action Guardrail Probe generator targeting unauthorized actions, urgency framing, and prompt injection | AI Module | SPEC §2.2, §7 | ✅ Complete (Phase 2) |
| **REQ-07** | Mock Tool Executor returning synthetic schema-aware payloads without external side-effects | Sandbox Engine | SPEC §2.3, §7 | Pending (Phase 3) |
| **REQ-08** | Sandboxed Execution Harness running agent conversation loop with turn cap (max 6 turns) and telemetry trace recording | Sandbox Engine | SPEC §2.3, §7 | Pending (Phase 3) |
| **REQ-09** | LLM-as-a-Judge Failure Classifier evaluating traces into 5 taxonomy categories (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`, `none`) | AI Module | SPEC §2.4, §7 | ✅ Complete (Phase 2) |
| **REQ-10** | Evaluation Job runner orchestrating batch execution of scenarios and storing structured results | Backend API | SPEC §2.5, §8 | Pending (Phase 4) |
| **REQ-11** | REST API endpoints for agent CRUD, version management, scenario generation, evaluation triggering, run detail, scorecard, and diff comparison | Backend API | SPEC §8 | Pending (Phase 4) |
| **REQ-12** | Next.js 15 App Router UI with agent configuration editor, prompt builder, and tool schema validator | Frontend UI | SPEC §9 | Pending (Phase 5) |
| **REQ-13** | Interactive Trace Timeline Viewer displaying multi-turn conversation, tool call inputs, mock outputs, and judge verdict | Frontend UI | SPEC §9 | Pending (Phase 5) |
| **REQ-14** | Filterable evaluation results table and Reliability Scorecard dashboard with Recharts visualizations | Frontend UI | SPEC §9 | Pending (Phase 5) |
| **REQ-15** | Version-over-version regression tracker diffing v1 vs v2 reliability and failure distributions | Scorecard Engine | SPEC §2.5, §9 | Pending (Phase 4/5) |
| **REQ-16** | Markdown report exporter summarizing agent evaluation scorecard, top failure modes, and version history | Reporting | SPEC §8, §9 | Pending (Phase 4/5) |

---

*Last updated: 2026-08-22*
