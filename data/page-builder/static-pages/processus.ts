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
        variant: "split-image",
        props: {
          eyebrow: "Processus",
          heading: "Le déroulement d'un projet de rénovation",
          description:
            "Cinq étapes. Chacune se ferme par un document signé, un permis obtenu ou une inspection passée.",
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
          badges: ["Soumission détaillée", "Contrat écrit", "Permis"],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Chantier de rénovation résidentielle en cours d'exécution",
          },
          caption: "Estimation gratuite · Licence RBQ 8306-0806-27",
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
          heading: "Cinq étapes, toujours dans cet ordre",
          steps: [
            {
              number: "1",
              title: "Visite et estimation",
              description:
                "Retour sous 24 à 48 heures ouvrables, relevé sur place, ordre de grandeur.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Travaux poste par poste, matériaux, quantités et exclusions écrits noir sur blanc.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Échéancier daté, calendrier de paiements, demande de permis déposée à la ville.",
            },
            {
              number: "4",
              title: "Chantier coordonné",
              description:
                "Chaque métier entre après l'inspection de l'étape précédente. Rien n'est recouvert sans vérification.",
            },
            {
              number: "5",
              title: "Livraison et garantie",
              description:
                "Inspection finale avec vous, déficiences corrigées avant le dernier paiement.",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce que vous recevez",
          intro:
            "Un chantier bien tenu laisse une trace écrite. Exigez ces documents de n'importe quel entrepreneur.",
          items: [
            {
              title: "La soumission détaillée",
              description:
                "les travaux poste par poste et ce qui n'est pas inclus.",
            },
            {
              title: "Le contrat écrit",
              description:
                "portée, prix, échéancier daté, paiements et modalités de garantie.",
            },
            {
              title: "Les avenants",
              description:
                "chaque changement est chiffré et accepté par écrit avant d'être exécuté.",
            },
            {
              title: "Le permis et la liste de déficiences",
              description:
                "copie du permis délivré et liste corrigée avant le paiement final.",
            },
          ],
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "En savoir plus sur Dilamco",
              href: "/a-propos",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Plans et documents de chantier sur une table de travail",
          },
          cardTitle: "Tout est écrit",
          cardDescription:
            "Aucune décision structurante ne repose sur une entente verbale.",
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
