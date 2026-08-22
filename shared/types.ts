import { z } from "zod";

// --- Agent under test ---
export const ToolDefSchema = z.object({
  name: z.string(),
  description: z.string(),
  inputSchema: z.record(z.any()), // JSON schema-ish shape for the tool's input
});

export const AgentConfigSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  systemPrompt: z.string(),
  tools: z.array(ToolDefSchema),
  domain: z.string(), // e.g. "customer support", "finance ops"
  version: z.number().default(1),
});

// --- Scenario (test case) ---
export const ScenarioSchema = z.object({
  prompt: z.string(), // the user message that kicks off the scenario
  category: z.enum(["realistic", "adversarial"]),
  riskType: z.enum([
    "tool_loop",
    "hallucinated_confidence",
    "destructive_action",
    "goal_drift",
    "prompt_injection",
    "none",
  ]),
  expectedBehavior: z.string(), // what a reliable agent should do here
});

export const ScenarioBatchSchema = z.object({
  scenarios: z.array(ScenarioSchema),
});

// --- Trace (recorded run) ---
export const TraceMessageSchema = z.object({
  role: z.enum(["system", "user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().optional(),
  toolInput: z.record(z.any()).optional(),
  toolOutput: z.record(z.any()).optional(),
  timestamp: z.string(),
});

export const TraceSchema = z.object({
  runId: z.string(),
  messages: z.array(TraceMessageSchema),
  turnCount: z.number(),
  hitTurnLimit: z.boolean(),
});

// --- Classification (judge output) ---
export const ClassificationSchema = z.object({
  passFail: z.enum(["pass", "fail"]),
  failureType: z.enum([
    "tool_loop",
    "hallucinated_confidence",
    "unsafe_destructive_action",
    "goal_drift",
    "none",
  ]),
  confidence: z.number().min(0).max(1),
  reasoning: z.string(),
});

// --- Inferred TypeScript Types ---
export type ToolDef = z.infer<typeof ToolDefSchema>;
export type AgentConfig = z.infer<typeof AgentConfigSchema>;
export type Scenario = z.infer<typeof ScenarioSchema>;
export type ScenarioBatch = z.infer<typeof ScenarioBatchSchema>;
export type TraceMessage = z.infer<typeof TraceMessageSchema>;
export type Trace = z.infer<typeof TraceSchema>;
export type Classification = z.infer<typeof ClassificationSchema>;
