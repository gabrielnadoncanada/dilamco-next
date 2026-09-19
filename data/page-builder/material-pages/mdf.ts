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
          heading: "Pourquoi nos portes peintes sont en MDF",
          description:
            "C'est le panneau le plus lisse, sans nœud ni veinage, donc la peinture est parfaitement unie.",
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
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Panneau MDF avec finition peinte uniforme",
          },
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Ce qu'il faut savoir sur le MDF",
          rows: [
            {
              label: "De quoi c'est fait",
              value:
                "De fibres de bois mélangées à une résine, puis pressées en panneau bien dense.",
            },
            {
              label: "Résiste à l'humidité ?",
              value:
                "C'est son point faible : un bord laissé nu gonfle et ne redevient jamais droit.",
            },
            {
              label: "Entretien",
              value:
                "Un linge à peine humide et un savon doux, sans laisser d'eau sur les joints.",
            },
            {
              label: "Usage recommandé",
              value:
                "Les portes peintes et les façades avec des moulures.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "Le deuxième moins cher, juste après la mélamine.",
            },
            {
              label: "Finis offerts",
              value:
                "La peinture de votre choix, en fini mat, satiné ou lustré.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
            alt: "Façades peintes dans une cuisine sur mesure",
          },
          note: "Il existe une version qui craint moins l'eau, utilisée sous les lavabos.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le MDF",
          items: [
            {
              q: "Une porte MDF peut-elle se déformer ?",
              a: "Sur une grande hauteur, oui, si elle reste peinte d'un seul côté. Les deux faces reçoivent le même nombre de couches, ce qui équilibre les tensions.",
            },
            {
              q: "Le MDF résiste-t-il aux coups ?",
              a: "Moins qu'une porte en bois. Un angle cogné s'écrase au lieu d'éclater, et la reprise demande un enduit puis une repeinte locale.",
            },
            {
              q: "Peut-on repeindre une porte MDF plus tard ?",
              a: "Oui. Ponçage léger, apprêt adhérent, deux couches. C'est son avantage principal face à un décor thermofusionné, qui lui se remplace.",
            },
            {
              q: "Y a-t-il du formaldéhyde dans ces panneaux ?",
              a: "Les panneaux courants au Canada respectent la norme CARB 2. La fiche du lot accompagne la commande et vous est remise sur demande.",
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
          heading: "Vous voulez des portes peintes qui restent nettes",
          intro:
            "On choisit l'épaisseur, la forme et le nombre de couches selon la pièce.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les couleurs et finis",
              href: "/materiaux/couleurs",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
