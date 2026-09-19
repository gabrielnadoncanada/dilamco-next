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
          heading: "On dessine votre cuisine avant d'ouvrir un mur",
          description:
            "Mesures, plans, hauteurs et matériaux sont décidés et signés avant qu'on commande quoi que ce soit.",
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
          heading: "Comment se passe le design",
          steps: [
            {
              number: "1",
              title: "On mesure la pièce",
              description:
                "On relève les murs, les fenêtres et les sorties de plomberie et d'électricité.",
            },
            {
              number: "2",
              title: "On dessine les plans",
              description:
                "On place chaque armoire, chaque électroménager et chaque prise sur le plan.",
            },
            {
              number: "3",
              title: "On choisit avec vous",
              description:
                "Vous voyez les échantillons de matériaux, de couleurs et de poignées.",
            },
            {
              number: "4",
              title: "Vous signez",
              description:
                "Vous recevez les plans, le prix détaillé et les dates de chantier.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le design en bref",
          rows: [
            {
              label: "Ce que vous recevez",
              value:
                "Un plan de la pièce, les dessins de chaque mur, la liste des matériaux et le prix.",
            },
            {
              label: "Qui s'en occupe",
              value:
                "Un designer dessine, et l'entrepreneur général vérifie que c'est réalisable.",
            },
            {
              label: "Rencontres prévues",
              value:
                "Une visite pour mesurer, une autre pour vous présenter les plans.",
            },
            {
              label: "Frais de design",
              value:
                "Le design est crédité à votre projet si vous nous confiez les travaux.",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Plans et élévations d'une cuisine en cours de conception",
          },
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le design de cuisine",
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
          heading: "Commencer par les plans de votre projet",
          intro:
            "Décrivez-nous la pièce et la date qui vous convient, on vous rappelle.",
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
        },
      },
    },
  ],
};
