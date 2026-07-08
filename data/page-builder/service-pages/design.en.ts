import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom kitchen & cabinetry design",
    description:
      "Design service: space optimization, planning and material selection for kitchens, vanities, walk-ins and commercial projects.",
    path: "/services/design",
    ogAlt: "Dilamco design service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Design service", url: SITE.url + "/services/design" },
  ],
  service: {
    name: "Design service",
    description:
      "Space optimization, planning and material selection for kitchens, vanities, walk-ins and commercial projects.",
    url: SITE.url + "/services/design",
    serviceType: "Design",
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
          heading: "Design service — structuring the project before fabrication",
          description:
            "Custom cabinet design is the planning stage where usage is framed, the space organized, technical constraints integrated and material choices validated — before fabrication and installation. That is where the right decisions are made, on paper, to avoid costly compromises later.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Real usage", "Planning", "Execution"],
          image: {
            src: "/images/generated/services/service-design-hero-01.webp",
            alt: "Custom kitchen plan and material samples",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "rôle",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "The role of design in a custom project",
          description:
            "Good design makes the project clear and executable. It helps anticipate constraints and avoid rework during fabrication or visible compromises at the end.",
          cards: [
            {
              title: "Optimize the space",
              description:
                "Circulation, work zones, clearances and heights suited to your usage.",
            },
            {
              title: "Structure the storage",
              description:
                "Access, organization and priorities defined before production.",
            },
            {
              title: "Align the decisions",
              description:
                "Materials, finish, schedule and level of complexity stay consistent.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "includes",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What the design service includes",
          intro:
            "Dilamco design is focused on usage and execution, not inspiration disconnected from the job site.",
          items: [
            {
              title: "Needs analysis",
              description: "Your priorities, your usage and your constraints.",
            },
            {
              title: "Functional organization",
              description: "Space plan and storage logic.",
            },
            {
              title: "Material and finish choices",
              description: "Decisions consistent with durability and maintenance.",
            },
            {
              title: "Preparation for execution",
              description:
                "A design conceived to be fabricated and installed cleanly.",
            },
          ],
          actions: [
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Custom design being planned",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "The earlier the decisions are made, the more predictable and executable the project becomes.",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Design by project type",
          intro:
            "The design logic changes depending on the space, the constraints and the level of usage.",
          items: [
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description:
                "Work zones, circulation, island, storage and integration.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen designed for real usage",
              },
              badges: ["Ergonomics", "Storage"],
              footerCtaLabel: "View kitchen",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description:
                "Moisture constraints, storage and daily ergonomics.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom designed for moisture",
              },
              badges: ["Moisture", "Finishes"],
              footerCtaLabel: "View bathroom",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description:
                "Zone-based organization, accessibility and vertical storage.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Custom walk-in designed for organization",
              },
              badges: ["Organization", "Access"],
              footerCtaLabel: "View walk-in",
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
          heading: "FAQ - design",
          intro:
            "Clear answers on the role of design in a custom project.",
          items: [
            {
              q: "Is design mandatory?",
              a: "In a custom project, design isn't a formality: it's what frames every decision before fabrication. It lets us validate the real dimensions, the layout of zones, the integration of appliances and technical constraints, and the material choices. Skipping this step means risking costly compromises discovered too late, during fabrication or installation. Good design reduces surprises and saves time across the whole project.",
            },
            {
              q: "Can we go straight to fabrication?",
              a: "Only if the constraints, the organization and the dimensions are already reliably clarified.",
            },
            {
              q: "Does it work in a condo?",
              a: "Yes. Design is especially useful in a condo to manage access, space and the integration of equipment.",
            },
            {
              q: "When does design come in during the project?",
              a: "Design comes in at the very start, before fabrication. We begin by analyzing the real space (measurements, circulation, plumbing and electrical), then validate the layout logic, the heights, the storage zones and the material and finish choices. Once these decisions are settled and validated with you, they serve as a stable reference for fabrication and installation — which limits costly changes along the way.",
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
          heading: "Tell us about your project",
          intro:
            "Tell us your space, your area and your timeline. We help you frame a realistic and executable project.",
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
          note: "Reply usually within 24-48 h.",
        },
      },
    },
  ],
};
