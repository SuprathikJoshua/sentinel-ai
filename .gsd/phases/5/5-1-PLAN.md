---
phase: 5
plan: 1
wave: 1
gap_closure: false
---

# Plan 5.1: Agent Studio, Setup & Configuration Interface

## Objective
Build the Agent Studio & Configuration interface in Next.js 15 App Router (`/agents`, `/agents/[id]`), featuring agent creation with prompt & dynamic tool definition builder, version history selector, and "Run Evaluation" trigger with live job status polling.

## Context
- .gsd/SPEC.md
- shared/types.ts
- frontend/src/lib/api.ts
- backend/src/routes/agents.ts

## Tasks

<task type="auto">
  <name>Build API helper methods and shared hooks</name>
  <files>
    frontend/src/lib/api.ts
  </files>
  <action>
    Add typed helper functions in `frontend/src/lib/api.ts`:
    - `getAgents()`, `getAgent(id)`, `createAgent(data)`, `createAgentVersion(id, data)`, `deleteAgent(id)`
    - `getScenarios(agentId)`, `createScenario(agentId, data)`, `generateScenarios(agentId, options)`
    - `runEvaluation(agentId, options)`
    - `pollEvaluationJob(jobId, onProgress, intervalMs)`
    - `getRuns(agentId, filters)`, `getRun(id)`
    - `getScorecard(agentId)`, `compareVersions(agentId, v1, v2)`, `getReport(agentId)`
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    API helper functions compiled with zero TypeScript errors.
  </done>
</task>

<task type="auto">
  <name>Build Agent List & Creation Studio</name>
  <files>
    frontend/src/app/agents/page.tsx
    frontend/src/components/CreateAgentModal.tsx
    frontend/src/components/Navbar.tsx
  </files>
  <action>
    1. Create `frontend/src/components/Navbar.tsx` with logo, active links (Agents, Docs, Health Status badge), and dark theme styling.
    2. Create `frontend/src/components/CreateAgentModal.tsx`:
       - Interactive form: Agent name, domain selector (Customer Support, DevOps, Financial Ops, E-Commerce, etc.), system prompt textarea, and dynamic tool builder.
       - JSON tool schema editor with instant validation.
       - Pre-built quickstart templates (e.g. Refund Support Bot, Cloud Server Provisioner).
    3. Create `frontend/src/app/agents/page.tsx`:
       - Grid of agent cards showing name, domain, latest version tag, scenario count, latest reliability score gauge, and status.
       - "New Agent" button triggering modal.
       - Quick actions: "Open Studio", "Run Suite", "View Scorecard".
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    Agent list and creation modal work with zero TypeScript errors.
  </done>
</task>

## Must-Haves
- [ ] Responsive dark theme UI with sleek developer-tool aesthetics
- [ ] Agent creation modal with system prompt and JSON tool builder
- [ ] Typed API helpers with job polling
