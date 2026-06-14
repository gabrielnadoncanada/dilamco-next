import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Matériaux",
    description:
      "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie et finis.",
    path: "/materiaux",
    ogAlt: "Matériaux Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
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
          heading: "Matériaux, durabilité, finition et performance",
          description:
            "Le bon matériau dépend de l'usage réel. Nous priorisons la cohérence entre structure, quincaillerie, finition et installation pour obtenir un résultat plus durable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine",
              variant: "outline",
            },
          ],
          badges: ["Contreplaqué", "MDF", "Mélamine", "Quincaillerie"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif visuel de matériaux pour armoires sur mesure",
          },
          caption:
            "Une page matériaux doit montrer la matière, pas une cuisine générique",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment nous choisissons les matériaux",
          description:
            "La performance ne dépend pas uniquement du panneau choisi. Elle dépend aussi de l'humidité, des charges d'usage, de la résistance aux impacts, de la stabilité dans le temps et des détails d'assemblage.",
          cards: [
            {
              title: "Humidité",
              description:
                "Cuisine, salle de bain et salle de lavage n'imposent pas les mêmes contraintes.",
            },
            {
              title: "Charges et usage",
              description:
                "Tiroirs, caissons et portes ne demandent pas tous le même niveau de robustesse.",
            },
            {
              title: "Finition attendue",
              description:
                "Un fini peint uniforme ne se traite pas comme un décor mélamine ou un rendu bois naturel.",
            },
            {
              title: "Exécution finale",
              description:
                "Les chants, la quincaillerie et l'installation ont un impact direct sur la durabilité.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "pages",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Explorez les pages matériaux",
          intro:
            "Chaque page explique les compromis, usages et limites du sujet.",
          items: [
            {
              title: "Pourquoi le contreplaqué",
              description: "Structure stable et durable.",
              href: "/materiaux/contreplaque",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Détail de contreplaqué pour armoires sur mesure",
              },
              badges: ["Structure", "Durabilité"],
              footerCtaLabel: "Voir le contreplaqué",
            },
            {
              title: "MDF",
              description: "Uniformité et finition peinte.",
              href: "/materiaux/mdf",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Finition", "Peinture"],
              footerCtaLabel: "Voir le MDF",
            },
            {
              title: "Mélamine",
              description: "Décor et coût maîtrisé.",
              href: "/materiaux/melamine",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de mélamine pour mobilier sur mesure",
              },
              badges: ["Décor", "Budget"],
              footerCtaLabel: "Voir la mélamine",
            },
            {
              title: "Bois massif",
              description: "Texture naturelle et caractère.",
              href: "/materiaux/bois-massif",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Finition en bois massif naturel",
              },
              badges: ["Naturel", "Visible"],
              footerCtaLabel: "Voir le bois massif",
            },
            {
              title: "Quincaillerie",
              description: "Confort, précision et longévité.",
              href: "/materiaux/quincaillerie",
              image: {
                src: "/images/generated/materials/material-hardware-hero-01.webp",
                alt: "Quincaillerie premium pour armoires et tiroirs",
              },
              badges: ["Usage", "Durabilité"],
              footerCtaLabel: "Voir la quincaillerie",
            },
            {
              title: "Couleurs et finis",
              description: "Cohésion visuelle et entretien.",
              href: "/materiaux/couleurs",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Échantillons de couleurs et finis pour cuisine sur mesure",
              },
              badges: ["Style", "Entretien"],
              footerCtaLabel: "Voir les couleurs et finis",
            },
            {
              title: "Comparatif des matériaux",
              description: "Vue d'ensemble rapide pour cadrer le choix.",
              href: "/materiaux/comparatif",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de plusieurs matériaux d'armoires",
              },
              badges: ["Comparatif", "Décision"],
              footerCtaLabel: "Voir le comparatif",
            },
          ],
        },
      },
    },
    {
      id: "quick-compare",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Comparatif rapide",
          intro:
            "Pour une lecture complète, consultez ensuite le comparatif détaillé.",
          columns: ["Performance générale", "Usage typique"],
          rows: [
            {
              label: "Contreplaqué",
              values: [
                "Structure stable et durable",
                "Caissons et structures exigeantes",
              ],
            },
            {
              label: "MDF",
              values: [
                "Uniformité et rendu peint",
                "Portes et façades peintes",
              ],
            },
            {
              label: "Mélamine",
              values: [
                "Décor varié et coût maîtrisé",
                "Intérieurs et applications ciblées",
              ],
            },
            {
              label: "Bois massif",
              values: [
                "Valeur perçue et texture naturelle",
                "Éléments visibles et détails premium",
              ],
            },
            {
              label: "Quincaillerie",
              values: [
                "Confort et précision d'usage",
                "Portes, tiroirs et mécanismes",
              ],
            },
          ],
        },
      },
    },
    {
      id: "premium",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qui fait vraiment haut de gamme",
          intro:
            "Le rendu premium vient d'un système cohérent : bons matériaux au bon endroit, quincaillerie fiable, détails de fabrication solides et ajustements propres à l'installation.",
          badges: ["Structure", "Quincaillerie", "Installation"],
          cardTitle: "Points qui changent vraiment le résultat",
          items: [
            "Structures stables et adaptées à l'usage",
            "Quincaillerie fiable et bien réglée",
            "Protection des chants et détails de finition",
            "Installation et ajustements précis",
          ],
          actions: [
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "default",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
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
          heading: "FAQ matériaux",
          items: [
            {
              q: "Contreplaqué ou MDF ?",
              a: "Le choix dépend du rôle de la pièce, de l'humidité et de la durabilité visée.",
            },
            {
              q: "La mélamine est-elle un bon choix ?",
              a: "Oui dans certains contextes, avec une attention particulière aux chants et à l'installation.",
            },
            {
              q: "La quincaillerie soft-close vaut-elle la peine ?",
              a: "Oui, si le système est fiable et bien installé.",
            },
            {
              q: "Quels matériaux éviter en salle de bain ?",
              a: "Ceux mal protégés contre l'humidité ou mal adaptés au contexte réel.",
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
          heading: "Besoin d'un avis sur les bons choix techniques ?",
          intro:
            "On vous aide à choisir une combinaison matériaux, quincaillerie et finition cohérente avec votre espace et vos priorités.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
