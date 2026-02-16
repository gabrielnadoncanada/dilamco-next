import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Guides",
  description:
    "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure.",
  path: "/guides/",
  ogAlt: "Guides Dilamco",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
  ],
  hero: {
    heading: "Guides et conseils - cuisines et rénovations sur mesure",
    description:
      "Ces guides vous aident à  clarifier vos décisions avant une soumission : matériaux, délais, séquence et exécution.",
    actions: [{ text: "Parler de votre projet", href: "/contact/" }],
  },
  sections: [
    {
      id: "categories",
      title: "Catégories de guides",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Choisir son espace",
          "Rénovation et planification",
          "Matériaux et durabilité",
          "Comparatifs décisionnels",
        ],
        variant: "bullets",
      },
    },

    {
      id: "guides-list",
      title: "Guides disponibles",
      intro:
        "Chaque guide répond à une question précise et renvoie aux pages liées pour approfondir.",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Comment choisir une cuisine sur mesure",
            href: "/guides/comment-choisir-cuisine-sur-mesure/",
          },
          {
            title: "Étapes d'une rénovation de cuisine",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            title: "Erreurs fréquentes en rénovation de cuisine",
            href: "/guides/erreurs-renovation-cuisine/",
          },
        ],
        columns: 3,
      },
    },
    {
      id: "utilisation",
      title: "Comment utiliser ces guides",
      intro:
        "Utilisez-les pour structurer vos priorités, puis passez  la soumission quand le cadre est clair.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [
          {
            text: "Demander une soumission",
            href: "/contact/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "positionnement",
      title: "Notre positionnement",
      intro:
        "Dilamco se concentre sur des projets sur mesure durables, avec exécution soignée et option clé en main.",
      content: {
        type: SECTION_TYPES.TEXT,
      },
    },
  ],
};
