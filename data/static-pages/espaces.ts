import type { PageFeatures } from "@/types/page-features";
import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SPACE_SLIDER_ITEMS } from "@/constants/shared-content";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const features: PageFeatures = {};

export const metadata: Metadata = createPageMetadata({
  title: "Espaces sur mesure",
  description:
    "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial.",
  path: "/espaces/",
  ogAlt: "Espaces sur mesure Dilamco",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
  ],
  hero: {
    heading: "Espaces sur mesure, cuisines, salles de bain et rangement",
    description:
      "Chaque espace a ses contraintes. Notre rôle : créer des solutions durables, fonctionnelles et bien exécutées.",
    image: {
      src: "/images/spaces/spaces.png",
      alt: "Espaces sur mesure, cuisines, salles de bain et rangement",
    },
  },
  sections: [
    {
      id: "liste-espaces",
      title: "Choisissez votre espace",
      intro: "Sélectionnez l'espace correspondant à votre projet.",
      content: {
        type: SECTION_TYPES.SLIDER,
        items: SPACE_SLIDER_ITEMS,
      },
    },
    {
      id: "differenciation",
      title: "Pourquoi nos espaces sont pensés pour durer",
      content: {
        type: SECTION_TYPES.PROCESS,
        items: [
          {
            step: "1",
            title: "Sur mesure réel",
            description:
              "Notre rôle : créer des solutions durables, fonctionnelles et bien exécutées.",
          },
          {
            step: "2",
            title: "Matériaux orientés usage",
            description:
              " Matériaux durables et fabrication supervisée, sans compromis sur la finition.",
          },
          {
            step: "3",
            title: "Installation précise",
            description:
              "Alignements nets, ajustements précis, inspection finale avant livraison.",
          },
          {
            step: "4",
            title: "Approche clé en main",
            description:
              "Un seul interlocuteur, des étapes simples, des validations avant production.",
          },
        ],
      },
    },
    {
      id: "links",
      title: "",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Voir nos matériaux", href: "/materiaux/" },
          { title: "Voir nos services", href: "/services/" },
        ],
        columns: 2,
      },
    },
  ],
};
