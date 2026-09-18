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
            "Planches pleines, grain visible, valeur perçue élevée. Un matériau vivant qui bouge avec l'humidité, donc ciblé sur les surfaces vues.",
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
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Cuisine sur mesure avec détails en bois massif",
          },
          caption: "Portes et détails vus de près",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le bois massif apporte",
          description:
            "Matière pleine et variations naturelles. Il gagne sur les façades et les détails, il coûte en stabilité sur les grandes surfaces planes.",
          cards: [
            {
              title: "Grain et profondeur",
              description:
                "Chaque pièce garde ses variations de teinte et de texture.",
            },
            {
              title: "Valeur perçue",
              description:
                "Il tire le rendu vers le haut de gamme sur les éléments vus.",
            },
            {
              title: "Réparable",
              description:
                "Certaines marques se reprennent selon le fini appliqué.",
            },
            {
              title: "Il bouge",
              description:
                "Gonflement et retrait suivent l'humidité et la température de la pièce.",
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
          heading: "Où on l'utilise",
          intro:
            "On cible le bois massif là où il se voit et se touche, et on passe au panneau ailleurs.",
          items: [
            {
              title: "Portes et façades",
              description: "Là où le grain se lit de près.",
            },
            {
              title: "Détails et moulures",
              description: "Corniches, panneaux latéraux, tablettes apparentes.",
            },
            {
              title: "Caissons en contreplaqué",
              description: "Plus stables sous charge et dans l'humidité.",
            },
          ],
          actions: [
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Détail de finition en bois massif",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "Bois massif sur les surfaces vues, panneaux stables pour la structure.",
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
              q: "Le bois massif est-il toujours le bon choix ?",
              a: "Non. Il excelle sur les portes et les détails visibles. Sur les grandes surfaces planes et les caissons, le contreplaqué et le MDF tiennent mieux la ligne dans le temps.",
            },
            {
              q: "Comment réagit-il à l'humidité ?",
              a: "Il gonfle et se contracte selon l'humidité de la pièce. Un jeu prévu à la conception, des assemblages adaptés et un fini qui scelle le bois limitent nettement ces mouvements.",
            },
            {
              q: "Est-ce recommandé en cuisine ?",
              a: "Oui, sur les portes et les éléments vus. Le fini choisi et la ventilation de la pièce comptent autant que l'essence de bois.",
            },
            {
              q: "Peut-on le combiner à d'autres matériaux ?",
              a: "Oui, et c'est l'approche habituelle : bois massif sur les façades, contreplaqué de bouleau pour les caissons, MDF pour certaines portes peintes.",
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
          heading: "Un projet avec du bois massif ?",
          intro:
            "On vous dit où il apporte une vraie valeur et où un autre panneau tiendra mieux.",
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
