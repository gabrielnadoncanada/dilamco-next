import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Espaces sur mesure",
    description:
      "Découvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial.",
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
          eyebrow: "Dilamco - Espaces",
          heading:
            "Espaces sur mesure : cuisine, salle de bain, rangement et commercial",
          description:
            "Chaque espace a ses contraintes. Notre rôle est de concevoir, fournir et installer des solutions durables, fonctionnelles et bien exécutées.",
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
          badges: ["Sur mesure", "Durable", "clé en main"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Espaces sur mesure Dilamco",
          },
          caption: "Montréal, Laval et Rive-Sud",
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
          intro:
            "Accédez à la page pilier adaptée à votre type de projet pour voir l'approche, les matériaux et des références.",
          items: [
            {
              title: "Armoires & cuisines sur mesure",
              href: "/espaces/cuisine",
              description:
                "Armoires de cuisine sur mesure avec coordination, matériaux durables et exécution stable.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Armoires de cuisine sur mesure haut de gamme",
              },
              badges: ["Cuisine", "Sur mesure"],
              footerCtaLabel: "Voir les cuisines sur mesure",
            },
            {
              title: "Vanités & salles de bain sur mesure",
              href: "/espaces/salle-de-bain",
              description:
                "Vanités de salle de bain sur mesure adaptées à l'humidité et à l'usage quotidien.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Vanité de salle de bain sur mesure",
              },
              badges: ["Salle de bain", "Humidité"],
              footerCtaLabel: "Voir les vanités sur mesure",
            },
            {
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage",
              description:
                "Configuration fonctionnelle et durable pour un espace de service bien organisé.",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Salle de lavage", "Fonctionnel"],
              footerCtaLabel: "Voir salle de lavage",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description:
                "Organisation sur mesure pour optimiser l'espace et le rangement.",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Walk-in sur mesure",
              },
              badges: ["Walk-in", "Organisation"],
              footerCtaLabel: "Voir walk-in",
            },
            {
              title: "Aménagement de sous-sol",
              href: "/espaces/sous-sol",
              description:
                "Salle de cinéma maison, bar, cave à vin, bibliothèque et rangement sur mesure.",
              image: {
                src: "/images/generated/spaces/espaces-card-sous-sol-01.webp",
                alt: "Aménagement de sous-sol sur mesure",
              },
              badges: ["Sous-sol", "Cinéma maison"],
              footerCtaLabel: "Voir l'aménagement de sous-sol",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Aménagement commercial durable, planifié et adapté à l'usage réel.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Aménagement commercial sur mesure",
              },
              badges: ["Commercial", "Durable"],
              footerCtaLabel: "Voir commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "steps-2x2-cta",
        props: {
          heading: "Notre standard, peu importe l'espace",
          description:
            "Une méthode reproductible pour protéger la qualité, réduire les imprévus et garder une exécution cohérente.",
          steps: [
            {
              label: "1) Conception",
              description:
                "Plans clairs, configuration adaptée et validations avant fabrication.",
            },
            {
              label: "2) Matériaux",
              description:
                "Choix durables et détails de construction pensés pour la longévité.",
            },
            {
              label: "3) Fabrication",
              description:
                "Standards stables et contrôle qualité pour une meilleure constance.",
            },
            {
              label: "4) Installation",
              description:
                "Ajustements précis, finitions nettes et coordination propre sur chantier.",
            },
          ],
          actions: [
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Voir nos matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },

    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - espaces sur mesure",
          intro:
            "Quelques réponses rapides avant d'approfondir votre type de projet.",
          items: [
            {
              q: "Quels espaces faites-vous ?",
              a: "Cuisine, salle de bain, salle de lavage, walk-in et projets commerciaux.",
            },
            {
              q: "Travaillez-vous seulement à Montréal ?",
              a: "Nous desservons Montréal, Laval et la Rive-Sud.",
            },
            {
              q: "Quelle est la différence avec une solution standard ?",
              a: "Le sur mesure permet une meilleure adaptation à l'espace, une structure plus solide et une exécution mieux contrôlée.",
            },
            {
              q: "Faites-vous aussi l'installation ?",
              a: "Oui. L'objectif est justement d'assurer une exécution cohérente du design à la pose.",
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
          heading: "Prêt à cadrer votre projet correctement ?",
          intro:
            "Obtenez une soumission claire et structurée adaptée à votre espace et à votre niveau d'exigence.",
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
          note: "Montréal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
