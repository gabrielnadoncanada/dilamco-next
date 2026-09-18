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
            "Nos équipes posent les armoires au bon moment du chantier, après la plomberie et l'électricité, avant les comptoirs.",
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
            alt: "Plan technique et échantillons de panneaux pour installation sur mesure",
          },
          caption: "Installation résidentielle et commerciale",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi la pose change tout",
          description:
            "Aucun mur n'est d'aplomb et aucun plancher n'est de niveau. La pose absorbe cet écart, ou il se voit sur chaque porte.",
          cards: [
            {
              title: "Mise à niveau",
              description:
                "Les caissons sont calés avant d'être fixés à la structure.",
            },
            {
              title: "Alignements",
              description:
                "Jeux réguliers entre portes et tiroirs sur toute la longueur.",
            },
            {
              title: "Fixation",
              description:
                "Ancrage dans les montants, pas seulement dans le gypse.",
            },
            {
              title: "Coordination",
              description:
                "Comptoirs, dosseret et électroménagers suivent dans le bon ordre.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce qui est inclus",
          intro:
            "La pose ne se limite pas à visser des modules au mur.",
          items: [
            {
              title: "Vérification du site",
              description: "Murs, planchers, niveaux et contraintes relevés avant.",
            },
            {
              title: "Pose et fixation",
              description: "Calage, ancrage et assemblage des modules entre eux.",
            },
            {
              title: "Réglage des portes",
              description: "Charnières ajustées sur trois axes, tiroirs alignés.",
            },
            {
              title: "Inspection finale",
              description: "Tour avec vous, déficiences corrigées avant le paiement final.",
            },
          ],
          actions: [
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Installation sur mesure en cours",
          },
          cardTitle: "Coordination sur site",
          cardDescription:
            "Une pose propre dépend autant de la préparation que des ajustements finaux.",
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
              q: "Combien de temps dure une installation ?",
              a: "Une vanité ou un walk-in se posent en une journée ou deux. Une cuisine complète demande davantage, selon l'îlot, les armoires hautes et les électroménagers. La durée est confirmée à la planification.",
            },
            {
              q: "Des ajustements sont-ils normaux ?",
              a: "Oui. Les portes et les tiroirs se règlent après la pose, une fois les caissons fixés. C'est une étape prévue, pas un signe de problème.",
            },
            {
              q: "Posez-vous seulement vos propres armoires ?",
              a: "Oui. Nous installons ce que nous concevons et fournissons, pour que les mêmes tolérances s'appliquent des plans à la pose, sous une seule responsabilité.",
            },
            {
              q: "Pouvez-vous rénover la pièce au complet ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27. Permis, démolition, plomberie, électricité, plancher et pose des armoires sous un seul contrat écrit.",
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
          heading: "Une pose propre et coordonnée ?",
          intro:
            "On planifie la pose avec le reste du chantier et on livre après inspection avec vous.",
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
