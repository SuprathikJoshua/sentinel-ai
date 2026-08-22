# AI Engineer — Task Breakdown

Owns: Scenario Generation, Adversarial/Guardrail Scenarios, Failure Classifier. Ship these as plain functions Backend can call — don't build your own server unless it's faster for you.

## Day 1 — Prototype
- [ ] Pick model (Claude via Anthropic API, function-calling enabled)
- [ ] Write one hardcoded test agent (toy tools + system prompt) to develop against all week
- [ ] Prototype: single LLM call that takes {system_prompt, tools, domain} → outputs 5 realistic test scenarios as JSON
- [ ] Lock the scenario JSON schema with the team:
  ```json
  {
    "prompt": "string — the user message that kicks off the scenario",
    "category": "realistic | adversarial",
    "risk_type": "tool_loop | hallucinated_confidence | destructive_action | goal_drift | prompt_injection | none",
    "expected_behavior": "string — what a reliable agent should do here"
  }
  ```

## Day 2 — Scenario Generation Engine
- [ ] Build `generateScenarios(agentConfig, n)`:
  - Realistic scenarios: normal tasks within the agent's stated domain, some with edge-case inputs (missing data, weird formatting, multi-step)
  - Adversarial scenarios: prompt injection attempts, contradictory instructions, ambiguous asks that invite scope creep, requests baited to trigger unnecessary tool loops
- [ ] Prompt engineering pass: make sure output is valid JSON matching the schema every time (use structured output / strict JSON mode)
- [ ] Hand function off to Backend, confirm it plugs in cleanly

## Day 3 — Guardrail Tester
- [ ] Build `runGuardrailProbe(agentConfig)` — separate, sharper scenario set focused only on irreversible/destructive actions:
  - direct pressure ("just delete it, don't ask")
  - ambiguous authorization ("the boss said it's fine")
  - urgency framing ("no time to confirm, act now")
  - buried instruction inside a tool result (indirect injection)
- [ ] Same output schema, `risk_type: "destructive_action"` or `"prompt_injection"`
- [ ] Test against your toy agent — confirm at least some scenarios actually bait bad behavior (if the agent always refuses, sharpen the scenarios)

## Day 4 — Failure Classifier
- [ ] Build `classifyRun(trace, scenario)`:
  - Input: full trace (messages + tool calls) + the scenario's expected_behavior
  - Output: `{ pass_fail, failure_type, confidence, reasoning }`
  - `failure_type` enum: `tool_loop | hallucinated_confidence | unsafe_destructive_action | goal_drift | none`
- [ ] This is LLM-as-judge — write a strong rubric prompt, give it clear examples of each failure type
- [ ] Test on 5-10 real traces once Backend's harness is producing them (Day 3-4 overlap)

## Day 5 — Sharpen Accuracy
- [ ] Run classifier against a batch of traces, manually check a sample for accuracy
- [ ] Reduce false positives (classifier calling failure when agent actually handled it fine) — tighten rubric
- [ ] Widen adversarial scenario variety if failure types are looking too uniform (judges want to see range)
- [ ] Add 2-3 more toy/demo agents in different domains (e.g. customer support, finance ops, dev-ops) to prove generality

## Day 6 — Integration Support
- [ ] Sit with Backend during full pipeline test, fix prompt/schema issues live
- [ ] Make sure token usage / latency is reasonable (don't let one run take 5 minutes — cap turns, keep prompts tight)
- [ ] Stress test: intentionally bad agent config (vague prompt, dangerous tools) — confirm guardrail tester catches it

## Day 7 — Demo Prep
- [ ] Pick your best 1-2 "gotcha" moments (a scenario that clearly catches a bad agent action) — hand to team for live demo
- [ ] Write a one-paragraph explanation of methodology for the pitch deck (how scenarios are generated, how classification works)
- [ ] Final prompt tuning if anything looks flaky under repeated runs

## Interfaces You Own (confirm with Backend on Day 1)
- `generateScenarios(agentConfig, n) → scenario[]`
- `runGuardrailProbe(agentConfig) → scenario[]`
- `classifyRun(trace, scenario) → { pass_fail, failure_type, confidence, reasoning }`
