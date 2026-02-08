import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { ArrowRight, Ruler, Shield, Wrench } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { SPACE_SLIDER_ITEMS } from "@/data/shared-content";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cuisines, vanités et armoires sur mesure clé en main à Montréal",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme.",
  path: "/",
  ogAlt: "Dilamco, sur mesure, durable, bien exécuté",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [{ name: "Accueil", url: SITE.url + "/" }],
  hero: {
    heading: "Dilamco, sur mesure haut de gamme, clé en main",
    description:
      "Cuisines, vanités et rangement sur mesure. Design, fabrication, installation et rénovation complète au besoin.",
    image: {
      src: "/images/hero-image.webp",
      alt: "Dilamco, sur mesure haut de gamme, clé en main",
    },
    actions: [
      { text: "Obtenir une soumission gratuite", href: "/contact" },
      { text: "Voir nos réalisations", href: "/projets", variant: "outline", icon: ArrowRight },
    ],
  },
  sections: [
    {
      type: "featureGrid",
      ariaLabelledby: "hero",
      heading: "Cuisines, salles de bain et espaces sur mesure, sans casse-tête",
      description: "Accompagnement du plan à la finition avec coordination lorsque requis.",
      features: [
        { title: "Sur mesure réel", description: "Adapté à votre espace.", icon: Ruler },
        { title: "Qualité et durabilité", description: "Décisions techniques pensées pour durer.", icon: Shield },
        { title: "Approche clé en main", description: "Un seul responsable pour réduire les imprévus.", icon: Wrench },
      ],
      columns: 3,
    },
    {
      type: "slider",
      ariaLabelledby: "espaces",
      heading: "Choisissez votre espace",
      description: "Découvrez nos solutions sur mesure pour chaque espace.",
      items: SPACE_SLIDER_ITEMS,
    },
    {
      type: "proof",
      ariaLabelledby: "differenciation",
      heading: "Ce qui distingue Dilamco",
      description: "Le haut de gamme est une somme de décisions et d'exécution.",
      items: [
        { title: "Design orienté usage", description: "Ergonomie, rangement et circulation." },
        { title: "Fabrication robuste", description: "Matériaux adaptés à la réalité du chantier." },
        { title: "Installation soignée", description: "Alignements et ajustements précis." },
      ],
    },
    {
      type: "process",
      ariaLabelledby: "processus",
      heading: "Une approche simple, une exécution cadrée",
      description: "Une approche simple, une exécution cadrée",
      layout: "timeline",
      steps: [
        { step: "1", title: "Analyse & design", description: "Besoins, contraintes et plan." },
        { step: "2", title: "Fabrication", description: "Production sur mesure." },
        { step: "3", title: "Coordination", description: "Travaux connexes si applicable." },
        { step: "4", title: "Installation", description: "Ajustements et inspection finale." },
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "preuves",
      heading: "Projets récents",
      links: [
        { label: "Voir les projets de cuisines", href: "/projets/cuisine/" },
        { label: "Voir les projets de salles de bain", href: "/projets/salle-de-bain/" },
        { label: "Voir tous les projets", href: "/projets/" },
      ],
      columns: 3,
    },
  ],
};
