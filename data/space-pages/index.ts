import type { SpaceSlug } from "@/types/page-slugs";
import type { SpacePageDefinition } from "@/types/page-definitions";
import { createCollection } from "@/lib/create-collection";
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

const collection = createCollection<SpaceSlug, SpacePageDefinition>({
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
});

export const PUBLIC_SPACE_PAGE_SLUGS = collection.publicSlugs;
export const getSpacePageBySlug = collection.getBySlug;
