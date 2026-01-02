// data/services/main.ts
// Main services data (design, fabrication, installation, renovation)

import { SITE_URL } from "./constants";
import type { ServiceData } from "./types";

// Services principaux
export const SERVICES: ServiceData[] = [
  {
    slug: "design",
    metadata: {
      title: "Service de design | Dilamco",
      description:
        "Service de design : optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux. Un design orienté usage, prêt pour fabrication et installation, à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/design/`,
    },
    hero: {
      h1: "Service de design — structurer le projet avant de fabriquer",
      paragraphs: [
        "Le design est l'étape qui réduit les erreurs coûteuses. Il sert à cadrer l'usage, organiser l'espace, intégrer les contraintes (murs, plomberie, électroménagers) et prendre les bonnes décisions avant la fabrication et l'installation. Chez Dilamco, le design est orienté fonctionnalité et exécution — principalement à Montréal, Laval et sur la Rive-Sud.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet", href: "/contact/" },
        { label: "Voir nos réalisations", href: "/projets/" },
      ],
    },
    sections: [
      {
        id: "role",
        title: "Le rôle du design dans un projet sur mesure",
        content: {
          type: "text",
          paragraphs: [
            "Un bon design n'est pas décoratif : il rend le projet clair et exécutable. Il permet d'anticiper les contraintes et d'éviter les reprises en fabrication ou les compromis visibles à la fin.",
          ],
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
          type: "list",
          items: [
            "Analyse des besoins : vos priorités, votre usage et vos contraintes.",
            "Organisation fonctionnelle : plan d'espace et logique de rangement.",
            "Choix matériaux & finis : décisions cohérentes avec l'usage (durabilité, entretien).",
            "Planification : cadrage des étapes pour préparer fabrication et installation.",
            "Préparation à l'exécution : un design pensé pour être fabriqué et posé proprement.",
          ],
          links: [
            { label: "Voir la fabrication", href: "/services/fabrication/" },
            { label: "Voir l'installation", href: "/services/installation/" },
            { label: "Voir les matériaux", href: "/materiaux/" },
          ],
        },
      },
      {
        id: "usage",
        title: "Design orienté usage (le cœur de notre approche)",
        content: {
          type: "text",
          paragraphs: [
            "Notre approche vise à rendre l'espace simple à vivre. Le design est construit autour des gestes du quotidien : accès au rangement, zones de travail, circulation et cohérence des dimensions.",
          ],
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
          type: "text",
          paragraphs: [
            "Le design doit tenir compte de la réalité du bâtiment et des équipements. Nous intégrons les contraintes techniques dès le départ afin d'éviter des compromis tardifs.",
          ],
          items: [
            "Plomberie & électricité : intégration des emplacements et dégagements (sans exécuter les travaux).",
            "Condo et bâtiments existants : murs irréguliers, accès, contraintes de chantier.",
            "Humidité : choix adaptés en salle de bain et salle de lavage.",
            "Équipements : électroménagers, évier, hottes, accessoires et intégrations.",
          ],
          links: [
            {
              label: "Comparatif des matériaux",
              href: "/materiaux/comparatif/",
            },
          ],
        },
      },
      {
        id: "risque",
        title: "Le design réduit le risque",
        content: {
          type: "text",
          paragraphs: [
            "Plus les décisions sont prises tôt, plus le projet est prévisible. Un design solide réduit les imprévus, simplifie la fabrication et rend l'installation plus propre.",
          ],
          items: [
            "Moins d'imprévus : contraintes identifiées avant la production.",
            "Meilleure cohérence : proportions, alignements, logique de modules.",
            "Installation plus précise : moins d'ajustements inutiles sur site.",
          ],
          links: [
            {
              label: "Voir le service d'installation",
              href: "/services/installation/",
            },
          ],
        },
      },
      {
        id: "types",
        title: "Design par type de projet",
        content: {
          type: "list-with-links",
          itemsWithLinks: [
            {
              label:
                "Cuisine : zones de travail, circulation, îlot, rangement et intégration.",
              link: { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
            },
            {
              label:
                "Salle de bain : contraintes d'humidité, rangement, ergonomie.",
              link: {
                label: "Salle de bain & vanités",
                href: "/espaces/salle-de-bain/",
              },
            },
            {
              label:
                "Walk-in : organisation par zones, accessibilité, rangement vertical.",
              link: { label: "Walk-in & rangement", href: "/espaces/walk-in/" },
            },
            {
              label:
                "Salle de lavage : zones lavage/pliage, contraintes techniques, entretien.",
              link: {
                label: "Salle de lavage",
                href: "/espaces/salle-de-lavage/",
              },
            },
            {
              label:
                "Commercial : fonctionnalité, usage intensif, contraintes et calendrier.",
              link: {
                label: "Commercial sur mesure",
                href: "/espaces/commercial/",
              },
            },
          ],
        },
      },
      {
        id: "pas",
        title: "Ce que ce service n'est pas",
        content: {
          type: "text",
          paragraphs: [
            "Le design Dilamco n'est pas une démarche d'inspiration \"Pinterest\" déconnectée de la réalité. Il vise un plan cohérent, faisable, et prêt pour la fabrication et l'installation.",
          ],
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
  },
  {
    slug: "fabrication",
    metadata: {
      title: "Service de fabrication | Dilamco",
      description:
        "Fabrication sur mesure : durabilité, précision et finition haut de gamme. Matériaux orientés usage, assemblage soigné et préparation pour une installation impeccable à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/fabrication/`,
    },
    hero: {
      h1: "Fabrication sur mesure — précision, constance et durabilité",
      paragraphs: [
        "La fabrication détermine la solidité, la stabilité et la longévité d'un projet. Chez Dilamco, le sur mesure ne se limite pas à \"couper à la bonne largeur\" : nous fabriquons selon les dimensions réelles, l'usage prévu et les contraintes de l'espace, afin d'obtenir un résultat cohérent et durable — principalement à Montréal, Laval et sur la Rive-Sud.",
      ],
      ctaLinks: [
        { label: "Parler de votre projet", href: "/contact/" },
        { label: "Voir nos réalisations", href: "/projets/" },
      ],
    },
    sections: [
      {
        id: "sur-mesure",
        title: 'Ce que signifie "fabrication sur mesure"',
        content: {
          type: "text",
          paragraphs: [
            "Le sur mesure vise une adaptation réelle à votre espace et à votre usage : circulation, accès, rangement, contraintes techniques et niveau de finition. L'objectif est de livrer un projet qui vieillit bien, sans compromis sur les détails critiques.",
          ],
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
          type: "steps",
          steps: [
            "Validation du design et des mesures : plan clair et contraintes identifiées.",
            "Sélection des matériaux : choix cohérents avec l'usage (durabilité, humidité, entretien).",
            "Fabrication & assemblage : structure, modules, portes/tiroirs et préparation des ajustements.",
            "Préparation pour l'installation : contrôle, cohérence et mise en place pour une pose précise.",
          ],
          links: [{ label: "Voir le processus détaillé", href: "/processus/" }],
        },
      },
      {
        id: "details",
        title: "Matériaux, assemblage et détails qui font la différence",
        content: {
          type: "text",
          paragraphs: [
            "Le haut de gamme se joue dans des éléments parfois invisibles au premier regard : stabilité des structures, qualité des chants, fiabilité de la quincaillerie et cohérence d'assemblage.",
          ],
          items: [
            "Structures stables : choix de panneaux orientés durabilité selon le contexte.",
            "Portes & finis : MDF, mélamine, bois massif — selon le rendu et l'entretien souhaités.",
            "Tiroirs robustes : détails orientés durabilité (ex. tiroirs en bouleau, fond en contreplaqué de bouleau).",
            "Chants & finition : résistance à l'usure, aux impacts et à l'humidité (selon l'espace).",
            "Quincaillerie : charnières et coulisses adaptées à un usage répété.",
          ],
          links: [
            { label: "Voir les matériaux", href: "/materiaux/" },
            {
              label: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
            },
            { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          ],
        },
      },
      {
        id: "precision",
        title: "Précision & constance",
        content: {
          type: "text",
          paragraphs: [
            "Un bon résultat vient de la constance : modules cohérents, alignements prévisibles et ajustements maîtrisés. Plus la fabrication est précise, plus l'installation peut être propre, rapide et durable.",
          ],
          items: [
            "Cohérence : uniformité des lignes, des hauteurs et des alignements.",
            "Réduction des reprises : moins d'ajustements imprévus sur site.",
            "Durabilité : meilleure tenue dans le temps (portes, tiroirs, quincaillerie).",
          ],
          links: [
            {
              label: "Voir le service d'installation",
              href: "/services/installation/",
            },
          ],
        },
      },
      {
        id: "types",
        title: "Fabrication par type de projet",
        content: {
          type: "list-with-links",
          itemsWithLinks: [
            {
              label:
                "Cuisine : modules, îlots, rangement optimisé, intégration électroménagers.",
              link: { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
            },
            {
              label:
                "Salle de bain : vanités et rangement adaptés à l'humidité.",
              link: {
                label: "Salle de bain & vanités",
                href: "/espaces/salle-de-bain/",
              },
            },
            {
              label:
                "Walk-in : alignements verticaux, organisation et accessoires.",
              link: { label: "Walk-in & rangement", href: "/espaces/walk-in/" },
            },
            {
              label:
                "Salle de lavage : usage fréquent, contraintes techniques, surfaces faciles à entretenir.",
              link: {
                label: "Salle de lavage",
                href: "/espaces/salle-de-lavage/",
              },
            },
            {
              label:
                "Commercial : usage intensif, durabilité et cohérence fonctionnelle.",
              link: {
                label: "Commercial sur mesure",
                href: "/espaces/commercial/",
              },
            },
          ],
        },
      },
      {
        id: "transparence",
        title: "Transparence",
        content: {
          type: "text",
          paragraphs: [
            "Nous visons un résultat durable et cohérent. Cela implique des choix techniques et une exécution soignée. Si votre priorité est une solution temporaire ou strictement standard, le sur mesure haut de gamme n'est probablement pas l'option la plus pertinente.",
          ],
        },
      },
      {
        id: "preuves",
        title: "Projets fabriqués",
        content: {
          type: "text",
          paragraphs: [
            "Consultez nos projets pour voir des exemples de configurations, de finitions et de types d'espaces réalisés.",
          ],
          links: [{ label: "Voir les projets", href: "/projets/" }],
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
  },
  {
    slug: "installation",
    metadata: {
      title: "Service d'installation | Dilamco",
      description:
        "Service d'installation professionnelle : alignements précis, ajustements sur place et finition soignée pour cuisines, salles de bain, walk-in et projets commerciaux à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/installation/`,
    },
    hero: {
      h1: "Installation professionnelle — précision, alignement et finition",
      paragraphs: [
        "Une installation de qualité est déterminante pour le résultat final. Même des armoires bien fabriquées peuvent sembler médiocres si elles sont mal posées. Chez Dilamco, l'installation fait partie intégrante du projet : ajustements sur place, alignements précis et finition soignée — principalement à Montréal, Laval et sur la Rive-Sud.",
      ],
      ctaLinks: [
        { label: "Demander une soumission", href: "/contact/" },
        { label: "Voir des projets installés", href: "/projets/" },
      ],
    },
    sections: [
      {
        id: "importance",
        title: "Pourquoi l'installation fait toute la différence",
        content: {
          type: "text",
          paragraphs: [
            "Les murs, planchers et plafonds ne sont jamais parfaitement droits. Une installation professionnelle tient compte de ces réalités et ajuste chaque élément pour obtenir un résultat propre, durable et cohérent.",
          ],
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
          type: "list",
          items: [
            "Préparation du site : vérification des murs, planchers et niveaux.",
            "Mise à niveau et fixation : ancrage sécuritaire et stable des modules.",
            "Ajustement des portes et tiroirs : alignement précis et fonctionnement fluide.",
            "Gestion des joints et transitions : finition propre et cohérente.",
            "Inspection finale : vérification et ajustements avant la livraison.",
          ],
          links: [
            { label: "Voir le processus", href: "/processus/" },
            { label: "Voir la fabrication", href: "/services/fabrication/" },
          ],
        },
      },
      {
        id: "types",
        title: "Installation par type de projet",
        content: {
          type: "list-with-links",
          itemsWithLinks: [
            {
              label:
                "Cuisine : armoires, îlots, intégration des électroménagers.",
              link: { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
            },
            {
              label:
                "Salle de bain : vanités, protection des chants en milieu humide.",
              link: {
                label: "Salle de bain & vanités",
                href: "/espaces/salle-de-bain/",
              },
            },
            {
              label:
                "Walk-in : alignements verticaux et optimisation de l'espace.",
              link: { label: "Walk-in & rangement", href: "/espaces/walk-in/" },
            },
            {
              label:
                "Salle de lavage : dégagements, vibration et contraintes techniques.",
              link: {
                label: "Salle de lavage",
                href: "/espaces/salle-de-lavage/",
              },
            },
            {
              label: "Commercial : usage intensif, durabilité et coordination.",
              link: {
                label: "Commercial sur mesure",
                href: "/espaces/commercial/",
              },
            },
          ],
        },
      },
      {
        id: "details",
        title: "Détails techniques qui font la différence",
        content: {
          type: "text",
          paragraphs: [
            "Le niveau de finition dépend de décisions prises sur le terrain. Ces détails sont souvent invisibles sur un plan, mais évidents une fois le projet terminé.",
          ],
          items: [
            "Tolérances : ajustements pour absorber les écarts des murs et planchers.",
            "Protection des chants : limiter l'infiltration d'humidité et l'usure.",
            "Surfaces adjacentes : intégration propre avec comptoirs, murs et planchers.",
            "Coordination : travail en lien avec plomberie et électricité (sans les réaliser).",
          ],
          links: [
            { label: "Voir les matériaux", href: "/materiaux/" },
            { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          ],
        },
      },
      {
        id: "coordination",
        title: "Coordination & limites",
        content: {
          type: "text",
          paragraphs: [
            "Nous installons les éléments que nous fabriquons. Lorsque le projet inclut d'autres travaux (plomberie, électricité, planchers), nous pouvons coordonner les interventions ou recommander une approche clé en main selon le contexte.",
          ],
          links: [
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation/",
            },
          ],
        },
      },
      {
        id: "preuves",
        title: "Projets installés",
        content: {
          type: "text",
          paragraphs: [
            "Consultez nos projets pour voir le niveau d'alignement, de finition et d'intégration obtenu sur différents types d'espaces.",
          ],
          links: [{ label: "Voir les projets", href: "/projets/" }],
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
  },
  {
    slug: "renovation",
    metadata: {
      title: "Rénovation clé en main | Dilamco",
      description:
        "Rénovation clé en main : coordination et exécution lorsque le projet implique plusieurs corps de métier. Réduire les imprévus et livrer un résultat cohérent à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/`,
    },
    hero: {
      h1: "Rénovation clé en main",
      paragraphs: [
        "Coordination des travaux connexes au besoin (plomberie, électricité, plancher, etc.).",
      ],
      ctaLinks: [{ label: "Soumission", href: "/contact/" }],
    },
    sections: [],
    faq: [],
    jsonLd: {
      name: "Rénovation clé en main",
      description:
        "Coordination et exécution lorsque le projet implique plusieurs corps de métier.",
      serviceType: "Rénovation",
    },
  },
];
