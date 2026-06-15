import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "MDF",
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
          eyebrow: "Dilamco - Materials",
          heading: "MDF: when and why to use it for custom work",
          description:
            "MDF is often chosen to get a very uniform surface, ideal for painted doors. It is not a universal material: the context of use and edge protection determine whether it's the right choice.",
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
          badges: ["Paint", "Uniformity", "Fronts"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Samples and uniform painted surface",
          },
          caption:
            "Very useful for certain results, less universal than people think",
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
            "Made of compressed fibres, MDF offers a uniform density that favours painted finishes and a consistent result. It becomes worthwhile when the visual quality of the surface is the priority.",
          cards: [
            {
              title: "Uniform surface",
              description: "Particularly useful for painted finishes.",
            },
            {
              title: "Consistent result",
              description:
                "Allows a cleaner visual reading on certain fronts.",
            },
            {
              title: "A good fit for certain doors",
              description:
                "When the project is aimed above all at a painted aesthetic.",
            },
            {
              title: "Sensitivity to moisture",
              description:
                "Edge protection and context remain critical.",
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
          heading: "Where MDF can be the right choice",
          intro:
            "MDF is mainly worthwhile when a uniform painted finish is a priority and the project properly manages the more sensitive areas.",
          badges: ["Painted doors", "Fronts", "Design"],
          cardTitle: "Good use of MDF",
          items: [
            "Painted doors and fronts",
            "Projects where visual uniformity matters a lot",
            "Well-executed and well-protected areas",
            "Setups combined with other, more stable materials",
          ],
          actions: [
            {
              label: "View design",
              href: "/services/design",
              variant: "default",
            },
            {
              label: "View all materials",
              href: "/materiaux",
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
          heading: "Limitations and precautions",
          intro:
            "MDF can react to water if protection is insufficient, especially at the edges. This is where execution details become decisive.",
          items: [
            {
              title: "Moisture.",
              description:
                "The risk increases if the edges or sensitive areas are poorly protected.",
            },
            {
              title: "Critical edges.",
              description:
                "They determine a large part of the long-term behaviour.",
            },
            {
              title: "Not ideal everywhere.",
              description:
                "Some structural or highly exposed areas will be better served by other options.",
            },
          ],
          actions: [
            {
              label: "View installation",
              href: "/services/installation",
              variant: "outline",
            },
            {
              label: "Compare with melamine",
              href: "/materiaux/melamine",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "Uniform painted finish on an MDF panel",
          },
          cardTitle: "Recommended approach",
          cardDescription:
            "MDF works best when used where it is strong, then combined with other materials where the use calls for more robustness.",
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
          heading: "Compare with the other options",
          items: [
            {
              title: "Full comparison",
              href: "/materiaux/comparatif",
              description: "An overview by use.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Visual comparison of several cabinet materials",
              },
              badges: ["Comparison"],
              footerCtaLabel: "View page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine",
              description: "Decor and more controlled cost.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Melamine panel for custom furniture",
              },
              badges: ["Decor"],
              footerCtaLabel: "View page",
            },
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
              title: "Colours and finishes",
              href: "/materiaux/couleurs",
              description: "The chosen finish changes the perception a lot.",
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
          heading: "FAQ - MDF",
          items: [
            {
              q: "Is MDF a low-end material?",
              a: "No. It can be excellent for certain applications, especially painted doors, when the execution is careful.",
            },
            {
              q: "Does MDF swell with moisture?",
              a: "It can react to water if protection is insufficient, especially at the edges.",
            },
            {
              q: "MDF or melamine?",
              a: "MDF often serves uniform paint; melamine serves more of a decor and a controlled cost.",
            },
            {
              q: "Is MDF suitable for the bathroom?",
              a: "It depends on ventilation, use and protection. In some contexts, other materials will be preferable.",
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
          heading: "Torn between MDF and other options?",
          intro:
            "We help you see whether MDF is consistent with your finish level, your space and your real use.",
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
