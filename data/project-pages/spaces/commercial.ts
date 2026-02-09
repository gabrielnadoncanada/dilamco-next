import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const COMMERCIAL_PROJECT_PAGE: SpaceContent = {
  space: "commercial",
  metadata: {
    title: "Projets commerciaux",
    description:
      "Projets commerciaux sur mesure : exemples d'aménagements réalisés (bureaux, commerces, restauration). Conception, fabrication et installation avec un focus sur durabilité et exécution.",
    canonical: "https://dilamco.com/projets/commercial/",
  },
  hero: {
    h1: "Projets commerciaux, aménagements sur mesure réalisés",
    paragraphs: [
      "Les projets commerciaux imposent des contraintes spécifiques : usage intensif, durabilité, coordination avec d'autres intervenants, et parfois des échéanciers serrés. Lorsque des travaux connexes sont requis, notre approche de rénovation clé en main permet de cadrer, coordonner et livrer un résultat cohérent.",
    ],
    ctaLinks: [
      { title: "Parler de votre projet commercial", href: "/contact/" },
      {
        title: "Approche clé en main (coordination)",
        href: "/services/renovation/",
      },
      { title: "Voir l'espace Commercial", href: "/espaces/commercial/" },
    ],
  },
  sections: [
    {
      id: "types",
      title: "Types de projets commerciaux",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Bureaux et espaces corporatifs (rangements, zones communes, mobilier intégré)",
          "Commerces de détail (comptoirs, présentoirs, rangements, arriÃ¨re-boutique)",
          "Restauration (comptoirs, banquettes, rangements, zones de service)",
          "Espaces d'accueil (réception, vestiaires, rangements fonctionnels)",
        ],
      },
    },

    {
      id: "format",
      title: "Comment présenter un projet (format recommandé)",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Pour maximiser la crédibilité (et le SEO), chaque projet devrait être décrit avec la même structure, même si vous n'avez pas encore toutes les photos.",
        items: [
          "Type d'espace : bureau, commerce, restauration, etc.",
          "Mandat : ce qui devait être réalisé (objectif principal).",
          "Contraintes : délais, accÃ¨s, usage intensif, dimensions, intégrations.",
          "Solution : approche, modules, choix de matériaux, quincaillerie.",
          "Résultat : bénéfices concrets (fonction, durabilité, fluidité, finition).",
        ],
        links: [
          { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },

    {
      id: "contraintes",
      title: "Contraintes fréquentes en commercial",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Usage intensif : cycles d'ouverture élevés, charges importantes, entretien fréquent.",
          "Durabilité : choix cohérents (matériaux + quincaillerie + installation).",
          "Coordination : intégration avec travaux connexes (selon le chantier).",
          "Précision : alignements, ajustements, finitions propres (zone visible au public).",
        ],
        links: [
          { title: "Voir l'installation", href: "/services/installation/" },
          {
            title: "Voir la rénovation clé en main",
            href: "/services/renovation/",
          },
          { title: "Voir les services", href: "/services/" },
        ],
      },
    },

    {
      id: "processus",
      title: "Processus (du besoin Ã  l'installation)",
      content: {
        type: SECTION_TYPES.STEPS,
        steps: [
          "Cadrage : objectifs, usage, contraintes, échéance et contextes d'intégration.",
          "Design & planification : validation du plan et des points techniques.",
          "Fabrication : production sur mesure selon les décisions validées.",
          "Installation : pose, ajustements, finition et inspection.",
          "Validation : fonctionnement, stabilité, détails visibles et corrections au besoin.",
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
      title: "FAQ, projets commerciaux",
      content: {
        type: SECTION_TYPES.FAQ,
        items: [
          {
            q: "Travaillez-vous avec des designers ou des architectes?",
            a: "Oui, selon le projet. Nous pouvons collaborer sur les plans et valider les contraintes d'intégration avant fabrication et installation.",
          },
          {
            q: "Faites-vous l'installation?",
            a: "Oui. L'installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Pouvez-vous livrer dans un échéancier serré?",
            a: "Ã‡a dépend de la portée et de la disponibilité. Le meilleur levier est une planification claire et des décisions validées tÃ´t.",
          },
          {
            q: "Quels types de projets commerciaux réalisez-vous?",
            a: "Bureaux, commerces, restauration et autres aménagements sur mesure, selon le mandat et les contraintes.",
          },
        ],
      },
    },
  ],
  footerLinks: [
    { title: "Espace Commercial", href: "/espaces/commercial/" },
    { title: "Services", href: "/services/" },
    { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
    { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
    { title: "Contact", href: "/contact/" },
  ],
};
