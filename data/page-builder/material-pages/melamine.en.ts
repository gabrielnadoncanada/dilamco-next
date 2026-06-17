import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const melaminePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Melamine for cabinets: benefits and uses",
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
          eyebrow: "Dilamco - Materials",
          heading: "Melamine: uses, limits and alternatives",
          description:
            "Melamine is popular for its variety of finishes and an often more controlled cost. Its durability depends mainly on the edges, the real use and the quality of installation.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "outline",
            },
          ],
          badges: ["Decor", "Maintenance", "Controlled cost"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Melamine-type decorative finishes",
          },
          caption:
            "Relevant in some contexts, less forgiving in others",
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
            "Melamine is a panel covered with a decorative surface. It can be very relevant for some projects thanks to its variety of decors and its easy maintenance.",
          cards: [
            {
              title: "Wide variety of finishes",
              description: "Wood, solids, textures and other decors available.",
            },
            {
              title: "Easy maintenance",
              description:
                "A concrete advantage in many everyday uses.",
            },
            {
              title: "Often controlled cost",
              description:
                "Particularly appealing for certain budgets and project scopes.",
            },
            {
              title: "Edge sensitivity",
              description:
                "Impacts and infiltration are often decisive there.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "fit",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "When melamine is a good choice",
          intro:
            "Melamine becomes relevant when the project values decor, maintenance and a better-framed cost above all, while keeping a rigorous execution.",
          badges: ["Decor", "Interiors", "Budget"],
          cardTitle: "Good use of melamine",
          items: [
            "Target components or interiors",
            "Projects oriented toward decor and rationalization",
            "Configurations where the edges are well handled",
            "Choices combined with other materials for critical zones",
          ],
          actions: [
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "default",
            },
            {
              label: "View design",
              href: "/services/design",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Limits to watch for",
          intro:
            "Melamine can degrade if moisture seeps in, especially through the edges. Execution and the use context therefore matter a great deal.",
          items: [
            {
              title: "Sensitive edges.",
              description: "They must be well chosen and well executed.",
            },
            {
              title: "Moisture to manage.",
              description:
                "Wet zones require particular attention.",
            },
            {
              title: "Less discreet repairs.",
              description:
                "Damage is often harder to make invisible.",
            },
          ],
          actions: [
            {
              label: "View installation",
              href: "/services/installation",
              variant: "outline",
            },
            {
              label: "Compare with MDF",
              href: "/materiaux/mdf",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
            alt: "Decorative melamine panels",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "Melamine works best when used in a targeted way, with a clear logic on the sensitive zones.",
        },
      },
    },
    {
      id: "related",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Compare with the other options",
          items: [
            {
              title: "Full comparison",
              href: "/materiaux/comparatif",
              description: "Understand the right use of each option.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Visual comparison of several cabinet materials",
              },
              badges: ["Comparison"],
              footerCtaLabel: "View the page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "More oriented toward painted finish.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "MDF panel with a painted finish",
              },
              badges: ["Paint"],
              footerCtaLabel: "View the page",
            },
            {
              title: "Plywood",
              href: "/materiaux/contreplaque",
              description: "More oriented toward durable structure.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Plywood detail for custom cabinets",
              },
              badges: ["Structure"],
              footerCtaLabel: "View the page",
            },
            {
              title: "Colours and finishes",
              href: "/materiaux/couleurs",
              description: "The decor must stay consistent with the use.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Colour and finish samples for custom furniture",
              },
              badges: ["Finish"],
              footerCtaLabel: "View the page",
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
          heading: "FAQ - melamine",
          items: [
            {
              q: "Is melamine low-end?",
              a: "Not necessarily. It can be relevant depending on the project and the real use.",
            },
            {
              q: "Does melamine swell?",
              a: "It can degrade if moisture seeps in, especially through the edges.",
            },
            {
              q: "Melamine or MDF?",
              a: "MDF is often chosen for a uniform painted finish; melamine for decorative finishes and a more controlled cost.",
            },
            {
              q: "Is it recommended in a bathroom?",
              a: "It depends on the context. Ventilation and execution quality are critical there.",
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
          heading: "Want to know if melamine is the right fit here?",
          intro:
            "We help you see whether it is consistent for your space, or whether another combination will be more durable.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
