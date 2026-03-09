import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const installationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Service d'installation",
    description:
      "Service d'installation professionnelle : alignements precis, ajustements sur place et finition soignee.",
    path: "/services/installation/",
    ogAlt: "Service d'installation Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    {
      name: "Service d'installation",
      url: SITE.url + "/services/installation/",
    },
  ],
  service: {
    name: "Service d'installation",
    description:
      "Alignements precis, ajustements sur place et finition soignee pour cuisines, salles de bain, walk-in et commercial.",
    url: SITE.url + "/services/installation/",
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
            "Installation professionnelle, precision, alignement et finition",
          description:
            "Une installation de qualite est determinante pour le resultat final : ajustements sur place, alignements precis et finition soignee.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir des projets installes",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Alignements", "Ajustements", "Finition"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.png",
            alt: "Plan technique et echantillons de panneaux pour installation sur mesure",
          },
          caption: "Une pose propre change la perception de toute la piece",
        },
      },
    },
    {
      id: "difference",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi l'installation fait toute la difference",
          description:
            "Les murs, planchers et plafonds ne sont jamais parfaitement droits. Une installation professionnelle absorbe cette realite pour livrer un resultat propre et durable.",
          cards: [
            {
              title: "Alignements",
              description:
                "Portes, tiroirs et modules droits malgre les irregularites du site.",
            },
            {
              title: "Ajustements",
              description:
                "Reglages fins sur place pour un rendu uniforme et stable.",
            },
            {
              title: "Durabilite",
              description:
                "Une bonne installation reduit l'usure prematuree et les defauts visibles.",
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
            "L'installation ne se limite pas a fixer des modules. Elle comprend la preparation, l'ajustement et la verification finale.",
          items: [
            {
              title: "Preparation du site",
              description:
                "Verification des murs, planchers, niveaux et contraintes visibles.",
            },
            {
              title: "Mise a niveau et fixation",
              description: "Ancrage securitaire et stable des modules.",
            },
            {
              title: "Ajustement des portes et tiroirs",
              description: "Alignement precis et fonctionnement fluide.",
            },
            {
              title: "Inspection finale",
              description:
                "Verification et ajustements avant la livraison du projet.",
            },
          ],
          actions: [
            {
              label: "Voir le processus",
              href: "/processus/",
              variant: "outline",
            },
            {
              label: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Installation sur mesure en cours",
          },
          cardTitle: "Coordination sur site",
          cardDescription:
            "Une pose propre depend autant de la preparation que des ajustements sur place.",
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
            "La logique de pose change selon l'espace, l'acces et le niveau d'usage.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine/",
              description:
                "Armoires, ilots et integration des electromenagers.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.png",
                alt: "Cuisine sur mesure avec installation precise",
              },
              badges: ["Cuisine", "Integration"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description: "Vanites et protection des chants en milieu humide.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.png",
                alt: "Salle de bain sur mesure avec finition propre",
              },
              badges: ["Humidite", "Finition"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial/",
              description: "Usage intensif, durabilite et coordination.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.png",
                alt: "Amenagement commercial avec installation planifiee",
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
            "Reponses claires sur la pose, les ajustements et le deroulement du chantier.",
          items: [
            {
              q: "Combien de temps dure une installation?",
              a: "Cela depend du type de projet et de sa complexite. Une cuisine complete demande plus de temps qu'une vanite ou un walk-in.",
            },
            {
              q: "Des ajustements sont-ils normaux?",
              a: "Oui. Les ajustements font partie d'une installation professionnelle et sont essentiels au rendu final.",
            },
            {
              q: "Installez-vous seulement vos propres armoires?",
              a: "Oui. Nous installons les elements que nous fabriquons pour garantir la coherence du resultat.",
            },
            {
              q: "Travaillez-vous en condo ou en commercial?",
              a: "Oui. Nous adaptons l'installation aux contraintes d'acces, d'horaire et d'usage de chaque environnement.",
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
          heading: "Besoin d'une installation propre et maitrisee ?",
          intro:
            "On cadre la pose, les ajustements et la coordination pour livrer un resultat net et durable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
            },
          ],
          note: "Installation residentielle et commerciale",
        },
      },
    },
  ],
};
