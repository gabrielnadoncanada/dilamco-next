import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Salle de lavage sur mesure haut de gamme",
    description:
      "Salle de lavage sur mesure : conception, fabrication contrôlée et installation précise à Montréal, Laval et sur la Rive-Sud.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Salle de lavage sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de lavage sur mesure",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Salle de lavage sur mesure",
    description:
      "Conception, fabrication contrôlée et installation d'armoires de salle de lavage sur mesure.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Salle de lavage sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Espaces",
          heading: "Salle de lavage sur mesure, espace technique bien cadré",
          description:
            "Une salle de lavage performante repose sur l'organisation, la durabilité et une exécution propre adaptée à l'humidité et à l'usage fréquent.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Fonctionnel", "Durable", "Sur mesure"],
          image: {
            src: "/images/generated/spaces/space-laundry-hero-01.webp",
            alt: "Salle de lavage sur mesure haut de gamme",
          },
          caption:
            "Un espace de service conçu pour durer et rester simple à utiliser",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un espace de lavage pensé comme un espace technique",
          intro:
            "Le sur mesure sert à gérer machines, circulation, comptoir, rangement vertical et contraintes d'humidité dans un ensemble cohérent.",
          badges: ["Rangement", "Humidité", "Usage fréquent"],
          cardTitle: "Quand cette approche est utile",
          items: [
            "Vous devez optimiser un espace restreint.",
            "Le rangement et le comptoir pliage sont importants.",
            "Vous cherchez une solution plus stable qu'un assemblage standard.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Une séquence claire pour réduire les imprévus",
          intro:
            "Le projet est cadré dès le départ pour intégrer contraintes techniques, rangement et finition.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Contraintes de plomberie, ventilation, circulation et profondeur disponible.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Validation des zones de rangement, du comptoir et de l'accès aux machines.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée avec choix de matériaux adaptés à l'usage.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements et finitions vérifiés sur place pour une exécution nette.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Des matériaux qui tiennent dans le temps",
          intro:
            "Dans une salle de lavage, humidité et usage quotidien punissent vite les choix faibles ou mal adaptés.",
          items: [
            {
              title: "Structure robuste",
              description:
                "Bois massif de bouleau sur les éléments critiques pour mieux résister à l'usage.",
            },
            {
              title: "Stabilité dimensionnelle",
              description:
                "Contreplaqué de bouleau pour limiter la déformation et mieux supporter la charge.",
            },
            {
              title: "Rangement utile",
              description:
                "Configuration pensée pour paniers, produits, comptoir et accès quotidien.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "Voir nos espaces",
              href: "/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-laundry-project-01.webp",
            alt: "Détail matériau pour salle de lavage sur mesure",
          },
          cardTitle: "Impact concret",
          cardDescription:
            "Une structure plus stable évite les compromis visibles trop tôt et protège la qualité d'usage de la pièce.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets salle de lavage en vedette",
          intro:
            "Quelques exemples de configurations bien exécutées pour un usage fréquent.",
          items: [
            {
              title: "Salle de lavage sur mesure",
              href: "/projets",
              description:
                "Rangement et surfaces de travail intégrés dans un espace de service compact.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Projet salle de lavage sur mesure à Montréal",
              },
              badges: ["Montréal", "Fonctionnel"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage sur mesure",
              href: "/projets",
              description:
                "Aménagement durable avec rangement vertical et finition propre.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Projet salle de lavage sur mesure à Laval",
              },
              badges: ["Laval", "Durable"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage sur mesure",
              href: "/projets",
              description:
                "Projet conçu pour simplifier l'usage quotidien sans sacrifier la qualité.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Projet salle de lavage sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
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
          heading: "FAQ - salle de lavage sur mesure",
          intro:
            "Les questions les plus utiles avant de cadrer ce type d'espace.",
          items: [
            {
              q: "Combien coûte une salle de lavage sur mesure ?",
              a: "Le prix dépend de la configuration, des matériaux, du rangement et des contraintes techniques du lieu.",
            },
            {
              q: "Est-ce que vous pouvez coordonner d'autres travaux ?",
              a: "Oui, selon la portée du projet. L'objectif est de réduire la fragmentation quand c'est pertinent.",
            },
            {
              q: "Quels matériaux recommandez-vous ?",
              a: "Des choix stables, durables et adaptés à l'humidité et à l'usage fréquent.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Montréal, Laval et la Rive-Sud font partie de notre secteur.",
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
          heading: "Parlez-nous de votre salle de lavage",
          intro:
            "On vous aide à définir une solution durable, organisée et réaliste pour votre espace.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
