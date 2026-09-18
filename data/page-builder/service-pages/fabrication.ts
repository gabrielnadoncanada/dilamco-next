import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Fabrication d'armoires sur mesure — usine partenaire",
    description:
      "Armoires sur mesure produites par notre usine partenaire, avec contrôle qualité et coordination de chantier assurés par Dilamco, entrepreneur général.",
    path: "/services/fabrication",
    ogAlt: "Service de fabrication Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Service de fabrication",
      url: SITE.url + "/services/fabrication",
    },
  ],
  service: {
    name: "Service de fabrication",
    description:
      "Armoires sur mesure fabriquées par notre usine partenaire, sous contrôle qualité et coordination de Dilamco.",
    url: SITE.url + "/services/fabrication",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Division armoires",
          heading: "Fabrication sur mesure, précision, constance et durabilité",
          description:
            "La fabrication est l'étape où les armoires sont produites selon les plans validés : découpe, assemblage et finition des caissons, portes et tiroirs. La production est confiée à notre usine partenaire exclusive. La division armoires de Dilamco, entrepreneur général licencié RBQ (8306-0806-27), garde la responsabilité des plans, du contrôle qualité à la réception et de la coordination avec le reste du chantier.",
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
          badges: ["Précision", "Durabilité", "Sur mesure"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Plans techniques et échantillons de matériaux pour fabrication sur mesure",
          },
          caption:
            "Matériaux, assemblage et détails qui tiennent dans le temps",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce que signifie vraiment fabrication sur mesure",
          intro:
            "Le sur mesure vise une adaptation réelle à l'espace et à l'usage, pas seulement une coupe à la bonne largeur. Les plans et les spécifications viennent de nous, la production vient de notre usine partenaire.",
          badges: ["Dimensions réelles", "Contrôle qualité", "Usage réel"],
          cardTitle: "Ce qui fait la différence",
          items: [
            "Adaptation à l'espace et aux contraintes réelles.",
            "Alignements et proportions maîtrisées entre modules.",
            "Choix de matériaux et quincaillerie selon l'usage.",
            "Contrôle qualité à la réception, avant la pose.",
          ],
          actions: [
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
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
          heading: "Processus de fabrication",
          intro:
            "Chaque étape prépare la suivante pour réduire les reprises et faciliter une pose propre.",
          steps: [
            {
              number: "1",
              title: "Validation",
              description:
                "Design, mesures et contraintes clarifiés par Dilamco avant la mise en production.",
            },
            {
              number: "2",
              title: "Sélection",
              description:
                "Matériaux et quincaillerie spécifiés selon durabilité, humidité et entretien.",
            },
            {
              number: "3",
              title: "Production",
              description:
                "Modules, portes et tiroirs produits par notre usine partenaire selon nos spécifications.",
            },
            {
              number: "4",
              title: "Réception",
              description:
                "Contrôle qualité à la livraison et coordination avec le calendrier de chantier.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Fabrication par type de projet",
          intro:
            "Le niveau d'usage et les contraintes changent selon l'espace, mais le standard d'exécution reste élevé.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Modules, îlots, rangement optimisé et intégration électroménagers.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec fabrication précise",
              },
              badges: ["Cuisine", "Rangement"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description: "Vanités et rangement adaptés à l'humidité.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec fabrication durable",
              },
              badges: ["Humidité", "Durabilité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Usage intensif, durabilité et cohérence fonctionnelle.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Aménagement commercial sur mesure avec fabrication robuste",
              },
              badges: ["Commercial", "Usage intensif"],
              footerCtaLabel: "Voir commercial",
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
          heading: "FAQ - fabrication",
          intro:
            "Réponses claires sur la fabrication sur mesure et ses implications.",
          items: [
            {
              q: "Quelle est la différence entre sur mesure et semi-custom?",
              a: "Le sur mesure part de votre espace réel : chaque caisson est dimensionné au millimètre selon vos mesures, votre aménagement et vos contraintes. Le semi-custom, lui, part de modules prédéfinis qu'on adapte dans une certaine limite (quelques largeurs, options de finition), sans reconcevoir entièrement. Le sur mesure exploite mieux les angles, les hauteurs et les espaces atypiques ; le semi-custom peut suffire quand l'espace est standard. La différence se voit surtout dans l'ajustement final et l'exploitation de chaque centimètre.",
            },
            {
              q: "Quels matériaux vieillissent le mieux?",
              a: "Cela dépend de l'espace, de l'humidité, de l'entretien, des chants, de la quincaillerie et de l'installation.",
            },
            {
              q: "Est-ce personnalisable à 100 %?",
              a: "L'objectif est d'adapter le projet à l'espace et à l'usage, dans les limites des contraintes techniques réelles.",
            },
            {
              q: "Quels sont les délais de fabrication?",
              a: "Les délais de fabrication varient selon la complexité du projet, la disponibilité des matériaux et la coordination avec l'installation. Pour un projet sur mesure, il faut généralement compter de 9 à 15 semaines entre la validation du design et la pose finale. Un échéancier précis est confirmé une fois les plans arrêtés, pour vous donner une visibilité claire sur chaque étape.",
            },
            {
              q: "Qui fabrique réellement vos armoires?",
              a: "Les armoires sont produites pour nous par notre usine partenaire exclusive, selon les plans et les spécifications établis par Dilamco. Nous restons responsables du design, du choix des matériaux et de la quincaillerie, du contrôle qualité à la réception, de la pose et du service après coup. Vous avez donc un seul interlocuteur du plan à la livraison, sans intermédiaire supplémentaire.",
            },
            {
              q: "Pouvez-vous aussi faire la rénovation complète de la pièce ?",
              a: "Oui — Dilamco est entrepreneur général (RBQ 8306-0806-27) et les armoires sont une de nos divisions. On peut prendre en charge la rénovation complète de la pièce : permis municipal, démolition, plomberie, électricité, plancher, peinture et pose des armoires, coordonnés par un seul responsable. L'échéancier et le budget sont fixés au contrat écrit avant le début des travaux.",
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
          heading: "Vous voulez un projet construit pour durer ?",
          intro:
            "On vous aide à cadrer les bons choix techniques, matériaux et détails d'exécution avant la mise en production.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les matériaux",
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
