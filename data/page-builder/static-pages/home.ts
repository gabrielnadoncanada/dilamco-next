import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Cuisiniste à Montréal — cuisines et armoires sur mesure | Dilamco",
    description:
      "Dilamco, cuisiniste à Pierrefonds et Montréal : conception, fabrication et installation de cuisines, armoires, vanités et rangements sur mesure haut de gamme. Demandez une soumission.",
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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Espaces",
          heading:
            "Cuisiniste et ébéniste sur mesure à Montréal : cuisine, salle de bain, rangement et commercial",
          description:
            "Cuisiniste basé à Pierrefonds-Roxboro, on conçoit, fabrique et installe cuisines, armoires, vanités et rangements sur mesure. Chaque espace a ses contraintes : notre rôle est de livrer des solutions durables, fonctionnelles et bien exécutées.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Sur mesure", "Durable", "Clé en main"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Espaces sur mesure Dilamco",
          },
          caption: "Montréal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "quality-pillars",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Des espaces conçus pour durer - pas des modules standard",
          description:
            "Chaque espace Dilamco suit la même logique : design adapté à votre réalité, fabrication contrôlée, matériaux premium et exécution structurée. L'objectif est simple : un résultat durable, cohérent et maîtrisé, avec un seul responsable du début à la fin.",
          cards: [
            {
              title: "Qualité tangible",
              description:
                "Détails de construction, quincaillerie, finitions et durabilité vérifiables.",
            },
            {
              title: "Gestion clé en main",
              description:
                "Moins d'intervenants, moins d'imprévus, une coordination claire.",
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
            "Accédez à la page pilier correspondante pour découvrir l'approche, les matériaux, des réalisations et une FAQ adaptée.",
          items: [
            {
              title: "Cuisine sur mesure et armoires",
              href: "/espaces/cuisine",
              description:
                "Cuisine sur mesure et armoires de cuisine sur mesure : îlot, ergonomie, durabilité et coordination complète pour un résultat maîtrisé.",
              image: {
                src: "/images/generated/home/home-space-cuisine-card-01.webp",
                alt: "Armoires de cuisine sur mesure haut de gamme",
              },
              badges: ["Sur mesure", "Clé en main", "Haut de gamme"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Voir les cuisines sur mesure",
            },
            {
              title: "Vanités & salles de bain sur mesure",
              href: "/espaces/salle-de-bain",
              description:
                "Vanités de salle de bain sur mesure, rangement optimisé et finitions résistantes à l'humidité pour durer.",
              image: {
                src: "/images/generated/home/home-space-bath-card-01.webp",
                alt: "Vanité de salle de bain sur mesure",
              },
              badges: ["Vanités", "Durable", "Finitions"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Voir les vanités sur mesure",
            },
            {
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage",
              description:
                "Solutions de rangement et d'organisation pensées pour le quotidien, sans compromis sur la solidité.",
              image: {
                src: "/images/generated/home/home-space-laundry-card-01.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Rangement", "Fonctionnel", "Sur mesure"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Découvrir salle de lavage",
            },
            {
              title: "Garde-robe et walk-in sur mesure",
              href: "/espaces/walk-in",
              description:
                "Garde-robe sur mesure et walk-in : penderies, tiroirs, accessoires et configuration adaptée à vos besoins.",
              image: {
                src: "/images/generated/home/home-space-walkin-card-01.webp",
                alt: "Garde-robe et walk-in sur mesure",
              },
              badges: ["Garde-robe", "Personnalisé", "Premium"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Découvrir garde-robe et walk-in",
            },
            {
              title: "Aménagement de sous-sol",
              href: "/espaces/sous-sol",
              description:
                "Salle de cinéma maison, bar, cave à vin et bibliothèque sur mesure pour transformer le sous-sol en pièce de vie.",
              image: {
                src: "/images/generated/home/home-space-sous-sol-card-01.webp",
                alt: "Aménagement de sous-sol sur mesure",
              },
              badges: ["Sous-sol", "Cinéma maison", "Sur mesure"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Découvrir l'aménagement de sous-sol",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Aménagement durable et reproductible : bureaux, espaces clients, rangements et mobilier sur mesure.",
              image: {
                src: "/images/generated/home/home-space-commercial-card-01.webp",
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
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Notre standard, peu importe l'espace",
          description:
            "Une méthode reproductible pour protéger la qualité, réduire les imprévus et livrer un résultat cohérent.",
          steps: [
            {
              number: "1",
              title: "Conception",
              description:
                "Plans clairs, configuration adaptée et validations avant fabrication.",
            },
            {
              number: "2",
              title: "Matériaux",
              description:
                "Choix durables et détails de construction pensés pour la longévité.",
            },
            {
              number: "3",
              title: "Fabrication contrôlée",
              description:
                "Standards stables, contrôle qualité et cohérence d'un projet à l'autre.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements précis, finitions nettes et coordination structurée sur chantier.",
            },
          ],
          actions: [
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Comprendre nos matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },

    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ",
          intro:
            "Réponses claires aux questions qui bloquent le plus souvent la décision.",
          items: [
            {
              q: "Quel budget prévoir pour une cuisine sur mesure ?",
              a: "Le budget dépend des dimensions, de l'aménagement (tiroirs, accessoires, îlot), des matériaux et de la coordination. Pour une approche sur mesure et clé en main, il faut s'attendre à un investissement aligné avec une exécution premium et durable.",
            },
            {
              q: "Quelle est la différence avec IKEA / grandes surfaces ?",
              a: "Les solutions standardisées peuvent convenir à certains contextes. Le sur mesure vise une personnalisation complète, une structure plus robuste, et une exécution mieux contrôlée - particulièrement important dans une résidence principale.",
            },
            {
              q: "Quels sont les délais typiques ?",
              a: "Les délais varient selon la complexité et la charge de production. Un processus structuré (validation avant fabrication + coordination installation) permet une planification plus prévisible et moins d'imprévus.",
            },
            {
              q: "Gérez-vous la rénovation complète ?",
              a: "Oui, lorsque requis : coordination des étapes clés et intégration avec le design, la fabrication et l'installation. L'objectif est de réduire la fragmentation et d'assurer une exécution cohérente.",
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
              variant: "primary",
            },
            {
              label: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          note: "Montréal • Laval • Rive-Sud - résidentiel & commercial",
        },
      },
    },
  ],
};
