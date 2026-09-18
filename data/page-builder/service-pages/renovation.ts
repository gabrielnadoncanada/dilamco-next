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
        variant: "split-image",
        props: {
          eyebrow: "Entrepreneur général",
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
          badges: ["Permis inclus", "Contrat écrit", "Assuré"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Chantier de rénovation résidentielle clé en main",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "promesse",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui passe de votre côté au nôtre",
          description:
            "Le mandat d'entrepreneur général n'est pas une formule commerciale, c'est une répartition de responsabilité.",
          cards: [
            {
              title: "Le permis",
              description:
                "Vérification du besoin auprès de votre ville, dépôt du dossier et suivi jusqu'à la délivrance.",
            },
            {
              title: "Les corps de métier",
              description:
                "Plomberie, électricité, ventilation, plâtre et finition travaillent sous notre contrat. C'est nous qui payons.",
            },
            {
              title: "Le calendrier et les inspections",
              description:
                "Chaque métier a sa fenêtre, chaque inspection est planifiée avant la fermeture des murs.",
            },
            {
              title: "La garantie",
              description:
                "Travaux garantis selon le contrat. Un ajustement plus tard ? Vous rappelez la même entreprise.",
            },
          ],
          columns: "2",
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
                "Démolition, plomberie, électricité, armoires et finition en une seule séquence.",
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
                "Membrane d'étanchéité, ventilation, plomberie, céramique et vanité.",
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
                "Humidité, drainage, isolation, issue de secours et permis obligatoire.",
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
                "Sous-plancher, planéité, niveaux et transitions entre les pièces.",
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
                "Zonage, permis, fondations, structure, enveloppe et raccordements.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement de maison en construction",
              },
              badges: ["Structure"],
              footerCtaLabel: "Voir agrandissement",
            },
            {
              title: "Après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reconstruction après dégât d'eau ou feu, documentée pour l'assureur.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
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
              title: "Visite et évaluation",
              description:
                "Relevé des lieux, de l'état de l'existant et des contraintes. Sans frais.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, exclusions et budget, sous 24 à 48 heures ouvrables.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Dates, paiements et conditions signés, puis demande déposée à la ville.",
            },
            {
              number: "4",
              title: "Exécution coordonnée",
              description:
                "Démolition, mécanique, inspections, fermeture et finition, dans le bon ordre.",
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
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Qu'est-ce qui est inclus dans « clé en main » ?",
              a: "La gestion complète : permis, embauche et paiement des corps de métier, commande des matériaux, calendrier, inspections, protection et nettoyage des lieux, livraison et garantie. Les exclusions sont écrites noir sur blanc dans la soumission.",
            },
            {
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats démarrent autour de 25 000 $. À titre indicatif, une salle de bain se situe souvent entre 15 000 $ et 35 000 $, une cuisine complète entre 35 000 $ et 50 000 $. Le prix ferme est fixé après le relevé.",
            },
            {
              q: "Ai-je besoin d'un permis ?",
              a: "Généralement dès qu'on touche un mur porteur, qu'on déplace la plomberie, qu'on aménage un sous-sol ou qu'on ajoute de la surface habitable. Nous validons auprès de votre ville et déposons la demande à votre place.",
            },
            {
              q: "Combien de temps dure un chantier ?",
              a: "Une salle de bain se compte en semaines, une cuisine ou un sous-sol en mois, un agrandissement davantage à cause du permis et de la fondation. Les armoires sur mesure demandent 9 à 15 semaines, planifiées en parallèle.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui, avec la portée et la durée inscrites au contrat. Licence RBQ 8306-0806-27 valide sans restriction depuis 2004, catégories 1.2 et 1.3. Nous ne construisons pas de maisons neuves, le plan GCR ne s'applique donc pas.",
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
          heading: "Décrivez-nous votre projet",
          intro:
            "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
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
