import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Solid wood",
    description:
      "Solid wood: benefits, limits and recommended uses for custom cabinets, doors and furniture.",
    path: "/materiaux/bois-massif",
    ogAlt: "Solid wood - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Solid wood", url: SITE.url + "/materiaux/bois-massif" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Materials",
          heading:
            "Solid wood: authenticity, character and limits to know",
          description:
            "Solid wood is prized for its grain, visual depth and perceived value. It is also a living material: its behaviour depends on the context, the finish and where it is used.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Natural", "Premium", "Visible elements"],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Custom kitchen with solid wood details",
          },
          caption:
            "The real point isn't solid wood everywhere, but solid wood in the right place",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What solid wood really brings",
          description:
            "Solid wood stands apart from MDF, melamine, plywood and veneer through its full material body and natural variations. It brings warmth, depth and perceived value, but calls for more careful design.",
          cards: [
            {
              title: "Natural aesthetics",
              description:
                "Grain, tone and texture give a more lively result.",
            },
            {
              title: "High perceived value",
              description:
                "It reinforces the high-end feel on visible elements.",
            },
            {
              title: "Possible repairability",
              description:
                "Some marks can be reworked depending on the chosen finish.",
            },
            {
              title: "Stability constraint",
              description:
                "Its behaviour varies with humidity, temperature and design.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "fit",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Where solid wood is most relevant",
          intro:
            "Solid wood is often optimal on visible elements where the look, the feel and the perception of quality matter most.",
          badges: ["Doors", "Fronts", "Details"],
          cardTitle: "A good fit for this material",
          items: [
            "Doors and fronts",
            "Decorative details",
            "Selected pieces with high visual value",
            "Projects where a natural character is sought",
          ],
          actions: [
            {
              label: "View design",
              href: "/services/design",
              variant: "default",
            },
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Limits and points to watch",
          intro:
            "Durability does not come from the material alone. It also depends on the finish, the hardware and the installation.",
          items: [
            {
              title: "Natural movement.",
              description:
                "Wood can react to humidity and temperature.",
            },
            {
              title: "Large surfaces to assess.",
              description:
                "Some areas need more stability than solid wood can offer.",
            },
            {
              title: "Maintenance depending on the finish.",
              description:
                "The result and the upkeep change with the chosen protection.",
            },
          ],
          actions: [
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "outline",
            },
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Solid wood finish detail",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "Solid wood is often better combined with more stable panels on certain structures.",
        },
      },
    },
    {
      id: "related",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Alternatives and related pages",
          items: [
            {
              title: "Plywood",
              href: "/materiaux/contreplaque",
              description: "More structure-oriented.",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Plywood detail for custom cabinets",
              },
              badges: ["Structure"],
              footerCtaLabel: "View page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Better suited to uniform painted finishes.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "MDF panel with painted finish",
              },
              badges: ["Paint"],
              footerCtaLabel: "View page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine",
              description: "More controlled decor and cost.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Melamine panel for custom furniture",
              },
              badges: ["Decor"],
              footerCtaLabel: "View page",
            },
            {
              title: "Colours and finishes",
              href: "/materiaux/couleurs",
              description: "Choosing the right visual result.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Colour and finish samples for custom furniture",
              },
              badges: ["Finish"],
              footerCtaLabel: "View page",
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
          heading: "FAQ - Solid wood",
          items: [
            {
              q: "Is solid wood always better?",
              a: "No. It is excellent for aesthetics and certain applications, but engineered panels can be more stable depending on the constraints.",
            },
            {
              q: "Is it recommended in a kitchen?",
              a: "Yes, often for doors and visible elements. The choice depends on the finish, the maintenance and the environment.",
            },
            {
              q: "How does it react to humidity?",
              a: "Wood can move with humidity. Design, finish and proper use limit these effects.",
            },
            {
              q: "Can solid wood be combined with other materials?",
              a: "Yes. It is often the most coherent approach: solid wood on visible elements, more stable panels on certain structures.",
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
          heading: "Want to use solid wood the right way?",
          intro:
            "We help you choose where it brings real value, and where other materials will be more coherent technically.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "outline",
            },
          ],
        },
      },
    },
  ],
};
