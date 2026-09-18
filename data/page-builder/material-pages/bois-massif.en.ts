import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Solid wood cabinets, custom-made",
    description:
      "Solid wood: benefits, limits and recommended uses for custom cabinets, doors and furniture.",
    path: "/materiaux/bois-massif",
    ogAlt: "Solid wood - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Solid wood", url: SITE.url + "/materiaux/bois-massif" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Materials",
          heading: "Solid wood in the right place, not everywhere",
          description:
            "Full boards, visible grain, high perceived value. A living material that moves with humidity, so we target it at the surfaces you see.",
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
          badges: ["Natural", "Doors", "Details"],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Custom kitchen with solid wood details",
          },
          caption: "Doors and details seen up close",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What solid wood brings",
          description:
            "Full material and natural variation. It wins on fronts and details, it costs you stability on large flat surfaces.",
          cards: [
            {
              title: "Grain and depth",
              description:
                "Every piece keeps its own variations of tone and texture.",
            },
            {
              title: "Perceived value",
              description:
                "It pulls the result upmarket on the elements you see.",
            },
            {
              title: "Repairable",
              description:
                "Some marks can be reworked, depending on the finish applied.",
            },
            {
              title: "It moves",
              description:
                "Swelling and shrinking follow the room's humidity and temperature.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Where we use it",
          intro:
            "We target solid wood where it is seen and touched, and switch to panels everywhere else.",
          items: [
            {
              title: "Doors and fronts",
              description: "Where the grain reads up close.",
            },
            {
              title: "Details and mouldings",
              description: "Crowns, end panels, exposed shelving.",
            },
            {
              title: "Plywood boxes",
              description: "More stable under load and in humidity.",
            },
          ],
          actions: [
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Solid wood finish detail",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "Solid wood on the visible surfaces, stable panels for the structure.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Frequently asked questions",
          items: [
            {
              q: "Is solid wood always the right choice?",
              a: "No. It excels on doors and visible details. On large flat surfaces and cabinet boxes, plywood and MDF hold their line better over time.",
            },
            {
              q: "How does it react to humidity?",
              a: "It swells and shrinks with the room's humidity. Clearance planned at the design stage, suitable joinery and a finish that seals the wood clearly limit that movement.",
            },
            {
              q: "Is it recommended in a kitchen?",
              a: "Yes, on doors and visible elements. The finish you choose and the room's ventilation matter as much as the wood species.",
            },
            {
              q: "Can it be combined with other materials?",
              a: "Yes, and that is the usual approach: solid wood on the fronts, birch plywood for the boxes, MDF for certain painted doors.",
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
          heading: "Planning a project with solid wood?",
          intro:
            "We tell you where it brings real value and where another panel will hold up better.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
