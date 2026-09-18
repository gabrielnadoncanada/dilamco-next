import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Garde-robe et walk-in sur mesure à Montréal",
    description:
      "Garde-robe et walk-in sur mesure à Montréal et Laval : prix, comparaison avec le modulaire, conception et pose par un entrepreneur général licencié.",
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
          eyebrow: "Walk-in",
          heading: "Garde-robe et walk-in sur mesure, du mur au plafond",
          description:
            "Penderie, tiroirs et tablettes dimensionnés pour vos murs réels, posés par l'équipe qui mène la rénovation.",
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
          badges: ["Sur mesure", "Division armoires"],
          image: {
            src: "/images/generated/spaces/space-walkin-hero-01.webp",
            alt: "Garde-robe et walk-in sur mesure haut de gamme à Pierrefonds et dans le Grand Montréal",
          },
          caption: "Montréal · Laval · Ouest-de-l'Île",
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que comprend le mandat",
          description:
            "Le rangement est conçu autour de ce que vous rangez vraiment, puis intégré mur à mur.",
          cards: [
            {
              title: "Penderie et tiroirs",
              description: "Hauteurs de penderie et profondeurs de tiroirs calculées par type de vêtement.",
            },
            {
              title: "Angles et niches exploités",
              description: "Les coins, les hauteurs sous plafond et les retraits de mur servent au rangement.",
            },
            {
              title: "Îlot, éclairage, portes vitrées",
              description: "Options de walk-in haut de gamme intégrées au plan, pas ajoutées après.",
            },
            {
              title: "Pose intégrée au chantier",
              description: "Cloisons, éclairage, plancher et rangement coordonnés par un seul responsable.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Walk-ins récents",
          items: [
            {
              title: "Walk-in, Montréal",
              href: "/projets",
              description: "Circulation et rangement adaptés au quotidien.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Projet walk-in sur mesure à Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in, Laval",
              href: "/projets",
              description: "Espace maximisé dans une pièce contrainte.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Projet walk-in sur mesure à Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Walk-in, Rive-Sud",
              href: "/projets",
              description: "Îlot central et éclairage intégré.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Projet walk-in sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud"],
              footerCtaLabel: "Voir le projet",
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
          heading: "Ce qui tient après cinq ans",
          intro: "Un rangement se juge sur les tiroirs chargés et les tablettes longues, pas sur la photo du premier jour.",
          items: [
            {
              title: "Tiroirs en bouleau massif",
              description: "Supportent une charge quotidienne variable",
            },
            {
              title: "Structure en contreplaqué",
              description: "Tablettes qui ne s'affaissent pas",
            },
            {
              title: "Quincaillerie robuste",
              description: "Coulisses et charnières à fermeture amortie",
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
            {
              label: "Rénovation résidentielle",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Détail matériau pour walk-in sur mesure",
          },
          cardTitle: "Avantage concret",
          cardDescription: "Un walk-in qui reste net et fonctionnel dans le temps.",
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
              q: "Combien coûte une garde-robe ou un walk-in sur mesure ?",
              a: "Une garde-robe murale se situe généralement entre 3 000 $ et 8 000 $, un walk-in complet entre 8 000 $ et 20 000 $. Avec îlot central, éclairage intégré et portes vitrées, comptez plus de 20 000 $.",
            },
            {
              q: "Quel est le délai ?",
              a: "De 9 à 15 semaines entre la validation du design et l'installation, selon la complexité. L'échéancier précis est confirmé avec la soumission détaillée.",
            },
            {
              q: "Quelle différence avec une garde-robe et un walk-in ?",
              a: "Un walk-in est une petite pièce dans laquelle on entre. Une garde-robe sur mesure s'intègre le long d'un mur. Dans les deux cas, penderie, tiroirs et tablettes sont dimensionnés pour votre espace.",
            },
            {
              q: "Est-ce que ça vaut le coût face à un système modulaire ?",
              a: "Un système modulaire coûte moins cher à l'achat, impose ses dimensions standard et s'affaisse plus vite. Le sur mesure exploite les angles et les hauteurs, avec du contreplaqué de bouleau et des tiroirs en bois massif.",
            },
            {
              q: "Pouvez-vous rénover toute la pièce ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : cloisons, porte, électricité, éclairage, plancher, peinture et pose du rangement, coordonnés par un seul responsable, au contrat écrit.",
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
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Ouest-de-l'Île, Rive-Sud",
        },
      },
    },
  ],
};
