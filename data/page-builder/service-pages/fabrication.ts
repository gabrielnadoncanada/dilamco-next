import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Service de fabrication",
    description:
      "Fabrication sur mesure : durabilite, precision et finition haut de gamme pour un resultat coherent et durable.",
    path: "/services/fabrication/",
    ogAlt: "Service de fabrication Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Service de fabrication", url: SITE.url + "/services/fabrication/" },
  ],
  service: {
    name: "Service de fabrication",
    description:
      "Fabrication sur mesure : durabilite, precision et finition haut de gamme.",
    url: SITE.url + "/services/fabrication/",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image-badges",
        props: {
          eyebrow: "Dilamco - Services",
          heading: "Fabrication sur mesure, precision, constance et durabilite",
          description:
            "La fabrication determine la solidite, la stabilite et la longevite du projet. L'objectif est un resultat coherent, durable et propre a installer.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos realisations",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Precision", "Durabilite", "Sur mesure"],
          image: {
            src: "/images/services/fabrication-hero-v2.webp",
            alt: "Plans techniques et echantillons de materiaux pour fabrication sur mesure",
          },
          caption: "Materiaux, assemblage et details qui tiennent dans le temps",
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
            "Le sur mesure vise une adaptation reelle a l'espace et a l'usage, pas seulement une coupe a la bonne largeur.",
          badges: ["Dimensions reelles", "Assemblage coherent", "Usage reel"],
          cardTitle: "Ce qui fait la difference",
          items: [
            "Adaptation a l'espace et aux contraintes reelles.",
            "Alignements et proportions maitrises entre modules.",
            "Choix de materiaux et quincaillerie selon l'usage.",
          ],
          actions: [
            {
              label: "Voir les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Quincaillerie",
              href: "/materiaux/quincaillerie/",
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
          heading: "Processus de fabrication",
          intro:
            "Chaque etape prepare la suivante pour reduire les reprises et faciliter une installation propre.",
          steps: [
            {
              number: "1",
              title: "Validation",
              description:
                "Design, mesures et contraintes clarifies avant production.",
            },
            {
              number: "2",
              title: "Selection",
              description:
                "Materiaux choisis selon durabilite, humidite et entretien.",
            },
            {
              number: "3",
              title: "Assemblage",
              description:
                "Modules, portes et tiroirs fabriques avec coherence et precision.",
            },
            {
              number: "4",
              title: "Preparation",
              description:
                "Controle final et mise en condition pour une pose precise.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-badges-cta",
        props: {
          heading: "Fabrication par type de projet",
          intro:
            "Le niveau d'usage et les contraintes changent selon l'espace, mais le standard d'execution reste eleve.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine/",
              description:
                "Modules, ilots, rangement optimise et integration electromenagers.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure",
              },
              badges: ["Cuisine", "Rangement"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description: "Vanites et rangement adaptes a l'humidite.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Salle de bain sur mesure",
              },
              badges: ["Humidite", "Durabilite"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial/",
              description:
                "Usage intensif, durabilite et coherence fonctionnelle.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Amenagement commercial sur mesure",
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
      frame: { divider: "bottom" },
      content: {
        type: "split",
        variant: "faq-accordion",
        props: {
          heading: "FAQ - fabrication",
          intro:
            "Reponses claires sur la fabrication sur mesure et ses implications.",
          items: [
            {
              q: "Quelle est la difference entre sur mesure et semi-custom?",
              a: "Le sur mesure s'adapte a l'espace exact alors que le semi-custom part de modules predefinis avec certaines variations.",
            },
            {
              q: "Quels materiaux vieillissent le mieux?",
              a: "Cela depend de l'espace, de l'humidite, de l'entretien, des chants, de la quincaillerie et de l'installation.",
            },
            {
              q: "Est-ce personnalisable a 100 %?",
              a: "L'objectif est d'adapter le projet a l'espace et a l'usage, dans les limites des contraintes techniques reelles.",
            },
            {
              q: "Quels sont les delais de fabrication?",
              a: "Ils varient selon la complexite, la disponibilite et la coordination avec l'installation.",
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
          heading: "Vous voulez un projet fabrique pour durer ?",
          intro:
            "On vous aide a cadrer les bons choix techniques, materiaux et details d'execution avant la production.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          note: "Montreal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
