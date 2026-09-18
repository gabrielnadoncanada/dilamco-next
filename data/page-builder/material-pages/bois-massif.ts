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
          heading: "Le bois massif au bon endroit, pas partout",
          description:
            "Planches pleines, grain visible. Un matériau qui travaille avec l'humidité, donc réservé aux pièces qui se voient.",
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
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le bois massif en fiche",
          intro: "Ce qu'il faut savoir avant de l'inscrire au devis.",
          rows: [
            {
              label: "Composition",
              value: "Planches pleines collées sur chant, érable, chêne ou noyer",
            },
            {
              label: "Humidité",
              value: "Réaction forte, gonfle l'été et retreint l'hiver",
            },
            {
              label: "Entretien",
              value: "Chiffon doux, aucune eau laissée sur un joint",
            },
            {
              label: "Usages recommandés",
              value: "Portes, moulures, corniches, tablettes apparentes",
            },
            {
              label: "Prix relatif",
              value: "Le plus élevé des quatre panneaux",
            },
            {
              label: "Finis disponibles",
              value: "Teinture, vernis, huile, laque opaque",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Détail de finition sur une pièce en bois massif",
          },
          note: "Valeurs indicatives. L'essence retenue est confirmée au devis.",
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
          heading: "Du bois massif dans votre cuisine ?",
          intro:
            "On vous dit sur quelles pièces il vaut son prix et où un panneau tiendra mieux.",
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
