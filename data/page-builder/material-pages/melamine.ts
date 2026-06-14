import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Mélamine",
    description:
      "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure.",
    path: "/materiaux/melamine",
    ogAlt: "Mélamine - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine/" },
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
          heading: "Mélamine : usages, limites et alternatives",
          description:
            "La mélamine est populaire pour sa variété de finis et un coût souvent plus maîtrisé. Sa durabilité dépend surtout des chants, de l'usage réel et de la qualité d'installation.",
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
          badges: ["Décor", "Entretien", "Coût maîtrisé"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Finis décoratifs de type mélamine",
          },
          caption:
            "Pertinente dans certains contextes, moins pardonnante dans d'autres",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que la mélamine apporte",
          description:
            "La mélamine est un panneau recouvert d'un revêtement décoratif. Elle peut être très pertinente pour certains projets grâce à sa variété de décors et son entretien simple.",
          cards: [
            {
              title: "Grande variété de finis",
              description: "Bois, unis, textures et autres décors disponibles.",
            },
            {
              title: "Entretien simple",
              description:
                "Un avantage concret dans plusieurs usages quotidiens.",
            },
            {
              title: "Coût souvent maîtrisé",
              description:
                "Intéresse particulièrement certains budgets et portées de projet.",
            },
            {
              title: "Sensibilité des chants",
              description:
                "Les impacts et infiltrations y sont souvent décisifs.",
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
          heading: "Quand la mélamine est un bon choix",
          intro:
            "La mélamine devient pertinente quand le projet valorise surtout le décor, l'entretien et un coût mieux cadré, tout en gardant une exécution rigoureuse.",
          badges: ["Décor", "Intérieurs", "Budget"],
          cardTitle: "Bon usage de la mélamine",
          items: [
            "Composantes ou intérieurs cibles",
            "Projets orientés décor et rationalisation",
            "Configurations où les chants sont bien traités",
            "Choix combinés avec d'autres matériaux pour les zones critiques",
          ],
          actions: [
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "default",
            },
            {
              label: "Voir le design",
              href: "/services/design",
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
          heading: "Limites à surveiller",
          intro:
            "La mélamine peut se dégrader si l'humidité s'infiltre, surtout via les chants. L'exécution et le contexte d'usage comptent donc beaucoup.",
          items: [
            {
              title: "Chants sensibles.",
              description: "Ils doivent être bien choisis et bien exécutés.",
            },
            {
              title: "Humidité à gérer.",
              description:
                "Les zones d'eau demandent une attention particulière.",
            },
            {
              title: "Réparations moins discrètes.",
              description:
                "Les dommages sont souvent plus difficiles à invisibiliser.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "outline",
            },
            {
              label: "Comparer avec le MDF",
              href: "/materiaux/mdf",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Panneaux mélamine décoratifs",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "La mélamine fonctionne mieux lorsqu'elle est utilisée de façon ciblée, avec une logique claire sur les zones sensibles.",
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
              description: "Comprendre le bon usage de chaque option.",
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
              title: "Contreplaqué",
              href: "/materiaux/contreplaque",
              description: "Plus orienté structure durable.",
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
              description: "Le décor doit rester cohérent avec l'usage.",
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
          heading: "FAQ - mélamine",
          items: [
            {
              q: "La mélamine est-elle bas de gamme ?",
              a: "Pas forcément. Elle peut être pertinente selon le projet et l'usage réel.",
            },
            {
              q: "La mélamine gonfle-t-elle ?",
              a: "Elle peut se dégrader si l'humidité s'infiltre, surtout via les chants.",
            },
            {
              q: "Mélamine ou MDF ?",
              a: "Le MDF est souvent choisi pour peinture uniforme; la mélamine pour les finis décoratifs et un coût plus maîtrisé.",
            },
            {
              q: "Est-ce recommandé en salle de bain ?",
              a: "Selon le contexte. La ventilation et la qualité d'exécution y sont critiques.",
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
          heading: "Vous voulez savoir si la mélamine est pertinente ici ?",
          intro:
            "On vous aide à voir si elle est cohérente pour votre espace, ou si une autre combinaison sera plus durable.",
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
