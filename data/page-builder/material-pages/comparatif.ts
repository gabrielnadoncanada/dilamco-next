import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Comparatif des matériaux d'armoires : mélamine, MDF, bois",
    description:
      "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif.",
    path: "/materiaux/comparatif",
    ogAlt: "Comparatif des matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Matériaux",
          heading: "Quel panneau pour quelle partie de l'armoire",
          description:
            "Aucun matériau ne gagne partout. Une bonne cuisine en combine trois ou quatre, chacun à l'endroit où il tient le mieux.",
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Humidité", "Finition"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Comparatif de matériaux pour cuisine sur mesure",
          },
          caption: "Quatre panneaux, quatre rôles",
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Tableau comparatif",
          columns: ["Point fort", "Où l'utiliser"],
          rows: [
            {
              label: "Contreplaqué",
              values: ["Stabilité et tenue des vis", "Caissons, tiroirs, tablettes"],
            },
            {
              label: "MDF",
              values: ["Surface sans fil", "Portes et façades peintes"],
            },
            {
              label: "Mélamine",
              values: ["Déjà fini, coût bas", "Intérieurs, tablettes, budgets cadrés"],
            },
            {
              label: "Bois massif",
              values: ["Grain et valeur perçue", "Portes, moulures, détails vus"],
            },
            {
              label: "Quincaillerie",
              values: ["Confort et longévité", "Charnières, coulisses, mécanismes"],
            },
          ],
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que le tableau ne dit pas",
          description:
            "Deux cuisines du même panneau peuvent vieillir très différemment. L'écart vient de quatre détails d'exécution.",
          cards: [
            {
              title: "Les chants",
              description:
                "Un chant ouvert laisse entrer l'eau, quel que soit le panneau.",
            },
            {
              title: "L'assemblage",
              description:
                "Tourillons, vis et colle décident de la tenue du caisson.",
            },
            {
              title: "La quincaillerie",
              description:
                "Charnières et coulisses supportent l'usage quotidien, pas le panneau.",
            },
            {
              title: "La pose",
              description:
                "Mise à niveau et ajustements finaux évitent les portes qui frottent.",
            },
          ],
          columns: "2",
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
              q: "MDF ou mélamine ?",
              a: "Le MDF quand vous voulez une couleur peinte précise sur les portes. La mélamine quand vous voulez un décor déjà fini, sans peinture, à coût plus bas.",
            },
            {
              q: "Le contreplaqué est-il toujours préférable ?",
              a: "Pour les caissons et les tiroirs, oui, parce qu'il tient les vis. Sur une porte peinte, le MDF donne une surface plus régulière.",
            },
            {
              q: "Du bois massif partout ?",
              a: "Non. Il bouge avec l'humidité. Sur les grandes surfaces planes et les caissons, les panneaux tiennent mieux la ligne dans le temps.",
            },
            {
              q: "Peut-on combiner plusieurs matériaux ?",
              a: "C'est la norme. Contreplaqué de bouleau pour les caissons, MDF pour les portes peintes, bois massif sur les détails vus, mélamine à l'intérieur.",
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
          heading: "Un comparatif pour votre projet ?",
          intro:
            "On arbitre structure, finition, humidité et budget après le relevé sur place.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
