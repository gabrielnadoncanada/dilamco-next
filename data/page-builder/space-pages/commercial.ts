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
            "Bureaux, commerces et améliorations locatives, menés par phases pour garder votre local en activité.",
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
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Bureau réaménagé dans un immeuble du centre-ville de Montréal",
              },
              caption: "Bureau réaménagé, centre-ville",
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
              label: "Catégories RBQ, bâtiments de tout genre couverts",
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
                "Phases datées au contrat, pour un local qui continue de recevoir sa clientèle.",
              href: "/processus",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le mandat commercial en bref",
          intro:
            "Un local fermé plus longtemps que prévu coûte plus cher que les travaux.",
          rows: [
            {
              label: "Délai",
              value: "Fixé au contrat après cadrage, le permis mène le calendrier",
            },
            {
              label: "Permis",
              value: "Demande municipale déposée par nous, inspections suivies",
            },
            {
              label: "Conformité",
              value: "Code de construction du Québec, catégories RBQ 1.2 et 1.3",
            },
            {
              label: "Assurances",
              value: "Responsabilité civile et chantier, attestations fournies",
            },
            {
              label: "Mobilier",
              value: "Accueil et rangement technique, 9 à 15 semaines de délai",
            },
            {
              label: "Pose",
              value: "Par phases, hors des heures quand le local reste actif",
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
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Sud, Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
