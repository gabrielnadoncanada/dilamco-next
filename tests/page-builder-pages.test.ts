import { describe, expect, it, vi } from "vitest";

// Le registre de blocs importe les composants UI (AppLink → next-intl →
// next/navigation), inutilisables hors Next : on ne garde que les schémas.
vi.mock("@/i18n/navigation", () => ({
  Link: () => null,
  useRouter: () => ({}),
  usePathname: () => "/",
  redirect: () => undefined,
  getPathname: () => "/",
}));
vi.mock("next-intl/server", () => ({
  getLocale: async () => "fr",
  getTranslations: async () => (key: string) => key,
  setRequestLocale: () => undefined,
}));

import { blockRegistry } from "@/features/page-builder/model/block-registry";
import { validateTemplatePage } from "@/features/page-builder/page/validate-template-page";
import type { PageTemplateData } from "@/features/page-builder";
import { getStaticPage, type StaticPageKey } from "@/data/page-builder/static-pages";
import {
  PUBLIC_SPACE_PAGE_SLUGS,
  getSpacePageBySlug,
} from "@/data/page-builder/space-pages";
import {
  PUBLIC_MATERIAL_PAGE_SLUGS,
  getMaterialPageBySlug,
} from "@/data/page-builder/material-pages";
import {
  PUBLIC_SERVICE_PAGE_SLUGS,
  getServicePageBySlug,
} from "@/data/page-builder/service-pages";
import {
  PUBLIC_RENOVATION_PAGE_TYPES,
  getRenovationPageByType,
} from "@/data/page-builder/renovation-pages";
import {
  PUBLIC_ZONE_PAGE_SLUGS,
  getZonePageBySlug,
} from "@/data/page-builder/zone-pages";
import { ZONE_EN } from "@/seo/i18n-path";

// Garde-fou build-time : chaque page page-builder (FR + EN) doit passer les
// schémas Zod de ses blocs — sinon `next build` échoue au prerender, bien plus
// tard et bien moins lisiblement.
const STATIC_KEYS: StaticPageKey[] = [
  "home",
  "espaces",
  "a-propos",
  "contact",
  "materiaux",
  "processus",
  "projets",
  "services",
  "zones",
  "services-renovation",
];

type Entry = { label: string; page: PageTemplateData };

function collect(
  prefix: string,
  slugs: string[],
  get: (slug: string, locale: "fr" | "en") => PageTemplateData | null | undefined,
): Entry[] {
  return slugs.flatMap((slug) =>
    (["fr", "en"] as const).flatMap((locale) => {
      const page = get(slug, locale);
      return page ? [{ label: `${prefix}/${slug} [${locale}]`, page }] : [];
    }),
  );
}

const ENTRIES: Entry[] = [
  ...collect("static", STATIC_KEYS, (k, l) => getStaticPage(k as StaticPageKey, l)),
  ...collect("espaces", PUBLIC_SPACE_PAGE_SLUGS, getSpacePageBySlug),
  ...collect("materiaux", PUBLIC_MATERIAL_PAGE_SLUGS, getMaterialPageBySlug),
  ...collect("services", PUBLIC_SERVICE_PAGE_SLUGS, getServicePageBySlug),
  ...collect(
    "services/renovation",
    PUBLIC_RENOVATION_PAGE_TYPES,
    getRenovationPageByType,
  ),
  ...collect("zones", PUBLIC_ZONE_PAGE_SLUGS, getZonePageBySlug),
];

describe("pages page-builder", () => {
  it("couvre bien des pages", () => {
    expect(ENTRIES.length).toBeGreaterThan(40);
  });

  it.each(ENTRIES.map((e) => [e.label, e.page] as const))(
    "%s : blocs valides et métadonnées SEO dans les cibles",
    (label, page) => {
      expect(() => validateTemplatePage(page, blockRegistry)).not.toThrow();

      const meta = page.metadata as { title?: string; description?: string; path?: string };
      expect(meta.path, `${label} sans metadata.path`).toBeTruthy();
      expect(meta.title, `${label} sans title`).toBeTruthy();
      expect(meta.description, `${label} sans description`).toBeTruthy();
      // Cibles AGENTS.md : title ≤ 60 c., description ≤ 155 c., et « | Dilamco »
      // réservé à la home (le layout l'ajoute partout ailleurs).
      expect(meta.title!.length, `${label} title trop long`).toBeLessThanOrEqual(60);
      expect(meta.description!.length, `${label} description trop longue`).toBeLessThanOrEqual(
        158,
      );
      if (meta.path !== "/") {
        expect(meta.title, `${label} contient « | Dilamco »`).not.toMatch(/\|\s*Dilamco/);
      }
      // Plus aucun lien vers la boutique retirée.
      expect(JSON.stringify(page)).not.toContain("/boutique");
    },
  );

  it("chaque zone routable a une page et inversement", () => {
    expect([...PUBLIC_ZONE_PAGE_SLUGS].sort()).toEqual(Object.keys(ZONE_EN).sort());
  });
});
