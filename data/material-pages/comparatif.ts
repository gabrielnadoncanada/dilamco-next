import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Comparatif des matériaux",
  description:
    "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif.",
  path: "/materiaux/comparatif/",
  ogAlt: "Comparatif des matériaux sur mesure",
});

const faqItems = [
  {
    q: "MDF ou mélamine?",
    a: "MDF pour fini peint uniforme, mélamine pour décor/coÃ»t maîtrisé.",
  },
  {
    q: "Le contreplaqué est-il toujours préférable?",
    a: "Pas toujours, mais il est souvent pertinent pour la structure durable.",
  },
  {
    q: "Bois massif partout?",
    a: "Pas nécessairement. Il est souvent mieux ciblé sur les éléments visibles.",
  },
  {
    q: "Peut-on combiner plusieurs matériaux?",
    a: "Oui, c'est souvent la meilleure stratégie.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "tableau",
    title: "Tableau comparatif",
    content: {
      type: SECTION_TYPES.TABLE,
      description: "Résumé général Ã  adapter Ã  votre contexte réel.",
      columns: [
        "Usage recommandé",
        "Stabilité",
        "Humidité",
        "Finition",
        "Durabilité perÃ§ue",
      ],
      rows: [
        {
          title: "Contreplaqué",
          values: [
            "Structures exigeantes",
            "TrÃ¨s bonne",
            "Bonne",
            "Variable",
            "Élevée",
          ],
        },
        {
          title: "MDF",
          values: [
            "Portes et faÃ§ades peintes",
            "Bonne",
            "Moyenne",
            "TrÃ¨s uniforme",
            "Moyenne",
          ],
        },
        {
          title: "Mélamine",
          values: [
            "Rangements ciblés",
            "Moyenne",
            "Faible Ã  moyenne",
            "TrÃ¨s variée",
            "Variable",
          ],
        },
        {
          title: "Bois massif",
          values: [
            "Éléments esthétiques",
            "Variable",
            "Moyenne",
            "Naturelle",
            "Élevée",
          ],
        },
      ],
    },
  },
  {
    id: "matiere-links",
    title: "Pages détaillées",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        { title: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/" },
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
        { title: "Bois massif", href: "/materiaux/bois-massif/" },
      ],
      columns: 2,
    },
  },
  {
    id: "espaces",
    title: "Comparatif par espace",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        {
          title: "Cuisine",
          href: "/espaces/cuisine/",
          description: "Charges et cycles d'usage élevés.",
        },
        {
          title: "Salle de bain",
          href: "/espaces/salle-de-bain/",
          description: "Humidité plus exigeante, détails critiques.",
        },
      ],
      columns: 2,
    },
  },
  {
    id: "facteurs",
    title: "Ce que le tableau ne montre pas",
    content: {
      type: SECTION_TYPES.LIST,
      intro: "La performance réelle dépend aussi de l'exécution.",
      links: [
        {
          title: "Voir la quincaillerie",
          href: "/materiaux/quincaillerie/",
        },
        { title: "Voir l'installation", href: "/services/installation/" },
      ],
      items: [
        "Protection des chants.",
        "Qualité d'assemblage.",
        "Quincaillerie.",
        "Ajustements Ã  l'installation.",
      ],
    },
  },
  {
    id: "erreurs",
    title: "Erreurs Ã  éviter",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Choisir pour le look seulement.",
        "Ignorer l'humidité.",
        "Sous-estimer les détails de finition.",
      ],
    },
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif/" },
  ],
  hero: {
    heading: "Comparatif des matériaux : choisir selon l'usage",
    description:
      "Il n'existe pas de matériau universel. Le bon choix dépend de l'espace, de l'humidité, de la durabilité visée et de la finition recherchée.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      {
        text: "Voir tous les matériaux",
        href: "/materiaux/",
        variant: "outline",
      },
    ],
  },
  sections: sections,
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - comparatif des matériaux",
    items: faqItems,
  },
};
