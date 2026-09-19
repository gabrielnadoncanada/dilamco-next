import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Comparatif des matériaux d'armoires : mélamine, MDF, bois",
    description:
      "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif.",
    path: "/materiaux/comparatif",
    ogAlt: "Comparatif des matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Quel matériau pour quelle partie de l'armoire",
          description:
            "Aucun matériau n'est bon partout. Une cuisine bien pensée en combine trois ou quatre.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Chaque matériau et l'usage qui lui convient",
          columns: ["Ce qu'il fait de mieux", "Où on l'utilise"],
          rows: [
            {
              label: "Contreplaqué",
              values: ["Il reste droit et tient les vis", "Caissons, tiroirs, tablettes"],
            },
            {
              label: "MDF",
              values: ["Il donne une peinture parfaitement lisse", "Portes et façades peintes"],
            },
            {
              label: "Mélamine",
              values: ["Il coûte peu et arrive déjà fini", "Intérieurs d'armoires et tablettes"],
            },
            {
              label: "Bois massif",
              values: ["Il montre un vrai grain de bois", "Portes, moulures et détails visibles"],
            },
            {
              label: "Quincaillerie",
              values: ["Elle tient des années sans jeu", "Charnières et coulisses de tiroir"],
            },
            {
              label: "Panneau de particules",
              values: ["Il ne coûte presque rien", "Rien qui porte du poids, chez nous"],
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Comment choisir",
          rows: [
            {
              label: "Pour la structure",
              value:
                "Du contreplaqué partout où il y a des vis et du poids à porter.",
            },
            {
              label: "Pour les façades",
              value:
                "Du MDF si on peint, du bois massif pour le grain, de la mélamine pour le prix.",
            },
            {
              label: "Pour le budget",
              value:
                "Mettez l'argent sur ce que vous voyez et touchez tous les jours.",
            },
            {
              label: "Ce qui lâche en premier",
              value:
                "Ce sont les bords des panneaux et la pose, rarement le matériau lui-même.",
            },
          ],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Panneaux d'armoires comparés côte à côte",
          },
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur le choix des matériaux",
          items: [
            {
              q: "Faut-il un seul matériau par cuisine ?",
              a: "Non, et c'est rarement souhaitable. Trois ou quatre panneaux cohabitent dans la même pièce, chacun placé là où sa faiblesse ne se voit pas.",
            },
            {
              q: "Comment comparer deux soumissions ?",
              a: "Regardez l'épaisseur du caisson, l'essence du contreplaqué, la marque des coulisses et l'épaisseur du chant. Le reste tient de la présentation.",
            },
            {
              q: "Le panneau de particules est-il à exclure ?",
              a: "Sous un décor et loin de l'eau, il fait le travail. Nous l'écartons des caissons, parce qu'il ne retient pas les vis sur la durée.",
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
          heading: "Choisir les matériaux de votre projet",
          intro:
            "On passe la pièce en revue chez vous, puis on arrête chaque matériau avec vous.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
