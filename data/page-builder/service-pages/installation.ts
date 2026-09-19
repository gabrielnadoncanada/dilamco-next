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
          heading: "Comment on installe vos armoires chez vous",
          description:
            "Nos équipes posent les armoires après la plomberie et l'électricité, et avant les comptoirs.",
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
          heading: "Comment se passe la journée de pose",
          steps: [
            {
              number: "1",
              title: "On protège la maison",
              description:
                "On couvre les planchers et on garde la poussière dans la pièce.",
            },
            {
              number: "2",
              title: "On fixe les caissons",
              description:
                "On met chaque caisson de niveau, puis on le visse dans la structure du mur.",
            },
            {
              number: "3",
              title: "On règle les portes",
              description:
                "On ajuste chaque porte pour que les espaces soient égaux partout.",
            },
            {
              number: "4",
              title: "On finit et on vous montre",
              description:
                "On pose les moulures et les poignées, puis on fait le tour avec vous.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La pose en bref",
          intro: "Ce qui se passe chez vous pendant les journées d'installation.",
          rows: [
            {
              label: "Combien de temps",
              value:
                "Une à deux journées pour une vanité, trois à cinq pour une cuisine complète.",
            },
            {
              label: "Ce que vous recevez",
              value:
                "Des armoires posées, des portes bien réglées et les retouches faites.",
            },
            {
              label: "Qui s'en occupe",
              value:
                "Nos propres poseurs, qui s'accordent avec l'électricien et le comptoir.",
            },
            {
              label: "À faire avant",
              value:
                "La plomberie, l'électricité et le plancher doivent être finis avant qu'on arrive.",
            },
            {
              label: "Garantie",
              value:
                "Une visite de réglage est comprise dans l'année qui suit l'installation.",
            },
            {
              label: "Propreté",
              value:
                "On balaie chaque soir et on sort tous les rebuts à la fin.",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Armoires ajustées et alignées après la pose",
          },
          note: "On fixe la date de pose dès que la livraison est confirmée.",
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
              a: "Le fournisseur du comptoir, après notre pose. Il prend ses mesures directement sur les caissons déjà fixés, ce qui évite tout écart.",
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
            "On choisit la date avec vous, et on ne repart qu'après avoir tout vérifié ensemble.",
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
