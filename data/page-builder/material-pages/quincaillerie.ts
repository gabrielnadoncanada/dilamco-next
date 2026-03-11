import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const quincailleriePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Quincaillerie d'armoires haut de gamme | Dilamco",
    description:
      "Decouvrez pourquoi la quincaillerie joue un role central dans la durabilite, la fluidite et la qualite percue d'une cuisine ou d'une vanite haut de gamme.",
    path: "/materiaux/quincaillerie/",
    ogAlt: "Quincaillerie d'armoires haut de gamme Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Materiaux", url: SITE.url + "/materiaux/" },
    {
      name: "Quincaillerie",
      url: SITE.url + "/materiaux/quincaillerie/",
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
            "Quincaillerie d'armoires : un element cle de la durabilite d'une cuisine",
          description:
            "La qualite d'une cuisine ou d'une vanite ne depend pas seulement des materiaux visibles. Les mecanismes qui ouvrent, ferment et supportent portes et tiroirs jouent un role central dans la durabilite, la fluidite et le confort d'utilisation.",
          actions: [
            {
              label: "Decouvrir nos cuisines sur mesure",
              href: "/espaces/cuisine/",
              variant: "default",
            },
            {
              label: "Voir notre approche cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          badges: ["Materiaux", "Durabilite", "Qualite percue"],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Cuisine sur mesure mettant en valeur la qualite de la quincaillerie",
          },
          caption:
            "Charnieres, coulisses et mecanismes influencent directement l'experience quotidienne",
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
            "La quincaillerie regroupe l'ensemble des mecanismes qui rendent les armoires fonctionnelles : charnieres, coulisses, systemes d'ouverture et mecanismes de fermeture. Ces composants influencent directement la stabilite des portes, la fluidite des tiroirs, le niveau de bruit, la resistance a l'usure et la qualite percue du mobilier dans le temps. Dans un projet durable, ce n'est pas un detail. C'est une partie integrante de la qualite globale.",
          cards: [
            {
              title: "Tiroirs plus solides et stables",
              description:
                "Une bonne base mecanique garde le mouvement net meme sous charge et dans l'usage frequent.",
            },
            {
              title: "Ouverture plus fluide et silencieuse",
              description:
                "La fermeture amortie et l'extension complete changent concretement le confort quotidien.",
            },
            {
              title: "Moins d'usure et moins de reparations",
              description:
                "Des mecanismes robustes reduisent les chocs, les desalignements et l'usure prematuree.",
            },
            {
              title: "Durabilite globale mieux protegee",
              description:
                "La quincaillerie soutient la sensation de qualite et la longevite du mobilier.",
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
            "Les differents types de quincaillerie utilises dans les armoires",
          intro:
            "Une cuisine haut de gamme repose sur plusieurs mecanismes, chacun ayant un impact concret sur la durabilite et l'experience d'utilisation.",
          columns: "2",
          items: [
            {
              title: "Charnieres d'armoires",
              description:
                "Elles permettent l'ouverture et la fermeture precises des portes, avec reglages fins et fermeture amortie.",
              icon: "doorOpen",
              bullets: [
                "Alignement precis des portes",
                "Reglage tridimensionnel",
                "Fermeture douce et silencieuse",
              ],
            },
            {
              title: "Coulisses de tiroirs",
              description:
                "Elles assurent la fluidite du mouvement, la stabilite du tiroir et l'acces complet au rangement.",
              icon: "slidersHorizontal",
              bullets: [
                "Extension complete",
                "Fermeture amortie (soft-close)",
                "Stabilite meme sous charge",
              ],
            },
            {
              title: "Systemes de tiroirs",
              description:
                "L'ensemble structure plus mecanisme doit rester coherent pour offrir une utilisation durable.",
              icon: "package2",
              bullets: [
                "Supporte un usage quotidien intensif",
                "Ameliore la perception de qualite",
                "Reduit l'usure prematuree",
              ],
            },
            {
              title: "Mecanismes specialises",
              description:
                "Solutions pour armoires hautes, systemes sans poignees ou rangements plus techniques.",
              icon: "wrench",
              bullets: [
                "Ouverture plus fluide",
                "Design plus epure",
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
          heading: "Comment reconnaitre une quincaillerie de qualite",
          description:
            "Plusieurs criteres permettent d'evaluer la robustesse et la pertinence d'un mecanisme. On regarde sa capacite a supporter la charge, la qualite du mouvement, la precision des ajustements et sa tenue apres de nombreux cycles d'utilisation.",
          cards: [
            {
              title: "Capacite de charge",
              description:
                "Le mecanisme doit supporter un poids important sans deformation ni jeu excessif.",
            },
            {
              title: "Extension complete",
              description:
                "Le tiroir s'ouvre entierement pour un acces plus simple et une meilleure utilisation de l'espace.",
            },
            {
              title: "Fermeture amortie",
              description:
                "Le systeme ralentit la fermeture, limite les chocs, le bruit et l'usure.",
            },
            {
              title: "Precision des ajustements",
              description:
                "Des reglages precis gardent les portes alignees et le mobilier stable dans le temps.",
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
          heading: "Application concrete dans un tiroir durable",
          intro:
            "La performance d'un tiroir depend a la fois de sa construction et de la qualite de ses mecanismes. Structure et quincaillerie doivent fonctionner ensemble.",
          items: [
            {
              title: "Structure en bois massif de bouleau.",
              description:
                "Elle renforce la solidite generale et soutient mieux les cycles repetes d'ouverture.",
            },
            {
              title: "Fond en contreplaque de bouleau.",
              description:
                "Il aide a garder la stabilite et a mieux supporter le poids du contenu.",
            },
            {
              title: "Coulisses robustes a extension complete.",
              description:
                "Avec fermeture amortie, elles ameliorent la fluidite tout en reduisant l'usure a long terme.",
            },
          ],
          actions: [
            {
              label: "Explorer les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Detail de cuisine sur mesure illustrant un tiroir durable",
          },
          cardTitle: "Exemple de structure durable",
          cardDescription:
            "Cette combinaison ameliore la stabilite, la resistance au poids et la fluidite du tiroir, tout en reduisant l'usure prematuree.",
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
            "Les differences deviennent rapidement visibles dans un usage quotidien.",
          columns: ["Quincaillerie standard", "Quincaillerie haut de gamme"],
          rows: [
            {
              label: "Extension du tiroir",
              values: ["Partielle", "Extension complete"],
            },
            {
              label: "Fermeture",
              values: ["Sans amortisseur", "Douce et amortie"],
            },
            {
              label: "Capacite de charge",
              values: ["Plus faible", "Elevee"],
            },
            {
              label: "Durabilite",
              values: ["Moyenne", "Concue pour durer"],
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
            "Dans une cuisine premium, la qualite ne depend pas uniquement des materiaux visibles. Les mecanismes influencent directement la fluidite des mouvements, le silence d'utilisation et la sensation de solidite. Une quincaillerie robuste aide a maintenir l'alignement des portes, la stabilite des tiroirs et une experience coherente pendant des annees.",
          badges: ["Fluidite", "Silence", "Durabilite"],
          cardTitle: "Ce qu'une bonne quincaillerie apporte",
          items: [
            "Tiroirs plus solides et plus stables",
            "Ouverture et fermeture plus fluides",
            "Reduction du bruit au quotidien",
            "Moins de chocs mecaniques",
            "Moins de reparations a long terme",
            "Meilleure durabilite globale du mobilier",
          ],
          actions: [
            {
              label: "Voir nos cuisines sur mesure",
              href: "/espaces/cuisine/",
              variant: "default",
            },
            {
              label: "Comprendre notre fabrication",
              href: "/services/fabrication/",
              variant: "outline",
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
            "Explorez les autres elements qui influencent la durabilite d'un projet sur mesure",
          intro:
            "La quincaillerie est un maillon important, mais elle s'integre toujours a une logique plus large de conception, de structure et de materiaux.",
          items: [
            {
              title: "Bois massif",
              href: "/materiaux/bois-massif/",
              description:
                "Comprendre son role dans la solidite des armoires et des tiroirs.",
              image: {
                src: "/images/generated/materials/material-solid-wood-card-01.webp",
                alt: "Bois massif pour armoires sur mesure",
              },
              badges: ["Materiaux", "Structure"],
              footerCtaLabel: "Voir le bois massif",
            },
            {
              title: "Contreplaque",
              href: "/materiaux/contreplaque/",
              description:
                "Pourquoi il ameliore la stabilite et la durabilite dans les elements critiques.",
              image: {
                src: "/images/generated/materials/material-plywood-card-01.webp",
                alt: "Contreplaque utilise dans une cuisine sur mesure",
              },
              badges: ["Materiaux", "Stabilite"],
              footerCtaLabel: "Voir le contreplaque",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              description:
                "Voir comment ces choix s'integrent dans un projet complet.",
              image: {
                src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Espaces", "Cuisine"],
              footerCtaLabel: "Voir les cuisines",
            },
            {
              title: "Vanite salle de bain",
              href: "/espaces/salle-de-bain/",
              description:
                "Explorer les memes principes appliques a un environnement plus humide.",
              image: {
                src: "/images/generated/materials/material-hardware-detail-01.webp",
                alt: "Vanite sur mesure pour salle de bain",
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
            "Reponses aux questions frequentes sur la quincaillerie d'armoires.",
          items: [
            {
              q: "Quelle est la difference entre une coulisse standard et une coulisse a extension complete ?",
              a: "Une coulisse standard n'ouvre pas completement le tiroir. Une coulisse a extension complete donne acces a toute la profondeur du tiroir, ce qui ameliore l'usage quotidien et l'organisation.",
            },
            {
              q: "Pourquoi la fermeture amortie est-elle importante ?",
              a: "Elle reduit les chocs lors de la fermeture, ameliore le confort d'utilisation, diminue le bruit et contribue a prolonger la duree de vie du mecanisme.",
            },
            {
              q: "La quincaillerie influence-t-elle reellement la durabilite d'une cuisine ?",
              a: "Oui. Les portes et tiroirs sont utilises tres frequemment. Une quincaillerie robuste et bien concue permet de conserver la stabilite, l'alignement et la fluidite pendant de nombreuses annees.",
            },
            {
              q: "La quincaillerie haut de gamme change-t-elle seulement le confort ou aussi la qualite globale ?",
              a: "Les deux. Elle ameliore le confort au quotidien, mais elle participe aussi a la qualite percue, a la resistance a l'usure et a la coherence d'un mobilier concu pour durer.",
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
            "On vous aide a cadrer les bons choix de materiaux, de quincaillerie et de fabrication pour un resultat plus stable a long terme.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir tous les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
          ],
          note: "Montreal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
