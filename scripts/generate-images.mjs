import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import OpenAI from "openai";

import imageManifest from "../data/image-generation-manifest.mjs";

async function loadDotEnv() {
  const envPath = path.join(process.cwd(), ".env");
  try {
    const content = await fs.readFile(envPath, "utf8");
    for (const rawLine of content.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) continue;
      const separatorIndex = line.indexOf("=");
      if (separatorIndex === -1) continue;
      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) {
        process.env[key] = value;
      }
    }
  } catch {
    // Ignore missing .env files.
  }
}

function parseArgs(argv) {
  const ids = new Set();
  let listOnly = false;
  let force = false;
  let limit = null;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--list") listOnly = true;
    else if (arg === "--force") force = true;
    else if (arg.startsWith("--id=")) ids.add(arg.slice("--id=".length));
    else if (arg === "--id" && argv[i + 1]) {
      ids.add(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith("--limit=")) limit = Number(arg.slice("--limit=".length));
    else if (arg === "--limit" && argv[i + 1]) {
      limit = Number(argv[i + 1]);
      i += 1;
    }
  }

  return { ids, listOnly, force, limit };
}

function selectItems(items, args) {
  let selected = items;
  if (args.ids.size > 0) {
    selected = selected.filter((item) => args.ids.has(item.id));
  }
  if (typeof args.limit === "number" && Number.isFinite(args.limit)) {
    selected = selected.slice(0, Math.max(args.limit, 0));
  }
  return selected;
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function toDiskPath(outputRoute) {
  if (!outputRoute.startsWith("/images/")) {
    throw new Error(`Output route must start with /images/: ${outputRoute}`);
  }
  return path.join(process.cwd(), "public", outputRoute.replace(/^\/+/, ""));
}

async function writeImageFromResponse(filePath, result) {
  const first = result?.data?.[0];
  if (!first) {
    throw new Error("OpenAI image response did not include any data.");
  }

  if (first.b64_json) {
    await fs.writeFile(filePath, Buffer.from(first.b64_json, "base64"));
    return;
  }

  if (first.url) {
    const response = await fetch(first.url);
    if (!response.ok) {
      throw new Error(`Failed to download generated image: ${response.status} ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    await fs.writeFile(filePath, Buffer.from(arrayBuffer));
    return;
  }

  throw new Error("Unsupported OpenAI image response format.");
}

async function main() {
  await loadDotEnv();

  const args = parseArgs(process.argv.slice(2));
  const items = selectItems(imageManifest, args);

  if (args.listOnly) {
    for (const item of items) {
      console.log(`${item.id}\t${item.output}\t${item.pages.join(", ")}`);
    }
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required to generate images.");
  }

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  for (const item of items) {
    const filePath = toDiskPath(item.output);

    if (!args.force && (await fileExists(filePath))) {
      console.log(`skip\t${item.id}\t${item.output}`);
      continue;
    }

    await ensureDir(filePath);

    const fullPrompt = item.negativePrompt
      ? `${item.prompt}\nAvoid: ${item.negativePrompt}.`
      : item.prompt;

    console.log(`generate\t${item.id}\t${item.output}`);

    const result = await client.images.generate({
      model: item.model ?? "gpt-image-1",
      prompt: fullPrompt,
      size: item.size ?? "1536x1024",
      quality: item.quality ?? "high",
    });

    await writeImageFromResponse(filePath, result);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
