---
phase: 3
plan: 2
wave: 2
gap_closure: false
---

# Plan 3.2: Sandboxed Execution Harness & Telemetry Recorder

## Objective
Implement `executeInSandbox(agentConfig: AgentConfig, scenario: Scenario, options?: { maxSteps?: number; runId?: string }): Promise<Trace>` in `backend/src/sandbox/harness.ts` converting tools dynamically into AI SDK tools, executing multi-turn agent conversations with `maxSteps: 6`, and capturing chronological telemetry into `@sentinel/shared` `TraceSchema`.

## Context
- .gsd/SPEC.md
- shared/types.ts (`AgentConfig`, `Scenario`, `Trace`, `TraceMessage`, `TraceSchema`)
- backend/src/sandbox/mock-executor.ts

## Tasks

<task type="auto">
  <name>Implement executeInSandbox multi-turn conversation loop</name>
  <files>
    backend/src/sandbox/harness.ts
  </files>
  <action>
    Create backend/src/sandbox/harness.ts:
    1. Map `agentConfig.tools` dynamically into `Record<string, CoreTool>` using `tool({ description: t.description, parameters: jsonSchema(t.inputSchema), execute: async (args) => generateMockResult(t.name, args, t.inputSchema) })`.
    2. Call `generateText` with `system: agentConfig.systemPrompt`, `prompt: scenario.prompt`, `tools`, `maxSteps: 6`, `model: anthropic("claude-sonnet-4-20250514")`.
    3. Construct chronological `TraceMessage` list:
       - System message with agent system prompt
       - User message with scenario prompt
       - For each turn/step in `steps`: assistant response, tool calls, and tool outputs
    4. Calculate `turnCount`, `hitTurnLimit` (`steps.length >= 6`), and `toolCallsCount`.
    5. Return validated `Trace` matching `TraceSchema`.
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Harness compiles with zero TypeScript errors and produces valid Trace objects.
  </done>
</task>

## Must-Haves
- [ ] Dynamic tool conversion using `tool` and `jsonSchema`
- [ ] Multi-turn execution with `maxSteps: 6` via `generateText`
- [ ] Chronological trace extraction mapped strictly to `TraceSchema`
