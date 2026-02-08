import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Comparatif des matériaux",
  description:
    "Comparatif des matériaux pour cuisines, vanités et armoires sur mesure : MDF, mélamine, contreplaqué et bois massif.",
  path: "/materiaux/comparatif/",
  ogAlt: "Comparatif des matériaux sur mesure",
});

const faqItems = [
  { q: "MDF ou mélamine?", a: "MDF pour fini peint uniforme, mélamine pour décor/coût maîtrisé." },
  { q: "Le contreplaqué est-il toujours préférable?", a: "Pas toujours, mais il est souvent pertinent pour la structure durable." },
  { q: "Bois massif partout?", a: "Pas nécessairement. Il est souvent mieux ciblé sur les éléments visibles." },
  { q: "Peut-on combiner plusieurs matériaux?", a: "Oui, c'est souvent la meilleure stratégie." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Comparatif", url: SITE.url + "/materiaux/comparatif/" },
  ],
  hero: {
    heading: "Comparatif des matériaux : choisir selon l'usage",
    description:
      "Il n'existe pas de matériau universel. Le bon choix dépend de l'espace, de l'humidité, de la durabilité visée et de la finition recherchée.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      { text: "Voir tous les matériaux", href: "/materiaux/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "table",
      ariaLabelledby: "tableau",
      heading: "Tableau comparatif",
      description: "Résumé général à adapter à votre contexte réel.",
      columns: ["Usage recommandé", "Stabilité", "Humidité", "Finition", "Durabilité perçue"],
      rows: [
        { label: "Contreplaqué", values: ["Structures exigeantes", "Très bonne", "Bonne", "Variable", "Élevée"] },
        { label: "MDF", values: ["Portes et façades peintes", "Bonne", "Moyenne", "Très uniforme", "Moyenne"] },
        { label: "Mélamine", values: ["Rangements ciblés", "Moyenne", "Faible à moyenne", "Très variée", "Variable"] },
        { label: "Bois massif", values: ["Éléments esthétiques", "Variable", "Moyenne", "Naturelle", "Élevée"] },
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "matiere-links",
      heading: "Pages détaillées",
      links: [
        { label: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/" },
        { label: "MDF", href: "/materiaux/mdf/" },
        { label: "Mélamine", href: "/materiaux/melamine/" },
        { label: "Bois massif", href: "/materiaux/bois-massif/" },
      ],
      columns: 2,
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "espaces",
      heading: "Comparatif par espace",
      links: [
        { label: "Cuisine", href: "/espaces/cuisine/", description: "Charges et cycles d'usage élevés." },
        { label: "Salle de bain", href: "/espaces/salle-de-bain/", description: "Humidité plus exigeante, détails critiques." },
      ],
      columns: 2,
    },
    {
      type: "list",
      ariaLabelledby: "facteurs",
      heading: "Ce que le tableau ne montre pas",
      intro: "La performance réelle dépend aussi de l'exécution.",
      links: [
        { text: "Voir la quincaillerie", href: "/materiaux/quincaillerie/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
      items: ["Protection des chants.", "Qualité d'assemblage.", "Quincaillerie.", "Ajustements à l'installation."],
      variant: "bullets",
    },
    { type: "list", ariaLabelledby: "erreurs", heading: "Erreurs à éviter", items: ["Choisir pour le look seulement.", "Ignorer l'humidité.", "Sous-estimer les détails de finition."], variant: "bullets" },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - comparatif des matériaux", items: faqItems },
};
