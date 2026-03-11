import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Comparatif des materiaux",
    description:
      "Comparatif des materiaux pour cuisines, vanites et armoires sur mesure : MDF, melamine, contreplaque et bois massif.",
    path: "/materiaux/comparatif/",
    ogAlt: "Comparatif des materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif/" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Materiaux",
          heading: "Comparatif des materiaux : choisir selon l'usage",
          description:
            "Il n'existe pas de materiau universel. Le bon choix depend de l'espace, de l'humidite, de la durabilite visee, de la finition recherchee et de la qualite d'execution.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir tous les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          badges: ["Structure", "Humidite", "Finition"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif de materiaux pour cuisine sur mesure",
          },
          caption: "Le bon choix depend toujours du contexte reel",
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Tableau comparatif",
          intro: "Resume general a adapter a votre contexte reel.",
          columns: ["Performance generale", "Usage recommande"],
          rows: [
            {
              label: "Contreplaque",
              values: ["Tres bonne stabilite", "Structures exigeantes"],
            },
            {
              label: "MDF",
              values: ["Bonne uniformite", "Portes et facades peintes"],
            },
            {
              label: "Melamine",
              values: [
                "Variable selon le contexte",
                "Rangements cibles et decor",
              ],
            },
            {
              label: "Bois massif",
              values: ["Valeur percue elevee", "Elements esthetiques visibles"],
            },
          ],
        },
      },
    },
    {
      id: "details",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Pages detaillees",
          intro: "Approfondissez chaque materiau selon sa logique propre.",
          items: [
            {
              title: "Pourquoi le contreplaque",
              href: "/materiaux/contreplaque/",
              description: "Stabilite et tenue structurelle.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Detail de contreplaque pour armoires sur mesure",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf/",
              description: "Uniformite et finition peinte.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Peinture"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine/",
              description: "Finis decoratifs et cout maitrise.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de melamine pour mobilier sur mesure",
              },
              badges: ["Decor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif/",
              description: "Texture naturelle et caractere.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Finition en bois massif naturel",
              },
              badges: ["Naturel"],
              footerCtaLabel: "Voir la page",
            },
          ],
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le tableau ne montre pas",
          description:
            "La performance reelle depend aussi de la protection des chants, de la qualite d'assemblage, de la quincaillerie et des ajustements a l'installation. Le tableau aide a cadrer, mais il ne remplace pas un choix adapte au projet.",
          cards: [
            {
              title: "Chants",
              description:
                "Ils deviennent critiques des qu'il y a humidite, chocs ou nettoyage frequent.",
            },
            {
              title: "Assemblage",
              description: "Une bonne execution change la tenue dans le temps.",
            },
            {
              title: "Quincaillerie",
              description:
                "Le confort et la durabilite dependent aussi des mecanismes.",
            },
            {
              title: "Installation",
              description:
                "Les ajustements finaux influencent le fonctionnement reel.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "errors",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Erreurs a eviter",
          intro:
            "Les mauvais choix viennent souvent d'une lecture trop simplifiee : le look seul, l'oubli de l'humidite ou une sous-estimation des details de finition.",
          badges: ["Usage reel", "Humidite", "Execution"],
          cardTitle: "A garder en tete",
          items: [
            "Ne pas choisir uniquement pour le look",
            "Tenir compte de l'humidite",
            "Ne pas sous-estimer les details de finition",
            "Evaluer le role reel de chaque piece",
          ],
          actions: [
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "default",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
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
          heading: "FAQ - comparatif des materiaux",
          items: [
            {
              q: "MDF ou melamine ?",
              a: "Le MDF sert souvent un fini peint uniforme; la melamine sert plutot un decor et un cout maitrise.",
            },
            {
              q: "Le contreplaque est-il toujours preferable ?",
              a: "Pas toujours, mais il est souvent pertinent pour la structure durable.",
            },
            {
              q: "Bois massif partout ?",
              a: "Pas necessairement. Il est souvent meilleur lorsqu'il est cible sur les elements visibles.",
            },
            {
              q: "Peut-on combiner plusieurs materiaux ?",
              a: "Oui. C'est souvent la meilleure strategie pour equilibrer performance, rendu et budget.",
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
          heading: "Besoin d'un comparatif adapte a votre projet ?",
          intro:
            "On vous aide a arbitrer entre structure, finition, humidite et budget pour faire un choix plus intelligent.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir tous les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
