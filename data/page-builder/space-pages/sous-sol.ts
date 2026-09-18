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
        variant: "split-image",
        props: {
          eyebrow: "Sous-sol",
          heading: "Aménagement de sous-sol sur mesure, du gros œuvre au mobilier",
          description:
            "Cinéma maison, bar, cellier ou rangement intégré, conçus avec la pièce et posés dans la séquence du chantier.",
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
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Aménagement de sous-sol sur mesure haut de gamme à Pierrefonds",
          },
          caption: "Pierrefonds · Ouest-de-l'Île · Grand Montréal",
        },
      },
    },
    {
      id: "espaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on aménage au sous-sol",
          items: [
            {
              title: "Salle de cinéma maison",
              description: "Estrade, panneaux, rangement d'équipement et intégration de l'écran.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Salle de cinéma maison sur mesure dans un sous-sol",
              },
              badges: ["Cinéma maison"],
            },
            {
              title: "Bar de sous-sol",
              description: "Comptoir, rangement à bouteilles, verrerie et électroménagers intégrés.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Bar de sous-sol sur mesure",
              },
              badges: ["Bar"],
            },
            {
              title: "Cave à vin, cellier",
              description: "Bois, verre ou sous-escalier, pensés pour la conservation.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Cave à vin / cellier sur mesure au sous-sol",
              },
              badges: ["Cellier"],
            },
            {
              title: "Bibliothèque et bureau",
              description: "Mur de rangement et bureau intégré pour le télétravail.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Bibliothèque murale et bureau intégré sur mesure",
              },
              badges: ["Bureau"],
            },
            {
              title: "Salle de jeux",
              description: "Unité murale et rangements pour une salle familiale ordonnée.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Salle de jeux et unité murale sur mesure au sous-sol",
              },
              badges: ["Unité murale"],
            },
            {
              title: "Rangement et mécanique",
              href: "/espaces/walk-in",
              description: "Placards fermés et accès discrets aux espaces techniques.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
                alt: "Rangement fermé sur mesure le long d'un mur de sous-sol",
              },
              badges: ["Rangement"],
              footerCtaLabel: "Voir les garde-robes",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qu'un sous-sol impose",
          intro: "Humidité, hauteur libre et accès mécaniques se règlent avant la finition, pas après.",
          items: [
            {
              title: "Humidité validée d'abord",
              description: "Drain, fissures et taux vérifiés avant d'isoler",
            },
            {
              title: "Structure durable",
              description: "Contreplaqué de bouleau là où la charge compte",
            },
            {
              title: "Intégration propre",
              description: "Câblage et accès mécaniques dissimulés",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
            {
              label: "Après dégât d'eau",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Détail de mobilier intégré sur mesure pour aménagement de sous-sol",
          },
          cardTitle: "Pourquoi ça compte",
          cardDescription: "Un sous-sol mal préparé gondole et sent l'humidité.",
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
              q: "Combien coûte l'aménagement d'un sous-sol ?",
              a: "Le prix varie selon la superficie et les espaces retenus : un cinéma maison, un bar ou un cellier n'impliquent pas la même menuiserie. Le montant ferme est fixé après le relevé sur place, dans la soumission détaillée.",
            },
            {
              q: "Quel est le délai pour le mobilier intégré ?",
              a: "De 9 à 15 semaines entre la validation du design et la pose. La commande est calée sur l'échéancier du chantier pour arriver une fois les cloisons et le plancher terminés.",
            },
            {
              q: "Comment gérez-vous l'humidité ?",
              a: "On vérifie le drain, les fissures et le taux d'humidité avant d'isoler. Les finis et les matériaux sont choisis pour l'environnement d'un sous-sol, ce qui limite le gondolement.",
            },
            {
              q: "Faut-il un permis pour finir un sous-sol ?",
              a: "Souvent oui, dès qu'on ajoute des cloisons, une salle de bain ou une chambre. On vérifie les exigences de votre ville et on dépose la demande pour vous.",
            },
            {
              q: "Pouvez-vous faire la finition complète ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : permis, isolation, cloisons, électricité, plomberie, plancher et pose du mobilier intégré, coordonnés par un seul responsable, au contrat écrit.",
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
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
