import type { SpaceContent } from "@/types/spaces";
import { SECTION_TYPES } from "@/constants/section-types";

export const WALK_IN_PROJECT_PAGE: SpaceContent = {
  space: "walk-in",
  metadata: {
    title: "Projets de walk-in sur mesure",
    description:
      "Projets de walk-in sur mesure : aménagements de garde-robes et rangements réalisés. Exemples de solutions optimisées (sections, tiroirs, accessoires) conçues pour la fonctionnalité et la durabilité à Montréal, Laval et Rive-Sud.",
    canonical: "https://dilamco.com/projets/walk-in/",
  },
  hero: {
    h1: "Projets de walk-in sur mesure, réalisations",
    paragraphs: [
      "Un walk-in réussi, c'est d'abord de la fonction : zones de suspendus, tiroirs, tablettes, accessoires, circulation et accès. Le sur mesure permet d'exploiter chaque mur et chaque hauteur, même dans des espaces irréguliers. Cette page sert de preuve concrète : des exemples de projets de walk-in sur mesure réalisés, ou à documenter, pour illustrer des solutions durables, bien organisées et bien exécutées.",
    ],
    ctaLinks: [
      { title: "Parler de votre projet de walk-in", href: "/contact/" },
      {
        title: "Voir la page Walk-in & rangement",
        href: "/espaces/walk-in/",
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
          "Les walk-in se décident sur vos habitudes : quantité de suspendus, tiroirs, accessoires, saisonnier, et circulation. Voici des catégories utiles :",
        items: [
          "Walk-in en L / en U (optimisation des murs, circulation centrale)",
          "Walk-in en couloir (profondeur, dégagements, accès rapide)",
          "Walk-in partagé (deux personnes : zones distinctes, organisation)",
          "Walk-in avec îlot / module central (tiroirs, pliage, accessoires)",
          "Rangements intégrés (valises, linge, chaussures, accessoires)",
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
          "Type d'espace : walk-in fermé, garde-robe, pièce dédiée, couloir.",
          "Mandat : objectif (plus de rangement, organisation, accès, esthétique).",
          "Contraintes : dimensions, angles, portes/fenêtres, circulation, éclairage.",
          "Solution : zones (suspendus/tiroirs/tablettes), modules, accessoires.",
          "Finition : couleurs/fini, cohérence avec l'espace, entretien.",
          "Résultat : bénéfices (rangement utile, accès, organisation, durabilité).",
        ],
        links: [
          { title: "Couleurs & finis", href: "/materiaux/couleurs/" },
          { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        ],
      },
    },

    {
      id: "contraintes",
      title: "Contraintes courantes (et ce qui change tout)",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Habitudes : suspendus longs vs courts, pliage, accessoires, chaussures.",
          "Circulation : dégagements, ouverture des tiroirs, portes, passages.",
          "Hauteur : exploiter le vertical sans perdre l'accès (zones saisonnières).",
          "Éclairage : zones sombres, profondeur, éclairage intégré si nécessaire.",
          'Organisation : chaque chose à sa place (sinon le walk-in "redevient un placard").',
        ],
      },
    },

    {
      id: "zones",
      title: "Zones fonctionnelles à prévoir",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Un walk-in performant est organisé par zones. Le sur mesure permet de dimensionner chaque zone selon votre réalité, au lieu d'adapter vos habitudes aux modules standards.",
        items: [
          "Suspendus : longs (robes/manteaux) et courts (chemises/vestons) séparés.",
          "Tiroirs : sous-vêtements, accessoires, bijoux, ceintures, etc.",
          "Tablettes : pliage, paniers, sacs, linge.",
          "Chaussures : sections dédiées, accès visuel rapide.",
          "Saisonnier : valises, boîtes, hors-saison en hauteur.",
        ],
      },
    },

    {
      id: "accessoires",
      title: "Accessoires et détails utiles",
      content: {
        type: SECTION_TYPES.LIST,
        intro:
          "Les détails font souvent la différence : accessibilité, organisation et confort au quotidien. L'objectif est de réduire le \"fouillis\" et d'améliorer l'accès.",
        items: [
          "Paniers, séparateurs, modules pour accessoires.",
          "Rangements dédiés (cravates, ceintures, bijoux, sacs).",
          "Miroir, banc, zone de dépôt (selon l'espace).",
          "Éclairage plus ciblé sur les zones profondes.",
        ],
      },
    },

    {
      id: "materiaux",
      title: "Matériaux, quincaillerie & durabilité",
      content: {
        type: SECTION_TYPES.TEXT,
        intro: 
          "Un walk-in est un espace de cycles : tiroirs et portes sont sollicités quotidiennement. Une quincaillerie adaptée et une installation précise évitent les désalignements et l'usure prématurée.",
        links: [
          { title: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
          { title: "Voir l'installation", href: "/services/installation/" },
        ],
      },
    },

    {
      id: "processus",
      title: "Processus (du besoin à l'installation)",
      content: {
        type: SECTION_TYPES.STEPS,
        steps: [
          "Cadrage : habitudes, volumes à ranger, zones nécessaires, contraintes.",
          "Design : plan, modules, circulation, détails (tiroirs/accessoires).",
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
      title: "FAQ, projets de walk-in",
      content: {
        type: SECTION_TYPES.FAQ,
        items: [
          {
            q: "Le sur mesure vaut-il la peine dans un petit walk-in?",
            a: "Oui. Le sur mesure est souvent le plus rentable dans les petits espaces : optimisation de la hauteur, zones adaptées et meilleure circulation.",
          },
          {
            q: "Peut-on faire un walk-in pour deux personnes?",
            a: "Oui. On recommande souvent de prévoir des zones distinctes pour éviter le désordre et simplifier l'organisation.",
          },
          {
            q: "Est-ce que vous faites l'installation?",
            a: "Oui. L'installation et les ajustements sont essentiels pour un résultat durable et une finition propre.",
          },
          {
            q: "Peut-on intégrer un module central?",
            a: "Oui, si l'espace le permet (circulation). Un module central peut ajouter du rangement et une zone pratique.",
          },
        ],
      },
    },
  ],
  footerLinks: [
    { title: "Walk-in & rangement", href: "/espaces/walk-in/" },
    { title: "Couleurs & finis", href: "/materiaux/couleurs/" },
    { title: "Quincaillerie", href: "/materiaux/quincaillerie/" },
    { title: "Installation", href: "/services/installation/" },
    { title: "Contact", href: "/contact/" },
  ],
};
