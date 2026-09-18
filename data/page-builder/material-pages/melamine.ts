import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en mélamine : avantages, durabilité et prix",
    description:
      "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure.",
    path: "/materiaux/melamine",
    ogAlt: "Mélamine - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine" },
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
          heading: "La mélamine arrive déjà finie, à coût maîtrisé",
          description:
            "Un décor thermofusionné sur panneau. Aucune étape de peinture, une surface lavable, et des chants qui décident de sa durée.",
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
          badges: ["Décor", "Entretien", "Budget"],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Détail d'un panneau mélamine et de son chant",
          },
          caption: "Intérieurs de caissons et budgets cadrés",
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
          heading: "La mélamine en fiche",
          intro: "Un panneau jugé sur son chant plus que sur son décor.",
          rows: [
            {
              label: "Composition",
              value: "Papier décor fusionné sous presse sur panneau de fibres",
            },
            {
              label: "Humidité",
              value: "Surface étanche, panneau exposé par un chant ouvert",
            },
            {
              label: "Entretien",
              value: "Linge humide, aucun produit abrasif",
            },
            {
              label: "Usages recommandés",
              value: "Intérieurs, tablettes, rangement secondaire",
            },
            {
              label: "Prix relatif",
              value: "Le poste armoires le moins cher",
            },
            {
              label: "Chants",
              value: "Bande PVC de 1 mm ou plus, collée sous presse",
            },
          ],
          note: "Un éclat ne se ponce pas : la pièce touchée se remplace.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur la mélamine",
          items: [
            {
              q: "La mélamine jaunit-elle avec le temps ?",
              a: "Les blancs actuels tiennent, même près d'une fenêtre. Ce sont les décors très brillants des anciennes séries qui viraient, pas les panneaux d'aujourd'hui.",
            },
            {
              q: "Peut-on percer sans écailler le décor ?",
              a: "Oui, avec une mèche à pointe centrée et un ruban sur le trait. C'est une question d'outil, pas de panneau.",
            },
            {
              q: "Mélamine ou stratifié sur une porte ?",
              a: "Le stratifié est plus épais et encaisse mieux les chocs, à prix plus haut. La mélamine suffit dès que la porte n'est pas ouverte cinquante fois par jour.",
            },
            {
              q: "Convient-elle à une salle de lavage ?",
              a: "Oui, c'est un de ses terrains les plus solides. Surfaces lavables, tablettes qui ne tachent pas, et un coût qui laisse le budget aux zones vues.",
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
          heading: "La mélamine tient-elle dans votre budget ?",
          intro:
            "On sépare ce qui se voit de ce qui se range, puis on répartit le budget.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Comparer avec le MDF",
              href: "/materiaux/mdf",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
