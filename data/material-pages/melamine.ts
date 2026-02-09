import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Mélamine",
  description:
    "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure. Comprendre quand elle est pertinente et ses précautions.",
  path: "/materiaux/melamine/",
  ogAlt: "Mélamine - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "La mélamine est-elle bas de gamme?",
    a: "Pas forcément. Elle peut être pertinente selon le projet et l'usage.",
  },
  {
    q: "La mélamine gonfle-t-elle?",
    a: "Elle peut se dégrader si l'humidité s'infiltre, surtout via les chants.",
  },
  {
    q: "Mélamine ou MDF?",
    a: "Le MDF est souvent choisi pour peinture uniforme, la mélamine pour les finis décoratifs et un coÃ»t plus maîtrisé.",
  },
  {
    q: "Est-ce recommandé en salle de bain?",
    a: "Selon le contexte. La ventilation et la qualité d'exécution sont critiques.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "definition",
    title: "C'est quoi la mélamine?",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "La mélamine est un panneau recouvert d'un revêtement décoratif. Le rendu dépend de la qualité des chants et de l'exécution.",
      ],
    },
  },
  {
    id: "avantages",
    title: "Avantages",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Grande variété de finis.",
        "Entretien simple.",
        "CoÃ»t maîtrisé dans plusieurs projets.",
      ],
    },
  },
  {
    id: "limites",
    title: "Limites",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Chants sensibles aux impacts.",
        "Humidité critique si infiltration.",
        "Réparations plus difficiles Ã  invisibiliser.",
      ],
    },
  },
  {
    id: "cuisine",
    title: "Mélamine en cuisine",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Pertinente sur certaines composantes.",
        "Zones d'eau Ã  traiter avec attention.",
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
    title: "Mélamine en salle de bain",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Contexte plus exigeant Ã  cause de l'humidité.",
        "Combinaisons de matériaux souvent plus sÃ»res.",
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
    title: "Mélamine vs MDF vs contreplaqué",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Chaque matériau répond Ã  une logique différente : coÃ»t/décor, finition peinte, ou stabilité structurelle.",
      ],
      links: [
        { title: "Comparatif complet", href: "/materiaux/comparatif/" },
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/" },
      ],
    },
  },
  {
    id: "approche",
    title: "Comment nous l'utilisons",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Nous utilisons la mélamine de faÃ§on ciblée lorsque c'est pertinent, et proposons des alternatives quand l'usage exige plus de robustesse.",
      ],
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
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine/" },
  ],
  hero: {
    heading: "Mélamine - usages, limites et alternatives",
    description:
      "La mélamine est populaire pour sa variété de finis et un coÃ»t souvent plus maîtrisé. Sa durabilité dépend surtout des chants, de l'usage et de l'installation.",
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
  faq: { ariaLabelledby: "faq", heading: "FAQ - mélamine", items: faqItems },
};
