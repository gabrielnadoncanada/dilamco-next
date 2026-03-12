import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Vanité salle de bain sur mesure haut de gamme",
    description:
      "Vanité salle de bain sur mesure : design, fabrication contrôlée et installation précise à Montréal, Laval et sur la Rive-Sud.",
    path: "/espaces/salle-de-bain/",
    ogAlt: "Salle de bain sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de bain sur mesure",
      url: SITE.url + "/espaces/salle-de-bain/",
    },
  ],
  service: {
    name: "Salle de bain sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de vanités sur mesure haut de gamme.",
    url: SITE.url + "/espaces/salle-de-bain/",
    serviceType: "Vanité salle de bain sur mesure",
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
          heading: "Vanité sur mesure, exécution clé en main à Montréal",
          description:
            "Une salle de bain durable demande des matériaux adaptés à l'humidité, une fabrication stable et une installation précise.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Sur mesure", "Humidité", "Montréal"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Vanité sur mesure haut de gamme",
          },
          caption: "Conçu pour un usage quotidien et un environnement humide",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une salle de bain sur mesure pensée pour durer",
          intro:
            "Dans une salle de bain, la structure et la tenue dans le temps comptent autant que le design.",
          badges: ["Stabilité", "Humidité", "Finition"],
          cardTitle: "Quand le sur mesure est pertinent",
          items: [
            "Vous voulez optimiser un espace réellement contraint.",
            "La durabilité et la stabilité sont prioritaires.",
            "Vous cherchez une exécution mieux contrôlée qu'une solution standard.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services/",
              variant: "outline",
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
          heading: "Du plan à la pose, sans improvisation",
          intro:
            "Le projet est cadré tôt pour mieux gérer plomberie, rangement, ergonomie et finition.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Contraintes d'espace, circulation, plomberie et besoins de rangement.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Validation des dimensions, des finis et de la logique d'utilisation.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée avec des standards adaptés à un environnement exigeant.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements, alignements et finitions vérifiés lors de la livraison.",
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
          heading: "Des matériaux adaptés à l'humidité",
          intro:
            "Une salle de bain premium repose sur une structure stable, des composants durables et des choix simples à entretenir.",
          items: [
            {
              title: "Bois massif de bouleau",
              description:
                "Utilisé sur les éléments critiques pour sa résistance et sa stabilité.",
            },
            {
              title: "Contreplaqué de bouleau",
              description:
                "Meilleure tenue dimensionnelle et meilleure résistance à la charge.",
            },
            {
              title: "Choix de finis",
              description:
                "Sélection alignée avec l'entretien, l'usage et l'environnement humide.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir le processus",
              href: "/processus/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Détail matériau pour salle de bain sur mesure",
          },
          cardTitle: "Ce que cela apporte",
          cardDescription:
            "Moins de déformation, une meilleure tenue dans le temps et une sensation de solidité plus durable.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets salle de bain en vedette",
          intro:
            "Quelques réalisations qui montrent le niveau de finition et la qualité d'exécution.",
          items: [
            {
              title: "Vanité sur mesure",
              href: "/projets/",
              description:
                "Rangement optimisé et finition précise adaptés à la salle de bain.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Projet salle de bain sur mesure à Laval",
              },
              badges: ["Laval", "Vanité"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets/",
              description:
                "Projet sur mesure pensé pour l'usage quotidien et la tenue dans le temps.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Projet salle de bain sur mesure à Montréal",
              },
              badges: ["Montréal", "Sur mesure"],
              footerCtaLabel: "Voir les projets",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets/",
              description:
                "Exécution propre avec matériaux adaptés et alignements soignés.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.webp",
                alt: "Projet salle de bain sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Finition"],
              footerCtaLabel: "Voir les projets",
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
          heading: "FAQ - salle de bain sur mesure",
          intro:
            "Les points qu'on clarifie le plus souvent avant de lancer le projet.",
          items: [
            {
              q: "Combien coûte une vanité sur mesure ?",
              a: "Le prix varie selon les dimensions, les matériaux, le rangement et le niveau de finition.",
            },
            {
              q: "Quelle est la différence avec une vanité standard ?",
              a: "Le sur mesure permet d'adapter précisément l'espace et d'utiliser une structure mieux dimensionnée pour l'usage réel.",
            },
            {
              q: "Est-ce que l'humidité change vos choix ?",
              a: "Oui. Les matériaux et les détails de construction sont sélectionnés en fonction de cet environnement.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Montréal, Laval et la Rive-Sud font partie de notre territoire.",
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
          heading: "Parlez-nous de votre salle de bain",
          intro:
            "On vous aide à cadrer un projet durable, adapté à l'espace et bien exécuté.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
