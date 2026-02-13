import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Bois massif",
  description:
    "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure. Comprendre stabilité, humidité, finition et alternatives (MDF, mélamine, contreplaqué) pour faire le bon choix.",
  path: "/materiaux/bois-massif/",
  ogAlt: "Bois massif - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Le bois massif est-il toujours meilleur?",
    a: "Non. Il est excellent pour l'esthétique et certaines applications, mais des panneaux techniques peuvent être plus stables et mieux adaptés selon les contraintes.",
  },
  {
    q: "Est-ce recommandé en cuisine?",
    a: "Oui, souvent pour les portes et éléments visibles. Le choix dépend du fini, de l'entretien et de l'environnement.",
  },
  {
    q: "Comment réagit-il à l'humidité?",
    a: "Le bois peut bouger avec l'humidité. La conception, la finition et l'usage aux bons endroits limitent les effets.",
  },
  {
    q: "Peut-on combiner bois massif et autres matériaux?",
    a: "Oui. C'est souvent la meilleure approche : bois massif sur les éléments visibles, matériaux plus stables sur certaines structures.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "definition",
    title: "Qu'est-ce que le bois massif?",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Le bois massif correspond à une pièce de bois pleine. Il se distingue du MDF, de la mélamine, du contreplaqué et du placage.",
        "Il présente des variations naturelles de veinage, de teinte et de texture, qui font partie de son caractère.",
      ],
    },
  },
  {
    id: "avantages",
    title: "Avantages du bois massif",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Esthétique naturelle : rendu chaleureux et profondeur visuelle.",
        "Caractère haut de gamme : forte valeur perçue.",
        "Réparabilité : certaines marques peuvent être reprises selon le fini.",
        "Matériau recherché pour les éléments visibles.",
      ],
    },
  },
  {
    id: "limites",
    title: "Limites et contraintes",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Le bois massif demande une conception et une exécution adaptées.",
        "La durabilité vient d'un système complet : matériau, finition, quincaillerie et installation.",
      ],
    },
  },
  {
    id: "limites-details",
    title: "",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Mouvement selon humidité et température.",
        "Stabilité parfois inférieure à certains panneaux techniques pour de grandes surfaces.",
        "Entretien dépendant du fini.",
        "Coût généralement plus élevé.",
      ],
    },
  },
  {
    id: "ou-pertinent",
    title: "Où le bois massif est le plus pertinent",
    content: {
      type: SECTION_TYPES.TEXT,
      intro:
        "Le bois massif est souvent optimal sur les éléments visibles où le rendu et le toucher comptent.",
      links: [
        { title: "Voir le service de design", href: "/services/design/" },
        { title: "Voir la fabrication", href: "/services/fabrication/" },
      ],
    },
  },
  {
    id: "ou-pertinent-details",
    title: "",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Portes et façades.",
        "Détails décoratifs.",
        "Pièces sélectionnées à forte valeur visuelle.",
      ],
    },
  },
  {
    id: "ou-deconseille-details",
    title: "Où il est souvent moins pertinent",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Structures complètes de caissons.",
        "Zones très humides selon le contexte.",
        "Grandes surfaces nécessitant une stabilité maximale.",
      ],
    },
  },
  {
    id: "alternatives",
    title: "Alternatives fréquentes",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        { title: "Contreplaqué", href: "/materiaux/contreplaque/" },
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
      ],
      columns: 3,
    },
  },
  {
    id: "comparaisons",
    title: "Bois massif vs autres matériaux",
    content: {
      type: SECTION_TYPES.TEXT,
      intro: "Le bon choix dépend de l'espace, de l'entretien attendu et du rendu final.",
      links: [
        {
          title: "Voir le comparatif des matériaux",
          href: "/materiaux/comparatif/",
        },
      ],
    },
  },
  {
    id: "finition-details",
    title: "Finition et entretien",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Protection adaptée à l'usage.",
        "Entretien simple et cohérent avec le fini.",
        "Prévenir l'eau stagnante et les nettoyants agressifs.",
      ],
    },
  },
  {
    id: "projets",
    title: "Projets",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [{ title: "Voir les projets", href: "/projets/" }],
      columns: 2,
    },
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif/" },
  ],
  hero: {
    heading: "Bois massif - authenticité, caractère et limites à connaître",
    description:
      "Le bois massif est un matériau noble, apprécié pour son grain et sa profondeur visuelle. C'est aussi un matériau vivant : il réagit à l'humidité et à la température. L'important n'est pas seulement bois massif ou non, mais où et comment il est utilisé.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: sections,
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - bois massif",
    items: faqItems,
  },
};
