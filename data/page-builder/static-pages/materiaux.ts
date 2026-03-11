import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Materiaux",
    description:
      "Materiaux et comparatifs pour cuisines, vanites et armoires sur mesure : contreplaque, MDF, melamine, bois massif, quincaillerie et finis.",
    path: "/materiaux/",
    ogAlt: "Materiaux Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
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
          heading: "Materiaux, durabilite, finition et performance",
          description:
            "Le bon materiau depend de l'usage reel. Nous priorisons la coherence entre structure, quincaillerie, finition et installation pour obtenir un resultat plus durable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ],
          badges: ["Contreplaque", "MDF", "Melamine", "Quincaillerie"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif visuel de materiaux pour armoires sur mesure",
          },
          caption:
            "Une page materiaux doit montrer la matiere, pas une cuisine generique",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment nous choisissons les materiaux",
          description:
            "La performance ne depend pas uniquement du panneau choisi. Elle depend aussi de l'humidite, des charges d'usage, de la resistance aux impacts, de la stabilite dans le temps et des details d'assemblage.",
          cards: [
            {
              title: "Humidite",
              description:
                "Cuisine, salle de bain et salle de lavage n'imposent pas les memes contraintes.",
            },
            {
              title: "Charges et usage",
              description:
                "Tiroirs, caissons et portes ne demandent pas tous le meme niveau de robustesse.",
            },
            {
              title: "Finition attendue",
              description:
                "Un fini peint uniforme ne se traite pas comme un decor melamine ou un rendu bois naturel.",
            },
            {
              title: "Execution finale",
              description:
                "Les chants, la quincaillerie et l'installation ont un impact direct sur la durabilite.",
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
          heading: "Explorez les pages materiaux",
          intro:
            "Chaque page explique les compromis, usages et limites du sujet.",
          items: [
            {
              title: "Pourquoi le contreplaque",
              description: "Structure stable et durable.",
              href: "/materiaux/contreplaque/",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Detail de contreplaque pour armoires sur mesure",
              },
              badges: ["Structure", "Durabilite"],
              footerCtaLabel: "Voir le contreplaque",
            },
            {
              title: "MDF",
              description: "Uniformite et finition peinte.",
              href: "/materiaux/mdf/",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Finition", "Peinture"],
              footerCtaLabel: "Voir le MDF",
            },
            {
              title: "Melamine",
              description: "Decor et cout maitrise.",
              href: "/materiaux/melamine/",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de melamine pour mobilier sur mesure",
              },
              badges: ["Decor", "Budget"],
              footerCtaLabel: "Voir la melamine",
            },
            {
              title: "Bois massif",
              description: "Texture naturelle et caractere.",
              href: "/materiaux/bois-massif/",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Finition en bois massif naturel",
              },
              badges: ["Naturel", "Visible"],
              footerCtaLabel: "Voir le bois massif",
            },
            {
              title: "Quincaillerie",
              description: "Confort, precision et longevite.",
              href: "/materiaux/quincaillerie/",
              image: {
                src: "/images/generated/materials/material-hardware-hero-01.webp",
                alt: "Quincaillerie premium pour armoires et tiroirs",
              },
              badges: ["Usage", "Durabilite"],
              footerCtaLabel: "Voir la quincaillerie",
            },
            {
              title: "Couleurs et finis",
              description: "Cohesion visuelle et entretien.",
              href: "/materiaux/couleurs/",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Echantillons de couleurs et finis pour cuisine sur mesure",
              },
              badges: ["Style", "Entretien"],
              footerCtaLabel: "Voir les couleurs et finis",
            },
            {
              title: "Comparatif des materiaux",
              description: "Vue d'ensemble rapide pour cadrer le choix.",
              href: "/materiaux/comparatif/",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de plusieurs materiaux d'armoires",
              },
              badges: ["Comparatif", "Decision"],
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
            "Pour une lecture complete, consultez ensuite le comparatif detaille.",
          columns: ["Performance generale", "Usage typique"],
          rows: [
            {
              label: "Contreplaque",
              values: [
                "Structure stable et durable",
                "Caissons et structures exigeantes",
              ],
            },
            {
              label: "MDF",
              values: [
                "Uniformite et rendu peint",
                "Portes et facades peintes",
              ],
            },
            {
              label: "Melamine",
              values: [
                "Decor varie et cout maitrise",
                "Interieurs et applications ciblees",
              ],
            },
            {
              label: "Bois massif",
              values: [
                "Valeur percue et texture naturelle",
                "Elements visibles et details premium",
              ],
            },
            {
              label: "Quincaillerie",
              values: [
                "Confort et precision d'usage",
                "Portes, tiroirs et mecanismes",
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
            "Le rendu premium vient d'un systeme coherent : bons materiaux au bon endroit, quincaillerie fiable, details de fabrication solides et ajustements propres a l'installation.",
          badges: ["Structure", "Quincaillerie", "Installation"],
          cardTitle: "Points qui changent vraiment le resultat",
          items: [
            "Structures stables et adaptees a l'usage",
            "Quincaillerie fiable et bien reglee",
            "Protection des chants et details de finition",
            "Installation et ajustements precis",
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
          heading: "FAQ materiaux",
          items: [
            {
              q: "Contreplaque ou MDF ?",
              a: "Le choix depend du role de la piece, de l'humidite et de la durabilite visee.",
            },
            {
              q: "La melamine est-elle un bon choix ?",
              a: "Oui dans certains contextes, avec une attention particuliere aux chants et a l'installation.",
            },
            {
              q: "La quincaillerie soft-close vaut-elle la peine ?",
              a: "Oui, si le systeme est fiable et bien installe.",
            },
            {
              q: "Quels materiaux eviter en salle de bain ?",
              a: "Ceux mal proteges contre l'humidite ou mal adaptes au contexte reel.",
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
            "On vous aide a choisir une combinaison materiaux, quincaillerie et finition coherente avec votre espace et vos priorites.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
