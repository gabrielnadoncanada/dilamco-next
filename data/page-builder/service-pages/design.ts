import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Service de design",
    description:
      "Service de design : optimisation de l'espace, planification et choix des materiaux pour cuisines, vanites, walk-in et projets commerciaux.",
    path: "/services/design/",
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
      "Optimisation de l'espace, planification et choix des materiaux pour cuisines, vanites, walk-in et projets commerciaux.",
    url: SITE.url + "/services/design/",
    serviceType: "Design",
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
          heading: "Service de design, structurer le projet avant de fabriquer",
          description:
            "Le design sert a cadrer l'usage, organiser l'espace, integrer les contraintes et prendre les bonnes decisions avant la fabrication et l'installation.",
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
          badges: ["Usage reel", "Planification", "Execution"],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Plan de cuisine sur mesure et echantillons de materiaux",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "role",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Le role du design dans un projet sur mesure",
          description:
            "Un bon design rend le projet clair et executable. Il permet d'anticiper les contraintes et d'eviter les reprises en fabrication ou les compromis visibles a la fin.",
          cards: [
            {
              title: "Optimiser l'espace",
              description:
                "Circulation, zones de travail, degagements et hauteurs adaptees a votre usage.",
            },
            {
              title: "Structurer le rangement",
              description:
                "Acces, organisation et priorites definies avant la production.",
            },
            {
              title: "Aligner les decisions",
              description:
                "Materiaux, finition, calendrier et niveau de complexite restes coherents.",
            },
          ],
          columns: "3",
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
            "Le design Dilamco est oriente usage et execution, pas inspiration deconnectee du chantier.",
          items: [
            {
              title: "Analyse des besoins",
              description: "Vos priorites, votre usage et vos contraintes.",
            },
            {
              title: "Organisation fonctionnelle",
              description: "Plan d'espace et logique de rangement.",
            },
            {
              title: "Choix materiaux et finis",
              description: "Decisions coherentes avec durabilite et entretien.",
            },
            {
              title: "Preparation a l'execution",
              description:
                "Un design pense pour etre fabrique et pose proprement.",
            },
          ],
          actions: [
            {
              label: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Design sur mesure en cours de planification",
          },
          cardTitle: "Pourquoi c'est utile",
          cardDescription:
            "Plus les decisions sont prises tot, plus le projet est previsible et executable.",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-badges-cta",
        props: {
          heading: "Design par type de projet",
          intro:
            "La logique de design change selon l'espace, les contraintes et le niveau d'usage.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine/",
              description:
                "Zones de travail, circulation, ilot, rangement et integration.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure",
              },
              badges: ["Ergonomie", "Rangement"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description:
                "Contraintes d'humidite, rangement et ergonomie quotidienne.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Salle de bain sur mesure",
              },
              badges: ["Humidite", "Finitions"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in/",
              description:
                "Organisation par zones, accessibilite et rangement vertical.",
              image: {
                src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
                alt: "Walk-in sur mesure",
              },
              badges: ["Organisation", "Acces"],
              footerCtaLabel: "Voir walk-in",
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
          heading: "FAQ - design",
          intro:
            "Reponses claires sur le role du design dans un projet sur mesure.",
          items: [
            {
              q: "Le design est-il obligatoire?",
              a: "Dans un projet sur mesure, il sert a cadrer les decisions avant la fabrication et a reduire les compromis tardifs.",
            },
            {
              q: "Peut-on passer directement a la fabrication?",
              a: "Seulement si les contraintes, l'organisation et les dimensions sont deja clarifiees de facon fiable.",
            },
            {
              q: "Est-ce que ca fonctionne en condo?",
              a: "Oui. Le design est particulierement utile en condo pour gerer l'acces, l'espace et l'integration des equipements.",
            },
            {
              q: "Quand intervient le design dans le projet?",
              a: "Au debut, avant la fabrication, pour valider la logique d'espace, les choix de materiaux et les contraintes techniques.",
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
            "Dites-nous votre espace, votre secteur et votre echeance. On vous aide a cadrer un projet realiste et executable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
            },
          ],
          note: "Reponse generalement sous 24-48 h.",
        },
      },
    },
  ],
};
