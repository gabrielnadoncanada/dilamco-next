import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Comment choisir une cuisine sur mesure",
  description:
    "Guide complet pour choisir une cuisine sur mesure : usages, ergonomie, matériaux, rangement, quincaillerie, installation et rénovation. Orienté décision, sans prix.",
  path: "/guides/comment-choisir-cuisine-sur-mesure/",
  ogAlt: "Guide : Comment choisir une cuisine sur mesure",
});
const faqItems = [
  {
    q: "Sur mesure vs semi-custom : quelle différence?",
    a: "Le sur mesure est conçu pour votre espace exact (dimensions, contraintes, ergonomie). Le semi-custom part de modules prédéfinis avec variations. Le bon choix dépend du niveau d'adaptation et de finition recherché.",
  },
  {
    q: "Quel matériau est le plus durable?",
    a: "Il n'y a pas de réponse unique. La durabilité dépend de l'usage, de l'humidité, des chants, de la quincaillerie et de l'installation, autant que du matériau.",
  },
  {
    q: "Une cuisine sur mesure est-elle possible en condo?",
    a: "Oui. Le sur mesure est souvent pertinent en condo lorsque l'espace impose des contraintes (murs irréguliers, circulation, accès, intégration).",
  },
  {
    q: "Qu'est-ce qui influence le résultat final le plus?",
    a: "L'ensemble : plan (ergonomie), matériaux (usage), quincaillerie (confort), et surtout l'installation (alignements, ajustements, finition).",
  },
  {
    q: 'Quel est le "bon" point de départ?',
    a: "Clarifier l'usage, les contraintes et l'échéance. Ensuite, le design permet de cadrer la configuration et les choix de matériaux.",
  },
];
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
    {
      name: "Comment choisir une cuisine sur mesure",
      url: SITE.url + "/guides/comment-choisir-cuisine-sur-mesure/",
    },
  ],
  hero: {
    heading: "Comment choisir une cuisine sur mesure - guide complet",
    description:
      "Une cuisine sur mesure est un investissement structurant : elle influence votre confort quotidien, l'organisation de l'espace et la durabilité sur plusieurs années. Le sur mesure ne se résume pas au style : l'ergonomie, les matériaux, la quincaillerie et l'installation déterminent le résultat final. Ce guide vous aide à cadrer vos décisions et à éviter les erreurs coûteuses.",
    actions: [
      {
        text: "Parler de votre projet",
        href: "/contact/",
      },
      {
        text: "Voir la cuisine sur mesure",
        href: "/espaces/cuisine/",
        variant: "outline",
      },
    ],
  },
  sections: [
    {
      id: "definition",
      title: "1) Qu'est-ce qu'une cuisine sur mesure?",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          'Une cuisine sur mesure est conçue pour votre espace exact et votre usage réel : dimensions, circulation, zones de travail, intégration des électroménagers, rangement, et finition. Elle se distingue des approches standardisées (modules fixes) et du "semi-custom" (modules prédéfinis avec variations).',
          "Si vous hésitez entre une solution standard et le sur mesure, consultez nos comparatifs :",
        ],
        links: [
          {
            text: "Cuisine sur mesure vs IKEA",
            href: "/comparatifs/cuisine-sur-mesure-vs-ikea/",
            variant: "outline",
          },
          {
            text: "Cuisine sur mesure vs Home Depot",
            href: "/comparatifs/cuisine-sur-mesure-vs-home-depot/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "quand",
      title: "2) Quand le sur mesure est pertinent",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Le sur mesure devient particulièrement pertinent lorsque l'espace impose des contraintes, ou lorsque vous visez une durabilité supérieure et un rendu cohérent.",
        ],
      },
    },
    {
      id: "quand-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Condo / espace contraint : murs irréguliers, circulation serrée, accès limité, intégrations complexes.",
          "Rangement précis : besoins spécifiques, coins, tiroirs profonds, organisation sur la hauteur.",
          "Projet long terme : vous voulez une cuisine pensée pour durer, pas une solution temporaire.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "quand-conclusion",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Si vous cherchez une solution strictement économique ou temporaire, le sur mesure n'est probablement pas l'option la plus pertinente.",
        ],
      },
    },
    {
      id: "decisions",
      title: "3) Les décisions qui comptent vraiment",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
      },
    },
    {
      id: "decisions-usage",
      title: "3.1 Usages et ergonomie",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
      },
    },
    {
      id: "decisions-usage-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Circulation : dégagements, portes, tiroirs et zones de passage.",
          "Zones de travail : préparation, cuisson, lavage, rangement.",
          "Îlot : fonctions (préparation, repas, rangement) et dimensions réalistes.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "decisions-contraintes",
      title: "3.2 Contraintes",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
      },
    },
    {
      id: "decisions-contraintes-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Plomberie, évier, lave-vaisselle, hotte, prises et éclairage.",
          "Hauteurs, soffites, murs non droits, radiateurs, fenêtres.",
          "Accès chantier (condo) : ascenseur, stationnement, horaires.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "decisions-style",
      title: "3.3 Style et cohérence",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Le style est important, mais il doit rester cohérent avec la lumière, le volume et l'entretien au quotidien.",
        ],
        links: [
          {
            text: "Voir Couleurs & finis",
            href: "/materiaux/couleurs/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "materiaux",
      title: "4) Matériaux : choisir selon l'usage",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Un bon choix de matériaux se fait selon l'humidité, l'usage et la durabilité visée. Le matériau seul ne garantit rien : l'assemblage, la protection des chants, la quincaillerie et l'installation font une grande différence.",
        ],
      },
    },
    {
      id: "materiaux-structure",
      title: "4.1 Structure vs portes",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
      },
    },
    {
      id: "materiaux-structure-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Structure (caissons) : stabilité et durabilité.",
          "Portes et façades : rendu esthétique, fini, entretien.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "materiaux-comparatif",
      title: "4.2 Comparatif rapide",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
      },
    },
    {
      id: "materiaux-comparatif-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "MDF : souvent pertinent pour portes peintes (surface uniforme), plus sensible à l'humidité si mal protégé.",
          "Mélamine : finis variés, chants critiques (impacts et infiltration).",
          "Contreplaqué : stabilité et structure, souvent pertinent pour viser une durabilité supérieure.",
          "Bois massif : texture naturelle, variations normales, usage ciblé.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "materiaux-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Voir le comparatif des matériaux",
            href: "/materiaux/comparatif/",
            variant: "outline",
          },
          {
            text: "MDF",
            href: "/materiaux/mdf/",
            variant: "outline",
          },
          {
            text: "Mélamine",
            href: "/materiaux/melamine/",
            variant: "outline",
          },
          {
            text: "Contreplaqué",
            href: "/materiaux/contreplaque/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "rangement",
      title: "5) Rangement : éviter les pertes d'espace",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Le sur mesure est souvent rentabilisé par l'optimisation du rangement : accès, profondeur, coins, hauteurs et organisation.",
        ],
      },
    },
    {
      id: "rangement-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Tiroirs vs portes : accès plus simple en tiroirs, selon la configuration.",
          'Coins : solutions d\'angle ou aménagements pour éviter les "zones mortes".',
          "Hauteur : maximiser l'espace vertical si le contexte le permet.",
          "Garde-manger : organisation et accès selon vos habitudes.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "quincaillerie",
      title: "6) Quincaillerie & installation (souvent sous-estimées)",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          'La quincaillerie et l\'installation déterminent une grande partie du ressenti "haut de gamme" : portes alignées, tiroirs fluides, réglages qui tiennent, fermeture contrôlée.',
        ],
      },
    },
    {
      id: "quincaillerie-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Charnières : ajustabilité, stabilité des réglages, soft-close selon le besoin.",
          "Coulisses : capacité de charge, stabilité, extension selon le système.",
          "Installation : alignements, ajustements, inspection finale.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "quincaillerie-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Voir Quincaillerie",
            href: "/materiaux/quincaillerie/",
            variant: "outline",
          },
          {
            text: "Voir l'installation",
            href: "/services/installation/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "cle-en-main",
      title: "7) Sur mesure vs rénovation clé en main",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          'Une cuisine peut être un projet "armoires + installation", ou un projet plus large qui inclut plomberie, électricité, plancher, dosseret, peinture, etc. Lorsque plusieurs corps de métier sont impliqués, une approche clé en main réduit souvent les risques et les imprévus.',
        ],
        links: [
          {
            text: "Voir la rénovation de cuisine",
            href: "/services/renovation/cuisine/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "erreurs",
      title: "8) Erreurs fréquentes à éviter",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Choisir uniquement pour le look, sans cadrer l'usage et l'entretien.",
          "Comparer uniquement sur le prix, sans considérer l'installation et les ajustements.",
          "Ignorer l'impact des chants, de la quincaillerie et des détails de finition.",
          "Copier une inspiration sans adapter aux dimensions et à la lumière réelle.",
          "Sous-estimer l'espace nécessaire pour l'îlot et la circulation.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "delais",
      title: "9) Délais : à quoi s'attendre (sans prix)",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Les délais varient selon la complexité, la disponibilité et l'ampleur du projet. Généralement, il faut prévoir :",
        ],
      },
    },
    {
      id: "delais-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Design & planification : cadrage des besoins, plan et sélection des finis.",
          "Fabrication : production sur mesure selon le plan final.",
          "Installation : pose, ajustements, finitions et inspection.",
          "Rénovation (si applicable) : coordination des étapes connexes.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "delais-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Voir le design",
            href: "/services/design/",
            variant: "outline",
          },
          {
            text: "Voir la fabrication",
            href: "/services/fabrication/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "preuves",
      title: "10) Voir des exemples concrets",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Projets de cuisines", href: "/projets/cuisine/" },
          { title: "Cuisine sur mesure", href: "/espaces/cuisine/" },
        ],
        columns: 2,
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - cuisine sur mesure",
    items: faqItems,
  },
  footerSections: [
    {
      id: "liens",
      title: "Liens utiles",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Cuisine sur mesure", href: "/espaces/cuisine/" },
          {
            title: "Rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 2,
      },
    },
  ],
};
