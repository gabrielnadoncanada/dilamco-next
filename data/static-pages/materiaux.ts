import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Matériaux",
  description:
    "Matériaux et comparatifs pour cuisines, vanités et armoires sur mesure : contreplaqué, MDF, mélamine, bois massif, quincaillerie et finis.",
  path: "/materiaux/",
  ogAlt: "Matériaux Dilamco",
});

const faqItems = [
  { q: "Contreplaqué ou MDF?", a: "Le choix dépend du rôle de la pièce, de l'humidité et de la durabilité visée." },
  { q: "La mélamine est-elle un bon choix?", a: "Oui dans certains contextes, avec attention aux chants et à l'installation." },
  { q: "La quincaillerie soft-close vaut-elle la peine?", a: "Oui, si le système est fiable et bien installé." },
  { q: "Quels matériaux éviter en salle de bain?", a: "Ceux mal protégés contre l'humidité ou mal adaptés au contexte." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
  ],
  hero: {
    heading: "Matériaux, durabilité, finition et performance",
    description: "Le bon matériau dépend de l'usage réel. Nous priorisons la cohérence matériau + quincaillerie + installation.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Cuisine sur mesure", href: "/espaces/cuisine/", variant: "outline" },
      { text: "Salle de bain & vanités", href: "/espaces/salle-de-bain/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "list",
      ariaLabelledby: "methodologie",
      heading: "Comment nous choisissons les matériaux",
      intro: "La performance dépend aussi de l'assemblage, des chants et de l'installation.",
      items: ["Humidité.", "Charges d'usage.", "Résistance aux impacts.", "Stabilité dans le temps."],
      links: [
        { text: "Voir le service de design", href: "/services/design/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
      variant: "bullets",
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "pages",
      heading: "Pages matériaux",
      intro: "Explorez les compromis par matériau.",
      links: [
        { label: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/", description: "Structure stable et durable." },
        { label: "MDF", href: "/materiaux/mdf/", description: "Uniformité et finition peinte." },
        { label: "Mélamine", href: "/materiaux/melamine/", description: "Décor et coût maîtrisé." },
        { label: "Bois massif", href: "/materiaux/bois-massif/", description: "Texture naturelle et caractère." },
        { label: "Quincaillerie", href: "/materiaux/quincaillerie/", description: "Confort et longévité." },
        { label: "Couleurs et finis", href: "/materiaux/couleurs/", description: "Cohérence visuelle." },
        { label: "Comparatif des matériaux", href: "/materiaux/comparatif/", description: "Vue d'ensemble rapide." },
      ],
      columns: 3,
    },
    {
      type: "table",
      ariaLabelledby: "comparatif",
      heading: "Comparatif rapide",
      description: "Pour une lecture complète, consultez la page comparatif.",
      columns: ["Durabilité", "Humidité", "Stabilité", "Usage typique"],
      rows: [
        { label: "Contreplaqué", values: ["Élevée", "Bonne", "Très bonne", "Structures exigeantes"] },
        { label: "MDF", values: ["Moyenne", "Moyenne", "Bonne", "Portes peintes"] },
        { label: "Mélamine", values: ["Variable", "Faible à moyenne", "Moyenne", "Applications économiques"] },
      ],
    },
    {
      type: "featureGrid",
      ariaLabelledby: "espace",
      heading: "Applications par espace",
      features: [
        { title: "Cuisine", description: "Charges, cycles d'ouverture et finition." },
        { title: "Salle de bain", description: "Humidité, ventilation et protection." },
      ],
      columns: 2,
    },
    {
      type: "list",
      ariaLabelledby: "premium",
      heading: "Ce qui fait vraiment haut de gamme",
      items: ["Quincaillerie fiable.", "Structures stables.", "Installation et ajustements précis."],
      links: [
        { text: "Voir la quincaillerie", href: "/materiaux/quincaillerie/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
      variant: "bullets",
    },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ matériaux", items: faqItems },
};
