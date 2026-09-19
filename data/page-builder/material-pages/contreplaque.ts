import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en contreplaqué : stabilité et durabilité",
    description:
      "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d'armoires sur mesure.",
    path: "/materiaux/contreplaque",
    ogAlt: "Contreplaqué - Matériaux sur mesure",
    ogImage: {
      url: "/images/generated/materials/material-plywood-hero-01.webp",
      alt: "Contreplaqué - Matériaux sur mesure",
      width: 1200,
      height: 630,
    },
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    {
      name: "Pourquoi le contreplaqué",
      url: SITE.url + "/materiaux/contreplaque",
    },
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
          heading: "Pourquoi nos caissons sont en contreplaqué",
          description:
            "C'est le panneau qui reste droit dans le temps et qui tient les vis des charnières.",
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
          badges: ["Structure", "Stabilité", "Caissons"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Caisson d'armoire en contreplaqué de bouleau",
          },
          caption: "Caissons, tiroirs et pièces sous charge",
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
          heading: "Ce qu'il faut savoir sur le contreplaqué",
          intro: "Les réponses aux questions qu'on nous pose sur ce panneau.",
          rows: [
            {
              label: "De quoi c'est fait",
              value:
                "De fines couches de bouleau collées en croix, pour une épaisseur de 13 à 15 mm.",
            },
            {
              label: "Résiste à l'humidité ?",
              value:
                "Oui, tant que les bords du panneau sont bien scellés.",
            },
            {
              label: "Entretien",
              value:
                "Aucun, parce qu'il reste caché derrière les portes et le fini.",
            },
            {
              label: "Usage recommandé",
              value:
                "Les caissons, les fonds de tiroir et les tablettes qui portent du poids.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "Plus cher que le MDF, moins cher que le bois massif.",
            },
            {
              label: "Tient-il les vis ?",
              value:
                "Environ deux fois mieux qu'un panneau de particules, donc les charnières restent en place.",
            },
            {
              label: "Quoi demander",
              value:
                "Au moins sept couches, et aucun trou visible dans l'épaisseur du panneau.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Plis croisés visibles sur un chant de contreplaqué",
          },
          note: "La qualité du panneau compte plus que l'essence de bois en surface.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le contreplaqué",
          items: [
            {
              q: "Faut-il du contreplaqué sous l'évier ?",
              a: "Oui, c'est la zone où il paie le plus vite. Avec un chant scellé et un fond amovible, une fuite lente se répare sans démonter le caisson.",
            },
            {
              q: "Combien de plis viser ?",
              a: "Sept plis sur 13 mm pour un caisson d'armoire. Moins de plis veut dire des couches plus épaisses, donc plus de vides et de creux sous le placage.",
            },
            {
              q: "Un chant apparent est-il acceptable ?",
              a: "Oui, plusieurs clients le demandent sur les tablettes et les bouts d'îlot. Il faut alors un placage sans vide, poncé fin puis verni.",
            },
            {
              q: "Le contreplaqué est-il plus lourd ?",
              a: "À épaisseur égale, il pèse moins que le MDF. Cela se sent à la pose des armoires hautes et sur les ancrages du mur.",
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
          heading: "Vous voulez des caissons qui ne bougent pas",
          intro:
            "La qualité du panneau et son épaisseur sont écrites dans votre soumission.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Comparer les matériaux",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
