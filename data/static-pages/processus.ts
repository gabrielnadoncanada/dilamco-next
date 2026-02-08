import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { DEFAULT_CTA, SPACE_SLIDER_ITEMS } from "@/data/shared-content";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Processus",
  description:
    "Processus Dilamco : design, fabrication, installation et, selon le projet, rénovation clé en main.",
  path: "/processus/",
  ogAlt: "Processus Dilamco",
});

const faqItems = [
  { q: "Tous les projets suivent-ils les mêmes étapes?", a: "La structure est similaire, la portée varie selon le projet." },
  { q: "Quand démarre la fabrication?", a: "Quand le plan et les décisions essentielles sont validés." },
  { q: "Faites-vous l'installation?", a: "Oui, avec ajustements et inspection finale." },
  { q: "Le processus convient-il aux condos?", a: "Oui, avec adaptation à la logistique du bâtiment." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus/" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Processus Dilamco",
      description:
        "Processus structuré pour projets sur mesure : design, fabrication, installation et rénovation clé en main selon la portée.",
      url: SITE.url + "/processus/",
      serviceType: "Processus de projet sur mesure",
      areaServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
    }),
  ],
  hero: {
    heading: "Notre processus, du plan à la finition",
    description: "Une méthode cadrée pour réduire les imprévus et protéger la qualité finale.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir des projets", href: "/projets/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "list",
      ariaLabelledby: "pourquoi",
      heading: "Pourquoi un processus clair",
      intro: "Une méthode claire réduit les zones grises et améliore la prévisibilité du chantier.",
      items: [
        "Moins d'imprévus.",
        "Responsabilités claires.",
        "Qualité mieux contrôlée.",
        "Expérience client plus simple.",
      ],
      variant: "bullets",
    },
    {
      type: "process",
      ariaLabelledby: "etapes",
      heading: "Les étapes du processus Dilamco",
      steps: [
        { step: "1", title: "Cadrage", description: "Portée, contraintes et échéance." },
        { step: "2", title: "Design", description: "Plan fonctionnel validé." },
        { step: "3", title: "Matériaux & finis", description: "Choix selon usage et durabilité." },
        { step: "4", title: "Coordination", description: "Séquence des travaux connexes si requis." },
        { step: "5", title: "Fabrication", description: "Production sur mesure après validation." },
        { step: "6", title: "Installation", description: "Ajustements et finition." },
        { step: "7", title: "Inspection", description: "Validation finale." },
      ],
    },
    {
      type: "relatedLinks",
      ariaLabelledby: "ressources",
      heading: "Ressources pour approfondir",
      links: [
        { label: "Service Design", href: "/services/design/" },
        { label: "Guide : choisir une cuisine", href: "/guides/comment-choisir-cuisine-sur-mesure/" },
        { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
        { label: "Quincaillerie", href: "/materiaux/quincaillerie/" },
        { label: "Couleurs & finis", href: "/materiaux/couleurs/" },
        { label: "Rénovation clé en main", href: "/services/renovation/" },
      ],
      columns: 3,
    },
    {
      type: "proof",
      ariaLabelledby: "livrables",
      heading: "Ce que vous recevez",
      items: [
        { title: "Plan clair", description: "Priorités et décisions structurantes." },
        { title: "Choix cohérents", description: "Matériaux et quincaillerie adaptés." },
        { title: "Exécution maîtrisée", description: "Fabrication et installation avec ajustements." },
        { title: "Finition propre", description: "Inspection et détails visibles soignés." },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "infos",
      heading: "Ce qu'on vous demande pour avancer vite",
      items: ["Secteur", "Type d'espace", "Portée", "Priorités", "Échéance"],
      variant: "bullets",
    },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - processus", items: faqItems },
  footerSections: [
    {
      type: "relatedLinks",
      ariaLabelledby: "liens",
      heading: "Liens utiles",
      links: [
        { label: "Espaces", href: "/espaces/" },
        { label: "Services", href: "/services/" },
        { label: "Projets", href: "/projets/" },
        { label: "Matériaux", href: "/materiaux/" },
        { label: "Contact", href: "/contact/" },
      ],
      columns: 3,
    },
  ],
  cta: DEFAULT_CTA,
};
