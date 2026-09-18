import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation clé en main — entrepreneur général à Montréal",
    description:
      "Rénovation clé en main : permis, corps de métier coordonnés, échéancier et contrat écrit. Entrepreneur général licencié RBQ depuis 2004.",
    path: "/services/renovation",
    ogAlt: "Rénovation clé en main par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Rénovation clé en main",
    description:
      "Entrepreneur général responsable du projet complet : demande de permis, coordination des corps de métier, inspections, échéancier et livraison, sous licence RBQ 8306-0806-27.",
    url: SITE.url + "/services/renovation",
    serviceType: "Rénovation résidentielle clé en main",
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
          badges: ["Permis inclus", "Contrat écrit", "Assuré"],
          heading: "Un seul entrepreneur, du permis à la livraison",
          description:
            "Nous signons le contrat, déposons le permis, payons les corps de métier et répondons du résultat.",
          actions: [
            {
              label: "Estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les six types de rénovation",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Du drain au comptoir, armoires fournies et posées dans le même mandat.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Rénovation de cuisine complète",
              },
              badges: ["Multi-métiers"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane continue, pente validée, ventilation sortie à l'extérieur.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Rénovation de salle de bain complète",
              },
              badges: ["Étanchéité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "L'eau et la hauteur libre se règlent avant la première division.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol fini par un entrepreneur général",
              },
              badges: ["Permis obligatoire"],
              footerCtaLabel: "Voir sous-sol",
            },
            {
              title: "Plancher",
              href: "/services/renovation/plancher",
              description:
                "Support remis d'aplomb, seuils et niveaux réglés au plan.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Rénovation de plancher résidentiel",
              },
              badges: ["Sous-plancher"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Zonage lu, plans scellés, semelles coulées sous le niveau de gel.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Agrandissement de maison en construction",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir agrandissement",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Portée pièce par pièce et devis par poste pour votre réclamation.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Reconstruction après un dégât d'eau",
              },
              badges: ["Assurance"],
              footerCtaLabel: "Voir après sinistre",
            },
          ],
        },
      },
    },
    {
      id: "process",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Cinq étapes, toujours les mêmes",
          steps: [
            {
              number: "1",
              title: "Appel et visite",
              description:
                "Nous venons voir les lieux et relever les contraintes, sans frais.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions et budget remis en 24 à 48 heures.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Dates et modalités de paiement signées, dossier déposé à la ville.",
            },
            {
              number: "4",
              title: "Chantier coordonné",
              description:
                "Les métiers se succèdent au calendrier, mur ouvert puis refermé.",
            },
            {
              number: "5",
              title: "Livraison",
              description:
                "Visite de fin avec vous, retouches réglées avant le solde.",
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
          heading: "En bref",
          intro: "Les conditions d'un mandat clé en main.",
          rows: [
            {
              label: "Contrat",
              value: "Portée, prix, échéancier et paiements écrits, avenant chiffré",
            },
            {
              label: "Permis",
              value: "Vérifié auprès de votre ville, déposé et suivi par nous",
            },
            {
              label: "Corps de métier",
              value: "Engagés et payés par nous, une seule facturation",
            },
            {
              label: "Assurances",
              value: "Responsabilité civile et assurance chantier en vigueur",
            },
            {
              label: "Délai de retour",
              value: "24 à 48 heures ouvrables après votre demande",
            },
            {
              label: "Territoire",
              value: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud, Vaudreuil-Soulanges",
            },
          ],
          note: "Licence RBQ 8306-0806-27, catégories 1.2 et 1.3, valide depuis 2004.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Décrivez-nous votre projet de rénovation",
          intro:
            "Dites-nous la pièce, le budget envisagé et l'échéance. Nous fixons la visite.",
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
          note: "Licence RBQ 8306-0806-27 · Entrepreneur général depuis 2004",
        },
      },
    },
  ],
};
