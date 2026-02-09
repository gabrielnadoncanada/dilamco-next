import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const CUISINE_PROJECT_PAGE: SpaceContent = {
  space: "cuisine",
  metadata: {
    title: "Projets de cuisines sur mesure",
    description:
      "Projets de cuisines sur mesure : réalisations et exemples de configurations (condo, îlot, rangement optimisé, rénovation). Conception, fabrication et installation Ã  Montréal, Laval et Rive-Sud.",
    canonical: "https://dilamco.com/projets/cuisine/",
  },
  hero: {
    h1: "Projets de cuisines sur mesure, réalisations",
    paragraphs: [
      "Chaque cuisine est conÃ§ue selon l'espace réel (dimensions, circulation, lumiÃ¨re) et l'usage quotidien (rangement, zones de travail, intégrations). Cette page sert de preuve concrÃ¨te : des exemples de projets de cuisines sur mesure réalisés (ou Ã  documenter) pour illustrer des solutions cohérentes, durables et bien exécutées.",
    ],
    ctaLinks: [
      { title: "Parler de votre projet de cuisine", href: "/contact/" },
      { title: "Voir la page Cuisine sur mesure", href: "/espaces/cuisine/" },
    ],
  },
  sections: [
    {
      id: "regroupements",
      title: "Regroupements (pour vous situer rapidement)",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Les cuisines se ressemblent en photo, mais elles se décident sur des contraintes réelles. Voici des catégories utiles pour cadrer votre cas :",
        items: [
          "Cuisines de condo (accÃ¨s chantier, circulation serrée, intégrations)",
          "Cuisines familiales (usage intensif, durabilité, rangement)",
          "Cuisines avec îlot (préparation, repas, circulation, rangement)",
          "Rénovations complÃ¨tes (coordination, travaux techniques, séquence)",
          "Styles contemporains et intemporels (couleurs, finis, cohérence)",
        ],
        links: [
          {
            title: "Comment choisir une cuisine sur mesure",
            href: "/guides/comment-choisir-cuisine-sur-mesure/",
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
          "Type de projet : armoires seulement ou rénovation complÃ¨te.",
          "Mandat : objectif principal (rangement, îlot, intégrations).",
          "Contraintes : dimensions, circulation, accÃ¨s condo, plomberie/électricité.",
          "Solution : configuration, modules, logique de rangement.",
          "Matériaux : structure vs portes, finis, points d'attention.",
          "Résultat : bénéfices concrets (fonction, fluidité, durabilité, finition).",
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
      title: "Contraintes courantes en cuisine",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Circulation : dégagements, ouvertures, îlot dimensionné selon l'espace.",
          "Rangement : tiroirs vs portes, coins, hauteur, garde-manger.",
          "Intégrations : électroménagers, hotte/ventilation, prises, éclairage.",
          "Humidité : évier, lave-vaisselle, protection des chants.",
          "Finition : alignements, ajustements, détails visibles.",
        ],
      },
    },

    {
      id: "materiaux",
      title: "Matériaux & choix techniques (ce qui fait durer)",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Une cuisine durable est un systÃ¨me : structure, chants, quincaillerie et installation. Le matériau seul ne garantit pas la longévité, l'exécution et les ajustements sont déterminants.",
        ],
        links: [
          { title: "Comparer les matériaux", href: "/materiaux/comparatif/" },
          {
            title: "Comprendre la quincaillerie",
            href: "/materiaux/quincaillerie/",
          },
        ],
      },
    },

    {
      id: "renovation",
      title: "Armoires seulement vs rénovation complÃ¨te",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Certains projets se limitent aux armoires et Ã  l'installation. D'autres nécessitent une rénovation complÃ¨te (plomberie, électricité, murs, plancher, dosseret). Dans ce cas, la coordination et le séquencement deviennent critiques pour éviter reprises et délais.",
        ],
        links: [
          {
            title: "Voir la rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          {
            title: "Voir les étapes d'une rénovation",
            href: "/guides/etapes-renovation-cuisine/",
          },
          {
            title: "Voir les erreurs fréquentes",
            href: "/guides/erreurs-renovation-cuisine/",
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
          "Design : cadrer l'usage, valider le plan et les contraintes.",
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
      title: "FAQ, projets de cuisines",
      content: {
        type: SECTION_TYPES.FAQ,
        items: [
          {
            q: "Faites-vous des cuisines de condo?",
            a: "Oui. Le sur mesure est souvent particuliÃ¨rement pertinent en condo (contraintes d'espace, intégrations, accÃ¨s chantier).",
          },
          {
            q: "Est-ce que chaque projet est unique?",
            a: "Oui. Les dimensions, la circulation, la lumiÃ¨re, les contraintes techniques et l'usage déterminent la configuration.",
          },
          {
            q: "Faites-vous l'installation?",
            a: "Oui. L'installation et les ajustements font partie des éléments clés pour un résultat durable et cohérent.",
          },
          {
            q: "Peut-on voir des projets similaires au nÃ´tre?",
            a: "Oui, lorsque les projets sont documentés. Plus vous décrivez votre contexte, plus il est facile d'orienter vers des exemples pertinents.",
          },
        ],
      },
    },
  ],
  footerLinks: [
    { title: "Cuisine sur mesure", href: "/espaces/cuisine/" },
    {
      title: "Comment choisir une cuisine sur mesure",
      href: "/guides/comment-choisir-cuisine-sur-mesure/",
    },
    { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
    { title: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
    { title: "Contact", href: "/contact/" },
  ],
};
