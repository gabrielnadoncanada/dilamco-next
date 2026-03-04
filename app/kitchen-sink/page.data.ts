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
  {
    id: "hero",
    content: {
      type: "hero",
      variant: "split-image-badges",
      props: {
        eyebrow: "Dilamco — Espaces",
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
        badges: [
          "Fabrication contrôlée",
          "Matériaux durables",
          "Installation précise",
          "Coordination complète",
        ],
        image: {
          src: "/images/spaces/hero-espaces.jpg",
          alt: "Espaces sur mesure Dilamco",
        },
        caption:
          "Photos réelles recommandées pour soutenir la crédibilité (à remplacer par vos visuels).",
      },
    },
  },
  {
    id: "cta-plan",
    content: {
      type: "cta",
      variant: "band-split-actions",
      props: {
        heading: "Prêt à planifier votre espace sur mesure ?",
        intro:
          "Décrivez votre projet, votre ville et votre échéancier. Nous vous répondons avec une prochaine étape claire.",
        actions: [
          {
            label: "Obtenir une soumission",
            href: "/contact",
            variant: "default",
          },
          {
            label: "Voir le processus",
            href: "/processus",
            variant: "outline",
          },
        ],
        note: "Note: remplace les images “/images/…” par tes assets réels (ou garde des placeholders tant que la banque photo n’est pas finalisée).",
      },
    },
  },
  {
    id: "differentiation",
    content: {
      type: "split",
      variant: "list-actions-image-card",
      props: {
        heading: "Une structure commerciale qui protège la qualité",
        intro:
          "Nous ne sommes pas un simple revendeur. Notre opération est conçue autour du contrôle de l’approvisionnement, de standards cohérents et d’une livraison prévisible.",
        items: [
          {
            title: "Présence locale à Montréal",
            description: "pour réduire les imprévus et améliorer le contrôle.",
          },
          {
            title: "Approvisionnement direct et standards de fabrication",
            description: "pour des résultats reproductibles.",
          },
          {
            title: "Exécution clé en main",
            description: "pour éviter la responsabilité fragmentée.",
          },
        ],
        actions: [
          {
            label: "Obtenir une soumission",
            href: "/contact/",
            variant: "outline",
          },
          {
            label: "Voir notre processus",
            href: "/processus/",
            variant: "outline",
          },
        ],
        image: {
          src: "/images/placeholder.webp",
          alt: "Warehouse or detail shot",
        },
        cardTitle: "Ce que cela signifie pour vous",
        cardDescription:
          "Moins d’inconnues, une planification plus claire et une qualité qui reste cohérente d’un projet à l’autre.",
      },
    },
  },
  {
    id: "processus",
    content: {
      type: "process",
      variant: "horizontal-steps-cards",
      props: {
        heading: "Une démarche claire. Une exécution maîtrisée.",
        intro:
          "Un seul interlocuteur, des étapes simples, des validations avant production.",
        steps: [
          {
            number: "1",
            title: "Comprendre votre projet",
            description:
              "Nous analysons vos besoins, contraintes et priorités avant toute décision.",
          },
          {
            number: "2",
            title: "Concevoir sur mesure",
            description:
              "Plans détaillés et solutions adaptées à votre espace réel.",
          },
          {
            number: "3",
            title: "Fabriquer avec précision",
            description:
              "Production contrôlée, matériaux durables, qualité vérifiée.",
          },
          {
            number: "4",
            title: "Installer et finaliser",
            description:
              "Ajustements précis et inspection complète avant la livraison.",
          },
        ],
      },
    },
  },
  {
    id: "faq",
    content: {
      type: "split",
      variant: "faq-accordion",
      props: {
        heading: "FAQ",
        intro:
          "Réponses claires sur les prix, les délais et ce que signifie la livraison clé en main.",
        items: [
          { q: "Combien coûte une cuisine sur mesure à Montréal ?", a: "..." },
          {
            q: "Quelle est la différence vs IKEA ou les grandes surfaces ?",
            a: "...",
          },
          { q: "Que signifie « clé en main » avec Dilamco ?", a: "..." },
          { q: "Quels sont les délais typiques ?", a: "..." },
        ],
      },
    },
  },
  {
    id: "hero",
    content: {
      type: "hero",
      variant: "bg-image-overlay-proofs",
      props: {
        badges: ["Sur mesure", "Clé en main", "Montréal"],
        heading: "Cuisine sur mesure, livraison clé en main à Montréal",
        description:
          "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
        actions: [
          {
            label: "Obtenir une soumission détaillée",
            href: "/contact/",
            variant: "default",
          },
          {
            label: "Voir nos cuisines",
            href: "/projets/cuisine/",
            variant: "secondary",
          },
        ],
        image: {
          src: "/images/hero/kitchen-hero.webp",
          alt: "Premium custom kitchen",
        },
        overlay: "dark-gradient",
        proofs: [
          {
            title: "Fabrication contrôlée",
            description: "Standards définis et qualité reproductible.",
          },
          {
            title: "Matériaux haut de gamme",
            description:
              "Spécifications conçues pour la durabilité et la stabilité.",
          },
          {
            title: "Coordination clé en main",
            description: "Un seul partenaire responsable, moins d’imprévus.",
          },
        ],
      },
    },
  },
  {
    id: "spaces",
    content: {
      type: "grid",
      variant: "image-cards-badges-cta",
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
              src: "/images/spaces/cuisine.jpg",
              alt: "Cuisine sur mesure haut de gamme",
            },
            badges: ["Sur mesure", "Clé en main", "Haut de gamme"],
            quickActionLabel: "Voir",
            footerCtaLabel: "Découvrir cuisine",
          },
        ],
      },
    },
  },
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
];
