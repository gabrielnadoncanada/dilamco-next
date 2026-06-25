import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import {
  collectionContent,
  collectionProducts,
  findCollection,
  renderCount,
} from "@/lib/shop/collections";

type ShopLocale = "fr" | "en";

/**
 * Métadonnées d'une collection : canonical auto-référent + hreflang FR/EN +
 * description (avec le nombre de produits). Le titre est SANS marque (le layout
 * boutique ajoute « | Boutique Dilamco »). `index:false` → noindex,follow
 * (collections niche navigables mais non indexées).
 */
export function collectionMetadata(slug: string, locale: ShopLocale): Metadata {
  const c = findCollection(slug);
  if (!c) return {};
  const content = collectionContent(c, locale);
  const count = collectionProducts(c).length;

  const meta = createPageMetadata(
    {
      title: content.metaTitle ?? content.h1,
      description: renderCount(
        content.metaDescription ?? `${content.h1} — en stock chez Dilamco.`,
        count,
      ),
      path: `/boutique/${c.slug}`,
    },
    locale,
  );

  if (!c.index) return { ...meta, robots: { index: false, follow: true } };
  return meta;
}
