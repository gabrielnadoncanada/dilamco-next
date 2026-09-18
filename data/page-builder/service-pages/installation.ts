import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const installationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Installation d'armoires et de cuisines sur mesure",
    description:
      "Pose d'armoires et de cuisines sur mesure par nos équipes : alignements précis, ajustements sur place et coordination avec le reste du chantier.",
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
          eyebrow: "Division armoires",
          heading: "La pose se planifie avec les autres corps de métier",
          description:
            "Nos équipes posent les armoires au bon moment, après la plomberie et l'électricité, avant les comptoirs.",
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
          badges: ["Mise à niveau", "Alignements", "Coordination"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Pose d'armoires sur mesure en cours dans une cuisine",
          },
          caption: "Installation résidentielle et commerciale",
          imageSide: "left",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Quatre étapes sur le chantier",
          steps: [
            {
              number: "1",
              title: "Protection",
              description:
                "Planchers couverts, seuils protégés, poussière confinée à la pièce.",
            },
            {
              number: "2",
              title: "Mise à niveau",
              description:
                "Caissons calés puis ancrés dans les montants du mur.",
            },
            {
              number: "3",
              title: "Ajustement",
              description:
                "Charnières réglées sur trois axes, jeux égalisés partout.",
            },
            {
              number: "4",
              title: "Finition",
              description:
                "Moulures, plinthes, poignées et tour d'inspection avec vous.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "En bref",
          intro: "Ce qui se passe chez vous pendant les journées de pose.",
          rows: [
            {
              label: "Délai",
              value: "Une à deux journées pour une vanité, trois à cinq pour une cuisine",
            },
            {
              label: "Livrables",
              value: "Armoires posées, portes réglées, déficiences corrigées",
            },
            {
              label: "Qui fait quoi",
              value: "Nos poseurs, coordonnés avec le comptoir et l'électricien",
            },
            {
              label: "Préalable",
              value: "Plomberie, électricité et plancher terminés avant notre arrivée",
            },
            {
              label: "Garantie",
              value: "Un réglage de rattrapage inclus dans l'année suivant la pose",
            },
            {
              label: "Chantier",
              value: "Site balayé chaque soir, rebuts sortis à la fin",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Armoires ajustées et alignées après la pose",
          },
          note: "La date de pose est fixée une fois la livraison confirmée.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur la pose",
          items: [
            {
              q: "Faut-il quitter la maison pendant la pose ?",
              a: "Non. La pièce reste inutilisable quelques jours, mais le reste de la maison demeure protégé et accessible. L'eau est rétablie chaque soir quand c'est possible.",
            },
            {
              q: "Qui installe le comptoir ?",
              a: "Le fournisseur du comptoir, après notre pose. Il prend son gabarit sur les caissons déjà fixés, ce qui évite les écarts au millimètre près.",
            },
            {
              q: "Posez-vous des armoires achetées ailleurs ?",
              a: "Non. Nous installons ce que nous avons conçu et fourni, pour que la même responsabilité couvre les plans, les pièces et la pose.",
            },
            {
              q: "Et si une porte frotte six mois plus tard ?",
              a: "Appelez-nous. Un bois qui bouge avec les saisons se rattrape en quelques minutes de réglage, et c'est compris la première année.",
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
          heading: "Planifier la pose de vos armoires",
          intro:
            "On cale la date avec le reste du chantier et on livre après inspection avec vous.",
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
          note: "Licence RBQ 8306-0806-27",
        },
      },
    },
  ],
};
