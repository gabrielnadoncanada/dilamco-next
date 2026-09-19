import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Couleurs et finis d'armoires sur mesure",
    description:
      "Couleurs et finis pour cuisines, vanités et armoires sur mesure : choisir selon la lumière, l'usage et les matériaux.",
    path: "/materiaux/couleurs",
    ogAlt: "Couleurs et finis - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs" },
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
          heading: "Comment choisir la couleur de vos armoires",
          description:
            "On décide la couleur chez vous, dans la vraie lumière de la pièce.",
          actions: [
            {
              label: "Parler design et finitions",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
          badges: ["Lumière", "Lustre", "Entretien"],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Armoires colorées vues dans la lumière d'une pièce",
          },
          caption: "Échantillons vus dans votre pièce",
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Ce qu'il faut savoir sur les finis",
          intro: "Six repères pour arrêter vos couleurs sans mauvaise surprise.",
          rows: [
            {
              label: "Le matériau change la couleur",
              value:
                "La même teinte ne rend pas pareil sur du MDF, de la mélamine ou du bois.",
            },
            {
              label: "Mat, satiné ou lustré",
              value:
                "Le mat absorbe la lumière, le lustré la renvoie, le satiné est entre les deux.",
            },
            {
              label: "Entretien",
              value:
                "En cuisine, le satiné est celui qui se nettoie le plus facilement.",
            },
            {
              label: "Usage recommandé",
              value:
                "Des tons neutres sur les grands murs d'armoires, la couleur sur l'îlot.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "Une peinture sur mesure coûte plus cher qu'une couleur déjà offerte.",
            },
            {
              label: "Comment valider",
              value:
                "On laisse un échantillon dans la pièce et vous le regardez le matin et le soir.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Échantillons de couleurs et de niveaux de lustre",
          },
          note: "Ne choisissez jamais une couleur sur un écran, elle ne sera pas fidèle.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions sur les couleurs et les finis",
          items: [
            {
              q: "Le blanc va-t-il jaunir ?",
              a: "Les peintures acryliques actuelles tiennent. Ce qui jaunit, c'est un vernis huilé posé sur du blanc, ou une hotte qui aspire mal la graisse de cuisson.",
            },
            {
              q: "Deux teintes dans la même cuisine ?",
              a: "Oui, si la séparation suit un volume entier. Armoires hautes claires, bas et îlot plus foncés : c'est la répartition qui fonctionne le plus souvent.",
            },
            {
              q: "Peut-on assortir une couleur existante ?",
              a: "Oui, à partir d'une porte que vous nous confiez. Le relevé se fait au colorimètre, puis on valide l'écart sur un échantillon peint.",
            },
            {
              q: "Comment éviter un rendu daté ?",
              a: "Teintes neutres sur les grandes surfaces, couleur forte sur ce qui se change vite : îlot, dosseret, poignées. La pièce se rafraîchit sans refaire les armoires.",
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
          heading: "Arrêter les couleurs de votre cuisine",
          intro:
            "On apporte les échantillons chez vous et on les regarde dans votre éclairage.",
          actions: [
            {
              label: "Parler design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
