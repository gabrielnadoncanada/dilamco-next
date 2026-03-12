import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Bois massif",
    description:
      "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure.",
    path: "/materiaux/bois-massif/",
    ogAlt: "Bois massif - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif/" },
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
          heading:
            "Bois massif : authenticité, caractère et limites à connaître",
          description:
            "Le bois massif est recherché pour son grain, sa profondeur visuelle et sa valeur perçue. C'est aussi un matériau vivant : son comportement dépend du contexte, du fini et de l'endroit où il est utilisé.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Naturel", "Premium", "Éléments visibles"],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Cuisine sur mesure avec détails en bois massif",
          },
          caption:
            "Le bon sujet n'est pas le bois massif partout, mais le bois massif au bon endroit",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le bois massif apporte vraiment",
          description:
            "Le bois massif se distingue du MDF, de la mélamine, du contreplaqué et du placage par sa matière pleine et ses variations naturelles. Il apporte chaleur, relief et valeur perçue, mais demande une conception plus attentive.",
          cards: [
            {
              title: "Esthétique naturelle",
              description:
                "Grain, teinte et texture donnent un rendu plus vivant.",
            },
            {
              title: "Valeur perçue élevée",
              description:
                "Il renforce la sensation haut de gamme sur les éléments visibles.",
            },
            {
              title: "Réparabilité possible",
              description:
                "Certaines marques peuvent être reprises selon le fini choisi.",
            },
            {
              title: "Contrainte de stabilité",
              description:
                "Le comportement varie avec l'humidité, la température et la conception.",
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
          heading: "Où le bois massif est le plus pertinent",
          intro:
            "Le bois massif est souvent optimal sur les éléments visibles où le rendu, le toucher et la perception de qualité comptent le plus.",
          badges: ["Portes", "Façades", "Détails"],
          cardTitle: "Bon fit pour ce matériau",
          items: [
            "Portes et façades",
            "Détails décoratifs",
            "Pièces sélectionnées à forte valeur visuelle",
            "Projets où le caractère naturel est recherché",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design/",
              variant: "default",
            },
            {
              label: "Voir la fabrication",
              href: "/services/fabrication/",
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
          heading: "Limites et points à surveiller",
          intro:
            "La durabilité ne vient pas du matériau seul. Elle dépend aussi de la finition, de la quincaillerie et de l'installation.",
          items: [
            {
              title: "Mouvement naturel.",
              description:
                "Le bois peut réagir à l'humidité et à la température.",
            },
            {
              title: "Grandes surfaces à évaluer.",
              description:
                "Certaines zones demandent plus de stabilité qu'un bois plein.",
            },
            {
              title: "Entretien selon le fini.",
              description:
                "Le rendu et la maintenance changent selon la protection choisie.",
            },
          ],
          actions: [
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
            {
              label: "Explorer les matériaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-détail-01.webp",
            alt: "Détail de finition en bois massif",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "Le bois massif est souvent meilleur en combinaison avec des panneaux plus stables sur certaines structures.",
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
          heading: "Alternatives et pages connexes",
          items: [
            {
              title: "Contreplaqué",
              href: "/materiaux/contreplaque/",
              description: "Plus orienté structure.",
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
              description: "Plus adapté aux finitions peintes uniformes.",
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
              description: "Décor et coût plus maîtrisé.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-détail-01.webp",
                alt: "Panneau de mélamine pour mobilier sur mesure",
              },
              badges: ["Décor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs/",
              description: "Choisir le bon rendu visuel.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Échantillons de couleurs et finitions pour mobilier sur mesure",
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
          heading: "FAQ - Bois massif",
          items: [
            {
              q: "Le bois massif est-il toujours meilleur ?",
              a: "Non. Il est excellent pour l'esthétique et certaines applications, mais des panneaux techniques peuvent être plus stables selon les contraintes.",
            },
            {
              q: "Est-ce recommandé en cuisine ?",
              a: "Oui, souvent pour les portes et éléments visibles. Le choix dépend du fini, de l'entretien et de l'environnement.",
            },
            {
              q: "Comment réagit-il à l'humidité ?",
              a: "Le bois peut bouger avec l'humidité. La conception, la finition et le bon usage limitent ces effets.",
            },
            {
              q: "Peut-on combiner bois massif et autres matériaux ?",
              a: "Oui. C'est souvent l'approche la plus cohérente : bois massif sur les éléments visibles, panneaux plus stables sur certaines structures.",
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
          heading: "Vous voulez intégrer du bois massif correctement ?",
          intro:
            "On vous aide à choisir où il apporte une vraie valeur, et où d'autres matériaux seront plus cohérents techniquement.",
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
