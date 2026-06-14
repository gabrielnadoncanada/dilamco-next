import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Service de design",
    description:
      "Service de design : optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux.",
    path: "/services/design",
    ogAlt: "Service de design Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Service de design", url: SITE.url + "/services/design/" },
  ],
  service: {
    name: "Service de design",
    description:
      "Optimisation de l'espace, planification et choix des matériaux pour cuisines, vanités, walk-in et projets commerciaux.",
    url: SITE.url + "/services/design/",
    serviceType: "Design",
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
          heading: "Service de design, structurer le projet avant de fabriquer",
          description:
            "Le design sert à cadrer l'usage, organiser l'espace, intégrer les contraintes et prendre les bonnes décisions avant la fabrication et l'installation.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Usage réel", "Planification", "Exécution"],
          image: {
            src: "/images/generated/services/service-design-hero-01.webp",
            alt: "Plan de cuisine sur mesure et échantillons de matériaux",
          },
          caption: "Montréal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "rôle",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Le rôle du design dans un projet sur mesure",
          description:
            "Un bon design rend le projet clair et exécutable. Il permet d'anticiper les contraintes et d'éviter les reprises en fabrication ou les compromis visibles à la fin.",
          cards: [
            {
              title: "Optimiser l'espace",
              description:
                "Circulation, zones de travail, dégagements et hauteurs adaptées à votre usage.",
            },
            {
              title: "Structurer le rangement",
              description:
                "Accès, organisation et priorités définies avant la production.",
            },
            {
              title: "Aligner les décisions",
              description:
                "Matériaux, finition, calendrier et niveau de complexité restent cohérents.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "includes",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce que comprend le service de design",
          intro:
            "Le design Dilamco est orienté usage et exécution, pas inspiration déconnectée du chantier.",
          items: [
            {
              title: "Analyse des besoins",
              description: "Vos priorités, votre usage et vos contraintes.",
            },
            {
              title: "Organisation fonctionnelle",
              description: "Plan d'espace et logique de rangement.",
            },
            {
              title: "Choix matériaux et finis",
              description: "Décisions cohérentes avec durabilité et entretien.",
            },
            {
              title: "Préparation à l'exécution",
              description:
                "Un design pensé pour être fabriqué et posé proprement.",
            },
          ],
          actions: [
            {
              label: "Voir la fabrication",
              href: "/services/fabrication",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Design sur mesure en cours de planification",
          },
          cardTitle: "Pourquoi c'est utile",
          cardDescription:
            "Plus les décisions sont prises tôt, plus le projet est prévisible et exécutable.",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Design par type de projet",
          intro:
            "La logique de design change selon l'espace, les contraintes et le niveau d'usage.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Zones de travail, circulation, îlot, rangement et intégration.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure pensée pour l'usage réel",
              },
              badges: ["Ergonomie", "Rangement"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description:
                "Contraintes d'humidité, rangement et ergonomie quotidienne.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure pensée pour l'humidité",
              },
              badges: ["Humidité", "Finitions"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description:
                "Organisation par zones, accessibilité et rangement vertical.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Walk-in sur mesure pensé pour l'organisation",
              },
              badges: ["Organisation", "Accès"],
              footerCtaLabel: "Voir walk-in",
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
          heading: "FAQ - design",
          intro:
            "Réponses claires sur le rôle du design dans un projet sur mesure.",
          items: [
            {
              q: "Le design est-il obligatoire?",
              a: "Dans un projet sur mesure, il sert à cadrer les décisions avant la fabrication et à réduire les compromis tardifs.",
            },
            {
              q: "Peut-on passer directement à la fabrication?",
              a: "Seulement si les contraintes, l'organisation et les dimensions sont déjà clarifiées de façon fiable.",
            },
            {
              q: "Est-ce que ça fonctionne en condo?",
              a: "Oui. Le design est particulièrement utile en condo pour gérer l'accès, l'espace et l'intégration des équipements.",
            },
            {
              q: "Quand intervient le design dans le projet?",
              a: "Au début, avant la fabrication, pour valider la logique d'espace, les choix de matériaux et les contraintes techniques.",
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
          heading: "Parlez-nous de votre projet",
          intro:
            "Dites-nous votre espace, votre secteur et votre échéance. On vous aide à cadrer un projet réaliste et exécutable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "outline",
            },
          ],
          note: "Réponse généralement sous 24-48 h.",
        },
      },
    },
  ],
};
