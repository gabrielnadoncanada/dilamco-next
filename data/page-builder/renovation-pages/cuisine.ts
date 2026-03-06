import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation de cuisine",
    description:
      "Renovation de cuisine cle en main : design, coordination, fabrication et installation d'armoires sur mesure.",
    path: "/services/renovation/cuisine/",
    ogAlt: "Renovation de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    { name: "Renovation de cuisine", url: SITE.url + "/services/renovation/cuisine/" },
  ],
  service: {
    name: "Renovation de cuisine",
    description:
      "Design, coordination, fabrication et installation d'armoires sur mesure dans une approche cle en main.",
    url: SITE.url + "/services/renovation/cuisine/",
    serviceType: "Renovation de cuisine",
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
            "Renovation de cuisine cle en main, un seul partenaire du plan a la finition",
          description:
            "Une renovation de cuisine reussie depend autant de la coordination que du resultat final. L'objectif est de reduire les imprevus et livrer un resultat coherent.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir les projets cuisine", href: "/projets/cuisine/", variant: "outline" },
          ],
          badges: ["Cuisine", "Cle en main", "Coordination"],
          image: { src: "/images/hero/kitchen-hero.webp", alt: "Renovation de cuisine sur mesure" },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Ce qui est inclus selon le projet",
          intro: "La portee exacte est confirmee lors de la soumission, mais la sequence reste claire.",
          steps: [
            { number: "1", title: "Design", description: "Organisation de l'espace, ergonomie et decisions cles." },
            { number: "2", title: "Fabrication", description: "Armoires, ilot et rangement sur mesure." },
            { number: "3", title: "Installation", description: "Alignements, ajustements et finition soignee." },
            { number: "4", title: "Coordination", description: "Travaux connexes sequences proprement au besoin." },
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
          heading: "FAQ - renovation de cuisine",
          intro: "Reponses claires sur delais, condo et portee.",
          items: [
            { q: "Combien de temps dure une renovation de cuisine?", a: "La duree varie selon la portee, les contraintes du lieu et la coordination requise." },
            { q: "Est-ce possible en condo?", a: "Oui. L'acces, les horaires et certaines contraintes techniques doivent etre cadres tot." },
            { q: "Dois-je quitter le logement pendant les travaux?", a: "Cela depend de la portee. Pour une renovation complete, certaines periodes peuvent etre moins confortables." },
            { q: "Puis-je faire une renovation partielle?", a: "Oui. Certains projets visent surtout l'armoire, l'ilot et l'installation, d'autres incluent plus de travaux." },
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
          heading: "Vous voulez cadrer une renovation de cuisine correctement ?",
          intro: "On vous aide a definir la bonne sequence et le bon niveau de coordination.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir les projets cuisine", href: "/projets/cuisine/", variant: "outline" },
          ],
        },
      },
    },
  ],
};
