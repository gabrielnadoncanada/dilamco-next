import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Services",
    description:
      "Dilamco services: design, custom fabrication, installation and turnkey renovation.",
    path: "/services",
    ogAlt: "Dilamco services",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "Dilamco services",
    description:
      "Design, custom fabrication, installation and turnkey renovation based on the scope of the project.",
    url: SITE.url + "/services",
    serviceType: "Custom services",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading:
            "Services: design, fabrication, installation and turnkey renovation",
          description:
            "Depending on the project, we handle everything from plan to finish.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Overview of Dilamco services",
          },
          caption: "From planning to installation based on the scope",
        },
      },
    },
    {
      id: "primary-services",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Our main services",
          intro: "Choose the service that matches your stage.",
          columns: "2",
          items: [
            {
              title: "Design",
              description: "Plan framing, ergonomics and material choices.",
              href: "/services/design",
              badges: ["Planning", "Use"],
              ctaLabel: "View design",
            },
            {
              title: "Fabrication",
              description: "Custom production focused on durability.",
              href: "/services/fabrication",
              badges: ["Custom", "Durability"],
              ctaLabel: "View fabrication",
            },
            {
              title: "Installation",
              description: "On-site adjustments and finish.",
              href: "/services/installation",
              badges: ["Installation", "Precision"],
              ctaLabel: "View installation",
            },
            {
              title: "Turnkey renovation",
              description: "Coordination of related work based on the project.",
              href: "/services/renovation",
              badges: ["Coordination", "Execution"],
              ctaLabel: "View renovation",
            },
          ],
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Renovation by type",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              badges: ["Kitchen", "Coordination"],
              ctaLabel: "View kitchen",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              badges: ["Moisture", "Technical"],
              ctaLabel: "View bathroom",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              badges: ["Transitions", "Finish"],
              ctaLabel: "View flooring",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Scope", "Coordination"],
              ctaLabel: "View addition",
            },
          ],
        },
      },
    },
    {
      id: "turnkey-approach",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "When to choose a turnkey approach",
          intro:
            "This approach becomes relevant when the project goes beyond fabrication and installation of cabinets alone.",
          badges: ["Kitchen", "Bathroom", "Coordination"],
          cardTitle: "Situations where the approach is relevant",
          items: [
            "Full kitchen renovation.",
            "Bathroom with technical constraints.",
            "Multi-trade project.",
          ],
          actions: [
            {
              label: "View renovation",
              href: "/services/renovation",
              variant: "outline",
            },
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "default",
            },
          ],
        },
      },
    },
    {
      id: "quality",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Quality and durability",
          intro:
            "High-end work relies on a coherent system: materials, assembly, hardware and installation.",
          columns: "3",
          items: [
            {
              title: "Why plywood",
              description:
                "See why the panel structure changes stability and longevity.",
              href: "/materiaux/contreplaque",
              badges: ["Structure", "Durability"],
              ctaLabel: "View plywood",
            },
            {
              title: "Hardware",
              description:
                "Understand how mechanisms affect everyday comfort and wear.",
              href: "/materiaux/quincaillerie",
              badges: ["Use", "Precision"],
              ctaLabel: "View hardware",
            },
            {
              title: "All materials",
              description:
                "Compare options based on the space, moisture and expected finish.",
              href: "/materiaux",
              badges: ["Comparison", "Technical choices"],
              ctaLabel: "View materials",
            },
          ],
        },
      },
    },
  ],
};
