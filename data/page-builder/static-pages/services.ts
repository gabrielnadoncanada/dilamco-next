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
        variant: "split-image",
        props: {
          eyebrow: "Entrepreneur général",
          heading: "Rénovation résidentielle coordonnée par un seul entrepreneur",
          description:
            "Permis, corps de métier, échéancier et budget écrits au contrat. Licence RBQ depuis 2004.",
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
          badges: ["RBQ 8306-0806-27", "Depuis 2004", "Contrat écrit"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Chantier de rénovation résidentielle coordonné par un entrepreneur général",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Nos services de rénovation",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Démolition, plomberie, électricité, ventilation, armoires et finition dans une seule séquence.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Rénovation complète de cuisine résidentielle",
              },
              badges: ["Multi-métiers"],
              footerCtaLabel: "Voir la cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane d'étanchéité, plomberie, céramique, ventilation et vanité.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Salle de bain rénovée avec douche en céramique",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir la salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Humidité, drainage, isolation, pare-vapeur et issue de secours. Permis obligatoire.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol aménagé en pièce de vie",
              },
              badges: ["Permis"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description:
                "Sous-plancher mis à niveau, transitions et finition entre les pièces.",
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
                "Fondation, structure, enveloppe, raccordements et conformité au zonage.",
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
                "Dégât d'eau ou feu : assèchement, reconstruction et dossier pour l'assureur.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction d'une pièce après un dégât d'eau",
              },
              badges: ["Assurances"],
              footerCtaLabel: "Voir l'après sinistre",
            },
            {
              title: "Aménagement commercial",
              href: "/espaces/commercial",
              description:
                "Bureaux, commerces et améliorations locatives, sous la catégorie RBQ 1.3.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Aménagement commercial livré prêt à occuper",
              },
              badges: ["RBQ 1.3"],
              footerCtaLabel: "Voir le commercial",
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "La division armoires",
          intro:
            "Notre licence couvre la sous-catégorie 12, armoires et comptoirs. Un fournisseur de moins à coordonner.",
          items: [
            {
              title: "Intégrées au mandat",
              description: "même soumission et même échéancier que les travaux.",
            },
            {
              title: "Relevé après la démolition",
              description:
                "les mesures sont prises quand les murs sont en position finale.",
            },
            {
              title: "Fournies par notre usine partenaire",
              description: "conçues, coordonnées et installées par nos équipes.",
            },
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "Voir les espaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Installation d'armoires sur mesure pendant un chantier de rénovation",
          },
          cardTitle: "Sous-catégorie RBQ 12",
          cardDescription:
            "Armoires et comptoirs usinés, inscrits à notre licence.",
        },
      },
    },
    {
      id: "divisions",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Le volet armoires, étape par étape",
          columns: "3",
          items: [
            { title: "Design", href: "/services/design" },
            { title: "Fabrication", href: "/services/fabrication" },
            { title: "Installation", href: "/services/installation" },
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
              q: "Quelle est votre licence RBQ ?",
              a: "Licence 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction. Catégories 1.2 et 1.3, plus la sous-catégorie 12, armoires et comptoirs. Vérifiable au registre de la Régie du bâtiment du Québec.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Le plan de garantie GCR ne s'applique donc pas.",
            },
            {
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats démarrent autour de 25 000 $. Une salle de bain se situe souvent entre 15 000 $ et 35 000 $, une cuisine complète entre 35 000 $ et 50 000 $. Le prix ferme est fixé après le relevé sur place.",
            },
            {
              q: "Qui engage et paie les sous-traitants ?",
              a: "Nous. Plombier, électricien, ventilation, céramique et plâtrier travaillent sous notre contrat et notre calendrier. Vous avez un seul interlocuteur et une seule facturation.",
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
          heading: "Un projet à faire évaluer ?",
          intro: "Estimation gratuite. Retour sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Entrepreneur général depuis 2004 · Ouest-de-l'Île et Grand Montréal",
        },
      },
    },
  ],
};
