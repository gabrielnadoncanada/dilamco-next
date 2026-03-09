import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "MDF",
    description:
      "MDF : avantages, limites et usages recommandes pour armoires, vanites et projets sur mesure.",
    path: "/materiaux/mdf/",
    ogAlt: "MDF - Materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf/" },
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
          heading: "MDF : quand et pourquoi l'utiliser en sur mesure",
          description:
            "Le MDF est souvent choisi pour obtenir une surface tres uniforme, ideale pour des portes peintes. Ce n'est pas un materiau universel : le contexte d'usage et la protection des chants determinent sa pertinence.",
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
          badges: ["Peinture", "Uniformite", "Facades"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.png",
            alt: "Echantillons et surface peinte uniforme",
          },
          caption:
            "Tres utile pour certains rendus, moins universel qu'on le croit",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le MDF fait bien",
          description:
            "Compose de fibres compressees, le MDF offre une densite uniforme qui favorise les finis peints et un rendu regulier. Il devient interessant quand la qualite visuelle de la surface est prioritaire.",
          cards: [
            {
              title: "Surface uniforme",
              description: "Particulierement utile pour les finis peints.",
            },
            {
              title: "Rendu regulier",
              description:
                "Permet une lecture visuelle plus propre sur certaines facades.",
            },
            {
              title: "Bon fit pour certaines portes",
              description:
                "Quand le projet vise avant tout une esthetique peinte.",
            },
            {
              title: "Sensibilite a l'humidite",
              description:
                "La protection des chants et le contexte restent critiques.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "fit",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ou le MDF peut etre pertinent",
          intro:
            "Le MDF est surtout pertinent quand la finition peinte uniforme est une priorite et que le projet gere correctement les zones plus sensibles.",
          badges: ["Portes peintes", "Facades", "Design"],
          cardTitle: "Bon usage du MDF",
          items: [
            "Portes et facades peintes",
            "Projets ou l'uniformite visuelle compte beaucoup",
            "Zones bien executees et bien protegees",
            "Configurations combinees avec d'autres materiaux plus stables",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design/",
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
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Limites et precautions",
          intro:
            "Le MDF peut reagir a l'eau si la protection est insuffisante, surtout aux chants. C'est la ou les details d'execution deviennent decisifs.",
          items: [
            {
              title: "Humidite.",
              description:
                "Le risque augmente si les chants ou zones sensibles sont mal proteges.",
            },
            {
              title: "Chants critiques.",
              description:
                "Ils determinent une grande partie du comportement a long terme.",
            },
            {
              title: "Pas ideal partout.",
              description:
                "Certaines zones structurelles ou tres exposees seront mieux servies autrement.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
            {
              label: "Comparer avec la melamine",
              href: "/materiaux/melamine/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.png",
            alt: "Finition peinte uniforme sur panneau MDF",
          },
          cardTitle: "Approche recommandee",
          cardDescription:
            "Le MDF fonctionne mieux quand on l'utilise la ou il est fort, puis qu'on combine avec d'autres materiaux la ou l'usage demande plus de robustesse.",
        },
      },
    },
    {
      id: "related",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Comparer avec les autres options",
          items: [
            {
              title: "Comparatif complet",
              href: "/materiaux/comparatif/",
              description: "Vue d'ensemble par usage.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.png",
                alt: "Comparatif visuel de plusieurs materiaux d'armoires",
              },
              badges: ["Comparatif"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine/",
              description: "Decor et cout plus maitrise.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.png",
                alt: "Panneau de melamine pour mobilier sur mesure",
              },
              badges: ["Decor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Contreplaque",
              href: "/materiaux/contreplaque/",
              description: "Plus oriente structure.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.png",
                alt: "Detail de contreplaque pour armoires sur mesure",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs/",
              description: "Le fini choisi change beaucoup la perception.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.png",
                alt: "Echantillons de couleurs et finis pour mobilier sur mesure",
              },
              badges: ["Finition"],
              footerCtaLabel: "Voir la page",
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
          heading: "FAQ - MDF",
          items: [
            {
              q: "Le MDF est-il bas de gamme ?",
              a: "Non. Il peut etre excellent pour certaines applications, surtout les portes peintes, si l'execution est soignee.",
            },
            {
              q: "Le MDF gonfle-t-il avec l'humidite ?",
              a: "Il peut reagir a l'eau si la protection est insuffisante, surtout aux chants.",
            },
            {
              q: "MDF ou melamine ?",
              a: "Le MDF sert souvent la peinture uniforme; la melamine sert plutot un decor et un cout maitrise.",
            },
            {
              q: "Le MDF est-il adapte a la salle de bain ?",
              a: "Selon ventilation, usage et protection. Dans certains contextes, d'autres materiaux seront preferables.",
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
          heading: "Vous hesitez entre MDF et autres options ?",
          intro:
            "On vous aide a voir si le MDF est coherent pour votre niveau de finition, votre espace et votre usage reel.",
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
