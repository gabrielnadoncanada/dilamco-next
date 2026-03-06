import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation salle de bain",
    description:
      "Renovation de salle de bain cle en main : design, coordination, vanites sur mesure et finition durable.",
    path: "/services/renovation/salle-de-bain/",
    ogAlt: "Renovation salle de bain Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    { name: "Renovation salle de bain", url: SITE.url + "/services/renovation/salle-de-bain/" },
  ],
  service: {
    name: "Renovation salle de bain",
    description:
      "Design, coordination, vanites sur mesure et finition durable adaptes aux contraintes d'humidite.",
    url: SITE.url + "/services/renovation/salle-de-bain/",
    serviceType: "Renovation de salle de bain",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image-badges",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Renovation de salle de bain cle en main, durabilite, coordination et finition",
          description:
            "En salle de bain, la qualite finale depend autant de la coordination que des materiaux, de l'humidite et des details d'installation.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir les projets salle de bain", href: "/projets/salle-de-bain/", variant: "outline" },
          ],
          badges: ["Humidite", "Coordination", "Durabilite"],
          image: { src: "/images/spaces/vanite-salles-de-bain.webp", alt: "Renovation de salle de bain sur mesure" },
          caption: "Milieu humide, execution rigoureuse",
        },
      },
    },
    {
      id: "priorities",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Les priorites d'une renovation de salle de bain",
          intro: "Le projet doit proteger contre l'eau, integrer la plomberie et livrer une finition durable.",
          badges: ["Ventilation", "Plomberie", "Protection", "Finitions"],
          cardTitle: "Ce qu'on cherche a proteger",
          items: [
            "Reduire les risques lies a l'eau avec une planification claire.",
            "Obtenir un resultat durable en milieu humide.",
            "Eviter les zones grises entre intervenants et finitions.",
          ],
          actions: [
            { label: "Voir les materiaux", href: "/materiaux/", variant: "outline" },
            { label: "Quincaillerie", href: "/materiaux/quincaillerie/", variant: "outline" },
          ],
        },
      },
    },
    {
      id: "faq",
      frame: { divider: "bottom" },
      content: {
        type: "split",
        variant: "faq-accordion",
        props: {
          heading: "FAQ - renovation de salle de bain",
          intro: "Reponses claires sur delais, degats d'eau et portee.",
          items: [
            { q: "Combien de temps dure une renovation de salle de bain?", a: "La duree depend de la portee, des contraintes du lieu et des travaux connexes." },
            { q: "Est-ce risque au niveau des degats d'eau?", a: "Une execution rigoureuse et des choix adaptes a l'humidite reduisent fortement les risques a long terme." },
            { q: "Est-ce possible en condo?", a: "Oui. L'acces, les horaires et les contraintes de batiment sont cadres des le depart." },
            { q: "Puis-je faire une renovation partielle?", a: "Oui. Certains projets visent surtout la vanite et le rangement, d'autres sont plus complets." },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Besoin d'une renovation de salle de bain bien cadree ?",
          intro: "On vous aide a structurer le projet, la sequence et les bons choix pour un environnement humide.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir les projets salle de bain", href: "/projets/salle-de-bain/", variant: "outline" },
          ],
        },
      },
    },
  ],
};
