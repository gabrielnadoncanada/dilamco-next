import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom kitchen & cabinetry design",
    description:
      "Custom cabinetry design: space optimization, planning and material selection, built into your renovation by a licensed general contractor.",
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
          eyebrow: "Cabinetry division",
          heading: "We draw your kitchen before a wall is opened",
          description:
            "Measurements, drawings, heights and materials are settled and signed before we order anything.",
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-design-hero-01.webp",
            alt: "Custom kitchen drawing and material samples",
          },
          caption: "West Island, Montreal, Laval, South Shore",
          imageSide: "left",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How the design stage works",
          steps: [
            {
              number: "1",
              title: "We measure the room",
              description:
                "We record the walls, the windows and the existing plumbing and wiring.",
            },
            {
              number: "2",
              title: "We draw the plans",
              description:
                "We place every cabinet, every appliance and every outlet on the drawing.",
            },
            {
              number: "3",
              title: "We choose with you",
              description:
                "You see the samples for materials, colours and handles.",
            },
            {
              number: "4",
              title: "You sign off",
              description:
                "You get the drawings, the itemized price and the job site dates.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The design stage in brief",
          rows: [
            {
              label: "What you receive",
              value:
                "A floor plan, a drawing of each wall, the list of materials and the price.",
            },
            {
              label: "Who handles it",
              value:
                "A designer draws it, and the general contractor checks that it can be built.",
            },
            {
              label: "Meetings planned",
              value:
                "One visit to measure, and another one to walk you through the drawings.",
            },
            {
              label: "Design fee",
              value:
                "The design is credited to your project if you award us the work.",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Drawings and elevations of a kitchen being designed",
          },
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about kitchen design",
          items: [
            {
              q: "How long does design take?",
              a: "Allow two to four weeks depending on room size and the number of revisions. A vanity on its own is often settled in a single meeting.",
            },
            {
              q: "Do I need my appliances chosen?",
              a: "Yes, at least the models. Clearances, built-in openings and connections are drawn from their spec sheets, not from an estimate.",
            },
            {
              q: "Does design cover the lighting?",
              a: "Yes when we run the full renovation. Circuits, pot lights and under-cabinet strips are placed on the drawing before walls open.",
            },
            {
              q: "Can the plan change after signing?",
              a: "Yes, as long as production has not started. After that, every change goes through a written change order, with its cost and schedule impact.",
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
          heading: "Start with the drawings for your project",
          intro:
            "Tell us about the room and the date that suits you, and we will call you back.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
