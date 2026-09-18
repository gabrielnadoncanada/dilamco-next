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
          heading: "Le contreplaqué tient la structure des armoires",
          description:
            "Des plis croisés collés à chaud. Le panneau reste droit et retient les vis des charnières et des coulisses.",
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
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le contreplaqué en fiche",
          intro: "Les chiffres qu'on demande au fournisseur avant de commander.",
          rows: [
            {
              label: "Composition",
              value: "Plis de bouleau collés à fil croisé, 13 à 15 mm",
            },
            {
              label: "Humidité",
              value: "Tolérant tant que les chants restent scellés",
            },
            {
              label: "Entretien",
              value: "Aucun, il vit caché derrière le fini",
            },
            {
              label: "Usages recommandés",
              value: "Caissons, fonds de tiroir, tablettes chargées",
            },
            {
              label: "Prix relatif",
              value: "Au-dessus du MDF, sous le bois massif",
            },
            {
              label: "Tenue des vis",
              value: "Environ le double d'un panneau de particules",
            },
            {
              label: "Grade à viser",
              value: "Sept plis minimum, sans vide interne visible",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Plis croisés visibles sur un chant de contreplaqué",
          },
          note: "Le grade et la colle pèsent plus lourd que l'essence du placage.",
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
          heading: "Des caissons qui ne bougent pas ?",
          intro:
            "On inscrit le grade, l'épaisseur et le traitement des chants dans la soumission.",
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
