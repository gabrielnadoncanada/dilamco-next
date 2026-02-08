import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "À propos",
  description:
    "À propos de Dilamco : cuisines, armoires et vanités sur mesure haut de gamme.",
  path: "/a-propos/",
  ogAlt: "À propos de Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos/" },
  ],
  hero: {
    heading: "À propos de Dilamco",
    description: "Nous concevons et réalisons des espaces sur mesure avec exécution soignée, du plan à l'installation.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "text",
      ariaLabelledby: "approche",
      heading: "Notre approche",
      paragraphs: ["Le sur mesure est une méthode : usage, ergonomie, contraintes et durabilité avant le style."],
    },
    {
      type: "proof",
      ariaLabelledby: "differenciation",
      heading: "Ce qui nous distingue",
      items: [
        { title: "Sur mesure réel", description: "Adapté à votre espace et non à un catalogue." },
        { title: "Durabilité", description: "Matériaux et détails choisis selon l'usage." },
        { title: "Exécution soignée", description: "Installation et ajustements précis." },
        { title: "Clé en main", description: "Coordination quand le projet l'exige." },
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "liens",
      heading: "",
      links: [
        { label: "Voir nos matériaux", href: "/materiaux/" },
        { label: "Voir nos services", href: "/services/" },
      ],
      columns: 2,
    },
    {
      type: "process",
      ariaLabelledby: "processus",
      heading: "Une démarche cadrée",
      description: "Une méthode structurée pour livrer un résultat durable.",
      steps: [
        { step: "1", title: "Analyse et design", description: "Besoins, contraintes et plan." },
        { step: "2", title: "Fabrication sur mesure", description: "Production adaptée au projet." },
        { step: "3", title: "Coordination", description: "Travaux connexes selon la portée." },
        { step: "4", title: "Installation et inspection", description: "Ajustements et finition finale." },
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "preuves",
      heading: "Voir des exemples concrets",
      links: [{ label: "Voir nos projets", href: "/projets/" }],
      columns: 2,
    },
  ],
};
