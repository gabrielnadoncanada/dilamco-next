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
            "Des chantiers que nous avons menés du début à la fin dans le Grand Montréal.",
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
      content: {
        type: "grid",
        variant: "image-cards-slider-lightbox",
        props: {
          heading: "Voir les projets par type de pièce",
          intro: "Choisissez la pièce qui ressemble le plus à votre projet.",
          items: [
            {
              title: "Cuisines",
              href: "/projets/cuisine",
              description: "Des cuisines refaites au complet.",
              footerCtaLabel: "Voir les cuisines",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Projets de cuisine sur mesure",
              },
            },
            {
              title: "Salles de bain & vanités",
              href: "/projets/salle-de-bain",
              description: "Des vanités qui tiennent dans une pièce humide.",
              footerCtaLabel: "Voir les salles de bain",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Projets de vanité de salle de bain sur mesure",
              },
            },
            {
              title: "Walk-in & rangement",
              href: "/projets/walk-in",
              description: "Du rangement dessiné pour ce que vous possédez.",
              footerCtaLabel: "Voir les walk-in",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Projets de walk-in et rangement sur mesure",
              },
            },
            {
              title: "Salles de lavage",
              href: "/projets/salle-de-lavage",
              description: "Des salles de lavage faciles à entretenir.",
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
          heading: "Quelques chantiers qu'on a livrés",
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
                "Envoyez-nous vos photos et vos mesures, on vous donne un ordre de prix.",
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
          heading: "Vous avez un projet du même genre",
          intro: "L'estimation est gratuite et on vous répond en un ou deux jours.",
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
