import { SITE_URL } from "@/constants/site";
import type { ServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const FABRICATION_SERVICE_PAGE: ServiceData = {
  slug: "fabrication",
  metadata: {
    title: "Service de fabrication",
    description:
      "Fabrication sur mesure : durabilité, précision et finition haut de gamme. Matériaux orientés usage, assemblage soigné et préparation pour une installation impeccable à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/fabrication/`,
  },
  hero: {
    h1: "Fabrication sur mesure, précision, constance et durabilité",
    intro:
      "La fabrication détermine la solidité, la stabilité et la longévité d'un projet. Chez Dilamco, le sur mesure ne se limite pas à \"couper à la bonne largeur\" : nous fabriquons selon les dimensions réelles, l'usage prévu et les contraintes de l'espace, afin d'obtenir un résultat cohérent et durable, principalement à Montréal, Laval et sur la Rive-Sud.",
    ctaLinks: [
      { title: "Parler de votre projet", href: "/contact/" },
      { title: "Voir nos réalisations", href: "/projets/" },
    ],
    image: {
      src: "/images/services/fabrication-hero-v2.webp",
      alt: "Plans techniques et echantillons de materiaux pour fabrication sur mesure",
    },
  },
  sections: [
    {
      id: "sur-mesure",
      title: 'Ce que signifie "fabrication sur mesure"',
      intro:
        "Le sur mesure vise une adaptation réelle à votre espace et à votre usage : circulation, accès, rangement, contraintes techniques et niveau de finition. L'objectif est de livrer un projet qui vieillit bien, sans compromis sur les détails critiques.",
      content: {
        type: SECTION_TYPES.TEXT,

        items: [
          "Dimensions réelles : adaptation à l'espace (murs, angles, contraintes).",
          "Cohérence entre modules : alignements et proportions maîtrisés.",
          "Choix orientés usage : matériaux et quincaillerie adaptés aux charges et aux cycles d'ouverture.",
        ],
      },
    },
    {
      id: "processus",
      title: "Processus de fabrication",
      content: {
        type: SECTION_TYPES.STEPS,
        steps: [
          "Validation du design et des mesures : plan clair et contraintes identifiées.",
          "Sélection des matériaux : choix cohérents avec l'usage (durabilité, humidité, entretien).",
          "Fabrication & assemblage : structure, modules, portes/tiroirs et préparation des ajustements.",
          "Préparation pour l'installation : contrôle, cohérence et mise en place pour une pose précise.",
        ],
        links: [{ title: "Voir le processus détaillé", href: "/processus/" }],
      },
    },
    {
      id: "details",
      title: "Matériaux, assemblage et détails qui font la différence",
      intro:
        "Le haut de gamme se joue dans des éléments parfois invisibles au premier regard : stabilité des structures, qualité des chants, fiabilité de la quincaillerie et cohérence d'assemblage.",
      content: {
        type: SECTION_TYPES.TEXT,

        items: [
          "Structures stables : choix de panneaux orientés durabilité selon le contexte.",
          "Portes & finis : MDF, mélamine, bois massif, selon le rendu et l'entretien souhaités.",
          "Tiroirs robustes : détails orientés durabilité (ex. tiroirs en bouleau, fond en contreplaqué de bouleau).",
          "Chants & finition : résistance à l'usure, aux impacts et à l'humidité (selon l'espace).",
          "Quincaillerie : charnières et coulisses adaptées à un usage répété.",
        ],
        links: [
          { title: "Voir les matériaux", href: "/materiaux/" },
          {
            title: "Pourquoi le contreplaqué",
            href: "/materiaux/contreplaque/",
          },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },
    {
      id: "precision",
      title: "Précision & constance",
      intro:
        "Un bon résultat vient de la constance : modules cohérents, alignements prévisibles et ajustements maîtrisés. Plus la fabrication est précise, plus l'installation peut être propre, rapide et durable.",
      content: {
        type: SECTION_TYPES.TEXT,

        items: [
          "Cohérence : uniformité des lignes, des hauteurs et des alignements.",
          "Réduction des reprises : moins d'ajustements imprévus sur site.",
          "Durabilité : meilleure tenue dans le temps (portes, tiroirs, quincaillerie).",
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
      title: "Fabrication par type de projet",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          {
            title: "Cuisine",
            description:
              "Modules, îlots, rangement optimisé, intégration électroménagers.",
            href: "/espaces/cuisine/",
          },
          {
            title: "Salle de bain",
            description: "Vanités et rangement adaptés à l'humidité.",
            href: "/espaces/salle-de-bain/",
          },
          {
            title: "Walk-in",
            description: "Alignements verticaux, organisation et accessoires.",
            href: "/espaces/walk-in/",
          },
          {
            title: "Salle de lavage",
            description:
              "Usage fréquent, contraintes techniques, surfaces faciles à entretenir.",
            href: "/espaces/salle-de-lavage/",
          },
          {
            title: "Commercial",
            description:
              "Usage intensif, durabilité et cohérence fonctionnelle.",
            href: "/espaces/commercial/",
          },
        ],
      },
    },
    {
      id: "transparence",
      title: "Transparence",
      intro:
        "Nous visons un résultat durable et cohérent. Cela implique des choix techniques et une exécution soignée. Si votre priorité est une solution temporaire ou strictement standard, le sur mesure haut de gamme n'est probablement pas l'option la plus pertinente.",
      content: {
        type: SECTION_TYPES.TEXT,
      },
    },
    {
      id: "preuves",
      title: "Projets fabriqués",
      intro:
        "Consultez nos projets pour voir des exemples de configurations, de finitions et de types d'espaces réalisés.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [{ title: "Voir les projets", href: "/projets/" }],
      },
    },
  ],
  faq: [
    {
      q: "Quelle est la différence entre sur mesure et semi-custom?",
      a: "Le sur mesure s'adapte à l'espace exact (dimensions, contraintes, ergonomie). Le semi-custom part de modules prédéfinis avec certaines variations. Le bon choix dépend du niveau d'adaptation et de finition recherché.",
    },
    {
      q: "Quels matériaux vieillissent le mieux?",
      a: "Ça dépend de l'espace (humidité, usage, entretien). La durabilité dépend autant du matériau que des chants, de la quincaillerie et de l'installation.",
    },
    {
      q: "Est-ce personnalisable à 100 %?",
      a: "L'objectif est d'adapter le projet à votre espace et à votre usage. La faisabilité dépend des contraintes techniques (dimensions, accès, équipements) et du niveau de finition recherché.",
    },
    {
      q: "Quels sont les délais de fabrication?",
      a: "Les délais varient selon la complexité et la disponibilité. L'échéance est à préciser lors de la soumission, afin d'aligner le design, la production et l'installation.",
    },
  ],
  jsonLd: {
    name: "Fabrication sur mesure d'armoires et cuisines",
    description:
      "Fabrication sur mesure : durabilité, précision et finition haut de gamme. Matériaux orientés usage, assemblage soigné et préparation pour une installation impeccable.",
    serviceType: "Fabrication",
  },
};
