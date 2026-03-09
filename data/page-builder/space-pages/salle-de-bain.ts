import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Vanite salle de bain sur mesure haut de gamme",
    description:
      "Vanite salle de bain sur mesure : design, fabrication controlee et installation precise a Montreal, Laval et sur la Rive-Sud.",
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
      "Conception, fabrication controlee et installation de vanites sur mesure haut de gamme.",
    url: SITE.url + "/espaces/salle-de-bain/",
    serviceType: "Vanite salle de bain sur mesure",
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
          heading: "Vanite sur mesure, execution cle en main a Montreal",
          description:
            "Une salle de bain durable demande des materiaux adaptes a l'humidite, une fabrication stable et une installation precise.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets/salle-de-bain/",
              variant: "outline",
            },
          ],
          badges: ["Sur mesure", "Humidite", "Montreal"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.png",
            alt: "Vanite sur mesure haut de gamme",
          },
          caption: "Concu pour un usage quotidien et un environnement humide",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une salle de bain sur mesure pensee pour durer",
          intro:
            "Dans une salle de bain, la structure et la tenue dans le temps comptent autant que le design.",
          badges: ["Stabilite", "Humidite", "Finition"],
          cardTitle: "Quand le sur mesure est pertinent",
          items: [
            "Vous voulez optimiser un espace reellement contraint.",
            "La durabilite et la stabilite sont prioritaires.",
            "Vous cherchez une execution mieux controlee qu'une solution standard.",
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
          heading: "Du plan a la pose, sans improvisation",
          intro:
            "Le projet est cadre tot pour mieux gerer plomberie, rangement, ergonomie et finition.",
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
                "Production controlee avec des standards adaptes a un environnement exigeant.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements, alignements et finitions verifies lors de la livraison.",
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
          heading: "Des materiaux adaptes a l'humidite",
          intro:
            "Une salle de bain premium repose sur une structure stable, des composants durables et des choix simples a entretenir.",
          items: [
            {
              title: "Bois massif de bouleau",
              description:
                "Utilise sur les elements critiques pour sa resistance et sa stabilite.",
            },
            {
              title: "Contreplaque de bouleau",
              description:
                "Meilleure tenue dimensionnelle et meilleure resistance a la charge.",
            },
            {
              title: "Choix de finis",
              description:
                "Selection alignes avec l'entretien, l'usage et l'environnement humide.",
            },
          ],
          actions: [
            {
              label: "Explorer les materiaux",
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
            src: "/images/generated/spaces/space-bath-project-01.png",
            alt: "Detail materiau pour salle de bain sur mesure",
          },
          cardTitle: "Ce que cela apporte",
          cardDescription:
            "Moins de deformation, une meilleure tenue dans le temps et une sensation de solidite plus durable.",
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
            "Quelques realisations qui montrent le niveau de finition et la qualite d'execution.",
          items: [
            {
              title: "Vanite sur mesure",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
              description:
                "Rangement optimise et finition precise adaptes a la salle de bain.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.png",
                alt: "Projet salle de bain sur mesure a Laval",
              },
              badges: ["Laval", "Vanite"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets/salle-de-bain/",
              description:
                "Projet sur mesure pense pour l'usage quotidien et la tenue dans le temps.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.png",
                alt: "Projet salle de bain sur mesure a Montreal",
              },
              badges: ["Montreal", "Sur mesure"],
              footerCtaLabel: "Voir les projets",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets/salle-de-bain/",
              description:
                "Execution propre avec materiaux adaptes et alignements soignes.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.png",
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
              q: "Combien coute une vanite sur mesure ?",
              a: "Le prix varie selon les dimensions, les materiaux, le rangement et le niveau de finition.",
            },
            {
              q: "Quelle est la difference avec une vanite standard ?",
              a: "Le sur mesure permet d'adapter precisement l'espace et d'utiliser une structure mieux dimensionnee pour l'usage reel.",
            },
            {
              q: "Est-ce que l'humidite change vos choix ?",
              a: "Oui. Les materiaux et les details de construction sont selectionnes en fonction de cet environnement.",
            },
            {
              q: "Travaillez-vous a Montreal et autour ?",
              a: "Oui. Montreal, Laval et la Rive-Sud font partie de notre territoire.",
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
            "On vous aide a cadrer un projet durable, adapte a l'espace et bien execute.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets/salle-de-bain/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
