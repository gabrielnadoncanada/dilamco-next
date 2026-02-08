import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Guides",
  description:
    "Guides et conseils pour projets de cuisines, vanités et rénovations sur mesure.",
  path: "/guides/",
  ogAlt: "Guides Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
  ],
  hero: {
    heading: "Guides et conseils - cuisines et rénovations sur mesure",
    description:
      "Ces guides vous aident à clarifier vos décisions avant une soumission : matériaux, délais, séquence et exécution.",
    actions: [{ text: "Parler de votre projet", href: "/contact/" }],
  },
  sections: [
    {
      type: "list",
      ariaLabelledby: "categories",
      heading: "Catégories de guides",
      items: [
        "Choisir son espace",
        "Rénovation et planification",
        "Matériaux et durabilité",
        "Comparatifs décisionnels",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "liste-guides",
      heading: "Guides disponibles",
      paragraphs: ["Chaque guide répond à une question précise et renvoie aux pages liées pour approfondir."],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "guides-list",
      heading: "",
      links: [
        { label: "Comment choisir une cuisine sur mesure", href: "/guides/comment-choisir-cuisine-sur-mesure/" },
        { label: "Étapes d'une rénovation de cuisine", href: "/guides/etapes-renovation-cuisine/" },
        { label: "Erreurs fréquentes en rénovation de cuisine", href: "/guides/erreurs-renovation-cuisine/" },
      ],
      columns: 3,
    },
    {
      type: "text",
      ariaLabelledby: "utilisation",
      heading: "Comment utiliser ces guides",
      paragraphs: ["Utilisez-les pour structurer vos priorités, puis passez à la soumission quand le cadre est clair."],
      links: [{ text: "Demander une soumission", href: "/contact/", variant: "outline" }],
    },
    {
      type: "text",
      ariaLabelledby: "positionnement",
      heading: "Notre positionnement",
      paragraphs: ["Dilamco se concentre sur des projets sur mesure durables, avec exécution soignée et option clé en main."],
    },
  ],
};
