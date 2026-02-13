import { SITE_URL } from "@/constants/site";
import type { RenovationSubServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const CUISINE_RENOVATION_PAGE: RenovationSubServiceData = {
  type: "cuisine",
  metadata: {
    title: "Rénovation de cuisine",
    description:
      "Rénovation de cuisine clé en main : design, coordination, fabrication et installation d'armoires sur mesure. Un seul partenaire, du plan à la finition, à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/renovation/cuisine/`,
  },
  hero: {
    h1: "Rénovation de cuisine clé en main, un seul partenaire, du plan à la finition",
    intro:
      "Une rénovation de cuisine réussie dépend autant de la coordination que du résultat final. Dilamco propose une approche clé en main lorsque le projet le requiert : design orienté usage, fabrication sur mesure, installation précise et coordination des étapes connexes, principalement à Montréal, Laval et sur la Rive-Sud.",
    ctaLinks: [
      { title: "Demander une soumission", href: "/contact/" },
      { title: "Voir des projets de cuisines", href: "/projets/cuisine/" },
    ],
  },
  sections: [
    {
      id: "pour-qui",
      title: "À qui s'adresse une rénovation clé en main?",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Si vous préférez gérer vous-même les corps de métier, la rénovation clé en main n'est peut-être pas l'option la plus pertinente. L'objectif ici est la tranquillité d'esprit et un résultat final bien exécuté.",
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
        type: SECTION_TYPES.LIST,
        intro:
          "Chaque rénovation est cadrée selon vos besoins et la réalité du lieu. Les inclusions exactes sont confirmées lors de la soumission.",
        items: [
          "Design & planification : organisation de l'espace, ergonomie, plan et décisions clés.",
          "Fabrication sur mesure : armoires, îlot, rangement optimisé selon l'espace.",
          "Installation : alignements, ajustements sur place et finition soignée.",
          "Coordination : séquencement des étapes et coordination des travaux connexes au besoin.",
        ],
        links: [
          { title: "Design", href: "/services/design/" },
          { title: "Fabrication", href: "/services/fabrication/" },
          { title: "Installation", href: "/services/installation/" },
        ],
      },
    },
    {
      id: "transparence",
      title: "Transparence (ce qui varie)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Une rénovation peut inclure plusieurs travaux connexes. Selon le mandat, certains éléments peuvent être inclus, coordonnés ou réalisés par d'autres intervenants. L'objectif est d'éviter les zones grises et de cadrer le plan avant le début des travaux.",
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
        type: SECTION_TYPES.TEXT,
        intro:
          "En rénovation, l'existant impose des contraintes : murs irréguliers, plomberie, ventilation, accès et intégration des équipements. Le design sert à prendre les décisions tôt, avant la production et l'installation, pour éviter des compromis visibles à la fin.",
        items: [
          "Organisation : zones de travail, circulation, rangement et intégration.",
          "Contraintes : plomberie/électricité (intégration), dimensions, dégagements.",
          "Prévisibilité : séquence claire des étapes et décisions validées avant exécution.",
        ],
        links: [
          { title: "Voir le service de design", href: "/services/design/" },
        ],
      },
    },
    {
      id: "coordination",
      title: "Coordination & exécution",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Une rénovation clé en main vise un résultat final cohérent. Cela implique une coordination claire : séquence des étapes, phasage, et communication sur les points critiques (accès, interruptions, délais).",
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
        type: SECTION_TYPES.TEXT,
        intro:
          "Le choix des matériaux influence la durabilité, mais la qualité finale dépend aussi des chants, de la quincaillerie et de l'installation. Nous orientons les choix selon l'usage et l'entretien attendu.",
        links: [
          { title: "Voir les matériaux", href: "/materiaux/" },
          {
            title: "Comparatif des matériaux",
            href: "/materiaux/comparatif/",
          },
        ],
      },
    },
    {
      id: "projets",
      title: "Projets de rénovation de cuisine",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Consultez nos projets pour voir des exemples de configurations, de niveaux de finition et de résultats obtenus sur différents types d'espaces.",
        links: [
          {
            title: "Voir les projets de cuisines",
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
};
