import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { designPage } from "./design";
import { fabricationPage } from "./fabrication";
import { installationPage } from "./installation";
import { renovationPage } from "./renovation";
import { designPageEn } from "./design.en";
import { fabricationPageEn } from "./fabrication.en";
import { installationPageEn } from "./installation.en";
import { renovationPageEn } from "./renovation.en";

const servicePages = {
  design: designPage,
  fabrication: fabricationPage,
  installation: installationPage,
  renovation: renovationPage,
} satisfies Record<string, PageTemplateData>;

const servicePagesEn: Partial<Record<keyof typeof servicePages, PageTemplateData>> =
  {
    design: designPageEn,
    fabrication: fabricationPageEn,
    installation: installationPageEn,
    renovation: renovationPageEn,
  };

export const PUBLIC_SERVICE_PAGE_SLUGS = Object.keys(servicePages);

export function getServicePageBySlug(slug: string, locale: AppLocale = "fr") {
  const key = slug as keyof typeof servicePages;
  if (locale === "en") return servicePagesEn[key] ?? servicePages[key] ?? null;
  return servicePages[key] ?? null;
}
