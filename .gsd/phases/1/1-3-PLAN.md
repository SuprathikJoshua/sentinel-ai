---
phase: 1
plan: 3
wave: 2
gap_closure: false
---

# Plan 1.3: Supabase Auth Integration

## Objective
Set up Supabase Auth integration: JWT verification middleware on the Express backend and client/SSR auth helpers on the Next.js frontend, establishing user-scoped authorization contracts.

## Context
- .gsd/SPEC.md
- backend/src/middleware/auth.ts
- frontend/src/lib/supabase/client.ts
- frontend/src/lib/supabase/server.ts

## Tasks

<task type="auto">
  <name>Install @supabase/supabase-js on backend and frontend if needed</name>
  <files>
    backend/package.json
    frontend/package.json
  </files>
  <action>
    Add @supabase/supabase-js to backend and @supabase/supabase-js + @supabase/ssr to frontend for authentication.
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Packages installed cleanly and type checks pass.
  </done>
</task>

<task type="auto">
  <name>Create backend Supabase Auth JWT verification middleware</name>
  <files>
    backend/src/middleware/auth.ts
  </files>
  <action>
    Implement Express middleware that extracts the Bearer token from the Authorization header, validates it using Supabase JWT / getUser API, and attaches `req.user` to the request. Provide a permissive fallback for local development or mock tokens when configured.
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Auth middleware compiles and validates tokens.
  </done>
</task>

<task type="auto">
  <name>Create frontend Supabase client and SSR utilities</name>
  <files>
    frontend/src/lib/supabase/client.ts
    frontend/src/lib/supabase/server.ts
  </files>
  <action>
    Create browser and server Supabase clients for Next.js 15 using standard patterns.
  </action>
  <verify>
    bun run --cwd frontend tsc --noEmit
  </verify>
  <done>
    Frontend Supabase client and SSR utilities compile cleanly.
  </done>
</task>

## Must-Haves
- [ ] Backend Express auth middleware (`backend/src/middleware/auth.ts`)
- [ ] Frontend Supabase browser/server client utilities
