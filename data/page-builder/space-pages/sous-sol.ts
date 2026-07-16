import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const sousSolPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Aménagement de sous-sol sur mesure à Pierrefonds",
    description:
      "Aménagement de sous-sol sur mesure : cinéma maison, bar, cave à vin, bibliothèque et rangement. Conception et installation à Montréal et le Grand Montréal.",
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
          eyebrow: "Dilamco - Espaces",
          heading:
            "Aménagement de sous-sol sur mesure à Pierrefonds et dans le Grand Montréal",
          description:
            "Aménager un sous-sol sur mesure, c'est transformer un espace souvent sous-utilisé en pièce de vie haut de gamme — salle de cinéma maison, bar, cave à vin, bibliothèque ou salle de jeux — avec un mobilier intégré conçu pour vos usages réels. Chez Dilamco, à Pierrefonds et dans le Grand Montréal, on gère la conception, la fabrication contrôlée en usine partenaire et l'installation, du plan à la finition.",
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
          badges: ["Sur mesure", "Clé en main", "Ouest-de-l'Île"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Aménagement de sous-sol sur mesure haut de gamme à Pierrefonds",
          },
          caption:
            "Résidentiel haut de gamme à Pierrefonds, dans l'Ouest-de-l'Île et le Grand Montréal",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un sous-sol pensé comme une vraie pièce de vie",
          intro:
            "Un sous-sol gagne en valeur quand le mobilier intégré est pensé dès le départ : rangements, unité murale, bar ou cinéma planifiés avec la pièce, pas ajoutés après coup.",
          badges: ["Sur mesure", "Durabilité", "Clé en main"],
          cardTitle: "Bon fit pour ce type de projet",
          items: [
            "Sous-sol à finir ou à repenser entièrement.",
            "Envie d'un espace cinéma, bar, cave à vin ou bureau intégré.",
            "Priorité au rangement, aux finitions et à une coordination unique.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "espaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce qu'on aménage dans un sous-sol",
          intro:
            "Chaque sous-sol combine quelques-uns de ces espaces. On conçoit le mobilier intégré sur mesure pour qu'ils s'intègrent à la pièce et restent fonctionnels au quotidien.",
          items: [
            {
              title: "Salle de cinéma maison",
              description:
                "Estrade, panneaux, rangement d'équipement et intégration de l'écran pour une vraie salle de cinéma maison sur mesure — pas seulement un système audio posé sur un meuble.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Salle de cinéma maison sur mesure dans un sous-sol",
              },
              badges: ["Cinéma maison", "Sur mesure"],
            },
            {
              title: "Bar de sous-sol",
              description:
                "Bar sur mesure avec comptoir, rangement à bouteilles, verrerie et électroménagers intégrés, conçu pour recevoir.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Bar de sous-sol sur mesure",
              },
              badges: ["Bar", "Sur mesure"],
            },
            {
              title: "Cave à vin / cellier",
              description:
                "Cellier et cave à vin sur mesure (bois, verre, sous-escalier) pensés pour la conservation et la mise en valeur des bouteilles.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Cave à vin / cellier sur mesure au sous-sol",
              },
              badges: ["Cave à vin", "Cellier"],
            },
            {
              title: "Bibliothèque & bureau",
              description:
                "Bibliothèque murale, mur de rangement et bureau intégré pour un coin lecture, travail ou télétravail au sous-sol.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Bibliothèque murale et bureau intégré sur mesure",
              },
              badges: ["Bibliothèque", "Bureau"],
            },
            {
              title: "Salle de jeux & divertissement",
              description:
                "Unité murale, mur de divertissement et rangements pour une salle de jeux ou familiale ordonnée et durable.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Salle de jeux et unité murale sur mesure au sous-sol",
              },
              badges: ["Salle de jeux", "Unité murale"],
            },
            {
              title: "Rangement & mécanique",
              href: "/espaces/walk-in",
              description:
                "Placards, garde-robes sur mesure et accès discrets aux espaces techniques pour garder un sous-sol net et organisé.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
                alt: "Rangement fermé sur mesure le long d'un mur de sous-sol",
              },
              badges: ["Rangement", "Durable"],
              footerCtaLabel: "Voir les garde-robes sur mesure",
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
          heading: "Un processus clair du design à l'installation",
          intro:
            "Un seul partenaire pour cadrer les décisions, coordonner les corps de métier et réduire les imprévus sur le chantier.",
          steps: [
            {
              number: "1",
              title: "Conception",
              description:
                "Analyse de l'espace, des contraintes (hauteur, colonnes, mécanique) et planification des zones.",
            },
            {
              number: "2",
              title: "Matériaux",
              description:
                "Sélection de composants et finis adaptés à l'humidité et à l'usage réel d'un sous-sol.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée des modules (cinéma, bar, cellier, rangement) avec standards stables.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Pose ajustée, alignements nets et finitions vérifiées sur place.",
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
          heading: "Des matériaux pensés pour la réalité d'un sous-sol",
          intro:
            "Un sous-sol impose ses contraintes : humidité, variations de température et accès techniques. Le choix des matériaux et de la structure compte autant que le look.",
          items: [
            {
              title: "Résistance à l'humidité",
              description:
                "Composants et finis sélectionnés pour mieux tolérer l'environnement d'un sous-sol.",
            },
            {
              title: "Structure durable",
              description:
                "Contreplaqué de bouleau et bois massif là où la charge et la stabilité comptent.",
            },
            {
              title: "Intégration propre",
              description:
                "Câblage, équipement et accès mécaniques dissimulés pour une finition cohérente.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Garde-manger et rangements en stock",
              href: "/boutique/garde-manger",
              variant: "ghost",
            },
            {
              label: "Reconstruction après dégât d'eau",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Détail de mobilier intégré sur mesure pour aménagement de sous-sol",
          },
          cardTitle: "Pourquoi ça compte",
          cardDescription:
            "Des matériaux adaptés au sous-sol évitent le gondolement, les odeurs et les remplacements prématurés.",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Aménagement de sous-sol partout dans le Grand Montréal",
          intro:
            "Basés dans le Grand Montréal, on conçoit et installe des aménagements de sous-sol sur mesure dans l'Ouest-de-l'Île et partout dans la région.",
          badges: [
            "Pierrefonds-Roxboro",
            "Ouest-de-l'Île",
            "Montréal",
            "Laval",
            "Rive-Nord",
            "Rive-Sud",
          ],
          cardTitle: "Zones desservies",
          items: [
            "Pierrefonds-Roxboro et l'Ouest-de-l'Île",
            "Montréal et les quartiers centraux",
            "Laval et la Rive-Nord",
            "Rive-Sud et couronne sud",
          ],
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
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - aménagement de sous-sol",
          intro:
            "Réponses claires aux questions les plus fréquentes avant de lancer un projet de sous-sol.",
          items: [
            {
              q: "Combien coûte l'aménagement d'un sous-sol sur mesure ?",
              a: "Le prix d'un aménagement de sous-sol sur mesure varie beaucoup selon la superficie à couvrir et les espaces souhaités : une salle de cinéma maison, un bar, une cave à vin, une bibliothèque ou du rangement n'impliquent pas le même niveau de menuiserie ni la même coordination. S'ajoutent les matériaux et finis retenus, les détails adaptés à l'environnement d'un sous-sol (humidité, gestion des hauteurs), et l'ampleur de la coordination si d'autres corps de métier interviennent. Plutôt qu'un prix générique, nous établissons une estimation précise après avoir cadré le projet avec vous — usages réels, priorités et niveau de finition — pour un budget clair avant de vous engager.",
            },
            {
              q: "Quelle est la différence entre une « salle de cinéma maison » et un « cinéma maison » ?",
              a: "Un « cinéma maison » désigne souvent l'équipement audio-vidéo (haut-parleurs, récepteur). Une salle de cinéma maison sur mesure, c'est l'aménagement de la pièce : estrade, panneaux, rangement d'équipement et mobilier intégré. C'est ce qu'on conçoit et installe.",
            },
            {
              q: "Faites-vous l'aménagement de sous-sol à Pierrefonds et dans l'Ouest-de-l'Île ?",
              a: "Oui. Nous sommes basés à Pierrefonds-Roxboro et réalisons des aménagements de sous-sol sur mesure dans tout l'Ouest-de-l'Île, à Montréal, à Laval et dans le Grand Montréal.",
            },
            {
              q: "Comment gérez-vous l'humidité d'un sous-sol ?",
              a: "On sélectionne des matériaux et des finis adaptés à l'environnement d'un sous-sol et on soigne les détails de construction pour limiter le gondolement et les problèmes liés à l'humidité.",
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
            "Obtenez une soumission structurée adaptée à votre espace, vos priorités et votre niveau de finition.",
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
