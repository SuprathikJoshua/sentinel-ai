import { createClient } from "./supabase/client";
import type {
  AgentConfig,
  Scenario,
  ScorecardMetrics,
  VersionComparison,
} from "@sentinel/shared";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface FetchOptions extends RequestInit {
  token?: string;
}

export async function fetchWithAuth<T>(endpoint: string, options: FetchOptions = {}): Promise<T> {
  const { token, headers = {}, ...rest } = options;

  let authToken = token;

  // Retrieve client Supabase session token if in browser
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

  // If still no token in development, pass a mock dev token
  if (!authToken && process.env.NODE_ENV !== "production") {
    authToken = "dev-token";
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

// -------------------------------------------------------------
// Typed API Endpoints
// -------------------------------------------------------------

export interface AgentSummary {
  id: string;
  name: string;
  domain: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  scenarioCount: number;
  latestVersion: {
    id: string;
    version: number;
    systemPrompt: string;
    tools: any[];
    model: string;
    createdAt: string;
  } | null;
  latestReliabilityScore: number | null;
  latestJobStatus: string | null;
  totalVersions: number;
}

export interface AgentDetail {
  id: string;
  name: string;
  domain: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  activeVersion: {
    id: string;
    agentId: string;
    version: number;
    systemPrompt: string;
    tools: any[];
    model: string;
    temperature: number;
    createdAt: string;
  } | null;
  versions: {
    id: string;
    version: number;
    systemPrompt: string;
    tools: any[];
    model: string;
    temperature: number;
    createdAt: string;
  }[];
  scenarios: Scenario[];
}

export interface EvaluationJobResponse {
  id: string;
  status: "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED";
  triggerSource: string;
  totalScenarios: number;
  completedScenarios: number;
  progressPercent: number;
  passedScenarios: number;
  failedScenarios: number;
  reliabilityScore: number | null;
  summaryMetrics: {
    failureDistribution?: Record<string, number>;
    totalExecuted?: number;
  } | null;
  errorMessage: string | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
  agent: {
    id: string;
    name: string;
    domain: string;
    version: number;
  };
  runs: {
    id: string;
    status: string;
    durationMs: number | null;
    scenario: {
      id: string;
      category: string;
      riskType: string;
    };
    classification: {
      passFail: string;
      failureType: string;
      confidence: number;
    } | null;
  }[];
}

export interface RunDetail {
  id: string;
  evaluationJobId: string;
  agentVersionId: string;
  scenarioId: string;
  status: string;
  durationMs: number | null;
  errorMessage: string | null;
  startedAt: string;
  completedAt: string | null;
  createdAt: string;
  scenario: Scenario;
  trace: {
    id: string;
    runId: string;
    messages: {
      role: "system" | "user" | "assistant" | "tool";
      content: string;
      toolCalls?: {
        name: string;
        args: Record<string, any>;
        result?: any;
      }[];
    }[];
    turnCount: number;
    hitTurnLimit: boolean;
    toolCallsCount: number;
  } | null;
  classification: {
    id: string;
    runId: string;
    passFail: "pass" | "fail";
    failureType: "tool_loop" | "hallucinated_confidence" | "unsafe_destructive_action" | "goal_drift" | "none";
    confidence: number;
    reasoning: string;
  } | null;
  agentVersion: {
    id: string;
    version: number;
    agent: {
      id: string;
      name: string;
      domain: string;
    };
  };
}

// Agents
export async function getAgents(): Promise<AgentSummary[]> {
  return fetchWithAuth<AgentSummary[]>("/api/agents");
}

export async function getAgent(id: string): Promise<AgentDetail> {
  return fetchWithAuth<AgentDetail>(`/api/agents/${id}`);
}

export async function createAgent(data: AgentConfig): Promise<any> {
  return fetchWithAuth("/api/agents", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function createAgentVersion(id: string, data: { systemPrompt: string; tools: any[]; model?: string; temperature?: number }): Promise<any> {
  return fetchWithAuth(`/api/agents/${id}/versions`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function deleteAgent(id: string): Promise<{ message: string }> {
  return fetchWithAuth(`/api/agents/${id}`, {
    method: "DELETE",
  });
}

// Scenarios
export async function getAgentScenarios(agentId: string): Promise<Scenario[]> {
  return fetchWithAuth<Scenario[]>(`/api/agents/${agentId}/scenarios`);
}

export async function createAgentScenario(agentId: string, scenario: Omit<Scenario, "id">): Promise<Scenario> {
  return fetchWithAuth<Scenario>(`/api/agents/${agentId}/scenarios`, {
    method: "POST",
    body: JSON.stringify(scenario),
  });
}

export async function generateAgentScenarios(
  agentId: string,
  options: { count?: number; includeGuardrails?: boolean; versionId?: string } = {}
): Promise<{ message: string; total: number; scenarios: Scenario[] }> {
  return fetchWithAuth(`/api/agents/${agentId}/scenarios/generate`, {
    method: "POST",
    body: JSON.stringify(options),
  });
}

// Evaluation Pipeline
export async function runEvaluation(
  agentId: string,
  options: { versionId?: string; autoGenerateScenarios?: boolean } = {}
): Promise<{ message: string; jobId: string; status: string; totalScenarios: number }> {
  return fetchWithAuth(`/api/agents/${agentId}/run`, {
    method: "POST",
    body: JSON.stringify(options),
  });
}

export async function getEvaluationJob(jobId: string): Promise<EvaluationJobResponse> {
  return fetchWithAuth<EvaluationJobResponse>(`/api/jobs/${jobId}`);
}

/**
 * Polls evaluation job until completion or failure
 */
export async function pollEvaluationJob(
  jobId: string,
  onProgress?: (job: EvaluationJobResponse) => void,
  intervalMs = 1500
): Promise<EvaluationJobResponse> {
  return new Promise((resolve, reject) => {
    const timer = setInterval(async () => {
      try {
        const job = await getEvaluationJob(jobId);
        if (onProgress) onProgress(job);

        if (job.status === "COMPLETED") {
          clearInterval(timer);
          resolve(job);
        } else if (job.status === "FAILED") {
          clearInterval(timer);
          reject(new Error(job.errorMessage || "Evaluation job failed"));
        }
      } catch (err) {
        clearInterval(timer);
        reject(err);
      }
    }, intervalMs);
  });
}

// Runs
export async function getAgentRuns(agentId: string, filters: Record<string, string | number> = {}): Promise<any[]> {
  const query = new URLSearchParams();
  for (const [key, val] of Object.entries(filters)) {
    if (val !== undefined && val !== "") query.set(key, String(val));
  }
  const qStr = query.toString() ? `?${query.toString()}` : "";
  return fetchWithAuth<any[]>(`/api/agents/${agentId}/runs${qStr}`);
}

export async function getRun(runId: string): Promise<RunDetail> {
  return fetchWithAuth<RunDetail>(`/api/runs/${runId}`);
}

// Scorecard & Comparison
export async function getScorecard(agentId: string): Promise<ScorecardMetrics> {
  return fetchWithAuth<ScorecardMetrics>(`/api/agents/${agentId}/scorecard`);
}

export async function compareVersions(agentId: string, v1: number, v2: number): Promise<VersionComparison> {
  return fetchWithAuth<VersionComparison>(`/api/agents/${agentId}/compare?v1=${v1}&v2=${v2}`);
}

export async function downloadReport(agentId: string, agentName: string): Promise<void> {
  const markdown = await fetchWithAuth<string>(`/api/agents/${agentId}/report`, {
    headers: { Accept: "text/markdown" },
  });

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${agentName.toLowerCase().replace(/\s+/g, "_")}_evaluation_report.md`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
