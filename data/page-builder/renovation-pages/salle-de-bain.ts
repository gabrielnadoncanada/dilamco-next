import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de salle de bain à Montréal — clé en main",
    description:
      "Rénovation de salle de bain complète : étanchéité, membrane, ventilation, plomberie, tuilage et vanité. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Rénovation de salle de bain par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain par un entrepreneur général : permis, plomberie, ventilation, membrane d'étanchéité, tuilage, vanité sur mesure et finition.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Rénovation de salle de bain",
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
          eyebrow: "Rénovation de salle de bain",
          heading: "Une salle de bain refaite d'abord pour son étanchéité",
          description:
            "Plomberie, ventilation, membrane, tuilage et vanité. Un seul contrat, une seule licence, des travaux inspectés.",
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
          badges: ["Membrane d'étanchéité", "Plomberie inspectée", "Prix ferme"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée par un entrepreneur général",
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
              title: "Démolition et mise à nu",
              description: "On ouvre pour voir l'état réel",
              icon: "hammer",
              bullets: [
                "Retrait de la douche, de la vanité et des revêtements",
                "Contreplaqué et solives vérifiés sous la douche",
                "Sous-plancher et charpente corrigés avant la pose",
              ],
            },
            {
              title: "Plomberie et ventilation",
              description: "Les travaux qui passent l'inspection",
              icon: "droplets",
              bullets: [
                "Drains et alimentation repris avec la pente requise",
                "Ventilateur évacué dehors, jamais dans l'entretoit",
                "Valve antibrûlure et inspection avant fermeture",
              ],
            },
            {
              title: "Étanchéité et tuilage",
              description: "L'étape invisible qui décide de la durée",
              icon: "shieldCheck",
              bullets: [
                "Panneau hydrofuge sur les surfaces mouillées",
                "Membrane continue, remontée aux murs, raccordée au drain",
                "Pente validée avant la pose de la céramique",
              ],
            },
            {
              title: "Vanité et finition",
              description: "Ce qui se voit, sur une base saine",
              icon: "bath",
              bullets: [
                "Vanité sur mesure fournie par notre usine partenaire",
                "Comptoir, robinetterie, miroir et éclairage",
                "Toilette, porte de douche, peinture et moulures",
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
                "Relevé, ventilation, plomberie et signes d'infiltration vérifiés sur place.",
            },
            {
              number: "2",
              title: "Contrat et permis",
              description:
                "Portée, prix, échéancier signés, demande déposée si la plomberie bouge.",
            },
            {
              number: "3",
              title: "Démolition",
              description:
                "Mise à nu complète. Un sous-plancher atteint est chiffré avec vous.",
            },
            {
              number: "4",
              title: "Mécanique et inspection",
              description:
                "Drains, circuits, ventilation, puis inspection avant la fermeture des murs.",
            },
            {
              number: "5",
              title: "Étanchéité, finition, livraison",
              description:
                "Membrane, céramique, vanité, raccordements et inspection finale avec vous.",
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
          heading: "Permis, ventilation et conformité",
          intro:
            "Ce sont les points qu'un inspecteur vérifie et qu'un assureur regarde après un dégât d'eau.",
          items: [
            {
              title: "Plomberie déplacée",
              description: "Permis requis, inspection avant la fermeture des murs.",
            },
            {
              title: "Nouvelle salle de bain",
              description: "Permis exigé presque partout, plans à l'appui.",
            },
            {
              title: "Ventilation obligatoire",
              description: "Extraction vers l'extérieur, jamais dans l'entretoit.",
            },
            {
              title: "Protection antibrûlure",
              description: "Robinets de douche et de bain à température limitée.",
            },
            {
              title: "Remplacement à l'identique",
              description: "Habituellement sans permis. On valide avec la ville.",
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
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Préparation d'une douche avec membrane d'étanchéité",
          },
          cardTitle: "Ce que l'assureur regarde",
          cardDescription:
            "La conformité des travaux et la présence d'un entrepreneur licencié pèsent dans le traitement d'une réclamation.",
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
              q: "Combien coûte une rénovation de salle de bain ?",
              a: "Une salle de bain complète se situe le plus souvent entre 15 000 $ et 35 000 $. Le haut de la fourchette correspond à une douche de plain-pied, un plancher chauffant ou un déplacement de plomberie.",
            },
            {
              q: "Faut-il un permis ?",
              a: "Un remplacement au même endroit n'en demande habituellement pas. Dès que la plomberie est déplacée ou qu'une salle de bain est ajoutée, un permis est requis, avec inspection avant fermeture.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Quelques semaines sur place. Les temps de séchage du mortier, du coulis et de la peinture sont incompressibles, et l'inspection se planifie avant la fermeture des murs. L'échéancier est joint au contrat.",
            },
            {
              q: "Qu'est-ce qu'une membrane d'étanchéité ?",
              a: "Une couche continue posée sous la céramique de la douche, remontée sur les murs et raccordée au drain. Elle empêche l'eau d'atteindre la structure.",
            },
            {
              q: "Et si vous trouvez des dégâts d'eau en démolissant ?",
              a: "C'est fréquent après vingt ans. Nous vous montrons ce qui est atteint et soumettons le coût de la réparation par écrit avant de poursuivre. Rien n'est refermé sur un problème connu.",
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
          heading: "Faites évaluer votre salle de bain",
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
          note: "Licence RBQ 8306-0806-27 · Étanchéité, ventilation et plomberie conformes",
        },
      },
    },
  ],
};
