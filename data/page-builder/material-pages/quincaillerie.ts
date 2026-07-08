import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const quincailleriePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Quincaillerie d'armoires haut de gamme",
    description:
      "Découvrez pourquoi la quincaillerie joue un rôle central dans la durabilité, la fluidité et la qualité perçue d'une cuisine ou d'une vanité haut de gamme.",
    path: "/materiaux/quincaillerie",
    ogAlt: "Quincaillerie d'armoires haut de gamme Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    {
      name: "Quincaillerie",
      url: SITE.url + "/materiaux/quincaillerie",
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
            "Quincaillerie d'armoires : un élément clé de la durabilité d'une cuisine",
          description:
            "La quincaillerie d'armoire désigne l'ensemble des mécanismes — charnières, coulisses de tiroir, systèmes de fermeture amortie — qui font ouvrir, fermer et supporter portes et tiroirs. Souvent invisible, elle joue un rôle central dans la durabilité, la fluidité et le confort d'utilisation d'une cuisine ou d'une vanité.",
          actions: [
            {
              label: "Découvrir nos cuisines sur mesure",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "Voir notre approche clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Matériaux", "Durabilité", "Qualité perçue"],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Cuisine sur mesure mettant en valeur la qualité de la quincaillerie",
          },
          caption:
            "Charnières, coulisses et mécanismes influencent directement l'expérience quotidienne",
        },
      },
    },
    {
      id: "importance",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi la quincaillerie est-elle si importante ?",
          description:
            "La quincaillerie regroupe l'ensemble des mécanismes qui rendent les armoires fonctionnelles : charnières, coulisses, systèmes d'ouverture et mécanismes de fermeture. Ces composants influencent directement la stabilité des portes, la fluidité des tiroirs, le niveau de bruit, la résistance à l'usure et la qualité perçue du mobilier dans le temps. Dans un projet durable, ce n'est pas un détail. C'est une partie intégrante de la qualité globale.",
          cards: [
            {
              title: "Tiroirs plus solides et stables",
              description:
                "Une bonne base mécanique garde le mouvement net même sous charge et dans l'usage fréquent.",
            },
            {
              title: "Ouverture plus fluide et silencieuse",
              description:
                "La fermeture amortie et l'extension complète changent concrètement le confort quotidien.",
            },
            {
              title: "Moins d'usure et moins de réparations",
              description:
                "Des mécanismes robustes réduisent les chocs, les désalignements et l'usure prématurée.",
            },
            {
              title: "Durabilité globale mieux protégée",
              description:
                "La quincaillerie soutient la sensation de qualité et la longévité du mobilier.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "types",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Les différents types de quincaillerie utilisés dans les armoires",
          intro:
            "Une cuisine haut de gamme repose sur plusieurs mécanismes, chacun ayant un impact concret sur la durabilité et l'expérience d'utilisation.",
          columns: "2",
          items: [
            {
              title: "Charnières d'armoires",
              description:
                "Elles permettent l'ouverture et la fermeture précises des portes, avec réglages fins et fermeture amortie.",
              icon: "doorOpen",
              bullets: [
                "Alignement précis des portes",
                "Réglage tridimensionnel",
                "Fermeture douce et silencieuse",
              ],
            },
            {
              title: "Coulisses de tiroirs",
              description:
                "Elles assurent la fluidité du mouvement, la stabilité du tiroir et l'accès complet au rangement.",
              icon: "slidersHorizontal",
              bullets: [
                "Extension complète",
                "Fermeture amortie (soft-close)",
                "Stabilité même sous charge",
              ],
            },
            {
              title: "Systèmes de tiroirs",
              description:
                "L'ensemble structure plus mécanisme doit rester cohérent pour offrir une utilisation durable.",
              icon: "package2",
              bullets: [
                "Supporte un usage quotidien intensif",
                "Améliore la perception de qualité",
                "Réduit l'usure prématurée",
              ],
            },
            {
              title: "Mécanismes spécialisés",
              description:
                "Solutions pour armoires hautes, systèmes sans poignées ou rangements plus techniques.",
              icon: "wrench",
              bullets: [
                "Ouverture plus fluide",
                "Design plus épuré",
                "Meilleure ergonomie",
              ],
            },
          ],
        },
      },
    },
    {
      id: "criteria",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment reconnaître une quincaillerie de qualité",
          description:
            "Plusieurs critères permettent d'évaluer la robustesse et la pertinence d'un mécanisme. On regarde sa capacité à supporter la charge, la qualité du mouvement, la précision des ajustements et sa tenue après de nombreux cycles d'utilisation.",
          cards: [
            {
              title: "Capacité de charge",
              description:
                "Le mécanisme doit supporter un poids important sans déformation ni jeu excessif.",
            },
            {
              title: "Extension complète",
              description:
                "Le tiroir s'ouvre entièrement pour un accès plus simple et une meilleure utilisation de l'espace.",
            },
            {
              title: "Fermeture amortie",
              description:
                "Le système ralentit la fermeture, limite les chocs, le bruit et l'usure.",
            },
            {
              title: "Précision des ajustements",
              description:
                "Des réglages précis gardent les portes alignées et le mobilier stable dans le temps.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "application",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Application concrète dans un tiroir durable",
          intro:
            "La performance d'un tiroir dépend à la fois de sa construction et de la qualité de ses mécanismes. Structure et quincaillerie doivent fonctionner ensemble.",
          items: [
            {
              title: "Structure en bois massif de bouleau.",
              description:
                "Elle renforce la solidité générale et soutient mieux les cycles répétés d'ouverture.",
            },
            {
              title: "Fond en contreplaqué de bouleau.",
              description:
                "Il aide à garder la stabilité et à mieux supporter le poids du contenu.",
            },
            {
              title: "Coulisses robustes à extension complète.",
              description:
                "Avec fermeture amortie, elles améliorent la fluidité tout en réduisant l'usure à long terme.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Détail de cuisine sur mesure illustrant un tiroir durable",
          },
          cardTitle: "Exemple de structure durable",
          cardDescription:
            "Cette combinaison améliore la stabilité, la résistance au poids et la fluidité du tiroir, tout en réduisant l'usure prématurée.",
        },
      },
    },
    {
      id: "comparison",
      frame: { surface: "muted" },
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Quincaillerie standard vs quincaillerie haut de gamme",
          intro:
            "Les différences deviennent rapidement visibles dans un usage quotidien.",
          columns: ["Quincaillerie standard", "Quincaillerie haut de gamme"],
          rows: [
            {
              label: "Extension du tiroir",
              values: ["Partielle", "Extension complète"],
            },
            {
              label: "Fermeture",
              values: ["Sans amortisseur", "Douce et amortie"],
            },
            {
              label: "Capacité de charge",
              values: ["Plus faible", "Élevée"],
            },
            {
              label: "Durabilité",
              values: ["Moyenne", "Conçue pour durer"],
            },
            {
              label: "Confort",
              values: ["Fonctionnel", "Fluide et silencieux"],
            },
          ],
        },
      },
    },
    {
      id: "premium-impact",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Pourquoi c'est essentiel dans une cuisine haut de gamme",
          intro:
            "Dans une cuisine premium, la qualité ne dépend pas uniquement des matériaux visibles. Les mécanismes influencent directement la fluidité des mouvements, le silence d'utilisation et la sensation de solidité. Une quincaillerie robuste aide à maintenir l'alignement des portes, la stabilité des tiroirs et une expérience cohérente pendant des années.",
          badges: ["Fluidité", "Silence", "Durabilité"],
          cardTitle: "Ce qu'une bonne quincaillerie apporte",
          items: [
            "Tiroirs plus solides et plus stables",
            "Ouverture et fermeture plus fluides",
            "Réduction du bruit au quotidien",
            "Moins de chocs mécaniques",
            "Moins de réparations à long terme",
            "Meilleure durabilité globale du mobilier",
          ],
          actions: [
            {
              label: "Voir nos cuisines sur mesure",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "Comprendre notre fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "further",
      frame: { divider: "top", surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Explorez les autres éléments qui influencent la durabilité d'un projet sur mesure",
          intro:
            "La quincaillerie est un maillon important, mais elle s'intègre toujours à une logique plus large de conception, de structure et de matériaux.",
          items: [
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif",
              description:
                "Comprendre son rôle dans la solidité des armoires et des tiroirs.",
              image: {
                src: "/images/generated/materials/material-solid-wood-card-01.webp",
                alt: "Bois massif pour armoires sur mesure",
              },
              badges: ["Matériaux", "Structure"],
              footerCtaLabel: "Voir le bois massif",
            },
            {
              title: "Contreplaqué",
              href: "/materiaux/contreplaque",
              description:
                "Pourquoi il améliore la stabilité et la durabilité dans les éléments critiques.",
              image: {
                src: "/images/generated/materials/material-plywood-card-01.webp",
                alt: "Contreplaqué utilisé dans une cuisine sur mesure",
              },
              badges: ["Matériaux", "Stabilité"],
              footerCtaLabel: "Voir le contreplaqué",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "Voir comment ces choix s'intègrent dans un projet complet.",
              image: {
                src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Espaces", "Cuisine"],
              footerCtaLabel: "Voir les cuisines",
            },
            {
              title: "Vanité salle de bain",
              href: "/espaces/salle-de-bain",
              description:
                "Explorer les mêmes principes appliqués à un environnement plus humide.",
              image: {
                src: "/images/generated/materials/material-hardware-detail-01.webp",
                alt: "Vanité sur mesure pour salle de bain",
              },
              badges: ["Espaces", "Salle de bain"],
              footerCtaLabel: "Voir la salle de bain",
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
          heading: "FAQ",
          intro:
            "Réponses aux questions fréquentes sur la quincaillerie d'armoires.",
          items: [
            {
              q: "Quelle est la différence entre une coulisse standard et une coulisse à extension complète ?",
              a: "Une coulisse standard n'ouvre pas complètement le tiroir. Une coulisse à extension complète donne accès à toute la profondeur du tiroir, ce qui améliore l'usage quotidien et l'organisation.",
            },
            {
              q: "Pourquoi la fermeture amortie est-elle importante ?",
              a: "Elle réduit les chocs lors de la fermeture, améliore le confort d'utilisation, diminue le bruit et contribue à prolonger la durée de vie du mécanisme.",
            },
            {
              q: "La quincaillerie influence-t-elle réellement la durabilité d'une cuisine ?",
              a: "Oui. Les portes et tiroirs sont utilisés très fréquemment. Une quincaillerie robuste et bien conçue permet de conserver la stabilité, l'alignement et la fluidité pendant de nombreuses années.",
            },
            {
              q: "La quincaillerie haut de gamme change-t-elle seulement le confort ou aussi la qualité globale ?",
              a: "Les deux. Elle améliore le confort au quotidien, mais elle participe aussi à la qualité perçue, à la résistance à l'usure et à la cohérence d'un mobilier conçu pour durer.",
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
          heading: "Obtenez une soumission pour un projet durable",
          intro:
            "On vous aide à cadrer les bons choix de matériaux, de quincaillerie et de fabrication pour un résultat plus stable à long terme.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "Montréal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
