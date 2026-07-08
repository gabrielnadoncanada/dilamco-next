import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Garde-robe et walk-in sur mesure à Montréal",
    description:
      "Garde-robe et walk-in sur mesure à Montréal, Laval et le Grand Montréal : fourchettes de prix, comparaison avec les systèmes modulaires, conception et installation haut de gamme.",
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
            "Garde-robe et walk-in sur mesure à Montréal et dans le Grand Montréal",
          description:
            "Une garde-robe sur mesure — ou walk-in — est un rangement conçu et fabriqué aux dimensions exactes de votre espace (penderie, tiroirs, tablettes, accessoires), plutôt qu'assemblé à partir de modules standards. Chez Dilamco, dans le Grand Montréal, une seule équipe gère la conception, la fabrication contrôlée en usine partenaire et l'installation.",
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
      id: "pricing",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Combien coûte une garde-robe sur mesure ?",
          intro:
            "Chaque projet est chiffré selon les dimensions, le niveau d'aménagement et les matériaux. Voici des fourchettes réalistes pour cadrer votre budget avant la soumission.",
          columns: ["Fourchette de prix", "Ce que ça comprend"],
          rows: [
            {
              label: "Garde-robe murale sur mesure",
              values: [
                "3 000 $ à 8 000 $",
                "Aménagement complet d'un placard : penderie, tablettes et tiroirs sur mesure",
              ],
            },
            {
              label: "Walk-in sur mesure",
              values: [
                "8 000 $ à 20 000 $",
                "Pièce dédiée : modules muraux, tiroirs, accessoires et finitions intégrées",
              ],
            },
            {
              label: "Walk-in haut de gamme",
              values: [
                "20 000 $ et plus",
                "Îlot central, éclairage intégré, portes vitrées, bois massif et verre",
              ],
            },
          ],
        },
      },
    },
    {
      id: "vs-modulaire",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading:
            "Garde-robe sur mesure ou système modulaire (IKEA, filaire) ?",
          intro:
            "Les systèmes modulaires dépannent bien à court terme. Le sur mesure devient rentable dès que l'espace, la durabilité ou l'intégration comptent.",
          columns: ["Système modulaire", "Garde-robe sur mesure"],
          rows: [
            {
              label: "Adaptation à l'espace",
              values: [
                "Dimensions standard, espaces perdus dans les angles et sous le plafond",
                "Conçue au millimètre pour vos murs, niches et hauteurs réelles",
              ],
            },
            {
              label: "Matériaux",
              values: [
                "Panneaux minces et quincaillerie de base",
                "Contreplaqué de bouleau, tiroirs en bois massif, quincaillerie robuste",
              ],
            },
            {
              label: "Intégration",
              values: [
                "Meubles posés, jeux et plinthes apparents",
                "Intégration mur à mur et jusqu'au plafond, rendu architectural",
              ],
            },
            {
              label: "Durée de vie",
              values: [
                "Affaissement fréquent après quelques années",
                "Structure stable pensée pour l'usage quotidien à long terme",
              ],
            },
            {
              label: "Prix",
              values: [
                "Moins cher à l'achat",
                "Investissement plus élevé, mais valeur ajoutée à la revente",
              ],
            },
          ],
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
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading:
            "Garde-robe sur mesure à Montréal, Laval et dans le Grand Montréal",
          intro:
            "Basés dans le Grand Montréal, on conçoit et installe des garde-robes et walk-ins sur mesure dans l'Ouest-de-l'Île et partout dans la région.",
          badges: [
            "Montréal",
            "Laval",
            "Pierrefonds-Roxboro",
            "Ouest-de-l'Île",
            "Rive-Nord",
            "Rive-Sud",
          ],
          cardTitle: "Zones desservies",
          items: [
            "Montréal et les quartiers centraux",
            "Laval et la Rive-Nord",
            "Pierrefonds-Roxboro et l'Ouest-de-l'Île",
            "Rive-Sud et couronne sud",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
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
              a: "La plupart des garde-robes murales sur mesure se situent entre 3 000 $ et 8 000 $, et les walk-ins complets entre 8 000 $ et 20 000 $. Un walk-in haut de gamme (îlot central, éclairage intégré, portes vitrées) dépasse généralement 20 000 $. On vous remet une soumission détaillée après avoir cadré le projet.",
            },
            {
              q: "Une garde-robe sur mesure vaut-elle le coût par rapport à un système IKEA ?",
              a: "Un système modulaire coûte moins cher à l'achat, mais il impose ses dimensions standard et vieillit plus vite. Le sur mesure exploite chaque centimètre (angles, hauteurs, niches), utilise des matériaux plus robustes et s'intègre à la pièce comme du mobilier architectural — un atout à la revente.",
            },
            {
              q: "Quel est le délai pour un projet de garde-robe sur mesure ?",
              a: "Comptez généralement de 9 à 15 semaines entre la validation du design et l'installation, selon la complexité du projet. L'échéancier précis est confirmé avec la soumission.",
            },
            {
              q: "Est-ce utile dans un petit espace ?",
              a: "Oui. Le sur mesure est justement pertinent quand il faut optimiser niches, angles et hauteurs disponibles.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Nous desservons Montréal, Laval, l'Ouest-de-l'Île, la Rive-Nord et la Rive-Sud.",
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
