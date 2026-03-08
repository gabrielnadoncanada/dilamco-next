import type { Registry } from "../model/block-types";
import type { TemplatePageDefinition } from "./definitions";

function getPageLabel(page: TemplatePageDefinition) {
  const metadata = page.metadata;

  if (typeof metadata === "object" && metadata !== null) {
    const path =
      "path" in metadata && typeof metadata.path === "string"
        ? metadata.path
        : null;
    const title =
      "title" in metadata && typeof metadata.title === "string"
        ? metadata.title
        : null;

    if (path) return path;
    if (title) return title;
  }

  return page.template;
}

export function validateTemplatePage(
  page: TemplatePageDefinition,
  registry: Registry,
) {
  const pageLabel = getPageLabel(page);

  for (const block of page.blocks) {
    const key = `${block.content.type}.${block.content.variant}`;
    const def = registry[key];

    if (!def) {
      throw new Error(
        `Unknown block "${key}" in page "${pageLabel}" for block id "${block.id}".`,
      );
    }

    const parsed = def.schema.safeParse(block.content.props);

    if (!parsed.success) {
      const issues = parsed.error.issues
        .map((issue) => {
          const path = issue.path.join(".") || "(root)";
          return `${path}: ${issue.message}`;
        })
        .join("; ");

      throw new Error(
        `Invalid props for block "${key}" in page "${pageLabel}" for block id "${block.id}": ${issues}`,
      );
    }
  }
}
