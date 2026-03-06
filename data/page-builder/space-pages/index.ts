import type { PageTemplateData } from "@/page-builder";
import { commercialPage } from "./commercial";
import { cuisinePage } from "./cuisine";
import { salleDeBainPage } from "./salle-de-bain";
import { salleDeLavagePage } from "./salle-de-lavage";
import { walkInPage } from "./walk-in";

const spacePages = {
  cuisine: cuisinePage,
  "salle-de-bain": salleDeBainPage,
  "salle-de-lavage": salleDeLavagePage,
  "walk-in": walkInPage,
  commercial: commercialPage,
} satisfies Record<string, PageTemplateData>;

export const PUBLIC_SPACE_PAGE_SLUGS = Object.keys(spacePages);

export function getSpacePageBySlug(slug: string) {
  return spacePages[slug as keyof typeof spacePages] ?? null;
}
