// Hub du blogue. Les cartes sont dérivées des articles
// (data/page-builder/blog-posts) : aucune liste à tenir à la main ici.

import type { PageTemplateData } from "@/features/page-builder";
import { getBlogCards } from "@/data/page-builder/blog-posts";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Blogue rénovation : prix, permis et conseils",
    description:
      "Prix réels, permis, licence RBQ et sinistres : les réponses d'un entrepreneur général de l'Ouest-de-l'Île avant de lancer votre rénovation.",
    path: "/blogue",
    ogAlt: "Blogue rénovation de Dilamco, entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Blogue", url: SITE.url + "/blogue" },
  ],
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "centered",
        props: {
          image: {
            src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
            alt: "Cuisine avec armoires vitrées et dosseret de céramique",
          },
          heading: "Rénover sans mauvaise surprise",
          description:
            "Prix, permis, licence et chantier : ce qu'on explique à nos clients avant de signer, écrit pour vous.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
          ],
        },
      },
    },
    {
      id: "articles",
      content: {
        type: "grid",
        variant: "image-cards-meta",
        props: {
          heading: "Tous les articles",
          items: getBlogCards("fr"),
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Une question sur votre projet ?",
          intro: "On passe chez vous, on mesure et on vous remet un prix écrit, sans frais.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
