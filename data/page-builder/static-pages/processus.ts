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
          badges: ["Contrat écrit", "Permis"],
          heading: "Le déroulement d'un projet de rénovation",
          description:
            "Cinq jalons. Chacun se ferme sur un document signé, un permis délivré ou une inspection passée.",
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
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Cinq jalons, toujours dans cet ordre",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "Prise de mesures chez vous et première fourchette de budget.",
            },
            {
              number: "2",
              title: "Soumission poste par poste",
              description:
                "Chaque poste chiffré, avec les quantités et ce qui reste exclu.",
            },
            {
              number: "3",
              title: "Signature et permis",
              description:
                "Échéancier daté, calendrier de paiements, demande déposée à votre ville.",
            },
            {
              number: "4",
              title: "Exécution par métiers",
              description:
                "Chaque corps de métier entre après l'inspection du précédent.",
            },
            {
              number: "5",
              title: "Réception des travaux",
              description:
                "Visite finale, liste de déficiences, correction avant le solde.",
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
          intro:
            "Six documents qu'on devrait exiger de n'importe quel entrepreneur.",
          rows: [
            {
              label: "Soumission",
              value: "Travaux, matériaux et exclusions détaillés avant signature",
            },
            {
              label: "Contrat",
              value: "Portée, prix, modalités de paiement et clause de garantie",
            },
            {
              label: "Échéancier",
              value: "Dates de début et de fin, jalons par corps de métier",
            },
            {
              label: "Avenants",
              value: "Chaque changement chiffré et accepté avant exécution",
            },
            {
              label: "Permis",
              value: "Copie du permis délivré, émis au nom du propriétaire",
            },
            {
              label: "Réception",
              value: "Liste de déficiences dressée avec vous, corrigée au solde",
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
              a: "Oui. La visite et l'estimation initiale ne sont pas facturées et ne vous engagent à rien. Si des plans d'architecte ou une expertise d'ingénieur sont requis, ils sont chiffrés à part et approuvés avant.",
            },
            {
              q: "Qui s'occupe de la demande de permis ?",
              a: "Nous. On vérifie les exigences de votre ville, on prépare les plans, on dépose la demande et on suit le dossier jusqu'à la délivrance. Le permis reste émis au nom du propriétaire.",
            },
            {
              q: "Comment les paiements sont-ils structurés ?",
              a: "Un dépôt à la signature, puis des versements liés à l'avancement réel des travaux plutôt qu'à des dates fixes. Le dernier versement est dû une fois la liste de déficiences corrigée.",
            },
            {
              q: "Que se passe-t-il si on découvre un problème caché ?",
              a: "On arrête, on documente, on vous explique les options et on chiffre le correctif dans un avenant. Rien n'est exécuté avant votre accord écrit.",
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
            "Décrivez-nous le projet. Vous repartez avec une soumission détaillée, pas un chiffre lancé au téléphone.",
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
          note: "Licence RBQ 8306-0806-27 • Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
