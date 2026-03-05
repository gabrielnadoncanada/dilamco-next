import type { Block } from "@/page-builder/model/block-types";

export const blocks: Block[] = [
  {
    id: "hero",
    frame: {
      divider: "bottom",
    },
    content: {
      type: "hero",
      variant: "split-image-badges",
      props: {
        image: {
          src: "/images/hero/kitchen-hero.webp",
          alt: "Premium custom kitchen",
        },
        eyebrow: "Dilamco — Espaces",
        overlay: "dark-gradient",
        badges: [
          "Fabrication contrôlée",
          "Matériaux durables",
          "Installation précise",
          "Coordination complète",
        ],
        heading: "Espaces sur mesure haut de gamme à Montréal",
        description:
          "Cuisine, salle de bain, salle de lavage, walk-in et commercial — conçus, fabriqués et installés avec une gestion clé en main et des standards de qualité constants.",
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
    id: "quality-pillars",
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
        columns: "2",
      },
    },
  },
  {
    id: "spaces",
    content: {
      type: "grid",
      variant: "image-cards-slider",
      props: {
        heading: "Choisissez votre espace",
        intro:
          "Accédez à la page pilier correspondante pour découvrir l’approche, les matériaux, des réalisations et une FAQ adaptée.",
        items: [
          {
            title: "Cuisine",
            href: "/espaces/cuisine",
            description:
              "Armoires sur mesure, ergonomie, durabilité et coordination complète pour un résultat maîtrisé.",
            image: {
              src: "/images/spaces/cabinet-cuisines.webp",
              alt: "Cuisine sur mesure haut de gamme",
            },
            badges: ["Sur mesure", "Clé en main", "Haut de gamme"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir cuisine",
          },
          {
            title: "Salle de bain",
            href: "/espaces/salle-de-bain",
            description:
              "Vanités sur mesure, rangement optimisé et finitions résistantes à l’humidité pour durer.",
            image: {
              src: "/images/spaces/vanite-salles-de-bain.webp",
              alt: "Vanité et salle de bain sur mesure",
            },
            badges: ["Vanités", "Durable", "Finitions"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir salle de bain",
          },
          {
            title: "Salle de lavage",
            href: "/espaces/salle-de-lavage",
            description:
              "Solutions de rangement et d’organisation pensées pour le quotidien, sans compromis sur la solidité.",
            image: {
              src: "/images/spaces/vanite-salles-de-lavage.webp",
              alt: "Salle de lavage sur mesure",
            },
            badges: ["Rangement", "Fonctionnel", "Sur mesure"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir salle de lavage",
          },
          {
            title: "Walk-in",
            href: "/espaces/walk-in",
            description:
              "Organisation personnalisée : tiroirs, penderies, accessoires et configuration adaptée à vos besoins.",
            image: {
              src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
              alt: "Walk-in sur mesure",
            },
            badges: ["Organisation", "Personnalisé", "Premium"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir walk-in",
          },
          {
            title: "Commercial",
            href: "/espaces/commercial",
            description:
              "Aménagement durable et reproductible : bureaux, espaces clients, rangements et mobilier sur mesure.",
            image: {
              src: "/images/spaces/commercial.webp",
              alt: "Aménagement commercial sur mesure",
            },
            badges: ["Commercial", "Durable", "Exécution maîtrisée"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir commercial",
          },
        ],
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
