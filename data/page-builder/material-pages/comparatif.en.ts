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
          heading: "Which panel for which part of the cabinet",
          description:
            "No material wins everywhere. A well-planned kitchen mixes three or four, each one where it belongs.",
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
          heading: "Four panels, four roles",
          columns: ["Strength", "Where to use it"],
          rows: [
            {
              label: "Plywood",
              values: ["Stability and screw hold", "Boxes, drawers, shelves"],
            },
            {
              label: "MDF",
              values: ["Grain-free surface", "Painted doors and fronts"],
            },
            {
              label: "Melamine",
              values: ["Pre-finished, low cost", "Interiors and secondary storage"],
            },
            {
              label: "Solid wood",
              values: ["Grain and perceived value", "Doors, mouldings, visible details"],
            },
            {
              label: "Hardware",
              values: ["Comfort and lifespan", "Hinges, slides, mechanisms"],
            },
            {
              label: "Particleboard",
              values: ["Lowest cost", "Nothing that carries or moves"],
            },
          ],
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
          heading: "How to choose",
          intro: "Two questions settle the call in most rooms.",
          rows: [
            {
              label: "First question",
              value: "Does the part carry a load or meet water?",
            },
            {
              label: "Second question",
              value: "Is the target finish painted, decor or natural wood?",
            },
            {
              label: "Structure",
              value: "Plywood wherever there are screws and weight",
            },
            {
              label: "Fronts",
              value: "MDF to paint, solid wood for grain, melamine for price",
            },
            {
              label: "Budget",
              value: "Shift the spending to what is seen and touched",
            },
            {
              label: "Breaking point",
              value: "The edges and the install, not the panel itself",
            },
          ],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Cabinet panels compared side by side",
          },
          note: "The table gives the rule; the on-site survey gives the exception.",
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
          heading: "Settle the materials for your project",
          intro:
            "We weigh structure, finish, humidity and budget after the survey at your place.",
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
