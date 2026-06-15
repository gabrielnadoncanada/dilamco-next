import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { commercialPage } from "./commercial";
import { cuisinePage } from "./cuisine";
import { salleDeBainPage } from "./salle-de-bain";
import { salleDeLavagePage } from "./salle-de-lavage";
import { sousSolPage } from "./sous-sol";
import { walkInPage } from "./walk-in";
import { cuisinePageEn } from "./cuisine.en";
import { salleDeBainPageEn } from "./salle-de-bain.en";
import { salleDeLavagePageEn } from "./salle-de-lavage.en";
import { walkInPageEn } from "./walk-in.en";
import { sousSolPageEn } from "./sous-sol.en";
import { commercialPageEn } from "./commercial.en";

const spacePages = {
  cuisine: cuisinePage,
  "salle-de-bain": salleDeBainPage,
  "salle-de-lavage": salleDeLavagePage,
  "walk-in": walkInPage,
  "sous-sol": sousSolPage,
  commercial: commercialPage,
} satisfies Record<string, PageTemplateData>;

// Traductions EN (remplies incrémentalement par l'IA, fallback FR).
const spacePagesEn: Partial<Record<keyof typeof spacePages, PageTemplateData>> =
  {
    cuisine: cuisinePageEn,
    "salle-de-bain": salleDeBainPageEn,
    "salle-de-lavage": salleDeLavagePageEn,
    "walk-in": walkInPageEn,
    "sous-sol": sousSolPageEn,
    commercial: commercialPageEn,
  };

export const PUBLIC_SPACE_PAGE_SLUGS = Object.keys(spacePages);

export function getSpacePageBySlug(slug: string, locale: AppLocale = "fr") {
  const key = slug as keyof typeof spacePages;
  if (locale === "en") return spacePagesEn[key] ?? spacePages[key] ?? null;
  return spacePages[key] ?? null;
}
