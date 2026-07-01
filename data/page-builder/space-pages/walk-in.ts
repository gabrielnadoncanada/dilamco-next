import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Garde-robe et walk-in sur mesure à Montréal",
    description:
      "Garde-robe et walk-in sur mesure haut de gamme : conception, fabrication contrôlée et installation à Pierrefonds, Montréal, Laval et le Grand Montréal.",
    path: "/espaces/walk-in",
    ogAlt: "Garde-robe et walk-in sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Garde-robe sur mesure", url: SITE.url + "/espaces/walk-in" },
  ],
  service: {
    name: "Garde-robe et walk-in sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de garde-robes et walk-ins sur mesure haut de gamme à Pierrefonds, dans l'Ouest-de-l'Île et le Grand Montréal.",
    url: SITE.url + "/espaces/walk-in",
    serviceType: "Garde-robe sur mesure",
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
          heading:
            "Garde-robe et walk-in sur mesure à Pierrefonds et dans le Grand Montréal",
          description:
            "Une garde-robe sur mesure (ou walk-in) permet d'optimiser l'espace, d'améliorer l'organisation et d'obtenir un résultat plus stable et durable qu'un système standard — conception, fabrication et installation par une seule équipe.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Garde-robe", "Walk-in", "Sur mesure"],
          image: {
            src: "/images/generated/spaces/space-walkin-hero-01.webp",
            alt: "Garde-robe et walk-in sur mesure haut de gamme à Pierrefonds et dans le Grand Montréal",
          },
          caption:
            "Garde-robes, walk-ins et rangements sur mesure pour chambres et espaces restreints",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une garde-robe sur mesure conçue pour l'usage quotidien",
          intro:
            "Une garde-robe ou un walk-in sur mesure sert à mieux organiser les zones, les accès et les volumes plutôt qu'à empiler des tablettes standard.",
          badges: ["Optimisation", "Accès", "Durabilité"],
          cardTitle: "Quand c'est un bon fit",
          items: [
            "Vous voulez maximiser un espace contraint.",
            "Le rangement doit suivre vos habitudes réelles.",
            "Vous cherchez un résultat plus solide et mieux intégré.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
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
          heading: "Une méthode simple pour un rangement mieux pensé",
          intro:
            "Le projet est structuré autour des usages, des accès et des zones de rangement réelles.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Besoins de penderie, tiroirs, accessoires et volumes à organiser.",
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
                "Production contrôlée avec des spécifications stables et un rendu cohérent.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements et finitions vérifiés pour un résultat net et durable.",
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
          heading: "Des détails de construction qui changent l'usage",
          intro:
            "Le premium ne se limite pas à l'esthétique. Il se voit dans la tenue des tiroirs, la stabilité et la qualité de fabrication.",
          items: [
            {
              title: "Tiroirs robustes",
              description:
                "Bois massif de bouleau pour supporter l'usage quotidien et les charges variables.",
            },
            {
              title: "Structure stable",
              description:
                "Contreplaqué de bouleau pour garder un meilleur comportement dans le temps.",
            },
            {
              title: "Configuration adaptée",
              description:
                "Organisation pensée pour chaussures, vêtements, accessoires et circulation.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Détail matériau pour walk-in sur mesure",
          },
          cardTitle: "Avantage concret",
          cardDescription:
            "Une meilleure organisation et une meilleure tenue dans le temps rendent le walk-in plus agréable à utiliser chaque jour.",
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
            "Quelques réalisations récentes pour illustrer l'organisation et le niveau de finition.",
          items: [
            {
              title: "Walk-in sur mesure",
              href: "/projets",
              description:
                "Organisation sur mesure avec circulation et rangement adaptés au quotidien.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Projet walk-in sur mesure à Montréal",
              },
              badges: ["Montréal", "Organisation"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in sur mesure",
              href: "/projets",
              description:
                "Walk-in conçu pour maximiser l'espace avec un rendu propre et durable.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Projet walk-in sur mesure à Laval",
              },
              badges: ["Laval", "Sur mesure"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in sur mesure",
              href: "/projets",
              description:
                "Rangement personnalisé et installation précise pour un usage quotidien.",
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
          heading: "FAQ - garde-robe et walk-in sur mesure",
          intro:
            "Les questions qui reviennent le plus souvent avant de démarrer un projet de garde-robe sur mesure.",
          items: [
            {
              q: "Quelle est la différence entre une garde-robe et un walk-in sur mesure ?",
              a: "Un walk-in est une garde-robe dans laquelle on entre (une petite pièce dédiée), alors qu'une garde-robe sur mesure classique s'intègre le long d'un mur. Dans les deux cas, on conçoit l'aménagement — penderie, tiroirs, tablettes, accessoires — selon vos vêtements et votre espace réel.",
            },
            {
              q: "Combien coûte une garde-robe ou un walk-in sur mesure ?",
              a: "Le prix varie selon les dimensions, le niveau d'aménagement (penderie, tiroirs, îlot, éclairage) et les matériaux choisis. On vous donne une estimation claire après avoir cadré le projet.",
            },
            {
              q: "Est-ce utile dans un petit espace ?",
              a: "Oui. Le sur mesure est justement pertinent quand il faut optimiser niches, angles et hauteurs disponibles.",
            },
            {
              q: "Quelle est la différence avec un système modulaire ?",
              a: "Le sur mesure permet une organisation plus adaptée, une meilleure intégration et une structure souvent plus robuste.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Nous desservons Montréal, Laval et la Rive-Sud.",
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
          heading: "Parlez-nous de votre projet de garde-robe ou de walk-in",
          intro:
            "On vous aide à cadrer une garde-robe sur mesure qui correspond vraiment à l'espace et à l'usage.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
