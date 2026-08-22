---
phase: 1
plan: 2
wave: 1
gap_closure: false
---

# Plan 1.2: Prisma 7 Client with `@prisma/adapter-pg` & Database Connectivity

## Objective
Implement the updated Prisma 7 client in `backend/src/db/client.ts` using `@prisma/adapter-pg` driver, verify connection to Supabase PostgreSQL database via Express `/health` endpoint, and validate model queries.

## Context
- .gsd/SPEC.md
- backend/prisma/schema.prisma
- backend/src/db/client.ts
- backend/src/index.ts

## Tasks

<task type="auto">
  <name>Implement Prisma 7 Client with @prisma/adapter-pg</name>
  <files>
    backend/src/db/client.ts
  </files>
  <action>
    Configure backend/src/db/client.ts using the exact Prisma 7 pattern:
    ```typescript
    import { PrismaClient } from '../generated/prisma';
    import { PrismaPg } from '@prisma/adapter-pg';

    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    });

    export const prisma = new PrismaClient({ adapter });
    export default prisma;
    ```
  </action>
  <verify>
    bun run --cwd backend tsc --noEmit
  </verify>
  <done>
    Backend TypeScript compiles with zero errors and Prisma 7 client is correctly initialized with PrismaPg adapter.
  </done>
</task>

<task type="auto">
  <name>Verify Database Connectivity via Test Script / Health Endpoint</name>
  <files>
    backend/src/index.ts
  </files>
  <action>
    Ensure Express health check executes `prisma.$queryRaw\`SELECT 1\`` and returns `{ status: "healthy", db: "connected" }`.
  </action>
  <verify>
    bun run scripts/test-db-connection.ts
  </verify>
  <done>
    Database query succeeds against Supabase PostgreSQL and returns valid query result.
  </done>
</task>

## Must-Haves
- [ ] `backend/src/db/client.ts` uses `@prisma/adapter-pg` with `PrismaClient` from `../generated/prisma`
- [ ] Database connectivity verified against Supabase PostgreSQL
