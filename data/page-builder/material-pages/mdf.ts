import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en MDF : finition, durabilité et usages",
    description:
      "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure.",
    path: "/materiaux/mdf",
    ogAlt: "MDF - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Matériaux",
          heading: "Le MDF, la surface la plus régulière pour peindre",
          description:
            "Des fibres de bois compressées, sans fil ni nœud. C'est le support des portes peintes uniformes, à condition de protéger les chants.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          badges: ["Peinture", "Portes", "Uniformité"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Échantillons et surface peinte uniforme",
          },
          caption: "Portes peintes et façades lisses",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le MDF fait bien",
          description:
            "Sa densité est la même partout. La peinture s'accroche de façon régulière et la surface ne trahit aucun veinage.",
          cards: [
            {
              title: "Surface sans fil",
              description:
                "Aucun grain ne remonte sous la peinture après séchage.",
            },
            {
              title: "Usinage net",
              description:
                "Moulures et panneaux à recouvrement se taillent sans éclats.",
            },
            {
              title: "Couleur sur mesure",
              description:
                "N'importe quelle teinte, en mat, satiné ou brillant.",
            },
            {
              title: "Sensible à l'eau",
              description:
                "Un chant ouvert absorbe l'humidité et gonfle sans retour possible.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Où on l'utilise, où on l'évite",
          intro:
            "Le MDF va sur les façades. La structure et les zones mouillées passent à d'autres panneaux.",
          items: [
            {
              title: "Portes et façades peintes",
              description: "Son terrain le plus solide.",
            },
            {
              title: "Chants scellés",
              description: "Peinture, placage ou chant collé, jamais laissés nus.",
            },
            {
              title: "Sous évier et lavabo",
              description: "Contreplaqué ou MDF hydrofuge à la place.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Comparer avec la mélamine",
              href: "/materiaux/melamine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Finition peinte uniforme sur panneau MDF",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "MDF pour les portes peintes, contreplaqué pour les caissons qui portent.",
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
              q: "Le MDF est-il bas de gamme ?",
              a: "Non. C'est un panneau technique, choisi pour sa surface. Une porte MDF bien peinte, aux chants fermés, se retrouve dans des cuisines haut de gamme partout.",
            },
            {
              q: "Le MDF gonfle-t-il avec l'humidité ?",
              a: "Il gonfle si l'eau atteint une fibre nue, surtout par un chant ouvert. Un fini continu et une ventilation correcte suffisent dans la plupart des pièces.",
            },
            {
              q: "MDF ou mélamine ?",
              a: "Le MDF quand vous voulez une couleur peinte précise. La mélamine quand vous voulez un décor déjà fini, sans étape de peinture, à coût plus bas.",
            },
            {
              q: "Le MDF convient-il à une vanité ?",
              a: "Pour les portes, oui. Pour le caisson sous le lavabo, nous passons au contreplaqué ou à un MDF hydrofuge, à cause des fuites et de la vapeur.",
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
          heading: "MDF ou autre chose pour vos portes ?",
          intro:
            "On tranche avec vous selon le fini visé, la pièce et l'usage réel.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
