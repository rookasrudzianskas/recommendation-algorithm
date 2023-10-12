import { pipeline, env } from "@xenova/transformers";

// Configuration for Deno runtime
env.useBrowserCache = false;

const pipe = await pipeline("feature-extraction", "Supabase/gte-small");

// Generate the embedding from the user input
export const generateEmbedding = async (text) => {
  const output = await pipe(text, {
    pooling: "mean",
    normalize: true,
  });

  // Extract the embedding output
  return Array.from(output.data);
};

console.log(await generateEmbedding("Hello world!"));
