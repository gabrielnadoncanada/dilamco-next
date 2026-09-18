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
        variant: "centered",
        props: {
          badges: ["Division armoires"],
          heading: "Armoires sur mesure pour six espaces de la maison",
          description:
            "L'entrepreneur général dessine, commande et pose. Aucun fournisseur à coordonner de votre côté.",
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
              description: "Îlot, garde-manger et hauteur de plafond exploitée",
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
              description: "Meuble-lavabo posé avec la céramique et la plomberie",
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
              description: "Cuve, colonnes et surface de pliage en continu",
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
              description: "Penderies et tiroirs calculés par type de vêtement",
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
              description: "Cinéma, bar, cellier ou bibliothèque intégrés",
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
              description: "Accueil, rangement technique et espaces de service",
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
      id: "division",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La division armoires en bref",
          intro:
            "Une division de l'entreprise générale, pas une deuxième entreprise à engager.",
          rows: [
            {
              label: "Licence",
              value: "Sous-catégorie RBQ 12, armoires et comptoirs, sur la nôtre",
            },
            {
              label: "Production",
              value: "Usine partenaire, commande lancée après le relevé",
            },
            {
              label: "Délai",
              value: "9 à 15 semaines entre l'approbation des dessins et la livraison",
            },
            {
              label: "Matériaux",
              value: "Bouleau massif aux tiroirs, contreplaqué aux caissons",
            },
            {
              label: "Pose",
              value: "Par notre équipe, à son rang dans la séquence des métiers",
            },
            {
              label: "Contrat",
              value: "Travaux et armoires réunis dans une seule soumission",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Vue d'ensemble des espaces sur mesure réalisés par Dilamco",
          },
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
          intro:
            "Estimation gratuite pour l'espace qui vous intéresse, et un seul contrat à signer.",
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
