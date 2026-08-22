import { prisma } from "../backend/src/db/client";

async function main() {
  console.log("🔍 Testing Supabase PostgreSQL connection via Prisma 7 & PrismaPg adapter...");
  const start = Date.now();
  
  // 1. Raw SQL query check
  const rawResult = await prisma.$queryRaw<Array<{ result: number }>>`SELECT 1 as result`;
  console.log("✅ Raw query successful:", rawResult);

  // 2. Count agents
  const count = await prisma.agent.count();
  console.log(`✅ Table query successful. Existing agents count: ${count}`);

  const duration = Date.now() - start;
  console.log(`🎉 Database connectivity verified in ${duration}ms.`);
  
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("❌ Database connection test failed:", err);
  process.exit(1);
});
