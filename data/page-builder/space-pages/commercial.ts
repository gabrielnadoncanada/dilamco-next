import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Armoires commerciales sur mesure haut de gamme",
    description:
      "Armoires commerciales sur mesure : conception, fabrication controlee et installation precise a Montreal, Laval et sur la Rive-Sud.",
    path: "/espaces/commercial/",
    ogAlt: "Commercial sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial/" },
  ],
  service: {
    name: "Commercial",
    description:
      "Conception, fabrication controlee et installation d'armoires commerciales sur mesure.",
    url: SITE.url + "/espaces/commercial/",
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
            "Armoires commerciales sur mesure, execution stable et planifiee",
          description:
            "En contexte commercial, la qualite se joue sur la durabilite, l'entretien, la logistique et le respect de l'echeancier autant que sur l'apparence.",
          actions: [
            {
              label: "Obtenir une soumission commerciale",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Commercial", "Durable", "Planifie"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Amenagement commercial sur mesure",
          },
          caption:
            "Approche adaptee aux espaces clients, bureaux et environnements de travail",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une approche adaptee a l'usage intensif",
          intro:
            "Les projets commerciaux demandent une execution plus previsible, des materiaux qui tiennent et une meilleure coordination.",
          badges: ["Usage intensif", "Entretien", "Coordination"],
          cardTitle: "Quand cette approche est pertinente",
          items: [
            "Vous cherchez une solution durable et coherente avec votre image.",
            "L'echeancier et la fenetre d'installation comptent vraiment.",
            "Vous voulez reduire les risques lies a une coordination fragmente.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir le processus",
              href: "/processus/",
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
          heading: "Une sequence plus previsible pour le commercial",
          intro:
            "Le projet est cadre pour mieux gerer besoins, delais, fabrication et installation.",
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
                "Plans, dimensions et decisions verrouilles avant production.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Standards stables et execution mieux controlee pour limiter les ecarts.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Logistique et pose planifiees pour reduire les perturbations sur place.",
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
          heading: "Des specifications pensees pour la tenue dans le temps",
          intro:
            "En commercial, le premium veut dire durabilite, entretien et stabilite, pas seulement apparence.",
          items: [
            {
              title: "Structure robuste",
              description:
                "Materiaux et details de fabrication choisis pour supporter un usage plus intense.",
            },
            {
              title: "Entretien simplifie",
              description:
                "Choix de surfaces et de finitions alignes avec la realite du lieu.",
            },
            {
              title: "Execution plus stable",
              description:
                "Specifications coherentes pour mieux reproduire la qualite d'un projet a l'autre.",
            },
          ],
          actions: [
            {
              label: "Explorer les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir nos services",
              href: "/services/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-01.webp",
            alt: "Detail materiau pour amenagement commercial",
          },
          cardTitle: "Resultat recherche",
          cardDescription:
            "Moins de faiblesse structurelle, moins d'entretien correctif et une meilleure coherence dans le temps.",
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
            "Quelques references qui montrent la qualite d'execution et le niveau de coordination.",
          items: [
            {
              title: "Amenagement commercial",
              href: "/projets/",
              description:
                "Projet commercial concu pour l'usage reel et une execution propre.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Projet commercial a Montreal",
              },
              badges: ["Montreal", "Commercial"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Armoires commerciales sur mesure",
              href: "/projets/",
              description:
                "Execution stable et materiaux adaptes a un usage plus intensif.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Projet commercial a Laval",
              },
              badges: ["Laval", "Usage intensif"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Mobilier commercial",
              href: "/projets/",
              description:
                "Projet sur mesure coordonne pour limiter les imprevus et soigner la finition.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Projet commercial sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Execution"],
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
              q: "Quels types de projets commerciaux realisez-vous ?",
              a: "Des amenagements et armoires sur mesure pour des espaces ou la durabilite, l'entretien et la coherence d'execution sont importants.",
            },
            {
              q: "Pouvez-vous respecter des fenetres d'installation ?",
              a: "Oui, lorsque le projet est bien planifie des la conception et que la sequence est cadree tot.",
            },
            {
              q: "Faites-vous la coordination cle en main ?",
              a: "Oui, selon la portee du projet, pour reduire la responsabilite fragmente et les finitions inegales.",
            },
            {
              q: "Travaillez-vous a Montreal et autour ?",
              a: "Oui. Montreal, Laval et la Rive-Sud font partie de notre secteur.",
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
            "On vous aide a cadrer un projet durable, planifie et mieux execute pour votre espace.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets/",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
