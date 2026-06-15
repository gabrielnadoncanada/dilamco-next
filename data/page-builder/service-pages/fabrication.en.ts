import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Fabrication service",
    description:
      "Custom fabrication: durability, precision and high-end finish for a consistent, long-lasting result.",
    path: "/services/fabrication",
    ogAlt: "Dilamco fabrication service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Fabrication service",
      url: SITE.url + "/services/fabrication",
    },
  ],
  service: {
    name: "Fabrication service",
    description:
      "Custom fabrication: durability, precision and high-end finish.",
    url: SITE.url + "/services/fabrication",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading: "Custom fabrication: precision, consistency and durability",
          description:
            "Fabrication determines a project's solidity, stability and longevity. The goal is a consistent, durable result that is clean to install.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Precision", "Durability", "Custom"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Technical drawings and material samples for custom fabrication",
          },
          caption:
            "Materials, assembly and details that hold up over time",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What custom fabrication really means",
          intro:
            "Custom work aims for a real fit to the space and the use, not just cutting to the right width.",
          badges: ["Real dimensions", "Consistent assembly", "Real use"],
          cardTitle: "What makes the difference",
          items: [
            "Adapting to the space and to real constraints.",
            "Controlled alignments and proportions between modules.",
            "Choice of materials and hardware based on use.",
          ],
          actions: [
            {
              label: "View materials",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "Hardware",
              href: "/materiaux/quincaillerie",
              variant: "outline",
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
          heading: "Fabrication process",
          intro:
            "Each step prepares the next one to reduce rework and make for a clean installation.",
          steps: [
            {
              number: "1",
              title: "Validation",
              description:
                "Design, measurements and constraints clarified before production.",
            },
            {
              number: "2",
              title: "Selection",
              description:
                "Materials chosen based on durability, moisture and maintenance.",
            },
            {
              number: "3",
              title: "Assembly",
              description:
                "Modules, doors and drawers built with consistency and precision.",
            },
            {
              number: "4",
              title: "Preparation",
              description:
                "Final check and conditioning for a precise installation.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Fabrication by project type",
          intro:
            "The level of use and the constraints change with the space, but the execution standard stays high.",
          items: [
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description:
                "Modules, islands, optimized storage and appliance integration.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen with precise fabrication",
              },
              badges: ["Kitchen", "Storage"],
              footerCtaLabel: "View kitchen",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description: "Vanities and storage suited to moisture.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom with durable fabrication",
              },
              badges: ["Moisture", "Durability"],
              footerCtaLabel: "View bathroom",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Heavy use, durability and functional consistency.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Custom commercial fit-out with robust fabrication",
              },
              badges: ["Commercial", "Heavy use"],
              footerCtaLabel: "View commercial",
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
          heading: "FAQ - fabrication",
          intro:
            "Clear answers about custom fabrication and what it involves.",
          items: [
            {
              q: "What's the difference between custom and semi-custom?",
              a: "Custom adapts to the exact space, while semi-custom starts from predefined modules with some variations.",
            },
            {
              q: "Which materials age best?",
              a: "It depends on the space, moisture, maintenance, edge banding, hardware and installation.",
            },
            {
              q: "Is it 100% customizable?",
              a: "The goal is to adapt the project to the space and the use, within the limits of real technical constraints.",
            },
            {
              q: "What are the fabrication lead times?",
              a: "They vary with complexity, availability and coordination with installation.",
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
          heading: "Want a project built to last?",
          intro:
            "We help you frame the right technical choices, materials and execution details before production.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View materials",
              href: "/materiaux",
              variant: "outline",
            },
          ],
          note: "Montréal, Laval and the South Shore",
        },
      },
    },
  ],
};
