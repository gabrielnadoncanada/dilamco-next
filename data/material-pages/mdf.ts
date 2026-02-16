import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "MDF",
  description:
    "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure. Comprendre quand il est pertinent et quand privilégier d'autres matériaux.",
  path: "/materiaux/mdf/",
  ogAlt: "MDF - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Le MDF est-il bas de gamme?",
    a: "Non. Il peut être excellent pour certaines applications, surtout les portes peintes, si l'exécution est soignée.",
  },
  {
    q: "Le MDF gonfle-t-il avec l'humidité?",
    a: "Il peut réagir à l'eau si la protection est insuffisante, surtout aux chants.",
  },
  {
    q: "MDF ou mélamine?",
    a: "Le MDF est souvent choisi pour la finition peinte uniforme; la mélamine pour un compromis décoratif et budgétaire.",
  },
  {
    q: "Le MDF est-il adapté à la salle de bain?",
    a: "Selon ventilation, usage et protection. Dans certains contextes, d'autres matériaux seront préférables.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "cest-quoi",
    title: "C'est quoi le MDF?",
    intro:
      "Le MDF est composé de fibres compressées. Sa densité uniforme favorise les finis peints et un rendu régulier.",
    content: {
      type: SECTION_TYPES.TEXT,
    },
  },
  {
    id: "avantages",
    title: "Avantages du MDF",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Surface uniforme pour peinture.",
        "Rendu visuel régulier.",
        "Bon compromis sur certaines façades.",
      ],
    },
  },
  {
    id: "limites",
    title: "Limites et précautions",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Sensibilité à l'humidité si protection insuffisante.",
        "Chants et finitions critiques.",
        "Pas toujours idéal pour les zones les plus exposées.",
      ],
    },
  },
  {
    id: "cuisine",
    title: "MDF en cuisine",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Pertinent pour portes peintes.",
        "Protection des chants indispensable.",
        "Structure parfois mieux servie par d'autres matériaux.",
      ],
    },
  },
  {
    id: "cuisine-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [{ title: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }],
      columns: 2,
    },
  },
  {
    id: "sdb",
    title: "MDF en salle de bain",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Possible selon le contexte.",
        "Ventilation et détails d'exécution déterminants.",
        "Alternatives parfois plus durables.",
      ],
    },
  },
  {
    id: "sdb-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        {
          title: "Voir Salle de bain & vanités",
          href: "/espaces/salle-de-bain/",
        },
      ],
      columns: 2,
    },
  },
  {
    id: "comparaisons",
    title: "MDF vs mélamine vs contreplaqué",
    intro:
      "Le MDF vise surtout la finition, la mélamine la variété décorative/coût, et le contreplaqué la stabilité structurelle.",
    content: {
      type: SECTION_TYPES.TEXT,

      links: [
        { title: "Comparatif complet", href: "/materiaux/comparatif/" },
        { title: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
      ],
    },
  },
  {
    id: "approche",
    title: "Comment nous l'utilisons",
    intro:
      "Nous utilisons le MDF là où il est pertinent et combinons avec d'autres matériaux lorsque l'usage exige plus de stabilité ou de résistance.",
    content: {
      type: SECTION_TYPES.TEXT,

      links: [
        { title: "Voir tous les matériaux", href: "/materiaux/" },
        { title: "Voir l'installation", href: "/services/installation/" },
      ],
    },
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf/" },
  ],
  hero: {
    heading: "MDF, quand et pourquoi l'utiliser en sur mesure",
    description:
      "Le MDF est souvent utilisé pour obtenir une surface très uniforme, idéale pour des portes peintes. Ce n'est pas un matériau universel : le contexte d'usage et la protection des chants déterminent sa pertinence.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      {
        text: "Voir le comparatif des matériaux",
        href: "/materiaux/comparatif/",
        variant: "outline",
      },
    ],
  },
  sections: sections,
  faq: { ariaLabelledby: "faq", heading: "FAQ - MDF", items: faqItems },
};
