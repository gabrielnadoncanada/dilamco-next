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
          heading: "Choisir une couleur qui tient à l'usage",
          description:
            "La teinte se décide chez vous, dans la lumière réelle de la pièce. Le lustre, lui, décide de l'entretien.",
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
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Les finis en fiche",
          intro: "Six repères pour arrêter une palette sans mauvaise surprise.",
          rows: [
            {
              label: "Support",
              value: "Le même ton rend autrement sur MDF, mélamine ou bois",
            },
            {
              label: "Lustre",
              value: "Mat, satiné, lustré, du plus feutré au plus réfléchissant",
            },
            {
              label: "Entretien",
              value: "Le satiné demande le moins de nettoyage en cuisine",
            },
            {
              label: "Usages recommandés",
              value: "Neutres sur les grandes surfaces, couleur sur l'îlot",
            },
            {
              label: "Prix relatif",
              value: "Peinture sur mesure au-dessus d'un décor de série",
            },
            {
              label: "Validation",
              value: "Échantillon posé dans la pièce, vu matin et soir",
            },
          ],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Échantillons de couleurs et de niveaux de lustre",
          },
          note: "Un écran ajoute du bleu et efface le lustre : on ne valide jamais dessus.",
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
          heading: "Besoin d'arrêter la palette ?",
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
