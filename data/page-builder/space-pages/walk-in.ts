import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Walk-in sur mesure haut de gamme",
    description:
      "Walk-in sur mesure haut de gamme : conception, fabrication controlee et installation precise a Montreal, Laval et sur la Rive-Sud.",
    path: "/espaces/walk-in/",
    ogAlt: "Walk-in sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Walk-in sur mesure", url: SITE.url + "/espaces/walk-in/" },
  ],
  service: {
    name: "Walk-in sur mesure",
    description:
      "Conception, fabrication controlee et installation de walk-ins sur mesure haut de gamme.",
    url: SITE.url + "/espaces/walk-in/",
    serviceType: "Walk-in sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Espaces",
          heading: "Walk-in sur mesure, rangement pense pour l'usage reel",
          description:
            "Le sur mesure permet d'optimiser l'espace, d'ameliorer l'organisation et d'obtenir un resultat plus stable qu'un systeme standard.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Rangement", "Organisation", "Sur mesure"],
          image: {
            src: "/images/generated/spaces/space-walkin-hero-01.webp",
            alt: "Walk-in sur mesure haut de gamme",
          },
          caption:
            "Organisation personnalisee pour chambres, garde-robes et espaces restreints",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un walk-in concu pour l'usage quotidien",
          intro:
            "Ce type de projet sert a mieux organiser les zones, les acces et les volumes plutot qu'a empiler des tablettes standard.",
          badges: ["Optimisation", "Acces", "Durabilite"],
          cardTitle: "Quand c'est un bon fit",
          items: [
            "Vous voulez maximiser un espace contraint.",
            "Le rangement doit suivre vos habitudes reelles.",
            "Vous cherchez un resultat plus solide et mieux integre.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Une methode simple pour un rangement mieux pense",
          intro:
            "Le projet est structure autour des usages, des acces et des zones de rangement reelles.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Besoins de penderie, tiroirs, accessoires et volumes a organiser.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Validation des zones, des hauteurs et de la circulation dans l'espace.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production controlee avec des specifications stables et un rendu coherent.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements et finitions verifies pour un resultat net et durable.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Des details de construction qui changent l'usage",
          intro:
            "Le premium ne se limite pas a l'esthetique. Il se voit dans la tenue des tiroirs, la stabilite et la qualite de fabrication.",
          items: [
            {
              title: "Tiroirs robustes",
              description:
                "Bois massif de bouleau pour supporter l'usage quotidien et les charges variables.",
            },
            {
              title: "Structure stable",
              description:
                "Contreplaque de bouleau pour garder un meilleur comportement dans le temps.",
            },
            {
              title: "Configuration adaptee",
              description:
                "Organisation pensee pour chaussures, vetements, accessoires et circulation.",
            },
          ],
          actions: [
            {
              label: "Explorer les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir nos espaces",
              href: "/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Detail materiau pour walk-in sur mesure",
          },
          cardTitle: "Avantage concret",
          cardDescription:
            "Une meilleure organisation et une meilleure tenue dans le temps rendent le walk-in plus agreable a utiliser chaque jour.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets walk-in en vedette",
          intro:
            "Quelques realisations recentes pour illustrer l'organisation et le niveau de finition.",
          items: [
            {
              title: "Walk-in sur mesure",
              href: "/projets/",
              description:
                "Organisation sur mesure avec circulation et rangement adaptes au quotidien.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Projet walk-in sur mesure a Montreal",
              },
              badges: ["Montreal", "Organisation"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in sur mesure",
              href: "/projets/",
              description:
                "Walk-in concu pour maximiser l'espace avec un rendu propre et durable.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Projet walk-in sur mesure a Laval",
              },
              badges: ["Laval", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in sur mesure",
              href: "/projets/",
              description:
                "Rangement personnalise et installation precise pour un usage quotidien.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Projet walk-in sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Premium"],
              footerCtaLabel: "Voir le projet",
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
          heading: "FAQ - walk-in sur mesure",
          intro:
            "Les questions qui reviennent le plus souvent avant de demarrer un projet de rangement sur mesure.",
          items: [
            {
              q: "Combien coute un walk-in sur mesure ?",
              a: "Le prix varie selon les dimensions, le niveau d'amenagement et les materiaux choisis.",
            },
            {
              q: "Est-ce utile dans un petit espace ?",
              a: "Oui. Le sur mesure est justement pertinent quand il faut optimiser niches, angles et hauteurs disponibles.",
            },
            {
              q: "Quelle est la difference avec un systeme modulaire ?",
              a: "Le sur mesure permet une organisation plus adaptee, une meilleure integration et une structure souvent plus robuste.",
            },
            {
              q: "Travaillez-vous a Montreal et autour ?",
              a: "Oui. Nous desservons Montreal, Laval et la Rive-Sud.",
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
          heading: "Parlez-nous de votre projet de walk-in",
          intro:
            "On vous aide a cadrer un rangement sur mesure qui correspond vraiment a l'espace et a l'usage.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
