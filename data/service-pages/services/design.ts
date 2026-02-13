import { SITE_URL } from "@/constants/site";
import type { ServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const DESIGN_SERVICE_PAGE: ServiceData = {
  slug: "design",
  metadata: {
    title: "Service de design",
    description:
      "Service de design : optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux. Un design orienté usage, prêt pour fabrication et installation, à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/design/`,
  },
  hero: {
    h1: "Service de design, structurer le projet avant de fabriquer",
    intro:
      "Le design est l'étape qui réduit les erreurs coûteuses. Il sert à cadrer l'usage, organiser l'espace, intégrer les contraintes (murs, plomberie, électroménagers) et prendre les bonnes décisions avant la fabrication et l'installation. Chez Dilamco, le design est orienté fonctionnalité et exécution, principalement à Montréal, Laval et sur la Rive-Sud.",
    ctaLinks: [
      { title: "Parler de votre projet", href: "/contact/" },
      { title: "Voir nos réalisations", href: "/projets/" },
    ],
  },
  sections: [
    {
      id: "role",
      title: "Le rôle du design dans un projet sur mesure",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Un bon design n'est pas décoratif : il rend le projet clair et exécutable. Il permet d'anticiper les contraintes et d'éviter les reprises en fabrication ou les compromis visibles à la fin.",
        items: [
          "Optimiser l'espace : circulation, zones de travail, dégagements, hauteurs.",
          "Structurer le rangement : accès, organisation, priorités d'usage.",
          "Intégrer les contraintes : murs irréguliers, plomberie, équipements.",
          "Aligner les décisions : matériaux, finition, calendrier et niveau de complexité.",
        ],
      },
    },
    {
      id: "inclus",
      title: "Ce que comprend le service de design",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Analyse des besoins : vos priorités, votre usage et vos contraintes.",
          "Organisation fonctionnelle : plan d'espace et logique de rangement.",
          "Choix matériaux & finis : décisions cohérentes avec l'usage (durabilité, entretien).",
          "Planification : cadrage des étapes pour préparer fabrication et installation.",
          "Préparation à l'exécution : un design pensé pour être fabriqué et posé proprement.",
        ],
        links: [
          { title: "Voir la fabrication", href: "/services/fabrication/" },
          { title: "Voir l'installation", href: "/services/installation/" },
          { title: "Voir les matériaux", href: "/materiaux/" },
        ],
      },
    },
    {
      id: "usage",
      title: "Design orienté usage (le cœur de notre approche)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Notre approche vise à rendre l'espace simple à vivre. Le design est construit autour des gestes du quotidien : accès au rangement, zones de travail, circulation et cohérence des dimensions.",
        items: [
          "Ergonomie : hauteurs, dégagements, logique de déplacement.",
          "Rangement intelligent : coins, tiroirs, modules adaptés et organisation.",
          "Priorités claires : ce qui compte le plus pour vous (fonction, style, durabilité).",
        ],
      },
    },
    {
      id: "contraintes",
      title: "Contraintes techniques (intégration, pas improvisation)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Le design doit tenir compte de la réalité du bâtiment et des équipements. Nous intégrons les contraintes techniques dès le départ afin d'éviter des compromis tardifs.",
        items: [
          "Plomberie & électricité : intégration des emplacements et dégagements (sans exécuter les travaux).",
          "Condo et bâtiments existants : murs irréguliers, accès, contraintes de chantier.",
          "Humidité : choix adaptés en salle de bain et salle de lavage.",
          "Équipements : électroménagers, évier, hottes, accessoires et intégrations.",
        ],
        links: [
          {
            title: "Comparatif des matériaux",
            href: "/materiaux/comparatif/",
          },
        ],
      },
    },
    {
      id: "risque",
      title: "Le design réduit le risque",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Plus les décisions sont prises tôt, plus le projet est prévisible. Un design solide réduit les imprévus, simplifie la fabrication et rend l'installation plus propre.",
        items: [
          "Moins d'imprévus : contraintes identifiées avant la production.",
          "Meilleure cohérence : proportions, alignements, logique de modules.",
          "Installation plus précise : moins d'ajustements inutiles sur site.",
        ],
        links: [
          {
            title: "Voir le service d'installation",
            href: "/services/installation/",
          },
        ],
      },
    },
    {
      id: "types",
      title: "Design par type de projet",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Cuisine",
            description:
              "Zones de travail, circulation, ilot, rangement et integration.",
            href: "/espaces/cuisine/",
          },
          {
            title: "Salle de bain",
            description: "Contraintes d humidite, rangement, ergonomie.",
            href: "/espaces/salle-de-bain/",
          },
          {
            title: "Walk-in",
            description:
              "Organisation par zones, accessibilite, rangement vertical.",
            href: "/espaces/walk-in/",
          },
          {
            title: "Salle de lavage",
            description:
              "Zones lavage/pliage, contraintes techniques, entretien.",
            href: "/espaces/salle-de-lavage/",
          },
          {
            title: "Commercial",
            description:
              "Fonctionnalite, usage intensif, contraintes et calendrier.",
            href: "/espaces/commercial/",
          },
        ],
      },
    },
    {
      id: "pas",
      title: "Ce que ce service n'est pas",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Le design Dilamco n'est pas une démarche d'inspiration \"Pinterest\" déconnectée de la réalité. Il vise un plan cohérent, faisable, et prêt pour la fabrication et l'installation.",
      },
    },
  ],
  faq: [
    {
      q: "Le design est-il obligatoire?",
      a: "Dans un projet sur mesure, le design sert à cadrer les décisions avant la fabrication. Il est fortement recommandé pour éviter des compromis tardifs et clarifier l'organisation.",
    },
    {
      q: "Peut-on passer directement à la fabrication?",
      a: "Ça dépend du projet. Même lorsque l'idée est claire, il faut valider les contraintes, l'organisation et les dimensions pour assurer un résultat cohérent.",
    },
    {
      q: "Est-ce que ça fonctionne en condo?",
      a: "Oui. Le design est particulièrement utile en condo pour gérer les contraintes d'accès, d'espace et d'intégration des équipements.",
    },
    {
      q: "Quand intervient le design dans le projet?",
      a: "Le design intervient au début, avant la fabrication, afin de valider la logique d'espace, les choix de matériaux et les contraintes techniques.",
    },
  ],
  jsonLd: {
    name: "Service de design d'armoires et cuisines sur mesure",
    description:
      "Service de design : optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux. Un design orienté usage, prêt pour fabrication et installation.",
    serviceType: "Design",
  },
};
