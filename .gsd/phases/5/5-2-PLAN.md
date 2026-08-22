---
phase: 5
plan: 2
wave: 2
gap_closure: false
---

# Plan 5.2: Interactive Trace Timeline Viewer & Execution Drawer

## Objective
Implement the interactive Trace Timeline Viewer and slide-over execution drawer, displaying the chronological multi-turn agent conversation, collapsible tool payloads and mock responses, and the LLM-as-a-judge classification verdict with confidence gauge and reasoning.

## Context
- .gsd/SPEC.md
- shared/types.ts (`Trace`, `Classification`, `Run`)
- frontend/src/components/TraceViewer.tsx
- frontend/src/app/agents/[id]/page.tsx

## Tasks

<task type="auto">
  <name>Build Trace Timeline Viewer Component</name>
  <files>
    frontend/src/components/TraceViewer.tsx
    frontend/src/components/VerdictBadge.tsx
  </files>
  <action>
    1. Create `frontend/src/components/VerdictBadge.tsx`:
       - High-visibility pill badge for Pass / Failure Taxonomy (`tool_loop`, `hallucinated_confidence`, `unsafe_destructive_action`, `goal_drift`).
       - Emerald for PASS, Crimson for DESTRUCTIVE ACTION, Amber for TOOL LOOP / HALLUCINATION, Indigo for GOAL DRIFT.
    2. Create `frontend/src/components/TraceViewer.tsx`:
       - Header banner with Pass/Fail classification, judge confidence meter (0-100%), and expandable judge reasoning blockquote.
       - Chronological turn list with distinctive avatars and styles:
         - `user` (Cyan avatar, user prompt bubble)
         - `assistant` (Purple avatar, assistant message text)
         - `tool` (Amber avatar, monospaced function name, collapsible input arguments JSON, and mocked execution return JSON)
       - Telemetry stats chip bar: Turn Count (with turn cap indicator), Tool Calls Count, Latency duration ms.
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    Trace viewer component renders chronological conversation history and judge verdict.
  </done>
</task>

<task type="auto">
  <name>Build Agent Detail & Runs Management Page</name>
  <files>
    frontend/src/app/agents/[id]/page.tsx
  </files>
  <action>
    In `frontend/src/app/agents/[id]/page.tsx`:
    - Agent header with name, domain, version selector dropdown (v1, v2...), "Run Evaluation" button with live spinner/progress bar, and "New Version" snapshot trigger.
    - Tab navigation:
      1. **Overview & Runs**: List of test runs with prompt preview, scenario category, risk type, duration, verdict badge, and "Inspect Trace" button opening slide-over Trace drawer.
      2. **Configuration & Tools**: System prompt viewer, active tools schema viewer, and "Create Next Version" form.
      3. **Test Scenarios**: Table of active scenarios with category badges, expected behaviors, "Add Scenario" modal, and "Generate AI Scenarios" trigger.
      4. **Scorecard & Analytics**: Embedded reliability metrics and failure breakdown.
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    Agent Detail page with slide-over trace drawer and live evaluation execution compiles cleanly.
  </done>
</task>

## Must-Haves
- [ ] Chronological trace message timeline with tool input/output folding
- [ ] LLM judge classification banner with confidence gauge and reasoning
- [ ] Agent detail tabs with live evaluation execution and scenario management
