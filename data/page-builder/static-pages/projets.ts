import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Réalisations de cuisines & armoires sur mesure",
    description:
      "Découvrez nos réalisations sur mesure : cuisines, vanités, walk-in, salles de lavage et projets commerciaux.",
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
          eyebrow: "Dilamco - Projets",
          heading:
            "Réalisations sur mesure : cuisines, vanités, rangement et commercial",
          description:
            "Cette page sert à montrer des cas réels, pas une galerie vide. Vous y trouvez des projets qui aident à juger le niveau d'exécution, le type de contraintes traitées et la qualité de finition attendue.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "outline",
            },
          ],
          badges: ["Cas réels", "Montréal", "Laval", "Rive-Sud"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Réalisation sur mesure Dilamco",
          },
          caption:
            "Des projets qui servent à se projeter et à vérifier la qualité d'exécution",
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
          intro:
            "Choisissez l'univers de projet le plus proche de votre réalité pour voir des références mieux ciblées.",
          items: [
            {
              title: "Cuisines",
              href: "/projets/cuisine",
              description:
                "Cuisines sur mesure : rangement optimisé et finition précise.",
              footerCtaLabel: "Voir les projets cuisine",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Projets de cuisine sur mesure",
              },
            },
            {
              title: "Salles de bain & vanités",
              href: "/projets/salle-de-bain",
              description:
                "Vanités sur mesure durables, adaptées à l'humidité.",
              footerCtaLabel: "Voir les projets salle de bain",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Projets de vanité de salle de bain sur mesure",
              },
            },
            {
              title: "Walk-in & rangement",
              href: "/projets/walk-in",
              description: "Rangement sur mesure, optimisé et fonctionnel.",
              footerCtaLabel: "Voir les projets walk-in",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Projets de walk-in et rangement sur mesure",
              },
            },
            {
              title: "Salles de lavage",
              href: "/projets/salle-de-lavage",
              description: "Salles de lavage organisées et durables.",
              footerCtaLabel: "Voir les projets salle de lavage",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Projets de salle de lavage sur mesure",
              },
            },
            {
              title: "Commercial",
              href: "/projets/commercial",
              description:
                "Aménagements commerciaux pensés pour l'usage intensif.",
              footerCtaLabel: "Voir les projets commerciaux",
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
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "La logique de projet derrière le résultat final",
          description:
            "Les bonnes réalisations viennent rarement d'un coup de chance. Elles viennent d'une méthode qui clarifie les décisions en amont et protège l'exécution jusqu'à la pose.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Comprendre les besoins, les contraintes du lieu et la portée réelle du projet.",
            },
            {
              number: "2",
              title: "Conception et validations",
              description:
                "Structurer l'implantation, confirmer les choix et fermer les décisions qui influencent la fabrication.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Produire sur une base stable avec des choix matériaux et techniques déjà alignés.",
            },
            {
              number: "4",
              title: "Installation et finition",
              description:
                "Ajuster, aligner et livrer un résultat propre, cohérent et durable.",
            },
          ],
          actions: [
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "outline",
            },
            {
              label: "Voir les services",
              href: "/services",
              variant: "outline",
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
          intro:
            "Si une réalisation ressemble à votre contexte, on peut vous aider à cadrer la portée, les choix et la meilleure suite.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos espaces",
              href: "/espaces",
              variant: "outline",
            },
          ],
          note: "Résidentiel et commercial - Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
