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
        variant: "centered",
        props: {
          badges: ["Bureaux", "Commerces"],
          heading: "Aménagement commercial à Montréal, livré à la date convenue",
          description:
            "Bureaux, commerces et améliorations locatives, réalisés par étapes pour garder votre local ouvert.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets/commercial",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Bureau réaménagé dans un immeuble du centre-ville de Montréal",
          },
          caption: "Bureau réaménagé, centre-ville",
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Des locaux remis en service",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/espaces-featured-commercial-project-01.webp",
                alt: "Comptoir d'accueil et rangement en chêne dans un espace commercial",
              },
              caption: "Comptoir d'accueil en chêne",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Améliorations locatives réalisées dans un local de Laval",
              },
              caption: "Améliorations locatives, Laval",
            },
            {
              kind: "stat",
              value: "1.2 et 1.3",
              label: "Nos catégories RBQ, valables pour tout type de bâtiment",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Local commercial livré prêt à occuper au centre-ville de Montréal",
              },
              caption: "Local prêt à occuper",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Comptoir d'accueil et rangement technique intégrés à un commerce",
              },
              caption: "Mobilier d'accueil intégré",
            },
            {
              kind: "text",
              title: "Travaux hors des heures",
              description:
                "On travaille le soir ou la nuit pour que vous puissiez rester ouvert.",
              href: "/processus",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le projet commercial en bref",
          rows: [
            {
              label: "Combien de temps",
              value:
                "La date est fixée au contrat, et c'est le permis qui donne le rythme.",
            },
            {
              label: "Permis",
              value:
                "Nous déposons la demande à la Ville et nous suivons les inspections.",
            },
            {
              label: "Conformité",
              value:
                "Nos catégories RBQ 1.2 et 1.3 couvrent les bâtiments de tout genre.",
            },
            {
              label: "Assurances",
              value:
                "Nous sommes assurés en responsabilité civile et les attestations vous sont remises.",
            },
            {
              label: "Mobilier",
              value:
                "Un comptoir d'accueil ou un rangement sur mesure demande 9 à 15 semaines.",
            },
            {
              label: "Qui installe",
              value:
                "Notre équipe, par étapes et hors des heures si le local doit rester ouvert.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-03.webp",
            alt: "Mobilier commercial intégré dans un local livré par Dilamco",
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
              q: "Qui répond au propriétaire de l'immeuble pendant les travaux ?",
              a: "Nous. Avis au gestionnaire, réservation du monte-charge, protection des aires communes et horaires autorisés sont réglés avant la première journée de chantier.",
            },
            {
              q: "Comment sont traitées les améliorations locatives au bail ?",
              a: "La portée est découpée selon ce que le bail met à la charge du locateur et du locataire. Chaque part est chiffrée séparément pour que la facturation suive.",
            },
            {
              q: "Travaillez-vous dans les immeubles multi-logements ?",
              a: "Oui, unités vacantes, aires communes, balcons et remises. Les travaux sont séquencés pour limiter le bruit et les coupures de service chez les occupants.",
            },
            {
              q: "Que se passe-t-il si l'inspection municipale refuse un élément ?",
              a: "Le correctif est exécuté à nos frais quand il relève de notre exécution. Si le refus vient des plans fournis, il est documenté et repris avec le concepteur.",
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
            "Estimation gratuite. On cadre le permis et la séquence avant d'ouvrir les murs.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets/commercial",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
