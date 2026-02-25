import { SITE_URL } from "@/constants/site";
import type { ServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const INSTALLATION_SERVICE_PAGE: ServiceData = {
  slug: "installation",
  metadata: {
    title: "Service d'installation",
    description:
      "Service d'installation professionnelle : alignements précis, ajustements sur place et finition soignée pour cuisines, salles de bain, walk-in et projets commerciaux à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/installation/`,
  },
  hero: {
    h1: "Installation professionnelle, précision, alignement et finition",
    intro:
      "Une installation de qualité est déterminante pour le résultat final. Même des armoires bien fabriquées peuvent sembler médiocres si elles sont mal posées. Chez Dilamco, l'installation fait partie intégrante du projet : ajustements sur place, alignements précis et finition soignée, principalement à Montréal, Laval et sur la Rive-Sud.",
    ctaLinks: [
      { title: "Demander une soumission", href: "/contact/" },
      { title: "Voir des projets installés", href: "/projets/" },
    ],
    image: {
      src: "/images/services/installation-hero.webp",
      alt: "Plan technique et echantillons de panneaux pour installation sur mesure",
    },
  },
  sections: [
    {
      id: "importance",
      title: "Pourquoi l'installation fait toute la différence",
      intro:
        "Les murs, planchers et plafonds ne sont jamais parfaitement droits. Une installation professionnelle tient compte de ces réalités et ajuste chaque élément pour obtenir un résultat propre, durable et cohérent.",
      content: {
        type: SECTION_TYPES.TEXT,

        items: [
          "Alignements : portes, tiroirs et modules droits malgré les irrégularités.",
          "Ajustements : réglages fins sur place pour un rendu uniforme.",
          "Finition : joints, transitions et détails visibles au quotidien.",
          "Durabilité : une bonne installation réduit l'usure prématurée.",
        ],
      },
    },
    {
      id: "inclus",
      title: "Ce qui est inclus dans l'installation Dilamco",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Préparation du site : vérification des murs, planchers et niveaux.",
          "Mise à niveau et fixation : ancrage sécuritaire et stable des modules.",
          "Ajustement des portes et tiroirs : alignement précis et fonctionnement fluide.",
          "Gestion des joints et transitions : finition propre et cohérente.",
          "Inspection finale : vérification et ajustements avant la livraison.",
        ],
        links: [
          { title: "Voir le processus", href: "/processus/" },
          { title: "Voir la fabrication", href: "/services/fabrication/" },
        ],
      },
    },
    {
      id: "types",
      title: "Installation par type de projet",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Cuisine",
            description: "Armoires, îlots, intégration des électroménagers.",
            href: "/espaces/cuisine/",
          },
          {
            title: "Salle de bain",
            description: "Vanités, protection des chants en milieu humide.",
            href: "/espaces/salle-de-bain/",
          },
          {
            title: "Walk-in",
            description: "Alignements verticaux et optimisation de l'espace.",
            href: "/espaces/walk-in/",
          },
          {
            title: "Salle de lavage",
            description: "Dégagements, vibration et contraintes techniques.",
            href: "/espaces/salle-de-lavage/",
          },
          {
            title: "Commercial",
            description: "Usage intensif, durabilité et coordination.",
            href: "/espaces/commercial/",
          },
        ],
      },
    },
    {
      id: "details",
      title: "Détails techniques qui font la différence",
      intro:
        "Le niveau de finition dépend de décisions prises sur le terrain. Ces détails sont souvent invisibles sur un plan, mais évidents une fois le projet terminé.",
      content: {
        type: SECTION_TYPES.TEXT,

        items: [
          "Tolérances : ajustements pour absorber les écarts des murs et planchers.",
          "Protection des chants : limiter l'infiltration d'humidité et l'usure.",
          "Surfaces adjacentes : intégration propre avec comptoirs, murs et planchers.",
          "Coordination : travail en lien avec plomberie et électricité (sans les réaliser).",
        ],
        links: [
          { title: "Voir les matériaux", href: "/materiaux/" },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },
    {
      id: "coordination",
      title: "Coordination & limites",
      intro:
        "Nous installons les éléments que nous fabriquons. Lorsque le projet inclut d'autres travaux (plomberie, électricité, planchers), nous pouvons coordonner les interventions ou recommander une approche clé en main selon le contexte.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [
          {
            title: "Voir la rénovation clé en main",
            href: "/services/renovation/",
          },
        ],
      },
    },
    {
      id: "preuves",
      title: "Projets installés",
      intro:
        "Consultez nos projets pour voir le niveau d'alignement, de finition et d'intégration obtenu sur différents types d'espaces.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [{ title: "Voir les projets", href: "/projets/" }],
      },
    },
  ],
  faq: [
    {
      q: "Combien de temps dure une installation?",
      a: "La durée dépend du type de projet et de sa complexité. Une cuisine complète nécessite généralement plus de temps qu'un walk-in ou une vanité.",
    },
    {
      q: "Des ajustements sont-ils normaux?",
      a: "Oui. Les ajustements font partie d'une installation professionnelle et sont essentiels pour un rendu final propre et durable.",
    },
    {
      q: "Installez-vous seulement vos propres armoires?",
      a: "Oui. Nous installons les éléments que nous fabriquons afin de garantir la qualité et la cohérence du résultat.",
    },
    {
      q: "Que se passe-t-il s'il y a un imprévu?",
      a: "Les imprévus sont évalués sur place. Nous ajustons l'installation ou recommandons la meilleure solution selon le contexte.",
    },
    {
      q: "Travaillez-vous en condo ou en commercial?",
      a: "Oui. Nous adaptons l'installation aux contraintes d'accès, d'horaire et d'usage propres à chaque environnement.",
    },
  ],
  jsonLd: {
    name: "Installation d'armoires et cuisines sur mesure",
    description:
      "Installation précise, ajustements, alignements et finition durable.",
    serviceType: "Installation",
  },
};
