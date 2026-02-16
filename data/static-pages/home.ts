import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { ArrowRight, Ruler, Shield, Wrench } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { SPACE_SLIDER_ITEMS } from "@/constants/shared-content";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
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
      content: {
        type: SECTION_TYPES.FEATURE_GRID,
        description:
          "De la conception à l'installation : décisions claires, exécution précise, résultat durable.",
        items: [
          {
            title: "Conçu pour votre espace réel",
            description:
              "Implantation, ergonomie et rangement adaptés à votre configuration.",
            icon: Ruler,
          },
          {
            title: "Matériaux durables, fabrication maîtrisée",
            description:
              "Sélection rigoureuse et production contrôlée pour un résultat qui traverse les années.",
            icon: Shield,
          },
          {
            title: "Un seul responsable, du plan à la pose",
            description:
              "Moins d'intermédiaires, moins d'imprévus, plus de cohérence.",
            icon: Wrench,
          },
        ],
        columns: 3,
      },
    },
    {
      id: "espaces",
      title: "Choisissez votre espace",
      content: {
        type: SECTION_TYPES.SLIDER,
        description: "Découvrez nos solutions sur mesure pour chaque espace.",
        items: SPACE_SLIDER_ITEMS,
      },
    },
    {
      id: "differenciation",
      title: "Ce qui distingue Dilamco",
      content: {
        type: SECTION_TYPES.PROOF,
        description:
          "Le haut de gamme ne se déclare pas. Il se construit à chaque étape.",
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
      content: {
        type: SECTION_TYPES.PROCESS,
        description:
          "Un seul interlocuteur, des étapes simples, des validations avant production.",
        layout: "timeline",
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
