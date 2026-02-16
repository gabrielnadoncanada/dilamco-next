import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SPACE_SLIDER_ITEMS } from "@/constants/shared-content";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
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
      content: {
        type: SECTION_TYPES.SLIDER,
        description: "Sélectionnez l'espace correspondant à votre projet.",
        items: SPACE_SLIDER_ITEMS,
      },
    },
    {
      id: "differenciation",
      title: "Pourquoi nos espaces sont pensés pour durer",
      content: {
        type: SECTION_TYPES.PROOF,
        items: [
          { title: "Sur mesure réel", description: "Adapté à votre espace." },
          {
            title: "Matériaux orientés usage",
            description: "Choix adaptés à la cuisine et à la salle de bain.",
          },
          {
            title: "Installation précise",
            description: "Alignements, ajustements et finition.",
          },
          {
            title: "Approche clé en main",
            description: "Coordination possible selon le projet.",
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
