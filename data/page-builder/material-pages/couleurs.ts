import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Couleurs et finis",
    description:
      "Couleurs et finis pour cuisines, vanités et armoires sur mesure : choisir selon la lumière, l'usage et les matériaux.",
    path: "/materiaux/couleurs",
    ogAlt: "Couleurs et finis - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs" },
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
          heading: "Couleurs et finitions : style, lumière et entretien",
          description:
            "La couleur influence la lumière, la perception de l'espace et l'entretien. Le bon choix dépend du matériau, de l'usage et du contexte réel.",
          actions: [
            {
              label: "Parler design et finitions",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
          badges: ["Lumière", "Entretien", "Cohésion visuelle"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Choix de couleurs et finis pour projet sur mesure",
          },
          caption:
            "Un bon fini doit être beau aujourd'hui et simple à vivre demain",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Méthode simple pour choisir",
          description:
            "Structurer les choix dès la phase design évite les erreurs de rendu. Il faut regarder la lumière, le volume, l'entretien, le type de matériau et le contexte d'usage avant de valider une palette.",
          cards: [
            {
              title: "Lumière",
              description:
                "Une couleur ne réagit pas pareil selon l'orientation et les sources lumineuses.",
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
              title: "Matériau et fini",
              description:
                "MDF, mélamine et bois ne produisent pas le même rendu.",
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
          heading: "Grandes familles de finitions",
          items: [
            {
              title: "Neutres",
              href: "/services/design",
              description: "Intemporelles, lumineuses et faciles à intégrer.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Palette de finis neutres pour mobilier sur mesure",
              },
              badges: ["Intemporelle"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Tons foncés",
              href: "/services/design",
              description: "Fort impact visuel, demandent une bonne lumière.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Mobilier sur mesure aux tons foncés",
              },
              badges: ["Accentué"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois et textures",
              href: "/materiaux/bois-massif",
              description: "Apportent chaleur et variations naturelles.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Texture de bois massif naturelle",
              },
              badges: ["Naturel"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Coordonner comptoir, dosseret, plancher et entretien.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec palette de finitions cohérentes",
              },
              badges: ["Cuisine"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description:
                "Humidité, nettoyage fréquent et ventilation comptent.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec finitions adaptées",
              },
              badges: ["Salle de bain"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Matériaux",
              href: "/materiaux",
              description: "La finition finale dépend aussi du support choisi.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de matériaux et finitions",
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
          heading: "Couleur et matériau : impact réel sur le rendu",
          intro:
            "Le rendu ne vient pas seulement de la couleur. Il dépend aussi de la texture, de la régularité du support et de la finition retenue.",
          badges: ["MDF", "Bois", "Mélamine"],
          cardTitle: "Repère rapide",
          items: [
            "MDF : plus homogène pour la peinture",
            "Bois : texture et variation naturelles",
            "Mélamine : grande variété de décors",
            "Le même ton change selon le support",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
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
            "Le bon fini n'est pas seulement celui qui paraît bien à l'échantillon. Il faut aussi penser aux traces, au nettoyage et à la tolérance du quotidien.",
          items: [
            {
              title: "Mat.",
              description:
                "Très élégant, mais parfois plus exigeant à l'entretien.",
            },
            {
              title: "Satiné.",
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
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Choix de finis et échantillons de couleurs",
          },
          cardTitle: "Erreur fréquente",
          cardDescription:
            "Choisir une inspiration sans la recontextualiser à la vraie lumière, aux vrais volumes et au vrai usage du projet.",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - Couleurs et finitions",
          items: [
            {
              q: "Mat ou satiné ?",
              a: "Le satiné est souvent un bon compromis entre entretien et rendu, surtout en cuisine.",
            },
            {
              q: "Les couleurs foncées sont-elles risquées ?",
              a: "Pas avec une bonne lumière et un fini adapté.",
            },
            {
              q: "Peut-on changer la couleur plus tard ?",
              a: "Parfois, selon le matériau et la finition choisie.",
            },
            {
              q: "Comment éviter un rendu daté ?",
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
            "On vous aide à choisir une palette plus durable visuellement, plus simple à vivre et cohérente avec les matériaux retenus.",
          actions: [
            {
              label: "Parler design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
