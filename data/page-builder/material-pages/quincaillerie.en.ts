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
          eyebrow: "Dilamco - Materials",
          heading:
            "Cabinet hardware: a key element of a kitchen's durability",
          description:
            "The quality of a kitchen or vanity doesn't come only from the visible materials. The mechanisms that open, close and support doors and drawers play a central role in durability, smooth operation and comfort of use.",
          actions: [
            {
              label: "Discover our custom kitchens",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "See our turnkey approach",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Materials", "Durability", "Perceived quality"],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Custom kitchen highlighting the quality of the hardware",
          },
          caption:
            "Hinges, slides and mechanisms directly shape the everyday experience",
        },
      },
    },
    {
      id: "importance",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why is hardware so important?",
          description:
            "Hardware covers all the mechanisms that make cabinets functional: hinges, slides, opening systems and closing mechanisms. These components directly influence door stability, drawer smoothness, noise level, wear resistance and the perceived quality of the furniture over time. In a project built to last, it isn't a detail. It is an integral part of the overall quality.",
          cards: [
            {
              title: "Stronger, more stable drawers",
              description:
                "A solid mechanical base keeps the movement crisp even under load and with frequent use.",
            },
            {
              title: "Smoother, quieter opening",
              description:
                "Soft-close and full extension make a concrete difference to everyday comfort.",
            },
            {
              title: "Less wear and fewer repairs",
              description:
                "Robust mechanisms reduce impacts, misalignments and premature wear.",
            },
            {
              title: "Better-protected overall durability",
              description:
                "Hardware supports the sense of quality and the longevity of the furniture.",
            },
          ],
          columns: "2",
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
          heading:
            "The different types of hardware used in cabinets",
          intro:
            "A high-end kitchen relies on several mechanisms, each with a concrete impact on durability and the user experience.",
          columns: "2",
          items: [
            {
              title: "Cabinet hinges",
              description:
                "They allow precise opening and closing of doors, with fine adjustments and soft-close.",
              icon: "doorOpen",
              bullets: [
                "Precise door alignment",
                "Three-dimensional adjustment",
                "Soft, quiet closing",
              ],
            },
            {
              title: "Drawer slides",
              description:
                "They ensure smooth movement, drawer stability and full access to the storage.",
              icon: "slidersHorizontal",
              bullets: [
                "Full extension",
                "Soft-close",
                "Stability even under load",
              ],
            },
            {
              title: "Drawer systems",
              description:
                "The structure-plus-mechanism assembly must stay consistent to provide lasting use.",
              icon: "package2",
              bullets: [
                "Withstands intensive daily use",
                "Improves the perception of quality",
                "Reduces premature wear",
              ],
            },
            {
              title: "Specialized mechanisms",
              description:
                "Solutions for tall cabinets, handleless systems or more technical storage.",
              icon: "wrench",
              bullets: [
                "Smoother opening",
                "A cleaner design",
                "Better ergonomics",
              ],
            },
          ],
        },
      },
    },
    {
      id: "criteria",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "How to recognize quality hardware",
          description:
            "Several criteria help assess the robustness and relevance of a mechanism. We look at its load capacity, the quality of the movement, the precision of the adjustments and how it holds up after many cycles of use.",
          cards: [
            {
              title: "Load capacity",
              description:
                "The mechanism must support a significant weight without deformation or excessive play.",
            },
            {
              title: "Full extension",
              description:
                "The drawer opens fully for easier access and better use of the space.",
            },
            {
              title: "Soft-close",
              description:
                "The system slows the closing, limiting impacts, noise and wear.",
            },
            {
              title: "Precision of adjustments",
              description:
                "Precise adjustments keep doors aligned and the furniture stable over time.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "application",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "A concrete application in a durable drawer",
          intro:
            "A drawer's performance depends both on its construction and on the quality of its mechanisms. Structure and hardware have to work together.",
          items: [
            {
              title: "Solid birch wood structure.",
              description:
                "It reinforces the overall strength and better supports repeated opening cycles.",
            },
            {
              title: "Birch plywood bottom.",
              description:
                "It helps maintain stability and better support the weight of the contents.",
            },
            {
              title: "Robust full-extension slides.",
              description:
                "With soft-close, they improve smoothness while reducing long-term wear.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our kitchens",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-birch-drawer-detail-01.webp",
            alt: "Custom kitchen detail showing a durable drawer",
          },
          cardTitle: "Example of a durable structure",
          cardDescription:
            "This combination improves stability, weight resistance and drawer smoothness, while reducing premature wear.",
        },
      },
    },
    {
      id: "comparison",
      frame: { surface: "muted" },
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Standard hardware vs high-end hardware",
          intro:
            "The differences quickly become visible in everyday use.",
          columns: ["Standard hardware", "High-end hardware"],
          rows: [
            {
              label: "Drawer extension",
              values: ["Partial", "Full extension"],
            },
            {
              label: "Closing",
              values: ["No damper", "Soft and dampened"],
            },
            {
              label: "Load capacity",
              values: ["Lower", "High"],
            },
            {
              label: "Durability",
              values: ["Average", "Built to last"],
            },
            {
              label: "Comfort",
              values: ["Functional", "Smooth and quiet"],
            },
          ],
        },
      },
    },
    {
      id: "premium-impact",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Why it's essential in a high-end kitchen",
          intro:
            "In a premium kitchen, quality doesn't come only from the visible materials. The mechanisms directly influence how smoothly things move, how quiet they are in use and the sense of solidity. Robust hardware helps maintain door alignment, drawer stability and a consistent experience for years.",
          badges: ["Smoothness", "Quietness", "Durability"],
          cardTitle: "What good hardware brings",
          items: [
            "Stronger, more stable drawers",
            "Smoother opening and closing",
            "Less everyday noise",
            "Fewer mechanical impacts",
            "Fewer repairs over the long term",
            "Better overall durability of the furniture",
          ],
          actions: [
            {
              label: "See our custom kitchens",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "Understand our fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "further",
      frame: { divider: "top", surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Explore the other elements that influence the durability of a custom project",
          intro:
            "Hardware is an important link, but it always fits into a broader logic of design, structure and materials.",
          items: [
            {
              title: "Solid wood",
              href: "/materiaux/bois-massif",
              description:
                "Understand its role in the strength of cabinets and drawers.",
              image: {
                src: "/images/generated/materials/material-solid-wood-card-01.webp",
                alt: "Solid wood for custom cabinets",
              },
              badges: ["Materials", "Structure"],
              footerCtaLabel: "View solid wood",
            },
            {
              title: "Plywood",
              href: "/materiaux/contreplaque",
              description:
                "Why it improves stability and durability in critical elements.",
              image: {
                src: "/images/generated/materials/material-plywood-card-01.webp",
                alt: "Plywood used in a custom kitchen",
              },
              badges: ["Materials", "Stability"],
              footerCtaLabel: "View plywood",
            },
            {
              title: "Custom kitchen",
              href: "/espaces/cuisine",
              description:
                "See how these choices fit into a complete project.",
              image: {
                src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
                alt: "High-end custom kitchen",
              },
              badges: ["Spaces", "Kitchen"],
              footerCtaLabel: "View kitchens",
            },
            {
              title: "Bathroom vanity",
              href: "/espaces/salle-de-bain",
              description:
                "Explore the same principles applied to a more humid environment.",
              image: {
                src: "/images/generated/materials/material-hardware-detail-01.webp",
                alt: "Custom bathroom vanity",
              },
              badges: ["Spaces", "Bathroom"],
              footerCtaLabel: "View the bathroom",
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
          heading: "FAQ",
          intro:
            "Answers to frequently asked questions about cabinet hardware.",
          items: [
            {
              q: "What's the difference between a standard slide and a full-extension slide?",
              a: "A standard slide doesn't open the drawer all the way. A full-extension slide gives access to the entire depth of the drawer, which improves everyday use and organization.",
            },
            {
              q: "Why is soft-close important?",
              a: "It reduces impacts when closing, improves comfort of use, lowers noise and helps extend the life of the mechanism.",
            },
            {
              q: "Does hardware really influence a kitchen's durability?",
              a: "Yes. Doors and drawers are used very frequently. Robust, well-designed hardware helps preserve stability, alignment and smoothness for many years.",
            },
            {
              q: "Does high-end hardware change only comfort, or also overall quality?",
              a: "Both. It improves everyday comfort, but it also contributes to perceived quality, wear resistance and the consistency of furniture built to last.",
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
          heading: "Get a quote for a durable project",
          intro:
            "We help you frame the right choices in materials, hardware and fabrication for a result that's more stable over the long term.",
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
          note: "Montréal, Laval and the South Shore",
        },
      },
    },
  ],
};
