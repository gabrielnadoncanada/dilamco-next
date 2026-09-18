import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom cabinet colours and finishes",
    description:
      "Colours and finishes for custom kitchens, vanities and cabinets: choosing based on light, use and materials.",
    path: "/materiaux/couleurs",
    ogAlt: "Colours and finishes - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Colours and finishes", url: SITE.url + "/materiaux/couleurs" },
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
          heading: "Choosing a colour that survives daily use",
          description:
            "The shade is settled in your home, in the room's real light. The sheen level is what decides the upkeep.",
          actions: [
            {
              label: "Talk design and finishes",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
          badges: ["Light", "Sheen", "Upkeep"],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Coloured cabinets seen in the light of a room",
          },
          caption: "Samples seen inside your room",
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
          heading: "Finishes at a glance",
          intro: "Six markers for locking a palette without a bad surprise.",
          rows: [
            {
              label: "Substrate",
              value: "The same shade reads differently on MDF, melamine or wood",
            },
            {
              label: "Sheen",
              value: "Matte, satin, gloss, from softest to most reflective",
            },
            {
              label: "Upkeep",
              value: "Satin asks for the least cleaning in a kitchen",
            },
            {
              label: "Recommended uses",
              value: "Neutrals on large runs, colour on the island",
            },
            {
              label: "Relative cost",
              value: "Custom paint above a catalogue decor",
            },
            {
              label: "Sign-off",
              value: "Sample left in the room, seen morning and evening",
            },
          ],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Colour samples and sheen levels side by side",
          },
          note: "A screen adds blue and erases sheen, so we never sign off on one.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about colours and finishes",
          items: [
            {
              q: "Will white turn yellow?",
              a: "Today's acrylic paints hold. What yellows is an oil varnish laid over white, or a range hood that pulls cooking grease badly.",
            },
            {
              q: "Two shades in the same kitchen?",
              a: "Yes, if the split follows a whole volume. Light uppers, darker bases and island is the division that works most of the time.",
            },
            {
              q: "Can you match an existing colour?",
              a: "Yes, from a door you hand us. The reading is taken with a colorimeter, then the gap is checked on a painted sample.",
            },
            {
              q: "How do you avoid a dated look?",
              a: "Neutrals on the large runs, strong colour on what changes fast: island, backsplash, handles. The room gets refreshed without redoing the cabinets.",
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
          heading: "Need help locking the palette?",
          intro:
            "We bring the samples to your home and look at them under your own lighting.",
          actions: [
            {
              label: "Talk design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
