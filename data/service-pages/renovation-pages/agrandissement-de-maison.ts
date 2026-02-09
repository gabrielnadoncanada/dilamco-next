import { SITE_URL } from "@/constants/site";
import type { RenovationSubServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const AGRANDISSEMENT_DE_MAISON_RENOVATION_PAGE: RenovationSubServiceData =
  {
    type: "agrandissement-de-maison",
    metadata: {
      title: "Agrandissement de maison",
      description:
        "Agrandissement de maison clé en main : planification, coordination et exécution complÃ¨te. Projets résidentiels réalisés Ã  Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/agrandissement-de-maison/`,
    },
    hero: {
      h1: "Agrandissement de maison, planification, coordination et exécution complÃ¨te",
      paragraphs: [
        "Un agrandissement de maison est un projet structurant : fondation, structure, enveloppe, puis aménagement intérieur. Dilamco réalise des projets d'agrandissement résidentiel complets, avec une coordination claire des étapes et un objectif simple : livrer un espace fonctionnel, durable et bien intégré Ã  l'existant.",
      ],
      ctaLinks: [
        { title: "Demander une soumission", href: "/contact/" },
        {
          title: "Voir la rénovation clé en main",
          href: "/services/renovation/",
        },
      ],
    },
    sections: [
      {
        id: "pour-qui",
        title: "Quand un agrandissement de maison est pertinent",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "Un agrandissement de maison est envisagé lorsqu'un espace supplémentaire est nécessaire et que la configuration actuelle ne répond plus aux besoins. Ce type de projet vise une transformation durable, intégrée Ã  la structure existante.",
          ],
          items: [
            "Vous manquez d'espace et souhaitez éviter un déménagement.",
            "Vous souhaitez ajouter une ou plusieurs piÃ¨ces (chambre, bureau, salle familiale, etc.).",
            "Vous voulez agrandir une zone existante pour améliorer la circulation et la fonctionnalité.",
            "Votre maison permet structurellement une extension (latérale, arriÃ¨re ou étage).",
          ],
        },
      },
      {
        id: "portee",
        title: "Un agrandissement est un projet global",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "Un agrandissement ne se limite pas Ã  ajouter des mÃ¨tres carrés. Il implique une intégration structurelle, architecturale et fonctionnelle avec le bÃ¢timent existant. La réussite du projet dépend autant de la planification que de l'exécution.",
          ],
          items: [
            "Structure : fondations, charpente, ouvertures et jonctions avec l'existant.",
            "Enveloppe : murs, toiture, isolation et continuité thermique.",
            "Aménagement : circulation, niveaux, transitions et finitions.",
          ],
        },
      },
      {
        id: "inclus",
        title: "Ce qui est généralement inclus (selon le projet)",
        content: {
          type: SECTION_TYPES.LIST,
          intro:
            "La portée exacte varie selon le type d'agrandissement. Les inclusions sont définies clairement lors de la soumission afin d'éviter toute ambiguÃ¯té.",
          items: [
            "Analyse du projet : besoins, contraintes, faisabilité et intégration Ã  l'existant.",
            "Planification : séquence des travaux et coordination des intervenants.",
            "Exécution : structure, enveloppe et travaux requis selon la portée.",
            "Aménagement intérieur : coordination des finitions et intégration des espaces.",
            "Inspection et ajustements : vérification finale avant livraison.",
          ],
          links: [
            { title: "Rénovation clé en main", href: "/services/renovation/" },
            { title: "Design", href: "/services/design/" },
            { title: "Installation", href: "/services/installation/" },
          ],
        },
      },
      {
        id: "coordination",
        title: "Coordination & responsabilité",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "Un agrandissement implique plusieurs étapes critiques. Une coordination claire permet de réduire les retards, les conflits entre corps de métier et les reprises coÃ»teuses.",
          ],
          items: [
            "Séquencement : ordre logique des travaux pour assurer la continuité.",
            "Responsabilité : un cadre clair sur les rÃ´les et les livrables.",
            "Qualité finale : cohérence entre l'existant et la nouvelle construction.",
          ],
        },
      },
      {
        id: "integration",
        title: "Intégration Ã  la maison existante",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "L'un des enjeux majeurs d'un agrandissement est l'intégration visuelle et fonctionnelle. L'objectif est que l'agrandissement fasse partie de la maison, et non qu'il apparaisse comme un ajout distinct.",
          ],
          items: [
            "Alignement des niveaux et des plafonds.",
            "Transitions fluides entre les espaces.",
            "Cohérence des matériaux et des finitions.",
          ],
        },
      },
      {
        id: "projets",
        title: "Projets d'agrandissement résidentiel",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "Consultez nos projets pour voir des exemples d'agrandissements intégrés Ã  des maisons existantes, avec différents types de configurations et de portées.",
          ],
          links: [{ title: "Voir les projets", href: "/projets/" }],
        },
      },
      {
        id: "local",
        title: "Zones desservies",
        content: {
          type: SECTION_TYPES.TEXT,
          paragraphs: [
            "Nos projets d'agrandissement de maison sont réalisés principalement Ã  Montréal, Laval et sur la Rive-Sud.",
          ],
          links: [
            { title: "Rénovation clé en main", href: "/services/renovation/" },
          ],
        },
      },
    ],
    faq: [
      {
        q: "Est-ce que Dilamco gÃ¨re des agrandissements complets?",
        a: "Oui. Nous réalisons des agrandissements de maison complets, incluant la planification, la coordination et l'exécution selon la portée définie.",
      },
      {
        q: "Quels types d'agrandissement sont possibles?",
        a: "La faisabilité dépend de la maison existante, du terrain et des rÃ¨glements municipaux. Ces éléments sont évalués en amont du projet.",
      },
      {
        q: "Est-ce un projet clé en main?",
        a: "Oui, lorsque le projet le requiert. La portée exacte et le niveau de coordination sont définis clairement lors de la soumission.",
      },
      {
        q: "Combien de temps dure un agrandissement?",
        a: "La durée varie selon la complexité, la superficie et les contraintes. Un échéancier est établi aprÃ¨s l'analyse du projet.",
      },
      {
        q: "Est-ce possible en zone urbaine ou en condo?",
        a: "Chaque contexte est évalué individuellement. En milieu urbain, l'accÃ¨s, les rÃ¨glements et la logistique sont pris en compte dÃ¨s la planification.",
      },
    ],
  };
