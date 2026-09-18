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
            "La production est confiée à notre usine partenaire exclusive. Les plans, les spécifications et la vérification à la réception restent chez nous.",
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
            alt: "Plans techniques et échantillons de matériaux pour fabrication sur mesure",
          },
          caption: "Vérifié à la livraison, avant la pose",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que veut dire sur mesure",
          description:
            "Chaque caisson est dimensionné d'après le relevé de votre pièce, pas choisi dans une grille de largeurs standard.",
          cards: [
            {
              title: "Dimensions réelles",
              description:
                "Angles, hauteurs et espaces atypiques exploités au complet.",
            },
            {
              title: "Matériaux spécifiés",
              description:
                "Panneau et quincaillerie choisis pièce par pièce, selon l'usage.",
            },
            {
              title: "Alignements maîtrisés",
              description:
                "Jeux et proportions décidés entre modules avant la production.",
            },
            {
              title: "Un seul responsable",
              description:
                "Plans, approvisionnement, réception et pose relèvent de Dilamco.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "De la validation à la livraison",
          intro:
            "Quatre étapes entre les plans signés et les caissons déposés sur le chantier.",
          items: [
            {
              title: "Validation",
              description: "Design, mesures et contraintes arrêtés avec vous.",
            },
            {
              title: "Approvisionnement",
              description: "Panneaux, finis et quincaillerie commandés sur spécification.",
            },
            {
              title: "Production",
              description: "Caissons, portes et tiroirs produits par notre usine partenaire.",
            },
            {
              title: "Réception",
              description: "Contrôle qualité à la livraison, avant l'entrée sur le chantier.",
            },
          ],
          actions: [
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-cuisine-hero-01.webp",
            alt: "Cuisine sur mesure avec fabrication précise",
          },
          cardTitle: "Notre rôle",
          cardDescription:
            "Nous spécifions, nous vérifions, nous posons. Vous avez un seul interlocuteur.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Qui produit réellement vos armoires ?",
              a: "Notre usine partenaire exclusive, selon nos plans et nos spécifications. Dilamco garde le design, le choix des matériaux, le contrôle qualité à la réception, la pose et le service après coup.",
            },
            {
              q: "Quels sont les délais ?",
              a: "Comptez généralement 9 à 15 semaines entre la validation du design et la pose. L'échéancier ferme est confirmé une fois les plans arrêtés et inscrit au contrat.",
            },
            {
              q: "Sur mesure ou semi-custom ?",
              a: "Le sur mesure part de vos mesures réelles, caisson par caisson. Le semi-custom adapte des modules prédéfinis dans quelques largeurs. L'écart se voit dans les angles et les hauteurs.",
            },
            {
              q: "Pouvez-vous rénover la pièce au complet ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27. Permis, démolition, plomberie, électricité, plancher et pose des armoires sous un seul contrat écrit.",
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
          heading: "Un projet construit pour durer ?",
          intro:
            "On cadre les matériaux, la quincaillerie et l'échéancier avant la mise en production.",
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
