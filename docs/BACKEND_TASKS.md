# Backend — Task Breakdown

Stack: Node/Express + Postgres (or SQLite if faster to set up). Owns the sandbox, storage, and API. Calls into AI Engineer's modules as functions/services, doesn't own prompt logic itself.

## Day 1 — Foundation
- [ ] Repo + Express skeleton, basic health check route
- [ ] DB schema:
  - `agents` (id, name, system_prompt, tools_json, domain, version, created_at)
  - `scenarios` (id, agent_id, prompt, category [realistic/adversarial], expected_behavior, risk_type)
  - `runs` (id, agent_id, scenario_id, status, started_at, finished_at)
  - `traces` (id, run_id, messages_json, tool_calls_json)
  - `classifications` (id, run_id, failure_type, confidence, reasoning, pass_fail)
- [ ] `POST /agents` + `GET /agents` + `GET /agents/:id` — basic CRUD, no logic yet

## Day 2 — Mock Tool Executor
- [ ] Build generic mock tool executor: given a tool schema (name, input shape) + a call request, return a plausible fake response (can literally be templated/random stub data — or ask AI Eng for a small LLM-generated stub if time allows)
- [ ] Log every tool call (name, input, output, timestamp) — this becomes part of the trace
- [ ] Unit test the executor against 2-3 fake tool schemas

## Day 3 — Sandbox Execution Harness
- [ ] Build the run loop: given agent config + scenario, run a conversation:
  1. Send system prompt + scenario input to the agent (agent = LLM call using agent's own system prompt/tools — this is "the agent under test")
  2. Intercept tool calls → route to mock executor → feed result back to agent
  3. Loop until agent finishes or hits a turn/time limit (cap it — this catches tool-loop failures for free)
  4. Save full transcript to `traces` table
- [ ] `POST /agents/:id/run` — kicks off harness for all scenarios tied to that agent, creates `run` rows with status `pending` → `running` → `done`
- [ ] `GET /runs/:id` — returns trace + classification

## Day 4 — Wire In Classifier
- [ ] Take AI Engineer's classifier function, call it after each run completes
- [ ] Store result in `classifications` table (failure_type, confidence, reasoning, pass_fail)
- [ ] `GET /agents/:id/runs` — list all runs + classification summary for an agent

## Day 5 — Scorecard + Regression
- [ ] `GET /agents/:id/scorecard`:
  - reliability score = pass rate %
  - failure type breakdown (counts per category)
  - pass rate per version (group by `agents.version`)
- [ ] Add version bump support: re-running same agent name with edited config = new version, keep history
- [ ] `GET /agents/:id/compare?v1=X&v2=Y` — diff pass rate + failure types between two versions

## Day 6 — Integration + Hardening
- [ ] Full pipeline smoke test with real agent configs from AI Engineer
- [ ] Add turn/time caps + error handling so a broken agent can't hang the whole run
- [ ] Rate-limit / queue runs if evaluating many scenarios back to back (simple in-process queue is fine)
- [ ] Fix bugs surfaced by Fullstack integration

## Day 7 — Export + Demo Support
- [ ] `GET /agents/:id/report` — generate markdown or PDF summary (score, top failure types, sample failed scenario, version history) — markdown is fine, don't over-engineer PDF
- [ ] Seed script: create 1-2 demo agents with pre-run results so Fullstack has data to demo
- [ ] Final bug bash, deploy/run reliably for demo (localhost is fine, just make sure it doesn't crash)

## Interfaces You Depend On (confirm with AI Engineer on Day 1)
- `generateScenarios(agentConfig) → scenario[]`
- `classifyRun(trace, scenario) → { failure_type, confidence, reasoning, pass_fail }`
- `runGuardrailProbe(agentConfig) → scenario[]` (adversarial destructive-action scenarios, same shape as generateScenarios)
