import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const SALLE_DE_BAIN_PROJECT_PAGE: SpaceContent = {
  space: "salle-de-bain",
  metadata: {
    title: "Projets de salles de bain sur mesure",
    description:
      "Projets de salles de bain sur mesure : vanités, rangements et aménagements réalisés. Exemples de solutions adaptées à l'humidité, à l'entretien et aux contraintes d'espace à Montréal, Laval et Rive-Sud.",
    canonical: "https://dilamco.com/projets/salle-de-bain/",
  },
  hero: {
    h1: "Projets de salles de bain sur mesure, réalisations",
    intro:
      "Une salle de bain impose des contraintes spécifiques : humidité, ventilation, nettoyage fréquent, et parfois peu d'espace. Cette page sert de preuve concrète : des exemples de projets de salles de bain sur mesure (vanités et rangements) réalisés, ou à documenter, pour illustrer des solutions cohérentes, durables et bien exécutées.",
    ctaLinks: [
      { title: "Parler de votre projet de salle de bain", href: "/contact/" },
      {
        title: "Voir la page Salle de bain & vanités",
        href: "/espaces/salle-de-bain/",
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
          "Les salles de bain se ressemblent en photo, mais elles se décident sur des contraintes réelles : humidité, entretien, rangement et circulation. Voici des catégories utiles :",
        items: [
          "Petites salles de bain (optimisation d'espace, circulation, rangement vertical)",
          "Vanités doubles (usage quotidien, organisation, dégagements)",
          "Salles de bain principales (durabilité, finition, cohérence globale)",
          "Rénovations complètes (coordination, travaux techniques, séquence)",
          "Styles contemporains et intemporels (couleurs, finis, cohérence)",
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
          "Type de projet : vanité/rangements seulement ou rénovation complète.",
          "Mandat : objectif principal (rangement, double lavabo, optimisation, style).",
          "Contraintes : humidité/ventilation, dimensions, plomberie, accès chantier.",
          "Solution : configuration, modules, logique de rangement, ergonomie.",
          "Matériaux : choix adaptés à l'humidité + points d'attention.",
          "Résultat : bénéfices concrets (entretien, durabilité, finition, usage).",
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
      title: "Contraintes courantes en salle de bain",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Humidité : éclaboussures, vapeur, variations de température (protection essentielle).",
          "Ventilation : impact direct sur la durabilité (et sur les finis à choisir).",
          "Entretien : traces d'eau, produits de nettoyage, usage quotidien.",
          "Plomberie : position des sorties, siphon, dégagements dans les caissons.",
          "Rangement : optimiser sans bloquer la circulation (petits espaces).",
          "Finition : alignements, ajustements, détails visibles à hauteur d'œil.",
        ],
      },
    },

    {
      id: "materiaux",
      title: "Matériaux & choix techniques (penser humidité)",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "En salle de bain, la durabilité dépend beaucoup de la protection (chants, zones exposées), de la qualité d'assemblage et de l'installation. On privilégie des choix cohérents avec l'humidité et l'entretien, plutôt que de décider \"au look\".",
        links: [
          { title: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          { title: "MDF", href: "/materiaux/mdf/" },
          { title: "Mélamine", href: "/materiaux/melamine/" },
          { title: "Contreplaqué", href: "/materiaux/contreplaque/" },
        ],
      },
    },

    {
      id: "installation",
      title: 'Installation & ajustements (ce qui "fait haut de gamme")',
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "En salle de bain, les alignements et les ajustements sont très visibles. La précision de l'installation et la quincaillerie influencent directement le confort et la longévité.",
        links: [
          { title: "Voir l'installation", href: "/services/installation/" },
          { title: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },

    {
      id: "renovation",
      title: "Vanité seulement vs rénovation complète",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Certains projets consistent à remplacer la vanité et optimiser le rangement. D'autres nécessitent une rénovation complète (plomberie, ventilation, murs, céramique, éclairage). Dans ce cas, la coordination et le séquencement deviennent critiques.",
        links: [
          {
            title: "Voir la rénovation de salle de bain",
            href: "/services/renovation/salle-de-bain/",
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
          "Design : cadrer l'usage, valider la plomberie, l'ergonomie et les dimensions.",
          "Fabrication : produire selon les décisions validées.",
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
      title: "FAQ, projets de salles de bain",
      content: {
        type: SECTION_TYPES.FAQ,
        items: [
          {
            q: "Est-ce que le sur mesure est utile dans une petite salle de bain?",
            a: "Oui. C'est souvent là où le sur mesure apporte le plus : optimisation d'espace, rangement utile, dégagements et circulation.",
          },
          {
            q: "Quels matériaux sont les plus adaptés à l'humidité?",
            a: "La durabilité dépend de la protection, de l'assemblage, de la quincaillerie et de l'installation, autant que du matériau.",
          },
          {
            q: "Faites-vous l'installation?",
            a: "Oui. L'installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Peut-on faire seulement la vanité sans rénover toute la pièce?",
            a: 'Oui, selon le contexte. Si la plomberie, la ventilation et les murs sont en bon état, un projet "vanité + rangement" peut être pertinent.',
          },
        ],
      },
    },
  ],
  footerLinks: [
    {
      title: "Salle de bain & vanités sur mesure",
      href: "/espaces/salle-de-bain/",
    },
    { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
    { title: "Couleurs & finis", href: "/materiaux/couleurs/" },
    { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
    { title: "Installation", href: "/services/installation/" },
    { title: "Contact", href: "/contact/" },
  ],
};
