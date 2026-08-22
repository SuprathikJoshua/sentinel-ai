import { createOpenAI } from "@ai-sdk/openai";
import dotenv from "dotenv";

dotenv.config();

export const openRouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});
