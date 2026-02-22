import type { SpaceSlug } from "@/types/page-slugs";
import type { SpacePageDefinition } from "@/types/page-definitions";
import { getPublicKeys, getRecordItem } from "@/lib/feature-collections";
import {
  metadata as commercialMetadata,
  pageData as commercialPageData,
} from "@/data/space-pages/commercial";
import {
  metadata as cuisineMetadata,
  pageData as cuisinePageData,
} from "@/data/space-pages/cuisine";
import {
  metadata as salleDeBainMetadata,
  pageData as salleDeBainPageData,
} from "@/data/space-pages/salle-de-bain";
import {
  metadata as salleDeLavageMetadata,
  pageData as salleDeLavagePageData,
} from "@/data/space-pages/salle-de-lavage";
import {
  metadata as walkInMetadata,
  pageData as walkInPageData,
} from "@/data/space-pages/walk-in";

export type { SpaceSlug } from "@/types/page-slugs";

export const SPACE_PAGES: Record<SpaceSlug, SpacePageDefinition> = {
  cuisine: {
    metadata: cuisineMetadata,
    pageData: cuisinePageData,
  },
  "salle-de-bain": {
    metadata: salleDeBainMetadata,
    pageData: salleDeBainPageData,
  },
  "walk-in": {
    metadata: walkInMetadata,
    pageData: walkInPageData,
  },
  "salle-de-lavage": {
    metadata: salleDeLavageMetadata,
    pageData: salleDeLavagePageData,
  },
  commercial: {
    metadata: commercialMetadata,
    pageData: commercialPageData,
  },
};

export const SPACE_PAGE_SLUGS = Object.keys(SPACE_PAGES) as SpaceSlug[];

export const PUBLIC_SPACE_PAGE_SLUGS = getPublicKeys(SPACE_PAGES);

export function getSpacePageBySlug(
  slug: string,
  options?: { includeDrafts?: boolean },
) {
  return getRecordItem(SPACE_PAGES, slug, options);
}
