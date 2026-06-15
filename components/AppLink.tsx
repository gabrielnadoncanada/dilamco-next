"use client";

import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { SPACE_EN } from "@/seo/i18n-path";

// Templates explicites par espace (valeur traduite via routing.ts).
const SPACE_TEMPLATES = Object.keys(SPACE_EN).flatMap((s) => [
  `/espaces/${s}`,
  `/projets/${s}`,
  `/projets/${s}/[slug]`,
]);

// Pathnames internes connus (doivent rester synchronisés avec i18n/routing.ts).
// Les plus spécifiques (espaces) en premier pour gagner le match.
const TEMPLATES = [
  "/",
  ...SPACE_TEMPLATES,
  "/espaces",
  "/projets",
  "/materiaux",
  "/materiaux/[slug]",
  "/services",
  "/services/[slug]",
  "/services/renovation",
  "/services/renovation/[type]",
  "/a-propos",
  "/contact",
  "/processus",
  "/politique-de-confidentialite",
  "/conditions-dutilisation",
  "/landing",
  "/landing/construction",
] as const;

type IntlHref = ComponentProps<typeof Link>["href"];

// Convertit un chemin concret ("/espaces/cuisine") en href typé next-intl
// ({ pathname: "/espaces/[space]", params: { space: "cuisine" } }).
// Renvoie null si aucun template ne correspond (lien externe/inconnu).
function toIntlHref(path: string): IntlHref | null {
  const clean = (path.split(/[?#]/)[0] || "/").replace(/\/+$/, "") || "/";
  const segs = clean === "/" ? [] : clean.slice(1).split("/");

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
    return (
      Object.keys(params).length
        ? { pathname: tpl, params }
        : tpl
    ) as IntlHref;
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
