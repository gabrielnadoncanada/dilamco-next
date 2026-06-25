import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Service de fabrication",
    description:
      "Fabrication sur mesure : durabilité, précision et finition haut de gamme pour un résultat cohérent et durable.",
    path: "/services/fabrication",
    ogAlt: "Service de fabrication Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Service de fabrication",
      url: SITE.url + "/services/fabrication",
    },
  ],
  service: {
    name: "Service de fabrication",
    description:
      "Fabrication sur mesure : durabilité, précision et finition haut de gamme.",
    url: SITE.url + "/services/fabrication",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading: "Fabrication sur mesure, précision, constance et durabilité",
          description:
            "La fabrication détermine la solidité, la stabilité et la longévité du projet. L'objectif est un résultat cohérent, durable et propre à installer.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Précision", "Durabilité", "Sur mesure"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Plans techniques et échantillons de matériaux pour fabrication sur mesure",
          },
          caption:
            "Matériaux, assemblage et détails qui tiennent dans le temps",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce que signifie vraiment fabrication sur mesure",
          intro:
            "Le sur mesure vise une adaptation réelle à l'espace et à l'usage, pas seulement une coupe à la bonne largeur.",
          badges: ["Dimensions réelles", "Assemblage cohérent", "Usage réel"],
          cardTitle: "Ce qui fait la différence",
          items: [
            "Adaptation à l'espace et aux contraintes réelles.",
            "Alignements et proportions maîtrisées entre modules.",
            "Choix de matériaux et quincaillerie selon l'usage.",
          ],
          actions: [
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
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
          heading: "Processus de fabrication",
          intro:
            "Chaque étape prépare la suivante pour réduire les reprises et faciliter une installation propre.",
          steps: [
            {
              number: "1",
              title: "Validation",
              description:
                "Design, mesures et contraintes clarifiés avant production.",
            },
            {
              number: "2",
              title: "Sélection",
              description:
                "Matériaux choisis selon durabilité, humidité et entretien.",
            },
            {
              number: "3",
              title: "Assemblage",
              description:
                "Modules, portes et tiroirs fabriqués avec cohérence et précision.",
            },
            {
              number: "4",
              title: "Préparation",
              description:
                "Contrôle final et mise en condition pour une pose précise.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Fabrication par type de projet",
          intro:
            "Le niveau d'usage et les contraintes changent selon l'espace, mais le standard d'exécution reste élevé.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Modules, îlots, rangement optimisé et intégration électroménagers.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec fabrication précise",
              },
              badges: ["Cuisine", "Rangement"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description: "Vanités et rangement adaptés à l'humidité.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec fabrication durable",
              },
              badges: ["Humidité", "Durabilité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Usage intensif, durabilité et cohérence fonctionnelle.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Aménagement commercial sur mesure avec fabrication robuste",
              },
              badges: ["Commercial", "Usage intensif"],
              footerCtaLabel: "Voir commercial",
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
          heading: "FAQ - fabrication",
          intro:
            "Réponses claires sur la fabrication sur mesure et ses implications.",
          items: [
            {
              q: "Quelle est la différence entre sur mesure et semi-custom?",
              a: "Le sur mesure s'adapte à l'espace exact alors que le semi-custom part de modules prédéfinis avec certaines variations.",
            },
            {
              q: "Quels matériaux vieillissent le mieux?",
              a: "Cela dépend de l'espace, de l'humidité, de l'entretien, des chants, de la quincaillerie et de l'installation.",
            },
            {
              q: "Est-ce personnalisable à 100 %?",
              a: "L'objectif est d'adapter le projet à l'espace et à l'usage, dans les limites des contraintes techniques réelles.",
            },
            {
              q: "Quels sont les délais de fabrication?",
              a: "Ils varient selon la complexité, la disponibilité et la coordination avec l'installation.",
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
          heading: "Vous voulez un projet fabriqué pour durer ?",
          intro:
            "On vous aide à cadrer les bons choix techniques, matériaux et détails d'exécution avant la production.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "Montréal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
