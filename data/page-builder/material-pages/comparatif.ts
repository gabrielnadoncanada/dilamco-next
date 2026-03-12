import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Comparatif des matériaux",
    description:
      "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif.",
    path: "/materiaux/comparatif/",
    ogAlt: "Comparatif des matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
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
          eyebrow: "Dilamco - Matériaux",
          heading: "Comparatif des matériaux : choisir selon l'usage",
          description:
            "Il n'existe pas de matériau universel. Le bon choix dépend de l'espace, de l'humidité, de la durabilité visée, de la finition recherchée et de la qualité d'exécution.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          badges: ["Structure", "Humidité", "Finition"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif de matériaux pour cuisine sur mesure",
          },
          caption: "Le bon choix dépend toujours du contexte réel",
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
          intro: "Résumé général à adapter à votre contexte réel.",
          columns: ["Performance générale", "Usage recommandé"],
          rows: [
            {
              label: "Contreplaqué",
              values: ["Très bonne stabilité", "Structures exigeantes"],
            },
            {
              label: "MDF",
              values: ["Bonne uniformité", "Portes et façades peintes"],
            },
            {
              label: "Mélamine",
              values: [
                "Variable selon le contexte",
                "Rangements cibles et décor",
              ],
            },
            {
              label: "Bois massif",
              values: ["Valeur perçue élevée", "Éléments esthétiques visibles"],
            },
          ],
        },
      },
    },
    {
      id: "détails",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Pages détaillées",
          intro: "Approfondissez chaque matériau selon sa logique propre.",
          items: [
            {
              title: "Pourquoi le contreplaqué",
              href: "/materiaux/contreplaque/",
              description: "Stabilité et tenue structurelle.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Détail de contreplaqué pour armoires sur mesure",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf/",
              description: "Uniformité et finition peinte.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Peinture"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Mélamine",
              href: "/materiaux/melamine/",
              description: "Finis décoratifs et coût maîtrisé.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-détail-01.webp",
                alt: "Panneau de mélamine pour mobilier sur mesure",
              },
              badges: ["Décor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif/",
              description: "Texture naturelle et caractère.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-détail-01.webp",
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
            "La performance réelle dépend aussi de la protection des chants, de la qualité d'assemblage, de la quincaillerie et des ajustements à l'installation. Le tableau aide à cadrer, mais il ne remplace pas un choix adapté au projet.",
          cards: [
            {
              title: "Chants",
              description:
                "Ils deviennent critiques dès qu'il y a humidité, chocs ou nettoyage fréquent.",
            },
            {
              title: "Assemblage",
              description: "Une bonne exécution change la tenue dans le temps.",
            },
            {
              title: "Quincaillerie",
              description:
                "Le confort et la durabilité dépendent aussi des mécanismes.",
            },
            {
              title: "Installation",
              description:
                "Les ajustements finaux influencent le fonctionnement réel.",
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
          heading: "Erreurs à éviter",
          intro:
            "Les mauvais choix viennent souvent d'une lecture trop simplifiée : le look seul, l'oubli de l'humidité ou une sous-estimation des détails de finition.",
          badges: ["Usage réel", "Humidité", "Exécution"],
          cardTitle: "À garder en tête",
          items: [
            "Ne pas choisir uniquement pour le look",
            "Tenir compte de l'humidité",
            "Ne pas sous-estimer les détails de finition",
            "Évaluer le rôle réel de chaque pièce",
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
          heading: "FAQ - Comparatif des matériaux",
          items: [
            {
              q: "MDF ou mélamine ?",
              a: "Le MDF sert souvent un fini peint uniforme; la mélamine sert plutôt un décor et un coût maîtrisé.",
            },
            {
              q: "Le contreplaqué est-il toujours préférable ?",
              a: "Pas toujours, mais il est souvent pertinent pour la structure durable.",
            },
            {
              q: "Bois massif partout ?",
              a: "Pas nécessairement. Il est souvent meilleur lorsqu'il est ciblé sur les éléments visibles.",
            },
            {
              q: "Peut-on combiner plusieurs matériaux ?",
              a: "Oui. C'est souvent la meilleure stratégie pour équilibrer performance, rendu et budget.",
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
          heading: "Besoin d'un comparatif adapté à votre projet ?",
          intro:
            "On vous aide à arbitrer entre structure, finition, humidité et budget pour faire un choix plus intelligent.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
