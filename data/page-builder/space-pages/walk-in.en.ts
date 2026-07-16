import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom closets and walk-ins in Montreal: pricing and design",
    description:
      "High-end custom closets and walk-in closets in Montreal, Laval and the South Shore: realistic price ranges, custom vs modular comparison, design and installation.",
    path: "/espaces/walk-in",
    ogAlt: "Dilamco custom closet and walk-in",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Custom closets", url: SITE.url + "/espaces/walk-in" },
  ],
  service: {
    name: "Custom closets and walk-in closets",
    description:
      "Design, controlled fabrication and installation of high-end custom closets and walk-in closets in Montreal, Laval and the Greater Montreal area.",
    url: SITE.url + "/espaces/walk-in",
    serviceType: "Custom closet",
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
          heading: "Custom closets and walk-ins in Montreal, designed for real use",
          description:
            "A custom closet — or walk-in — is a storage system designed and built to the exact dimensions of your space (hanging, drawers, shelves, accessories), rather than assembled from stock modules. At Dilamco, across Greater Montréal, a single team handles the design, controlled fabrication at our partner factory and installation.",
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
          heading: "A custom closet built for everyday use",
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
              label: "In-stock full-height storage cabinets",
              href: "/boutique/garde-manger",
              variant: "ghost",
            },
            {
              label: "View our spaces",
              href: "/espaces",
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
      id: "pricing",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "How much does a custom closet cost in Montreal?",
          intro:
            "Every project is priced according to dimensions, level of fit-out and materials. Here are realistic ranges to frame your budget before the quote.",
          columns: ["Price range", "What it includes"],
          rows: [
            {
              label: "Custom reach-in closet",
              values: [
                "$3,000 to $8,000",
                "Complete fit-out of an existing closet: hanging space, shelves and custom drawers",
              ],
            },
            {
              label: "Custom walk-in closet",
              values: [
                "$8,000 to $20,000",
                "Dedicated room: wall modules, drawers, accessories and integrated finishes",
              ],
            },
            {
              label: "High-end walk-in",
              values: [
                "$20,000 and up",
                "Center island, integrated lighting, glass doors, solid wood and glass",
              ],
            },
          ],
        },
      },
    },
    {
      id: "vs-modular",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Custom closet or modular system (IKEA, wire shelving)?",
          intro:
            "Modular systems work fine short-term. Custom becomes worthwhile as soon as space, durability or integration matter.",
          columns: ["Modular system", "Custom closet"],
          rows: [
            {
              label: "Fit to the space",
              values: [
                "Standard dimensions, wasted space in corners and below the ceiling",
                "Designed to the millimetre for your real walls, nooks and heights",
              ],
            },
            {
              label: "Materials",
              values: [
                "Thin panels and basic hardware",
                "Birch plywood, solid wood drawers, robust hardware",
              ],
            },
            {
              label: "Integration",
              values: [
                "Freestanding units, visible gaps and baseboards",
                "Wall-to-wall and floor-to-ceiling integration, built-in architectural look",
              ],
            },
            {
              label: "Lifespan",
              values: [
                "Sagging common after a few years",
                "Stable structure built for long-term daily use",
              ],
            },
            {
              label: "Price",
              values: [
                "Cheaper upfront",
                "Higher investment, but added resale value",
              ],
            },
          ],
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
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading:
            "Custom closets in Montreal, Laval and across Greater Montreal",
          intro:
            "Based in Greater Montreal, we design and install custom closets and walk-ins in the West Island and throughout the region.",
          badges: [
            "Montreal",
            "Laval",
            "Pierrefonds-Roxboro",
            "West Island",
            "North Shore",
            "South Shore",
          ],
          cardTitle: "Areas served",
          items: [
            "Montreal and central neighbourhoods",
            "Laval and the North Shore",
            "Pierrefonds-Roxboro and the West Island",
            "South Shore and southern suburbs",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
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
          heading: "FAQ - custom closets and walk-ins",
          intro:
            "The most common questions before starting a custom storage project.",
          items: [
            {
              q: "How much does a custom closet cost?",
              a: "Most custom reach-in closets fall between $3,000 and $8,000, and complete walk-in closets between $8,000 and $20,000. A high-end walk-in (center island, integrated lighting, glass doors) generally exceeds $20,000. You get a detailed quote once the project is framed.",
            },
            {
              q: "Is a custom closet worth it compared to an IKEA system?",
              a: "A modular system is cheaper upfront, but it imposes standard dimensions and ages faster. Custom work uses every centimetre (corners, heights, nooks), relies on more robust materials and integrates into the room like architectural millwork — an asset at resale.",
            },
            {
              q: "What is the timeline for a custom closet project?",
              a: "Plan for roughly 9 to 15 weeks between design approval and installation, depending on the project's complexity. The precise schedule is confirmed with the quote.",
            },
            {
              q: "Is it useful in a small space?",
              a: "Yes. Custom work is exactly what's relevant when you need to optimize the available nooks, corners and heights.",
            },
            {
              q: "Do you work in Montreal and the surrounding area?",
              a: "Yes. We serve Montreal, Laval, the West Island, the North Shore and the South Shore.",
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
          heading: "Tell us about your custom closet or walk-in project",
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
