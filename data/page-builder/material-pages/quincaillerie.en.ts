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
            "Hinges, slides and dampers absorb thousands of cycles a year. It is the part that fails first when it is cheap.",
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
            alt: "Custom kitchen highlighting the quality of the hardware",
          },
          caption: "The detail nobody ever sees",
        },
      },
    },
    {
      id: "types",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we specify",
          columns: "2",
          items: [
            {
              title: "Hinges",
              description:
                "They carry the door and keep it aligned over the years.",
              icon: "doorOpen",
              bullets: [
                "Three-axis adjustment",
                "Built-in soft close",
                "Opening up to 155 degrees",
              ],
            },
            {
              title: "Drawer slides",
              description:
                "They take the load and give access to the back of the drawer.",
              icon: "slidersHorizontal",
              bullets: [
                "Full extension",
                "Rated 35 to 60 kg",
                "Undermount, out of sight",
              ],
            },
            {
              title: "Drawer systems",
              description:
                "Box and mechanism form one assembly, not two separate parts.",
              icon: "package2",
              bullets: [
                "Metal or wood sides",
                "Adjustable dividers",
                "Drawer within a drawer",
              ],
            },
            {
              title: "Specialty mechanisms",
              description:
                "For tall cabinets, corners and handleless fronts.",
              icon: "wrench",
              bullets: [
                "Lift-ups and push-to-open",
                "Corner carousels",
                "Pull-out pantries",
              ],
            },
          ],
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
              label: "Maker's warranty",
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
          heading: "Frequently asked questions",
          items: [
            {
              q: "Partial or full extension?",
              a: "A partial slide leaves the back of the drawer under the counter. Full extension pulls the whole drawer out, which makes that back storage genuinely usable.",
            },
            {
              q: "Is soft close worth the cost?",
              a: "Yes. It removes the slam, but above all it removes the impact that loosens screws and throws doors out of line over the years.",
            },
            {
              q: "Can hardware be changed later?",
              a: "A hinge swaps out easily. A slide requires the holes in the box to line up, which is rarely the case between two brands.",
            },
            {
              q: "Is it included in your quote?",
              a: "Yes. The hinge and slide models are listed in the detailed quote, along with the rest of the materials, before the contract is signed.",
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
          heading: "Let's talk about your project",
          intro:
            "We frame materials, hardware and schedule in a single quote.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "West Island, Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
