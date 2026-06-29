import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation clé en main",
    description:
      "Rénovation clé en main : coordination et exécution quand le projet implique plusieurs corps de métier.",
    path: "/services/renovation",
    ogAlt: "Rénovation clé en main Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Rénovation clé en main",
    description:
      "Coordination et exécution lorsque le projet implique plusieurs corps de métier.",
    url: SITE.url + "/services/renovation",
    serviceType: "Rénovation",
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
          heading: "Rénovation clé en main",
          description:
            "Coordination des travaux connexes au besoin pour réduire les imprévus et livrer un résultat cohérent du début à la fin.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Coordination", "Exécution", "Cohésion"],
          image: {
            src: "/images/hero/kitchen-hero.webp",
            alt: "Projet de rénovation sur mesure",
          },
          caption:
            "Quand plusieurs corps de métier doivent avancer proprement ensemble",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand la rénovation clé en main est pertinente",
          intro:
            "Cette approche devient pertinente quand le projet dépasse la seule fabrication et installation d'armoires.",
          badges: ["Plomberie", "Électricité", "Plancher", "Coordination"],
          cardTitle: "Ce que ça apporte",
          items: [
            "Moins de fragmentation entre intervenants.",
            "Un calendrier mieux cadré dès le départ.",
            "Une exécution plus cohérente sur le chantier.",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Types de rénovation",
          intro:
            "Accédez à la page adaptée selon la nature des travaux à coordonner.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Coordination de cuisine avec fabrication, pose et travaux connexes.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Rénovation de cuisine",
              },
              badges: ["Cuisine", "Coordination"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Gestion des contraintes d'humidité, plomberie et finition.",
              image: {
                src: "/images/spaces/vanité-salles-de-bain.webp",
                alt: "Rénovation de salle de bain",
              },
              badges: ["Salle de bain", "Humidité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Intégration du plancher dans la séquence globale de rénovation.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Rénovation de plancher",
              },
              badges: ["Plancher", "Transitions"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Projet plus large avec coordination de plusieurs intervenants.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Agrandissement de maison",
              },
              badges: ["Agrandissement", "Exécution"],
              footerCtaLabel: "Voir agrandissement",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reconstruction après dégât d'eau ou inondation, avec accompagnement de la réclamation d'assurance.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Rénovation après sinistre",
              },
              badges: ["Après dégât d'eau", "Reconstruction"],
              footerCtaLabel: "Voir après sinistre",
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
          heading: "Vous avez un projet avec plusieurs étapes à coordonner ?",
          intro:
            "On vous aide à cadrer un projet de rénovation plus propre, plus prévisible et mieux exécuté.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les types de rénovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Résidentiel et projets complexes",
        },
      },
    },
  ],
};
