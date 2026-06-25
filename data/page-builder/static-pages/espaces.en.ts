import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom spaces",
    description:
      "Discover our custom spaces: kitchen, bathroom, walk-in closet, laundry room and commercial.",
    path: "/espaces",
    ogAlt: "Dilamco custom spaces",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Spaces", url: SITE.url + "/espaces" },
  ],
  service: {
    name: "Custom spaces",
    description:
      "Pillar pages for kitchens, bathrooms, walk-ins, laundry rooms and commercial projects.",
    url: SITE.url + "/espaces",
    serviceType: "Custom spaces",
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
          heading:
            "Custom spaces: kitchen, bathroom, storage and commercial",
          description:
            "Every space has its constraints. Our role is to design, build and install durable, functional and well-executed solutions.",
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
          badges: ["Custom", "Durable", "Turnkey"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Dilamco custom spaces",
          },
          caption: "Montreal, Laval and the South Shore",
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
            "Go to the pillar page for your project type to see the approach, materials and references.",
          items: [
            {
              title: "Custom cabinets & kitchens",
              href: "/espaces/cuisine",
              description:
                "Custom kitchen cabinets with coordination, durable materials and stable execution.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "High-end custom kitchen cabinets",
              },
              badges: ["Kitchen", "Custom"],
              footerCtaLabel: "View custom kitchens",
            },
            {
              title: "Custom vanities & bathrooms",
              href: "/espaces/salle-de-bain",
              description:
                "Custom bathroom vanities adapted to moisture and everyday use.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Custom bathroom vanity",
              },
              badges: ["Bathroom", "Moisture"],
              footerCtaLabel: "View custom vanities",
            },
            {
              title: "Laundry room",
              href: "/espaces/salle-de-lavage",
              description:
                "A functional, durable configuration for a well-organized utility space.",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Custom laundry room",
              },
              badges: ["Laundry room", "Functional"],
              footerCtaLabel: "View laundry room",
            },
            {
              title: "Walk-in closet",
              href: "/espaces/walk-in",
              description:
                "Custom organization to optimize space and storage.",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Custom walk-in closet",
              },
              badges: ["Walk-in", "Organization"],
              footerCtaLabel: "View walk-in",
            },
            {
              title: "Basement finishing",
              href: "/espaces/sous-sol",
              description:
                "Home theatre, bar, wine cellar, library and custom storage.",
              image: {
                src: "/images/generated/spaces/espaces-card-sous-sol-01.webp",
                alt: "Custom basement finishing",
              },
              badges: ["Basement", "Home theatre"],
              footerCtaLabel: "View basement finishing",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Durable commercial fit-outs, planned and adapted to real use.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Custom commercial fit-out",
              },
              badges: ["Commercial", "Durable"],
              footerCtaLabel: "View commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "steps-2x2-cta",
        props: {
          heading: "Our standard, whatever the space",
          description:
            "A repeatable method to protect quality, reduce surprises and keep execution consistent.",
          steps: [
            {
              label: "1) Design",
              description:
                "Clear plans, a suitable configuration and validations before fabrication.",
            },
            {
              label: "2) Materials",
              description:
                "Durable choices and construction details designed for longevity.",
            },
            {
              label: "3) Fabrication",
              description:
                "Stable standards and quality control for greater consistency.",
            },
            {
              label: "4) Installation",
              description:
                "Precise adjustments, clean finishes and tidy coordination on site.",
            },
          ],
          actions: [
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "View our materials",
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
          heading: "FAQ - custom spaces",
          intro:
            "A few quick answers before diving into your project type.",
          items: [
            {
              q: "Which spaces do you handle?",
              a: "Kitchen, bathroom, laundry room, walk-in and commercial projects.",
            },
            {
              q: "Do you only work in Montreal?",
              a: "We serve Montreal, Laval and the South Shore.",
            },
            {
              q: "What is the difference with a standard solution?",
              a: "Custom work allows a better fit to the space, a stronger structure and more controlled execution.",
            },
            {
              q: "Do you also handle installation?",
              a: "Yes. The goal is precisely to ensure consistent execution from design to installation.",
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
          heading: "Ready to frame your project properly?",
          intro:
            "Get a clear, structured quote tailored to your space and your level of requirement.",
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
          note: "Montreal, Laval and the South Shore",
        },
      },
    },
  ],
};
