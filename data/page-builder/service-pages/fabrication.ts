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
          heading: "Qui produit vos armoires et qui les vérifie",
          description:
            "Nos armoires sont produites par notre usine partenaire, sur nos plans, et nous les vérifions à l'arrivée.",
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
          badges: ["Sur mesure", "Un seul contrat"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Plans techniques et échantillons de matériaux pour une commande sur mesure",
          },
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
          heading: "De la commande à la livraison chez vous",
          steps: [
            {
              number: "1",
              title: "On passe la commande",
              description:
                "On commande les panneaux, les finis et la quincaillerie sur vos plans signés.",
            },
            {
              number: "2",
              title: "L'usine produit",
              description:
                "Notre usine partenaire monte les caissons, les portes et les tiroirs.",
            },
            {
              number: "3",
              title: "On vérifie tout",
              description:
                "On compte les pièces et on mesure chaque module dès qu'il arrive.",
            },
            {
              number: "4",
              title: "On livre chez vous",
              description:
                "On protège les modules et on les dépose dans l'ordre où on va les poser.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La production en bref",
          rows: [
            {
              label: "Combien de temps",
              value:
                "Il s'écoule 9 à 15 semaines entre vos plans signés et la journée de pose.",
            },
            {
              label: "Ce que vous recevez",
              value:
                "Des caissons, des portes, des tiroirs et des tablettes déjà montés.",
            },
            {
              label: "Garantie",
              value:
                "Une pièce non conforme est remplacée à nos frais, pas aux vôtres.",
            },
            {
              label: "Si le chantier retarde",
              value:
                "On garde vos armoires chez nous jusqu'à ce que la pièce soit prête.",
            },
          ],
          image: {
            src: "/images/services/fabrication-hero.webp",
            alt: "Modules d'armoires emballés en attente de livraison",
          },
          note: "La date de livraison vous est confirmée par écrit dès la commande.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur la fabrication des armoires",
          items: [
            {
              q: "Qui produit réellement vos armoires ?",
              a: "Notre usine partenaire exclusive, sur nos plans et nos spécifications. Dilamco garde le design, le contrôle à la réception, la pose et le service après coup.",
            },
            {
              q: "Et si une pièce arrive abîmée ?",
              a: "Elle est refusée à la réception et commandée de nouveau le jour même. C'est la raison du contrôle avant l'entrée des modules au chantier.",
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
            "On arrête les matériaux, la quincaillerie et les dates avant d'envoyer la commande.",
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
        },
      },
    },
  ],
};
