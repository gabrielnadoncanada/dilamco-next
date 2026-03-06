import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Cuisines, vanités et armoires sur mesure clé en main à Montréal",
    description:
      "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme.",
    path: "/",
    ogAlt: "Dilamco, sur mesure, durable, bien exécuté",
  },
  breadcrumbs: [
    {
      name: "Accueil",
      url: SITE.url + "/",
    },
  ],
  blocks: [
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
      id: "standard",
      content: {
        type: "split",
        variant: "steps-2x2-cta",
        props: {
          heading: "Notre standard, peu importe l'espace",
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
            {
              label: "Voir nos services",
              href: "/services",
              variant: "outline",
            },
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
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets en vedette",
          intro:
            "Découvrez les réalisations récentes de nos espaces sur mesure.",
          ctaLabel: "Voir tous les projets",
          ctaHref: "/projets",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
              description:
                "Conception, fabrication contrôlée et installation précise avec finitions soignées.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Cuisine", "Montréal", "Plateau-Mont-Royal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Vanité sur mesure",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
              description:
                "Rangement optimisé, matériaux durables et exécution nette adaptée à la salle de bain.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Vanité et salle de bain sur mesure",
              },
              badges: ["Salle de bain", "Laval", "Vanités"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Aménagement sur mesure",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal/",
              description:
                "Mobilier robuste, lignes épurées et installation planifiée pour minimiser les interruptions.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Commercial", "Montréal", "Centre-ville"],
              footerCtaLabel: "Voir le projet",
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
  ],
};
