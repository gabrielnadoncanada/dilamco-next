import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Réalisations de cuisines & armoires sur mesure",
    description:
      "Réalisations sur mesure : cuisines, vanités, walk-in, salles de lavage et projets commerciaux, livrés par Dilamco, entrepreneur général licencié RBQ.",
    path: "/projets",
    ogAlt: "Réalisations Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Réalisations",
          heading: "Cuisines, vanités, rangement et commercial",
          description:
            "Des chantiers réels menés dans le Grand Montréal par un entrepreneur général licencié RBQ.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
            },
          ],
          badges: ["Cas réels", "Montréal", "Laval", "Rive-Sud"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Réalisation sur mesure Dilamco",
          },
          caption: "Cuisine haut de gamme · Laval",
        },
      },
    },

    {
      id: "categories",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider-lightbox",
        props: {
          heading: "Explorer les projets",
          intro: "Choisissez l'univers le plus proche de votre projet.",
          items: [
            {
              title: "Cuisines",
              href: "/projets/cuisine",
              description: "Rangement optimisé et finition précise.",
              footerCtaLabel: "Voir les cuisines",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Projets de cuisine sur mesure",
              },
            },
            {
              title: "Salles de bain & vanités",
              href: "/projets/salle-de-bain",
              description: "Vanités durables, conçues pour l'humidité.",
              footerCtaLabel: "Voir les salles de bain",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Projets de vanité de salle de bain sur mesure",
              },
            },
            {
              title: "Walk-in & rangement",
              href: "/projets/walk-in",
              description: "Rangement sur mesure, optimisé et fonctionnel.",
              footerCtaLabel: "Voir les walk-in",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Projets de walk-in et rangement sur mesure",
              },
            },
            {
              title: "Salles de lavage",
              href: "/projets/salle-de-lavage",
              description: "Salles de lavage organisées et durables.",
              footerCtaLabel: "Voir les salles de lavage",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Projets de salle de lavage sur mesure",
              },
            },
            {
              title: "Commercial",
              href: "/projets/commercial",
              description: "Bureaux et commerces livrés prêts à occuper.",
              footerCtaLabel: "Voir le commercial",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Projets commerciaux sur mesure",
              },
            },
          ],
        },
      },
    },

    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "De la conception à la pose",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description: "Besoins, contraintes du lieu et portée réelle du projet.",
            },
            {
              number: "2",
              title: "Conception",
              description: "Implantation, finis et dessins validés avant la production.",
            },
            {
              number: "3",
              title: "Production",
              description: "Commande à notre usine partenaire, aux dimensions relevées sur place.",
            },
            {
              number: "4",
              title: "Installation",
              description: "Pose et ajustements coordonnés avec le reste du chantier.",
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
          heading: "Vous avez un projet similaire ?",
          intro: "Estimation gratuite. Retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos espaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          note: "Résidentiel et commercial · Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
