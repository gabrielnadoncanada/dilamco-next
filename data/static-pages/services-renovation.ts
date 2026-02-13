import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Rénovation clé en main",
  description:
    "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition.",
  path: "/services/renovation/",
  ogAlt: "Rénovation clé en main Dilamco",
});
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation/" },
  ],
  hero: {
    heading: "Rénovation clé en main : coordination, exécution et finition",
    description:
      "Une approche qui clarifie les responsabilités et réduit les zones grises du chantier.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir des projets", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      id: "definition",
      title: "Qu'est-ce qu'une rénovation clé en main",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Planification.",
          "Coordination des intervenants.",
          "Exécution et ajustements.",
          "Installation et finition.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "quand",
      title: "Quand c'est pertinent",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Modifications plomberie/électricité.",
          "Travaux sur planchers, murs, ventilation.",
          "Projet avec plusieurs intervenants.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "types",
      title: "Types de rénovations",
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
      id: "responsabilite",
      title: "Le vrai enjeu : responsabilités claires",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Un projet fluide dépend d'un périmètre clair, d'une coordination maîtrisée et d'un responsable principal.",
        links: [
          {
            text: "Cuisiniste vs entrepreneur général",
            href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "surmesure",
      title: "Rénovation + sur mesure",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Le sur mesure prend sa pleine valeur quand il est aligné avec la réalité du chantier.",
        links: [
          {
            text: "Cuisine sur mesure",
            href: "/espaces/cuisine/",
            variant: "outline",
          },
          {
            text: "Salle de bain & vanités",
            href: "/espaces/salle-de-bain/",
            variant: "outline",
          },
        ],
      },
    },
  ],
};
