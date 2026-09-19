import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Matériaux pour cuisines & armoires sur mesure",
    description:
      "Matériaux pour armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie et finis, comparés par notre division armoires.",
    path: "/materiaux",
    ogAlt: "Matériaux Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Contreplaqué", "MDF", "Quincaillerie"],
          heading: "Les matériaux qu'on met dans vos armoires",
          description:
            "C'est nous qui choisissons les panneaux, la quincaillerie et les finis, et qui les vérifions.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "pages",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Les matériaux en détail",
          columns: "3",
          items: [
            {
              title: "Contreplaqué",
              href: "/materiaux/contreplaque",
              description: "Structure des caissons",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Portes peintes",
            },
            {
              title: "Mélamine",
              href: "/materiaux/melamine",
              description: "Décor déjà fini",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif",
              description: "Façades et moulures",
            },
            {
              title: "Quincaillerie",
              href: "/materiaux/quincaillerie",
              description: "Charnières et coulisses",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs",
              description: "Teinte et lustre",
            },
            {
              title: "Comparatif",
              href: "/materiaux/comparatif",
              description: "Lequel choisir et où",
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
          heading: "Ce qu'on met dans vos armoires par défaut",
          intro: "Notre standard, avant toute option que vous pourriez ajouter.",
          rows: [
            {
              label: "Caissons",
              value:
                "Du contreplaqué de bouleau de 15 mm, avec les bords scellés.",
            },
            {
              label: "Façades",
              value:
                "Du MDF peint, de la mélamine ou du bouleau massif, selon la pièce.",
            },
            {
              label: "Quincaillerie",
              value:
                "Des charnières qui se règlent et des tiroirs qui sortent au complet.",
            },
            {
              label: "Finis offerts",
              value:
                "Une peinture de la couleur de votre choix, ou un décor déjà fini.",
            },
            {
              label: "Qui produit",
              value:
                "Notre usine partenaire exclusive, sur nos plans et nos spécifications.",
            },
            {
              label: "Vérification",
              value:
                "Chaque livraison est comptée et inspectée avant la journée de pose.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-card-01.webp",
            alt: "Caisson de bouleau et façade peinte d'une armoire sur mesure",
          },
          note: "Un changement de matériau s'écrit au devis, jamais en cours de chantier.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Un avis sur le choix de vos matériaux",
          intro:
            "Panneaux, quincaillerie et finis sont écrits dans la soumission avant la commande.",
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
