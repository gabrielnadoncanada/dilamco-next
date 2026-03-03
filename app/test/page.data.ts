import type { Block } from "@/page-builder/model/block-types";

export const blocks: Block[] = [
  {
    id: "spaces-durable",
    content: {
      type: "split",
      variant: "text-divider-cards",
      props: {
        heading: "Des espaces conçus pour durer — pas des modules standard",
        description:
          "Chaque espace Dilamco suit la même logique : design adapté à votre réalité, fabrication contrôlée, matériaux premium et exécution structurée. L’objectif est simple : un résultat durable, cohérent et maîtrisé, avec un seul responsable du début à la fin.",
        cards: [
          {
            title: "Qualité tangible",
            description:
              "Détails de construction, quincaillerie, finitions et durabilité vérifiables.",
          },
          {
            title: "Gestion clé en main",
            description:
              "Moins d’intervenants, moins d’imprévus, une coordination claire.",
          },
        ],
      },
    },
  },
  {
    id: "standard",
    content: {
      type: "split",
      variant: "steps-2x2-cta",
      props: {
        heading: "Notre standard, peu importe l’espace",
        description:
          "Une méthode reproductible pour protéger la qualité, réduire les imprévus et livrer un résultat cohérent.",
        steps: [
          {
            label: "1) Conception",
            description:
              "Plans clairs, configuration adaptée et validations avant fabrication.",
          },
          {
            label: "2) Matériaux",
            description:
              "Choix durables et détails de construction pensés pour la longévité.",
          },
          {
            label: "3) Fabrication contrôlée",
            description:
              "Standards stables, contrôle qualité et cohérence d’un projet à l’autre.",
          },
          {
            label: "4) Installation",
            description:
              "Ajustements précis, finitions nettes et coordination structurée sur chantier.",
          },
        ],
        actions: [
          { label: "Voir nos services", href: "/services", variant: "outline" },
          {
            label: "Comprendre nos matériaux",
            href: "/materiaux",
            variant: "outline",
          },
        ],
      },
    },
  },

  {
    id: "introduction-value",
    frame: { container: "2xl", paddingY: "md", surface: "default" },
    content: {
      type: "split",
      variant: "badges-checklist-cta",
      props: {
        heading: "Une cuisine sur mesure conçue pour durer",
        intro:
          "Ce n’est pas seulement de l’armoire. C’est un investissement résidentiel à long terme où la structure, les matériaux et la qualité d’exécution comptent plus que l’esthétique superficielle.",
        badges: [
          "Durabilité réelle",
          "Planification stable",
          "Finitions haut de gamme",
        ],
        cardTitle: "Vérification rapide d’adéquation au projet",
        items: [
          "Projet de résidence principale",
          "Durabilité à long terme priorisée",
          "Coordination clé en main préférée",
          "Budget aligné avec l’exécution premium",
        ],
        actions: [
          {
            label: "Commencer une demande de soumission",
            href: "/contact/",
            variant: "default",
          },
        ],
      },
    },
  },
];
