import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Pourquoi le contreplaqué",
  description:
    "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d'armoires sur mesure. Comprendre les plis croisés, l'humidité, les usages recommandés et les limites.",
  path: "/materiaux/contreplaque/",
  ogAlt: "Contreplaqué - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Le contreplaqué est-il toujours meilleur que le MDF?",
    a: "Pas nécessairement. Le contreplaqué est souvent très pertinent pour la structure, tandis que le MDF peut être adapté pour certaines façades et finis.",
  },
  {
    q: "Le contreplaqué est-il adapté à la salle de bain?",
    a: "Selon le contexte, oui. Les détails de protection et d'installation restent déterminants.",
  },
  {
    q: "Est-ce plus cher?",
    a: "Souvent oui, en échange d'une meilleure qualité structurelle selon l'usage.",
  },
  {
    q: "Est-ce visible une fois installé?",
    a: "Généralement non, sauf choix design spécifique avec tranches visibles.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "definition",
    title: "Qu'est-ce que le contreplaqué?",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Le contreplaqué est constitué de plis de bois collés avec fibres croisées.",
        "Cette structure améliore la stabilité dimensionnelle et la résistance mécanique.",
      ],
      links: [
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
        { title: "Bois massif", href: "/materiaux/bois-massif/" },
      ],
    },
  },
  {
    id: "avantages",
    title: "Avantages du contreplaqué",
    intro:
      "Il influence directement la tenue dans le temps, même s'il est peu visible une fois posé.",
    content: {
      type: SECTION_TYPES.LIST,

      items: [
        "Stabilité accrue grâce aux plis croisés.",
        "Bonne tenue des vis et fixations.",
        "Structure robuste pour usage intensif.",
        "Polyvalence sur cuisines, rangements et projets exigeants.",
      ],
    },
  },
  {
    id: "comparaison",
    title: "Comparaison avec les autres matériaux",
    intro:
      "Le bon matériau dépend de l'espace et du rôle de la pièce (structure, porte, intérieur).",
    content: {
      type: SECTION_TYPES.LIST,

      links: [
        {
          title: "Voir le comparatif des matériaux",
          href: "/materiaux/comparatif/",
        },
      ],
      items: [
        "Vs MDF : souvent plus stable pour la structure.",
        "Vs mélamine : plus orienté durabilité structurelle.",
        "Vs bois massif : souvent plus cohérent sur les caissons.",
      ],
    },
  },
  {
    id: "usages",
    title: "Où il est le plus pertinent",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Caissons d'armoires.",
        "Composantes internes porteuses.",
        "Tiroirs et modules soumis aux charges.",
        "Projets orientés durabilité à long terme.",
      ],
      links: [
        { title: "Voir la fabrication", href: "/services/fabrication/" },
        {
          title: "Voir la quincaillerie",
          href: "/materiaux/quincaillerie/",
        },
      ],
    },
  },
  {
    id: "humidite",
    title: "Contreplaqué et humidité",
    intro:
      "Ce n'est pas un matériau imperméable. Les chants, l'assemblage et la finition restent critiques.",
    content: {
      type: SECTION_TYPES.LIST,

      items: [
        "Pertinent en cuisine avec exécution soignée.",
        "Possible en salle de bain selon contexte et protections.",
      ],
      links: [{ title: "Voir tous les matériaux", href: "/materiaux/" }],
    },
  },
  {
    id: "limites",
    title: "Limites et points à surveiller",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Qualité variable selon le grade.",
        "Coût souvent plus élevé.",
        "Tranches à traiter si visibles.",
        "Performance liée à l'exécution finale.",
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
    {
      name: "Pourquoi le contreplaqué",
      url: SITE.url + "/materiaux/contreplaque/",
    },
  ],
  hero: {
    heading: "Contreplaqué, stabilité, durabilité et structure intelligente",
    description:
      "Le contreplaqué est souvent privilégié en sur mesure pour la structure des armoires. Sa composition en plis croisés lui donne un comportement plus stable et prévisible.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: sections,
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - contreplaqué",
    items: faqItems,
  },
  cta: {
    heading: "Parlez-nous de votre projet",
    description:
      "Dites-nous votre espace, votre secteur et votre échéance. On vous recommande un choix cohérent matériaux + quincaillerie + installation.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      {
        text: "Comparer les matériaux",
        href: "/materiaux/comparatif/",
        variant: "outline",
      },
    ],
  },
};
