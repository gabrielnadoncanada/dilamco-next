// data/services/renovation.ts
// Renovation sub-services data

import { SITE_URL } from "./constants";
import type { RenovationType, RenovationSubServiceData } from "./types";

// Renovation sub-services
export const RENOVATION_SUB_SERVICES: Record<
  RenovationType,
  RenovationSubServiceData
> = {
  cuisine: {
    type: "cuisine",
    metadata: {
      title: "Rénovation de cuisine | Dilamco",
      description:
        "Rénovation de cuisine clé en main : design, coordination, fabrication et installation d'armoires sur mesure. Un seul partenaire, du plan à la finition, à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/cuisine/`,
    },
    hero: {
      h1: "Rénovation de cuisine clé en main — un seul partenaire, du plan à la finition",
      paragraphs: [
        "Une rénovation de cuisine réussie dépend autant de la coordination que du résultat final. Dilamco propose une approche clé en main lorsque le projet le requiert : design orienté usage, fabrication sur mesure, installation précise et coordination des étapes connexes — principalement à Montréal, Laval et sur la Rive-Sud.",
      ],
      ctaLinks: [
        { label: "Demander une soumission", href: "/contact/" },
        { label: "Voir des projets de cuisines", href: "/projets/cuisine/" },
      ],
    },
    sections: [
      {
        id: "pour-qui",
        title: "À qui s'adresse une rénovation clé en main?",
        content: {
          type: "text",
          paragraphs: [
            "Si vous préférez gérer vous-même les corps de métier, la rénovation clé en main n'est peut-être pas l'option la plus pertinente. L'objectif ici est la tranquillité d'esprit et un résultat final bien exécuté.",
          ],
          items: [
            "Vous voulez éviter la gestion de chantier et limiter les allers-retours entre intervenants.",
            "Vous rénovez une cuisine existante (maison ou condo) et vous cherchez un résultat cohérent.",
            "Vous souhaitez réduire les imprévus grâce à une séquence de travaux claire.",
          ],
        },
      },
      {
        id: "inclus",
        title: "Ce qui est inclus (selon le projet)",
        content: {
          type: "list",
          intro:
            "Chaque rénovation est cadrée selon vos besoins et la réalité du lieu. Les inclusions exactes sont confirmées lors de la soumission.",
          items: [
            "Design & planification : organisation de l'espace, ergonomie, plan et décisions clés.",
            "Fabrication sur mesure : armoires, îlot, rangement optimisé selon l'espace.",
            "Installation : alignements, ajustements sur place et finition soignée.",
            "Coordination : séquencement des étapes et coordination des travaux connexes au besoin.",
          ],
          links: [
            { label: "Design", href: "/services/design/" },
            { label: "Fabrication", href: "/services/fabrication/" },
            { label: "Installation", href: "/services/installation/" },
          ],
        },
      },
      {
        id: "transparence",
        title: "Transparence (ce qui varie)",
        content: {
          type: "text",
          paragraphs: [
            "Une rénovation peut inclure plusieurs travaux connexes. Selon le mandat, certains éléments peuvent être inclus, coordonnés ou réalisés par d'autres intervenants. L'objectif est d'éviter les zones grises et de cadrer le plan avant le début des travaux.",
          ],
          items: [
            "Électroménagers : généralement choisis par le client; l'intégration est planifiée au design.",
            "Travaux structurels majeurs : évalués au cas par cas selon la portée du projet.",
            "Finitions (planchers, dosseret, peinture, etc.) : incluses ou coordonnées selon le mandat.",
          ],
        },
      },
      {
        id: "design-role",
        title: "Le design en rénovation : réduire les imprévus",
        content: {
          type: "text",
          paragraphs: [
            "En rénovation, l'existant impose des contraintes : murs irréguliers, plomberie, ventilation, accès et intégration des équipements. Le design sert à prendre les décisions tôt, avant la production et l'installation, pour éviter des compromis visibles à la fin.",
          ],
          items: [
            "Organisation : zones de travail, circulation, rangement et intégration.",
            "Contraintes : plomberie/électricité (intégration), dimensions, dégagements.",
            "Prévisibilité : séquence claire des étapes et décisions validées avant exécution.",
          ],
          links: [
            { label: "Voir le service de design", href: "/services/design/" },
          ],
        },
      },
      {
        id: "coordination",
        title: "Coordination & exécution",
        content: {
          type: "text",
          paragraphs: [
            "Une rénovation clé en main vise un résultat final cohérent. Cela implique une coordination claire : séquence des étapes, phasage, et communication sur les points critiques (accès, interruptions, délais).",
          ],
          items: [
            "Séquencement : planifier l'ordre des travaux pour réduire les reprises.",
            "Phasage : limiter l'impact sur la vie quotidienne lorsque possible.",
            "Qualité finale : alignements, transitions et finitions inspectées.",
          ],
        },
      },
      {
        id: "durabilite",
        title: "Matériaux & durabilité",
        content: {
          type: "text",
          paragraphs: [
            "Le choix des matériaux influence la durabilité, mais la qualité finale dépend aussi des chants, de la quincaillerie et de l'installation. Nous orientons les choix selon l'usage et l'entretien attendu.",
          ],
          links: [
            { label: "Voir les matériaux", href: "/materiaux/" },
            {
              label: "Comparatif des matériaux",
              href: "/materiaux/comparatif/",
            },
          ],
        },
      },
      {
        id: "projets",
        title: "Projets de rénovation de cuisine",
        content: {
          type: "text",
          paragraphs: [
            "Consultez nos projets pour voir des exemples de configurations, de niveaux de finition et de résultats obtenus sur différents types d'espaces.",
          ],
          links: [
            {
              label: "Voir les projets de cuisines",
              href: "/projets/cuisine/",
            },
          ],
        },
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation de cuisine?",
        a: "La durée varie selon la portée (partielle vs complète), les contraintes du lieu et la coordination des étapes. L'échéance est confirmée lors de la soumission.",
      },
      {
        q: "Est-ce possible en condo?",
        a: "Oui. En condo, il faut souvent gérer l'accès, les horaires et certaines contraintes techniques. Le design sert à cadrer ces éléments dès le départ.",
      },
      {
        q: "Dois-je quitter le logement pendant les travaux?",
        a: "Ça dépend de la portée. Pour une rénovation complète, il peut y avoir des périodes moins confortables. Le phasage est discuté pour limiter l'impact lorsque possible.",
      },
      {
        q: "Comment sont gérés les imprévus?",
        a: "Les imprévus sont évalués sur place. L'objectif est de les anticiper au maximum au design, puis d'ajuster la séquence de travaux si nécessaire.",
      },
      {
        q: "Puis-je faire une rénovation partielle?",
        a: "Oui. Certains projets visent uniquement l'armoire, l'îlot et l'installation, tandis que d'autres incluent des travaux connexes. La portée est clarifiée lors de la soumission.",
      },
    ],
  },
  "salle-de-bain": {
    type: "salle-de-bain",
    metadata: {
      title: "Rénovation salle de bain | Dilamco",
      description:
        "Rénovation de salle de bain clé en main : design, coordination, vanités sur mesure et finition durable. Approche orientée humidité, exécution et tranquillité d'esprit à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/salle-de-bain/`,
    },
    hero: {
      h1: "Rénovation de salle de bain clé en main — durabilité, coordination et finition",
      paragraphs: [
        "Une rénovation de salle de bain est un projet sensible : humidité, plomberie, ventilation et risques de dégâts d'eau. Dilamco propose une approche clé en main lorsque le projet le requiert : design orienté usage, vanités sur mesure, installation précise et coordination des étapes connexes — principalement à Montréal, Laval et sur la Rive-Sud.",
      ],
      ctaLinks: [
        { label: "Demander une soumission", href: "/contact/" },
        {
          label: "Voir des projets de salles de bain",
          href: "/projets/salle-de-bain/",
        },
      ],
    },
    sections: [
      {
        id: "pour-qui",
        title: "À qui s'adresse une rénovation clé en main?",
        content: {
          type: "text",
          paragraphs: [
            "Si votre objectif est uniquement décoratif ou temporaire, la rénovation clé en main n'est peut-être pas l'option la plus pertinente. L'objectif ici est la durabilité, la cohérence et la tranquillité d'esprit.",
          ],
          items: [
            "Vous voulez réduire les risques liés à l'eau grâce à une planification et une exécution cadrées.",
            "Vous rénovez une salle de bain existante (maison ou condo) et vous cherchez un résultat durable.",
            "Vous préférez éviter la gestion de chantier et les zones grises entre intervenants.",
          ],
        },
      },
      {
        id: "inclus",
        title: "Ce qui est inclus (selon le projet)",
        content: {
          type: "list",
          intro:
            "Les inclusions exactes varient selon la portée (partielle ou complète). Elles sont confirmées lors de la soumission, pour éviter toute ambiguïté.",
          items: [
            "Design & planification : organisation de l'espace, ergonomie, décisions clés.",
            "Vanités et rangement sur mesure : conception adaptée à l'usage et à l'humidité.",
            "Installation : alignements, ajustements sur place et finition soignée.",
            "Coordination : séquencement et coordination des travaux connexes au besoin.",
          ],
          links: [
            { label: "Design", href: "/services/design/" },
            { label: "Fabrication", href: "/services/fabrication/" },
            { label: "Installation", href: "/services/installation/" },
            { label: "Vanités sur mesure", href: "/espaces/salle-de-bain/" },
          ],
        },
      },
      {
        id: "variable",
        title: "Transparence (ce qui varie)",
        content: {
          type: "text",
          paragraphs: [
            "Une rénovation de salle de bain peut inclure plusieurs travaux connexes. Selon le mandat, certains éléments peuvent être inclus, coordonnés ou réalisés par d'autres intervenants. L'objectif est de cadrer le plan avant de démarrer.",
          ],
          items: [
            "Douche / bain : selon la portée de la rénovation.",
            "Plomberie majeure : évaluée au cas par cas selon l'existant.",
            "Ventilation : intégrée à la planification lorsque nécessaire.",
            "Finitions (céramique, peinture, etc.) : incluses ou coordonnées selon le mandat.",
          ],
        },
      },
      {
        id: "design-role",
        title: "Le design en rénovation : éviter les erreurs coûteuses",
        content: {
          type: "text",
          paragraphs: [
            "En salle de bain, les erreurs se paient cher. Le design sert à intégrer l'existant (plomberie, drains, dégagements) et à prendre les décisions avant la démolition, afin de limiter les imprévus et les compromis.",
          ],
          items: [
            "Ergonomie : circulation, accès, hauteur de vanité, rangement.",
            "Contraintes : plomberie/ventilation (intégration), dimensions et dégagements.",
            "Prévisibilité : séquence claire des étapes et décisions validées tôt.",
          ],
          links: [
            { label: "Voir le service de design", href: "/services/design/" },
          ],
        },
      },
      {
        id: "humidite",
        title: "Humidité, eau & durabilité (priorités)",
        content: {
          type: "text",
          paragraphs: [
            "Une salle de bain est un environnement exigeant : éclaboussures, vapeur, nettoyage fréquent. La durabilité dépend des matériaux, mais surtout des détails : chants, quincaillerie et qualité d'installation.",
          ],
          items: [
            "Matériaux adaptés : choix cohérents avec l'usage et l'humidité.",
            "Protection des chants : limiter l'infiltration d'eau et l'usure.",
            "Quincaillerie : usage répété, fiabilité et ajustements dans le temps.",
            "Ventilation : planifiée au besoin pour réduire les risques à long terme.",
          ],
          links: [
            { label: "Voir les matériaux", href: "/materiaux/" },
            {
              label: "Comparatif des matériaux",
              href: "/materiaux/comparatif/",
            },
            { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          ],
        },
      },
      {
        id: "coordination",
        title: "Coordination & exécution",
        content: {
          type: "text",
          paragraphs: [
            "Une rénovation clé en main vise un résultat final cohérent. Cela implique une coordination claire : séquence des étapes, phasage, et communication sur les points critiques (accès, interruptions, contraintes).",
          ],
          items: [
            "Séquencement : organiser l'ordre des travaux pour limiter les reprises.",
            "Phasage : réduire l'impact sur la vie quotidienne lorsque possible.",
            "Inspection finale : vérification et ajustements avant la livraison.",
          ],
        },
      },
      {
        id: "projets",
        title: "Projets de rénovation de salle de bain",
        content: {
          type: "text",
          paragraphs: [
            "Consultez nos projets pour voir des exemples de vanités sur mesure, de configurations, et de niveaux de finition obtenus dans des environnements humides.",
          ],
          links: [
            {
              label: "Voir les projets de salles de bain",
              href: "/projets/salle-de-bain/",
            },
          ],
        },
      },
    ],
    faq: [
      {
        q: "Combien de temps dure une rénovation de salle de bain?",
        a: "La durée varie selon la portée (partielle vs complète), les contraintes du lieu et la coordination des étapes. L'échéance est confirmée lors de la soumission.",
      },
      {
        q: "Est-ce risqué au niveau des dégâts d'eau?",
        a: "Une salle de bain exige une exécution rigoureuse. Le design sert à réduire les risques en cadrant les contraintes et la séquence. Les détails de finition et l'installation sont déterminants.",
      },
      {
        q: "Est-ce possible en condo?",
        a: "Oui. En condo, il faut souvent gérer l'accès, les horaires et des contraintes de bâtiment. Le plan est discuté pour réduire l'impact et respecter le contexte.",
      },
      {
        q: "Dois-je quitter le logement pendant les travaux?",
        a: "Ça dépend de la portée. Pour une rénovation complète, il peut y avoir des périodes moins confortables. Le phasage est discuté pour limiter l'impact lorsque possible.",
      },
      {
        q: "Puis-je faire une rénovation partielle?",
        a: "Oui. Certains projets visent surtout la vanité et le rangement; d'autres incluent douche/bain, céramique et travaux connexes. La portée est clarifiée lors de la soumission.",
      },
    ],
  },
  plancher: {
    type: "plancher",
    metadata: {
      title: "Rénovation de plancher | Dilamco",
      description:
        "Rénovation de plancher : planification, coordination et finition soignée. Intégration du plancher dans un projet de rénovation (cuisine, salle de bain) à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/plancher/`,
    },
    hero: {
      h1: "Rénovation de plancher — coordination, niveaux et finition",
      paragraphs: [
        "En rénovation, le plancher influence tout : niveaux, transitions, alignements et finition. Dilamco intervient lorsque le plancher doit être intégré à un projet plus large (cuisine, salle de bain ou rénovation clé en main) avec une séquence de travaux claire et une exécution soignée.",
      ],
      ctaLinks: [
        { label: "Demander une soumission", href: "/contact/" },
        {
          label: "Voir la rénovation clé en main",
          href: "/services/renovation/",
        },
      ],
    },
    sections: [
      {
        id: "pour-qui",
        title: "Quand une rénovation de plancher est pertinente",
        content: {
          type: "text",
          paragraphs: [
            "Un plancher n'est pas seulement un choix esthétique : en rénovation, il détermine les niveaux, les transitions et une partie de la qualité perçue. Une rénovation de plancher devient particulièrement pertinente lorsqu'elle est liée à une cuisine, une salle de bain ou un réaménagement.",
          ],
          items: [
            "Votre plancher est usé, endommagé ou présente des variations de niveau.",
            "Vous rénovez une cuisine ou une salle de bain et vous voulez une finition cohérente.",
            "Vous changez la disposition (îlot, électroménagers, zones de circulation) et le plancher doit suivre.",
            "Vous devez gérer des zones sensibles (humidité, transitions entre pièces, seuils).",
          ],
        },
      },
      {
        id: "plancher-integrer",
        title: "Le plancher n'est jamais isolé dans une rénovation",
        content: {
          type: "text",
          paragraphs: [
            "Le point critique, ce n'est pas seulement le matériau : c'est l'ordre des étapes. Un plancher mal séquencé peut créer des reprises, des écarts de niveau, des transitions visibles ou des ajustements complexes lors de l'installation des armoires.",
          ],
          items: [
            "Niveaux : impact direct sur l'alignement des armoires et des électroménagers.",
            "Transitions : jonctions entre pièces, seuils et finitions périmétriques.",
            "Séquence : éviter de poser trop tôt ou trop tard, selon la portée du chantier.",
          ],
          links: [
            { label: "Installation", href: "/services/installation/" },
            {
              label: "Rénovation de cuisine",
              href: "/services/renovation/cuisine/",
            },
            {
              label: "Rénovation salle de bain",
              href: "/services/renovation/salle-de-bain/",
            },
          ],
        },
      },
      {
        id: "inclus",
        title: "Ce qui est inclus (selon le projet)",
        content: {
          type: "list",
          intro:
            "La portée exacte dépend de votre projet (plancher seul vs rénovation plus large). Les inclusions sont confirmées lors de la soumission.",
          items: [
            "Évaluation de l'existant : niveaux, état, contraintes et transitions.",
            "Planification : séquence des étapes et coordination avec les autres travaux.",
            "Coordination : gestion des intervenants au besoin (travaux connexes).",
            "Exécution & finition : installation, ajustements et inspection finale.",
          ],
          links: [
            { label: "Rénovation clé en main", href: "/services/renovation/" },
          ],
        },
      },
      {
        id: "projets",
        title: "Projets où le plancher fait partie du résultat final",
        content: {
          type: "text",
          paragraphs: [
            "Le plancher influence la cohérence du projet, surtout en cuisine et en salle de bain. Consultez nos projets pour voir des exemples de rénovation où les niveaux, transitions et finitions ont été intégrés à la planification globale.",
          ],
          links: [{ label: "Voir les projets", href: "/projets/" }],
        },
      },
      {
        id: "local",
        title: "Zones desservies",
        content: {
          type: "text",
          paragraphs: [
            "Nos projets de rénovation intégrant le plancher sont réalisés principalement à Montréal, Laval et sur la Rive-Sud.",
          ],
          links: [
            { label: "Rénovation clé en main", href: "/services/renovation/" },
            {
              label: "Rénovation de cuisine",
              href: "/services/renovation/cuisine/",
            },
          ],
        },
      },
    ],
    faq: [
      {
        q: "Est-ce que je peux refaire uniquement le plancher?",
        a: "Oui. Certains projets portent uniquement sur le plancher. Toutefois, dès qu'il y a des armoires, des transitions complexes ou une rénovation plus large, la coordination devient un facteur déterminant.",
      },
      {
        q: "Dans quel ordre faut-il faire les travaux?",
        a: "L'ordre dépend de la portée : armoires, plomberie/électricité, plancher, finition. L'objectif est d'éviter les reprises et de protéger la cohérence du résultat final. La séquence est confirmée lors de la soumission.",
      },
      {
        q: "Est-ce possible en condo?",
        a: "Oui. En condo, il faut parfois respecter des règles d'immeuble (horaires, acoustique, accès). Ces contraintes sont discutées au cadrage du projet.",
      },
      {
        q: "Est-ce que le plancher influence l'installation des armoires?",
        a: "Oui. Les niveaux et la planéité influencent directement l'alignement des armoires, les joints, les transitions et l'aspect final. C'est pourquoi la planification est essentielle.",
      },
      {
        q: "Faites-vous tous les types de planchers?",
        a: "La solution dépend du contexte (pièce, usage, humidité, entretien). Le choix est cadré avec vous lors du design et de la soumission, afin d'assurer une cohérence avec le reste du projet.",
      },
    ],
  },
  "agrandissement-de-maison": {
    type: "agrandissement-de-maison",
    metadata: {
      title: "Agrandissement de maison | Dilamco",
      description:
        "Agrandissement de maison clé en main : planification, coordination et exécution complète. Projets résidentiels réalisés à Montréal, Laval et sur la Rive-Sud.",
      canonical: `${SITE_URL}/services/renovation/agrandissement-de-maison/`,
    },
    hero: {
      h1: "Agrandissement de maison — planification, coordination et exécution complète",
      paragraphs: [
        "Un agrandissement de maison est un projet structurant : fondation, structure, enveloppe, puis aménagement intérieur. Dilamco réalise des projets d’agrandissement résidentiel complets, avec une coordination claire des étapes et un objectif simple : livrer un espace fonctionnel, durable et bien intégré à l’existant.",
      ],
      ctaLinks: [
        { label: "Demander une soumission", href: "/contact/" },
        {
          label: "Voir la rénovation clé en main",
          href: "/services/renovation/",
        },
      ],
    },
    sections: [
      {
        id: "pour-qui",
        title: "Quand un agrandissement de maison est pertinent",
        content: {
          type: "text",
          paragraphs: [
            "Un agrandissement de maison est envisagé lorsqu’un espace supplémentaire est nécessaire et que la configuration actuelle ne répond plus aux besoins. Ce type de projet vise une transformation durable, intégrée à la structure existante.",
          ],
          items: [
            "Vous manquez d’espace et souhaitez éviter un déménagement.",
            "Vous souhaitez ajouter une ou plusieurs pièces (chambre, bureau, salle familiale, etc.).",
            "Vous voulez agrandir une zone existante pour améliorer la circulation et la fonctionnalité.",
            "Votre maison permet structurellement une extension (latérale, arrière ou étage).",
          ],
        },
      },
      {
        id: "portee",
        title: "Un agrandissement est un projet global",
        content: {
          type: "text",
          paragraphs: [
            "Un agrandissement ne se limite pas à ajouter des mètres carrés. Il implique une intégration structurelle, architecturale et fonctionnelle avec le bâtiment existant. La réussite du projet dépend autant de la planification que de l’exécution.",
          ],
          items: [
            "Structure : fondations, charpente, ouvertures et jonctions avec l’existant.",
            "Enveloppe : murs, toiture, isolation et continuité thermique.",
            "Aménagement : circulation, niveaux, transitions et finitions.",
          ],
        },
      },
      {
        id: "inclus",
        title: "Ce qui est généralement inclus (selon le projet)",
        content: {
          type: "list",
          intro:
            "La portée exacte varie selon le type d’agrandissement. Les inclusions sont définies clairement lors de la soumission afin d’éviter toute ambiguïté.",
          items: [
            "Analyse du projet : besoins, contraintes, faisabilité et intégration à l’existant.",
            "Planification : séquence des travaux et coordination des intervenants.",
            "Exécution : structure, enveloppe et travaux requis selon la portée.",
            "Aménagement intérieur : coordination des finitions et intégration des espaces.",
            "Inspection et ajustements : vérification finale avant livraison.",
          ],
          links: [
            { label: "Rénovation clé en main", href: "/services/renovation/" },
            { label: "Design", href: "/services/design/" },
            { label: "Installation", href: "/services/installation/" },
          ],
        },
      },
      {
        id: "coordination",
        title: "Coordination & responsabilité",
        content: {
          type: "text",
          paragraphs: [
            "Un agrandissement implique plusieurs étapes critiques. Une coordination claire permet de réduire les retards, les conflits entre corps de métier et les reprises coûteuses.",
          ],
          items: [
            "Séquencement : ordre logique des travaux pour assurer la continuité.",
            "Responsabilité : un cadre clair sur les rôles et les livrables.",
            "Qualité finale : cohérence entre l’existant et la nouvelle construction.",
          ],
        },
      },
      {
        id: "integration",
        title: "Intégration à la maison existante",
        content: {
          type: "text",
          paragraphs: [
            "L’un des enjeux majeurs d’un agrandissement est l’intégration visuelle et fonctionnelle. L’objectif est que l’agrandissement fasse partie de la maison, et non qu’il apparaisse comme un ajout distinct.",
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
        title: "Projets d’agrandissement résidentiel",
        content: {
          type: "text",
          paragraphs: [
            "Consultez nos projets pour voir des exemples d’agrandissements intégrés à des maisons existantes, avec différents types de configurations et de portées.",
          ],
          links: [{ label: "Voir les projets", href: "/projets/" }],
        },
      },
      {
        id: "local",
        title: "Zones desservies",
        content: {
          type: "text",
          paragraphs: [
            "Nos projets d’agrandissement de maison sont réalisés principalement à Montréal, Laval et sur la Rive-Sud.",
          ],
          links: [
            { label: "Rénovation clé en main", href: "/services/renovation/" },
          ],
        },
      },
    ],
    faq: [
      {
        q: "Est-ce que Dilamco gère des agrandissements complets?",
        a: "Oui. Nous réalisons des agrandissements de maison complets, incluant la planification, la coordination et l’exécution selon la portée définie.",
      },
      {
        q: "Quels types d’agrandissement sont possibles?",
        a: "La faisabilité dépend de la maison existante, du terrain et des règlements municipaux. Ces éléments sont évalués en amont du projet.",
      },
      {
        q: "Est-ce un projet clé en main?",
        a: "Oui, lorsque le projet le requiert. La portée exacte et le niveau de coordination sont définis clairement lors de la soumission.",
      },
      {
        q: "Combien de temps dure un agrandissement?",
        a: "La durée varie selon la complexité, la superficie et les contraintes. Un échéancier est établi après l’analyse du projet.",
      },
      {
        q: "Est-ce possible en zone urbaine ou en condo?",
        a: "Chaque contexte est évalué individuellement. En milieu urbain, l’accès, les règlements et la logistique sont pris en compte dès la planification.",
      },
    ],
  },
};
