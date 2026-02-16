import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Projets",
  description:
    "Découvrez nos réalisations sur mesure : cuisines, vanités, walk-in, salles de lavage et projets commerciaux.",
  path: "/projets/",
  ogAlt: "Réalisations Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ],
  hero: {
    heading: "Réalisations sur mesure : cuisines, vanités et espaces intégrés",
    description:
      "Des projets livrés à Montréal, Laval et sur la Rive-Sud — avec une exécution propre et des finitions soignées.",
    actions: [
      { text: "Explorer par espace", href: "/espaces/", variant: "outline" },
      { text: "Obtenir une soumission", href: "/contact/" },
    ],
  },
  sections: [
    {
      id: "categories",
      title: "Explorer par catégorie",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        intro:
          "Parcourez nos projets par type d’espace pour trouver des configurations proches de votre besoin et de votre budget.",
        items: [
          {
            title: "Cuisines sur mesure",
            href: "/projets/cuisine/",
            description:
              "Armoires, îlots et rangements — avec ou sans rénovation.",
          },
          {
            title: "Salles de bain & vanités",
            href: "/projets/salle-de-bain/",
            description:
              "Solutions adaptées à l’humidité, durables et élégantes.",
          },
          {
            title: "Walk-in & rangement",
            href: "/projets/walk-in/",
            description:
              "Organisation intelligente : tiroirs, suspendus, accessoires.",
          },
          {
            title: "Salles de lavage",
            href: "/projets/salle-de-lavage/",
            description: "Aménagements robustes, faciles à vivre au quotidien.",
          },
          {
            title: "Commercial",
            href: "/projets/commercial/",
            description:
              "Mobilier et rangement sur mesure pour environnements pro.",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "recent",
      title: "Dernières réalisations",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Cuisine sur mesure — Montréal",
            href: "/projets/cuisine/cuisine-sur-mesure-montreal/",
          },
          {
            title: "Vanité sur mesure — Laval",
            href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
          },
          {
            title: "Cuisine sur mesure — Rive-Sud",
            href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "processus",
      title: "Notre démarche de projet",
      content: {
        type: SECTION_TYPES.PROCESS,
        description:
          "Un processus simple et cadré : décisions validées tôt, exécution précise, résultat durable.",
        items: [
          {
            step: "1",
            title: "Analyse & conception",
            description:
              "On clarifie vos besoins, contraintes et priorités, puis on valide l’implantation.",
          },
          {
            step: "2",
            title: "Plans & préparation",
            description:
              "Plans détaillés et choix de matériaux/finitions confirmés avant la production.",
          },
          {
            step: "3",
            title: "Fabrication contrôlée",
            description:
              "Production sur mesure avec contrôle qualité pour assurer un rendu cohérent.",
          },
          {
            step: "4",
            title: "Installation & finition",
            description:
              "Ajustements précis, alignements nets et inspection finale avant livraison.",
          },
        ],
      },
    },
  ],
};
