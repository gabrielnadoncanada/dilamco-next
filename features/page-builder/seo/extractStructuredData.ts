import type {
  Block,
  Registry,
} from "@/features/page-builder/model/block-types";

/**
 * Parcourt récursivement les props des blocs pour collecter toutes les images
 * (objets { src, alt }) de la page, dans l'ordre d'apparition. Sert au JSON-LD
 * ImageObject (SEO Google Images).
 */
export function extractImages(
  blocks: Block[],
): Array<{ src: string; alt: string }> {
  const out: Array<{ src: string; alt: string }> = [];
  const seen = new Set<string>();

  const visit = (node: unknown) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }
    const obj = node as Record<string, unknown>;
    if (typeof obj.src === "string" && obj.src.startsWith("/images/")) {
      if (!seen.has(obj.src)) {
        seen.add(obj.src);
        out.push({
          src: obj.src,
          alt: typeof obj.alt === "string" ? obj.alt : "",
        });
      }
    }
    for (const key of Object.keys(obj)) visit(obj[key]);
  };

  for (const block of blocks) visit(block.content?.props);
  return out;
}

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
