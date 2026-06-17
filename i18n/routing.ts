import { defineRouting } from "next-intl/routing";
import { SPACE_EN, RENOVATION_EN } from "@/seo/i18n-path";

// Pathnames explicites par espace : la VALEUR du slug est traduite
// (/projets/cuisine -> /en/projects/kitchen). next-intl gère alors liens,
// routing et redirections de façon cohérente.
const spacePathnames = Object.fromEntries(
  Object.entries(SPACE_EN).flatMap(([fr, en]) => [
    [`/espaces/${fr}`, { fr: `/espaces/${fr}`, en: `/spaces/${en}` }],
    [`/projets/${fr}`, { fr: `/projets/${fr}`, en: `/projects/${en}` }],
    [
      `/projets/${fr}/[slug]`,
      { fr: `/projets/${fr}/[slug]`, en: `/projects/${en}/[slug]` },
    ],
  ]),
);

// Pathnames explicites par type de rénovation : le slug est traduit
// (/services/renovation/cuisine -> /en/services/renovation/kitchen).
const renovationPathnames = Object.fromEntries(
  Object.entries(RENOVATION_EN).map(([fr, en]) => [
    `/services/renovation/${fr}`,
    { fr: `/services/renovation/${fr}`, en: `/services/renovation/${en}` },
  ]),
);

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // FR à la racine (aucun /fr/), EN sous /en. Conforme Loi 96 + zéro
  // régression sur les URLs FR existantes.
  localePrefix: "as-needed",
  // On ne redirige JAMAIS automatiquement selon la langue du navigateur :
  // un visiteur anglophone sur une URL FR garde l'URL FR canonique.
  localeDetection: false,
  // URLs localisées : clé = pathname interne (= structure de dossiers, FR),
  // valeur = URL externe par locale. FR identique (zéro régression), EN traduit.
  // Les valeurs de segments dynamiques (cuisine, slug…) passent telles quelles.
  pathnames: {
    "/": "/",
    "/espaces": { fr: "/espaces", en: "/spaces" },
    "/projets": { fr: "/projets", en: "/projects" },
    ...spacePathnames,
    "/materiaux": { fr: "/materiaux", en: "/materials" },
    "/materiaux/[slug]": { fr: "/materiaux/[slug]", en: "/materials/[slug]" },
    "/services": "/services",
    "/services/[slug]": "/services/[slug]",
    "/services/renovation": {
      fr: "/services/renovation",
      en: "/services/renovation",
    },
    ...renovationPathnames,
    "/a-propos": { fr: "/a-propos", en: "/about" },
    "/contact": "/contact",
    "/processus": { fr: "/processus", en: "/process" },
    "/politique-de-confidentialite": {
      fr: "/politique-de-confidentialite",
      en: "/privacy-policy",
    },
    "/conditions-dutilisation": {
      fr: "/conditions-dutilisation",
      en: "/terms-of-use",
    },
    "/landing": "/landing",
    "/landing/construction": "/landing/construction",
  },
});

export type AppLocale = (typeof routing.locales)[number];
