// Blog hub (EN). Cards are derived from the posts in
// data/page-builder/blog-posts: no list to maintain by hand here.

import type { PageTemplateData } from "@/features/page-builder";
import { getBlogCards } from "@/data/page-builder/blog-posts";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Renovation blog: costs, permits and advice",
    description:
      "Real costs, permits, RBQ licences and disaster repairs: answers from a West Island general contractor before you start your renovation.",
    path: "/blogue",
    ogAlt: "Dilamco renovation blog, general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Blog", url: SITE.url + "/blogue" },
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
            alt: "Kitchen with glass-front cabinets and ceramic backsplash",
          },
          heading: "Renovate without bad surprises",
          description:
            "Costs, permits, licences and the job site: what we explain to clients before they sign, written for you.",
          actions: [
            {
              label: "Free estimate",
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
          heading: "All articles",
          items: getBlogCards("en"),
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "A question about your project?",
          intro: "We visit, measure and give you a written price, free of charge.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
