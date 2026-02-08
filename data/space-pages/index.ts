import type { Metadata } from "next";
import type { ComponentType } from "react";
import CommercialPage, { metadata as commercialMetadata } from "@/data/space-pages/commercial";
import CuisinePage, { metadata as cuisineMetadata } from "@/data/space-pages/cuisine";
import SalleDeBainPage, {
  metadata as salleDeBainMetadata,
} from "@/data/space-pages/salle-de-bain";
import SalleDeLavagePage, {
  metadata as salleDeLavageMetadata,
} from "@/data/space-pages/salle-de-lavage";
import WalkInPage, { metadata as walkInMetadata } from "@/data/space-pages/walk-in";

export type SpaceSlug =
  | "cuisine"
  | "salle-de-bain"
  | "walk-in"
  | "salle-de-lavage"
  | "commercial";

interface SpacePageDefinition {
  Component: ComponentType;
  metadata: Metadata;
}

export const SPACE_PAGES: Record<SpaceSlug, SpacePageDefinition> = {
  cuisine: {
    Component: CuisinePage,
    metadata: cuisineMetadata,
  },
  "salle-de-bain": {
    Component: SalleDeBainPage,
    metadata: salleDeBainMetadata,
  },
  "walk-in": {
    Component: WalkInPage,
    metadata: walkInMetadata,
  },
  "salle-de-lavage": {
    Component: SalleDeLavagePage,
    metadata: salleDeLavageMetadata,
  },
  commercial: {
    Component: CommercialPage,
    metadata: commercialMetadata,
  },
};

export const SPACE_PAGE_SLUGS = Object.keys(SPACE_PAGES) as SpaceSlug[];

export function getSpacePageBySlug(slug: string) {
  return SPACE_PAGES[slug as SpaceSlug] ?? null;
}
