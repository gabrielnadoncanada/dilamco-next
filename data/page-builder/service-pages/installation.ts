import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const installationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Installation d'armoires et de cuisines sur mesure",
    description:
      "Service d'installation professionnelle : alignements précis, ajustements sur place et finition soignée.",
    path: "/services/installation",
    ogAlt: "Service d'installation Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Service d'installation",
      url: SITE.url + "/services/installation",
    },
  ],
  service: {
    name: "Service d'installation",
    description:
      "Alignements précis, ajustements sur place et finition soignée pour cuisines, salles de bain, walk-in et commercial.",
    url: SITE.url + "/services/installation",
    serviceType: "Installation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading:
            "Installation professionnelle, précision, alignement et finition",
          description:
            "L'installation est l'étape finale où les armoires sont posées et ajustées sur place : mise à niveau, alignements précis, fixation et finition. C'est elle qui transforme des éléments fabriqués en un ensemble net et durable — les ajustements sur place font partie intégrante d'une pose professionnelle.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir des projets installés",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Alignements", "Ajustements", "Finition"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Plan technique et échantillons de panneaux pour installation sur mesure",
          },
          caption: "Une pose propre change la perception de toute la pièce",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi l'installation fait toute la différence",
          description:
            "Les murs, planchers et plafonds ne sont jamais parfaitement droits. Une installation professionnelle absorbe cette réalité pour livrer un résultat propre et durable.",
          cards: [
            {
              title: "Alignements",
              description:
                "Portes, tiroirs et modules droits malgré les irrégularités du site.",
            },
            {
              title: "Ajustements",
              description:
                "Réglages fins sur place pour un rendu uniforme et stable.",
            },
            {
              title: "Durabilité",
              description:
                "Une bonne installation réduit l'usure prématurée et les défauts visibles.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qui est inclus dans l'installation Dilamco",
          intro:
            "L'installation ne se limite pas à fixer des modules. Elle comprend la préparation, l'ajustement et la vérification finale.",
          items: [
            {
              title: "Préparation du site",
              description:
                "Vérification des murs, planchers, niveaux et contraintes visibles.",
            },
            {
              title: "Mise à niveau et fixation",
              description: "Ancrage sécuritaire et stable des modules.",
            },
            {
              title: "Ajustement des portes et tiroirs",
              description: "Alignement précis et fonctionnement fluide.",
            },
            {
              title: "Inspection finale",
              description:
                "Vérification et ajustements avant la livraison du projet.",
            },
          ],
          actions: [
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "Voir la fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Installation sur mesure en cours",
          },
          cardTitle: "Coordination sur site",
          cardDescription:
            "Une pose propre dépend autant de la préparation que des ajustements sur place.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Installation par type de projet",
          intro:
            "La logique de pose change selon l'espace, l'accès et le niveau d'usage.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Armoires, îlots et intégration des électroménagers.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec installation précise",
              },
              badges: ["Cuisine", "Intégration"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description: "Vanités et protection des chants en milieu humide.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec finition propre",
              },
              badges: ["Humidité", "Finition"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description: "Usage intensif, durabilité et coordination.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Aménagement commercial avec installation planifiée",
              },
              badges: ["Commercial", "Coordination"],
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
          heading: "FAQ - installation",
          intro:
            "Réponses claires sur la pose, les ajustements et le déroulement du chantier.",
          items: [
            {
              q: "Combien de temps dure une installation?",
              a: "La durée d'une installation dépend du type de projet et de sa complexité. Une vanité de salle de bain ou un walk-in se posent généralement en une journée ou deux, tandis qu'une cuisine complète — avec îlot, armoires hautes et coordination des électroménagers — demande davantage de temps. Nous confirmons la durée prévue à la planification, une fois la portée du projet établie, pour que vous sachiez à quoi vous attendre sur place.",
            },
            {
              q: "Des ajustements sont-ils normaux?",
              a: "Oui. Les ajustements font partie d'une installation professionnelle et sont essentiels au rendu final.",
            },
            {
              q: "Installez-vous seulement vos propres armoires?",
              a: "Oui. Nous installons les éléments que nous concevons et fournissons, ce qui nous permet de garantir la cohérence entre la fabrication et la pose : mêmes standards, mêmes tolérances, une seule équipe responsable du résultat. Cette continuité évite les zones grises fréquentes quand la fabrication et l'installation relèvent d'intervenants différents, et facilite les ajustements finaux sur place.",
            },
            {
              q: "Travaillez-vous en condo ou en commercial?",
              a: "Oui. Nous adaptons l'installation aux contraintes d'accès, d'horaire et d'usage de chaque environnement.",
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
          heading: "Besoin d'une installation propre et maîtrisée ?",
          intro:
            "On cadre la pose, les ajustements et la coordination pour livrer un résultat net et durable.",
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
          note: "Installation résidentielle et commerciale",
        },
      },
    },
  ],
};
