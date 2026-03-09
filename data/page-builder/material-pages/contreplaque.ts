import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Pourquoi le contreplaque",
    description:
      "Contreplaque : stabilite, tenue des vis et durabilite pour la structure d'armoires sur mesure.",
    path: "/materiaux/contreplaque/",
    ogAlt: "Contreplaque - Materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    {
      name: "Pourquoi le contreplaque",
      url: SITE.url + "/materiaux/contreplaque/",
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
          eyebrow: "Dilamco - Materiaux",
          heading:
            "Contreplaque : stabilite, durabilite et structure intelligente",
          description:
            "Le contreplaque est souvent privilegie en sur mesure pour la structure des armoires. Sa composition en plis croises lui donne un comportement plus stable et plus previsible.",
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
          badges: ["Structure", "Stabilite", "Durabilite"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.png",
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
            "Le contreplaque est constitue de plis de bois colles avec fibres croisees. Cette logique constructive ameliore la stabilite dimensionnelle, la resistance mecanique et la tenue des fixations.",
          cards: [
            {
              title: "Plis croises",
              description:
                "Ils limitent les mouvements et rendent le panneau plus stable.",
            },
            {
              title: "Bonne tenue des vis",
              description:
                "Utile pour des armoires, tiroirs et modules soumis a l'usage.",
            },
            {
              title: "Structure robuste",
              description:
                "Particulierement pertinente dans des projets residentiels long terme.",
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
          heading: "Ou le contreplaque est le plus pertinent",
          intro:
            "Ce materiau prend de la valeur quand la structure, la charge et la stabilite importent plus que le rendu decoratif seul.",
          badges: ["Caissons", "Tiroirs", "Long terme"],
          cardTitle: "Applications typiques",
          items: [
            "Caissons d'armoires",
            "Composantes internes porteuses",
            "Tiroirs et modules soumis aux charges",
            "Projets orientes durabilite a long terme",
          ],
          actions: [
            {
              label: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "default",
            },
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie/",
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
          heading: "Humidite, limites et points a surveiller",
          intro:
            "Le contreplaque n'est pas impermeable. Les chants, l'assemblage, le grade et la finition restent decisifs pour le resultat final.",
          items: [
            {
              title: "Qualite variable selon le grade.",
              description: "Tous les contreplaques ne se valent pas.",
            },
            {
              title: "Cout souvent plus eleve.",
              description:
                "Le gain se joue surtout sur la structure et la longevite.",
            },
            {
              title: "Execution finale critique.",
              description:
                "Chants visibles, humidite et pose influencent fortement le rendu.",
            },
          ],
          actions: [
            {
              label: "Comparer les materiaux",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
            {
              label: "Voir tous les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.png",
            alt: "Detail de cuisine sur mesure en contreplaque",
          },
          cardTitle: "A retenir",
          cardDescription:
            "Le contreplaque est souvent un excellent choix structurel, mais sa vraie performance depend aussi des details d'execution.",
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
              href: "/materiaux/comparatif/",
              description:
                "Comparer contreplaque, MDF, melamine et bois massif.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.png",
                alt: "Comparatif visuel de plusieurs materiaux d'armoires",
              },
              badges: ["Comparatif"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf/",
              description: "Plus oriente finition peinte.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.png",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Peinture"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine/",
              description: "Plus orientee decor et budget.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.png",
                alt: "Panneau de melamine pour mobilier sur mesure",
              },
              badges: ["Decor"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif/",
              description: "Plus pertinent sur les elements visibles.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.png",
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
          heading: "FAQ - contreplaque",
          items: [
            {
              q: "Le contreplaque est-il toujours meilleur que le MDF ?",
              a: "Pas necessairement. Le contreplaque est souvent tres pertinent pour la structure; le MDF peut mieux convenir a certaines facades et finis.",
            },
            {
              q: "Le contreplaque est-il adapte a la salle de bain ?",
              a: "Selon le contexte, oui. Les details de protection et d'installation restent determinants.",
            },
            {
              q: "Est-ce plus cher ?",
              a: "Souvent oui, en echange d'une meilleure qualite structurelle selon l'usage.",
            },
            {
              q: "Est-ce visible une fois installe ?",
              a: "Generalement non, sauf choix design specifique avec tranches visibles.",
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
          heading: "Vous voulez privilegier une structure plus durable ?",
          intro:
            "On vous aide a voir si le contreplaque est pertinent pour votre projet, ou si une combinaison sera plus coherente.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Comparer les materiaux",
              href: "/materiaux/comparatif/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
