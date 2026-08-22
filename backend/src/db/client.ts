import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config();

declare global {
  // Prevent multiple instances of Prisma Client in development / HMR
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.warn("⚠️ DATABASE_URL environment variable is not defined.");
  }

  const adapter = new PrismaPg({
    connectionString: connectionString || "",
  });

  return new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export const prisma = global.__prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.__prisma = prisma;
}

export default prisma;
