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
            "A panel covered with a thermofused decor. No painting step, a surface that wipes clean, and edges that decide how long it lasts.",
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
          badges: ["Decor", "Upkeep", "Budget"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Melamine-type decorative finishes",
          },
          caption: "Cabinet interiors and framed budgets",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What melamine brings",
          description:
            "The decor is fused to the panel at the plant. Nothing to paint, nothing to touch up, and a price well under wood.",
          cards: [
            {
              title: "Many decors",
              description:
                "Solids, textures and wood looks, available right away.",
            },
            {
              title: "Easy upkeep",
              description:
                "A damp cloth is enough, and the surface resists light scratches.",
            },
            {
              title: "Contained cost",
              description:
                "The cabinet budget drops without touching the structure.",
            },
            {
              title: "Edges decide",
              description:
                "A thin edge band that lifts lets water into the panel.",
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
            "It earns its place inside cabinet boxes, and on fronts when the budget frames the project.",
          items: [
            {
              title: "Interiors and shelves",
              description: "Washable surface, colour stable over time.",
            },
            {
              title: "Thick edge banding",
              description: "PVC of 1 mm or more, tightly bonded.",
            },
            {
              title: "Hard to repair",
              description: "A chip cannot be sanded out, the part is replaced.",
            },
          ],
          actions: [
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Compare with MDF",
              href: "/materiaux/mdf",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Decorative melamine panels",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "Melamine inside, a more stable panel wherever water and load arrive.",
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
              q: "Is melamine low-end?",
              a: "The word covers a very broad category. What changes everything is the substrate, the thickness of the decor and the quality of the edges, not the label.",
            },
            {
              q: "Does melamine swell?",
              a: "The panel under the decor does, if water gets in through a lifted edge or a drilled hole. The decor itself resists water and everyday cleaners.",
            },
            {
              q: "Melamine or MDF?",
              a: "Melamine for a decor that is already finished and a framed budget. MDF for a specific painted colour on the doors. The two combine in the same kitchen.",
            },
            {
              q: "Is it recommended in a bathroom?",
              a: "Yes, with thick, well-bonded edge banding and a fan that actually runs. Steady steam is what lifts edges, not the occasional splash.",
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
          heading: "Does melamine suit your project?",
          intro:
            "We look at the room, the use and the budget, then give you a straight answer.",
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
