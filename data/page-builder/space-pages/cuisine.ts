import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Cuisine sur mesure haut de gamme",
    description:
      "Cuisine sur mesure haut de gamme : conception, fabrication controlee et installation precise a Montreal, Laval et sur la Rive-Sud.",
    path: "/espaces/cuisine/",
    ogAlt: "Cuisine sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine/" },
  ],
  service: {
    name: "Cuisine sur mesure",
    description:
      "Conception, fabrication controlee et installation de cuisines sur mesure haut de gamme.",
    url: SITE.url + "/espaces/cuisine/",
    serviceType: "Cuisine sur mesure",
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
          heading: "Cuisine sur mesure, execution cle en main a Montreal",
          description:
            "Conception, fabrication controlee et installation precise pour un espace durable, bien organise et coherent du plan a la finition.",
          actions: [
            { label: "Obtenir une soumission", href: "/contact/", variant: "default" },
            { label: "Voir nos cuisines", href: "/projets/cuisine/", variant: "outline" },
          ],
          badges: ["Sur mesure", "Cle en main", "Montreal"],
          image: {
            src: "/images/hero/kitchen-hero.webp",
            alt: "Cuisine sur mesure haut de gamme",
          },
          caption: "Residentiel haut de gamme a Montreal, Laval et sur la Rive-Sud",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une cuisine sur mesure pensee pour durer",
          intro:
            "La valeur d'une cuisine se joue sur la structure, l'ergonomie et la qualite d'execution, pas seulement sur le look final.",
          badges: ["Durabilite", "Ergonomie", "Coordination"],
          cardTitle: "Bon fit pour ce type de projet",
          items: [
            "Residence principale ou projet long terme.",
            "Besoin d'un amenagement adapte a l'espace reel.",
            "Priorite a la stabilite, aux finis et a la coordination.",
          ],
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir le processus", href: "/processus/", variant: "outline" },
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
          heading: "Un processus clair du design a l'installation",
          intro:
            "Un seul partenaire permet de mieux cadrer les decisions et de reduire la fragmentation sur le chantier.",
          steps: [
            {
              number: "1",
              title: "Conception",
              description:
                "Analyse de l'espace, organisation des zones de travail et validation des choix.",
            },
            {
              number: "2",
              title: "Materiaux",
              description:
                "Selection de composants et finis adaptes a la durabilite et a l'usage quotidien.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production controlee avec standards stables et qualite reproductible.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements precis, alignements nets et finitions verifiees sur place.",
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
          heading: "Des choix de materiaux qui justifient le haut de gamme",
          intro:
            "La durabilite reelle est structurelle. Les composantes invisibles comptent autant que les surfaces.",
          items: [
            {
              title: "Structure des tiroirs",
              description:
                "Bois massif de bouleau pour une meilleure resistance et une sensation de solidite durable.",
            },
            {
              title: "Fond des tiroirs",
              description:
                "Contreplaque de bouleau pour mieux supporter la charge et garder sa stabilite.",
            },
            {
              title: "Finition coherente",
              description:
                "Choix alignes avec l'entretien, la longevite et l'usage reel de la cuisine.",
            },
          ],
          actions: [
            { label: "Explorer les materiaux", href: "/materiaux/", variant: "outline" },
            { label: "Voir nos services", href: "/services/", variant: "outline" },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Detail de materiaux pour cuisine sur mesure",
          },
          cardTitle: "Pourquoi ca compte",
          cardDescription:
            "Une bonne structure reduit les remplacements prematures et protege la qualite d'usage sur plusieurs annees.",
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
            "Quelques realisations qui montrent le niveau d'execution, pas seulement l'esthetique.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
              description:
                "Cuisine sur mesure avec implantation precise et finition soignee.",
              image: {
                src: "/images/projects/cuisine-rive-sud/1.webp",
                alt: "Projet cuisine sur mesure a Montreal",
              },
              badges: ["Montreal", "Cuisine"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal/",
              description:
                "Projet cuisine concu pour un usage quotidien et une durabilite a long terme.",
              image: {
                src: "/images/projects/cuisine-rive-sud/2.webp",
                alt: "Projet cuisine sur mesure a Laval",
              },
              badges: ["Laval", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
              description:
                "Execution complete avec coordination du projet et details maitrises.",
              image: {
                src: "/images/projects/cuisine-rive-sud/3.webp",
                alt: "Projet cuisine sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Cle en main"],
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
        type: "split",
        variant: "faq-accordion",
        props: {
          heading: "FAQ - cuisine sur mesure",
          intro:
            "Reponses claires aux questions les plus frequentes avant de lancer un projet.",
          items: [
            {
              q: "Combien coute une cuisine sur mesure ?",
              a: "Le prix depend de l'amenagement, des materiaux, des dimensions et du niveau de coordination requis.",
            },
            {
              q: "Quelle est la difference avec une solution standard ?",
              a: "Le sur mesure permet d'adapter l'espace, d'ameliorer la structure et de mieux controler le resultat final.",
            },
            {
              q: "Est-ce que vous faites aussi l'installation ?",
              a: "Oui. L'objectif est justement d'assurer une execution coherente du design a la pose.",
            },
            {
              q: "Travaillez-vous a Montreal et autour ?",
              a: "Oui. Nous desservons Montreal, Laval et la Rive-Sud.",
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
            "Obtenez une soumission structuree adaptee a votre espace, vos priorites et votre niveau de finition.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir nos cuisines", href: "/projets/cuisine/", variant: "outline" },
          ],
        },
      },
    },
  ],
};
