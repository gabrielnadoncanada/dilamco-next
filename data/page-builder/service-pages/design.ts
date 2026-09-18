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
            "Relevé sur place, implantation, hauteurs, matériaux. Tout est décidé et signé avant la mise en production.",
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
          imageSide: "left",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Quatre étapes de design",
          steps: [
            {
              number: "1",
              title: "Relevé",
              description:
                "Mesures réelles des murs, ouvertures, colonnes et sorties existantes.",
            },
            {
              number: "2",
              title: "Plan",
              description:
                "Implantation, élévations, position de chaque module et de chaque prise.",
            },
            {
              number: "3",
              title: "Choix",
              description:
                "Panneaux, quincaillerie, couleurs et finis arrêtés sur échantillon.",
            },
            {
              number: "4",
              title: "Validation",
              description:
                "Plans signés, soumission détaillée, échéancier inscrit au contrat.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "En bref",
          intro: "Ce que couvre l'étape de design, et ce qu'elle produit.",
          rows: [
            {
              label: "Délai",
              value: "Deux à quatre semaines du relevé aux plans signés",
            },
            {
              label: "Livrables",
              value: "Plan d'implantation, élévations, liste de matériaux, devis",
            },
            {
              label: "Qui fait quoi",
              value: "Le designer mène, l'entrepreneur général valide la faisabilité",
            },
            {
              label: "Sur place",
              value: "Une visite de relevé, une visite de présentation",
            },
            {
              label: "Garantie",
              value: "Les plans signés font foi pendant tout le chantier",
            },
            {
              label: "Coût",
              value: "Crédité au projet si les travaux nous sont confiés",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Plans et élévations d'une cuisine en cours de conception",
          },
          note: "Prix et quantités sont révisés si les plans changent après signature.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur l'étape de design",
          items: [
            {
              q: "Combien de temps prend le design ?",
              a: "Comptez deux à quatre semaines selon la taille de la pièce et le nombre d'allers-retours. Une vanité seule se règle souvent en une rencontre.",
            },
            {
              q: "Dois-je avoir choisi mes électroménagers ?",
              a: "Oui, au moins les modèles. Les dégagements, l'encastrement et les raccords se dessinent à partir de leurs fiches techniques, pas d'une estimation.",
            },
            {
              q: "Le design couvre-t-il l'éclairage ?",
              a: "Oui quand nous menons la rénovation complète. Circuits, encastrés et bandes sous armoires se placent sur le plan avant l'ouverture des murs.",
            },
            {
              q: "Peut-on modifier le plan après signature ?",
              a: "Oui, tant que la production n'est pas lancée. Ensuite, tout changement passe par un avenant écrit, avec son coût et son effet sur l'échéancier.",
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
          heading: "Commencer par les plans",
          intro:
            "Décrivez la pièce et votre échéance, on revient avec une première lecture.",
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
