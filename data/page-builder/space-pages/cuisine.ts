import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Cuisine sur mesure haut de gamme",
    description:
      "Cuisine sur mesure haut de gamme : conception, fabrication contrôlée et installation précise à Montréal, Laval et sur la Rive-Sud.",
    path: "/espaces/cuisine",
    ogAlt: "Cuisine sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine/" },
  ],
  service: {
    name: "Cuisine sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de cuisines sur mesure haut de gamme.",
    url: SITE.url + "/espaces/cuisine/",
    serviceType: "Cuisine sur mesure",
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
          heading: "Cuisine sur mesure, exécution clé en main à Montréal",
          description:
            "Conception, fabrication contrôlée et installation précise pour un espace durable, bien organisé et cohérent du plan à la finition.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Sur mesure", "clé en main", "Montréal"],
          image: {
            src: "/images/generated/spaces/space-cuisine-hero-01.webp",
            alt: "Cuisine sur mesure haut de gamme",
          },
          caption:
            "Résidentiel haut de gamme à Montréal, Laval et sur la Rive-Sud",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une cuisine sur mesure pensée pour durer",
          intro:
            "La valeur d'une cuisine se joue sur la structure, l'ergonomie et la qualité d'exécution, pas seulement sur le look final.",
          badges: ["Durabilité", "Ergonomie", "Coordination"],
          cardTitle: "Bon fit pour ce type de projet",
          items: [
            "Résidence principale ou projet long terme.",
            "Besoin d'un aménagement adapté à l'espace réel.",
            "Priorité à la stabilité, aux finis et à la coordination.",
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
          heading: "Un processus clair du design à l'installation",
          intro:
            "Un seul partenaire permet de mieux cadrer les décisions et de réduire la fragmentation sur le chantier.",
          steps: [
            {
              number: "1",
              title: "Conception",
              description:
                "Analyse de l'espace, organisation des zones de travail et validation des choix.",
            },
            {
              number: "2",
              title: "Matériaux",
              description:
                "Sélection de composants et finis adaptés à la durabilité et à l'usage quotidien.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée avec standards stables et qualité reproductible.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements précis, alignements nets et finitions vérifiées sur place.",
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
          heading: "Des choix de matériaux qui justifient le haut de gamme",
          intro:
            "La durabilité réelle est structurelle. Les composantes invisibles comptent autant que les surfaces.",
          items: [
            {
              title: "Structure des tiroirs",
              description:
                "Bois massif de bouleau pour une meilleure résistance et une sensation de solidité durable.",
            },
            {
              title: "Fond des tiroirs",
              description:
                "Contreplaqué de bouleau pour mieux supporter la charge et garder sa stabilité.",
            },
            {
              title: "Finition cohérente",
              description:
                "Choix alignés avec l'entretien, la longévité et l'usage réel de la cuisine.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Détail de matériaux pour cuisine sur mesure",
          },
          cardTitle: "Pourquoi ça compte",
          cardDescription:
            "Une bonne structure réduit les remplacements prématurés et protège la qualité d'usage sur plusieurs années.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets cuisines en vedette",
          intro:
            "Quelques réalisations qui montrent le niveau d'exécution, pas seulement l'esthétique.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Cuisine sur mesure avec implantation précise et finition soignée.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Projet cuisine sur mesure à Montréal",
              },
              badges: ["Montréal", "Cuisine"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Projet cuisine conçu pour un usage quotidien et une durabilité à long terme.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Projet cuisine sur mesure à Laval",
              },
              badges: ["Laval", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Exécution complète avec coordination du projet et détails maîtrisés.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-03.webp",
                alt: "Projet cuisine sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "clé en main"],
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
          heading: "FAQ - cuisine sur mesure",
          intro:
            "Réponses claires aux questions les plus fréquentes avant de lancer un projet.",
          items: [
            {
              q: "Combien coûte une cuisine sur mesure ?",
              a: "Le prix dépend de l'aménagement, des matériaux, des dimensions et du niveau de coordination requis.",
            },
            {
              q: "Quelle est la différence avec une solution standard ?",
              a: "Le sur mesure permet d'adapter l'espace, d'améliorer la structure et de mieux contrôler le résultat final.",
            },
            {
              q: "Est-ce que vous faites aussi l'installation ?",
              a: "Oui. L'objectif est justement d'assurer une exécution cohérente du design à la pose.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Nous desservons Montréal, Laval et la Rive-Sud.",
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
          heading: "Parlez-nous de votre projet de cuisine",
          intro:
            "Obtenez une soumission structurée adaptée à votre espace, vos priorités et votre niveau de finition.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
