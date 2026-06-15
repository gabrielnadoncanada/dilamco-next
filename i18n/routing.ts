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
});

export type AppLocale = (typeof routing.locales)[number];
