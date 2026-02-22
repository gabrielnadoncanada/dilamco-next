import { getPublicKeys, getRecordItem } from "@/lib/feature-collections";
import type { PageFeatures } from "@/types/page-features";

type WithFeatures = { features?: PageFeatures };

export function createCollection<
  TSlug extends string,
  TDef extends WithFeatures,
>(pages: Record<TSlug, TDef>) {
  return {
    pages,
    slugs: Object.keys(pages) as TSlug[],
    publicSlugs: getPublicKeys(pages),
    getBySlug(slug: string, options?: { includeDrafts?: boolean }): TDef | null {
      return getRecordItem(pages, slug, options);
    },
  };
}
