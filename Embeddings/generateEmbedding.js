import { pipeline, env } from "@xenova/transformers";

// Configuration for Deno runtime
env.useBrowserCache = false;

const pipe = await pipeline("feature-extraction", "Supabase/gte-small");
