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
            "Fibres pressées, sans nœud ni veinage. Le support des portes peintes uniformes, à condition de fermer les chants.",
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
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Panneau MDF avec finition peinte uniforme",
          },
          caption: "Portes peintes et façades lisses",
          imageSide: "right",
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
          heading: "Le MDF en fiche",
          intro: "Le panneau technique des portes peintes, ses forces et sa limite.",
          rows: [
            {
              label: "Composition",
              value: "Fibres de bois et résine pressées à densité constante",
            },
            {
              label: "Humidité",
              value: "Point faible, un chant nu gonfle sans retour",
            },
            {
              label: "Entretien",
              value: "Nettoyant doux, jamais d'eau sur un joint",
            },
            {
              label: "Usages recommandés",
              value: "Portes peintes, panneaux moulurés, faux-panneaux",
            },
            {
              label: "Prix relatif",
              value: "Le plus abordable après la mélamine",
            },
            {
              label: "Finis disponibles",
              value: "Peinture mate, satinée ou lustrée, toute teinte",
            },
          ],
          image: {
            src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
            alt: "Façades peintes dans une cuisine sur mesure",
          },
          note: "Une version hydrofuge existe pour les vanités et les caissons sous lavabo.",
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
          heading: "Des portes peintes qui restent nettes ?",
          intro:
            "On choisit l'épaisseur, le profil et le nombre de couches selon la pièce.",
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
