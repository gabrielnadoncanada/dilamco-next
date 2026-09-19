import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en bois massif sur mesure",
    description:
      "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure.",
    path: "/materiaux/bois-massif",
    ogAlt: "Bois massif - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif" },
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
          heading: "Où le bois massif vaut vraiment son prix",
          description:
            "Le bois bouge avec les saisons, alors on le garde pour les pièces qu'on voit de près.",
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
          badges: ["Naturel", "Portes", "Détails"],
          image: {
            src: "/images/generated/materials/material-solid-wood-card-01.webp",
            alt: "Porte d'armoire en bois massif au grain apparent",
          },
          caption: "Portes et détails vus de près",
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
          heading: "Ce qu'il faut savoir sur le bois massif",
          intro: "Ses qualités, son coût, et les endroits où il tient le mieux.",
          rows: [
            {
              label: "De quoi c'est fait",
              value:
                "De vraies planches d'érable, de chêne ou de noyer, collées côte à côte.",
            },
            {
              label: "Résiste à l'humidité ?",
              value:
                "Il y réagit beaucoup : il gonfle l'été et se resserre l'hiver.",
            },
            {
              label: "Entretien",
              value:
                "Un chiffon doux, et on essuie tout de suite l'eau qui traîne.",
            },
            {
              label: "Usage recommandé",
              value:
                "Les portes, les moulures et les tablettes qu'on voit de près.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "C'est le plus cher des quatre matériaux.",
            },
            {
              label: "Finis offerts",
              value:
                "Une teinture qui laisse voir le grain, ou une peinture opaque.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Détail de finition sur une pièce en bois massif",
          },
          note: "L'essence de bois retenue est confirmée dans votre soumission.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le bois massif",
          items: [
            {
              q: "Le bois massif convient-il aux caissons ?",
              a: "Non. Sous charge et sur de grandes surfaces planes, il travaille et finit par voiler. Le contreplaqué garde les caissons droits, le massif reste sur les pièces vues.",
            },
            {
              q: "Quelle essence choisir ?",
              a: "L'érable accepte les teintures claires sans tacher. Le chêne affiche un grain marqué. Le noyer part foncé et coûte plus cher. Le choix se fait sur échantillon, chez vous.",
            },
            {
              q: "Les joints vont-ils ouvrir l'hiver ?",
              a: "Un léger jeu est normal quand l'air sec descend sous 30 pour cent d'humidité. Un humidificateur réglé correctement garde ce mouvement invisible.",
            },
            {
              q: "Peut-on reprendre une égratignure ?",
              a: "Sur un fini huilé, oui : ponçage local puis nouvelle couche. Sur une laque opaque, la reprise se devine toujours un peu.",
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
          heading: "Vous voulez du bois massif dans votre cuisine",
          intro:
            "On vous dit sur quelles pièces il vaut son prix, et où un panneau tiendra mieux.",
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
