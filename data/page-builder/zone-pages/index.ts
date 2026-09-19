import type { PageTemplateData } from "@/features/page-builder";
import type { AppLocale } from "@/i18n/routing";
import { ZONE_EN } from "@/seo/i18n-path";
import { zonePierrefondsRoxboroPage } from "./pierrefonds-roxboro";
import { zoneDollardDesOrmeauxPage } from "./dollard-des-ormeaux";
import { zoneKirklandPage } from "./kirkland";
import { zonePointeClairePage } from "./pointe-claire";
import { zoneBeaconsfieldPage } from "./beaconsfield";
import { zoneDorvalPage } from "./dorval";
import { zoneIleBizardSainteGenevievePage } from "./ile-bizard-sainte-genevieve";
import { zoneSaintLaurentPage } from "./saint-laurent";
import { zoneLavalPage } from "./laval";
import { zoneVaudreuilDorionPage } from "./vaudreuil-dorion";
import { zoneRiveSudPage } from "./rive-sud";
import { zonePierrefondsRoxboroPageEn } from "./pierrefonds-roxboro.en";
import { zoneDollardDesOrmeauxPageEn } from "./dollard-des-ormeaux.en";
import { zoneKirklandPageEn } from "./kirkland.en";
import { zonePointeClairePageEn } from "./pointe-claire.en";
import { zoneBeaconsfieldPageEn } from "./beaconsfield.en";
import { zoneDorvalPageEn } from "./dorval.en";
import { zoneIleBizardSainteGenevievePageEn } from "./ile-bizard-sainte-genevieve.en";
import { zoneSaintLaurentPageEn } from "./saint-laurent.en";
import { zoneLavalPageEn } from "./laval.en";
import { zoneVaudreuilDorionPageEn } from "./vaudreuil-dorion.en";
import { zoneRiveSudPageEn } from "./rive-sud.en";

// Pages géo (SEO local) : une par ville desservie. Les slugs sont bornés par
// ZONE_EN (seo/i18n-path.ts) — une assertion ci-dessous garantit la synchro.
const zonePages = {
  "pierrefonds-roxboro": zonePierrefondsRoxboroPage,
  "dollard-des-ormeaux": zoneDollardDesOrmeauxPage,
  kirkland: zoneKirklandPage,
  "pointe-claire": zonePointeClairePage,
  beaconsfield: zoneBeaconsfieldPage,
  dorval: zoneDorvalPage,
  "ile-bizard-sainte-genevieve": zoneIleBizardSainteGenevievePage,
  "saint-laurent": zoneSaintLaurentPage,
  laval: zoneLavalPage,
  "vaudreuil-dorion": zoneVaudreuilDorionPage,
  "rive-sud": zoneRiveSudPage,
} satisfies Record<string, PageTemplateData>;

const zonePagesEn: Partial<Record<keyof typeof zonePages, PageTemplateData>> = {
  "pierrefonds-roxboro": zonePierrefondsRoxboroPageEn,
  "dollard-des-ormeaux": zoneDollardDesOrmeauxPageEn,
  kirkland: zoneKirklandPageEn,
  "pointe-claire": zonePointeClairePageEn,
  beaconsfield: zoneBeaconsfieldPageEn,
  dorval: zoneDorvalPageEn,
  "ile-bizard-sainte-genevieve": zoneIleBizardSainteGenevievePageEn,
  "saint-laurent": zoneSaintLaurentPageEn,
  laval: zoneLavalPageEn,
  "vaudreuil-dorion": zoneVaudreuilDorionPageEn,
  "rive-sud": zoneRiveSudPageEn,
};

export const PUBLIC_ZONE_PAGE_SLUGS = Object.keys(zonePages);

// Garde-fou : chaque zone publiée doit être routable (ZONE_EN) et inversement.
for (const slug of PUBLIC_ZONE_PAGE_SLUGS) {
  if (!(slug in ZONE_EN)) {
    throw new Error(`zone-pages: "${slug}" absent de ZONE_EN (seo/i18n-path.ts)`);
  }
}
for (const slug of Object.keys(ZONE_EN)) {
  if (!(slug in zonePages)) {
    throw new Error(`ZONE_EN: "${slug}" sans page dans data/page-builder/zone-pages`);
  }
}

export function getZonePageBySlug(slug: string, locale: AppLocale = "fr") {
  const key = slug as keyof typeof zonePages;
  if (locale === "en") return zonePagesEn[key] ?? zonePages[key] ?? null;
  return zonePages[key] ?? null;
}
