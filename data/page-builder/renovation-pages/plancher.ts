import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de plancher à Montréal — entrepreneur général",
    description:
      "Rénovation de plancher : sous-plancher, planéité, niveaux, transitions et pose. Entrepreneur général licencié RBQ, contrat écrit.",
    path: "/services/renovation/plancher",
    ogAlt: "Rénovation de plancher par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de plancher",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Rénovation de plancher",
    description:
      "Réfection de plancher par un entrepreneur général : évaluation du sous-plancher, correction des niveaux, transitions entre pièces, pose et finition, coordonnées avec le reste du chantier.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Rénovation de plancher",
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
          eyebrow: "Rénovation de plancher",
          heading: "Ce qui tient un plancher se trouve dessous",
          description:
            "Support, planéité et humidité mesurés avant la pose. Seuils et niveaux décidés au plan.",
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
          badges: ["Support vérifié", "Contrat écrit"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Rénovation de plancher résidentiel par un entrepreneur général",
          },
          imageSide: "left",
          caption: "Planchers refaits dans l'Ouest-de-l'Île",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que couvre le mandat plancher",
          columns: "2",
          items: [
            {
              title: "Arrachage et lecture",
              description: "Le support se juge à nu",
              icon: "hammer",
              bullets: [
                "Revêtements, plinthes et seuils enlevés",
                "Traces d'eau et panneaux mous repérés",
                "Taux d'humidité mesuré sur dalle ou bois",
              ],
            },
            {
              title: "Remise en état du support",
              description: "La ligne que les poseurs facturent en extra",
              icon: "ruler",
              bullets: [
                "Panneaux abîmés changés, vissage repris",
                "Nivellement selon la tolérance du produit",
                "Solives renforcées si le plancher plie",
              ],
            },
            {
              title: "Pose du revêtement",
              description: "Bois franc, ingénierie, vinyle ou céramique",
              icon: "layers",
              bullets: [
                "Bois acclimaté dans la maison avant la pose",
                "Membrane ou sous-tapis choisis selon l'étage",
                "Jeux périphériques respectés partout",
              ],
            },
            {
              title: "Seuils et raccords",
              description: "Les détails d'une pose propre",
              icon: "slidersHorizontal",
              bullets: [
                "Transitions entre pièces prévues au plan",
                "Nez de marche et raccords d'escalier",
                "Plinthes, quarts-de-rond, portes rabotées",
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
          heading: "La séquence d'un plancher",
          steps: [
            {
              number: "1",
              title: "Relevé des niveaux",
              description:
                "Surfaces, planéité, différences entre pièces et seuils actuels.",
            },
            {
              number: "2",
              title: "Arrachage",
              description:
                "Lieux protégés, anciens revêtements sortis, support mis à nu.",
            },
            {
              number: "3",
              title: "Réparation",
              description:
                "Panneaux remplacés, vissage complet, solives reprises au besoin.",
            },
            {
              number: "4",
              title: "Nivellement et séchage",
              description:
                "Ragréage appliqué, temps de séchage inscrit à l'échéancier.",
            },
            {
              number: "5",
              title: "Pose et seuils",
              description:
                "Revêtement, transitions, plinthes, portes ajustées, remise des lieux.",
            },
          ],
        },
      },
    },
    {
      id: "sequence",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Quand poser le plancher dans un chantier",
          intro:
            "L'ordre des travaux fait varier la facture autant que le produit choisi.",
          items: [
            {
              title: "Après la mécanique et la peinture",
              description: "un revêtement neuf sous un chantier ouvert se marque.",
            },
            {
              title: "Avant les armoires",
              description: "évite un décalage de hauteur si un appareil change.",
            },
            {
              title: "Niveaux arrêtés au plan",
              description: "céramique, bois et vinyle n'ont pas la même épaisseur.",
            },
            {
              title: "Sur une dalle de béton",
              description: "sous-plancher isolant ou membrane de désolidarisation.",
            },
          ],
          actions: [
            {
              label: "Voir la cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "Voir le sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Préparation du sous-plancher avant la pose d'un revêtement",
          },
          cardTitle: "Un seul calendrier",
          cardDescription:
            "Le raccord avec les armoires, la salle de bain et l'escalier relève du même contrat.",
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
              q: "Pourquoi mon plancher craque-t-il ?",
              a: "Presque toujours le support : panneaux mal fixés, vis manquantes, contreplaqué trop mince. Le revêtement ne fait que révéler le défaut. On arrache, on revisse et on change ce qui a bougé.",
            },
            {
              q: "Peut-on poser par-dessus l'ancien plancher ?",
              a: "Rarement une bonne idée. La hauteur monte, les portes frottent, les seuils se compliquent et l'état du support reste invisible. Nous recommandons l'arrachage, sauf exception notée dans la soumission.",
            },
            {
              q: "Quel revêtement pour un plancher de sous-sol ?",
              a: "On mesure d'abord l'humidité de la dalle. Le vinyle de luxe et la céramique s'en accommodent bien. Le bois franc massif posé directement sur béton est à éviter.",
            },
            {
              q: "Faut-il un permis pour refaire un plancher ?",
              a: "Pas pour changer un revêtement. Le permis devient nécessaire dès que la structure bouge : solives modifiées, ouverture d'une trémie, dalle abaissée. Nous validons avec votre ville.",
            },
            {
              q: "Pourquoi laisser le bois s'acclimater ?",
              a: "Le bois franc gonfle et rétrécit selon l'humidité ambiante. Posé trop vite, il ouvre des joints en hiver. Quelques jours dans la maison, à température normale, règlent la question.",
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
          heading: "Un plancher à refaire ?",
          intro:
            "Nous mesurons la planéité, ouvrons un coin du support, puis chiffrons la réfection.",
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
          note: "Licence RBQ 8306-0806-27 · Support, nivellement, pose et seuils",
        },
      },
    },
  ],
};
