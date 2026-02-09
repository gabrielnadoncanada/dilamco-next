import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const SALLE_DE_LAVAGE_PROJECT_PAGE: SpaceContent = {
  space: "salle-de-lavage",
  metadata: {
    title: "Projets de salles de lavage sur mesure",
    description:
      "Projets de salles de lavage sur mesure : rangements, comptoirs et aménagements réalisés. Exemples de solutions durables adaptées Ã  l'humidité, au rangement et Ã  l'optimisation d'espace Ã  Montréal, Laval et Rive-Sud.",
    canonical: "https://dilamco.com/projets/salle-de-lavage/",
  },
  hero: {
    h1: "Projets de salles de lavage sur mesure, réalisations",
    paragraphs: [
      "Une salle de lavage est un espace trÃ¨s fonctionnel : humidité, produits ménagers, paniers, circulation, bruit et ventilation. Le sur mesure permet d'optimiser chaque zone (tri, pliage, rangement) et d'obtenir un aménagement durable. Cette page sert de preuve concrÃ¨te : des exemples de projets de salles de lavage sur mesure réalisés, ou Ã  documenter, pour illustrer des solutions cohérentes, robustes et bien exécutées.",
    ],
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
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Les salles de lavage se décident sur l'usage réel : rangement, zones de tri, circulation, humidité et entretien. Voici des catégories utiles :",
        items: [
          "Petites salles de lavage (optimisation d'espace, rangement vertical)",
          "Salle de lavage + mudroom (manteaux, bottes, banc, zones de dépÃ´t)",
          "Aménagements avec comptoir de pliage (fonction, hauteur, robustesse)",
          "Rangements fermés (produits, paniers, accessoires) et niches techniques",
          "Rénovations complÃ¨tes (travaux techniques, séquencement, coordination)",
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
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait suivre la même structure. Même un format texte simple apporte de la valeur.",
        items: [
          "Ville / secteur : Montréal, Laval ou Rive-Sud.",
          "Type de projet : aménagement seulement ou rénovation complÃ¨te.",
          "Mandat : objectif principal (rangement, pliage, tri, circulation).",
          "Contraintes : humidité, ventilation, plomberie, accÃ¨s, bruit, dimensions.",
          "Solution : zones (tri/pliage), modules, rangement, intégrations.",
          "Matériaux : choix adaptés Ã  l'humidité et Ã  l'entretien.",
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
          "Humidité et fuites : zones exposées (laveuse, sécheuse, évier) â†’ protection essentielle.",
          "Produits ménagers : rangement sécuritaire, accÃ¨s rapide, surfaces faciles Ã  nettoyer.",
          "Fonction : tri, pliage, dépÃ´t, circulation (éviter les â€œgoulotsâ€).",
          "Ventilation : impact sur la durabilité et les finis.",
          "Plomberie/électricité : sorties et dégagements pour appareils et accessoires.",
          "Finition : alignements et ajustements (portes/tiroirs trÃ¨s sollicités).",
        ],
      },
    },

    {
      id: "fonction",
      title: "Zones fonctionnelles Ã  prévoir (ce qui change la vie)",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Une bonne salle de lavage est organisée par zones. Le sur mesure permet de dimensionner chaque zone selon vos habitudes, au lieu de â€œfaire rentrerâ€ des modules standards.",
        items: [
          "Zone tri : paniers, bacs, accÃ¨s direct.",
          "Zone pliage : comptoir robuste Ã  une hauteur confortable.",
          "Zone rangement : produits, serviettes, accessoires, aspirateur, etc.",
          "Zone dépÃ´t : si mudroom (manteaux, sacs, chaussures, banc).",
        ],
      },
    },

    {
      id: "materiaux",
      title: "Matériaux & choix techniques (penser humidité + entretien)",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Ici, le bon choix est celui qui résiste Ã  l'usage réel : humidité, éclaboussures, nettoyage, et parfois des produits plus agressifs. La durabilité dépend aussi des chants, de l'assemblage, de la quincaillerie et de l'installation.",
        ],
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
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Les portes et tiroirs d'une salle de lavage sont souvent trÃ¨s sollicités. Une quincaillerie adaptée et une installation précise évitent rapidement les jeux, frottements et désalignements.",
        ],
        links: [
          { title: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
          { title: "Voir l'installation", href: "/services/installation/" },
        ],
      },
    },

    {
      id: "renovation",
      title: "Aménagement seulement vs rénovation complÃ¨te",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Selon l'état de la piÃ¨ce, vous pouvez faire un projet â€œaménagement + installationâ€ ou une rénovation complÃ¨te (plomberie, ventilation, murs/plancher, éclairage). Dans ce cas, le séquencement et la coordination deviennent critiques.",
        ],
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
      title: "Processus (du besoin Ã  l'installation)",
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
            a: "Oui. C'est souvent lÃ  oÃ¹ le sur mesure apporte le plus : optimiser la hauteur, intégrer des zones de rangement, et améliorer la circulation.",
          },
          {
            q: "Peut-on ajouter un comptoir de pliage?",
            a: "Oui. L'important est de le dimensionner selon l'espace et de choisir des surfaces faciles Ã  entretenir.",
          },
          {
            q: "Quels matériaux sont adaptés Ã  l'humidité?",
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
