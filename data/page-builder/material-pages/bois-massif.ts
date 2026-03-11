import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Bois massif",
    description:
      "Bois massif : avantages, limites et usages recommandes pour armoires, portes et mobilier sur mesure.",
    path: "/materiaux/bois-massif/",
    ogAlt: "Bois massif - Materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
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
          eyebrow: "Dilamco - Materiaux",
          heading:
            "Bois massif : authenticite, caractere et limites a connaitre",
          description:
            "Le bois massif est recherche pour son grain, sa profondeur visuelle et sa valeur percue. C'est aussi un materiau vivant : son comportement depend du contexte, du fini et de l'endroit ou il est utilise.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos realisations",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Naturel", "Premium", "Elements visibles"],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Cuisine sur mesure avec details en bois massif",
          },
          caption:
            "Le bon sujet n'est pas bois massif partout, mais bois massif au bon endroit",
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
            "Le bois massif se distingue du MDF, de la melamine, du contreplaque et du placage par sa matiere pleine et ses variations naturelles. Il apporte chaleur, relief et valeur percue, mais demande une conception plus attentive.",
          cards: [
            {
              title: "Esthetique naturelle",
              description:
                "Grain, teinte et texture donnent un rendu plus vivant.",
            },
            {
              title: "Valeur percue elevee",
              description:
                "Il renforce la sensation haut de gamme sur les elements visibles.",
            },
            {
              title: "Reparabilite possible",
              description:
                "Certaines marques peuvent etre reprises selon le fini choisi.",
            },
            {
              title: "Contrainte de stabilite",
              description:
                "Le comportement varie avec l'humidite, la temperature et la conception.",
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
          heading: "Ou le bois massif est le plus pertinent",
          intro:
            "Le bois massif est souvent optimal sur les elements visibles ou le rendu, le toucher et la perception de qualite comptent le plus.",
          badges: ["Portes", "Facades", "Details"],
          cardTitle: "Bon fit pour ce materiau",
          items: [
            "Portes et facades",
            "Details decoratifs",
            "Pieces selectionnees a forte valeur visuelle",
            "Projets ou le caractere naturel est recherche",
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
          heading: "Limites et points a surveiller",
          intro:
            "La durabilite ne vient pas du materiau seul. Elle depend aussi de la finition, de la quincaillerie et de l'installation.",
          items: [
            {
              title: "Mouvement naturel.",
              description:
                "Le bois peut reagir a l'humidite et a la temperature.",
            },
            {
              title: "Grandes surfaces a evaluer.",
              description:
                "Certaines zones demandent plus de stabilite qu'un bois plein.",
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
              label: "Explorer les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Detail de finition en bois massif",
          },
          cardTitle: "Approche recommandee",
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
              title: "Contreplaque",
              href: "/materiaux/contreplaque/",
              description: "Plus oriente structure.",
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
              description: "Plus adapte aux finis peints uniformes.",
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
              description: "Decor et cout plus maitrise.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de melamine pour mobilier sur mesure",
              },
              badges: ["Decor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs/",
              description: "Choisir le bon rendu visuel.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
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
          heading: "FAQ - bois massif",
          items: [
            {
              q: "Le bois massif est-il toujours meilleur ?",
              a: "Non. Il est excellent pour l'esthetique et certaines applications, mais des panneaux techniques peuvent etre plus stables selon les contraintes.",
            },
            {
              q: "Est-ce recommande en cuisine ?",
              a: "Oui, souvent pour les portes et elements visibles. Le choix depend du fini, de l'entretien et de l'environnement.",
            },
            {
              q: "Comment reagit-il a l'humidite ?",
              a: "Le bois peut bouger avec l'humidite. La conception, la finition et le bon usage limitent ces effets.",
            },
            {
              q: "Peut-on combiner bois massif et autres materiaux ?",
              a: "Oui. C'est souvent l'approche la plus coherente : bois massif sur le visible, panneaux plus stables sur certaines structures.",
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
          heading: "Vous voulez integrer du bois massif correctement ?",
          intro:
            "On vous aide a choisir ou il apporte une vraie valeur, et ou d'autres materiaux seront plus coherents techniquement.",
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
