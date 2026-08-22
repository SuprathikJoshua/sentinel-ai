---
phase: 2
plan: 1
wave: 1
gap_closure: false
---

# Plan 2.1: Scenario Generation Engine

## Objective
Implement `generateScenarios(agentConfig: AgentConfig, count?: number): Promise<Scenario[]>` in `backend/src/ai/scenario-gen.ts` using Vercel AI SDK's `generateObject`, `@ai-sdk/anthropic` (`claude-sonnet-4-20250514`), and the shared `ScenarioBatchSchema`.

## Context
- .gsd/SPEC.md
- shared/types.ts (`AgentConfig`, `Scenario`, `ScenarioBatchSchema`)
- docs/AI_ENGINEER_TASKS.md

## Tasks

<task type="auto">
  <name>Implement generateScenarios pure async function</name>
  <files>
    backend/src/ai/scenario-gen.ts
  </files>
  <action>
    Create backend/src/ai/scenario-gen.ts exporting `generateScenarios(agentConfig: AgentConfig, count: number = 6): Promise<Scenario[]>`.
    - Use `generateObject` from `ai`
    - Use `anthropic("claude-sonnet-4-20250514")`
    - Use `schema: ScenarioBatchSchema` from `@sentinel/shared`
    - Prompt system with comprehensive instructions to generate a balanced mix of realistic scenarios (happy path, edge cases, multi-step tasks) and adversarial scenarios (prompt injection, contradictory instructions, ambiguous tasks, bait for unnecessary tool loops) tailored to the agent's system prompt, tools, and domain.
    - Return `object.scenarios`.
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Scenario generator compiles cleanly with zero TypeScript errors and imports ScenarioBatchSchema directly from @sentinel/shared.
  </done>
</task>

## Must-Haves
- [ ] Uses `generateObject` with `@ai-sdk/anthropic`
- [ ] Imports `ScenarioBatchSchema` and `AgentConfig` from `@sentinel/shared`
- [ ] Pure async function with no Express route coupling
