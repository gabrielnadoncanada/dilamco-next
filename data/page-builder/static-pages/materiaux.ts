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
            "Panneaux, quincaillerie et finis sont spécifiés par nous, produits par notre usine partenaire, puis vérifiés à la réception.",
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
      frame: { surface: "muted" },
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
              description: "Les quatre côte à côte",
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
          heading: "Ce qu'on spécifie par défaut",
          intro: "Le standard de la division armoires, avant toute option.",
          rows: [
            {
              label: "Caissons",
              value: "Contreplaqué de bouleau, 15 mm, chants scellés",
            },
            {
              label: "Façades",
              value: "MDF peint, mélamine ou bouleau massif selon la pièce",
            },
            {
              label: "Quincaillerie",
              value: "Charnières réglables et coulisses à extension complète",
            },
            {
              label: "Finis",
              value: "Peinture sur mesure ou décor thermofusionné",
            },
            {
              label: "Provenance",
              value: "Production confiée à notre usine partenaire exclusive",
            },
            {
              label: "Réception",
              value: "Chaque livraison comptée et inspectée avant la pose",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-card-01.webp",
            alt: "Caisson de bouleau et façade peinte d'une armoire sur mesure",
          },
          note: "Toute substitution est écrite au devis, jamais décidée sur le chantier.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Un avis sur vos choix techniques ?",
          intro:
            "On fixe panneaux, quincaillerie et finis dans une soumission détaillée avant la commande.",
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
