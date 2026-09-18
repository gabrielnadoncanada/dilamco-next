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
          heading: "Un plancher qui tient commence sous le revêtement",
          description:
            "Sous-plancher, planéité et humidité vérifiés avant la pose. Seuils et transitions réglés au plan.",
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
          badges: ["Sous-plancher vérifié", "Contrat écrit"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Rénovation de plancher résidentiel par un entrepreneur général",
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
          heading: "Ce que comprend le mandat",
          columns: "2",
          items: [
            {
              title: "Arrachage et diagnostic",
              description: "On voit le support avant de chiffrer la pose.",
              icon: "hammer",
              bullets: [
                "Retrait des revêtements, plinthes et seuils",
                "Inspection du sous-plancher et des traces d'eau",
                "Test d'humidité sur dalle ou sur bois",
              ],
            },
            {
              title: "Correction de la base",
              description: "L'étape que la plupart des poseurs facturent en extra.",
              icon: "ruler",
              bullets: [
                "Panneaux abîmés remplacés, revissage complet",
                "Nivellement selon la tolérance du revêtement",
                "Renforcement des solives si affaissement",
              ],
            },
            {
              title: "Pose du revêtement",
              description: "Bois franc, ingénierie, vinyle ou céramique.",
              icon: "layers",
              bullets: [
                "Acclimatation du bois avant la pose",
                "Membrane ou sous-tapis selon l'étage",
                "Jeux périphériques respectés",
              ],
            },
            {
              title: "Seuils et finition",
              description: "Les détails qui distinguent une pose propre.",
              icon: "slidersHorizontal",
              bullets: [
                "Transitions entre pièces planifiées d'avance",
                "Raccords d'escalier et nez de marche",
                "Plinthes, quarts-de-rond, portes ajustées",
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
          heading: "Cinq étapes",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "Surfaces, planéité, niveaux entre pièces et seuils existants.",
            },
            {
              number: "2",
              title: "Soumission",
              description:
                "Portée et exclusions écrites. Réponse sous 24 à 48 heures ouvrables.",
            },
            {
              number: "3",
              title: "Arrachage",
              description:
                "Protection des lieux, retrait des anciens revêtements, inspection du support.",
            },
            {
              number: "4",
              title: "Préparation du support",
              description:
                "Réparations, revissage, ajout de sous-plancher, nivellement et séchage.",
            },
            {
              number: "5",
              title: "Pose et livraison",
              description:
                "Revêtement, seuils, plinthes, portes ajustées, inspection finale avec vous.",
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
          heading: "Où le plancher se place dans le chantier",
          intro:
            "L'ordre des travaux décide du coût réel. Voici les règles que nous appliquons.",
          items: [
            {
              title: "Après la mécanique et la peinture",
              description:
                "Un plancher neuf sous un chantier ouvert se fait marquer.",
            },
            {
              title: "Avant les armoires",
              description:
                "Évite les décalages de hauteur si un électroménager change.",
            },
            {
              title: "Niveaux décidés au plan",
              description:
                "Céramique, bois et vinyle n'ont pas la même épaisseur.",
            },
            {
              title: "Sous-sol sur dalle",
              description:
                "Sous-plancher isolant ou membrane de désolidarisation avant le revêtement.",
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
          cardTitle: "Un seul responsable",
          cardDescription:
            "Nous répondons du calendrier, de la protection des lieux et du raccord avec les armoires, la salle de bain et l'escalier.",
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
              q: "Peut-on poser par-dessus l'ancien plancher ?",
              a: "Rarement une bonne idée : la hauteur augmente, les portes se recoupent, les seuils se compliquent et l'état du sous-plancher reste invisible. Nous recommandons l'arrachage, sauf cas particulier documenté dans la soumission.",
            },
            {
              q: "Pourquoi mon plancher craque-t-il ?",
              a: "Presque toujours à cause du sous-plancher : panneaux mal fixés, vis manquantes, contreplaqué trop mince. Le revêtement n'est qu'un symptôme. On arrache, on revisse et on remplace ce qui est abîmé.",
            },
            {
              q: "Faut-il un permis ?",
              a: "Pas pour remplacer un revêtement. Un permis devient nécessaire dès que les travaux touchent la structure : solives modifiées, trémie ouverte, dalle abaissée. Nous validons avec votre ville avant de commencer.",
            },
            {
              q: "Quel revêtement pour un sous-sol ?",
              a: "Sur une dalle de béton, on mesure d'abord l'humidité. Le vinyle de luxe et la céramique tolèrent bien l'environnement. Le bois franc massif est déconseillé directement sur dalle.",
            },
            {
              q: "Combien coûte une réfection de plancher ?",
              a: "Trois postes : arrachage, remise en état du support et pose. Le support est la ligne la plus variable d'une maison à l'autre. Le prix ferme est fixé après le relevé.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Cela dépend de la surface et de l'état du support. Le nivellement et l'acclimatation du bois ajoutent des jours de séchage, inscrits à l'échéancier du contrat.",
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
            "Nous vérifions la planéité et le sous-plancher, puis nous chiffrons sous 24 à 48 heures ouvrables.",
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
