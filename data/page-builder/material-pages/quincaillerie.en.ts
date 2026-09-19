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
          heading: "Why hardware is what makes cabinets last",
          description:
            "A door opens thousands of times a year, and the hinge is what gives out first.",
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
          caption: "The part nobody ever sees",
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
          heading: "What we fit on every door",
          intro: "The hardware included with all our cabinets, at no extra charge.",
          rows: [
            {
              label: "What it is made of",
              value:
                "Nickel-plated steel, with a small piston that slows the door as it shuts.",
            },
            {
              label: "Does it handle humidity?",
              value:
                "Yes, and in a bathroom we insist on a nickel-plated finish that will not rust.",
            },
            {
              label: "Upkeep",
              value:
                "One turn of a screwdriver once a year, and that is all.",
            },
            {
              label: "Best used for",
              value:
                "Every door and every drawer, with no exception.",
            },
            {
              label: "Price against the others",
              value:
                "It comes to 5 to 10 per cent of the price of your cabinets.",
            },
            {
              label: "Warranty",
              value:
                "The major European brands back theirs for life.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-hardware-detail-01.webp",
            alt: "Close-up of an adjustable hinge on a cabinet door",
          },
          note: "The exact models are written into the quote before you sign.",
        },
      },
    },
    {
      id: "comparison",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "The difference between standard and high-end",
          columns: ["Standard hardware", "High-end hardware"],
          rows: [
            {
              label: "Does the drawer pull right out?",
              values: ["No, the back stays hidden", "Yes, all the way"],
            },
            {
              label: "How the door closes",
              values: ["It bangs shut", "It slows down on its own"],
            },
            {
              label: "Weight the drawer carries",
              values: ["25 kg", "35 to 60 kg"],
            },
            {
              label: "Can the door be realigned?",
              values: ["In two directions", "In all three directions"],
            },
            {
              label: "Manufacturer warranty",
              values: ["Limited in time", "Often lifetime"],
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
          heading: "Choose your hardware before we order",
          intro:
            "You open and close the models yourself, then we note the one you picked.",
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
