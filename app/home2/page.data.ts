import type { Block } from "@/page-builder/model/block-types";

export const blocks: Block[] = [
  {
    id: "hero",
    content: {
      type: "hero",
      variant: "split-badges-card-bullets",
      props: {
        image: {
          src: "/images/hero/kitchen-hero.webp",
          alt: "Premium custom kitchen",
        },
        overlay: "dark-gradient",
        badges: ["Sur mesure", "Matériaux premium", "Clé en main"],
        heading: "Cuisine et armoires sur mesure haut de gamme à Montréal",
        description:
          "Fabrication contrôlée, matériaux durables et exécution maîtrisée — pour des projets résidentiels et commerciaux à Montréal, Laval et sur la Rive-Sud.",
        actions: [
          {
            label: "Obtenir une soumission",
            href: "/contact",
            variant: "default",
          },
          { label: "Voir nos projets", href: "/projets", variant: "outline" },
        ],
        note: "Positionnement premium : idéal pour des projets durables et bien exécutés.",
        card: {
          title: "Pourquoi Dilamco",
          description: "Un modèle structuré qui protège la qualité.",
          items: [
            {
              title: "Entrepôt à Montréal",
              description:
                "contrôle des inventaires et réduction des imprévus.",
            },
            {
              title: "Approvisionnement direct",
              description: "spécifications définies, qualité cohérente.",
            },
            {
              title: "Gestion clé en main",
              description: "un responsable du design à l’installation.",
            },
          ],
        },
      },
    },
  },
  {
    id: "faq",
    frame: {
      divider: "bottom",
    },
    content: {
      type: "split",
      variant: "faq-accordion",
      props: {
        heading: "FAQ",
        intro:
          "Réponses claires aux questions qui bloquent le plus souvent la décision.",
        items: [
          {
            q: "Quel budget prévoir pour une cuisine sur mesure ?",
            a: "Le budget dépend des dimensions, de l'aménagement (tiroirs, accessoires, îlot), des matériaux et de la coordination. Pour une approche sur mesure et clé en main, il faut s’attendre à un investissement aligné avec une exécution premium et durable.",
          },
          {
            q: "Quelle est la différence avec IKEA / grandes surfaces ?",
            a: "Les solutions standardisées peuvent convenir à certains contextes. Le sur mesure vise une personnalisation complète, une structure plus robuste, et une exécution mieux contrôlée — particulièrement important dans une résidence principale.",
          },
          {
            q: "Quels sont les délais typiques ?",
            a: "Les délais varient selon la complexité et la charge de production. Un processus structuré (validation avant fabrication + coordination installation) permet une planification plus prévisible et moins d’imprévus.",
          },
          {
            q: "Gérez-vous la rénovation complète ?",
            a: "Oui, lorsque requis : coordination des étapes clés et intégration avec le design, la fabrication et l’installation. L’objectif est de réduire la fragmentation et d’assurer une exécution cohérente.",
          },
        ],
      },
    },
  },
  {
    id: "cta-plan",
    content: {
      type: "cta",
      variant: "band-split-actions",
      props: {
        heading: "Prêt à cadrer votre projet correctement ?",
        intro:
          "Obtenez une soumission claire et structurée, adaptée à un projet durable et maîtrisé.",
        actions: [
          {
            label: "Obtenir une soumission",
            href: "/contact",
            variant: "default",
          },
          {
            label: "Cuisine sur mesure",
            href: "/espaces/cuisine/",
            variant: "outline",
          },
        ],
        note: "Montréal • Laval • Rive-Sud — résidentiel & commercial",
      },
    },
  },
];
