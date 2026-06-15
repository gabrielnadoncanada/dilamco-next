import type { MaterialSlug } from "@/types/page-slugs";
import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { boisMassifPage } from "./bois-massif";
import { comparatifPage } from "./comparatif";
import { contreplaquePage } from "./contreplaque";
import { couleursPage } from "./couleurs";
import { mdfPage } from "./mdf";
import { melaminePage } from "./melamine";
import { quincailleriePage } from "./quincaillerie";

const materialPages = {
  "bois-massif": boisMassifPage,
  comparatif: comparatifPage,
  contreplaque: contreplaquePage,
  couleurs: couleursPage,
  mdf: mdfPage,
  melamine: melaminePage,
  quincaillerie: quincailleriePage,
} satisfies Record<MaterialSlug, PageTemplateData>;

const materialPagesEn: Partial<Record<MaterialSlug, PageTemplateData>> = {};

export const PUBLIC_MATERIAL_PAGE_SLUGS = Object.keys(
  materialPages,
) as MaterialSlug[];

export function getMaterialPageBySlug(slug: string, locale: AppLocale = "fr") {
  const key = slug as keyof typeof materialPages;
  if (locale === "en") return materialPagesEn[key] ?? materialPages[key] ?? null;
  return materialPages[key] ?? null;
}
