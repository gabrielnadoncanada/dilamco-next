import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const quincailleriePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "High-end cabinet hardware",
    description:
      "Discover why hardware plays a central role in the durability, smooth operation and perceived quality of a high-end kitchen or vanity.",
    path: "/materiaux/quincaillerie",
    ogAlt: "Dilamco high-end cabinet hardware",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    {
      name: "Hardware",
      url: SITE.url + "/materiaux/quincaillerie",
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
          heading: "Hardware decides how long your cabinets last",
          description:
            "Hinges, slides and dampers absorb thousands of cycles a year. It is the part that gives out first.",
          actions: [
            {
              label: "See our kitchens",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Hinges", "Slides", "Soft-close"],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Drawer slide and hinge inside a custom cabinet",
          },
          caption: "The detail nobody ever sees",
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
          heading: "Hardware at a glance",
          intro: "What we specify by default on every door and every drawer.",
          rows: [
            {
              label: "Composition",
              value: "Nickel-plated stamped steel, built-in hydraulic damper",
            },
            {
              label: "Humidity",
              value: "Nickel-plated finish required in bathrooms",
            },
            {
              label: "Upkeep",
              value: "One hinge adjustment a year, nothing else",
            },
            {
              label: "Recommended uses",
              value: "Every door and every drawer, no exception",
            },
            {
              label: "Relative cost",
              value: "5 to 10 per cent of the cabinetry cost",
            },
            {
              label: "Warranty",
              value: "Lifetime from the major European brands",
            },
          ],
          image: {
            src: "/images/generated/materials/material-hardware-detail-01.webp",
            alt: "Close-up of an adjustable hinge on a cabinet door",
          },
          note: "Exact models are written into the quote before signing.",
        },
      },
    },
    {
      id: "comparison",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Standard or high-end",
          columns: ["Standard", "High-end"],
          rows: [
            {
              label: "Drawer extension",
              values: ["Partial", "Full"],
            },
            {
              label: "Closing",
              values: ["Hard stop", "Damped"],
            },
            {
              label: "Load rating",
              values: ["25 kg", "35 to 60 kg"],
            },
            {
              label: "Adjustment",
              values: ["Two axes", "Three axes"],
            },
            {
              label: "Brand warranty",
              values: ["Limited", "Often lifetime"],
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
          heading: "Questions about hardware",
          items: [
            {
              q: "Partial or full extension?",
              a: "A partial slide leaves the back of the drawer under the counter. Full extension pulls the whole drawer out, which makes the rear storage genuinely usable.",
            },
            {
              q: "Is soft-close worth the cost?",
              a: "Yes. It removes the slam, but above all it avoids the impact that loosens screws and shifts doors out of line over the years.",
            },
            {
              q: "Can hardware be swapped later?",
              a: "A hinge is easy to replace. A slide requires the holes in the box to line up, which is rarely the case between two brands.",
            },
            {
              q: "What about a squeaking hinge?",
              a: "A drop of dry lubricant on the pin, then a quarter turn on the depth screw. We handle it during a visit while the warranty runs.",
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
          heading: "Choose the hardware before ordering",
          intro:
            "You open and close the models yourself, then we write the chosen reference down.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
  ],
};
