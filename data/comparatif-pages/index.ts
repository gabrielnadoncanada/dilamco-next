import type { ComparatifSlug } from "@/types/page-slugs";
import type { ComparatifPageDefinition } from "@/types/page-definitions";
import { getPublicKeys, getRecordItem } from "@/lib/feature-collections";
import {
  metadata as cuisineVsHomeDepotMetadata,
  pageData as cuisineVsHomeDepotPageData,
} from "@/data/comparatif-pages/cuisine-sur-mesure-vs-home-depot";
import {
  metadata as cuisineVsIkeaMetadata,
  pageData as cuisineVsIkeaPageData,
} from "@/data/comparatif-pages/cuisine-sur-mesure-vs-ikea";
import {
  metadata as cuisinisteVsEntrepreneurMetadata,
  pageData as cuisinisteVsEntrepreneurPageData,
} from "@/data/comparatif-pages/cuisiniste-vs-entrepreneur-general";

export type { ComparatifSlug } from "@/types/page-slugs";

export const COMPARATIF_PAGES: Record<
  ComparatifSlug,
  ComparatifPageDefinition
> = {
  "cuisine-sur-mesure-vs-home-depot": {
    metadata: cuisineVsHomeDepotMetadata,
    pageData: cuisineVsHomeDepotPageData,
  },
  "cuisine-sur-mesure-vs-ikea": {
    metadata: cuisineVsIkeaMetadata,
    pageData: cuisineVsIkeaPageData,
  },
  "cuisiniste-vs-entrepreneur-general": {
    metadata: cuisinisteVsEntrepreneurMetadata,
    pageData: cuisinisteVsEntrepreneurPageData,
  },
};

export const COMPARATIF_PAGE_SLUGS = Object.keys(
  COMPARATIF_PAGES,
) as ComparatifSlug[];

export const PUBLIC_COMPARATIF_PAGE_SLUGS = getPublicKeys(COMPARATIF_PAGES);

export function getComparatifPageBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
) {
  return getRecordItem(COMPARATIF_PAGES, slug, options);
}
