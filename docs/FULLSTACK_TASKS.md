# Fullstack — Task Breakdown

Stack: Next.js + Tailwind. Talks to Backend REST API only. No LLM calls, no sandbox logic.

## Day 1 — Skeleton
- [ ] Set up Next.js project, basic routing (`/`, `/agents`, `/agents/[id]`, `/runs/[id]`)
- [ ] Build "New Agent Config" form:
  - Agent name
  - System prompt (textarea)
  - Tool list (repeatable: name, description, input schema — simple JSON textarea is fine)
  - Domain/task category (dropdown or free text)
- [ ] Form just logs to console for now — no backend yet

## Day 2 — Wire Config Upload
- [ ] Connect form to Backend `POST /agents` endpoint
- [ ] Show list of created agents on `/agents` page (name, domain, created date)
- [ ] Add "Run Evaluation" button per agent (calls `POST /agents/:id/run`, disabled state while running)

## Day 3 — Trace Viewer
- [ ] Build `/runs/[id]` page
- [ ] Fetch single run trace from `GET /runs/:id`
- [ ] Render trace as timeline: each turn = agent message / tool call / tool result, in order
- [ ] Pretty-print JSON payloads (collapsible blocks)
- [ ] Show scenario prompt + expected behavior at top of page

## Day 4 — Results Table
- [ ] Build `/agents/[id]` results tab: table of all runs for that agent
- [ ] Columns: scenario name, category (realistic/adversarial), failure type, pass/fail, timestamp
- [ ] Add filter dropdown: filter by failure type, filter by category
- [ ] Click row → goes to `/runs/[id]` trace viewer

## Day 5 — Scorecard Dashboard
- [ ] Build `/agents/[id]/scorecard` page
- [ ] Reliability score (big number, %) pulled from `GET /agents/:id/scorecard`
- [ ] Bar chart: failure type distribution (use recharts)
- [ ] Line/bar chart: pass rate across versions (regression tracking)
- [ ] "Compare versions" dropdown (pick v1 vs v2, show diff summary from backend)

## Day 6 — Integration Pass
- [ ] Run through full flow live with real backend + AI engineer's outputs, fix breakages
- [ ] Loading states everywhere (form submit, run in progress, trace fetch)
- [ ] Error states (failed run, bad config, empty states for new agents)
- [ ] Mobile/smaller-screen sanity pass (skip if time-crunched)

## Day 7 — Demo Polish
- [ ] Add "Download Report" button (hits backend export endpoint, downloads PDF/markdown)
- [ ] Seed 1-2 impressive-looking agents + runs for the demo (don't demo empty state)
- [ ] Final visual polish: consistent spacing, color for pass/fail (green/red), icons for failure types
- [ ] Dry run the demo click-path start to finish

## API Contract You Depend On (confirm with Backend on Day 1)
- `POST /agents` — create agent config
- `GET /agents` — list agents
- `GET /agents/:id` — agent detail
- `POST /agents/:id/run` — trigger evaluation run
- `GET /runs/:id` — single run trace + classification
- `GET /agents/:id/runs` — all runs for agent
- `GET /agents/:id/scorecard` — reliability score + charts data
- `GET /agents/:id/report` — export report file
