import { SITE_URL } from "@/constants/site";
import type { RenovationSubServiceData } from "@/types/service-pages";
import { SECTION_TYPES } from "@/constants/section-types";

export const PLANCHER_RENOVATION_PAGE: RenovationSubServiceData = {
  type: "plancher",
  metadata: {
    title: "Rénovation de plancher",
    description:
      "Rénovation de plancher : planification, coordination et finition soignée. Intégration du plancher dans un projet de rénovation (cuisine, salle de bain) à Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/renovation/plancher/`,
  },
  hero: {
    h1: "Rénovation de plancher, coordination, niveaux et finition",
    intro:
      "En rénovation, le plancher influence tout : niveaux, transitions, alignements et finition. Dilamco intervient lorsque le plancher doit être intégré à un projet plus large (cuisine, salle de bain ou rénovation clé en main) avec une séquence de travaux claire et une exécution soignée.",
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
      title: "Quand une rénovation de plancher est pertinente",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Un plancher n'est pas seulement un choix esthétique : en rénovation, il détermine les niveaux, les transitions et une partie de la qualité perçue. Une rénovation de plancher devient particulièrement pertinente lorsqu'elle est liée à une cuisine, une salle de bain ou un réaménagement.",
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
        type: SECTION_TYPES.TEXT,
        intro:
          "Le point critique, ce n'est pas seulement le matériau : c'est l'ordre des étapes. Un plancher mal séquencé peut créer des reprises, des écarts de niveau, des transitions visibles ou des ajustements complexes lors de l'installation des armoires.",
        items: [
          "Niveaux : impact direct sur l'alignement des armoires et des électroménagers.",
          "Transitions : jonctions entre pièces, seuils et finitions périmétriques.",
          "Séquence : éviter de poser trop tôt ou trop tard, selon la portée du chantier.",
        ],
        links: [
          { title: "Installation", href: "/services/installation/" },
          {
            title: "Rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          {
            title: "Rénovation salle de bain",
            href: "/services/renovation/salle-de-bain/",
          },
        ],
      },
    },
    {
      id: "inclus",
      title: "Ce qui est inclus (selon le projet)",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "La portée exacte dépend de votre projet (plancher seul vs rénovation plus large). Les inclusions sont confirmées lors de la soumission.",
        items: [
          "Évaluation de l'existant : niveaux, état, contraintes et transitions.",
          "Planification : séquence des étapes et coordination avec les autres travaux.",
          "Coordination : gestion des intervenants au besoin (travaux connexes).",
          "Exécution & finition : installation, ajustements et inspection finale.",
        ],
        links: [
          { title: "Rénovation clé en main", href: "/services/renovation/" },
        ],
      },
    },
    {
      id: "projets",
      title: "Projets où le plancher fait partie du résultat final",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Le plancher influence la cohérence du projet, surtout en cuisine et en salle de bain. Consultez nos projets pour voir des exemples de rénovation où les niveaux, transitions et finitions ont été intégrés à la planification globale.",
        links: [{ title: "Voir les projets", href: "/projets/" }],
      },
    },
    {
      id: "local",
      title: "Zones desservies",
      content: {
        type: SECTION_TYPES.TEXT,
        intro:
          "Nos projets de rénovation intégrant le plancher sont réalisés principalement à Montréal, Laval et sur la Rive-Sud.",
        links: [
          { title: "Rénovation clé en main", href: "/services/renovation/" },
          {
            title: "Rénovation de cuisine",
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
};
