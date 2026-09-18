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
          badges: ["Plywood", "MDF", "Hardware"],
          heading: "The materials that go into your cabinets",
          description:
            "Panels, hardware and finishes are specified by us, produced by our partner factory, then checked on delivery.",
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
      frame: { surface: "muted" },
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
              description: "All four side by side",
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
          heading: "What we specify by default",
          intro: "The cabinetry division standard, before any upgrade.",
          rows: [
            {
              label: "Boxes",
              value: "Birch plywood, 15 mm, sealed edges",
            },
            {
              label: "Fronts",
              value: "Painted MDF, melamine or solid birch by room",
            },
            {
              label: "Hardware",
              value: "Adjustable hinges and full-extension drawer slides",
            },
            {
              label: "Finishes",
              value: "Custom paint or thermofused decor",
            },
            {
              label: "Origin",
              value: "Production entrusted to our exclusive partner factory",
            },
            {
              label: "Receiving",
              value: "Every delivery counted and inspected before install",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-card-01.webp",
            alt: "Birch box and painted front of a custom cabinet",
          },
          note: "Any substitution is written into the quote, never decided on site.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Want a read on your technical choices?",
          intro:
            "We lock panels, hardware and finishes in a detailed quote before the order goes out.",
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
