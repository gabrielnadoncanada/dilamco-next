import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Construction et aménagement commercial à Montréal",
    description:
      "Construction et aménagement commercial à Montréal : bureaux, commerces, améliorations locatives et multi-logements, par un entrepreneur général licencié.",
    path: "/espaces/commercial",
    ogAlt: "Construction et aménagement commercial Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial" },
  ],
  service: {
    name: "Construction et aménagement commercial",
    description:
      "Rénovation et aménagement de bureaux, de commerces et d'immeubles multi-logements, améliorations locatives et mobilier intégré, par un entrepreneur général licencié RBQ.",
    url: SITE.url + "/espaces/commercial",
    serviceType: "Construction et aménagement commercial",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Commercial",
          heading: "Aménagement commercial livré à la date convenue",
          description:
            "Bureaux, commerces, améliorations locatives et multi-logements. Permis, corps de métier et échéancier sous une seule responsabilité.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Bureaux", "Commerces", "Multi-logements"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Aménagement commercial sur mesure à Montréal et dans le Grand Montréal",
          },
          caption: "Montréal · Laval · Rive-Sud · Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que comprend le mandat",
          description:
            "Un local fermé plus longtemps que prévu coûte cher. La séquence est cadrée avant d'ouvrir les murs.",
          cards: [
            {
              title: "Permis et conformité",
              description: "Plans, demande municipale et travaux conformes au Code de construction du Québec.",
            },
            {
              title: "Travaux par phases",
              description: "Interventions hors des heures d'ouverture quand le local doit rester actif.",
            },
            {
              title: "Un seul responsable",
              description: "Cloisons, électricité, plomberie, ventilation, planchers et peinture coordonnés.",
            },
            {
              title: "Mobilier intégré",
              description: "Accueil, rangement technique et espaces de service par notre division armoires.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets commerciaux",
          items: [
            {
              title: "Aménagement de bureaux",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
              description: "Local réaménagé et livré prêt à occuper, au centre-ville.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Projet commercial à Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Améliorations locatives",
              href: "/projets",
              description: "Local adapté au locataire, selon les termes du bail.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Projet commercial à Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Mobilier commercial intégré",
              href: "/projets",
              description: "Accueil et rangement technique posés avec le reste.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Projet commercial sur la Rive-Sud",
              },
              badges: ["Rive-Sud"],
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
          heading: "Questions fréquentes",
          items: [
            {
              q: "Quels types de projets commerciaux réalisez-vous ?",
              a: "Bureaux, commerces de détail, espaces de service, améliorations locatives selon les termes du bail et travaux dans les immeubles multi-logements. Le mobilier intégré est fourni par notre division armoires quand le projet en demande.",
            },
            {
              q: "Pouvez-vous respecter nos heures d'ouverture ?",
              a: "Oui, quand la séquence est cadrée dès la planification. Les travaux sont découpés en phases et les interventions hors heures sont inscrites au contrat écrit, avec leurs dates.",
            },
            {
              q: "Vous occupez-vous des permis et de la conformité ?",
              a: "Oui. Demande de permis municipal, coordination des inspections et exécution conforme au Code de construction du Québec. Licence RBQ 8306-0806-27, catégories 1.2 et 1.3, assurance responsabilité civile et chantier.",
            },
            {
              q: "Quel est le délai d'un aménagement commercial ?",
              a: "Il dépend surtout du permis et de la portée. L'échéancier est fixé au contrat après le cadrage. Le mobilier intégré demande de 9 à 15 semaines, commandé en parallèle des travaux.",
            },
            {
              q: "Où intervenez-vous ?",
              a: "Notre base est dans l'Ouest-de-l'Île. On intervient à Montréal, à Laval, sur la Rive-Sud et dans Vaudreuil-Soulanges.",
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
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Sud, Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
