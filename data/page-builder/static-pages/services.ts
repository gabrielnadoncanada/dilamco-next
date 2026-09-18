import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Services de rénovation et construction résidentielle",
    description:
      "Entrepreneur général à Montréal : cuisine, salle de bain, sous-sol, plancher, agrandissement, après sinistre. Licence RBQ, contrat écrit.",
    path: "/services",
    ogAlt: "Services de rénovation Dilamco, entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "Services d'entrepreneur général",
    description:
      "Rénovation résidentielle et commerciale coordonnée par un entrepreneur général titulaire de la licence RBQ 8306-0806-27 : permis, corps de métier, échéancier et contrat écrit.",
    url: SITE.url + "/services",
    serviceType: "Entrepreneur général en rénovation",
    areaServed: [
      "Montréal",
      "Ouest-de-l'Île",
      "Laval",
      "Rive-Sud",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["RBQ 8306-0806-27", "Depuis 2004", "Contrat écrit"],
          heading: "Deux divisions, un seul entrepreneur responsable",
          description:
            "La rénovation résidentielle et commerciale d'un côté, les armoires sur mesure de l'autre, sous le même contrat.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce que nous prenons en charge",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Une pièce mise à nu, refaite et rebranchée par la même équipe.",
              image: {
                src: "/images/realisations/cuisine-shaker-en-u-dosseret-metro-01.webp",
                alt: "Cuisine shaker en U avec dosseret métro",
              },
              badges: ["Multi-métiers"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité, pente et extraction avant la moindre céramique.",
              image: {
                src: "/images/realisations/salle-de-bain-marbre-meuble-lavabo-flottant-01.webp",
                alt: "Salle de bain avec meuble-lavabo flottant et marbre",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Diagnostic d'humidité, permis, issue de secours, puis finition.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Sous-sol aménagé en salle de jeux",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description:
                "Arrachage, support corrigé, nivellement, pose et seuils.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Pose de plancher de bois franc dans une résidence",
              },
              badges: ["Bois franc"],
              footerCtaLabel: "Voir le plancher",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Marges de recul, fondation, charpente et raccord à l'existant.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement arrière d'une maison unifamiliale",
              },
              badges: ["Ingénieur"],
              footerCtaLabel: "Voir l'agrandissement",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Constat, devis par poste et remise en état après l'assèchement.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Pièce remise en état après un sinistre",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir l'après sinistre",
            },
            {
              title: "Aménagement commercial",
              href: "/espaces/commercial",
              description:
                "Bureaux, commerces et améliorations locatives, catégorie RBQ 1.3.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Aménagement commercial livré prêt à occuper",
              },
              badges: ["RBQ 1.3"],
              footerCtaLabel: "Voir le commercial",
            },
            {
              title: "Design d'armoires",
              href: "/services/design",
              description:
                "Implantation, finis et quincaillerie arrêtés avant la commande.",
              image: {
                src: "/images/generated/services/service-design-hero-01.webp",
                alt: "Séance de design d'armoires sur mesure",
              },
              badges: ["Sous-catégorie 12"],
              footerCtaLabel: "Voir le design",
            },
            {
              title: "Production des armoires",
              href: "/services/fabrication",
              description:
                "Caissons et façades produits par notre usine partenaire.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Caissons et façades d'armoires sur mesure",
              },
              badges: ["Sur mesure"],
              footerCtaLabel: "Voir la production",
            },
            {
              title: "Installation",
              href: "/services/installation",
              description:
                "Pose, ajustement des portes et raccordement des électroménagers.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Installation d'armoires sur mesure pendant un chantier",
              },
              badges: ["Nos équipes"],
              footerCtaLabel: "Voir l'installation",
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
          heading: "L'entreprise en bref",
          intro: "Les faits vérifiables avant de nous confier un chantier.",
          rows: [
            {
              label: "Licence",
              value: "8306-0806-27, délivrée le 7 septembre 2004, sans restriction",
            },
            {
              label: "Catégories",
              value: "1.2 et 1.3, plus la sous-catégorie 12, armoires et comptoirs",
            },
            {
              label: "Maisons neuves",
              value: "Nous n'en construisons pas, uniquement du bâti existant",
            },
            {
              label: "Base",
              value: "Pierrefonds-Roxboro, dans l'Ouest-de-l'Île",
            },
            {
              label: "Interlocuteur",
              value: "Un seul responsable, du devis au dernier paiement",
            },
            {
              label: "Estimation",
              value: "Gratuite, sur place, sans engagement",
            },
          ],
          note: "Licence vérifiable au registre de la Régie du bâtiment du Québec.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Quel service correspond à votre projet ?",
          intro:
            "Décrivez la pièce ou le bâtiment. Nous vous dirons quelle division s'en occupe.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Ouest-de-l'Île et Grand Montréal",
        },
      },
    },
  ],
};
