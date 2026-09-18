import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Fabrication d'armoires sur mesure — usine partenaire",
    description:
      "Armoires sur mesure produites par notre usine partenaire, avec contrôle qualité et coordination de chantier assurés par Dilamco, entrepreneur général.",
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
      "Armoires sur mesure fabriquées par notre usine partenaire, sous contrôle qualité et coordination de Dilamco.",
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
          eyebrow: "Division armoires",
          heading: "Nos plans, notre usine partenaire, notre contrôle qualité",
          description:
            "La production part chez notre usine partenaire exclusive. Spécifications, suivi de commande et vérification à la réception restent chez nous.",
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
          badges: ["Sur mesure", "Contrôle qualité", "Un seul contrat"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Plans techniques et échantillons de matériaux pour une commande sur mesure",
          },
          caption: "Vérifié à la livraison, avant la pose",
          imageSide: "right",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "De la commande au chantier",
          steps: [
            {
              number: "1",
              title: "Commande",
              description:
                "Panneaux, finis et quincaillerie commandés sur les plans signés.",
            },
            {
              number: "2",
              title: "Production",
              description:
                "Caissons, portes et tiroirs produits par notre usine partenaire.",
            },
            {
              number: "3",
              title: "Contrôle",
              description:
                "Comptage, dimensions et finis vérifiés dès la réception.",
            },
            {
              number: "4",
              title: "Livraison",
              description:
                "Modules protégés et déposés au chantier selon l'ordre de pose.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "En bref",
          intro: "Qui produit, qui vérifie, et dans quels délais.",
          rows: [
            {
              label: "Délai",
              value: "9 à 15 semaines entre les plans signés et la pose",
            },
            {
              label: "Livrables",
              value: "Caissons, portes, tiroirs, tablettes et quincaillerie montés",
            },
            {
              label: "Qui fait quoi",
              value: "L'usine partenaire produit, Dilamco spécifie et vérifie",
            },
            {
              label: "Contrôle",
              value: "Chaque module ouvert et mesuré avant d'entrer au chantier",
            },
            {
              label: "Garantie",
              value: "Reprise des pièces non conformes à nos frais",
            },
            {
              label: "Entreposage",
              value: "Possible chez nous si le chantier prend du retard",
            },
          ],
          image: {
            src: "/images/services/fabrication-hero.webp",
            alt: "Modules d'armoires emballés en attente de livraison",
          },
          note: "Les délais de production sont confirmés par écrit au moment de la commande.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur la production",
          items: [
            {
              q: "Qui produit réellement vos armoires ?",
              a: "Notre usine partenaire exclusive, sur nos plans et nos spécifications. Dilamco garde le design, le contrôle à la réception, la pose et le service après coup.",
            },
            {
              q: "Et si une pièce arrive abîmée ?",
              a: "Elle est refusée à la réception et recommandée le jour même. C'est la raison d'être du contrôle avant l'entrée des modules au chantier.",
            },
            {
              q: "Peut-on ajouter un module en cours de route ?",
              a: "Avant le lancement en production, oui, sans frais de relance. Après, l'ajout part dans un second envoi, avec son propre délai.",
            },
            {
              q: "Sur mesure ou semi-sur-mesure ?",
              a: "Le sur mesure part de vos mesures, caisson par caisson. Le semi adapte des largeurs prédéfinies. L'écart se voit dans les angles et les hauteurs.",
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
          heading: "Lancer la production de vos armoires",
          intro:
            "On cadre matériaux, quincaillerie et échéancier avant d'envoyer la commande.",
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
          note: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
