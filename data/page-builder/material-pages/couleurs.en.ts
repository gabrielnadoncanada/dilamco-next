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
          heading: "Choosing a colour that holds up in daily use",
          description:
            "The shade gets decided on site, in the room's real light. The sheen level is what decides your daily upkeep.",
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
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Colour and finish choices for a custom project",
          },
          caption: "Samples seen in your own room",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Four things to look at",
          description:
            "A sample shifts with the room's orientation, the substrate and the sheen. We validate all three before ordering.",
          cards: [
            {
              title: "Light in the room",
              description:
                "A north exposure pulls grey, a south exposure warms every shade.",
            },
            {
              title: "Substrate",
              description:
                "The same tone reads differently on MDF, melamine or wood.",
            },
            {
              title: "Sheen",
              description:
                "Matte, satin or gloss change both the colour and the upkeep.",
            },
            {
              title: "Neighbouring surfaces",
              description:
                "Counter, backsplash and floor get validated together, not separately.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "care",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Three sheens, three behaviours",
          intro:
            "Sheen weighs more than colour when it comes to the cleaning you will actually do.",
          items: [
            {
              title: "Matte",
              description: "Muted and contemporary, it marks sooner.",
            },
            {
              title: "Satin",
              description: "The usual kitchen compromise, easy to wipe down.",
            },
            {
              title: "Gloss",
              description: "It bounces light back and shows every mark.",
            },
          ],
          actions: [
            {
              label: "View hardware",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Finish choices and colour samples",
          },
          cardTitle: "Common mistake",
          cardDescription:
            "Approving a colour on a screen or under a showroom's lighting.",
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
              q: "Matte or satin?",
              a: "Satin in a kitchen, in almost every case: it returns a little light, hides fingerprints and wipes clean with no special product. Matte suits rooms that see less use.",
            },
            {
              q: "Are dark colours risky?",
              a: "No, provided you have natural light or good under-cabinet lighting. A satin finish also limits the marks, which show more on dark shades.",
            },
            {
              q: "Can the colour be changed later?",
              a: "A painted door can be repainted. A melamine or veneered door gets replaced. That is a call to make before ordering, not after.",
            },
            {
              q: "How do I avoid a dated look?",
              a: "Neutral tones on the large surfaces, strong colour on what changes quickly: island, backsplash, handles. You refresh the room without redoing the cabinets.",
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
          heading: "Need help settling the palette?",
          intro:
            "We bring the samples to your home and validate them in the room's own light.",
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
