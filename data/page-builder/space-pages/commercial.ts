import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Armoires commerciales sur mesure haut de gamme",
    description:
      "Armoires commerciales sur mesure : conception, fabrication contrôlée et installation précise à Montréal, Laval et sur la Rive-Sud.",
    path: "/espaces/commercial",
    ogAlt: "Commercial sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial" },
  ],
  service: {
    name: "Commercial",
    description:
      "Conception, fabrication contrôlée et installation d'armoires commerciales sur mesure.",
    url: SITE.url + "/espaces/commercial",
    serviceType: "Armoires commerciales sur mesure",
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
            "Armoires commerciales sur mesure, exécution stable et planifiée",
          description:
            "Des armoires et aménagements commerciaux sur mesure sont des installations conçues et fabriquées pour un usage intensif — accueil, rangement, mobilier fonctionnel — dimensionnées pour votre local et votre échéancier. Chez Dilamco, dans le Grand Montréal, on gère la conception, la fabrication contrôlée en usine partenaire et l'installation, en cadrant tôt la séquence pour respecter vos fenêtres d'ouverture.",
          actions: [
            {
              label: "Obtenir une soumission commerciale",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Commercial", "Durable", "Planifié"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Aménagement commercial sur mesure à Montréal et dans le Grand Montréal",
          },
          caption:
            "Approche adaptée aux espaces clients, bureaux et environnements de travail",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une approche adaptée à l'usage intensif",
          intro:
            "Les projets commerciaux demandent une exécution plus prévisible, des matériaux qui tiennent et une meilleure coordination.",
          badges: ["Usage intensif", "Entretien", "Coordination"],
          cardTitle: "Quand cette approche est pertinente",
          items: [
            "Vous cherchez une solution durable et cohérente avec votre image.",
            "L'échéancier et la fenêtre d'installation comptent vraiment.",
            "Vous voulez réduire les risques liés à une coordination fragmentée.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le processus",
              href: "/processus",
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
          heading: "Une séquence plus prévisible pour le commercial",
          intro:
            "Le projet est cadré pour mieux gérer besoins, délais, fabrication et installation.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Usage, contraintes du lieu, entretien, circulation et besoins de marque.",
            },
            {
              number: "2",
              title: "Validation",
              description:
                "Plans, dimensions et décisions verrouillées avant production.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Standards stables et exécution mieux contrôlée pour limiter les écarts.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Logistique et pose planifiées pour réduire les perturbations sur place.",
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
          heading: "Des spécifications pensées pour la tenue dans le temps",
          intro:
            "En commercial, le premium veut dire durabilité, entretien et stabilité, pas seulement apparence.",
          items: [
            {
              title: "Structure robuste",
              description:
                "Matériaux et détails de fabrication choisis pour supporter un usage plus intense.",
            },
            {
              title: "Entretien simplifié",
              description:
                "Choix de surfaces et de finitions alignés avec la réalité du lieu.",
            },
            {
              title: "Exécution plus stable",
              description:
                "Spécifications cohérentes pour mieux reproduire la qualité d'un projet à l'autre.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-01.webp",
            alt: "Détail matériau pour aménagement commercial",
          },
          cardTitle: "Résultat recherché",
          cardDescription:
            "Moins de faiblesse structurelle, moins d'entretien correctif et une meilleure cohérence dans le temps.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets commerciaux en vedette",
          intro:
            "Quelques références qui montrent la qualité d'exécution et le niveau de coordination.",
          items: [
            {
              title: "Aménagement commercial",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
              description:
                "Projet commercial conçu pour l'usage réel et une exécution propre.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Projet commercial à Montréal",
              },
              badges: ["Montréal", "Commercial"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Armoires commerciales sur mesure",
              href: "/projets",
              description:
                "Exécution stable et matériaux adaptés à un usage plus intensif.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Projet commercial à Laval",
              },
              badges: ["Laval", "Usage intensif"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Mobilier commercial",
              href: "/projets",
              description:
                "Projet sur mesure coordonné pour limiter les imprévus et soigner la finition.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Projet commercial sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Exécution"],
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
          heading: "FAQ - commercial sur mesure",
          intro:
            "Les questions les plus utiles avant de cadrer un projet commercial.",
          items: [
            {
              q: "Quels types de projets commerciaux réalisez-vous ?",
              a: "Nous réalisons des aménagements et armoires sur mesure pour des espaces commerciaux où la durabilité, l'entretien et la cohérence d'exécution comptent : accueil et réception, rangement technique, mobilier fonctionnel, espaces de service. Chaque projet est dimensionné pour un usage intensif et pour votre local réel, avec des matériaux choisis pour tenir la cadence. Comme la même équipe gère la conception, la fabrication en usine partenaire et l'installation, la séquence est cadrée tôt pour respecter votre échéancier et vos fenêtres d'ouverture — un enjeu clé en contexte commercial.",
            },
            {
              q: "Pouvez-vous respecter des fenêtres d'installation ?",
              a: "Oui, lorsque le projet est bien planifié dès la conception et que la séquence est cadrée tôt.",
            },
            {
              q: "Faites-vous la coordination clé en main ?",
              a: "Oui, selon la portée du projet, pour réduire la responsabilité fragmentée et les finitions inégales.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Montréal, Laval et la Rive-Sud font partie de notre secteur.",
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
          heading: "Parlez-nous de votre projet commercial",
          intro:
            "On vous aide à cadrer un projet durable, planifié et mieux exécuté pour votre espace.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
