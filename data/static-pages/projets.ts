import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Projets",
  description:
    "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial.",
  path: "/projets/",
  ogAlt: "Projets Dilamco",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ],
  hero: {
    heading: "Projets sur mesure, cuisines, salles de bain et rénovations",
    description:
      "Découvrez des projets réels livrés par Dilamco Ã  Montréal, Laval et sur la Rive-Sud.",
    actions: [
      { text: "Voir les espaces", href: "/espaces/", variant: "outline" },
      { text: "Parler de votre projet", href: "/contact/" },
    ],
  },
  sections: [
    {
      id: "categories",
      title: "Projets par catégorie",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        intro:
          "Filtrez par type d'espace pour voir des configurations proches de votre besoin.",
        items: [
          {
            title: "Cuisines sur mesure",
            href: "/projets/cuisine/",
            description: "Avec ou sans rénovation complÃ¨te.",
          },
          {
            title: "Salles de bain & vanités",
            href: "/projets/salle-de-bain/",
            description: "Matériaux adaptés Ã  l'humidité et finition soignée.",
          },
          {
            title: "Walk-in & rangement",
            href: "/projets/walk-in/",
            description: "Optimisation de l'espace.",
          },
          {
            title: "Salles de lavage",
            href: "/projets/salle-de-lavage/",
            description: "Aménagements durables et fonctionnels.",
          },
          {
            title: "Commercial",
            href: "/projets/commercial/",
            description: "Mobilier et rangement pour environnements pro.",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "recent",
      title: "Projets récents",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Cuisine sur mesure - Montréal",
            href: "/projets/cuisine/cuisine-sur-mesure-montreal/",
          },
          {
            title: "Vanité sur mesure - Laval",
            href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
          },
          {
            title: "Cuisine sur mesure - Rive-Sud",
            href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "processus",
      title: "Notre approche projet",
      content: {
        type: SECTION_TYPES.PROCESS,
        description: "Une démarche cadrée pour garantir un résultat durable.",
        items: [
          {
            step: "1",
            title: "Analyse & design",
            description: "Besoins et contraintes de l'espace.",
          },
          {
            step: "2",
            title: "Fabrication",
            description: "Production sur mesure.",
          },
          {
            step: "3",
            title: "Coordination",
            description: "Travaux connexes si requis.",
          },
          {
            step: "4",
            title: "Installation",
            description: "Ajustements et inspection finale.",
          },
        ],
      },
    },
  ],
};
