import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const sousSolPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Aménagement de sous-sol sur mesure à Pierrefonds",
    description:
      "Aménagement de sous-sol sur mesure : cinéma maison, bar, cave à vin et rangement, intégrés à votre rénovation par un entrepreneur général licencié RBQ.",
    path: "/espaces/sous-sol",
    ogAlt: "Aménagement de sous-sol sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Aménagement de sous-sol", url: SITE.url + "/espaces/sous-sol" },
  ],
  service: {
    name: "Aménagement de sous-sol sur mesure",
    description:
      "Conception, fabrication et installation d'aménagements de sous-sol haut de gamme : salle de cinéma maison, bar, cave à vin, bibliothèque et rangement sur mesure à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île, à Montréal, Laval et dans le Grand Montréal.",
    url: SITE.url + "/espaces/sous-sol",
    serviceType: "Aménagement de sous-sol sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Aménagement de sous-sol sur mesure à Pierrefonds",
          description:
            "Cinéma maison, bar, cellier ou bibliothèque, dessinés une fois le sous-sol vérifié.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol aménagé en salon familial avec rangements intégrés",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Ce qu'on aménage dans un sous-sol",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Salle de cinéma maison avec estrade et panneaux acoustiques",
              },
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Cellier vitré aménagé sous un escalier de sous-sol",
              },
            },
            {
              kind: "stat",
              value: "9 à 15 sem.",
              label: "Le temps qu'il faut pour produire le mobilier intégré",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Bar de sous-sol avec comptoir et rangement à bouteilles",
              },
            },
            {
              kind: "text",
              title: "Après un dégât d'eau",
              description:
                "On assèche, on reconstruit et on monte votre dossier d'assurance.",
              href: "/services/renovation/apres-sinistre",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Bibliothèque murale et bureau intégré au sous-sol",
              },
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le sous-sol en bref",
          rows: [
            {
              label: "À vérifier d'abord",
              value:
                "On contrôle le drain, les fissures et l'humidité avant de poser l'isolant.",
            },
            {
              label: "Permis",
              value:
                "La Ville en exige un dès qu'on ajoute un mur, une chambre ou une salle de bain.",
            },
            {
              label: "Matériaux",
              value:
                "Les tablettes qui portent du poids sont en contreplaqué de bouleau.",
            },
            {
              label: "Qui installe",
              value:
                "Notre équipe, le plancher fini, en laissant des portes d'accès à la plomberie.",
            },
            {
              label: "Garantie",
              value:
                "Les travaux respectent le Code de construction et la durée figure au contrat.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Détail de mobilier intégré sur mesure dans un sous-sol fini",
          },
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
              q: "Quelle hauteur libre faut-il pour finir un sous-sol ?",
              a: "On vise au moins 2 m sous le plafond fini. Les conduits et la plomberie sont relocalisés ou encoffrés pour dégager la hauteur là où on circule et où on s'assoit.",
            },
            {
              q: "Comment traitez-vous l'humidité avant la finition ?",
              a: "Relevé du drain français, inspection des fissures et mesure du taux d'humidité. Les correctifs passent avant l'isolant, sinon le mobilier gondole dans les deux ans.",
            },
            {
              q: "Peut-on ajouter une chambre au sous-sol ?",
              a: "Oui, si la fenêtre atteint les dimensions d'issue de secours exigées. Agrandir l'ouverture demande une coupe dans la fondation, planifiée avec la structure.",
            },
            {
              q: "Un cellier demande-t-il une pièce réfrigérée ?",
              a: "Pas toujours. Un sous-sol tempéré et stable convient à une réserve courante. Pour une collection, on isole la pièce et on prévoit un groupe de refroidissement.",
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
          heading: "Parlez-nous de votre projet de sous-sol",
          intro:
            "Estimation sans frais. L'humidité et la hauteur sont vérifiées dès la visite.",
          actions: [
            {
              label: "Demander une soumission",
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
  ],
};
