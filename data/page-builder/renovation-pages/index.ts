import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { agrandissementMaisonPage } from "./agrandissement-de-maison";
import { renovationCuisinePage } from "./cuisine";
import { renovationPlancherPage } from "./plancher";
import { renovationSalleDeBainPage } from "./salle-de-bain";
import { agrandissementMaisonPageEn } from "./agrandissement-de-maison.en";
import { renovationCuisinePageEn } from "./cuisine.en";
import { renovationPlancherPageEn } from "./plancher.en";
import { renovationSalleDeBainPageEn } from "./salle-de-bain.en";

const renovationPages = {
  cuisine: renovationCuisinePage,
  "salle-de-bain": renovationSalleDeBainPage,
  plancher: renovationPlancherPage,
  "agrandissement-de-maison": agrandissementMaisonPage,
};

const renovationPagesEn: Partial<
  Record<keyof typeof renovationPages, PageTemplateData>
> = {
  cuisine: renovationCuisinePageEn,
  "salle-de-bain": renovationSalleDeBainPageEn,
  plancher: renovationPlancherPageEn,
  "agrandissement-de-maison": agrandissementMaisonPageEn,
};

export const PUBLIC_RENOVATION_PAGE_TYPES = Object.keys(renovationPages);

export function getRenovationPageByType(type: string, locale: AppLocale = "fr") {
  const key = type as keyof typeof renovationPages;
  if (locale === "en")
    return renovationPagesEn[key] ?? renovationPages[key] ?? null;
  return renovationPages[key] ?? null;
}
