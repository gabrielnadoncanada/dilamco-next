import { SITE_URL } from "@/constants/site";
import type { RenovationSubServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const SALLE_DE_BAIN_RENOVATION_PAGE: RenovationSubServiceData = {
  type: "salle-de-bain",
  metadata: {
    title: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain clé en main : design, coordination, vanités sur mesure et finition durable. Approche orientée humidité, exécution et tranquillité d'esprit à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/renovation/salle-de-bain/`,
  },
  hero: {
    h1: "Rénovation de salle de bain clé en main, durabilité, coordination et finition",
    intro:
      "Une rénovation de salle de bain est un projet sensible : humidité, plomberie, ventilation et risques de dégâts d'eau. Dilamco propose une approche clé en main lorsque le projet le requiert : design orienté usage, vanités sur mesure, installation précise et coordination des étapes connexes, principalement à Montréal, Laval et sur la Rive-Sud.",
    ctaLinks: [
      { title: "Demander une soumission", href: "/contact/" },
      {
        title: "Voir des projets de salles de bain",
        href: "/projets/salle-de-bain/",
      },
    ],
  },
  sections: [
    {
      id: "pour-qui",
      title: "À qui s'adresse une rénovation clé en main?",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Si votre objectif est uniquement décoratif ou temporaire, la rénovation clé en main n'est peut-être pas l'option la plus pertinente. L'objectif ici est la durabilité, la cohérence et la tranquillité d'esprit.",
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
        type: SECTION_TYPES.LIST,
        intro:
          "Les inclusions exactes varient selon la portée (partielle ou complète). Elles sont confirmées lors de la soumission, pour éviter toute ambiguïté.",
        items: [
          "Design & planification : organisation de l'espace, ergonomie, décisions clés.",
          "Vanités et rangement sur mesure : conception adaptée à l'usage et à l'humidité.",
          "Installation : alignements, ajustements sur place et finition soignée.",
          "Coordination : séquencement et coordination des travaux connexes au besoin.",
        ],
        links: [
          { title: "Design", href: "/services/design/" },
          { title: "Fabrication", href: "/services/fabrication/" },
          { title: "Installation", href: "/services/installation/" },
          { title: "Vanités sur mesure", href: "/espaces/salle-de-bain/" },
        ],
      },
    },
    {
      id: "variable",
      title: "Transparence (ce qui varie)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Une rénovation de salle de bain peut inclure plusieurs travaux connexes. Selon le mandat, certains éléments peuvent être inclus, coordonnés ou réalisés par d'autres intervenants. L'objectif est de cadrer le plan avant de démarrer.",
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
        type: SECTION_TYPES.TEXT,
        intro:
          "En salle de bain, les erreurs se paient cher. Le design sert à intégrer l'existant (plomberie, drains, dégagements) et à prendre les décisions avant la démolition, afin de limiter les imprévus et les compromis.",
        items: [
          "Ergonomie : circulation, accès, hauteur de vanité, rangement.",
          "Contraintes : plomberie/ventilation (intégration), dimensions et dégagements.",
          "Prévisibilité : séquence claire des étapes et décisions validées tôt.",
        ],
        links: [
          { title: "Voir le service de design", href: "/services/design/" },
        ],
      },
    },
    {
      id: "humidite",
      title: "Humidité, eau & durabilité (priorités)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Une salle de bain est un environnement exigeant : éclaboussures, vapeur, nettoyage fréquent. La durabilité dépend des matériaux, mais surtout des détails : chants, quincaillerie et qualité d'installation.",
        items: [
          "Matériaux adaptés : choix cohérents avec l'usage et l'humidité.",
          "Protection des chants : limiter l'infiltration d'eau et l'usure.",
          "Quincaillerie : usage répété, fiabilité et ajustements dans le temps.",
          "Ventilation : planifiée au besoin pour réduire les risques à long terme.",
        ],
        links: [
          { title: "Voir les matériaux", href: "/materiaux/" },
          {
            title: "Comparatif des matériaux",
            href: "/materiaux/comparatif/",
          },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },
    {
      id: "coordination",
      title: "Coordination & exécution",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Une rénovation clé en main vise un résultat final cohérent. Cela implique une coordination claire : séquence des étapes, phasage, et communication sur les points critiques (accès, interruptions, contraintes).",
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
        type: SECTION_TYPES.TEXT,
        intro:
          "Consultez nos projets pour voir des exemples de vanités sur mesure, de configurations, et de niveaux de finition obtenus dans des environnements humides.",
        links: [
          {
            title: "Voir les projets de salles de bain",
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
};
