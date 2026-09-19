import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Processus : le déroulement d'un projet de rénovation",
    description:
      "De l'estimation gratuite à la garantie : visite, soumission détaillée, contrat écrit, permis, chantier coordonné, liste de déficiences et livraison.",
    path: "/processus",
    ogAlt: "Étapes d'un projet de rénovation mené par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Gestion de projet de rénovation résidentielle",
      description:
        "Déroulement d'un projet avec un entrepreneur général : visite et estimation, soumission détaillée, contrat écrit avec échéancier, permis municipal, chantier coordonné, liste de déficiences, livraison et garantie.",
      url: SITE.url + "/processus",
      serviceType: "Gestion de projet de rénovation",
      areaServed: [
        "Ouest-de-l'Île",
        "Montréal",
        "Laval",
        "Rive-Sud",
        "Vaudreuil-Soulanges",
      ],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Le déroulement d'un projet de rénovation",
          description:
            "Cinq étapes. Chacune se termine par un document signé, un permis obtenu ou une inspection réussie.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "steps",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Les cinq étapes, toujours dans cet ordre",
          steps: [
            {
              number: "1",
              title: "Visite chez vous",
              description:
                "Nous prenons les mesures et donnons une première fourchette de prix.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Chaque travail est chiffré, avec les quantités et ce qui reste exclu.",
            },
            {
              number: "3",
              title: "Signature et permis",
              description:
                "Vous signez l'échéancier et le calendrier de paiements. Nous déposons le permis.",
            },
            {
              number: "4",
              title: "Travaux",
              description:
                "Chaque corps de métier entre après l'inspection du précédent.",
            },
            {
              number: "5",
              title: "Fin des travaux",
              description:
                "Nous faisons le tour, notons les corrections, puis vous payez le solde.",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Ce que vous recevez",
          rows: [
            {
              label: "La soumission",
              value: "Elle détaille les travaux, les matériaux et les exclusions avant la signature",
            },
            {
              label: "Le contrat",
              value: "Il fixe le prix, les modalités de paiement et la garantie des travaux",
            },
            {
              label: "L'échéancier",
              value: "Il donne les dates de début et de fin, et l'ordre des corps de métier",
            },
            {
              label: "Les changements",
              value: "Chaque changement est chiffré et accepté par écrit avant d'être exécuté",
            },
            {
              label: "Le permis",
              value: "Vous recevez une copie du permis, émis au nom du propriétaire",
            },
            {
              label: "La liste des corrections",
              value: "Nous la dressons avec vous à la fin, et tout est corrigé avant le solde",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Plans et documents de chantier sur une table de travail",
          },
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
              q: "L'estimation est-elle vraiment gratuite ?",
              a: "Oui. La visite et la première estimation ne sont pas facturées et ne vous engagent à rien. Si des plans d'architecte ou un ingénieur sont nécessaires, ils sont chiffrés à part et approuvés avant.",
            },
            {
              q: "Qui s'occupe de la demande de permis ?",
              a: "Nous. Nous vérifions les exigences de votre ville, préparons les plans, déposons la demande et suivons le dossier. Le permis reste émis au nom du propriétaire.",
            },
            {
              q: "Comment les paiements sont-ils répartis ?",
              a: "Un dépôt à la signature, puis des versements liés à l'avancement réel des travaux plutôt qu'à des dates fixes. Le dernier versement est dû une fois les corrections faites.",
            },
            {
              q: "Que se passe-t-il si on découvre un problème caché ?",
              a: "On arrête, on documente, on vous explique les options et on chiffre le correctif par écrit. Rien n'est exécuté avant votre accord.",
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
          heading: "On commence par une visite",
          intro:
            "Décrivez-nous le projet. Vous recevez une soumission détaillée, pas un chiffre donné au téléphone.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
