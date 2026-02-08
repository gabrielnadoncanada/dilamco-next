import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Bois massif",
  description:
    "Bois massif : avantages, limites et usages recommandés pour armoires, portes et mobilier sur mesure. Comprendre stabilité, humidité, finition et alternatives (MDF, mélamine, contreplaqué) pour faire le bon choix.",
  path: "/materiaux/bois-massif/",
  ogAlt: "Bois massif - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Le bois massif est-il toujours meilleur?",
    a: "Non. Il est excellent pour l'esthétique et certaines applications, mais des panneaux techniques peuvent être plus stables et mieux adaptés selon les contraintes.",
  },
  {
    q: "Est-ce recommandé en cuisine?",
    a: "Oui, souvent pour les portes et éléments visibles. Le choix dépend du fini, de l'entretien et de l'environnement.",
  },
  {
    q: "Comment réagit-il à l'humidité?",
    a: "Le bois peut bouger avec l'humidité. La conception, la finition et l'usage aux bons endroits limitent les effets.",
  },
  {
    q: "Peut-on combiner bois massif et autres matériaux?",
    a: "Oui. C'est souvent la meilleure approche : bois massif sur les éléments visibles, matériaux plus stables sur certaines structures.",
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Bois massif", url: SITE.url + "/materiaux/bois-massif/" },
  ],
  hero: {
    heading: "Bois massif - authenticité, caractère et limites à connaître",
    description:
      "Le bois massif est un matériau noble, apprécié pour son grain et sa profondeur visuelle. C'est aussi un matériau vivant : il réagit à l'humidité et à la température. L'important n'est pas seulement bois massif ou non, mais où et comment il est utilisé.",
    actions: [
      { text: "Parler de votre projet", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "text",
      ariaLabelledby: "definition",
      heading: "Qu'est-ce que le bois massif?",
      paragraphs: [
        "Le bois massif correspond à une pièce de bois pleine. Il se distingue du MDF, de la mélamine, du contreplaqué et du placage.",
        "Il présente des variations naturelles de veinage, de teinte et de texture, qui font partie de son caractère.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "avantages",
      heading: "Avantages du bois massif",
      items: [
        "Esthétique naturelle : rendu chaleureux et profondeur visuelle.",
        "Caractère haut de gamme : forte valeur perçue.",
        "Réparabilité : certaines marques peuvent être reprises selon le fini.",
        "Matériau recherché pour les éléments visibles.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "limites",
      heading: "Limites et contraintes",
      paragraphs: [
        "Le bois massif demande une conception et une exécution adaptées.",
        "La durabilité vient d'un système complet : matériau, finition, quincaillerie et installation.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "limites-details",
      heading: "",
      items: [
        "Mouvement selon humidité et température.",
        "Stabilité parfois inférieure à certains panneaux techniques pour de grandes surfaces.",
        "Entretien dépendant du fini.",
        "Coût généralement plus élevé.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "ou-pertinent",
      heading: "Où le bois massif est le plus pertinent",
      paragraphs: [
        "Le bois massif est souvent optimal sur les éléments visibles où le rendu et le toucher comptent.",
      ],
      links: [
        { text: "Voir le service de design", href: "/services/design/", variant: "outline" },
        { text: "Voir la fabrication", href: "/services/fabrication/", variant: "outline" },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "ou-pertinent-details",
      heading: "",
      items: [
        "Portes et façades.",
        "Détails décoratifs.",
        "Pièces sélectionnées à forte valeur visuelle.",
      ],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "ou-deconseille-details",
      heading: "Où il est souvent moins pertinent",
      items: [
        "Structures complètes de caissons.",
        "Zones très humides selon le contexte.",
        "Grandes surfaces nécessitant une stabilité maximale.",
      ],
      variant: "bullets",
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "alternatives",
      heading: "Alternatives fréquentes",
      links: [
        { label: "Contreplaqué", href: "/materiaux/contreplaque/" },
        { label: "MDF", href: "/materiaux/mdf/" },
        { label: "Mélamine", href: "/materiaux/melamine/" },
      ],
      columns: 3,
    },
    {
      type: "text",
      ariaLabelledby: "comparaisons",
      heading: "Bois massif vs autres matériaux",
      paragraphs: [
        "Le bon choix dépend de l'espace, de l'entretien attendu et du rendu final.",
      ],
      links: [
        { text: "Voir le comparatif des matériaux", href: "/materiaux/comparatif/", variant: "outline" },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "finition-details",
      heading: "Finition et entretien",
      items: [
        "Protection adaptée à l'usage.",
        "Entretien simple et cohérent avec le fini.",
        "Prévenir l'eau stagnante et les nettoyants agressifs.",
      ],
      variant: "bullets",
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "projets",
      heading: "Projets",
      links: [{ label: "Voir les projets", href: "/projets/" }],
      columns: 2,
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - bois massif",
    items: faqItems,
  },
};
