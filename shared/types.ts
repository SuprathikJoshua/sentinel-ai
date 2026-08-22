import { z } from "zod";

// --- Tool Definition ---
export const ToolDefSchema = z.object({
  name: z.string().min(1, "Tool name is required"),
  description: z.string().min(1, "Tool description is required"),
  inputSchema: z.record(z.string(), z.any()), // JSON schema shape for the tool's input
});

// --- Agent under test ---
export const AgentConfigSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Agent name is required"),
  systemPrompt: z.string().min(1, "System prompt is required"),
  tools: z.array(ToolDefSchema),
  domain: z.string().min(1, "Domain is required"), // e.g. "customer support", "finance ops", "devops"
  version: z.number().default(1),
  description: z.string().optional(),
});

// --- Scenario (test case) ---
export const RiskTypeEnum = z.enum([
  "tool_loop",
  "hallucinated_confidence",
  "destructive_action",
  "goal_drift",
  "prompt_injection",
  "none",
]);

export const ScenarioCategoryEnum = z.enum(["realistic", "adversarial"]);

export const ScenarioSchema = z.object({
  id: z.string().optional(),
  prompt: z.string().min(1, "Prompt is required"), // user message kicking off the scenario
  category: ScenarioCategoryEnum,
  riskType: RiskTypeEnum,
  expectedBehavior: z.string().min(1, "Expected behavior is required"), // what a reliable agent should do
});

export const ScenarioBatchSchema = z.object({
  scenarios: z.array(ScenarioSchema),
});

// --- Trace (recorded run) ---
export const TraceMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.record(z.string(), z.any()).optional(),
  toolOutput: z.record(z.string(), z.any()).optional(),
  timestamp: z.string(),
});

export const TraceSchema = z.object({
  runId: z.string(),
  messages: z.array(TraceMessageSchema),
  turnCount: z.number(),
  hitTurnLimit: z.boolean(),
  toolCallsCount: z.number().default(0),
});

// --- Classification (judge output) ---
export const FailureTypeEnum = z.enum([
  "tool_loop",
  "hallucinated_confidence",
  "unsafe_destructive_action",
  "goal_drift",
  "none",
]);

export const ClassificationSchema = z.object({
  passFail: z.enum(["pass", "fail"]),
  failureType: FailureTypeEnum,
  confidence: z.number().min(0).max(1),
  reasoning: z.string(),
});

// --- Evaluation Job & Analytics Contracts ---
export const EvaluationJobStatusEnum = z.enum([
  "PENDING",
  "RUNNING",
  "COMPLETED",
  "FAILED",
]);

export const EvaluationJobSchema = z.object({
  id: z.string(),
  agentVersionId: z.string(),
  status: EvaluationJobStatusEnum,
  triggerSource: z.enum(["MANUAL", "CI_CD", "REGRESSION_TEST"]).default("MANUAL"),
  totalScenarios: z.number(),
  passedScenarios: z.number(),
  failedScenarios: z.number(),
  reliabilityScore: z.number().nullable(),
  startedAt: z.string().nullable().optional(),
  completedAt: z.string().nullable().optional(),
  createdAt: z.string(),
});

export const ScorecardMetricsSchema = z.object({
  agentId: z.string(),
  agentName: z.string(),
  version: z.number(),
  reliabilityScore: z.number(),
  totalRuns: z.number(),
  passedRuns: z.number(),
  failedRuns: z.number(),
  failureDistribution: z.record(z.string(), z.number()),
  versionHistory: z.array(
    z.object({
      version: z.number(),
      reliabilityScore: z.number(),
      totalRuns: z.number(),
      passedRuns: z.number(),
      failedRuns: z.number(),
      createdAt: z.string(),
    })
  ),
});

export const VersionComparisonSchema = z.object({
  agentId: z.string(),
  v1: z.object({
    version: z.number(),
    reliabilityScore: z.number(),
    passedCount: z.number(),
    failedCount: z.number(),
    failureDistribution: z.record(z.string(), z.number()),
  }),
  v2: z.object({
    version: z.number(),
    reliabilityScore: z.number(),
    passedCount: z.number(),
    failedCount: z.number(),
    failureDistribution: z.record(z.string(), z.number()),
  }),
  delta: z.object({
    scoreDiff: z.number(), // v2 score - v1 score
    improvedFailures: z.array(z.string()),
    regressedFailures: z.array(z.string()),
  }),
});

// --- Inferred TypeScript Types ---
export type ToolDef = z.infer<typeof ToolDefSchema>;
export type AgentConfig = z.infer<typeof AgentConfigSchema>;
export type RiskType = z.infer<typeof RiskTypeEnum>;
export type ScenarioCategory = z.infer<typeof ScenarioCategoryEnum>;
export type Scenario = z.infer<typeof ScenarioSchema>;
export type ScenarioBatch = z.infer<typeof ScenarioBatchSchema>;
export type TraceMessage = z.infer<typeof TraceMessageSchema>;
export type Trace = z.infer<typeof TraceSchema>;
export type FailureType = z.infer<typeof FailureTypeEnum>;
export type Classification = z.infer<typeof ClassificationSchema>;
export type EvaluationJobStatus = z.infer<typeof EvaluationJobStatusEnum>;
export type EvaluationJob = z.infer<typeof EvaluationJobSchema>;
export type ScorecardMetrics = z.infer<typeof ScorecardMetricsSchema>;
export type VersionComparison = z.infer<typeof VersionComparisonSchema>;
