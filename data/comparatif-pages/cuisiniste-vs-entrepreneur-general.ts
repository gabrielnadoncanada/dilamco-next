import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Cuisiniste vs entrepreneur général",
  description:
    "Cuisiniste ou entrepreneur général pour votre cuisine? Comparatif clair : responsabilités, rénovation, coordination, qualité d'installation et risques. Trouvez la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
  path: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
  ogAlt: "Comparatif : Cuisiniste vs entrepreneur général",
});

const sections: ContentArticleSection[] = [
  {
    id: "roles",
    title: "Comprendre les rôles",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [],
    },
  },
  {
    id: "cuisiniste",
    title: "Le cuisiniste",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Spécialité : design de cuisine, ergonomie, choix de matériaux et configuration des armoires.",
        "Forces : plan, optimisation du rangement, cohérence esthétique.",
        "Limites fréquentes : la rénovation (plomberie/électricité/plancher) est souvent externalisée et la coordination peut retomber sur le client ou des partenaires.",
      ],
      variant: "bullets",
    },
  },
  {
    id: "entrepreneur",
    title: "L'entrepreneur général",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Spécialité : gestion de chantier et coordination des corps de métier.",
        "Forces : structure de projet, calendrier, gestion des imprévus, conformité du chantier.",
        "Limites fréquentes : les armoires sont souvent sous-traitées, et le niveau de finition/ergonomie peut varier selon les partenaires.",
      ],
      variant: "bullets",
    },
  },
  {
    id: "tableau",
    title: "Comparatif rapide",
    content: {
      type: SECTION_TYPES.TABLE,
      firstColumnLabel: "Critère",
      columns: ["Cuisiniste", "Entrepreneur général"],
      rows: [
        {
          title: "Design de cuisine",
          values: ["Très spécialisé", "Variable"],
        },
        {
          title: "Armoires / sur mesure",
          values: ["Souvent via fournisseur", "Souvent sous-traitées"],
        },
        {
          title: "Rénovation complète",
          values: ["Souvent externalisée", "Oui (cœur de métier)"],
        },
        {
          title: "Coordination des intervenants",
          values: ["Variable", "Centralisée"],
        },
        {
          title: "Responsabilité du résultat",
          values: ["Parfois partagée", "Plus globale"],
        },
        {
          title: "Détails de finition",
          values: ["Souvent forts", "Variables selon partenaires"],
        },
        {
          title: "Gestion des imprévus chantier",
          values: ["Limitée", "Forte"],
        },
      ],
    },
  },
  {
    id: "responsabilite",
    title: "Le vrai enjeu : la responsabilité et la coordination",
    intro:
      "Les « zones grises » arrivent quand plusieurs parties se partagent le projet : qui ajuste si les murs ne sont pas d'équerre? Qui corrige si le plan doit être adapté sur place? Qui assume un retard si un corps de métier décale l'échéancier? Plus votre projet est complexe, plus la coordination devient un facteur déterminant.",
    content: {
      type: SECTION_TYPES.TEXT,
    },
  },
  {
    id: "scenarios",
    title: "3 scénarios concrets pour décider",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [],
    },
  },
  {
    id: "scenario-1",
    title: "1) Remplacement d'armoires sans rénovation majeure",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Si la plomberie/électricité ne bouge pas et que les surfaces (murs/plancher) sont relativement stables, un cuisiniste peut suffire, surtout si vous visez principalement le design et l'ergonomie des armoires.",
      ],
      variant: "numbered",
    },
  },
  {
    id: "scenario-2",
    title: "2) Rénovation complète de cuisine",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Si le projet touche la plomberie, l'électricité, le plancher, les murs, l'éclairage ou la structure, un entrepreneur général devient souvent nécessaire pour cadrer le chantier, la conformité et la coordination.",
      ],
      variant: "numbered",
    },
  },
  {
    id: "scenario-3",
    title: "3) Cuisine sur mesure + rénovation (le cas le plus fréquent)",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Quand vous voulez une cuisine sur mesure avec une rénovation, le risque principal est la fragmentation : design d'un côté, chantier de l'autre. Une approche intégrée peut réduire les frictions et améliorer la cohérence entre le plan, l'exécution et la finition.",
      ],
      variant: "numbered",
    },
  },
  {
    id: "approche-dilamco",
    title: "L'approche Dilamco : sur mesure, avec option clé en main",
    intro:
      "Selon le projet, Dilamco peut intervenir comme spécialiste du sur mesure (design, fabrication et installation) et, lorsque requis, offrir une option clé en main pour simplifier la coordination. L'objectif est de clarifier la responsabilité et de livrer un résultat cohérent, du plan à la finition.",
    content: {
      type: SECTION_TYPES.TEXT,
      links: [
        {
          title: "Cuisine sur mesure",
          href: "/espaces/cuisine/",
        },
        {
          title: "Rénovation de cuisine",
          href: "/services/renovation/cuisine/",
        },
        {
          title: "Rénovation clé en main",
          href: "/services/renovation/",
        },
      ],
    },
  },
  {
    id: "cout-risques",
    title: "Coût, risques et tranquillité d'esprit",
    intro:
      "Sans entrer dans des chiffres, le point important est de comparer à périmètre égal : ce qui est inclus, qui coordonne, qui assume les ajustements sur place, et le niveau de finition attendu. Un projet bien cadré réduit les retouches, les délais et les incohérences.",
    content: {
      type: SECTION_TYPES.TEXT,
    },
  },
  {
    id: "preuves",
    title: "Voir des projets de cuisines",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        {
          title: "Voir les projets de cuisines",
          href: "/projets/cuisine/",
        },
      ],
      columns: 2,
    },
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
    {
      name: "Cuisiniste vs entrepreneur général",
      url: SITE.url + "/comparatifs/cuisiniste-vs-entrepreneur-general/",
    },
  ],
  hero: {
    heading:
      "Cuisiniste ou entrepreneur général : qui choisir pour votre projet de cuisine?",
    description:
      "Beaucoup de projets de cuisine dérapent non pas à cause des armoires, mais à cause d'un problème de responsabilités : qui gère le chantier, qui coordonne les intervenants, et qui répond du résultat final? Le bon choix dépend surtout de la nature de votre projet : simple remplacement d'armoires, ou rénovation complète (plomberie, électricité, plancher, etc.).",
  },
  sections,
  cta: {
    heading: "Parlez-nous de votre projet",
    description:
      "Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable.",
    actions: [
      {
        text: "Demander une soumission",
        href: "/contact/",
      },
      {
        text: "Solution Dilamco",
        href: "/services/renovation/",
        variant: "outline",
      },
    ],
  },
};
