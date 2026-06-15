import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";

// --- Sources FR (existantes) ---
import { page as home } from "./home";
import { page as aPropos } from "./a-propos";
import { page as contact } from "./contact";
import { page as materiaux } from "./materiaux";
import { page as processus } from "./processus";
import { page as projets } from "./projets";
import { page as services } from "./services";
import { renovationPage as servicesRenovation } from "@/data/page-builder/service-pages/renovation";

const fr = {
  home,
  "a-propos": aPropos,
  contact,
  materiaux,
  processus,
  projets,
  services,
  "services-renovation": servicesRenovation,
} satisfies Record<string, PageTemplateData>;

// --- Traductions EN (remplies incrémentalement par l'IA, fallback FR) ---
const en: Partial<Record<keyof typeof fr, PageTemplateData>> = {};

export type StaticPageKey = keyof typeof fr;

export function getStaticPage(
  key: StaticPageKey,
  locale: AppLocale = "fr",
): PageTemplateData {
  if (locale === "en") return en[key] ?? fr[key];
  return fr[key];
}
