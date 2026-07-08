import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "High-end custom commercial cabinets",
    description:
      "Custom commercial cabinets: design, controlled fabrication and precise installation in Montréal, Laval and on the South Shore.",
    path: "/espaces/commercial",
    ogAlt: "Dilamco custom commercial work",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial" },
  ],
  service: {
    name: "Commercial",
    description:
      "Design, controlled fabrication and installation of custom commercial cabinets.",
    url: SITE.url + "/espaces/commercial",
    serviceType: "Custom commercial cabinets",
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
            "Custom commercial cabinets, stable and planned execution",
          description:
            "Custom commercial cabinetry and fit-outs are installations designed and built for heavy use — reception, storage, functional furniture — sized for your premises and your schedule. At Dilamco, across Greater Montréal, we handle the design, controlled fabrication at our partner factory and installation, framing the sequence early to meet your opening windows.",
          actions: [
            {
              label: "Get a commercial quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our commercial projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Commercial", "Durable", "Planned"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Custom commercial fit-out in Montréal and Greater Montréal",
          },
          caption:
            "An approach tailored to client spaces, offices and work environments",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "An approach suited to heavy use",
          intro:
            "Commercial projects call for more predictable execution, materials that hold up and better coordination.",
          badges: ["Heavy use", "Maintenance", "Coordination"],
          cardTitle: "When this approach makes sense",
          items: [
            "You're looking for a durable solution consistent with your brand image.",
            "The schedule and the installation window really matter.",
            "You want to reduce the risks tied to fragmented coordination.",
          ],
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
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "A more predictable sequence for commercial work",
          intro:
            "The project is framed to better manage needs, timelines, fabrication and installation.",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description:
                "Use, site constraints, maintenance, traffic flow and branding needs.",
            },
            {
              number: "2",
              title: "Validation",
              description:
                "Plans, dimensions and decisions locked in before production.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Stable standards and better-controlled execution to limit deviations.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Logistics and installation planned to reduce disruption on site.",
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
          heading: "Specifications designed to last over time",
          intro:
            "In commercial work, premium means durability, maintenance and stability, not just appearance.",
          items: [
            {
              title: "Robust structure",
              description:
                "Materials and fabrication details chosen to withstand more intensive use.",
            },
            {
              title: "Simplified maintenance",
              description:
                "Surface and finish choices aligned with the reality of the space.",
            },
            {
              title: "More stable execution",
              description:
                "Consistent specifications to better reproduce quality from one project to the next.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-01.webp",
            alt: "Material detail for a commercial fit-out",
          },
          cardTitle: "Intended result",
          cardDescription:
            "Less structural weakness, less corrective maintenance and better consistency over time.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured commercial projects",
          intro:
            "A few references that show the execution quality and the level of coordination.",
          items: [
            {
              title: "Commercial fit-out",
              href: "/projets",
              description:
                "A commercial project designed for real use and clean execution.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Commercial project in Montréal",
              },
              badges: ["Montréal", "Commercial"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom commercial cabinets",
              href: "/projets",
              description:
                "Stable execution and materials suited to more intensive use.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Commercial project in Laval",
              },
              badges: ["Laval", "Heavy use"],
              footerCtaLabel: "View project",
            },
            {
              title: "Commercial furniture",
              href: "/projets",
              description:
                "A custom project coordinated to limit surprises and care for the finish.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Commercial project on the South Shore",
              },
              badges: ["South Shore", "Execution"],
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
          heading: "FAQ - custom commercial work",
          intro:
            "The most useful questions before scoping a commercial project.",
          items: [
            {
              q: "What kinds of commercial projects do you take on?",
              a: "We build custom fit-outs and cabinets for commercial spaces where durability, maintenance and execution consistency matter: reception and front desk, technical storage, functional furniture, service areas. Each project is sized for heavy use and for your actual premises, with materials chosen to keep up with the pace. Because the same team handles the design, fabrication at our partner factory and installation, the sequence is framed early to meet your schedule and opening windows — a key issue in a commercial context.",
            },
            {
              q: "Can you meet installation windows?",
              a: "Yes, when the project is well planned from the design stage and the sequence is framed early.",
            },
            {
              q: "Do you handle turnkey coordination?",
              a: "Yes, depending on the project scope, to reduce fragmented responsibility and uneven finishes.",
            },
            {
              q: "Do you work in Montréal and the surrounding area?",
              a: "Yes. Montréal, Laval and the South Shore are part of our service area.",
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
          heading: "Tell us about your commercial project",
          intro:
            "We help you frame a durable, planned and better-executed project for your space.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our commercial projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
