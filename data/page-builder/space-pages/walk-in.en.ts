import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "High-end custom walk-in closet",
    description:
      "High-end custom walk-in closet: design, controlled fabrication and precise installation in Montréal, Laval and on the South Shore.",
    path: "/espaces/walk-in",
    ogAlt: "Dilamco custom walk-in closet",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Custom walk-in closet", url: SITE.url + "/espaces/walk-in" },
  ],
  service: {
    name: "Custom walk-in closet",
    description:
      "Design, controlled fabrication and installation of high-end custom walk-in closets.",
    url: SITE.url + "/espaces/walk-in",
    serviceType: "Custom walk-in closet",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Spaces",
          heading: "Custom walk-in closet, storage designed for real use",
          description:
            "Custom work lets you optimize the space, improve organization and achieve a more stable result than a standard system.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Storage", "Organization", "Custom"],
          image: {
            src: "/images/generated/spaces/space-walkin-hero-01.webp",
            alt: "High-end custom walk-in closet in Pierrefonds and Greater Montréal",
          },
          caption:
            "Personalized organization for bedrooms, closets and tight spaces",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A walk-in closet built for everyday use",
          intro:
            "This kind of project is about better organizing zones, access and volumes rather than stacking standard shelves.",
          badges: ["Optimization", "Access", "Durability"],
          cardTitle: "When it's a good fit",
          items: [
            "You want to maximize a constrained space.",
            "Storage needs to follow your real habits.",
            "You're looking for a more solid, better-integrated result.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
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
          heading: "A simple method for better-planned storage",
          intro:
            "The project is structured around real uses, access and storage zones.",
          steps: [
            {
              number: "1",
              title: "Analysis",
              description:
                "Hanging, drawer, accessory and volume needs to organize.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Validation of zones, heights and circulation within the space.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Controlled production with stable specifications and a consistent finish.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Adjustments and finishes verified for a clean, lasting result.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Construction details that change daily use",
          intro:
            "Premium isn't just about looks. It shows in drawer hold, stability and fabrication quality.",
          items: [
            {
              title: "Sturdy drawers",
              description:
                "Solid birch wood to support daily use and varying loads.",
            },
            {
              title: "Stable structure",
              description:
                "Birch plywood to maintain better performance over time.",
            },
            {
              title: "Tailored configuration",
              description:
                "Organization designed for shoes, clothing, accessories and circulation.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our spaces",
              href: "/",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Material detail for a custom walk-in closet",
          },
          cardTitle: "Concrete benefit",
          cardDescription:
            "Better organization and better durability over time make the walk-in more enjoyable to use every day.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured walk-in projects",
          intro:
            "A few recent projects to illustrate the organization and the level of finish.",
          items: [
            {
              title: "Custom walk-in closet",
              href: "/projets",
              description:
                "Custom organization with circulation and storage suited to everyday life.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Custom walk-in closet project in Montréal",
              },
              badges: ["Montréal", "Organization"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom walk-in closet",
              href: "/projets",
              description:
                "Walk-in designed to maximize the space with a clean, durable finish.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Custom walk-in closet project in Laval",
              },
              badges: ["Laval", "Custom"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom walk-in closet",
              href: "/projets",
              description:
                "Personalized storage and precise installation for everyday use.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Custom walk-in closet project on the South Shore",
              },
              badges: ["South Shore", "Premium"],
              footerCtaLabel: "View project",
            },
          ],
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - custom walk-in closets",
          intro:
            "The most common questions before starting a custom storage project.",
          items: [
            {
              q: "How much does a custom walk-in closet cost?",
              a: "The price varies depending on the dimensions, the level of fit-out and the materials chosen.",
            },
            {
              q: "Is it useful in a small space?",
              a: "Yes. Custom work is exactly what's relevant when you need to optimize the available nooks, corners and heights.",
            },
            {
              q: "What's the difference with a modular system?",
              a: "Custom work allows for better-suited organization, better integration and an often more robust structure.",
            },
            {
              q: "Do you work in Montréal and the surrounding area?",
              a: "Yes. We serve Montréal, Laval and the South Shore.",
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
          heading: "Tell us about your walk-in closet project",
          intro:
            "We help you frame custom storage that truly fits the space and the way you use it.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
