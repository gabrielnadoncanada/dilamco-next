import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom kitchen cabinets in Pierrefonds and Montréal",
    description:
      "High-end custom kitchen cabinetry: design, controlled fabrication and precise installation in Pierrefonds, Montréal, Laval and Greater Montréal.",
    path: "/espaces/cuisine",
    ogAlt: "Dilamco custom kitchen cabinets",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Custom kitchens", url: SITE.url + "/espaces/cuisine" },
  ],
  service: {
    name: "Custom kitchen cabinets",
    description:
      "Design, controlled fabrication and installation of high-end custom kitchen cabinetry in Pierrefonds-Roxboro, the West Island, Montréal, Laval and Greater Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Custom kitchen cabinets",
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
            "Custom kitchens and cabinetry in Pierrefonds and Greater Montréal",
          description:
            "Design, controlled fabrication and precise installation of custom kitchen cabinets. A durable, well-organized space, from plan to finish — in Pierrefonds-Roxboro, the West Island and across Greater Montréal.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our kitchens",
              href: "/projets/cuisine",
              variant: "outline",
            },
          ],
          badges: ["Custom cabinets", "Pierrefonds", "West Island"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "High-end custom kitchen cabinets in Pierrefonds",
          },
          caption:
            "High-end residential in Pierrefonds, the West Island and Greater Montréal",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A custom kitchen built to last",
          intro:
            "A kitchen's value comes from its structure, ergonomics and execution quality — not just the final look.",
          badges: ["Durability", "Ergonomics", "Coordination"],
          cardTitle: "A good fit for this kind of project",
          items: [
            "Primary residence or long-term project.",
            "A layout that needs to fit the real space.",
            "Priority on stability, finishes and coordination.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "See our process",
              href: "/processus",
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
          heading: "A clear process from design to installation",
          intro:
            "A single partner helps frame decisions better and reduce fragmentation on site.",
          steps: [
            {
              number: "1",
              title: "Design",
              description:
                "Space analysis, work-zone organization and validation of choices.",
            },
            {
              number: "2",
              title: "Materials",
              description:
                "Selection of components and finishes suited to durability and daily use.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Controlled production with stable standards and repeatable quality.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Precise adjustments, clean alignments and finishes verified on site.",
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
          heading: "Material choices that justify the premium",
          intro:
            "Real durability is structural. The invisible components matter as much as the surfaces.",
          items: [
            {
              title: "Drawer structure",
              description:
                "Solid birch wood for better resistance and a lasting sense of solidity.",
            },
            {
              title: "Drawer bottoms",
              description:
                "Birch plywood to better support load and keep its stability.",
            },
            {
              title: "Consistent finish",
              description:
                "Choices aligned with maintenance, longevity and the real use of the kitchen.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Material detail for a custom kitchen",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "A sound structure reduces premature replacements and protects usability over many years.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured kitchen projects",
          intro:
            "A few projects that show the level of execution, not just the aesthetics.",
          items: [
            {
              title: "Custom kitchen, Pierrefonds",
              href: "/projets/cuisine/cuisine-sur-mesure-pierrefonds",
              description:
                "Custom kitchen cabinets in the West Island: precise layout and careful finish.",
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Custom kitchen cabinet project in Pierrefonds",
              },
              badges: ["Pierrefonds", "Cabinets"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen, Montréal",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal",
              description:
                "A kitchen designed for everyday use and long-term durability.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Custom kitchen project in Montréal",
              },
              badges: ["Montréal", "Custom"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen, South Shore",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud",
              description:
                "Full execution with project coordination and controlled details.",
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Custom kitchen project on the South Shore",
              },
              badges: ["South Shore", "Turnkey"],
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
          heading: "Custom kitchen cabinets across Greater Montréal",
          intro:
            "Based in Pierrefonds-Roxboro, we design, fabricate and install custom cabinets and kitchens in the West Island and across Greater Montréal.",
          badges: [
            "Pierrefonds-Roxboro",
            "West Island",
            "Montréal",
            "Laval",
            "North Shore",
            "South Shore",
          ],
          cardTitle: "Areas served",
          items: [
            "Pierrefonds-Roxboro and the West Island",
            "Montréal and central neighbourhoods",
            "Laval and the North Shore",
            "South Shore and southern suburbs",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our kitchens",
              href: "/projets/cuisine",
              variant: "outline",
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
          heading: "FAQ - custom kitchens",
          intro:
            "Clear answers to the most common questions before starting a project.",
          items: [
            {
              q: "How much does a custom kitchen or custom cabinets cost?",
              a: "The price depends on the layout, materials, dimensions and the level of coordination required. We give you a clear estimate once the project is scoped.",
            },
            {
              q: "Do you make custom kitchen cabinets in Pierrefonds and the West Island?",
              a: "Yes. We are based in Pierrefonds-Roxboro and install custom cabinets and kitchens throughout the West Island, Montréal, Laval and Greater Montréal.",
            },
            {
              q: "What's the difference with stock cabinets?",
              a: "Custom work lets us fit the space precisely, improve the structure (solid wood, birch plywood) and better control the final result.",
            },
            {
              q: "Do you also handle installation?",
              a: "Yes. The goal is consistent execution from design to installation, by the same team.",
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
          heading: "Tell us about your kitchen project",
          intro:
            "Get a structured quote tailored to your space, your priorities and your finish level.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our kitchens",
              href: "/projets",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
