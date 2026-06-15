import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { agrandissementMaisonPage } from "./agrandissement-de-maison";
import { renovationCuisinePage } from "./cuisine";
import { renovationPlancherPage } from "./plancher";
import { renovationSalleDeBainPage } from "./salle-de-bain";

const renovationPages = {
  cuisine: renovationCuisinePage,
  "salle-de-bain": renovationSalleDeBainPage,
  plancher: renovationPlancherPage,
  "agrandissement-de-maison": agrandissementMaisonPage,
};

const renovationPagesEn: Partial<
  Record<keyof typeof renovationPages, PageTemplateData>
> = {};

export const PUBLIC_RENOVATION_PAGE_TYPES = Object.keys(renovationPages);

export function getRenovationPageByType(type: string, locale: AppLocale = "fr") {
  const key = type as keyof typeof renovationPages;
  if (locale === "en")
    return renovationPagesEn[key] ?? renovationPages[key] ?? null;
  return renovationPages[key] ?? null;
}
