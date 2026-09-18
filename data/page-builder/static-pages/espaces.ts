import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Espaces sur mesure — notre division armoires",
    description:
      "Cuisine, salle de bain, walk-in, salle de lavage, sous-sol et commercial : armoires sur mesure par Dilamco, entrepreneur général licencié RBQ.",
    path: "/espaces",
    ogAlt: "Espaces sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces" },
  ],
  service: {
    name: "Espaces sur mesure",
    description:
      "Pages piliers pour cuisines, salles de bain, walk-ins, salles de lavage et projets commerciaux.",
    url: SITE.url + "/espaces",
    serviceType: "Espaces sur mesure",
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
          heading: "Armoires sur mesure, intégrées à votre rénovation",
          description:
            "Cuisine, salle de bain, walk-in, sous-sol, salle de lavage ou local commercial : un seul contrat, un seul responsable.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Sur mesure", "Clé en main"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Espaces sur mesure Dilamco",
          },
          caption: "Montréal · Laval · Rive-Sud",
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Choisissez votre espace",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description: "Îlot, garde-manger et armoires jusqu'au plafond.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Armoires de cuisine sur mesure haut de gamme",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description: "Vanités simple ou double, conçues pour l'humidité.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Vanité de salle de bain sur mesure",
              },
              badges: ["Vanité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage",
              description: "Comptoir de pliage, colonnes et plomberie ajustés.",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Rangement"],
              footerCtaLabel: "Voir la salle de lavage",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description: "Penderie, tiroirs et tablettes du mur au plafond.",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Walk-in sur mesure",
              },
              badges: ["Garde-robe"],
              footerCtaLabel: "Voir le walk-in",
            },
            {
              title: "Sous-sol",
              href: "/espaces/sous-sol",
              description: "Cinéma maison, bar, cellier et bibliothèque.",
              image: {
                src: "/images/generated/spaces/espaces-card-sous-sol-01.webp",
                alt: "Aménagement de sous-sol sur mesure",
              },
              badges: ["Cinéma maison"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description: "Bureaux, commerces et améliorations locatives.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Aménagement commercial sur mesure",
              },
              badges: ["Bureaux"],
              footerCtaLabel: "Voir le commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi passer par l'entrepreneur général",
          description:
            "Notre licence RBQ couvre les armoires et les comptoirs. Les armoires arrivent au bon moment, dans la séquence du chantier.",
          cards: [
            {
              title: "Une seule soumission",
              description: "Travaux et armoires chiffrés ensemble, un fournisseur de moins à gérer.",
            },
            {
              title: "Mesures après démolition",
              description: "Prises quand les murs sont à leur position définitive.",
            },
            {
              title: "Un seul responsable",
              description: "Plomberie, électricité, plancher et pose coordonnés par nous.",
            },
          ],
          columns: "3",
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
              q: "Quels espaces couvrez-vous ?",
              a: "Cuisine, salle de bain, salle de lavage, walk-in et garde-robe, sous-sol et locaux commerciaux. Chaque espace a ses contraintes d'humidité, de dimensions et d'usage, prises en compte au design.",
            },
            {
              q: "Quel est le délai ?",
              a: "De 9 à 15 semaines entre la validation du design et l'installation. Quand les armoires font partie d'une rénovation, la commande est calée sur l'échéancier du chantier.",
            },
            {
              q: "Quelle différence avec une solution standard ?",
              a: "Les modules standards imposent leurs dimensions à la pièce et laissent des espaces perdus. Le sur mesure part de votre espace réel, avec bois massif et contreplaqué de bouleau sur les éléments structurants.",
            },
            {
              q: "Pouvez-vous faire la rénovation complète ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : permis, démolition, plomberie, électricité, plancher, peinture et pose des armoires, coordonnés par un seul responsable, au contrat écrit.",
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
          heading: "Parlez-nous de votre espace",
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
