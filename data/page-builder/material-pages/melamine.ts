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
          heading: "La mélamine, le choix économique et lavable",
          description:
            "Le panneau arrive déjà fini, donc il n'y a aucune peinture à faire et la surface se lave.",
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
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Ce qu'il faut savoir sur la mélamine",
          intro: "Ce qu'elle fait bien, et le détail qui décide de sa durée.",
          rows: [
            {
              label: "De quoi c'est fait",
              value:
                "Un papier imprimé collé à chaud sur un panneau de fibres de bois.",
            },
            {
              label: "Résiste à l'humidité ?",
              value:
                "La surface, oui. C'est par un bord mal fermé que l'eau finit par entrer.",
            },
            {
              label: "Entretien",
              value:
                "Un linge humide suffit, sans poudre ni éponge qui gratte.",
            },
            {
              label: "Usage recommandé",
              value:
                "L'intérieur des armoires, les tablettes et le rangement qu'on ne voit pas.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "C'est le matériau d'armoire le moins cher.",
            },
            {
              label: "Finis offerts",
              value:
                "Des décors unis ou imitation bois, avec un bord de PVC d'au moins 1 mm.",
            },
          ],
          note: "Un éclat ne se répare pas. On remplace la pièce touchée.",
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
          heading: "Faire entrer votre cuisine dans le budget",
          intro:
            "On met la mélamine là où ça ne se voit pas et on garde l'argent pour les façades.",
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
