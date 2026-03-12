import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Projets",
    description:
      "Découvrez nos réalisations sur mesure : cuisines, vanités, walk-in, salles de lavage et projets commerciaux.",
    path: "/projets/",
    ogAlt: "Réalisations Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
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
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir notre processus",
              href: "/processus/",
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
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Catégorie projets cuisine sur mesure",
              },
            },
            {
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Catégorie projets salle de bain",
              },
            },
            {
              image: {
                src: "/images/projects/Signature-Bouleau.webp",
                alt: "Catégorie projets walk-in et rangement",
              },
            },
            {
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Catégorie projets salle de lavage",
              },
            },
            {
              image: {
                src: "/images/projects/project11.webp",
                alt: "Catégorie projets commerciaux",
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
              href: "/processus/",
              variant: "outline",
            },
            {
              label: "Voir les services",
              href: "/services/",
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
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos espaces",
              href: "/espaces/",
              variant: "outline",
            },
          ],
          note: "Résidentiel et commercial - Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
