import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Cuisine sur mesure et armoires de cuisine | Pierrefonds, Montréal",
    description:
      "Cuisine sur mesure et armoires de cuisine sur mesure haut de gamme : conception, îlot, fabrication contrôlée et pose précise à Pierrefonds, Montréal, Laval et le Grand Montréal.",
    path: "/espaces/cuisine",
    ogAlt: "Cuisine sur mesure et armoires de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine" },
  ],
  service: {
    name: "Cuisine sur mesure et armoires de cuisine",
    description:
      "Conception, fabrication contrôlée et installation de cuisines sur mesure et d'armoires de cuisine sur mesure haut de gamme à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île, à Montréal, Laval et dans le Grand Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Cuisine sur mesure",
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
            "Cuisine sur mesure et armoires de cuisine sur mesure à Pierrefonds et dans le Grand Montréal",
          description:
            "Conception, fabrication contrôlée et installation précise de cuisines sur mesure et d'armoires de cuisine sur mesure. Un espace durable et bien organisé, du plan à la finition — à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île et partout dans le Grand Montréal.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Armoires sur mesure", "Pierrefonds", "Ouest-de-l'Île"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Armoires de cuisine sur mesure haut de gamme à Pierrefonds",
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
          heading: "Une cuisine sur mesure pensée pour durer",
          intro:
            "La valeur d'une cuisine se joue sur la structure, l'ergonomie et la qualité d'exécution, pas seulement sur le look final.",
          badges: ["Durabilité", "Ergonomie", "Coordination"],
          cardTitle: "Bon fit pour ce type de projet",
          items: [
            "Résidence principale ou projet long terme.",
            "Besoin d'un aménagement adapté à l'espace réel.",
            "Priorité à la stabilité, aux finis et à la coordination.",
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
      id: "composition",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on conçoit dans une cuisine sur mesure",
          intro:
            "Une cuisine sur mesure ne se résume pas aux armoires. C'est un ensemble — îlot, rangement, hauteurs et zones de travail — pensé pour votre espace réel, en tant que fabricant et installateur.",
          columns: "2",
          items: [
            {
              title: "Îlot de cuisine sur mesure",
              description:
                "Pièce centrale, ajustée à la circulation et aux dimensions réelles.",
              icon: "package2",
              bullets: [
                "Proportions et débord adaptés à l'espace.",
                "Rangement, prises et coin repas intégrés au besoin.",
                "Alignement net avec le reste de la cuisine.",
              ],
            },
            {
              title: "Rangement et garde-manger",
              description:
                "Un rangement pensé pour l'usage quotidien, pas ajouté après coup.",
              icon: "doorOpen",
              bullets: [
                "Garde-manger, tiroirs profonds et espaces dédiés.",
                "Accès logique aux zones de cuisson et de lavage.",
                "Moins d'espace perdu, plus de fonctionnalité.",
              ],
            },
            {
              title: "Armoires hautes et finition au plafond",
              description:
                "Des armoires de cuisine sur mesure qui exploitent toute la hauteur.",
              icon: "slidersHorizontal",
              bullets: [
                "Hauteurs ajustées jusqu'au plafond.",
                "Moins de poussière, plus de rangement.",
                "Lecture verticale propre et cohérente.",
              ],
            },
            {
              title: "Conception, fabrication et installation",
              description:
                "Un seul fabricant d'armoires de cuisine, du plan à la pose.",
              icon: "wrench",
              bullets: [
                "Décisions cadrées tôt avec une seule équipe.",
                "Fabrication contrôlée en atelier.",
                "Pose et ajustements précis sur place.",
              ],
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
            "Un seul partenaire permet de mieux cadrer les décisions et de réduire la fragmentation sur le chantier.",
          steps: [
            {
              number: "1",
              title: "Conception",
              description:
                "Analyse de l'espace, organisation des zones de travail et validation des choix.",
            },
            {
              number: "2",
              title: "Matériaux",
              description:
                "Sélection de composants et finis adaptés à la durabilité et à l'usage quotidien.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée avec standards stables et qualité reproductible.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements précis, alignements nets et finitions vérifiées sur place.",
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
          heading: "Des choix de matériaux qui justifient le haut de gamme",
          intro:
            "La durabilité réelle est structurelle. Les composantes invisibles comptent autant que les surfaces.",
          items: [
            {
              title: "Structure des tiroirs",
              description:
                "Bois massif de bouleau pour une meilleure résistance et une sensation de solidité durable.",
            },
            {
              title: "Fond des tiroirs",
              description:
                "Contreplaqué de bouleau pour mieux supporter la charge et garder sa stabilité.",
            },
            {
              title: "Finition cohérente",
              description:
                "Choix alignés avec l'entretien, la longévité et l'usage réel de la cuisine.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Vanité de salle de bain sur mesure",
              href: "/espaces/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Détail de matériaux pour cuisine sur mesure",
          },
          cardTitle: "Pourquoi ça compte",
          cardDescription:
            "Une bonne structure réduit les remplacements prématurés et protège la qualité d'usage sur plusieurs années.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets cuisines en vedette",
          intro:
            "Quelques réalisations qui montrent le niveau d'exécution, pas seulement l'esthétique.",
          items: [
            {
              title: "Cuisine sur mesure, Pierrefonds",
              href: "/projets/cuisine/cuisine-sur-mesure-pierrefonds",
              description:
                "Armoires de cuisine sur mesure dans l'Ouest-de-l'Île : implantation précise et finition soignée.",
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Projet d'armoires de cuisine sur mesure à Pierrefonds",
              },
              badges: ["Pierrefonds", "Armoires"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure, Montréal",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal",
              description:
                "Cuisine conçue pour un usage quotidien et une durabilité à long terme.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Projet de cuisine sur mesure à Montréal",
              },
              badges: ["Montréal", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure, Rive-Sud",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud",
              description:
                "Exécution complète avec coordination du projet et détails maîtrisés.",
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Projet de cuisine sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "clé en main"],
              footerCtaLabel: "Voir le projet",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Armoires de cuisine sur mesure dans tout le Grand Montréal",
          intro:
            "Basés à Pierrefonds-Roxboro, on conçoit, fabrique et installe des armoires et cuisines sur mesure dans l'Ouest-de-l'Île et partout dans le Grand Montréal.",
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
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
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
          heading: "FAQ - cuisine sur mesure",
          intro:
            "Réponses claires aux questions les plus fréquentes avant de lancer un projet.",
          items: [
            {
              q: "Combien coûte une cuisine ou des armoires sur mesure ?",
              a: "Le prix dépend de l'aménagement, des matériaux, des dimensions et du niveau de coordination requis. On vous donne une estimation claire après avoir cadré le projet.",
            },
            {
              q: "Faites-vous des armoires de cuisine sur mesure à Pierrefonds et dans l'Ouest-de-l'Île ?",
              a: "Oui. Nous sommes basés à Pierrefonds-Roxboro et installons des armoires et cuisines sur mesure dans tout l'Ouest-de-l'Île, à Montréal, à Laval et dans le Grand Montréal.",
            },
            {
              q: "Quelle est la différence avec des armoires standard ?",
              a: "Le sur mesure permet d'adapter précisément l'espace, d'améliorer la structure (bois massif, contreplaqué de bouleau) et de mieux contrôler le résultat final.",
            },
            {
              q: "Concevez-vous des îlots de cuisine sur mesure ?",
              a: "Oui. L'îlot est conçu avec la cuisine, pas ajouté après coup : proportions, débord, rangement intégré, prises et coin repas ajustés à la circulation et aux dimensions réelles de la pièce.",
            },
            {
              q: "Est-ce que vous faites aussi l'installation ?",
              a: "Oui. L'objectif est d'assurer une exécution cohérente du design à la pose, par la même équipe.",
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
          heading: "Parlez-nous de votre projet de cuisine",
          intro:
            "Obtenez une soumission structurée adaptée à votre espace, vos priorités et votre niveau de finition.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
