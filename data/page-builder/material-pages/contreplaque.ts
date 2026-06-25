import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Pourquoi le contreplaqué",
    description:
      "Contreplaqué : stabilité, tenue des vis et durabilité pour la structure d'armoires sur mesure.",
    path: "/materiaux/contreplaque",
    ogAlt: "Contreplaqué - Matériaux sur mesure",
    ogImage: {
      url: "/images/generated/materials/material-plywood-hero-01.webp",
      alt: "Contreplaqué - Matériaux sur mesure",
      width: 1200,
      height: 630,
    },
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    {
      name: "Pourquoi le contreplaqué",
      url: SITE.url + "/materiaux/contreplaque",
    },
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
            "Contreplaqué : stabilité, durabilité et structure intelligente",
          description:
            "Le contreplaqué est souvent privilégié en sur mesure pour la structure des armoires. Sa composition en plis croisés lui donne un comportement plus stable et plus prévisible.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Stabilité", "Durabilité"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Cuisine sur mesure avec structure durable",
          },
          caption:
            "Souvent pertinent quand la tenue structurelle compte vraiment",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi il est souvent choisi pour la structure",
          description:
            "Le contreplaqué est constitué de plis de bois collés avec fibres croisées. Cette logique constructive améliore la stabilité dimensionnelle, la résistance mécanique et la tenue des fixations.",
          cards: [
            {
              title: "Plis croisés",
              description:
                "Ils limitent les mouvements et rendent le panneau plus stable.",
            },
            {
              title: "Bonne tenue des vis",
              description:
                "Utile pour des armoires, tiroirs et modules soumis à l'usage.",
            },
            {
              title: "Structure robuste",
              description:
                "Particulièrement pertinente dans des projets résidentiels long terme.",
            },
            {
              title: "Polyvalence",
              description: "Cuisine, rangement et autres zones exigeantes.",
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
          heading: "Où le contreplaqué est le plus pertinent",
          intro:
            "Ce matériau prend de la valeur quand la structure, la charge et la stabilité importent plus que le rendu décoratif seul.",
          badges: ["Caissons", "Tiroirs", "Long terme"],
          cardTitle: "Applications typiques",
          items: [
            "Caissons d'armoires",
            "Composantes internes porteuses",
            "Tiroirs et modules soumis aux charges",
            "Projets orientés durabilité à long terme",
          ],
          actions: [
            {
              label: "Voir la fabrication",
              href: "/services/fabrication",
              variant: "primary",
            },
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie",
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
          heading: "Humidité, limites et points à surveiller",
          intro:
            "Le contreplaqué n'est pas imperméable. Les chants, l'assemblage, le grade et la finition restent décisifs pour le résultat final.",
          items: [
            {
              title: "Qualité variable selon le grade.",
              description: "Tous les contreplaqués ne se valent pas.",
            },
            {
              title: "Coût souvent plus élevé.",
              description:
                "Le gain se joue surtout sur la structure et la longévité.",
            },
            {
              title: "Exécution finale critique.",
              description:
                "Chants visibles, humidité et pose influencent fortement le rendu.",
            },
          ],
          actions: [
            {
              label: "Comparer les matériaux",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Détail de cuisine sur mesure en contreplaqué",
          },
          cardTitle: "À retenir",
          cardDescription:
            "Le contreplaqué est souvent un excellent choix structurel, mais sa vraie performance dépend aussi des détails d'exécution.",
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
          heading: "Pages connexes",
          items: [
            {
              title: "Comparatif complet",
              href: "/materiaux/comparatif",
              description:
                "Comparer contreplaqué, MDF, mélamine et bois massif.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Comparatif visuel de plusieurs matériaux d'armoires",
              },
              badges: ["Comparatif"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Plus orienté finition peinte.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Peinture"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Mélamine",
              href: "/materiaux/melamine",
              description: "Plus orientée décor et budget.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Panneau de mélamine pour mobilier sur mesure",
              },
              badges: ["Décor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif",
              description: "Plus pertinent sur les éléments visibles.",
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
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - Contreplaqué",
          items: [
            {
              q: "Le contreplaqué est-il toujours meilleur que le MDF ?",
              a: "Pas nécessairement. Le contreplaqué est souvent très pertinent pour la structure; le MDF peut mieux convenir à certaines façades et finitions.",
            },
            {
              q: "Le contreplaqué est-il adapté à la salle de bain ?",
              a: "Selon le contexte, oui. Les détails de protection et d'installation restent déterminants.",
            },
            {
              q: "Est-ce plus cher ?",
              a: "Souvent oui, en échange d'une meilleure qualité structurelle selon l'usage.",
            },
            {
              q: "Est-ce visible une fois installé ?",
              a: "Généralement non, sauf choix design spécifique avec tranches visibles.",
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
          heading: "Vous voulez privilégier une structure plus durable ?",
          intro:
            "On vous aide à voir si le contreplaqué est pertinent pour votre projet, ou si une combinaison de matériaux sera plus cohérente.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Comparer les matériaux",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
