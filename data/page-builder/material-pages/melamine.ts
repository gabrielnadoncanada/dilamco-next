import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Melamine",
    description:
      "Melamine : avantages, limites et usages recommandes pour armoires et projets sur mesure.",
    path: "/materiaux/melamine/",
    ogAlt: "Melamine - Materiaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    { name: "Melamine", url: SITE.url + "/materiaux/melamine/" },
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
          heading: "Melamine : usages, limites et alternatives",
          description:
            "La melamine est populaire pour sa variete de finis et un cout souvent plus maitrise. Sa durabilite depend surtout des chants, de l'usage reel et de la qualite d'installation.",
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
          badges: ["Decor", "Entretien", "Cout maitrise"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Finis decoratifs de type melamine",
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
          heading: "Ce que la melamine apporte",
          description:
            "La melamine est un panneau recouvert d'un revetement decoratif. Elle peut etre tres pertinente pour certains projets grace a sa variete de decors et son entretien simple.",
          cards: [
            {
              title: "Grande variete de finis",
              description: "Bois, unis, textures et autres decors disponibles.",
            },
            {
              title: "Entretien simple",
              description:
                "Un avantage concret dans plusieurs usages quotidiens.",
            },
            {
              title: "Cout souvent maitrise",
              description:
                "Interesse particulierement certains budgets et portees de projet.",
            },
            {
              title: "Sensibilite des chants",
              description:
                "Les impacts et infiltrations y sont souvent decisifs.",
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
          heading: "Quand la melamine est un bon choix",
          intro:
            "La melamine devient pertinente quand le projet valorise surtout le decor, l'entretien et un cout mieux cadre, tout en gardant une execution rigoureuse.",
          badges: ["Decor", "Interieurs", "Budget"],
          cardTitle: "Bon usage de la melamine",
          items: [
            "Composantes ou interieurs cibles",
            "Projets orientes decor et rationalisation",
            "Configurations ou les chants sont bien traites",
            "Choix combines avec d'autres materiaux pour les zones critiques",
          ],
          actions: [
            {
              label: "Voir tous les materiaux",
              href: "/materiaux/",
              variant: "default",
            },
            {
              label: "Voir le design",
              href: "/services/design/",
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
          heading: "Limites a surveiller",
          intro:
            "La melamine peut se degrader si l'humidite s'infiltre, surtout via les chants. L'execution et le contexte d'usage comptent donc beaucoup.",
          items: [
            {
              title: "Chants sensibles.",
              description: "Ils doivent etre bien choisis et bien executes.",
            },
            {
              title: "Humidite a gerer.",
              description:
                "Les zones d'eau demandent une attention particuliere.",
            },
            {
              title: "Reparations moins discretes.",
              description:
                "Les dommages sont souvent plus difficiles a invisibiliser.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
            {
              label: "Comparer avec le MDF",
              href: "/materiaux/mdf/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Panneaux melamine decoratifs",
          },
          cardTitle: "Approche recommandee",
          cardDescription:
            "La melamine fonctionne mieux lorsqu'elle est utilisee de facon ciblee, avec une logique claire sur les zones sensibles.",
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
              description: "Comprendre le bon usage de chaque option.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
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
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "Panneau MDF avec finition peinte",
              },
              badges: ["Peinture"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Contreplaque",
              href: "/materiaux/contreplaque/",
              description: "Plus oriente structure durable.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Detail de contreplaque pour armoires sur mesure",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir la page",
            },
            {
              title: "Couleurs et finis",
              href: "/materiaux/couleurs/",
              description: "Le decor doit rester coherent avec l'usage.",
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
          heading: "FAQ - melamine",
          items: [
            {
              q: "La melamine est-elle bas de gamme ?",
              a: "Pas forcement. Elle peut etre pertinente selon le projet et l'usage reel.",
            },
            {
              q: "La melamine gonfle-t-elle ?",
              a: "Elle peut se degrader si l'humidite s'infiltre, surtout via les chants.",
            },
            {
              q: "Melamine ou MDF ?",
              a: "Le MDF est souvent choisi pour peinture uniforme; la melamine pour les finis decoratifs et un cout plus maitrise.",
            },
            {
              q: "Est-ce recommande en salle de bain ?",
              a: "Selon le contexte. La ventilation et la qualite d'execution y sont critiques.",
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
          heading: "Vous voulez savoir si la melamine est pertinente ici ?",
          intro:
            "On vous aide a voir si elle est coherente pour votre espace, ou si une autre combinaison sera plus durable.",
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
