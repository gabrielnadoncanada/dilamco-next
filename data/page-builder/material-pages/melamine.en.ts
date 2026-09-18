import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Melamine cabinets: benefits, durability and cost",
    description:
      "Melamine: advantages, limits and recommended uses for cabinets and custom projects.",
    path: "/materiaux/melamine",
    ogAlt: "Melamine - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Melamine", url: SITE.url + "/materiaux/melamine" },
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
          heading: "Melamine arrives already finished, at a controlled cost",
          description:
            "A thermofused decor on panel. No painting stage, a washable surface, and edges that decide how long it lasts.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          badges: ["Decor", "Easy care", "Budget"],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Close-up of a melamine panel and its edge band",
          },
          caption: "Cabinet interiors and tight budgets",
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Melamine at a glance",
          intro: "A panel judged on its edge band more than on its decor.",
          rows: [
            {
              label: "Composition",
              value: "Decor paper press-fused onto a fibreboard core",
            },
            {
              label: "Humidity",
              value: "Sealed surface, core exposed through an open edge",
            },
            {
              label: "Upkeep",
              value: "Damp cloth, no abrasive product",
            },
            {
              label: "Recommended uses",
              value: "Interiors, shelves, secondary storage",
            },
            {
              label: "Relative cost",
              value: "The least expensive cabinetry line item",
            },
            {
              label: "Edge banding",
              value: "PVC band of 1 mm or more, press-glued",
            },
          ],
          note: "A chip cannot be sanded out: the affected part is replaced.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about melamine",
          items: [
            {
              q: "Does melamine yellow over time?",
              a: "Today's whites hold, even beside a window. It was the very glossy decors of older series that turned, not the panels made now.",
            },
            {
              q: "Can you drill without chipping the decor?",
              a: "Yes, with a centre-point bit and tape over the line. It is a question of tooling, not of panel.",
            },
            {
              q: "Melamine or laminate on a door?",
              a: "Laminate is thicker and takes knocks better, at a higher price. Melamine is enough as soon as a door is not opened fifty times a day.",
            },
            {
              q: "Does it suit a laundry room?",
              a: "Yes, that is one of its strongest settings. Washable surfaces, shelves that do not stain, and a cost that leaves budget for the visible areas.",
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
          heading: "Does melamine fit your budget?",
          intro:
            "We separate what gets seen from what gets stored, then split the budget.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Compare with MDF",
              href: "/materiaux/mdf",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
