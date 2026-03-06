import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation de plancher",
    description:
      "Renovation de plancher : planification, coordination et finition soignee dans un projet plus large.",
    path: "/services/renovation/plancher/",
    ogAlt: "Renovation de plancher Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    { name: "Renovation de plancher", url: SITE.url + "/services/renovation/plancher/" },
  ],
  service: {
    name: "Renovation de plancher",
    description:
      "Planification, coordination et finition soignee quand le plancher s'integre a une renovation plus large.",
    url: SITE.url + "/services/renovation/plancher/",
    serviceType: "Renovation de plancher",
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
          heading: "Renovation de plancher, coordination, niveaux et finition",
          description:
            "Le plancher influence les niveaux, les transitions et la qualite percue. Il doit etre planifie dans la sequence globale du chantier.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir la renovation cle en main", href: "/services/renovation/", variant: "outline" },
          ],
          badges: ["Transitions", "Niveaux", "Sequence"],
          image: { src: "/images/spaces/commercial.webp", alt: "Renovation de plancher" },
          caption: "Le plancher n'est jamais isole dans une renovation",
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
          heading: "FAQ - renovation de plancher",
          intro: "Reponses claires sur sequence, condo et integration au reste du chantier.",
          items: [
            { q: "Est-ce que je peux refaire uniquement le plancher?", a: "Oui, mais des qu'il y a des armoires ou une renovation plus large, la coordination devient determinante." },
            { q: "Dans quel ordre faut-il faire les travaux?", a: "L'ordre depend de la portee, mais l'objectif reste d'eviter les reprises et proteger le resultat final." },
            { q: "Est-ce possible en condo?", a: "Oui. Les contraintes d'acces, d'horaires et parfois d'acoustique doivent etre cadres au debut." },
            { q: "Est-ce que le plancher influence l'installation des armoires?", a: "Oui. Les niveaux et la planeite influencent directement l'alignement, les joints et les transitions." },
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
          heading: "Besoin d'integrer le plancher dans une renovation plus large ?",
          intro: "On vous aide a cadrer la bonne sequence et les bons raccords pour proteger le resultat final.",
          actions: [
            { label: "Demander une soumission", href: "/contact/", variant: "default" },
            { label: "Voir la renovation cle en main", href: "/services/renovation/", variant: "outline" },
          ],
        },
      },
    },
  ],
};
