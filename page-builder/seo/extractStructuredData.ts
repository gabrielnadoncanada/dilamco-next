import type { Block, Registry } from "@/page-builder/model/block-types";

export function extractFaqItems(blocks: Block[], blockRegistry: Registry) {
  const faqItems: Array<{ q: string; a: string }> = [];

  for (const block of blocks) {
    const key = `${block.content.type}.${block.content.variant}`;
    const def = blockRegistry[key];
    if (!def) continue;

    const parsed = def.schema.safeParse(block.content.props);
    if (!parsed.success) continue;

    const contributions = def.getStructuredData?.(parsed.data) ?? [];

    for (const contribution of contributions) {
      if (contribution.type === "faq") {
        faqItems.push(...contribution.items);
      }
    }
  }

  return faqItems;
}
