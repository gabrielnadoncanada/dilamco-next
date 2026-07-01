"use client";

import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import {
  SPACE_EN,
  MATERIAL_EN,
  RENOVATION_EN,
  PROJECT_SLUG_EN,
  BOUTIQUE_TAXON_EN,
  ZONE_EN,
} from "@/seo/i18n-path";

// Templates explicites par espace (valeur traduite via routing.ts).
const SPACE_TEMPLATES = Object.keys(SPACE_EN).flatMap((s) => [
  `/espaces/${s}`,
  `/projets/${s}`,
]);

// Templates littéraux par projet (slug traduit via routing.ts). Énumérés car
// routing.ts ne déclare que les valeurs littérales : un [slug] générique ne
// serait pas résolu par next-intl. Clé = `${espace FR}/${slug FR}`.
const PROJECT_TEMPLATES = Object.keys(PROJECT_SLUG_EN).map((k) => `/projets/${k}`);

// Templates littéraux par matériau (slug traduit via routing.ts) : doivent
// gagner le match avant un éventuel générique, comme les espaces.
const MATERIAL_TEMPLATES = Object.keys(MATERIAL_EN).map((m) => `/materiaux/${m}`);

// Templates littéraux par type de rénovation (slug traduit via routing.ts).
// Énumérés (pas de générique [type]) car routing.ts ne déclare que les valeurs
// littérales : un template dynamique ne serait pas résolu par next-intl.
const RENOVATION_TEMPLATES = Object.keys(RENOVATION_EN).map(
  (r) => `/services/renovation/${r}`,
);

// Templates littéraux par zone desservie (segment zones -> areas via routing.ts).
const ZONE_TEMPLATES = Object.keys(ZONE_EN).map((z) => `/zones/${z}`);

// Templates des collections boutique (slug mot-clé traduit via routing.ts),
// dérivés de la map légère BOUTIQUE_TAXON_EN → auto-synchronisés avec
// lib/shop/collections.ts (garde-fou build-time). Plus profond d'abord.
const BOUTIQUE_COLLECTION_TEMPLATES = Object.keys(BOUTIQUE_TAXON_EN)
  .sort((a, b) => b.split("/").length - a.split("/").length)
  .map((sub) => `/boutique/${sub}`);

// Pathnames internes connus (doivent rester synchronisés avec i18n/routing.ts).
// Les plus spécifiques (espaces) en premier pour gagner le match.
const TEMPLATES = [
  "/",
  ...PROJECT_TEMPLATES,
  ...SPACE_TEMPLATES,
  "/espaces",
  "/projets",
  "/materiaux",
  ...MATERIAL_TEMPLATES,
  "/services",
  "/services/[slug]",
  "/services/renovation",
  ...RENOVATION_TEMPLATES,
  ...ZONE_TEMPLATES,
  "/a-propos",
  "/contact",
  "/processus",
  "/politique-de-confidentialite",
  "/conditions-dutilisation",
  "/landing",
  "/landing/construction",
  // Boutique : collections (dérivées de BOUTIQUE_TAXON_EN, sous-collections
  // d'abord) puis routes fixes. Synchronisé avec i18n/routing.ts.
  ...BOUTIQUE_COLLECTION_TEMPLATES,
  "/boutique/produit/[id]",
  "/boutique/finitions",
  "/boutique/soumission",
  "/boutique",
] as const;

type IntlHref = ComponentProps<typeof Link>["href"];

// Convertit un chemin concret ("/espaces/cuisine") en href typé next-intl
// ({ pathname: "/espaces/[space]", params: { space: "cuisine" } }).
// Renvoie null si aucun template ne correspond (lien externe/inconnu).
function toIntlHref(path: string): IntlHref | null {
  const clean = (path.split(/[?#]/)[0] || "/").replace(/\/+$/, "") || "/";
  const segs = clean === "/" ? [] : clean.slice(1).split("/");

  // Préserve le query string (ex. ?couleur=chene) : sinon il serait perdu en
  // reconstruisant le href typé next-intl.
  const qIndex = path.indexOf("?");
  const queryString = qIndex >= 0 ? path.slice(qIndex + 1).split("#")[0] : "";
  const query = queryString
    ? Object.fromEntries(new URLSearchParams(queryString))
    : undefined;

  for (const tpl of TEMPLATES) {
    const tsegs = tpl === "/" ? [] : tpl.slice(1).split("/");
    if (tsegs.length !== segs.length) continue;
    const params: Record<string, string> = {};
    let ok = true;
    for (let i = 0; i < tsegs.length; i += 1) {
      const t = tsegs[i];
      if (t.startsWith("[")) params[t.slice(1, -1)] = segs[i];
      else if (t !== segs[i]) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    const hasParams = Object.keys(params).length > 0;
    if (!hasParams && !query) return tpl as IntlHref;
    const href: Record<string, unknown> = { pathname: tpl };
    if (hasParams) href.params = params;
    if (query) href.query = query;
    return href as IntlHref;
  }
  return null;
}

type AppLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children?: ReactNode;
};

/**
 * Lien interne locale-aware (drop-in pour next/link).
 * Localise automatiquement l'URL (FR à la racine, EN sous /en avec segments
 * traduits) en convertissant le href string en href typé next-intl.
 * Les liens externes (http, mailto, #) passent par une balise <a> simple.
 */
export function AppLink({ href, children, ...rest }: AppLinkProps) {
  if (typeof href !== "string" || !href.startsWith("/")) {
    // Externe / ancre / mailto : lien brut.
    const { locale: _locale, ...anchorRest } = rest as Record<string, unknown>;
    void _locale;
    return (
      <a href={href} {...(anchorRest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  const intlHref = toIntlHref(href);
  if (!intlHref) {
    const { locale: _locale, ...anchorRest } = rest as Record<string, unknown>;
    void _locale;
    return (
      <a href={href} {...(anchorRest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={intlHref} {...rest}>
      {children}
    </Link>
  );
}
