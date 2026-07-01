import { defineRouting } from "next-intl/routing";
import {
  SPACE_EN,
  RENOVATION_EN,
  MATERIAL_EN,
  PROJECT_SLUG_EN,
  BOUTIQUE_TAXON_EN,
  ZONE_EN,
} from "@/seo/i18n-path";

// Pathnames explicites par espace : la VALEUR du slug est traduite
// (/projets/cuisine -> /en/projects/kitchen). next-intl gère alors liens,
// routing et redirections de façon cohérente.
const spacePathnames = Object.fromEntries(
  Object.entries(SPACE_EN).flatMap(([fr, en]) => [
    [`/espaces/${fr}`, { fr: `/espaces/${fr}`, en: `/spaces/${en}` }],
    [`/projets/${fr}`, { fr: `/projets/${fr}`, en: `/projects/${en}` }],
  ]),
);

// Pathnames explicites par projet : le slug du projet est traduit
// (/projets/salle-de-bain/vanite-sur-mesure-laval ->
//  /en/projects/bathroom/custom-vanity-laval). Énumérés (pas de [slug])
// car next-intl ne traduit pas les segments dynamiques.
const projectPathnames = Object.fromEntries(
  Object.entries(PROJECT_SLUG_EN).map(([frKey, enSlug]) => {
    const [frSpace, frSlug] = frKey.split("/");
    const enSpace = SPACE_EN[frSpace] ?? frSpace;
    return [
      `/projets/${frSpace}/${frSlug}`,
      {
        fr: `/projets/${frSpace}/${frSlug}`,
        en: `/projects/${enSpace}/${enSlug}`,
      },
    ];
  }),
);

// Pathnames explicites par type de rénovation : le slug est traduit
// (/services/renovation/cuisine -> /en/services/renovation/kitchen).
const renovationPathnames = Object.fromEntries(
  Object.entries(RENOVATION_EN).map(([fr, en]) => [
    `/services/renovation/${fr}`,
    { fr: `/services/renovation/${fr}`, en: `/services/renovation/${en}` },
  ]),
);

// Pathnames explicites par zone desservie (/zones/laval -> /en/areas/laval).
// Slug de ville identique FR/EN ; seul le 1er segment se traduit.
const zonePathnames = Object.fromEntries(
  Object.entries(ZONE_EN).map(([fr, en]) => [
    `/zones/${fr}`,
    { fr: `/zones/${fr}`, en: `/areas/${en}` },
  ]),
);

// Pathnames explicites par matériau : la VALEUR du slug est traduite
// (/materiaux/contreplaque -> /en/materials/plywood). On énumère chaque
// matériau au lieu d'un générique [slug], car next-intl ne traduit pas les
// segments dynamiques (ils passent tels quels).
const materialPathnames = Object.fromEntries(
  Object.entries(MATERIAL_EN).map(([fr, en]) => [
    `/materiaux/${fr}`,
    { fr: `/materiaux/${fr}`, en: `/materials/${en}` },
  ]),
);

// Pathnames explicites de la taxonomie boutique (slugs FR mot-clé traduits :
// /boutique/armoires-cuisine -> /en/shop/kitchen-cabinets).
const boutiqueTaxonPathnames = Object.fromEntries(
  Object.entries(BOUTIQUE_TAXON_EN).map(([fr, en]) => [
    `/boutique/${fr}`,
    { fr: `/boutique/${fr}`, en: `/shop/${en}` },
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
  // Pas de header HTTP `Link` hreflang (next-intl l'émet en codes "fr"/"en",
  // incohérents avec le hreflang HTML + sitemap en "fr-CA"/"en-CA").
  // Le hreflang est porté par les balises <link> du <head> et le sitemap.
  alternateLinks: false,
  // URLs localisées : clé = pathname interne (= structure de dossiers, FR),
  // valeur = URL externe par locale. FR identique (zéro régression), EN traduit.
  // Les valeurs de segments dynamiques (cuisine, slug…) passent telles quelles.
  pathnames: {
    "/": "/",
    "/espaces": { fr: "/espaces", en: "/spaces" },
    "/projets": { fr: "/projets", en: "/projects" },
    ...spacePathnames,
    ...projectPathnames,
    "/materiaux": { fr: "/materiaux", en: "/materials" },
    ...materialPathnames,
    "/services": "/services",
    "/services/[slug]": "/services/[slug]",
    "/services/renovation": {
      fr: "/services/renovation",
      en: "/services/renovation",
    },
    ...renovationPathnames,
    ...zonePathnames,
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
    // Boutique : seul le 1er segment se traduit (boutique -> shop). Les slugs
    // de catégorie sont déjà identiques FR/EN (données bilingues), et les
    // segments produit/finitions/soumission restent inchangés. Synchronisé
    // avec AppLink TEMPLATES, seo/i18n-path.ts et next-sitemap.config.js.
    "/boutique": { fr: "/boutique", en: "/shop" },
    ...boutiqueTaxonPathnames,
    "/boutique/produit/[id]": {
      fr: "/boutique/produit/[id]",
      en: "/shop/produit/[id]",
    },
    "/boutique/finitions": { fr: "/boutique/finitions", en: "/shop/finitions" },
    "/boutique/soumission": {
      fr: "/boutique/soumission",
      en: "/shop/soumission",
    },
  },
});

export type AppLocale = (typeof routing.locales)[number];
