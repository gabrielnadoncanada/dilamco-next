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
          heading: "How to choose the colour of your cabinets",
          description:
            "We settle the colour at your place, in the real light of the room.",
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
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Coloured cabinets seen in the light of a room",
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
          heading: "What you should know about finishes",
          rows: [
            {
              label: "By material",
              value:
                "The same shade does not read the same on MDF, on melamine or on wood.",
            },
            {
              label: "Matte, satin or gloss",
              value:
                "Matte soaks up light, gloss bounces it back, and satin sits in between.",
            },
            {
              label: "Upkeep",
              value:
                "In a kitchen, satin is the one that cleans up most easily.",
            },
            {
              label: "Best used for",
              value:
                "Neutral tones on the long runs of cabinets, colour on the island.",
            },
            {
              label: "Price against the others",
              value:
                "A custom paint costs more than a colour already on offer.",
            },
            {
              label: "How to sign off",
              value:
                "We leave a sample in the room and you look at it morning and evening.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Colour samples and sheen levels side by side",
          },
          note: "Never pick a colour off a screen, it will not be true to life.",
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
          heading: "Settle the colours of your kitchen",
          intro:
            "Free visit. You settle the colour and the sheen level before we order.",
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
