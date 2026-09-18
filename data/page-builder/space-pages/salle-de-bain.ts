import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Vanité de salle de bain sur mesure à Laval",
    description:
      "Vanité de salle de bain sur mesure à Laval, Montréal et sur les deux rives, conçue, fournie et posée par Dilamco, entrepreneur général licencié RBQ.",
    path: "/espaces/salle-de-bain",
    ogAlt: "Vanité de salle de bain sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de bain sur mesure",
      url: SITE.url + "/espaces/salle-de-bain",
    },
  ],
  service: {
    name: "Vanité de salle de bain sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de vanités de salle de bain sur mesure haut de gamme à Montréal, Laval, sur la Rive-Nord et la Rive-Sud.",
    url: SITE.url + "/espaces/salle-de-bain",
    serviceType: "Vanité de salle de bain sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Salle de bain",
          heading: "Vanité sur mesure, posée avec la plomberie",
          description:
            "Le meuble-lavabo est dimensionné pour la pièce et installé dans la séquence du chantier, par une seule équipe.",
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
          badges: ["Sur mesure", "Résistant à l'humidité"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Vanité de salle de bain sur mesure à Pierrefonds et dans le Grand Montréal",
          },
          caption: "Laval · Montréal · Rive-Nord · Rive-Sud",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les configurations qu'on réalise",
          columns: "2",
          items: [
            {
              title: "Simple lavabo",
              description: "Pour les salles de bain compactes et les salles d'eau.",
              icon: "package2",
              bullets: [
                "Largeur ajustée au mur disponible",
                "Rangement optimisé sous le lavabo",
              ],
            },
            {
              title: "Double lavabo",
              description: "Pour une salle de bain principale partagée.",
              icon: "slidersHorizontal",
              bullets: [
                "Deux plans de travail dédiés",
                "Colonne ou tiroirs centraux au besoin",
              ],
            },
            {
              title: "Vanité suspendue",
              description: "Fixation murale, plancher dégagé et entretien facilité.",
              icon: "doorOpen",
              bullets: [
                "Sensation d'espace dans les petites pièces",
                "Hauteur ajustée à votre usage",
              ],
            },
            {
              title: "Vanité avec rangement",
              description: "Tiroirs profonds, colonne et organisation intégrée.",
              icon: "wrench",
              bullets: [
                "Tiroirs en bouleau massif",
                "Espaces dédiés aux produits et serviettes",
              ],
            },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Salles de bain récentes",
          items: [
            {
              title: "Vanité sur mesure, Laval",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
              description: "Rangement optimisé autour de la plomberie existante.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Projet salle de bain sur mesure à Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de bain, Montréal",
              href: "/projets",
              description: "Vanité et céramique posées dans la même séquence.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Projet salle de bain sur mesure à Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "Voir les projets",
            },
            {
              title: "Salle de bain, Rive-Sud",
              href: "/projets",
              description: "Alignements soignés et finis choisis pour l'humidité.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.webp",
                alt: "Projet salle de bain sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud"],
              footerCtaLabel: "Voir les projets",
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
          heading: "Des matériaux choisis pour l'humidité",
          intro: "Une salle de bain use les meubles plus vite que le reste de la maison. La structure fait la différence.",
          items: [
            {
              title: "Bouleau massif",
              description: "Sur les éléments critiques, pour la stabilité",
            },
            {
              title: "Contreplaqué de bouleau",
              description: "Meilleure tenue dimensionnelle qu'un panneau de particules",
            },
            {
              title: "Finis lavables",
              description: "Choisis pour l'entretien quotidien",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Détail matériau pour salle de bain sur mesure",
          },
          cardTitle: "Ce que ça change",
          cardDescription: "Moins de gondolement, une tenue plus longue.",
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
              q: "Combien coûte une vanité sur mesure ?",
              a: "Le prix dépend du format (simple ou double lavabo), du volume de rangement, des finis et de la quincaillerie. Le montant ferme est fixé après le relevé sur place, dans la soumission détaillée.",
            },
            {
              q: "Quel est le délai ?",
              a: "De 9 à 15 semaines entre la validation du design et la pose. Quand la vanité fait partie d'une rénovation complète, la commande est calée sur l'échéancier du chantier.",
            },
            {
              q: "Quelle différence avec une vanité standard ?",
              a: "Une vanité standard est vendue en dimensions fixes, ce qui laisse des centimètres perdus autour du lavabo et de la tuyauterie. Le sur mesure exploite les angles, les hauteurs et les niches réelles de la pièce.",
            },
            {
              q: "L'humidité change-t-elle vos matériaux ?",
              a: "Oui. Bouleau massif, contreplaqué de bouleau et finis lavables, choisis pour limiter le gondolement. La ventilation de la pièce est vérifiée avec le reste du chantier.",
            },
            {
              q: "Pouvez-vous rénover toute la salle de bain ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : démolition, plomberie, électricité, membrane d'étanchéité, céramique, ventilation et pose de la vanité, coordonnées par un seul responsable, au contrat écrit.",
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
          heading: "Parlez-nous de votre salle de bain",
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
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Nord, Rive-Sud",
        },
      },
    },
  ],
};
