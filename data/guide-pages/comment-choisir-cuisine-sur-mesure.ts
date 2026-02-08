import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

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
      type: "text",
      ariaLabelledby: "definition",
      heading: "1) Qu'est-ce qu'une cuisine sur mesure?",
      paragraphs: [
        "Une cuisine sur mesure est conçue pour votre espace exact et votre usage réel : dimensions, circulation, zones de travail, intégration des électroménagers, rangement, et finition. Elle se distingue des approches standardisées (modules fixes) et du \"semi-custom\" (modules prédéfinis avec variations).",
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
    {
      type: "text",
      ariaLabelledby: "quand",
      heading: "2) Quand le sur mesure est pertinent",
      paragraphs: [
        "Le sur mesure devient particulièrement pertinent lorsque l'espace impose des contraintes, ou lorsque vous visez une durabilité supérieure et un rendu cohérent.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "quand-details",
      heading: "",
      items: [
        "Condo / espace contraint : murs irréguliers, circulation serrée, accès limité, intégrations complexes.",
        "Rangement précis : besoins spécifiques, coins, tiroirs profonds, organisation sur la hauteur.",
        "Projet long terme : vous voulez une cuisine pensée pour durer, pas une solution temporaire.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "quand-conclusion",
      heading: "",
      paragraphs: [
        "Si vous cherchez une solution strictement économique ou temporaire, le sur mesure n'est probablement pas l'option la plus pertinente.",
      ],
    },
    {
      type: "text",
      ariaLabelledby: "decisions",
      heading: "3) Les décisions qui comptent vraiment",
      paragraphs: [],
    },
    {
      type: "text",
      ariaLabelledby: "decisions-usage",
      heading: "3.1 Usages et ergonomie",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "decisions-usage-details",
      heading: "",
      items: [
        "Circulation : dégagements, portes, tiroirs et zones de passage.",
        "Zones de travail : préparation, cuisson, lavage, rangement.",
        "Îlot : fonctions (préparation, repas, rangement) et dimensions réalistes.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "decisions-contraintes",
      heading: "3.2 Contraintes",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "decisions-contraintes-details",
      heading: "",
      items: [
        "Plomberie, évier, lave-vaisselle, hotte, prises et éclairage.",
        "Hauteurs, soffites, murs non droits, radiateurs, fenêtres.",
        "Accès chantier (condo) : ascenseur, stationnement, horaires.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "decisions-style",
      heading: "3.3 Style et cohérence",
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
    {
      type: "text",
      ariaLabelledby: "materiaux",
      heading: "4) Matériaux : choisir selon l'usage",
      paragraphs: [
        "Un bon choix de matériaux se fait selon l'humidité, l'usage et la durabilité visée. Le matériau seul ne garantit rien : l'assemblage, la protection des chants, la quincaillerie et l'installation font une grande différence.",
      ],
    },
    {
      type: "text",
      ariaLabelledby: "materiaux-structure",
      heading: "4.1 Structure vs portes",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "materiaux-structure-details",
      heading: "",
      items: [
        "Structure (caissons) : stabilité et durabilité.",
        "Portes et façades : rendu esthétique, fini, entretien.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "materiaux-comparatif",
      heading: "4.2 Comparatif rapide",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "materiaux-comparatif-details",
      heading: "",
      items: [
        "MDF : souvent pertinent pour portes peintes (surface uniforme), plus sensible à l'humidité si mal protégé.",
        "Mélamine : finis variés, chants critiques (impacts et infiltration).",
        "Contreplaqué : stabilité et structure, souvent pertinent pour viser une durabilité supérieure.",
        "Bois massif : texture naturelle, variations normales, usage ciblé.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "materiaux-links",
      heading: "",
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
    {
      type: "text",
      ariaLabelledby: "rangement",
      heading: "5) Rangement : éviter les pertes d'espace",
      paragraphs: [
        "Le sur mesure est souvent rentabilisé par l'optimisation du rangement : accès, profondeur, coins, hauteurs et organisation.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "rangement-details",
      heading: "",
      items: [
        "Tiroirs vs portes : accès plus simple en tiroirs, selon la configuration.",
        "Coins : solutions d'angle ou aménagements pour éviter les \"zones mortes\".",
        "Hauteur : maximiser l'espace vertical si le contexte le permet.",
        "Garde-manger : organisation et accès selon vos habitudes.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "quincaillerie",
      heading: "6) Quincaillerie & installation (souvent sous-estimées)",
      paragraphs: [
        "La quincaillerie et l'installation déterminent une grande partie du ressenti \"haut de gamme\" : portes alignées, tiroirs fluides, réglages qui tiennent, fermeture contrôlée.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "quincaillerie-details",
      heading: "",
      items: [
        "Charnières : ajustabilité, stabilité des réglages, soft-close selon le besoin.",
        "Coulisses : capacité de charge, stabilité, extension selon le système.",
        "Installation : alignements, ajustements, inspection finale.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "quincaillerie-links",
      heading: "",
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
    {
      type: "text",
      ariaLabelledby: "cle-en-main",
      heading: "7) Sur mesure vs rénovation clé en main",
      paragraphs: [
        "Une cuisine peut être un projet \"armoires + installation\", ou un projet plus large qui inclut plomberie, électricité, plancher, dosseret, peinture, etc. Lorsque plusieurs corps de métier sont impliqués, une approche clé en main réduit souvent les risques et les imprévus.",
      ],
      links: [
        {
          text: "Voir la rénovation de cuisine",
          href: "/services/renovation/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "erreurs",
      heading: "8) Erreurs fréquentes à éviter",
      items: [
        "Choisir uniquement pour le look, sans cadrer l'usage et l'entretien.",
        "Comparer uniquement sur le prix, sans considérer l'installation et les ajustements.",
        "Ignorer l'impact des chants, de la quincaillerie et des détails de finition.",
        "Copier une inspiration sans adapter aux dimensions et à la lumière réelle.",
        "Sous-estimer l'espace nécessaire pour l'îlot et la circulation.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "delais",
      heading: "9) Délais : à quoi s'attendre (sans prix)",
      paragraphs: [
        "Les délais varient selon la complexité, la disponibilité et l'ampleur du projet. Généralement, il faut prévoir :",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "delais-details",
      heading: "",
      items: [
        "Design & planification : cadrage des besoins, plan et sélection des finis.",
        "Fabrication : production sur mesure selon le plan final.",
        "Installation : pose, ajustements, finitions et inspection.",
        "Rénovation (si applicable) : coordination des étapes connexes.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "delais-links",
      heading: "",
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
    {
      type: "relatedLinks",
      ariaLabelledby: "preuves",
      heading: "10) Voir des exemples concrets",
      links: [
        { label: "Projets de cuisines", href: "/projets/cuisine/" },
        { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
      ],
      columns: 2,
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - cuisine sur mesure",
    items: faqItems,
  },
  footerSections: [
    {
      type: "relatedLinks",
      ariaLabelledby: "liens",
      heading: "Liens utiles",
      links: [
        { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
        { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
        { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
        { label: "Demander une soumission", href: "/contact/" },
      ],
      columns: 2,
    },
  ],
};
