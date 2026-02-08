import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cuisiniste vs entrepreneur général",
  description:
    "Cuisiniste ou entrepreneur général pour votre cuisine? Comparatif clair : responsabilités, rénovation, coordination, qualité d'installation et risques. Trouvez la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
  path: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
  ogAlt: "Comparatif : Cuisiniste vs entrepreneur général",
});

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
  sections: [
    {
      type: "text",
      ariaLabelledby: "roles",
      heading: "Comprendre les rôles",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "cuisiniste",
      heading: "Le cuisiniste",
      items: [
        "Spécialité : design de cuisine, ergonomie, choix de matériaux et configuration des armoires.",
        "Forces : plan, optimisation du rangement, cohérence esthétique.",
        "Limites fréquentes : la rénovation (plomberie/électricité/plancher) est souvent externalisée et la coordination peut retomber sur le client ou des partenaires.",
      ],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "entrepreneur",
      heading: "L'entrepreneur général",
      items: [
        "Spécialité : gestion de chantier et coordination des corps de métier.",
        "Forces : structure de projet, calendrier, gestion des imprévus, conformité du chantier.",
        "Limites fréquentes : les armoires sont souvent sous-traitées, et le niveau de finition/ergonomie peut varier selon les partenaires.",
      ],
      variant: "bullets",
    },
    {
      type: "table",
      ariaLabelledby: "tableau",
      heading: "Comparatif rapide",
      firstColumnLabel: "Critère",
      columns: ["Cuisiniste", "Entrepreneur général"],
      rows: [
        {
          label: "Design de cuisine",
          values: ["Très spécialisé", "Variable"],
        },
        {
          label: "Armoires / sur mesure",
          values: ["Souvent via fournisseur", "Souvent sous-traitées"],
        },
        {
          label: "Rénovation complète",
          values: ["Souvent externalisée", "Oui (cœur de métier)"],
        },
        {
          label: "Coordination des intervenants",
          values: ["Variable", "Centralisée"],
        },
        {
          label: "Responsabilité du résultat",
          values: ["Parfois partagée", "Plus globale"],
        },
        {
          label: "Détails de finition",
          values: ["Souvent forts", "Variables selon partenaires"],
        },
        {
          label: "Gestion des imprévus chantier",
          values: ["Limitée", "Forte"],
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "responsabilite",
      heading: "Le vrai enjeu : la responsabilité et la coordination",
      paragraphs: [
        "Les « zones grises » arrivent quand plusieurs parties se partagent le projet : qui ajuste si les murs ne sont pas d'équerre? Qui corrige si le plan doit être adapté sur place? Qui assume un retard si un corps de métier décale l'échéancier? Plus votre projet est complexe, plus la coordination devient un facteur déterminant.",
      ],
    },
    {
      type: "text",
      ariaLabelledby: "scenarios",
      heading: "3 scénarios concrets pour décider",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "scenario-1",
      heading: "1) Remplacement d'armoires sans rénovation majeure",
      items: [
        "Si la plomberie/électricité ne bouge pas et que les surfaces (murs/plancher) sont relativement stables, un cuisiniste peut suffire, surtout si vous visez principalement le design et l'ergonomie des armoires.",
      ],
      variant: "numbered",
    },
    {
      type: "list",
      ariaLabelledby: "scenario-2",
      heading: "2) Rénovation complète de cuisine",
      items: [
        "Si le projet touche la plomberie, l'électricité, le plancher, les murs, l'éclairage ou la structure, un entrepreneur général devient souvent nécessaire pour cadrer le chantier, la conformité et la coordination.",
      ],
      variant: "numbered",
    },
    {
      type: "list",
      ariaLabelledby: "scenario-3",
      heading: "3) Cuisine sur mesure + rénovation (le cas le plus fréquent)",
      items: [
        "Quand vous voulez une cuisine sur mesure avec une rénovation, le risque principal est la fragmentation : design d'un côté, chantier de l'autre. Une approche intégrée peut réduire les frictions et améliorer la cohérence entre le plan, l'exécution et la finition.",
      ],
      variant: "numbered",
    },
    {
      type: "text",
      ariaLabelledby: "approche-dilamco",
      heading: "L'approche Dilamco : sur mesure, avec option clé en main",
      paragraphs: [
        "Selon le projet, Dilamco peut intervenir comme spécialiste du sur mesure (design, fabrication et installation) et, lorsque requis, offrir une option clé en main pour simplifier la coordination. L'objectif est de clarifier la responsabilité et de livrer un résultat cohérent, du plan à la finition.",
      ],
      links: [
        {
          text: "Cuisine sur mesure",
          href: "/espaces/cuisine/",
          variant: "outline",
        },
        {
          text: "Rénovation de cuisine",
          href: "/services/renovation/cuisine/",
          variant: "outline",
        },
        {
          text: "Rénovation clé en main",
          href: "/services/renovation/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "cout-risques",
      heading: "Coût, risques et tranquillité d'esprit",
      paragraphs: [
        "Sans entrer dans des chiffres, le point important est de comparer à périmètre égal : ce qui est inclus, qui coordonne, qui assume les ajustements sur place, et le niveau de finition attendu. Un projet bien cadré réduit les retouches, les délais et les incohérences.",
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "preuves",
      heading: "Voir des projets de cuisines",
      links: [
        {
          label: "Voir les projets de cuisines",
          href: "/projets/cuisine/",
        },
      ],
      columns: 2,
    },
  ],
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
