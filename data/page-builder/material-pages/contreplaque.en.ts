import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Plywood cabinets: stability and durability",
    description:
      "Plywood: stability, screw-holding strength and durability for the structure of custom cabinets.",
    path: "/materiaux/contreplaque",
    ogAlt: "Plywood - Custom materials",
    ogImage: {
      url: "/images/generated/materials/material-plywood-hero-01.webp",
      alt: "Plywood - Custom materials",
      width: 1200,
      height: 630,
    },
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    {
      name: "Why plywood",
      url: SITE.url + "/materiaux/contreplaque",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading: "Why our cabinet boxes are made of plywood",
          description:
            "It is the panel that stays straight over time and holds the hinge screws.",
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
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Birch plywood cabinet box",
          },
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
          heading: "What you should know about plywood",
          rows: [
            {
              label: "What it is made of",
              value:
                "Thin layers of birch glued crosswise, 13 to 15 mm thick in total.",
            },
            {
              label: "Does it handle humidity?",
              value:
                "Yes, as long as the edges of the panel are properly sealed.",
            },
            {
              label: "Upkeep",
              value:
                "None, because it stays hidden behind the doors and the finish.",
            },
            {
              label: "Best used for",
              value:
                "Cabinet boxes, drawer bottoms and any shelf that carries weight.",
            },
            {
              label: "Price against the others",
              value:
                "Dearer than MDF, cheaper than solid wood.",
            },
            {
              label: "Does it hold screws?",
              value:
                "About twice as well as particleboard, so the hinges stay put.",
            },
            {
              label: "What to ask for",
              value:
                "At least seven layers, and no visible gaps inside the thickness of the panel.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Cross-grain plies visible on a plywood edge",
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
          heading: "Questions about plywood",
          items: [
            {
              q: "Is plywood needed under the sink?",
              a: "Yes, that is where it pays off fastest. With a sealed edge and a removable bottom, a slow leak is repaired without pulling the box apart.",
            },
            {
              q: "How many plies should you look for?",
              a: "Seven plies over 13 mm for a cabinet box. Fewer plies means thicker layers, so more voids and more dips under the veneer.",
            },
            {
              q: "Is an exposed edge acceptable?",
              a: "Yes, several clients ask for it on shelves and island ends. It then needs a void-free veneer, sanded fine and varnished.",
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
          heading: "You want cabinet boxes that stay square",
          intro:
            "The quality of the panel and its thickness are written into your quote.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Compare materials",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
