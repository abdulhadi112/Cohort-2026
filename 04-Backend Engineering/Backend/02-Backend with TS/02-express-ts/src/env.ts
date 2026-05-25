import { z } from "zod";

// Humare env variables kaise dikege
const envSchema = z.object({
  PORT: z.string().optional().default("3000"),
});

// ensures your app’s environment variables are present, correctly typed, and have defaults if needed.
// If a required variable is missing or invalid, the app will throw an error at the startup
function createEnv(env: NodeJS.ProcessEnv) {
  const safeParseResult = envSchema.safeParse(env);
  if (!safeParseResult.success) {
    throw new Error(safeParseResult.error.message);
  }
  return safeParseResult.data;
}

export const env = createEnv(process.env);
