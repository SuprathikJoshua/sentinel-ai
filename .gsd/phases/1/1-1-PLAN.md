---
phase: 1
plan: 1
wave: 1
gap_closure: false
---

# Plan 1.1: Shared Architecture & Monorepo Type Resolution

## Objective
Establish complete TypeScript monorepo workspace linking for `@sentinel/shared`, verifying that shared Zod schemas (ToolDef, AgentConfig, Scenario, Trace, Classification) export cleanly and are consumed without type errors by both backend and frontend.

## Context
- .gsd/SPEC.md
- /shared/types.ts
- /shared/index.ts
- /backend/tsconfig.json
- /frontend/tsconfig.json

## Tasks

<task type="auto">
  <name>Verify and complete shared Zod schemas and type exports</name>
  <files>
    shared/types.ts
    shared/index.ts
    shared/package.json
  </files>
  <action>
    Ensure shared/types.ts contains all 5 canonical Zod schemas (ToolDefSchema, AgentConfigSchema, ScenarioSchema, ScenarioBatchSchema, TraceMessageSchema, TraceSchema, ClassificationSchema) along with inferred TypeScript types. Ensure shared/index.ts exports all types and schemas cleanly.
  </action>
  <verify>
    bun run --cwd shared tsc --noEmit
  </verify>
  <done>
    Shared package passes TypeScript check with zero errors.
  </done>
</task>

## Must-Haves
- [ ] Shared Zod schemas export cleanly from `@sentinel/shared`
- [ ] TypeScript check passes for `/shared`
