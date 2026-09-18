import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Salle de lavage sur mesure — entrepreneur général",
    description:
      "Salle de lavage sur mesure à Montréal, Laval et sur la Rive-Sud : conception, production en usine partenaire et pose par un entrepreneur général licencié.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Salle de lavage sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de lavage sur mesure",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Salle de lavage sur mesure",
    description:
      "Conception, fabrication contrôlée et installation d'armoires de salle de lavage sur mesure.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Salle de lavage sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Salle de lavage",
          heading: "Salle de lavage sur mesure, plomberie et rangement d'un coup",
          description:
            "Comptoir de pliage, colonnes et rangement dimensionnés pour la pièce, posés avec la plomberie et la ventilation.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Sur mesure", "Résistant à l'humidité"],
          image: {
            src: "/images/generated/spaces/space-laundry-hero-01.webp",
            alt: "Salle de lavage sur mesure à Pierrefonds et dans le Grand Montréal",
          },
          caption: "Montréal · Laval · Rive-Sud",
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
            "Une salle de lavage est un espace technique. On règle les machines, l'eau et l'air avant le rangement.",
          cards: [
            {
              title: "Comptoir de pliage",
              description: "Surface continue au-dessus des appareils, à hauteur de travail.",
            },
            {
              title: "Colonnes et paniers",
              description: "Rangement vertical pour produits, paniers et matériel d'entretien.",
            },
            {
              title: "Plomberie et ventilation",
              description: "Cuve, robinet, évacuation de la sécheuse et dégagements vérifiés.",
            },
            {
              title: "Un seul responsable",
              description: "Plancher, peinture, électricité et armoires coordonnés au même contrat.",
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
          heading: "Salles de lavage récentes",
          items: [
            {
              title: "Salle de lavage, Montréal",
              href: "/projets",
              description: "Rangement et plan de travail dans un espace compact.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Projet salle de lavage sur mesure à Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage, Laval",
              href: "/projets",
              description: "Rangement vertical et finition lavable.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Projet salle de lavage sur mesure à Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de lavage, Rive-Sud",
              href: "/projets",
              description: "Cuve, comptoir et colonnes dans la même ligne.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Projet salle de lavage sur mesure sur la Rive-Sud",
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
              q: "Combien coûte une salle de lavage sur mesure ?",
              a: "Le prix dépend de la configuration (colonnes ou appareils côte à côte, cuve, plan de travail), du volume de rangement et des contraintes techniques. Le montant ferme est fixé après le relevé sur place.",
            },
            {
              q: "Quel est le délai ?",
              a: "De 9 à 15 semaines entre la validation du design et la pose. Les travaux de plomberie et d'électricité sont planifiés avant la livraison des armoires.",
            },
            {
              q: "Quels matériaux recommandez-vous ?",
              a: "Contreplaqué de bouleau, finis lavables résistants à la vapeur et aux éclaboussures, quincaillerie durable. Les arrières, les fixations et les dégagements autour des appareils limitent le gondolement.",
            },
            {
              q: "Peut-on déplacer les appareils dans la pièce ?",
              a: "Oui, avec le déplacement de l'alimentation, du drain et de l'évacuation de la sécheuse. C'est ce qui décide souvent de la configuration finale, on le valide au relevé.",
            },
            {
              q: "Pouvez-vous rénover toute la pièce ?",
              a: "Oui. Dilamco est entrepreneur général, licence RBQ 8306-0806-27 : plomberie, électricité, ventilation, plancher, peinture et pose des armoires, coordonnés par un seul responsable, au contrat écrit.",
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
          heading: "Parlez-nous de votre salle de lavage",
          intro: "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
