import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { zoneLavalPage } from "./laval";
import { zoneLavalPageEn } from "./laval.en";

// Pages géo (SEO local) : une page par zone desservie. Le slug FR = slug EN
// (noms de villes) ; l'énumération vit dans ZONE_EN (seo/i18n-path.ts) qui
// DOIT rester synchronisée avec les clés de zonePages.
const zonePages = {
  laval: zoneLavalPage,
} satisfies Record<string, PageTemplateData>;

const zonePagesEn: Partial<Record<keyof typeof zonePages, PageTemplateData>> = {
  laval: zoneLavalPageEn,
};

export const PUBLIC_ZONE_PAGE_SLUGS = Object.keys(zonePages);

export function getZonePageBySlug(slug: string, locale: AppLocale = "fr") {
  const key = slug as keyof typeof zonePages;
  if (locale === "en") return zonePagesEn[key] ?? zonePages[key] ?? null;
  return zonePages[key] ?? null;
}
