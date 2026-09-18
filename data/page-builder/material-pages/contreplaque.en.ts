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
          eyebrow: "Materials",
          heading: "Plywood carries the structure of your cabinets",
          description:
            "Cross-grain plies bonded under heat. The panel stays straight and holds the screws of hinges and drawer slides.",
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
          badges: ["Structure", "Stability", "Cabinet boxes"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Birch plywood cabinet box",
          },
          caption: "Boxes, drawers and parts under load",
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
          heading: "Plywood at a glance",
          intro: "The numbers we ask the supplier for before ordering.",
          rows: [
            {
              label: "Composition",
              value: "Birch plies cross-bonded, 13 to 15 mm thick",
            },
            {
              label: "Humidity",
              value: "Tolerant as long as the edges stay sealed",
            },
            {
              label: "Upkeep",
              value: "None, it lives hidden behind the finish",
            },
            {
              label: "Recommended uses",
              value: "Boxes, drawer bottoms, loaded shelves",
            },
            {
              label: "Relative cost",
              value: "Above MDF, below solid wood",
            },
            {
              label: "Screw hold",
              value: "Roughly twice that of a particleboard panel",
            },
            {
              label: "Grade to target",
              value: "Seven plies minimum, no visible internal voids",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Cross-grain plies visible on a plywood edge",
          },
          note: "Grade and glue matter more than the face veneer species.",
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
            {
              q: "Is plywood heavier?",
              a: "At equal thickness it weighs less than MDF. You feel it when hanging upper cabinets and on the wall anchors.",
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
          heading: "Cabinet boxes that stay square?",
          intro:
            "We write the grade, the thickness and the edge treatment into the quote.",
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
