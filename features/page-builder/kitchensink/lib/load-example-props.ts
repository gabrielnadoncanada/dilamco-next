import { promises as fs } from "node:fs";
import path from "node:path";
import { z } from "zod";

const ROOT_DIR = process.cwd();

export async function readExamplePropsFile(examplePath: string): Promise<string> {
  const absolutePath = path.isAbsolute(examplePath)
    ? examplePath
    : path.join(ROOT_DIR, examplePath);

  try {
    return await fs.readFile(absolutePath, "utf8");
  } catch (error) {
    throw new Error(
      `Failed to read example props file at "${examplePath}": ${toErrorMessage(error)}`,
    );
  }
}

export async function loadExampleProps<TSchema extends z.ZodTypeAny>(
  examplePath: string,
  schema: TSchema,
): Promise<z.infer<TSchema>> {
  const raw = await readExamplePropsFile(examplePath);

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Invalid JSON in example props file "${examplePath}": ${toErrorMessage(error)}`,
    );
  }

  const result = schema.safeParse(parsed);

  if (!result.success) {
    throw new Error(
      [
        `Example props validation failed for "${examplePath}".`,
        ...result.error.issues.map(
          (issue) => `- ${issue.path.join(".") || "<root>"}: ${issue.message}`,
        ),
      ].join("\n"),
    );
  }

  return result.data;
}

function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
