import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Projets",
  description:
    "Projets sur mesure réalisés par Dilamco : cuisines, salles de bain, walk-in, salles de lavage et commercial.",
  path: "/projets/",
  ogAlt: "Projets Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ],
  hero: {
    heading: "Projets sur mesure, cuisines, salles de bain et rénovations",
    description: "Découvrez des projets réels livrés par Dilamco à Montréal, Laval et sur la Rive-Sud.",
    actions: [
      { text: "Voir les espaces", href: "/espaces/", variant: "outline" },
      { text: "Parler de votre projet", href: "/contact/" },
    ],
  },
  sections: [
    {
      type: "featureGrid",
      ariaLabelledby: "categories",
      heading: "Projets par catégorie",
      description: "Filtrez par type d'espace pour voir des configurations proches de votre besoin.",
      features: [
        { title: "Cuisines sur mesure", description: "Avec ou sans rénovation complète." },
        { title: "Salles de bain & vanités", description: "Matériaux adaptés à l'humidité et finition soignée." },
        { title: "Walk-in & rangement", description: "Optimisation de l'espace." },
        { title: "Salles de lavage", description: "Aménagements durables et fonctionnels." },
        { title: "Commercial", description: "Mobilier et rangement pour environnements pro." },
      ],
      columns: 3,
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "recent",
      heading: "Projets récents",
      links: [
        { label: "Cuisine sur mesure - Montréal", href: "/projets/cuisine/cuisine-sur-mesure-montreal/" },
        { label: "Vanité sur mesure - Laval", href: "/projets/salle-de-bain/vanite-sur-mesure-laval/" },
        { label: "Cuisine sur mesure - Rive-Sud", href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/" },
      ],
      columns: 3,
    },
    {
      type: "process",
      ariaLabelledby: "processus",
      heading: "Notre approche projet",
      description: "Une démarche cadrée pour garantir un résultat durable.",
      steps: [
        { step: "1", title: "Analyse & design", description: "Besoins et contraintes de l'espace." },
        { step: "2", title: "Fabrication", description: "Production sur mesure." },
        { step: "3", title: "Coordination", description: "Travaux connexes si requis." },
        { step: "4", title: "Installation", description: "Ajustements et inspection finale." },
      ],
    },
  ],
};
