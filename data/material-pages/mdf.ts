import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "MDF",
  description:
    "MDF : avantages, limites et usages recommandés pour armoires, vanités et projets sur mesure. Comprendre quand il est pertinent et quand privilégier d'autres matériaux.",
  path: "/materiaux/mdf/",
  ogAlt: "MDF - Matériaux sur mesure",
});

const faqItems = [
  { q: "Le MDF est-il bas de gamme?", a: "Non. Il peut être excellent pour certaines applications, surtout les portes peintes, si l'exécution est soignée." },
  { q: "Le MDF gonfle-t-il avec l'humidité?", a: "Il peut réagir à l'eau si la protection est insuffisante, surtout aux chants." },
  { q: "MDF ou mélamine?", a: "Le MDF est souvent choisi pour la finition peinte uniforme; la mélamine pour un compromis décoratif et budgétaire." },
  { q: "Le MDF est-il adapté à la salle de bain?", a: "Selon ventilation, usage et protection. Dans certains contextes, d'autres matériaux seront préférables." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf/" },
  ],
  hero: {
    heading: "MDF, quand et pourquoi l'utiliser en sur mesure",
    description:
      "Le MDF est souvent utilisé pour obtenir une surface très uniforme, idéale pour des portes peintes. Ce n'est pas un matériau universel : le contexte d'usage et la protection des chants déterminent sa pertinence.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir le comparatif des matériaux", href: "/materiaux/comparatif/", variant: "outline" },
    ],
  },
  sections: [
    { type: "text", ariaLabelledby: "cest-quoi", heading: "C'est quoi le MDF?", paragraphs: ["Le MDF est composé de fibres compressées. Sa densité uniforme favorise les finis peints et un rendu régulier."] },
    { type: "list", ariaLabelledby: "avantages", heading: "Avantages du MDF", items: ["Surface uniforme pour peinture.", "Rendu visuel régulier.", "Bon compromis sur certaines façades."], variant: "bullets" },
    { type: "list", ariaLabelledby: "limites", heading: "Limites et précautions", items: ["Sensibilité à l'humidité si protection insuffisante.", "Chants et finitions critiques.", "Pas toujours idéal pour les zones les plus exposées."], variant: "bullets" },
    { type: "list", ariaLabelledby: "cuisine", heading: "MDF en cuisine", items: ["Pertinent pour portes peintes.", "Protection des chants indispensable.", "Structure parfois mieux servie par d'autres matériaux."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "cuisine-link", heading: "", links: [{ label: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }], columns: 2 },
    { type: "list", ariaLabelledby: "sdb", heading: "MDF en salle de bain", items: ["Possible selon le contexte.", "Ventilation et détails d'exécution déterminants.", "Alternatives parfois plus durables."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "sdb-link", heading: "", links: [{ label: "Voir Salle de bain & vanités", href: "/espaces/salle-de-bain/" }], columns: 2 },
    {
      type: "text",
      ariaLabelledby: "comparaisons",
      heading: "MDF vs mélamine vs contreplaqué",
      paragraphs: ["Le MDF vise surtout la finition, la mélamine la variété décorative/coût, et le contreplaqué la stabilité structurelle."],
      links: [
        { text: "Comparatif complet", href: "/materiaux/comparatif/", variant: "outline" },
        { text: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/", variant: "outline" },
        { text: "Mélamine", href: "/materiaux/melamine/", variant: "outline" },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "approche",
      heading: "Comment nous l'utilisons",
      paragraphs: ["Nous utilisons le MDF là où il est pertinent et combinons avec d'autres matériaux lorsque l'usage exige plus de stabilité ou de résistance."],
      links: [
        { text: "Voir tous les matériaux", href: "/materiaux/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
    },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - MDF", items: faqItems },
};
