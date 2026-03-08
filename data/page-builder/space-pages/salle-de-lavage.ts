import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Salle de lavage sur mesure haut de gamme",
    description:
      "Salle de lavage sur mesure : conception, fabrication controlee et installation precise a Montreal, Laval et sur la Rive-Sud.",
    path: "/espaces/salle-de-lavage/",
    ogAlt: "Salle de lavage sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    {
      name: "Salle de lavage sur mesure",
      url: SITE.url + "/espaces/salle-de-lavage/",
    },
  ],
  service: {
    name: "Salle de lavage sur mesure",
    description:
      "Conception, fabrication controlee et installation d'armoires de salle de lavage sur mesure.",
    url: SITE.url + "/espaces/salle-de-lavage/",
    serviceType: "Salle de lavage sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image-badges",
        props: {
          eyebrow: "Dilamco - Espaces",
          heading: "Salle de lavage sur mesure, espace technique bien cadre",
          description:
            "Une salle de lavage performante repose sur l'organisation, la durabilite et une execution propre adaptee a l'humidite et a l'usage frequent.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos realisations",
              href: "/projets/salle-de-lavage/",
              variant: "outline",
            },
          ],
          badges: ["Fonctionnel", "Durable", "Sur mesure"],
          image: {
            src: "/images/spaces/vanite-salles-de-lavage.webp",
            alt: "Salle de lavage sur mesure haut de gamme",
          },
          caption:
            "Un espace de service concu pour durer et rester simple a utiliser",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un espace de lavage pense comme un espace technique",
          intro:
            "Le sur mesure sert a gerer machines, circulation, comptoir, rangement vertical et contraintes d'humidite dans un ensemble coherent.",
          badges: ["Rangement", "Humidite", "Usage frequent"],
          cardTitle: "Quand cette approche est utile",
          items: [
            "Vous devez optimiser un espace restreint.",
            "Le rangement et le comptoir pliage sont importants.",
            "Vous cherchez une solution plus stable qu'un assemblage standard.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir le processus",
              href: "/processus/",
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
          heading: "Une sequence claire pour reduire les imprevus",
          intro:
            "Le projet est cadre des le depart pour integrer contraintes techniques, rangement et finition.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Contraintes de plomberie, ventilation, circulation et profondeur disponible.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Validation des zones de rangement, du comptoir et de l'acces aux machines.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production controlee avec choix de materiaux adaptes a l'usage.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements et finitions verifies sur place pour une execution nette.",
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
          heading: "Des materiaux qui tiennent dans le temps",
          intro:
            "Dans une salle de lavage, humidite et usage quotidien punissent vite les choix faibles ou mal adaptes.",
          items: [
            {
              title: "Structure robuste",
              description:
                "Bois massif de bouleau sur les elements critiques pour mieux resister a l'usage.",
            },
            {
              title: "Stabilite dimensionnelle",
              description:
                "Contreplaque de bouleau pour limiter la deformation et mieux supporter la charge.",
            },
            {
              title: "Rangement utile",
              description:
                "Configuration pensee pour paniers, produits, comptoir et acces quotidien.",
            },
          ],
          actions: [
            {
              label: "Explorer les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir nos espaces",
              href: "/espaces/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/spaces/vanite-salles-de-lavage.webp",
            alt: "Detail materiau pour salle de lavage sur mesure",
          },
          cardTitle: "Impact concret",
          cardDescription:
            "Une structure plus stable evite les compromis visibles trop tot et protege la qualite d'usage de la piece.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets salle de lavage en vedette",
          intro:
            "Quelques exemples de configurations bien executees pour un usage frequent.",
          items: [
            {
              title: "Salle de lavage sur mesure",
              href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-montreal/",
              description:
                "Rangement et surfaces de travail integres dans un espace de service compact.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Projet salle de lavage sur mesure a Montreal",
              },
              badges: ["Montreal", "Fonctionnel"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage sur mesure",
              href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-laval/",
              description:
                "Amenagement durable avec rangement vertical et finition propre.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Projet salle de lavage sur mesure a Laval",
              },
              badges: ["Laval", "Durable"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage sur mesure",
              href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-rive-sud/",
              description:
                "Projet concu pour simplifier l'usage quotidien sans sacrifier la qualite.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Projet salle de lavage sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
          ],
        },
      },
    },
    {
      id: "faq",
      frame: { divider: "bottom" },
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - salle de lavage sur mesure",
          intro:
            "Les questions les plus utiles avant de cadrer ce type d'espace.",
          items: [
            {
              q: "Combien coute une salle de lavage sur mesure ?",
              a: "Le prix depend de la configuration, des materiaux, du rangement et des contraintes techniques du lieu.",
            },
            {
              q: "Est-ce que vous pouvez coordonner d'autres travaux ?",
              a: "Oui, selon la portee du projet. L'objectif est de reduire la fragmentation quand c'est pertinent.",
            },
            {
              q: "Quels materiaux recommandez-vous ?",
              a: "Des choix stables, durables et adaptes a l'humidite et a l'usage frequent.",
            },
            {
              q: "Travaillez-vous a Montreal et autour ?",
              a: "Oui. Montreal, Laval et la Rive-Sud font partie de notre secteur.",
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
          heading: "Parlez-nous de votre salle de lavage",
          intro:
            "On vous aide a definir une solution durable, organisee et realiste pour votre espace.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos realisations",
              href: "/projets/salle-de-lavage/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
