import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement de maison",
    description:
      "Agrandissement de maison cle en main : planification, coordination et execution complete.",
    path: "/services/renovation/agrandissement-de-maison/",
    ogAlt: "Agrandissement de maison Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    {
      name: "Agrandissement de maison",
      url: SITE.url + "/services/renovation/agrandissement-de-maison/",
    },
  ],
  service: {
    name: "Agrandissement de maison",
    description:
      "Planification, coordination et execution complete pour des projets d'agrandissement residentiel.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison/",
    serviceType: "Agrandissement de maison",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image-badges",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Agrandissement de maison, planification, coordination et execution complete",
          description:
            "Un agrandissement est un projet structurant qui exige une planification claire de la structure, de l'enveloppe et de l'integration a l'existant.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          badges: ["Structure", "Coordination", "Integration"],
          image: {
            src: "/images/spaces/commercial.webp",
            alt: "Agrandissement de maison",
          },
          caption: "Projet residentiel structurant, du plan a l'execution",
        },
      },
    },
    {
      id: "faq",
      frame: { divider: "bottom" },
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - agrandissement de maison",
          intro: "Reponses claires sur faisabilite, delais et prise en charge.",
          items: [
            {
              q: "Est-ce que Dilamco gere des agrandissements complets?",
              a: "Oui, selon la portee definie, avec planification, coordination et execution complete.",
            },
            {
              q: "Quels types d'agrandissement sont possibles?",
              a: "La faisabilite depend de la maison existante, du terrain et des reglements applicables.",
            },
            {
              q: "Est-ce un projet cle en main?",
              a: "Oui lorsque le projet le requiert. Le niveau de coordination est defini clairement a la soumission.",
            },
            {
              q: "Combien de temps dure un agrandissement?",
              a: "La duree varie selon la complexite, la superficie et les contraintes. Un echeancier est etabli apres analyse.",
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
          heading: "Vous planifiez un agrandissement residentiel ?",
          intro:
            "On vous aide a cadrer la faisabilite, la sequence et la coordination pour un projet integre a l'existant.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
