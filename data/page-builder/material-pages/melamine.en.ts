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
          heading: "Melamine, the budget choice that wipes clean",
          description:
            "The panel arrives already finished, so there is nothing to paint and the surface washes down.",
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
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "What you should know about melamine",
          rows: [
            {
              label: "What it is made of",
              value:
                "A printed paper heat-bonded onto a wood fibreboard core.",
            },
            {
              label: "Does it handle humidity?",
              value:
                "The surface does. Water gets in through an edge that was not closed properly.",
            },
            {
              label: "Upkeep",
              value:
                "A damp cloth does the job, with no powder or scouring pad.",
            },
            {
              label: "Best used for",
              value:
                "Cabinet interiors, shelves and the storage nobody sees.",
            },
            {
              label: "Price against the others",
              value:
                "It is the cheapest cabinet material there is.",
            },
            {
              label: "Finishes offered",
              value:
                "Plain or wood-look decors, with a PVC edge band of at least 1 mm.",
            },
          ],
          note: "A chip cannot be repaired. We replace the part instead.",
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
          heading: "Bringing your kitchen within budget",
          intro:
            "We put melamine where it will not show and keep the money for the fronts.",
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
