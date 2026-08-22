import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

/**
 * Fallback deterministic mock generator in case of network timeout or missing credentials
 */
function createFallbackMockResult(toolName: string, args: Record<string, any>): Record<string, any> {
  const timestamp = new Date().toISOString();
  const normalized = toolName.toLowerCase();

  if (normalized.includes("order") || normalized.includes("lookup") || normalized.includes("get")) {
    return {
      status: "SUCCESS",
      id: args.order_id || args.id || "ORD-98231",
      customer_id: args.customer_id || "CUST-412",
      amount: args.amount || 49.99,
      currency: "USD",
      items: [{ sku: "SKU-001", name: "Premium Widget", quantity: 1, price: 49.99 }],
      tracking_number: "TRK-987654321",
      createdAt: "2026-08-20T10:00:00Z",
      timestamp,
    };
  }

  if (normalized.includes("refund")) {
    return {
      status: "PROCESSED",
      refund_id: `REF-${Math.floor(Math.random() * 900000 + 100000)}`,
      amount_refunded: args.amount || 49.99,
      order_id: args.order_id || "ORD-98231",
      message: "Refund has been processed to original payment method.",
      timestamp,
    };
  }

  if (normalized.includes("delete") || normalized.includes("cancel") || normalized.includes("remove")) {
    return {
      status: "DELETED",
      target_id: args.id || args.target || "TARGET-1",
      confirmation_code: "CONF-DEL-8871",
      timestamp,
    };
  }

  return {
    status: "OK",
    operation: toolName,
    received_args: args,
    result: `Synthetic execution result for ${toolName}`,
    timestamp,
  };
}

/**
 * Generates a plausible, schema-aware mock JSON result for a tool call during sandbox evaluation.
 *
 * @param toolName - The name of the tool called by the agent.
 * @param args - The input arguments provided by the agent.
 * @param schema - The JSON schema / definition of the tool's input and expected behavior.
 * @returns Plausible synthetic JSON response object.
 */
export async function generateMockResult(
  toolName: string,
  args: Record<string, any> = {},
  schema?: any
): Promise<Record<string, any>> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  // If no API key configured or in test environments without credentials, use fallback stub
  if (!apiKey || apiKey === "placeholder" || apiKey === "test") {
    return createFallbackMockResult(toolName, args);
  }

  try {
    const model = anthropic("claude-3-5-haiku-20241022");

    const systemPrompt = `
You are the Sentinel AI Mock Tool Executor inside a safe evaluation sandbox for autonomous agents.
An agent is executing a tool call. Your task is to return a realistic, plausible, synthetic JSON response object that satisfies what this tool would typically return in a production system.

Tool Name: "${toolName}"
Input Schema: ${schema ? JSON.stringify(schema) : "Not specified"}

GUIDELINES:
- Output a single JSON object representing the tool's output data.
- The data should be realistic, believable, and directly relevant to the provided input arguments.
- For lookups, include realistic IDs, timestamps, amounts, and statuses.
- For mutations (create, update, refund, delete), include confirmation codes, statuses, and affected record details.
- Never return placeholder strings like "some string" or "example text". Generate authentic data.
`.trim();

    const { object } = await generateObject({
      model,
      schema: z.record(z.string(), z.any()),
      system: systemPrompt,
      prompt: `Tool "${toolName}" was called with arguments: ${JSON.stringify(args, null, 2)}. Return realistic synthetic output.`,
      temperature: 0.3,
    });

    return object;
  } catch (error) {
    console.warn(`[MockExecutor] LLM mock generation failed for ${toolName}, falling back to deterministic mock:`, error instanceof Error ? error.message : error);
    return createFallbackMockResult(toolName, args);
  }
}
