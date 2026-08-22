import { createClient } from "./supabase/client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface FetchOptions extends RequestInit {
  token?: string;
}

export async function fetchWithAuth<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, headers = {}, ...rest } = options;

  let authToken = token;

  // If no token explicitly provided, attempt to retrieve from client Supabase session
  if (!authToken && typeof window !== "undefined") {
    try {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        authToken = session.access_token;
      }
    } catch {
      // Ignore if session not available
    }
  }

  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint.startsWith("/") ? "" : "/"}${endpoint}`;

  const requestHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  if (authToken) {
    requestHeaders["Authorization"] = `Bearer ${authToken}`;
  }

  const response = await fetch(url, {
    ...rest,
    headers: requestHeaders,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    let errorMessage = `API Request failed with status ${response.status}`;
    try {
      const parsed = JSON.parse(errorBody);
      if (parsed.message || parsed.error) {
        errorMessage = parsed.message || parsed.error;
      }
    } catch {
      if (errorBody) errorMessage = errorBody;
    }
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
