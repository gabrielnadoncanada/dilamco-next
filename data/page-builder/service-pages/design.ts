import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Design de cuisine et d'armoires sur mesure",
    description:
      "Design d'armoires sur mesure : optimisation de l'espace, planification et choix des matériaux, intégré à votre rénovation par un entrepreneur général.",
    path: "/services/design",
    ogAlt: "Service de design Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Service de design", url: SITE.url + "/services/design" },
  ],
  service: {
    name: "Service de design",
    description:
      "Optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux.",
    url: SITE.url + "/services/design",
    serviceType: "Design",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Division armoires",
          heading: "On arrête les plans avant d'ouvrir un mur",
          description:
            "Relevé sur place, implantation, hauteurs, matériaux. Les décisions sont prises et validées avec vous avant la mise en production.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Relevé sur place", "Plans", "Matériaux"],
          image: {
            src: "/images/generated/services/service-design-hero-01.webp",
            alt: "Plan de cuisine sur mesure et échantillons de matériaux",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "rôle",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'on règle au design",
          description:
            "Un plan arrêté tôt coûte moins cher qu'un changement en cours de chantier. Quatre points se décident ici.",
          cards: [
            {
              title: "Implantation",
              description:
                "Circulation, zones de travail, dégagements devant chaque porte.",
            },
            {
              title: "Rangement",
              description:
                "Tiroirs plutôt que portes basses, hauteurs adaptées à vous.",
            },
            {
              title: "Plomberie et électricité",
              description:
                "Ce qui se déplace, ce qui reste, et ce que ça implique.",
            },
            {
              title: "Matériaux et finis",
              description:
                "Panneaux, quincaillerie et couleurs fixés avant la commande.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "includes",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce que vous recevez",
          intro:
            "Le design sert à exécuter, pas à rêver. Il devient la référence du contrat.",
          items: [
            {
              title: "Relevé de l'existant",
              description: "Mesures réelles, murs, ouvertures, contraintes.",
            },
            {
              title: "Plan d'implantation",
              description: "Élévations et positions de chaque module.",
            },
            {
              title: "Liste de matériaux",
              description: "Panneaux, quincaillerie, couleurs et finis retenus.",
            },
            {
              title: "Soumission détaillée",
              description: "Portée, exclusions, prix et échéancier écrits.",
            },
          ],
          actions: [
            {
              label: "Voir la fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
            {
              label: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Design sur mesure en cours de planification",
          },
          cardTitle: "Pourquoi c'est utile",
          cardDescription:
            "Plus les décisions sont prises tôt, moins le chantier réserve de surprises.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Le design est-il obligatoire ?",
              a: "En sur mesure, oui. Sans plan arrêté, les dimensions, l'intégration des électroménagers et les contraintes techniques se découvrent pendant la pose, quand tout changement coûte cher.",
            },
            {
              q: "Quand intervient le design ?",
              a: "Au tout début, avant la commande. Les plans validés avec vous servent ensuite de référence stable pour la production, la pose et le contrat.",
            },
            {
              q: "Est-ce que ça fonctionne en condo ?",
              a: "Oui. Le design y est même plus utile : accès par ascenseur, dimensions des pièces, règlements du syndicat et emplacement des colonnes se règlent sur papier.",
            },
            {
              q: "Pouvez-vous rénover la pièce au complet ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27. Le design couvre alors l'implantation, la plomberie, l'électricité, le plancher et l'éclairage, pas seulement les armoires.",
            },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Parlez-nous de votre projet",
          intro:
            "Votre espace, votre secteur, votre échéance. On revient vers vous avec un cadre réaliste.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Premier retour sous 24 à 48 heures ouvrables.",
        },
      },
    },
  ],
};
