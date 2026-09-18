import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Armoires en mélamine : avantages, durabilité et prix",
    description:
      "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure.",
    path: "/materiaux/melamine",
    ogAlt: "Mélamine - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine" },
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
          heading: "La mélamine arrive déjà finie, à coût maîtrisé",
          description:
            "Un panneau recouvert d'un décor thermofusionné. Pas d'étape de peinture, une surface facile à nettoyer, et des chants qui décident de sa durée.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          badges: ["Décor", "Entretien", "Budget"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Finis décoratifs de type mélamine",
          },
          caption: "Intérieurs de caissons et budgets cadrés",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que la mélamine apporte",
          description:
            "Le décor est fusionné au panneau en usine. Rien à peindre, rien à retoucher, et un prix nettement sous le bois.",
          cards: [
            {
              title: "Décors nombreux",
              description:
                "Unis, textures, imitations de bois, disponibles tout de suite.",
            },
            {
              title: "Entretien simple",
              description:
                "Un linge humide suffit, la surface résiste aux rayures légères.",
            },
            {
              title: "Coût contenu",
              description:
                "Le poste armoires baisse sans toucher à la structure.",
            },
            {
              title: "Les chants décident",
              description:
                "Un chant mince qui se décolle laisse entrer l'eau dans le panneau.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Où on l'utilise",
          intro:
            "Elle est pertinente à l'intérieur des caissons et sur les façades quand le budget cadre le projet.",
          items: [
            {
              title: "Intérieurs et tablettes",
              description: "Surface lavable, teinte stable dans le temps.",
            },
            {
              title: "Chants épais",
              description: "Bande PVC de 1 mm ou plus, collée serré.",
            },
            {
              title: "Réparations difficiles",
              description: "Un éclat ne se ponce pas, la pièce se remplace.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Comparer avec le MDF",
              href: "/materiaux/mdf",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Panneaux mélamine décoratifs",
          },
          cardTitle: "Approche recommandée",
          cardDescription:
            "Mélamine à l'intérieur, panneau plus stable là où l'eau et la charge arrivent.",
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
              q: "La mélamine est-elle bas de gamme ?",
              a: "Le mot couvre une catégorie très large. Ce qui change tout, c'est le substrat, l'épaisseur du décor et la qualité des chants, pas l'étiquette.",
            },
            {
              q: "La mélamine gonfle-t-elle ?",
              a: "Le panneau sous le décor, oui, si l'eau entre par un chant décollé ou une perforation. Le décor lui-même ne craint ni l'eau ni les produits courants.",
            },
            {
              q: "Mélamine ou MDF ?",
              a: "Mélamine pour un décor déjà fini et un budget cadré. MDF pour une couleur peinte précise sur les portes. Les deux se combinent dans la même cuisine.",
            },
            {
              q: "Est-ce recommandé en salle de bain ?",
              a: "Oui, avec des chants épais bien collés et un ventilateur qui fonctionne. C'est la vapeur en continu qui décolle les chants, pas les éclaboussures.",
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
          heading: "La mélamine convient-elle à votre projet ?",
          intro:
            "On regarde la pièce, l'usage et le budget, puis on vous dit oui ou non.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le comparatif",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
