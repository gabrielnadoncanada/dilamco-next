import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Materials for custom kitchens & cabinetry",
    description:
      "Materials and comparisons for custom cabinetry: plywood, MDF, melamine, solid wood, hardware and finishes, explained by our cabinetry division.",
    path: "/materiaux",
    ogAlt: "Dilamco materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "The materials that go into your cabinets",
          description:
            "We are the ones who pick the panels, the hardware and the finishes, and who check them.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our kitchens",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "pages",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Materials in detail",
          columns: "3",
          items: [
            {
              title: "Plywood",
              href: "/materiaux/contreplaque",
              description: "Cabinet box structure",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Painted doors",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine",
              description: "Pre-finished decor",
            },
            {
              title: "Solid wood",
              href: "/materiaux/bois-massif",
              description: "Fronts and mouldings",
            },
            {
              title: "Hardware",
              href: "/materiaux/quincaillerie",
              description: "Hinges and slides",
            },
            {
              title: "Colours and finishes",
              href: "/materiaux/couleurs",
              description: "Shade and sheen",
            },
            {
              title: "Comparison",
              href: "/materiaux/comparatif",
              description: "Which one to use where",
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
          heading: "What goes into your cabinets by default",
          rows: [
            {
              label: "Cabinet boxes",
              value:
                "Birch plywood 15 mm thick, with the edges sealed.",
            },
            {
              label: "Fronts",
              value:
                "Painted MDF, melamine or solid birch, depending on the room.",
            },
            {
              label: "Hardware",
              value:
                "Hinges you can adjust and drawers that pull all the way out.",
            },
            {
              label: "Finishes offered",
              value:
                "Paint in the colour of your choice, or a pre-finished decor.",
            },
            {
              label: "Who builds it",
              value:
                "Our exclusive partner factory, to our drawings and our specifications.",
            },
            {
              label: "Checking",
              value:
                "Every delivery is counted and inspected before installation day.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-card-01.webp",
            alt: "Birch box and painted front of a custom cabinet",
          },
          note: "A change of material is written into the quote, never decided mid-job.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "We help you choose your materials",
          intro:
            "Panels, hardware and finishes are written into the quote before we order.",
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
        },
      },
    },
  ],
};
