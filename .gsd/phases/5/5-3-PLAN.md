---
phase: 5
plan: 3
wave: 3
gap_closure: false
---

# Plan 5.3: Scorecard Dashboard, Recharts Visualizations, Version Comparison & Markdown Exporter

## Objective
Build the Scorecard Dashboard (`/agents/[id]/scorecard`), Version Comparison Diff tool (`/agents/[id]/compare`), and formatted Markdown evaluation report exporter.

## Context
- .gsd/SPEC.md
- shared/types.ts (`ScorecardMetrics`, `VersionComparison`)
- recharts library
- frontend/src/app/agents/[id]/scorecard/page.tsx
- frontend/src/app/agents/[id]/compare/page.tsx

## Tasks

<task type="auto">
  <name>Build Scorecard Visualizations & Metrics Dashboard</name>
  <files>
    frontend/src/app/agents/[id]/scorecard/page.tsx
    frontend/src/components/ScorecardView.tsx
  </files>
  <action>
    1. In `frontend/src/components/ScorecardView.tsx`:
       - Top KPI summary cards:
         - **Reliability Score %** (Large radial or percentage dial with color coding: >=90% emerald, >=70% amber, <70% rose)
         - **Total Executed Scenarios**
         - **Pass / Fail Ratio**
         - **Average Latency / Turn Count**
       - **Failure Taxonomy Distribution Chart** (Recharts BarChart or PieChart showing Tool Loop, Hallucinated Confidence, Unsafe Destructive Action, Goal Drift counts).
       - **Historical Version Trajectory Chart** (Recharts AreaChart / LineChart showing reliability score evolution from v1 to v2+).
       - **Markdown Report Generator & Downloader**: Instant client-side download trigger for the full markdown evaluation report.
    2. In `frontend/src/app/agents/[id]/scorecard/page.tsx`:
       - Dedicated full-page scorecard view with navigation back to agent studio.
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    Scorecard dashboard with Recharts visualizations renders cleanly.
  </done>
</task>

<task type="auto">
  <name>Build Version-over-Version Comparison & Regression Tool</name>
  <files>
    frontend/src/app/agents/[id]/compare/page.tsx
    frontend/src/components/VersionDiffView.tsx
  </files>
  <action>
    1. In `frontend/src/components/VersionDiffView.tsx`:
       - Side-by-side comparison selector: Version 1 dropdown vs Version 2 dropdown.
       - **Delta Score Gauge**: Visual diff indicator (e.g. `+25.0% Reliability Improvement` in emerald or `-12.5% Regression` in rose).
       - **Failure Mode Delta Table**: Lists failure classes that were fixed (improved) vs new failures introduced (regressed).
       - **System Prompt & Tool Definition Diff**: Shows what changed between versions.
    2. In `frontend/src/app/agents/[id]/compare/page.tsx`:
       - Full comparison route allowing interactive exploration of any two agent versions.
  </action>
  <verify>
    bun run --cwd frontend build
  </verify>
  <done>
    Version comparison tool renders regression analysis and score diffs.
  </done>
</task>

## Must-Haves
- [ ] Recharts reliability trajectory and failure distribution charts
- [ ] Version-over-version comparison diffing tool with improvement/regression flags
- [ ] Markdown evaluation report exporter
