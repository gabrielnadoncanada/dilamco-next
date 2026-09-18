import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Cabinet materials comparison: melamine, MDF, wood",
    description:
      "Materials comparison for custom kitchens, vanities and cabinets: MDF, melamine, plywood and solid wood.",
    path: "/materiaux/comparatif",
    ogAlt: "Custom materials comparison",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Comparison", url: SITE.url + "/materiaux/comparatif" },
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
          heading: "Which panel for which part of the cabinet",
          description:
            "No material wins everywhere. A good kitchen combines three or four, each one where it holds up best.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Humidity", "Finish"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Materials comparison for a custom kitchen",
          },
          caption: "Four panels, four roles",
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Comparison table",
          columns: ["Strength", "Where to use it"],
          rows: [
            {
              label: "Plywood",
              values: ["Stability and screw retention", "Boxes, drawers, shelves"],
            },
            {
              label: "MDF",
              values: ["Surface with no grain", "Painted doors and fronts"],
            },
            {
              label: "Melamine",
              values: ["Pre-finished, low cost", "Interiors, shelves, framed budgets"],
            },
            {
              label: "Solid wood",
              values: ["Grain and perceived value", "Doors, mouldings, visible details"],
            },
            {
              label: "Hardware",
              values: ["Comfort and longevity", "Hinges, slides, mechanisms"],
            },
          ],
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What the table does not say",
          description:
            "Two kitchens built from the same panel can age very differently. The gap comes from four execution details.",
          cards: [
            {
              title: "The edges",
              description:
                "An open edge lets water in, whatever the panel underneath.",
            },
            {
              title: "The assembly",
              description:
                "Dowels, screws and glue decide how the box holds together.",
            },
            {
              title: "The hardware",
              description:
                "Hinges and slides carry daily use, not the panel itself.",
            },
            {
              title: "The installation",
              description:
                "Levelling and final adjustments keep doors from rubbing.",
            },
          ],
          columns: "2",
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
              q: "MDF or melamine?",
              a: "MDF when you want a specific painted colour on the doors. Melamine when you want a decor that is already finished, with no paint step and a lower cost.",
            },
            {
              q: "Is plywood always preferable?",
              a: "For boxes and drawers, yes, because it holds screws. On a painted door, MDF gives a more even surface.",
            },
            {
              q: "Solid wood everywhere?",
              a: "No. It moves with humidity. On large flat surfaces and cabinet boxes, panels hold their line better over time.",
            },
            {
              q: "Can several materials be combined?",
              a: "That is the norm. Birch plywood for the boxes, MDF for painted doors, solid wood on visible details, melamine inside.",
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
          heading: "Want a comparison for your project?",
          intro:
            "We weigh structure, finish, humidity and budget after the on-site survey.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
