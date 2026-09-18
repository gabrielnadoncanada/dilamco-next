import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom kitchen & cabinetry projects",
    description:
      "Custom projects: kitchens, vanities, walk-ins, laundry rooms and commercial work, delivered by Dilamco, a licensed general contractor (RBQ).",
    path: "/projets",
    ogAlt: "Dilamco projects",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Projects", url: SITE.url + "/projets" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Projects",
          heading: "Kitchens, vanities, storage and commercial",
          description:
            "Real projects delivered across Greater Montréal by an RBQ-licensed general contractor.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
          ],
          badges: ["Real cases", "Montréal", "Laval", "South Shore"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Dilamco custom project",
          },
          caption: "High-end kitchen · Laval",
        },
      },
    },

    {
      id: "categories",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider-lightbox",
        props: {
          heading: "Explore the projects",
          intro: "Pick the area closest to your own project.",
          items: [
            {
              title: "Kitchens",
              href: "/projets/cuisine",
              description: "Optimized storage and precise finish.",
              footerCtaLabel: "View kitchens",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Custom kitchen projects",
              },
            },
            {
              title: "Bathrooms & vanities",
              href: "/projets/salle-de-bain",
              description: "Durable vanities, built for humidity.",
              footerCtaLabel: "View bathrooms",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Custom bathroom vanity projects",
              },
            },
            {
              title: "Walk-in closets & storage",
              href: "/projets/walk-in",
              description: "Custom storage, optimized and functional.",
              footerCtaLabel: "View walk-ins",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Custom walk-in closet and storage projects",
              },
            },
            {
              title: "Laundry rooms",
              href: "/projets/salle-de-lavage",
              description: "Organized, durable laundry rooms.",
              footerCtaLabel: "View laundry rooms",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Custom laundry room projects",
              },
            },
            {
              title: "Commercial",
              href: "/projets/commercial",
              description: "Offices and retail delivered ready to occupy.",
              footerCtaLabel: "View commercial",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Custom commercial projects",
              },
            },
          ],
        },
      },
    },

    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "From design to installation",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description: "Needs, site constraints and the real scope of the project.",
            },
            {
              number: "2",
              title: "Design",
              description: "Layout, finishes and drawings approved before production.",
            },
            {
              number: "3",
              title: "Production",
              description: "Ordered from our partner factory, to the dimensions measured on site.",
            },
            {
              number: "4",
              title: "Installation",
              description: "Setting and adjustments coordinated with the rest of the job.",
            },
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
          heading: "Have a similar project?",
          intro: "Free estimate. Reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our spaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          note: "Residential and commercial · Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
