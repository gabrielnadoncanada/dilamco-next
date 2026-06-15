import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Process",
    description:
      "The Dilamco process: scoping, design, fabrication, installation and, depending on the project, coordination of a turnkey renovation.",
    path: "/processus",
    ogAlt: "Dilamco process",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Process", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Dilamco process",
      description:
        "A structured process for custom projects: scoping, design, selections, fabrication, installation and coordination depending on scope.",
      url: SITE.url + "/processus",
      serviceType: "Custom project process",
      areaServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Process",
          heading: "A clear process, from scoping to installation",
          description:
            "Every project moves forward with a defined sequence to reduce grey areas, validate decisions at the right time and protect the final quality.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "outline",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Dilamco process for a custom project",
          },
          caption:
            "A single working logic to better frame decisions and execution",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the process protects in practice",
          intro:
            "The goal isn't to add steps. The goal is to keep the project clear, executable and consistent from start to finish.",
          columns: "2",
          items: [
            {
              title: "Clearer scope",
              description:
                "We clarify what's included, what needs to be validated and what could slow the project down.",
              icon: "slidersHorizontal",
              bullets: [
                "Constraints identified earlier",
                "Priorities better ranked",
                "Fewer grey areas along the way",
              ],
            },
            {
              title: "Choices locked in better",
              description:
                "Structural decisions are made before fabrication, not in reaction.",
              icon: "doorOpen",
              bullets: [
                "Plans and configuration validated",
                "Materials and finishes confirmed",
                "Trade-offs made before production",
              ],
            },
            {
              title: "More stable fabrication",
              description:
                "A well-launched production relies on stable information and clean scoping.",
              icon: "package2",
              bullets: [
                "Fewer avoidable reworks",
                "More predictable execution",
                "Better consistency between pieces",
              ],
            },
            {
              title: "Better-controlled installation",
              description:
                "Installation goes more smoothly when the project sequence has been properly prepared.",
              icon: "wrench",
              bullets: [
                "Cleaner coordination on site",
                "More precise adjustments",
                "Simpler final inspection",
              ],
            },
          ],
        },
      },
    },
    {
      id: "steps",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "The main steps of a Dilamco project",
          description:
            "The scope varies by project, but the logic stays the same: scope, validate, produce, install.",
          steps: [
            {
              number: "1",
              title: "Initial scoping",
              description:
                "We understand the space, the scope, the site constraints, the level of expectation and the target timeline.",
            },
            {
              number: "2",
              title: "Design and configuration",
              description:
                "We structure the layout, the functions, the dimensions and the choices that influence the final result.",
            },
            {
              number: "3",
              title: "Material selection",
              description:
                "We confirm panels, hardware, finishes and details based on real use and the durability sought.",
            },
            {
              number: "4",
              title: "Validation before production",
              description:
                "The essential decisions are locked in before launching fabrication to reduce reworks.",
            },
            {
              number: "5",
              title: "Fabrication",
              description:
                "Custom production starts from a stable base, which protects consistency and precision.",
            },
            {
              number: "6",
              title: "Installation and finishing",
              description:
                "Installation, adjustments and the final inspection serve to deliver a clean, consistent result.",
            },
          ],
          actions: [
            {
              label: "View the design service",
              href: "/services/design",
              variant: "outline",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "inputs",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What helps move faster",
          intro:
            "A good start mostly speeds up the validations. A few simple pieces of information are enough to frame the discussion properly.",
          badges: ["Area", "Type of space", "Scope", "Priorities"],
          cardTitle: "Useful information from the first conversation",
          items: [
            "The type of space and the project location",
            "The real scope: design only, custom, renovation or coordination",
            "The priorities: timeline, storage, durability, aesthetics or budget",
            "Photos, basic measurements or inspiration if available",
            "Building or site constraints when they exist",
          ],
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
        },
      },
    },
    {
      id: "resources",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Useful pages to go further",
          intro:
            "Depending on where you are, these pages help you better understand the method, the services and the technical choices.",
          columns: "3",
          items: [
            {
              title: "Design service",
              description:
                "To understand how we structure the choices before fabrication.",
              href: "/services/design",
              badges: ["Plans", "Configuration"],
              ctaLabel: "View design",
            },
            {
              title: "Fabrication service",
              description:
                "To see how production fits into the overall project.",
              href: "/services/fabrication",
              badges: ["Production", "Custom"],
              ctaLabel: "View fabrication",
            },
            {
              title: "Installation service",
              description:
                "To understand installation, adjustments and on-site finishing.",
              href: "/services/installation",
              badges: ["Installation", "Adjustments"],
              ctaLabel: "View installation",
            },
            {
              title: "Turnkey renovation",
              description:
                "When the project requires coordinating more than the cabinets.",
              href: "/services/renovation",
              badges: ["Coordination", "Related work"],
              ctaLabel: "View renovation",
            },
            {
              title: "Materials",
              description:
                "To compare the options and understand what really changes durability.",
              href: "/materiaux",
              badges: ["Panels", "Hardware"],
              ctaLabel: "View materials",
            },
            {
              title: "Projects",
              description:
                "To see concrete projects and the expected level of finish.",
              href: "/projets",
              badges: ["References", "Execution"],
              ctaLabel: "View projects",
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
          heading: "FAQ - process",
          intro:
            "Quick answers to the questions that come up most often before starting.",
          items: [
            {
              q: "Do all projects follow exactly the same steps?",
              a: "The logic stays similar, but the scope changes depending on whether it's a design mandate, a full custom project or a renovation with coordination.",
            },
            {
              q: "When does fabrication begin?",
              a: "Once the structural decisions are validated: configuration, dimensions, materials, finishes and the elements that directly influence production.",
            },
            {
              q: "Do you also handle installation?",
              a: "Yes. Installation, adjustments and the final inspection are part of the execution logic when the mandate provides for it.",
            },
            {
              q: "Does the process also work in a condo or in constrained contexts?",
              a: "Yes. The process exists precisely to identify access, schedule or coordination constraints early enough to integrate them better.",
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
          heading: "Need to scope a project cleanly before moving forward?",
          intro:
            "We help you clarify the scope, the priorities and the best sequence to launch a custom project with fewer surprises.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "outline",
            },
          ],
          note: "Montréal, Laval and South Shore",
        },
      },
    },
  ],
};
