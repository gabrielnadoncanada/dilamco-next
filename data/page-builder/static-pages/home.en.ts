import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom kitchens, vanities & cabinets in Montréal | Dilamco",
    description:
      "Dilamco designs and builds high-end custom kitchens, vanities and cabinets.",
    path: "/",
    ogAlt: "Dilamco, custom, durable, well executed",
  },
  breadcrumbs: [
    {
      name: "Home",
      url: SITE.url + "/",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Spaces",
          heading:
            "Custom spaces: kitchen, bathroom, storage and commercial",
          description:
            "A custom cabinetry specialist established in Greater Montréal, we design and install custom kitchens, cabinets, vanities and storage, made exclusively for us by our partner factory. Every space has its constraints: our role is to deliver durable, functional and well-executed solutions.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom", "Durable", "Turnkey"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Dilamco custom spaces",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "quality-pillars",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Spaces built to last - not standard modules",
          description:
            "Every Dilamco space follows the same logic: design tailored to your reality, controlled fabrication, premium materials and structured execution. The goal is simple: a durable, consistent and controlled result, with a single point of responsibility from start to finish.",
          cards: [
            {
              title: "Tangible quality",
              description:
                "Construction details, hardware, finishes and durability you can verify.",
            },
            {
              title: "Turnkey management",
              description:
                "Fewer parties, fewer surprises, clear coordination.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Choose your space",
          intro:
            "Go to the matching pillar page to discover the approach, the materials, completed projects and a tailored FAQ.",
          items: [
            {
              title: "Custom cabinets & kitchens",
              href: "/espaces/cuisine",
              description:
                "Custom kitchen cabinets: ergonomics, durability and full coordination for a controlled result.",
              image: {
                src: "/images/generated/home/home-space-cuisine-card-01.webp",
                alt: "High-end custom kitchen cabinets",
              },
              badges: ["Custom", "Turnkey", "High-end"],
              quickActionLabel: "View",
              footerCtaLabel: "View custom kitchens",
            },
            {
              title: "Custom vanities & bathrooms",
              href: "/espaces/salle-de-bain",
              description:
                "Custom bathroom vanities, optimized storage and moisture-resistant finishes built to last.",
              image: {
                src: "/images/generated/home/home-space-bath-card-01.webp",
                alt: "Custom bathroom vanity",
              },
              badges: ["Vanities", "Durable", "Finishes"],
              quickActionLabel: "View",
              footerCtaLabel: "View custom vanities",
            },
            {
              title: "Laundry room",
              href: "/espaces/salle-de-lavage",
              description:
                "Storage and organization solutions designed for everyday use, with no compromise on sturdiness.",
              image: {
                src: "/images/generated/home/home-space-laundry-card-01.webp",
                alt: "Custom laundry room",
              },
              badges: ["Storage", "Functional", "Custom"],
              quickActionLabel: "View",
              footerCtaLabel: "Discover the laundry room",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description:
                "Personalized organization: drawers, hanging space, accessories and a configuration tailored to your needs.",
              image: {
                src: "/images/generated/home/home-space-walkin-card-01.webp",
                alt: "Custom walk-in",
              },
              badges: ["Organization", "Personalized", "Premium"],
              quickActionLabel: "View",
              footerCtaLabel: "Discover the walk-in",
            },
            {
              title: "Basement finishing",
              href: "/espaces/sous-sol",
              description:
                "Home theatre, bar, wine cellar and custom bookcase to turn the basement into a living space.",
              image: {
                src: "/images/generated/home/home-space-sous-sol-card-01.webp",
                alt: "Custom basement finishing",
              },
              badges: ["Basement", "Home theatre", "Custom"],
              quickActionLabel: "View",
              footerCtaLabel: "Discover basement finishing",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Durable and repeatable fit-outs: offices, customer areas, storage and custom furniture.",
              image: {
                src: "/images/generated/home/home-space-commercial-card-01.webp",
                alt: "Custom commercial fit-out",
              },
              badges: ["Commercial", "Durable", "Controlled execution"],
              quickActionLabel: "View",
              footerCtaLabel: "Discover commercial",
            },
          ],
        },
      },
    },
    {
      id: "boutique-stock",
      content: {
        type: "grid",
        variant: "image-cards-badges-cta",
        props: {
          heading: "In-stock cabinets, ready to install",
          intro:
            "No production lead time: a selection of in-stock cabinets and vanities, ready to install. Pick your cabinets and get a firm quote within 48 h.",
          ctaLabel: "Browse the shop",
          ctaHref: "/boutique",
          items: [
            {
              title: "In-stock kitchen cabinets",
              href: "/boutique/armoires-cuisine",
              description:
                "Standard kitchen cabinets - bases, wall units and tall cabinets - in stock and ready to install, with no production wait.",
              image: {
                src: "/images/generated/home/home-featured-cuisine-project-01.webp",
                alt: "In-stock kitchen cabinets ready to install",
              },
              badges: ["In stock", "Ready to install"],
              footerCtaLabel: "View kitchen cabinets",
            },
            {
              title: "In-stock bathroom vanities",
              href: "/boutique/vanites",
              description:
                "24 and 30 inch vanities in stock, with durable moisture-resistant finishes, ready to install.",
              image: {
                src: "/images/generated/home/home-featured-bath-project-01.webp",
                alt: "In-stock bathroom vanities, 24 and 30 inch",
              },
              badges: ["24 & 30 in", "In stock"],
              footerCtaLabel: "View vanities",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Our standard, whatever the space",
          description:
            "A repeatable method to protect quality, reduce surprises and deliver a consistent result.",
          steps: [
            {
              number: "1",
              title: "Design",
              description:
                "Clear plans, a tailored configuration and validations before fabrication.",
            },
            {
              number: "2",
              title: "Materials",
              description:
                "Durable choices and construction details designed for longevity.",
            },
            {
              number: "3",
              title: "Controlled fabrication",
              description:
                "Stable standards, quality control and consistency from one project to the next.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Precise adjustments, clean finishes and structured coordination on site.",
            },
          ],
          actions: [
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Understand our materials",
              href: "/materiaux",
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
          heading: "FAQ",
          intro:
            "Clear answers to the questions that most often block the decision.",
          items: [
            {
              q: "What budget should I plan for a custom kitchen?",
              a: "The budget for a custom kitchen depends on the dimensions, the layout (drawers, accessories, island), the materials and the level of coordination. For a custom, turnkey approach, the investment generally ranges between $30,000 and $65,000, with a typical lead time of 9 to 15 weeks. We clarify a realistic budget from the initial consultation, once the project is scoped.",
            },
            {
              q: "What's the difference with IKEA / big-box stores?",
              a: "Standardized solutions can suit some contexts. Custom work aims for full personalization, a sturdier structure and better-controlled execution - especially important in a primary residence.",
            },
            {
              q: "What are typical lead times?",
              a: "Lead times vary with complexity and production load, but you should generally allow 9 to 15 weeks between design approval and installation. A structured process — validation before fabrication, then installation coordination — allows more predictable planning and limits surprises.",
            },
            {
              q: "Do you handle the full renovation?",
              a: "Yes, when required: coordination of the key stages and integration with design, fabrication and installation. The goal is to reduce fragmentation and ensure consistent execution.",
            },
          ],
        },
      },
    },
    {
      id: "cta-plan",

      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Ready to frame your project properly?",
          intro:
            "Get a clear, structured quote tailored to a durable and controlled project.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Custom kitchen",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          note: "Montréal • Laval • South Shore - residential & commercial",
        },
      },
    },
  ],
};
