import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Espaces sur mesure",
    description:
      "Decouvrez nos espaces sur mesure : cuisine, salle de bain, walk-in, salle de lavage et commercial.",
    path: "/espaces/",
    ogAlt: "Espaces sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
  ],
  service: {
    name: "Espaces sur mesure",
    description:
      "Pages piliers pour cuisines, salles de bain, walk-ins, salles de lavage et projets commerciaux.",
    url: SITE.url + "/espaces/",
    serviceType: "Espaces sur mesure",
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
          heading:
            "Espaces sur mesure : cuisine, salle de bain, rangement et commercial",
          description:
            "Chaque espace a ses contraintes. Notre role est de concevoir, fabriquer et installer des solutions durables, fonctionnelles et bien executees.",
          actions: [
            { label: "Obtenir une soumission", href: "/contact/", variant: "default" },
            { label: "Voir nos projets", href: "/projets/", variant: "outline" },
          ],
          badges: ["Sur mesure", "Durable", "Cle en main"],
          image: {
            src: "/images/spaces/spaces.png",
            alt: "Espaces sur mesure Dilamco",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Choisissez votre espace",
          intro:
            "Accedez a la page pilier adaptee a votre type de projet pour voir l'approche, les materiaux et des references.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine/",
              description:
                "Cuisine sur mesure avec coordination, materiaux durables et execution stable.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Cuisine", "Sur mesure"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description:
                "Vanites et rangement sur mesure adaptes a l'humidite et a l'usage quotidien.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Salle de bain sur mesure",
              },
              badges: ["Salle de bain", "Humidite"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage/",
              description:
                "Configuration fonctionnelle et durable pour un espace de service bien organise.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Salle de lavage", "Fonctionnel"],
              footerCtaLabel: "Voir salle de lavage",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in/",
              description:
                "Organisation sur mesure pour optimiser l'espace et le rangement.",
              image: {
                src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
                alt: "Walk-in sur mesure",
              },
              badges: ["Walk-in", "Organisation"],
              footerCtaLabel: "Voir walk-in",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial/",
              description:
                "Amenagement commercial durable, planifie et adapte a l'usage reel.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Amenagement commercial sur mesure",
              },
              badges: ["Commercial", "Durable"],
              footerCtaLabel: "Voir commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "steps-2x2-cta",
        props: {
          heading: "Notre standard, peu importe l'espace",
          description:
            "Une methode reproductible pour proteger la qualite, reduire les imprevus et garder une execution coherente.",
          steps: [
            {
              label: "1) Conception",
              description:
                "Plans clairs, configuration adaptee et validations avant fabrication.",
            },
            {
              label: "2) Materiaux",
              description:
                "Choix durables et details de construction penses pour la longevite.",
            },
            {
              label: "3) Fabrication",
              description:
                "Standards stables et controle qualite pour une meilleure constance.",
            },
            {
              label: "4) Installation",
              description:
                "Ajustements precis, finitions nettes et coordination propre sur chantier.",
            },
          ],
          actions: [
            { label: "Voir nos services", href: "/services/", variant: "outline" },
            { label: "Voir nos materiaux", href: "/materiaux/", variant: "outline" },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-badges-cta",
        props: {
          heading: "Projets en vedette",
          intro:
            "Quelques realisations pour illustrer la qualite d'execution sur differents types d'espaces.",
          ctaLabel: "Voir tous les projets",
          ctaHref: "/projets/",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
              description:
                "Cuisine sur mesure avec details soignes, implantation claire et execution stable.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Projet cuisine sur mesure",
              },
              badges: ["Cuisine", "Montreal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Vanite sur mesure",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
              description:
                "Salle de bain sur mesure avec rangement optimise et finition propre.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Projet salle de bain sur mesure",
              },
              badges: ["Salle de bain", "Laval"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Amenagement commercial",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal/",
              description:
                "Projet commercial sur mesure pense pour l'usage, la logistique et la durabilite.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Projet commercial sur mesure",
              },
              badges: ["Commercial", "Montreal"],
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
          heading: "FAQ - espaces sur mesure",
          intro:
            "Quelques reponses rapides avant d'approfondir votre type de projet.",
          items: [
            {
              q: "Quels espaces faites-vous ?",
              a: "Cuisine, salle de bain, salle de lavage, walk-in et projets commerciaux.",
            },
            {
              q: "Travaillez-vous seulement a Montreal ?",
              a: "Nous desservons Montreal, Laval et la Rive-Sud.",
            },
            {
              q: "Quelle est la difference avec une solution standard ?",
              a: "Le sur mesure permet une meilleure adaptation a l'espace, une structure plus solide et une execution mieux controlee.",
            },
            {
              q: "Faites-vous aussi l'installation ?",
              a: "Oui. L'objectif est justement d'assurer une execution coherente du design a la pose.",
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
          heading: "Pret a cadrer votre projet correctement ?",
          intro:
            "Obtenez une soumission claire et structuree adaptee a votre espace et a votre niveau d'exigence.",
          actions: [
            { label: "Obtenir une soumission", href: "/contact/", variant: "default" },
            { label: "Voir nos services", href: "/services/", variant: "outline" },
          ],
          note: "Montreal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
