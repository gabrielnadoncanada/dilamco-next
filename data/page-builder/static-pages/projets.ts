import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Projets",
    description:
      "Decouvrez nos realisations sur mesure : cuisines, vanites, walk-in, salles de lavage et projets commerciaux.",
    path: "/projets/",
    ogAlt: "Realisations Dilamco",
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
            "Realisations sur mesure : cuisines, vanites, rangement et commercial",
          description:
            "Cette page sert a montrer des cas reels, pas une galerie vide. Vous y trouvez des projets qui aident a juger le niveau d'execution, le type de contraintes traitees et la qualite de finition attendue.",
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
          badges: ["Cas reels", "Montreal", "Laval", "Rive-Sud"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Realisation sur mesure Dilamco",
          },
          caption:
            "Des projets qui servent a se projeter et a verifier la qualite d'execution",
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
            "Choisissez l'univers de projet le plus proche de votre realite pour voir des references mieux ciblees.",
          items: [
            {
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Categorie projets cuisine sur mesure",
              },
            },
            {
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Categorie projets salle de bain",
              },
            },
            {
              image: {
                src: "/images/projects/Signature-Bouleau.webp",
                alt: "Categorie projets walk-in et rangement",
              },
            },
            {
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Categorie projets salle de lavage",
              },
            },
            {
              image: {
                src: "/images/projects/project11.webp",
                alt: "Categorie projets commerciaux",
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
          heading: "La logique de projet derriere le resultat final",
          description:
            "Les bonnes realisations viennent rarement d'un coup de chance. Elles viennent d'une methode qui clarifie les decisions en amont et protege l'execution jusqu'a la pose.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Comprendre les besoins, les contraintes du lieu et la portee reelle du projet.",
            },
            {
              number: "2",
              title: "Conception et validations",
              description:
                "Structurer l'implantation, confirmer les choix et fermer les decisions qui influencent la fabrication.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Produire sur une base stable avec des choix materiaux et techniques deja alignes.",
            },
            {
              number: "4",
              title: "Installation et finition",
              description:
                "Ajuster, aligner et livrer un resultat propre, coherent et durable.",
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
            "Si une realisation ressemble a votre contexte, on peut vous aider a cadrer la portee, les choix et la meilleure suite.",
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
          note: "Residentiel et commercial - Montreal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
