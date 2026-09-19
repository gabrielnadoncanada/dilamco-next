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
        variant: "centered",
        props: {
          badges: ["Structure", "Humidity", "Finish"],
          heading: "Which material for which part of the cabinet",
          description:
            "No material is good everywhere. A well-planned kitchen mixes three or four of them.",
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Each material and what it does best",
          columns: ["What it does best", "Where we use it"],
          rows: [
            {
              label: "Plywood",
              values: ["It stays straight and holds screws", "Cabinet boxes, drawers, shelves"],
            },
            {
              label: "MDF",
              values: ["It takes paint perfectly smooth", "Painted doors and fronts"],
            },
            {
              label: "Melamine",
              values: ["It costs little and comes pre-finished", "Cabinet interiors and shelves"],
            },
            {
              label: "Solid wood",
              values: ["It shows real wood grain", "Doors, mouldings and visible details"],
            },
            {
              label: "Hardware",
              values: ["It lasts years without loosening", "Hinges and drawer slides"],
            },
            {
              label: "Particleboard",
              values: ["It costs almost nothing", "Nothing that carries weight, with us"],
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
          heading: "How to choose",
          intro: "Two questions settle it in most rooms.",
          rows: [
            {
              label: "First question",
              value:
                "Does that part carry weight, or is it likely to get wet?",
            },
            {
              label: "Second question",
              value:
                "Do you want a painted door, a pre-finished decor or real wood?",
            },
            {
              label: "For the structure",
              value:
                "Plywood everywhere there are screws and weight to carry.",
            },
            {
              label: "For the fronts",
              value:
                "MDF if you paint, solid wood for the grain, melamine for the price.",
            },
            {
              label: "For the budget",
              value:
                "Put the money on what you see and touch every day.",
            },
            {
              label: "What fails first",
              value:
                "The edges of the panels and the installation, rarely the material itself.",
            },
          ],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Cabinet panels compared side by side",
          },
          note: "The table gives the general rule. Your room may call for something else.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about choosing materials",
          items: [
            {
              q: "Should a kitchen use a single material?",
              a: "No, and it is rarely desirable. Three or four panels share the same room, each placed where its weakness does not show.",
            },
            {
              q: "How do you compare two quotes?",
              a: "Look at box thickness, plywood species, slide brand and edge band thickness. The rest is presentation.",
            },
            {
              q: "Should particleboard be ruled out?",
              a: "Under a decor and away from water, it does the job. We keep it out of cabinet boxes, because it does not hold screws over time.",
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
          heading: "Choose the materials for your project",
          intro:
            "We go through the room with you at home, then settle every material together.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
