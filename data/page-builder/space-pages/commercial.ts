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
          eyebrow: "Dilamco - Entrepreneur général",
          heading:
            "Construction et aménagement commercial à Montréal et dans le Grand Montréal",
          description:
            "Dilamco est entrepreneur général licencié RBQ (8306-0806-27) depuis 2004 : rénovation de bureaux, aménagement de commerces, améliorations locatives et travaux dans les immeubles multi-logements. On prend en charge le permis municipal, les corps de métier et l'échéancier, et notre division armoires fournit le mobilier intégré lorsque le projet en demande.",
          actions: [
            {
              label: "Obtenir une soumission commerciale",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets",
              variant: "ghost",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Bureaux", "Commerces", "Améliorations locatives"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Aménagement commercial sur mesure à Montréal et dans le Grand Montréal",
          },
          caption:
            "Bureaux, commerces, espaces de service et immeubles multi-logements",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Un chantier commercial qui respecte vos opérations",
          intro:
            "Un local fermé plus longtemps que prévu coûte cher. Le projet est planifié pour limiter les interruptions, tenir l'échéancier et rester conforme au Code de construction du Québec.",
          badges: ["Échéancier", "Conformité", "Coordination"],
          cardTitle: "Quand cette approche est pertinente",
          items: [
            "Rénovation de bureaux ou aménagement d'un local commercial.",
            "Améliorations locatives à livrer selon les termes du bail.",
            "Immeuble multi-logements à rénover sans vider le bâtiment.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le processus",
              href: "/processus",
              variant: "ghost",
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
          heading: "Une séquence prévisible, du permis à la livraison",
          intro:
            "Le projet est cadré tôt pour gérer le permis, les corps de métier, l'échéancier et la remise du local.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Usage, contraintes du local, exigences du bail et fenêtres d'intervention.",
            },
            {
              number: "2",
              title: "Permis",
              description:
                "Plans, demande de permis municipal et validation de la conformité avant travaux.",
            },
            {
              number: "3",
              title: "Exécution",
              description:
                "Corps de métier coordonnés par un seul responsable, avec suivi de l'échéancier.",
            },
            {
              number: "4",
              title: "Livraison",
              description:
                "Inspection, correctifs et remise du local prêt pour l'ouverture.",
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
          heading: "Des spécifications pensées pour un usage commercial",
          intro:
            "En commercial, la durabilité, l'entretien et la conformité comptent autant que l'apparence du local.",
          items: [
            {
              title: "Structure robuste",
              description:
                "Matériaux et détails de construction choisis pour supporter un achalandage soutenu.",
            },
            {
              title: "Entretien simplifié",
              description:
                "Surfaces et finitions alignées avec la réalité du lieu et son nettoyage quotidien.",
            },
            {
              title: "Conformité au Code",
              description:
                "Dégagements, sorties et installations conformes au Code de construction du Québec.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-01.webp",
            alt: "Détail matériau pour aménagement commercial",
          },
          cardTitle: "Résultat recherché",
          cardDescription:
            "Un local durable, conforme et livré à la date convenue, sans reprises coûteuses après l'ouverture.",
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
            "Quelques références qui montrent la qualité d'exécution et le niveau de coordination.",
          items: [
            {
              title: "Aménagement de bureaux",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
              description:
                "Local de bureaux réaménagé et livré prêt à occuper, corps de métier coordonnés.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Projet commercial à Montréal",
              },
              badges: ["Montréal", "Commercial"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Améliorations locatives",
              href: "/projets",
              description:
                "Local adapté aux besoins du locataire, dans le respect des termes du bail.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Projet commercial à Laval",
              },
              badges: ["Laval", "Bail commercial"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Mobilier commercial intégré",
              href: "/projets",
              description:
                "Accueil, rangement technique et espaces de service fournis par notre division armoires.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Projet commercial sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Mobilier intégré"],
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
          heading: "FAQ - construction et aménagement commercial",
          intro:
            "Les questions les plus utiles avant de cadrer un projet commercial.",
          items: [
            {
              q: "Quels types de projets commerciaux réalisez-vous ?",
              a: "Rénovation et aménagement de bureaux, de commerces de détail et d'espaces de service, améliorations locatives selon les termes du bail, et travaux dans les immeubles multi-logements. Dilamco est entrepreneur général licencié RBQ (8306-0806-27), ce qui permet de prendre en charge le permis, les corps de métier et l'échéancier sous une seule responsabilité. Notre division armoires fournit le mobilier intégré — accueil, rangement technique, espaces de service — quand le projet en demande.",
            },
            {
              q: "Pouvez-vous respecter nos heures et nos fenêtres d'intervention ?",
              a: "Oui, quand la séquence est cadrée dès la planification. On découpe les travaux par phases, on identifie ce qui doit être exécuté hors des heures d'ouverture et les dates sont inscrites au contrat écrit.",
            },
            {
              q: "Vous occupez-vous des permis et de la conformité ?",
              a: "Oui. On prépare la demande de permis municipal, on coordonne les inspections et on exécute les travaux conformément au Code de construction du Québec. Dilamco détient une licence d'entrepreneur général (catégories 1.2 Petits bâtiments et 1.3 Bâtiments de tout genre) et est assuré en responsabilité civile et chantier.",
            },
            {
              q: "Travaillez-vous à Montréal et autour ?",
              a: "Oui. Notre base est dans l'Ouest-de-l'Île. On intervient à Montréal, à Laval, sur la Rive-Sud et dans Vaudreuil-Soulanges.",
            },
            {
              q: "Pouvez-vous aussi faire la rénovation complète du local ?",
              a: "Oui — Dilamco est entrepreneur général (RBQ 8306-0806-27) et les armoires sont une de nos divisions. On peut prendre en charge la rénovation complète : permis, démolition, cloisons, électricité, plomberie, ventilation, planchers, peinture et mobilier intégré, coordonnés par un seul responsable. L'échéancier et le budget sont fixés au contrat écrit avant le début des travaux.",
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
            "Estimation gratuite, retour sous 24 à 48 h ouvrables. On cadre la portée, le permis et l'échéancier avant de chiffrer.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets commerciaux",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
