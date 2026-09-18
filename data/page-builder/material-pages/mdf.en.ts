import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "MDF cabinets: finish, durability and uses",
    description:
      "MDF: advantages, limitations and recommended uses for cabinets, vanities and custom projects.",
    path: "/materiaux/mdf",
    ogAlt: "MDF - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf" },
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
          heading: "MDF gives paint the most even surface there is",
          description:
            "Compressed wood fibres, with no grain and no knots. It is the base for uniform painted doors, as long as the edges are protected.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          badges: ["Paint", "Doors", "Uniformity"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Samples and uniform painted surface",
          },
          caption: "Painted doors and smooth fronts",
        },
      },
    },
    {
      id: "overview",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What MDF does well",
          description:
            "Its density is the same throughout. Paint grips evenly and the surface gives away no grain at all.",
          cards: [
            {
              title: "No grain",
              description:
                "Nothing telegraphs through the paint once it has cured.",
            },
            {
              title: "Clean machining",
              description:
                "Mouldings and recessed panels cut without chipping.",
            },
            {
              title: "Custom colour",
              description:
                "Any shade you want, in matte, satin or gloss.",
            },
            {
              title: "Sensitive to water",
              description:
                "An open edge absorbs moisture and swells with no way back.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Where we use it, where we avoid it",
          intro:
            "MDF goes on the fronts. Structure and wet areas move to other panels.",
          items: [
            {
              title: "Painted doors and fronts",
              description: "Its strongest ground.",
            },
            {
              title: "Sealed edges",
              description: "Paint, veneer or edge banding, never left bare.",
            },
            {
              title: "Under sinks and basins",
              description: "Plywood or moisture-resistant MDF instead.",
            },
          ],
          actions: [
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Compare with melamine",
              href: "/materiaux/melamine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Uniform painted finish on an MDF panel",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "MDF for painted doors, plywood for the boxes that carry the load.",
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
              q: "Is MDF a low-end material?",
              a: "No. It is an engineered panel chosen for its surface. A well-painted MDF door with closed edges shows up in high-end kitchens everywhere.",
            },
            {
              q: "Does MDF swell with moisture?",
              a: "It swells if water reaches a bare fibre, usually through an open edge. A continuous finish and decent ventilation are enough in most rooms.",
            },
            {
              q: "MDF or melamine?",
              a: "MDF when you want a specific painted colour. Melamine when you want a decor that arrives already finished, with no painting step and a lower cost.",
            },
            {
              q: "Is MDF suitable for a vanity?",
              a: "For the doors, yes. For the box under the basin we switch to plywood or moisture-resistant MDF, because of leaks and steam.",
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
          heading: "MDF or something else for your doors?",
          intro:
            "We settle it with you, based on the finish you want, the room and the real use.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
