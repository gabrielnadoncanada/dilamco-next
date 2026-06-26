import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en MDF : finition, durabilité et usages",
    description:
      "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure.",
    path: "/materiaux/mdf",
    ogAlt: "MDF - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf" },
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
          heading: "MDF : quand et pourquoi l'utiliser en sur mesure",
          description:
            "Le MDF est souvent choisi pour obtenir une surface très uniforme, idéale pour des portes peintes. Ce n'est pas un matériau universel : le contexte d'usage et la protection des chants déterminent sa pertinence.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          badges: ["Peinture", "Uniformité", "Façades"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Échantillons et surface peinte uniforme",
          },
          caption:
            "Très utile pour certains rendus, moins universel qu'on le croit",
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
            "Composé de fibres compressées, le MDF offre une densité uniforme qui favorise les finitions peintes et un rendu régulier. Il devient intéressant quand la qualité visuelle de la surface est prioritaire.",
          cards: [
            {
              title: "Surface uniforme",
              description: "Particulièrement utile pour les finitions peintes.",
            },
            {
              title: "Rendu régulier",
              description:
                "Permet une lecture visuelle plus propre sur certaines façades.",
            },
            {
              title: "Bon fit pour certaines portes",
              description:
                "Quand le projet vise avant tout une esthétique peinte.",
            },
            {
              title: "Sensibilité à l'humidité",
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
          heading: "Où le MDF peut être pertinent",
          intro:
            "Le MDF est surtout pertinent quand la finition peinte uniforme est une priorité et que le projet gère correctement les zones plus sensibles.",
          badges: ["Portes peintes", "Façades", "Design"],
          cardTitle: "Bon usage du MDF",
          items: [
            "Portes et façades peintes",
            "Projets où l'uniformité visuelle compte beaucoup",
            "Zones bien exécutées et bien protégées",
            "Configurations combinées avec d'autres matériaux plus stables",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
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
          heading: "Limites et précautions",
          intro:
            "Le MDF peut réagir à l'eau si la protection est insuffisante, surtout aux chants. C'est là où les détails d'exécution deviennent décisifs.",
          items: [
            {
              title: "Humidité.",
              description:
                "Le risque augmente si les chants ou zones sensibles sont mal protégés.",
            },
            {
              title: "Chants critiques.",
              description:
                "Ils déterminent une grande partie du comportement à long terme.",
            },
            {
              title: "Pas idéal partout.",
              description:
                "Certaines zones structurelles ou très exposées seront mieux servies autrement.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Comparer avec la mélamine",
              href: "/materiaux/melamine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Finition peinte uniforme sur panneau MDF",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "Le MDF fonctionne mieux quand on l'utilise là où il est fort, puis qu'on combine avec d'autres matériaux là où l'usage demande plus de robustesse.",
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
              href: "/materiaux/comparatif",
              description: "Vue d'ensemble par usage.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de plusieurs matériaux d'armoires",
              },
              badges: ["Comparatif"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Mélamine",
              href: "/materiaux/melamine",
              description: "Décor et coût plus maîtrisé.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de mélamine pour mobilier sur mesure",
              },
              badges: ["Décor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Contreplaqué",
              href: "/materiaux/contreplaque",
              description: "Plus orienté structure.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Détail de contreplaqué pour armoires sur mesure",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs",
              description: "Le fini choisi change beaucoup la perception.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Échantillons de couleurs et finis pour mobilier sur mesure",
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
              a: "Non. Il peut être excellent pour certaines applications, surtout les portes peintes, si l'exécution est soignée.",
            },
            {
              q: "Le MDF gonfle-t-il avec l'humidité ?",
              a: "Il peut réagir à l'eau si la protection est insuffisante, surtout aux chants.",
            },
            {
              q: "MDF ou mélamine ?",
              a: "Le MDF sert souvent la peinture uniforme; la mélamine sert plutôt un décor et un coût maîtrisé.",
            },
            {
              q: "Le MDF est-il adapté à la salle de bain ?",
              a: "Selon ventilation, usage et protection. Dans certains contextes, d'autres matériaux seront préférables.",
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
          heading: "Vous hésitez entre MDF et autres options ?",
          intro:
            "On vous aide à voir si le MDF est cohérent pour votre niveau de finition, votre espace et votre usage réel.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
