import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main.",
  path: "/services/",
  ogAlt: "Services Dilamco",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
  ],
  hero: {
    heading:
      "Services : design, fabrication, installation et rénovation clé en main",
    description:
      "Selon le projet, nous prenons en charge l'ensemble du plan à la finition.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      id: "piliers",
      title: "Nos services principaux",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        intro: "Choisissez le service qui correspond à votre étape.",
        items: [
          {
            title: "Design",
            description: "Cadrage du plan, ergonomie et choix de matériaux.",
            href: "/services/design/",
          },
          {
            title: "Fabrication",
            description: "Production sur mesure orientée durabilité.",
            href: "/services/fabrication/",
          },
          {
            title: "Installation",
            description: "Ajustements et finition sur place.",
            href: "/services/installation/",
          },
          {
            title: "Rénovation clé en main",
            description: "Coordination des travaux connexes.",
            href: "/services/renovation/",
          },
        ],
        columns: 2,
      },
    },
    {
      id: "renovation-types",
      title: "Rénovation par type",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          {
            title: "Rénovation salle de bain",
            href: "/services/renovation/salle-de-bain/",
          },
          {
            title: "Rénovation de plancher",
            href: "/services/renovation/plancher/",
          },
          {
            title: "Agrandissement de maison",
            href: "/services/renovation/agrandissement-de-maison/",
          },
        ],
        columns: 2,
      },
    },
    {
      id: "cle-en-main",
      title: "Quand choisir une approche clé en main",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Rénovation complète de cuisine.",
          "Salle de bain avec contraintes techniques.",
          "Projet multi-intervenants.",
        ],
        links: [
          {
            text: "Voir la rénovation clé en main",
            href: "/services/renovation/",
            variant: "outline",
          },
          {
            text: "Parler de votre projet",
            href: "/contact/",
            variant: "outline",
          },
        ],
        variant: "bullets",
      },
    },
    {
      id: "qualite",
      title: "Qualité et durabilité",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Le haut de gamme repose sur un système cohérent : matériaux, assemblage, quincaillerie et installation.",
        links: [
          {
            text: "Pourquoi le contreplaqué",
            href: "/materiaux/contreplaque/",
            variant: "outline",
          },
          {
            text: "Quincaillerie",
            href: "/materiaux/quincaillerie/",
            variant: "outline",
          },
          {
            text: "Voir tous les matériaux",
            href: "/materiaux/",
            variant: "outline",
          },
        ],
      },
    },
  ],
};
