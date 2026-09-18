import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de cuisine à Montréal — clé en main",
    description:
      "Rénovation de cuisine complète : démolition, plomberie, électricité, ventilation, armoires, comptoirs. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/cuisine",
    ogAlt: "Rénovation de cuisine complète par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de cuisine",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Rénovation de cuisine",
    description:
      "Rénovation de cuisine complète par un entrepreneur général : permis, démolition, plomberie, électricité, ventilation, planchers, armoires sur mesure, comptoirs et finition.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Rénovation de cuisine",
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
          eyebrow: "Rénovation de cuisine",
          heading: "Une cuisine refaite au complet, sous un seul contrat",
          description:
            "Démolition, plomberie, électricité, ventilation, armoires et comptoir. Permis compris, échéancier écrit.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Permis inclus", "Métiers coordonnés", "Prix ferme"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée par un entrepreneur général à Montréal",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que le mandat comprend",
          intro: "La portée exacte est écrite dans la soumission.",
          columns: "2",
          items: [
            {
              title: "Permis et démolition",
              description: "Ce qui se règle avant l'arrivée des armoires",
              icon: "fileCheck",
              bullets: [
                "Permis vérifié et déposé à votre ville",
                "Retrait des armoires, du comptoir et des revêtements",
                "Gestion et évacuation des débris",
              ],
            },
            {
              title: "Plomberie, électricité, ventilation",
              description: "Les travaux faits avant de fermer les murs",
              icon: "wrench",
              bullets: [
                "Évier, lave-vaisselle et réfrigérateur raccordés",
                "Circuits, prises d'îlot, éclairage encastré",
                "Hotte évacuée vers l'extérieur, inspection avant fermeture",
              ],
            },
            {
              title: "Planchers, murs et plafonds",
              description: "La base sur laquelle tout s'aligne",
              icon: "layers",
              bullets: [
                "Sous-plancher corrigé et mis à niveau",
                "Plancher neuf ou raccord avec l'existant",
                "Gypse, joints, peinture, dosseret et moulures",
              ],
            },
            {
              title: "Armoires, comptoir, finition",
              description: "Fournis et posés par la même équipe",
              icon: "package2",
              bullets: [
                "Armoires sur mesure fournies par notre usine partenaire",
                "Comptoir gabarié, coupé et posé",
                "Électroménagers raccordés, portes et tiroirs ajustés",
              ],
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
          heading: "Le chantier, étape par étape",
          steps: [
            {
              number: "1",
              title: "Visite et soumission",
              description:
                "Relevé des dimensions, panneau électrique, plomberie et structure vérifiés sur place.",
            },
            {
              number: "2",
              title: "Contrat et plans",
              description:
                "Portée, prix, échéancier et plans d'implantation signés avant tout achat.",
            },
            {
              number: "3",
              title: "Permis et démolition",
              description:
                "Demande déposée à votre ville, puis mise à nu de la pièce.",
            },
            {
              number: "4",
              title: "Mécanique et inspection",
              description:
                "Plomberie, électricité et ventilation inspectées avant la fermeture des murs.",
            },
            {
              number: "5",
              title: "Armoires et livraison",
              description:
                "Pose, comptoir, raccordements, ajustements et inspection finale avec vous.",
            },
          ],
        },
      },
    },
    {
      id: "permis",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Permis : quand en faut-il un ?",
          intro:
            "Les exigences changent d'une ville à l'autre. Nous validons votre cas et déposons la demande.",
          items: [
            {
              title: "Mur porteur modifié",
              description: "Permis requis, avec plan d'ingénieur pour la poutre.",
            },
            {
              title: "Plomberie déplacée",
              description: "Permis et inspection avant la fermeture des murs.",
            },
            {
              title: "Nouvelle ouverture extérieure",
              description: "Sortie de hotte ou fenêtre agrandie : permis requis.",
            },
            {
              title: "Remplacement au même endroit",
              description: "Habituellement sans permis. On valide avec la ville.",
            },
            {
              title: "Condo",
              description: "Autorisation du syndicat, horaires et accès confirmés avant.",
            },
          ],
          actions: [
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planification et relevé d'une rénovation de cuisine",
          },
          cardTitle: "Pourquoi on ne saute pas l'étape",
          cardDescription:
            "Des travaux sans permis peuvent entraîner un arrêt de chantier et compliquer une revente ou une réclamation d'assurance.",
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
              q: "Combien coûte une rénovation de cuisine ?",
              a: "Un rafraîchissement démarre autour de 20 000 $. Une rénovation complète se situe généralement entre 35 000 $ et 50 000 $ et plus. Le prix ferme est fixé après le relevé sur place.",
            },
            {
              q: "Ai-je besoin d'un permis ?",
              a: "Oui dans la plupart des rénovations complètes : mur porteur modifié, plomberie déplacée ou nouvelle ouverture extérieure. Un remplacement au même endroit n'en demande habituellement pas. Nous vérifions et déposons la demande.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Plusieurs semaines sur place, auxquelles s'ajoutent le délai de permis de votre ville et la production des armoires, de 9 à 15 semaines. Les deux se planifient en parallèle.",
            },
            {
              q: "Peut-on ouvrir le mur entre la cuisine et le salon ?",
              a: "Souvent oui. S'il est porteur, un ingénieur calcule la poutre et les appuis, le plan part avec la demande de permis. Nous vous le disons dès la visite.",
            },
            {
              q: "Fournissez-vous les armoires et le comptoir ?",
              a: "Oui. Les armoires sur mesure sont fournies par notre usine partenaire, sous la sous-catégorie 12 de notre licence RBQ, puis posées par nos équipes. Le comptoir est gabarié et installé dans le même mandat.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui, avec la portée et la durée inscrites au contrat. Licence RBQ 8306-0806-27 valide sans restriction depuis 2004, cautionnement de 40 000 $, aucune réclamation au dossier. Responsabilité civile et assurance chantier en vigueur.",
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
          heading: "Faites évaluer votre cuisine",
          intro:
            "Estimation gratuite. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Permis, métiers et échéancier inclus",
        },
      },
    },
  ],
};
