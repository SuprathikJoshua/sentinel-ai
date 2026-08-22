import { generateText, tool, jsonSchema } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import {
  TraceSchema,
  type AgentConfig,
  type Scenario,
  type Trace,
  type TraceMessage,
} from "@sentinel/shared";
import { generateMockResult } from "./mock-executor";
import dotenv from "dotenv";

dotenv.config();

export interface ExecutionOptions {
  maxSteps?: number;
  runId?: string;
  modelName?: string;
}

/**
 * Converts an array of ToolDef objects into a Record of AI SDK tools with intercepted mock execution.
 */
function createMockTools(
  tools: AgentConfig["tools"]
): Record<string, any> {
  const toolMap: Record<string, any> = {};

  for (const t of tools) {
    const rawSchema = t.inputSchema || { type: "object", properties: {} };
    // Ensure JSON schema contains type: "object" if omitted
    const validJsonSchema =
      typeof rawSchema === "object" && rawSchema.type
        ? rawSchema
        : { type: "object", properties: rawSchema, ...rawSchema };

    toolMap[t.name] = tool({
      description: t.description,
      parameters: jsonSchema(validJsonSchema as any),
      execute: async (args: unknown) => {
        return await generateMockResult(
          t.name,
          (args as Record<string, any>) || {},
          t.inputSchema
        );
      },
    });
  }

  return toolMap;
}

/**
 * Executes an agent within a safe, turn-capped sandbox against a test scenario.
 * Intercepts all tool calls with the mock tool executor and captures a complete chronological Trace.
 *
 * @param agentConfig - Agent's system prompt, tools, domain, and settings.
 * @param scenario - The test scenario prompt to execute.
 * @param options - Optional configuration (maxSteps, custom runId).
 * @returns Fully populated, validated Trace object.
 */
export async function executeInSandbox(
  agentConfig: AgentConfig,
  scenario: Scenario,
  options: ExecutionOptions = {}
): Promise<Trace> {
  const maxSteps = options.maxSteps ?? 6;
  const runId =
    options.runId ??
    `run_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  const modelName = options.modelName ?? "claude-sonnet-4-20250514";

  const mappedTools = createMockTools(agentConfig.tools);
  const messages: TraceMessage[] = [];
  const startTime = new Date().toISOString();

  // 1. Record System Prompt
  messages.push({
    role: "system",
    content: agentConfig.systemPrompt,
    timestamp: startTime,
  });

  // 2. Record User Scenario Prompt
  messages.push({
    role: "user",
    content: scenario.prompt,
    timestamp: new Date().toISOString(),
  });

  let totalToolCalls = 0;
  let hitTurnLimit = false;

  try {
    const model = anthropic(modelName);

    const result = await generateText({
      model,
      system: agentConfig.systemPrompt,
      prompt: scenario.prompt,
      tools: Object.keys(mappedTools).length > 0 ? mappedTools : undefined,
      maxSteps,
      temperature: 0.0, // Deterministic execution for agent under test
    });

    // 3. Process chronological turns from steps
    if (result.steps && result.steps.length > 0) {
      for (const step of result.steps) {
        const stepTimestamp = new Date().toISOString();

        // If the step generated assistant text
        if (step.text && step.text.trim().length > 0) {
          messages.push({
            role: "assistant",
            content: step.text,
            timestamp: stepTimestamp,
          });
        }

        // If the step triggered tool calls
        const toolCalls = (step.toolCalls as any[]) || [];
        if (toolCalls.length > 0) {
          for (const tc of toolCalls) {
            totalToolCalls++;
            messages.push({
              role: "assistant",
              content: `[Tool Invocation] ${tc.toolName}`,
              toolName: tc.toolName,
              toolInput: (tc.args as Record<string, any>) || {},
              timestamp: stepTimestamp,
            });
          }
        }

        // If the step received tool results
        const toolResults = (step.toolResults as any[]) || [];
        if (toolResults.length > 0) {
          for (const tr of toolResults) {
            messages.push({
              role: "tool",
              content:
                typeof tr.result === "string"
                  ? tr.result
                  : JSON.stringify(tr.result),
              toolName: tr.toolName,
              toolOutput:
                typeof tr.result === "object" && tr.result !== null
                  ? (tr.result as Record<string, any>)
                  : { result: tr.result },
              timestamp: new Date().toISOString(),
            });
          }
        }
      }

      // Check if execution reached the step cap (indicator of tool loop or runaway execution)
      if (result.steps.length >= maxSteps) {
        hitTurnLimit = true;
      }
    } else if (result.text) {
      messages.push({
        role: "assistant",
        content: result.text,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (err) {
    const errorTimestamp = new Date().toISOString();
    console.error(`[SandboxHarness] Execution failed for run ${runId}:`, err);
    messages.push({
      role: "assistant",
      content: `[Execution Error] ${err instanceof Error ? err.message : "Unknown execution failure"}`,
      timestamp: errorTimestamp,
    });
  }

  const trace: Trace = {
    runId,
    messages,
    turnCount: messages.length,
    hitTurnLimit,
    toolCallsCount: totalToolCalls,
  };

  // Validate against canonical TraceSchema
  return TraceSchema.parse(trace);
}
