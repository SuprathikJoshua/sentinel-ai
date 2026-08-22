---
phase: 3
plan: 1
wave: 1
gap_closure: false
---

# Plan 3.1: Schema-Aware Mock Tool Executor

## Objective
Implement `generateMockResult(toolName: string, args: any, schema: any): Promise<Record<string, any>>` in `backend/src/sandbox/mock-executor.ts` using Vercel AI SDK with Claude Haiku to dynamically synthesize realistic, plausible mock tool outputs based on input arguments and tool metadata.

## Context
- .gsd/SPEC.md
- shared/types.ts (`ToolDef`)
- docs/BACKEND_TASKS.md

## Tasks

<task type="auto">
  <name>Implement generateMockResult</name>
  <files>
    backend/src/sandbox/mock-executor.ts
  </files>
  <action>
    Create backend/src/sandbox/mock-executor.ts exporting `generateMockResult(toolName: string, args: any, schema?: any): Promise<Record<string, any>>`.
    - Use Vercel AI SDK `generateObject` with `anthropic("claude-3-5-haiku-20241022")` and a flexible JSON object schema (`z.record(z.string(), z.any())`).
    - Instruct the model to return plausible, domain-appropriate mock response data for the tool call (e.g. for `lookup_order` return order status, items, amounts; for `refund_order` return confirmation id, status "PROCESSED", timestamp).
    - Implement a safe fallback generator to guarantee instantaneous return without network delays if needed.
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Mock tool executor compiles cleanly with zero TypeScript errors.
  </done>
</task>

## Must-Haves
- [ ] Exports `generateMockResult(toolName: string, args: any, schema: any)`
- [ ] Synthesizes plausible mock payloads using AI SDK with fast Haiku model
- [ ] Has fallback to guarantee deterministic resilience
