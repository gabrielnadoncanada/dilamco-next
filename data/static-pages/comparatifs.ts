import type { PageFeatures } from "@/types/page-features";
import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const features: PageFeatures = {};

export const metadata: Metadata = createPageMetadata({
  title: "Comparatifs",
  description:
    "Comparatifs pour aider à choisir : sur mesure vs IKEA, sur mesure vs Home Depot, cuisiniste vs entrepreneur général.",
  path: "/comparatifs/",
  ogAlt: "Comparatifs Dilamco - Sur mesure vs alternatives",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
  ],
  hero: {
    heading: "Comparatifs - faire le bon choix avant d'investir",
    description:
      "Ces comparatifs vous aident à décider avec des critères concrets : matériaux, exécution, coordination et coûts cachés.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      id: "liste",
      title: "Comparatifs disponibles",
      intro: "Choisissez le comparatif le plus proche de votre situation.",
      content: {
        type: SECTION_TYPES.FEATURE_GRID,
        items: [
          {
            title: "Cuisine sur mesure vs IKEA",
            description:
              "Personnalisation réelle, durabilité, installation et compromis à anticiper.",
            href: "/comparatifs/cuisine-sur-mesure-vs-ikea/",
          },
          {
            title: "Cuisine sur mesure vs Home Depot",
            description:
              "Finition, adaptation à l'espace et stabilité du résultat dans le temps.",
            href: "/comparatifs/cuisine-sur-mesure-vs-home-depot/",
          },
          {
            title: "Cuisiniste vs entrepreneur général",
            description:
              "Responsabilités, coordination du chantier et gestion des imprévus.",
            href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "criteres",
      title: "Comment comparer efficacement",
      intro: "Avant de décider, comparez avec des critères stables.",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Durabilité : structure, chants, quincaillerie.",
          "Personnalisation : adaptation réelle à l'espace.",
          "Installation : alignements et ajustements.",
          "Risques cachés : coordination, délais, reprises.",
        ],
        variant: "bullets",
        links: [
          {
            text: "Voir les matériaux",
            href: "/materiaux/",
            variant: "outline",
          },
          {
            text: "Voir l'installation",
            href: "/services/installation/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "situations",
      title: "Choisir selon votre situation",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Résultat durable : privilégier le sur mesure adapté.",
          "Moins de gestion chantier : approche clé en main.",
          "Besoin d'orientation : commencer par cadrer le design.",
        ],
        variant: "bullets",
        links: [
          {
            text: "Cuisine sur mesure",
            href: "/espaces/cuisine/",
            variant: "outline",
          },
          {
            text: "Rénovation clé en main",
            href: "/services/renovation/",
            variant: "outline",
          },
          {
            text: "Service de design",
            href: "/services/design/",
            variant: "outline",
          },
        ],
      },
    },
  ],
};
