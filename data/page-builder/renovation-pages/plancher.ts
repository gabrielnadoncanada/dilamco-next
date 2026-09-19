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
          heading: "Rénovation de plancher, de l'arrachage à la pose",
          description:
            "On vérifie le sous-plancher et l'humidité avant de poser votre nouveau revêtement.",
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
          heading: "Ce qui est inclus dans une réfection de plancher",
          columns: "2",
          items: [
            {
              title: "Arrachage de l'ancien plancher",
              icon: "hammer",
              bullets: [
                "On enlève le revêtement, les plinthes et les seuils",
                "On repère les traces d'eau et les panneaux ramollis",
                "On mesure l'humidité du béton ou du bois",
              ],
            },
            {
              title: "Réparation du sous-plancher",
              icon: "ruler",
              bullets: [
                "On change les panneaux abîmés et on revisse",
                "On nivelle selon ce que le revêtement tolère",
                "On renforce les poutres si le plancher plie",
              ],
            },
            {
              title: "Pose du revêtement",
              icon: "layers",
              bullets: [
                "On laisse le bois s'acclimater dans la maison",
                "On choisit la membrane selon l'étage et le support",
                "On laisse partout l'espace que le bois exige",
              ],
            },
            {
              title: "Seuils, plinthes et portes",
              icon: "slidersHorizontal",
              bullets: [
                "On prévoit les transitions d'une pièce à l'autre",
                "On refait les nez de marche et les raccords d'escalier",
                "On repose les plinthes et on rabote les portes",
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
          heading: "Comment on refait un plancher",
          steps: [
            {
              number: "1",
              title: "Mesures",
              description:
                "On mesure les surfaces et les différences de hauteur entre les pièces.",
            },
            {
              number: "2",
              title: "Arrachage",
              description:
                "On protège la maison et on sort l'ancien revêtement.",
            },
            {
              number: "3",
              title: "Réparation",
              description:
                "On répare le sous-plancher avant de commander le revêtement.",
            },
            {
              number: "4",
              title: "Nivellement",
              description:
                "On coule le produit de nivellement et on attend qu'il sèche.",
            },
            {
              number: "5",
              title: "Pose et seuils",
              description:
                "On pose le revêtement, les seuils et les plinthes, puis on rabote les portes.",
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
          heading: "À quel moment poser le plancher",
          intro:
            "L'ordre des travaux change la facture autant que le revêtement choisi.",
          items: [
            {
              title: "Après la plomberie et la peinture",
              description: "un plancher neuf se marque si le chantier est encore ouvert.",
            },
            {
              title: "Avant les armoires",
              description: "on évite une différence de hauteur si un électroménager change.",
            },
            {
              title: "Les hauteurs se décident au plan",
              description: "la céramique, le bois et le vinyle n'ont pas la même épaisseur.",
            },
            {
              title: "Sur une dalle de béton",
              description: "il faut d'abord un sous-plancher isolant ou une membrane.",
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
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur la rénovation de plancher",
          items: [
            {
              q: "Pourquoi mon plancher craque-t-il ?",
              a: "Presque toujours à cause du sous-plancher : panneaux mal fixés, vis manquantes, contreplaqué trop mince. On arrache le revêtement, on revisse et on remplace ce qui est ramolli.",
            },
            {
              q: "Peut-on poser par-dessus l'ancien plancher ?",
              a: "C'est rarement une bonne idée. La hauteur monte, les portes frottent, les seuils se compliquent et on ne voit pas l'état du dessous.",
            },
            {
              q: "Quel plancher choisir pour un sous-sol ?",
              a: "On mesure d'abord l'humidité du béton. Le vinyle de qualité et la céramique s'en accommodent bien. Le bois franc posé directement sur le béton est à éviter.",
            },
            {
              q: "Faut-il un permis pour refaire un plancher ?",
              a: "Pas pour changer un revêtement. Il en faut un dès que la structure bouge : poutres modifiées, ouverture pour un escalier, dalle abaissée. On vérifie avec votre ville.",
            },
            {
              q: "Pourquoi laisser le bois s'acclimater ?",
              a: "Le bois gonfle et rétrécit avec l'humidité de la maison. Posé trop vite, il ouvre des joints en hiver. Quelques jours à l'intérieur, à température normale, règlent la question.",
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
          heading: "Un plancher à refaire ? Parlons-en.",
          intro:
            "On mesure les niveaux, on ouvre un coin du sous-plancher, puis on chiffre les travaux.",
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
        },
      },
    },
  ],
};
