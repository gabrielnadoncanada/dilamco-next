import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom kitchen & cabinetry projects",
    description:
      "Explore our custom projects: kitchens, vanities, walk-in closets, laundry rooms and commercial work.",
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
          eyebrow: "Dilamco - Projects",
          heading:
            "Custom projects: kitchens, vanities, storage and commercial",
          description:
            "This page is here to show real cases, not an empty gallery. You'll find projects that help you judge the level of execution, the kind of constraints handled and the finish quality you can expect.",
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
          caption:
            "Projects that help you picture the result and check the quality of execution",
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
          intro:
            "Pick the project area closest to your situation to see more relevant references.",
          items: [
            {
              title: "Kitchens",
              href: "/projets/cuisine",
              description:
                "Custom kitchens: optimized storage and precise finish.",
              footerCtaLabel: "View kitchen projects",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Custom kitchen projects",
              },
            },
            {
              title: "Bathrooms & vanities",
              href: "/projets/salle-de-bain",
              description:
                "Durable custom vanities, designed for humidity.",
              footerCtaLabel: "View bathroom projects",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Custom bathroom vanity projects",
              },
            },
            {
              title: "Walk-in closets & storage",
              href: "/projets/walk-in",
              description: "Custom storage, optimized and functional.",
              footerCtaLabel: "View walk-in projects",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Custom walk-in closet and storage projects",
              },
            },
            {
              title: "Laundry rooms",
              href: "/projets/salle-de-lavage",
              description: "Organized, durable laundry rooms.",
              footerCtaLabel: "View laundry room projects",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Custom laundry room projects",
              },
            },
            {
              title: "Commercial",
              href: "/projets/commercial",
              description:
                "Commercial fit-outs built for heavy use.",
              footerCtaLabel: "View commercial projects",
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
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "The project logic behind the final result",
          description:
            "Good projects rarely come from luck. They come from a method that clarifies decisions up front and protects execution all the way to installation.",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description:
                "Understand the needs, the site constraints and the real scope of the project.",
            },
            {
              number: "2",
              title: "Design and validations",
              description:
                "Structure the layout, confirm the choices and close the decisions that affect fabrication.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Produce on a stable base with material and technical choices already aligned.",
            },
            {
              number: "4",
              title: "Installation and finish",
              description:
                "Adjust, align and deliver a clean, consistent and durable result.",
            },
          ],
          actions: [
            {
              label: "See the process",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "View services",
              href: "/services",
              variant: "ghost",
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
          intro:
            "If a project looks like your situation, we can help you frame the scope, the choices and the best next steps.",
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
          note: "Residential and commercial - Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
