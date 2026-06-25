import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Services",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main.",
    path: "/services",
    ogAlt: "Services Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "Services Dilamco",
    description:
      "Design, fabrication sur mesure, installation et rénovation clé en main selon la portée du projet.",
    url: SITE.url + "/services",
    serviceType: "Services sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading:
            "Services : design, fabrication, installation et rénovation clé en main",
          description:
            "Selon le projet, nous prenons en charge l'ensemble du plan à la finition.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Vue d'ensemble des services Dilamco",
          },
          caption: "De la planification à l'installation selon la portée",
        },
      },
    },
    {
      id: "primary-services",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Nos services principaux",
          intro: "Choisissez le service qui correspond à votre étape.",
          columns: "2",
          items: [
            {
              title: "Design",
              description: "Cadrage du plan, ergonomie et choix de matériaux.",
              href: "/services/design",
              badges: ["Planification", "Usage"],
              ctaLabel: "Voir le design",
            },
            {
              title: "Fabrication",
              description: "Production sur mesure orientée durabilité.",
              href: "/services/fabrication",
              badges: ["Sur mesure", "Durabilité"],
              ctaLabel: "Voir la fabrication",
            },
            {
              title: "Installation",
              description: "Ajustements et finition sur place.",
              href: "/services/installation",
              badges: ["Pose", "Précision"],
              ctaLabel: "Voir l'installation",
            },
            {
              title: "Rénovation clé en main",
              description: "Coordination des travaux connexes selon le projet.",
              href: "/services/renovation",
              badges: ["Coordination", "Exécution"],
              ctaLabel: "Voir la rénovation",
            },
          ],
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Rénovation par type",
          columns: "2",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              badges: ["Cuisine", "Coordination"],
              ctaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation salle de bain",
              href: "/services/renovation/salle-de-bain",
              badges: ["Humidité", "Technique"],
              ctaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              badges: ["Transitions", "Finition"],
              ctaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Portée", "Coordination"],
              ctaLabel: "Voir l'agrandissement",
            },
          ],
        },
      },
    },
    {
      id: "turnkey-approach",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand choisir une approche clé en main",
          intro:
            "Cette approche devient pertinente quand le projet dépasse la seule fabrication et installation d'armoires.",
          badges: ["Cuisine", "Salle de bain", "Coordination"],
          cardTitle: "Situations où l'approche est pertinente",
          items: [
            "Rénovation complète de cuisine.",
            "Salle de bain avec contraintes techniques.",
            "Projet multi-intervenants.",
          ],
          actions: [
            {
              label: "Voir la rénovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
          ],
        },
      },
    },
    {
      id: "quality",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Qualité et durabilité",
          intro:
            "Le haut de gamme repose sur un système cohérent : matériaux, assemblage, quincaillerie et installation.",
          columns: "3",
          items: [
            {
              title: "Pourquoi le contreplaqué",
              description:
                "Voir pourquoi la structure du panneau change la stabilité et la longévité.",
              href: "/materiaux/contreplaque",
              badges: ["Structure", "Durabilité"],
              ctaLabel: "Voir le contreplaqué",
            },
            {
              title: "Quincaillerie",
              description:
                "Comprendre l'impact des mécanismes sur le confort d'usage et l'usure.",
              href: "/materiaux/quincaillerie",
              badges: ["Usage", "Précision"],
              ctaLabel: "Voir la quincaillerie",
            },
            {
              title: "Tous les matériaux",
              description:
                "Comparer les options selon l'espace, l'humidité et la finition attendue.",
              href: "/materiaux",
              badges: ["Comparatif", "Choix techniques"],
              ctaLabel: "Voir les matériaux",
            },
          ],
        },
      },
    },
  ],
};
