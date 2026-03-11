import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Couleurs et finis",
    description:
      "Couleurs et finis pour cuisines, vanites et armoires sur mesure : choisir selon la lumiere, l'usage et les materiaux.",
    path: "/materiaux/couleurs/",
    ogAlt: "Couleurs et finis - Materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs/" },
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
          heading: "Couleurs et finis : style, lumiere et entretien",
          description:
            "La couleur influence la lumiere, la perception de l'espace et l'entretien. Le bon choix depend du materiau, de l'usage et du contexte reel.",
          actions: [
            {
              label: "Parler design et finis",
              href: "/services/design/",
              variant: "default",
            },
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "outline",
            },
          ],
          badges: ["Lumiere", "Entretien", "Cohesion visuelle"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Choix de couleurs et finis pour projet sur mesure",
          },
          caption:
            "Un bon fini doit etre beau aujourd'hui et simple a vivre demain",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Methode simple pour choisir",
          description:
            "Structurer les choix des la phase design evite les erreurs de rendu. Il faut regarder la lumiere, le volume, l'entretien, le type de materiau et le contexte d'usage avant de valider une palette.",
          cards: [
            {
              title: "Lumiere",
              description:
                "Une couleur ne reagit pas pareil selon l'orientation et les sources lumineuses.",
            },
            {
              title: "Volume",
              description:
                "Le contraste et la masse visuelle changent la perception de l'espace.",
            },
            {
              title: "Usage et entretien",
              description:
                "Cuisine et salle de bain demandent des choix pragmatiques.",
            },
            {
              title: "Materiau et fini",
              description:
                "MDF, melamine et bois ne produisent pas le meme rendu.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "families",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Grandes familles de choix",
          items: [
            {
              title: "Neutres",
              href: "/services/design/",
              description: "Intemporels, lumineux et faciles a integrer.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Palette de finis neutres pour mobilier sur mesure",
              },
              badges: ["Intemporel"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Tons fonces",
              href: "/services/design/",
              description: "Fort impact visuel, demandent une bonne lumiere.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Mobilier sur mesure aux tons fonces",
              },
              badges: ["Accent"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois et textures",
              href: "/materiaux/bois-massif/",
              description: "Apportent chaleur et variations naturelles.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Texture de bois massif naturel",
              },
              badges: ["Naturel"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Cuisine",
              href: "/espaces/cuisine/",
              description:
                "Coordonner comptoir, dosseret, plancher et entretien.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec palette de finis coherente",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description:
                "Humidite, nettoyage frequent et ventilation comptent.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec finis adaptes",
              },
              badges: ["Salle de bain"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Materiaux",
              href: "/materiaux/",
              description: "Le fini final depend aussi du support choisi.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de materiaux et finis",
              },
              badges: ["Support"],
              footerCtaLabel: "Voir la page",
            },
          ],
        },
      },
    },
    {
      id: "material-impact",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Couleur et materiau : impact reel",
          intro:
            "Le rendu ne vient pas seulement de la couleur. Il depend aussi de la texture, de la regularite du support et de la finition retenue.",
          badges: ["MDF", "Bois", "Melamine"],
          cardTitle: "Repere rapide",
          items: [
            "MDF : plus homogene pour la peinture",
            "Bois : texture et variation naturelles",
            "Melamine : grande variete de decors",
            "Le meme ton change selon le support",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design/",
              variant: "default",
            },
            {
              label: "Voir les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "care",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Finitions et entretien",
          intro:
            "Le bon fini n'est pas seulement celui qui parait bien a l'echantillon. Il faut aussi penser aux traces, au nettoyage et a la tolerance du quotidien.",
          items: [
            {
              title: "Mat.",
              description:
                "Tres elegant, mais parfois plus exigeant a l'entretien.",
            },
            {
              title: "Satine.",
              description:
                "Souvent un bon compromis entre rendu et maintenance.",
            },
            {
              title: "Brillant.",
              description:
                "Plus lumineux, mais marque davantage selon le contexte.",
            },
          ],
          actions: [
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Choix de finis et echantillons de couleurs",
          },
          cardTitle: "Erreur frequente",
          cardDescription:
            "Choisir une inspiration sans la recontextualiser a la vraie lumiere, aux vrais volumes et au vrai usage du projet.",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - couleurs et finis",
          items: [
            {
              q: "Mat ou satine ?",
              a: "Le satine est souvent un bon compromis entretien-rendu, surtout en cuisine.",
            },
            {
              q: "Les couleurs foncees sont-elles risquees ?",
              a: "Pas avec une bonne lumiere et un fini adapte.",
            },
            {
              q: "Peut-on changer la couleur plus tard ?",
              a: "Parfois, selon le materiau et le fini choisi.",
            },
            {
              q: "Comment eviter un rendu date ?",
              a: "En gardant une base intemporelle et des accents plus flexibles.",
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
          heading: "Besoin d'aide pour cadrer vos choix de finis ?",
          intro:
            "On vous aide a choisir une palette plus durable visuellement, plus simple a vivre et coherente avec les materiaux retenus.",
          actions: [
            {
              label: "Parler design",
              href: "/services/design/",
              variant: "default",
            },
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
