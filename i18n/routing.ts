import { defineRouting } from "next-intl/routing";

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
    "/espaces/[space]": { fr: "/espaces/[space]", en: "/spaces/[space]" },
    "/projets": { fr: "/projets", en: "/projects" },
    "/projets/[space]": { fr: "/projets/[space]", en: "/projects/[space]" },
    "/projets/[space]/[slug]": {
      fr: "/projets/[space]/[slug]",
      en: "/projects/[space]/[slug]",
    },
    "/materiaux": { fr: "/materiaux", en: "/materials" },
    "/materiaux/[slug]": { fr: "/materiaux/[slug]", en: "/materials/[slug]" },
    "/services": "/services",
    "/services/[slug]": "/services/[slug]",
    "/services/renovation": {
      fr: "/services/renovation",
      en: "/services/renovation",
    },
    "/services/renovation/[type]": {
      fr: "/services/renovation/[type]",
      en: "/services/renovation/[type]",
    },
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
