import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Rénovation clé en main",
  description:
    "Rénovation clé en main : planification, coordination des corps de métier, exécution et finition.",
  path: "/services/renovation/",
  ogAlt: "Rénovation clé en main Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation/" },
  ],
  hero: {
    heading: "Rénovation clé en main : coordination, exécution et finition",
    description: "Une approche qui clarifie les responsabilités et réduit les zones grises du chantier.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir des projets", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "list",
      ariaLabelledby: "definition",
      heading: "Qu'est-ce qu'une rénovation clé en main",
      items: ["Planification.", "Coordination des intervenants.", "Exécution et ajustements.", "Installation et finition."],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "quand",
      heading: "Quand c'est pertinent",
      items: [
        "Modifications plomberie/électricité.",
        "Travaux sur planchers, murs, ventilation.",
        "Projet avec plusieurs intervenants.",
      ],
      variant: "bullets",
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "types",
      heading: "Types de rénovations",
      links: [
        { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
        { label: "Rénovation salle de bain", href: "/services/renovation/salle-de-bain/" },
        { label: "Rénovation de plancher", href: "/services/renovation/plancher/" },
        { label: "Agrandissement de maison", href: "/services/renovation/agrandissement-de-maison/" },
      ],
      columns: 2,
    },
    {
      type: "text",
      ariaLabelledby: "responsabilite",
      heading: "Le vrai enjeu : responsabilités claires",
      paragraphs: ["Un projet fluide dépend d'un périmètre clair, d'une coordination maîtrisée et d'un responsable principal."],
      links: [
        {
          text: "Cuisiniste vs entrepreneur général",
          href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "surmesure",
      heading: "Rénovation + sur mesure",
      paragraphs: ["Le sur mesure prend sa pleine valeur quand il est aligné avec la réalité du chantier."],
      links: [
        { text: "Cuisine sur mesure", href: "/espaces/cuisine/", variant: "outline" },
        { text: "Salle de bain & vanités", href: "/espaces/salle-de-bain/", variant: "outline" },
      ],
    },
  ],
};
