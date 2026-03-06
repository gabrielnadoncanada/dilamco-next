import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation cle en main",
    description:
      "Renovation cle en main : coordination et execution lorsque le projet implique plusieurs corps de metier.",
    path: "/services/renovation/",
    ogAlt: "Renovation cle en main Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation cle en main", url: SITE.url + "/services/renovation/" },
  ],
  service: {
    name: "Renovation cle en main",
    description:
      "Coordination et execution lorsque le projet implique plusieurs corps de metier.",
    url: SITE.url + "/services/renovation/",
    serviceType: "Renovation",
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
          heading: "Renovation cle en main",
          description:
            "Coordination des travaux connexes au besoin pour reduire les imprevus et livrer un resultat coherent du debut a la fin.",
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
          badges: ["Coordination", "Execution", "Cohesion"],
          image: {
            src: "/images/hero/kitchen-hero.webp",
            alt: "Projet de renovation sur mesure",
          },
          caption: "Quand plusieurs corps de metier doivent avancer proprement ensemble",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand la renovation cle en main est pertinente",
          intro:
            "Cette approche devient pertinente quand le projet depasse la seule fabrication et installation d'armoires.",
          badges: ["Plomberie", "Electricite", "Plancher", "Coordination"],
          cardTitle: "Ce que ca apporte",
          items: [
            "Moins de fragmentation entre intervenants.",
            "Un calendrier mieux cadre des le depart.",
            "Une execution plus coherente sur le chantier.",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design/",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-badges-cta",
        props: {
          heading: "Types de renovation",
          intro:
            "Accedez a la page adaptee selon la nature des travaux a coordonner.",
          items: [
            {
              title: "Renovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Coordination de cuisine avec fabrication, pose et travaux connexes.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Renovation de cuisine",
              },
              badges: ["Cuisine", "Coordination"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Renovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Gestion des contraintes d'humidite, plomberie et finition.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Renovation de salle de bain",
              },
              badges: ["Salle de bain", "Humidite"],
              footerCtaLabel: "Voir salle de bain",
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
              badges: ["Agrandissement", "Execution"],
              footerCtaLabel: "Voir agrandissement",
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
          heading: "Vous avez un projet avec plusieurs etapes a coordonner ?",
          intro:
            "On vous aide a cadrer un projet de renovation plus propre, plus previsible et mieux execute.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir les types de renovation",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          note: "Residentiel et projets complexes",
        },
      },
    },
  ],
};
