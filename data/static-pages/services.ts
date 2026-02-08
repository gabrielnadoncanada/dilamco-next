import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Services Dilamco : design, fabrication sur mesure, installation et rénovation clé en main.",
  path: "/services/",
  ogAlt: "Services Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
  ],
  hero: {
    heading: "Services : design, fabrication, installation et rénovation clé en main",
    description: "Selon le projet, nous prenons en charge l'ensemble du plan à la finition.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "featureGrid",
      ariaLabelledby: "piliers",
      heading: "Nos services principaux",
      description: "Choisissez le service qui correspond à votre étape.",
      features: [
        { title: "Design", description: "Cadrage du plan, ergonomie et choix de matériaux." },
        { title: "Fabrication", description: "Production sur mesure orientée durabilité." },
        { title: "Installation", description: "Ajustements et finition sur place." },
        { title: "Rénovation clé en main", description: "Coordination des travaux connexes." },
      ],
      columns: 2,
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "renovation-types",
      heading: "Rénovation par type",
      links: [
        { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
        { label: "Rénovation salle de bain", href: "/services/renovation/salle-de-bain/" },
        { label: "Rénovation de plancher", href: "/services/renovation/plancher/" },
        { label: "Agrandissement de maison", href: "/services/renovation/agrandissement-de-maison/" },
      ],
      columns: 2,
    },
    {
      type: "list",
      ariaLabelledby: "cle-en-main",
      heading: "Quand choisir une approche clé en main",
      items: [
        "Rénovation complète de cuisine.",
        "Salle de bain avec contraintes techniques.",
        "Projet multi-intervenants.",
      ],
      links: [
        { text: "Voir la rénovation clé en main", href: "/services/renovation/", variant: "outline" },
        { text: "Parler de votre projet", href: "/contact/", variant: "outline" },
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "qualite",
      heading: "Qualité et durabilité",
      paragraphs: ["Le haut de gamme repose sur un système cohérent : matériaux, assemblage, quincaillerie et installation."],
      links: [
        { text: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/", variant: "outline" },
        { text: "Quincaillerie", href: "/materiaux/quincaillerie/", variant: "outline" },
        { text: "Voir tous les matériaux", href: "/materiaux/", variant: "outline" },
      ],
    },
  ],
};
