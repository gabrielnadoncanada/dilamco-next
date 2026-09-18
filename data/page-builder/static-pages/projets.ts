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
        variant: "centered",
        props: {
          badges: ["Cas réels"],
          heading: "Cuisines, vanités, rangement et projets commerciaux",
          description:
            "Des chantiers menés dans le Grand Montréal, du relevé sur place à la pose finale.",
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
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Quelques chantiers livrés",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/projects/cuisine-sur-mesure-laval-1.webp",
                alt: "Cuisine sur mesure livrée à Laval",
              },
              caption: "Cuisine sur mesure, Laval",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/projects/cuisine-sur-mesure-terrebonne-1.webp",
                alt: "Armoires pleine hauteur posées à Terrebonne",
              },
              caption: "Armoires pleine hauteur, Terrebonne",
            },
            {
              kind: "image",
              image: {
                src: "/images/projects/cuisine-sur-mesure-repentigny-1.webp",
                alt: "Îlot central d'une cuisine sur mesure à Repentigny",
              },
              caption: "Îlot central, Repentigny",
            },
            {
              kind: "image",
              image: {
                src: "/images/projects/Signature-Bouleau.webp",
                alt: "Caissons et tiroirs en bouleau d'une cuisine signature",
              },
              caption: "Intérieurs en bouleau",
            },
            {
              kind: "text",
              title: "Un projet semblable ?",
              description:
                "Envoyez vos photos et vos dimensions, on revient avec un ordre de grandeur.",
              href: "/contact",
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
