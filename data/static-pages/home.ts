import type { PageFeatures } from "@/types/page-features";
import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { ArrowRight, Ruler, Shield, Wrench } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { SPACE_SLIDER_ITEMS } from "@/constants/shared-content";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const features: PageFeatures = {};

export const metadata: Metadata = createPageMetadata({
  title: "Cuisines, vanités et armoires sur mesure clé en main à Montréal",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme.",
  path: "/",
  ogAlt: "Dilamco, sur mesure, durable, bien exécuté",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [{ name: "Accueil", url: SITE.url + "/" }],
  hero: {
    heading: "Cuisines et vanités sur mesure haut de gamme.",

    description: "Design, fabrication et installation clé en main à Montréal.",
    image: {
      src: "/images/hero-image.webp",
      alt: "Dilamco, sur mesure haut de gamme, clé en main",
    },
    actions: [{ text: "Obtenir une soumission", href: "/contact" }],
  },
  sections: [
    {
      id: "benefits",
      title: "Des espaces sur mesure, sans compromis",
      intro:
        "De la conception à l'installation : décisions claires, exécution précise, résultat durable.",
      content: {
        type: SECTION_TYPES.FEATURE_GRID,
        items: [
          {
            title: "Pensé pour votre espace et votre quotidien",
            description:
              "Implantation optimisée, ergonomie soignée et rangements pensés selon votre réalité.",
            icon: Ruler,
          },
          {
            title: "Matériaux durables et fabrication maîtrisée",
            description:
              "Matériaux sélectionnés avec exigence et fabrication suivie pour un rendu impeccable.",
            icon: Shield,
          },
          {
            title: "Un seul expert, du concept à l'installation",
            description:
              "Un interlocuteur dédié assurant une coordination claire et une exécution cohérente.",
            icon: Wrench,
          },
        ],
        columns: 3,
      },
    },
    {
      id: "espaces",
      title: "Choisissez votre espace",
      intro: "Découvrez nos solutions sur mesure pour chaque espace.",
      content: {
        type: SECTION_TYPES.SLIDER,
        items: SPACE_SLIDER_ITEMS,
      },
    },
    {
      id: "differenciation",
      title: "Ce qui distingue Dilamco",
      intro:
        "Le haut de gamme ne se déclare pas. Il se construit à chaque étape.",
      content: {
        type: SECTION_TYPES.FEATURE_GRID,

        items: [
          {
            title: "Conception orientée usage",
            description:
              "Ergonomie réelle, circulation fluide, rangements pensés selon votre quotidien.",
          },
          {
            title: "Qualité contrôlée à la source",
            description:
              "Matériaux durables et fabrication supervisée, sans compromis sur la finition.",
          },
          {
            title: "Installation millimétrée",
            description:
              "Alignements nets, ajustements précis, inspection finale avant livraison.",
          },
        ],
      },
    },
    {
      id: "processus",
      title: "Une démarche claire. Une exécution maîtrisée.",
      intro:
        "Un seul interlocuteur, des étapes simples, des validations avant production.",
      content: {
        type: SECTION_TYPES.PROCESS,
        items: [
          {
            step: "1",
            title: "Comprendre votre projet",
            description:
              "Nous analysons vos besoins, contraintes et priorités avant toute décision.",
          },
          {
            step: "2",
            title: "Concevoir sur mesure",
            description:
              "Plans détaillés et solutions adaptées à votre espace réel.",
          },
          {
            step: "3",
            title: "Fabriquer avec précision",
            description:
              "Production contrôlée, matériaux durables, qualité vérifiée.",
          },
          {
            step: "4",
            title: "Installer et finaliser",
            description:
              "Ajustements précis et inspection complète avant la livraison.",
          },
        ],
      },
    },
    {
      id: "preuves",
      title: "Projets récents",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Voir les projets de cuisines", href: "/projets/cuisine/" },
          {
            title: "Voir les projets de salles de bain",
            href: "/projets/salle-de-bain/",
          },
          { title: "Voir tous les projets", href: "/projets/" },
        ],
        columns: 3,
      },
    },
  ],
};
