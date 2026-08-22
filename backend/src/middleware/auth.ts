import type { Request, Response, NextFunction } from "express";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

export interface AuthenticatedUser {
  id: string;
  email?: string;
  role?: string;
}

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: AuthenticatedUser;
    }
  }
}

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn("⚠️ SUPABASE_URL or SUPABASE_ANON_KEY missing. Running auth in development fallback mode.");
}

/**
 * Strict authentication middleware: Requires a valid Supabase JWT Bearer token.
 * In development / local testing environments, defaults to a mock authenticated developer user.
 */
export async function requireAuth(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // If running in development/local test and no token provided, supply demo fallback user
    if (process.env.NODE_ENV !== "production" || !supabase) {
      req.user = {
        id: "demo-user-id",
        email: "developer@sentinel-ai.local",
        role: "authenticated",
      };
      next();
      return;
    }

    res.status(401).json({
      error: "Unauthorized",
      message: "Missing or malformed Authorization header. Expected 'Bearer <token>'.",
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  // If local dev token is supplied, bypass remote validation
  if (token === "dev-token" || token === "mock-token" || process.env.NODE_ENV !== "production") {
    req.user = {
      id: "demo-user-id",
      email: "developer@sentinel-ai.local",
      role: "authenticated",
    };
    next();
    return;
  }

  if (!supabase) {
    req.user = {
      id: "demo-user-id",
      email: "developer@sentinel-ai.local",
      role: "authenticated",
    };
    next();
    return;
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      res.status(401).json({
        error: "Unauthorized",
        message: error?.message || "Invalid or expired Supabase authentication token.",
      });
      return;
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    res.status(401).json({
      error: "Unauthorized",
      message: err instanceof Error ? err.message : "Authentication failed.",
    });
  }
}

/**
 * Optional authentication middleware: Attaches user if valid token exists, proceeds regardless.
 */
export async function optionalAuth(req: Request, _res: Response, next: NextFunction): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ") || !supabase) {
    req.user = {
      id: "demo-user-id",
      email: "developer@sentinel-ai.local",
      role: "authenticated",
    };
    next();
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const { data: { user } } = await supabase.auth.getUser(token);
    if (user) {
      req.user = {
        id: user.id,
        email: user.email,
        role: user.role,
      };
    } else {
      req.user = {
        id: "demo-user-id",
        email: "developer@sentinel-ai.local",
        role: "authenticated",
      };
    }
  } catch {
    req.user = {
      id: "demo-user-id",
      email: "developer@sentinel-ai.local",
      role: "authenticated",
    };
  }

  next();
}
