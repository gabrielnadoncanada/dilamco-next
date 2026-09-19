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
          heading: "Les six types de rénovation que nous faisons",
          items: [
            {
              title: "Cuisine",
              href: "/services/renovation/cuisine",
              description:
                "On refait la pièce au complet et on fournit les armoires.",
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
                "On imperméabilise la douche et on sort la ventilation dehors.",
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
                "On règle l'humidité avant de monter le premier mur.",
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
                "On répare le sous-plancher avant de poser le revêtement.",
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
                "On vérifie le zonage, puis on construit la nouvelle pièce.",
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
                "On documente les dommages, puis on remet la maison en état.",
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
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment nous menons un projet",
          steps: [
            {
              number: "1",
              title: "Appel et visite",
              description:
                "Nous venons voir les lieux et noter les contraintes, sans frais.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Vous recevez les travaux, les matériaux, les exclusions et le prix.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Vous signez les dates et les paiements, nous déposons la demande.",
            },
            {
              number: "4",
              title: "Chantier",
              description:
                "Chaque corps de métier entre à sa date, selon l'échéancier signé.",
            },
            {
              number: "5",
              title: "Livraison",
              description:
                "Nous faisons le tour avec vous et corrigeons avant le dernier paiement.",
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
          heading: "Ce que comprend un mandat clé en main",
          intro: "Les réponses aux questions qu'on nous pose avant de signer.",
          rows: [
            {
              label: "Ce que vous signez",
              value: "Un contrat qui décrit les travaux, le prix, les dates et les paiements",
            },
            {
              label: "Qui demande le permis",
              value: "Nous. Nous vérifions les exigences de votre ville et suivons le dossier",
            },
            {
              label: "Qui coordonne les métiers",
              value: "Nous les engageons et nous les payons, vous recevez une seule facture",
            },
            {
              label: "Assurances",
              value: "Notre responsabilité civile et notre assurance chantier sont en vigueur",
            },
            {
              label: "Premier retour",
              value: "Vous avez de nos nouvelles en 24 à 48 heures ouvrables",
            },
            {
              label: "Territoire",
              value: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
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
