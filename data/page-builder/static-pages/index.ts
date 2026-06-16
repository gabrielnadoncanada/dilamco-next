import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";

// --- Sources FR (existantes) ---
import { page as home } from "./home";
import { page as espaces } from "./espaces";
import { page as aPropos } from "./a-propos";
import { page as contact } from "./contact";
import { page as materiaux } from "./materiaux";
import { page as processus } from "./processus";
import { page as projets } from "./projets";
import { page as services } from "./services";
import { renovationPage as servicesRenovation } from "@/data/page-builder/service-pages/renovation";

// --- Traductions EN ---
import { pageEn as homeEn } from "./home.en";
import { pageEn as espacesEn } from "./espaces.en";
import { pageEn as aProposEn } from "./a-propos.en";
import { pageEn as contactEn } from "./contact.en";
import { pageEn as materiauxEn } from "./materiaux.en";
import { pageEn as processusEn } from "./processus.en";
import { pageEn as projetsEn } from "./projets.en";
import { pageEn as servicesEn } from "./services.en";
import { renovationPageEn as servicesRenovationEn } from "@/data/page-builder/service-pages/renovation.en";

const fr = {
  home,
  espaces,
  "a-propos": aPropos,
  contact,
  materiaux,
  processus,
  projets,
  services,
  "services-renovation": servicesRenovation,
} satisfies Record<string, PageTemplateData>;

const en: Partial<Record<keyof typeof fr, PageTemplateData>> = {
  home: homeEn,
  espaces: espacesEn,
  "a-propos": aProposEn,
  contact: contactEn,
  materiaux: materiauxEn,
  processus: processusEn,
  projets: projetsEn,
  services: servicesEn,
  "services-renovation": servicesRenovationEn,
};

export type StaticPageKey = keyof typeof fr;

export function getStaticPage(
  key: StaticPageKey,
  locale: AppLocale = "fr",
): PageTemplateData {
  if (locale === "en") return en[key] ?? fr[key];
  return fr[key];
}
