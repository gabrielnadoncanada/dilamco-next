import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const SALLE_DE_LAVAGE_PROJECT_PAGE: SpaceContent = {
  space: "salle-de-lavage",
  metadata: {
    title: "Projets de salles de lavage sur mesure",
    description:
      "Projets de salles de lavage sur mesure : rangements, comptoirs et aménagements réalisés. Exemples de solutions durables adaptées à l'humidité, au rangement et à l'optimisation d'espace à Montréal, Laval et Rive-Sud.",
    canonical: "https://dilamco.com/projets/salle-de-lavage/",
  },
  hero: {
    h1: "Projets de salles de lavage sur mesure, réalisations",
    intro:
      "Une salle de lavage est un espace très fonctionnel : humidité, produits ménagers, paniers, circulation, bruit et ventilation. Le sur mesure permet d'optimiser chaque zone (tri, pliage, rangement) et d'obtenir un aménagement durable. Cette page sert de preuve concrète : des exemples de projets de salles de lavage sur mesure réalisés, ou à documenter, pour illustrer des solutions cohérentes, robustes et bien exécutées.",
    ctaLinks: [
      {
        title: "Parler de votre projet de salle de lavage",
        href: "/contact/",
      },
      {
        title: "Voir la page Salle de lavage",
        href: "/espaces/salle-de-lavage/",
      },
    ],
  },
  sections: [
    {
      id: "regroupements",
      title: "Regroupements (pour vous situer rapidement)",
      intro:
        "Les salles de lavage se décident sur l'usage réel : rangement, zones de tri, circulation, humidité et entretien. Voici des catégories utiles :",
      content: {
        type: SECTION_TYPES.LIST,

        items: [
          "Petites salles de lavage (optimisation d'espace, rangement vertical)",
          "Salle de lavage + mudroom (manteaux, bottes, banc, zones de dépôt)",
          "Aménagements avec comptoir de pliage (fonction, hauteur, robustesse)",
          "Rangements fermés (produits, paniers, accessoires) et niches techniques",
          "Rénovations complètes (travaux techniques, séquencement, coordination)",
        ],
        links: [
          {
            title: "Étapes d'une rénovation (logique similaire)",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            title: "Erreurs fréquentes (principes applicables)",
            href: "/guides/erreurs-renovation-cuisine/",
          },
        ],
      },
    },

    {
      id: "format",
      title: "Format recommandé pour documenter un projet",
      intro:
        "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
      content: {
        type: SECTION_TYPES.LIST,

        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type de projet : aménagement seulement ou rénovation complète.",
          "Mandat : objectif principal (rangement, pliage, tri, circulation).",
          "Contraintes : humidité, ventilation, plomberie, accès, bruit, dimensions.",
          "Solution : zones (tri/pliage), modules, rangement, intégrations.",
          "Matériaux : choix adaptés à l'humidité et à l'entretien.",
          "Résultat : bénéfices concrets (fonction, rangement utile, entretien, durabilité).",
        ],
        links: [
          { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
          { title: "Couleurs & finis", href: "/materiaux/couleurs/" },
        ],
      },
    },

    {
      id: "contraintes",
      title: "Contraintes courantes en salle de lavage",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Humidité et fuites : zones exposées (laveuse, sécheuse, évier) → protection essentielle.",
          "Produits ménagers : rangement sécuritaire, accès rapide, surfaces faciles à nettoyer.",
          'Fonction : tri, pliage, dépôt, circulation (éviter les "goulots").',
          "Ventilation : impact sur la durabilité et les finis.",
          "Plomberie/électricité : sorties et dégagements pour appareils et accessoires.",
          "Finition : alignements et ajustements (portes/tiroirs très sollicités).",
        ],
      },
    },

    {
      id: "fonction",
      title: "Zones fonctionnelles à prévoir (ce qui change la vie)",
      intro:
        'Une bonne salle de lavage est organisée par zones. Le sur mesure permet de dimensionner chaque zone selon vos habitudes, au lieu de "faire rentrer" des modules standards.',
      content: {
        type: SECTION_TYPES.LIST,

        items: [
          "Zone tri : paniers, bacs, accès direct.",
          "Zone pliage : comptoir robuste à une hauteur confortable.",
          "Zone rangement : produits, serviettes, accessoires, aspirateur, etc.",
          "Zone dépôt : si mudroom (manteaux, sacs, chaussures, banc).",
        ],
      },
    },

    {
      id: "materiaux",
      title: "Matériaux & choix techniques (penser humidité + entretien)",
      intro:
        "Ici, le bon choix est celui qui résiste à l'usage réel : humidité, éclaboussures, nettoyage, et parfois des produits plus agressifs. La durabilité dépend aussi des chants, de l'assemblage, de la quincaillerie et de l'installation.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [
          { title: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          { title: "Mélamine", href: "/materiaux/melamine/" },
          { title: "MDF", href: "/materiaux/mdf/" },
          { title: "Contreplaqué", href: "/materiaux/contreplaque/" },
        ],
      },
    },

    {
      id: "installation",
      title: "Installation & quincaillerie (usage intensif)",
      intro:
        "Les portes et tiroirs d'une salle de lavage sont souvent très sollicités. Une quincaillerie adaptée et une installation précise évitent rapidement les jeux, frottements et désalignements.",
      content: {
        type: SECTION_TYPES.TEXT,

        links: [
          { title: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
          { title: "Voir l'installation", href: "/services/installation/" },
        ],
      },
    },

    {
      id: "renovation",
      title: "Aménagement seulement vs rénovation complète",
      intro:
        'Selon l\'état de la pièce, vous pouvez faire un projet "aménagement + installation" ou une rénovation complète (plomberie, ventilation, murs/plancher, éclairage). Dans ce cas, le séquencement et la coordination deviennent critiques.',
      content: {
        type: SECTION_TYPES.TEXT,

        links: [
          {
            title: "Voir la rénovation clé en main",
            href: "/services/renovation/",
          },
          {
            title: "Voir les étapes d'une rénovation",
            href: "/guides/etapes-renovation-cuisine/",
          },
        ],
      },
    },

    {
      id: "processus",
      title: "Processus (du besoin à l'installation)",
      content: {
        type: SECTION_TYPES.STEPS,
        steps: [
          "Cadrage : usages, zones (tri/pliage), contraintes techniques et circulation.",
          "Design : plan, modules, ergonomie, validation des sorties.",
          "Fabrication : production sur mesure selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
        ],
        links: [
          { title: "Design", href: "/services/design/" },
          { title: "Fabrication", href: "/services/fabrication/" },
          { title: "Installation", href: "/services/installation/" },
        ],
      },
    },

    {
      id: "faq",
      title: "FAQ, projets de salles de lavage",
      content: {
        type: SECTION_TYPES.FAQ,
        items: [
          {
            q: "Est-ce que le sur mesure vaut la peine dans une petite salle de lavage?",
            a: "Oui. C'est souvent là où le sur mesure apporte le plus : optimiser la hauteur, intégrer des zones de rangement, et améliorer la circulation.",
          },
          {
            q: "Peut-on ajouter un comptoir de pliage?",
            a: "Oui. L'important est de le dimensionner selon l'espace et de choisir des surfaces faciles à entretenir.",
          },
          {
            q: "Quels matériaux sont adaptés à l'humidité?",
            a: "La durabilité dépend de la protection, de l'assemblage, de la quincaillerie et de l'installation, autant que du matériau.",
          },
          {
            q: "Faites-vous l'installation?",
            a: "Oui. L'installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
          },
        ],
      },
    },
  ],
  footerLinks: [
    {
      title: "Salle de lavage sur mesure",
      href: "/espaces/salle-de-lavage/",
    },
    { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
    { title: "Couleurs & finis", href: "/materiaux/couleurs/" },
    { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
    { title: "Installation", href: "/services/installation/" },
    { title: "Contact", href: "/contact/" },
  ],
};
