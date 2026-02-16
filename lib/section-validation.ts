import type { z } from "zod";
import {
  articlePageSchema,
  contentSectionSchema,
  contentSectionsSchema,
} from "@/types/sections";

function formatZodError(error: z.ZodError, context: string) {
  const details = error.issues
    .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
    .join("; ");
  return `${context} invalid: ${details}`;
}

export function validateContentSection(input: unknown) {
  const parsed = contentSectionSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(formatZodError(parsed.error, "Section payload"));
  }
  return parsed.data;
}

export function validateContentSections(input: unknown) {
  const parsed = contentSectionsSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(formatZodError(parsed.error, "Sections payload"));
  }
  return parsed.data;
}

export function validateArticlePageData(input: unknown) {
  const parsed = articlePageSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error(formatZodError(parsed.error, "Article page payload"));
  }
  return parsed.data;
}
