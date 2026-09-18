import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en contreplaqué : stabilité et durabilité",
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
          eyebrow: "Matériaux",
          heading: "Le contreplaqué tient la structure des armoires",
          description:
            "Des plis de bois collés à fil croisé. Résultat : un panneau plus stable que la particule, qui garde les vis et les charnières.",
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
          badges: ["Structure", "Stabilité", "Caissons"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Cuisine sur mesure avec structure durable",
          },
          caption: "Caissons, tiroirs et pièces sous charge",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi il sert de structure",
          description:
            "Le fil croisé d'un pli à l'autre bloque les mouvements du bois. C'est ce qui donne au panneau sa tenue mécanique.",
          cards: [
            {
              title: "Plis croisés",
              description:
                "Le panneau bouge peu, même sur de grandes hauteurs.",
            },
            {
              title: "Tenue des vis",
              description:
                "Charnières et coulisses restent serrées après des milliers de cycles.",
            },
            {
              title: "Charge supportée",
              description:
                "Tablettes et fonds de tiroirs fléchissent moins sous le poids.",
            },
            {
              title: "Coût plus élevé",
              description:
                "L'écart se justifie sur les pièces sollicitées, pas sur tout.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qu'il faut surveiller",
          intro:
            "Le contreplaqué n'est pas imperméable. Le grade, les chants et la pose décident du résultat.",
          items: [
            {
              title: "Le grade change tout",
              description: "Nombre de plis, vides internes, qualité de la colle.",
            },
            {
              title: "Chants à fermer",
              description: "Visibles ou exposés à l'eau, ils doivent être scellés.",
            },
            {
              title: "Zones humides",
              description: "Sous évier et salle de bain, on protège davantage.",
            },
          ],
          actions: [
            {
              label: "Comparer les matériaux",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Détail de cuisine sur mesure en contreplaqué",
          },
          cardTitle: "À retenir",
          cardDescription:
            "Excellent choix structurel, à condition de soigner le grade et les chants.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Contreplaqué ou MDF ?",
              a: "Les deux, à des endroits différents. Le contreplaqué pour les caissons et les tiroirs, parce qu'il tient les vis. Le MDF pour les portes peintes, parce que sa surface est plus lisse.",
            },
            {
              q: "Est-ce plus cher ?",
              a: "Oui, généralement plus cher que le MDF ou la particule. L'écart se rentabilise sur les pièces sollicitées chaque jour : caissons, tiroirs, tablettes chargées.",
            },
            {
              q: "Est-ce adapté à la salle de bain ?",
              a: "Oui, avec des chants scellés, un fini qui protège la surface et une ventilation correcte. La vapeur attaque les panneaux par leurs bords avant tout.",
            },
            {
              q: "Est-ce visible une fois installé ?",
              a: "Non, sauf choix de design volontaire. Les plis peuvent rester apparents sur un chant ou une tablette, comme parti pris esthétique.",
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
          heading: "Vous visez une structure qui dure ?",
          intro:
            "On vous dit où le contreplaqué change vraiment quelque chose dans votre projet.",
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
