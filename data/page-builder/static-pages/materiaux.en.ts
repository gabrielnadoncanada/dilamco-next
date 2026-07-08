import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Materials for custom kitchens & cabinetry",
    description:
      "Materials and comparisons for custom kitchens, vanities and cabinets: plywood, MDF, melamine, solid wood, hardware and finishes.",
    path: "/materiaux",
    ogAlt: "Dilamco materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
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
          heading: "Materials, durability, finish and performance",
          description:
            "The choice of cabinet materials — solid wood, plywood, MDF, melamine, hardware and finishes — determines a project's durability and look. The right material depends on real use: we prioritize consistency between structure, hardware, finish and installation for a more durable result.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our kitchens",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Plywood", "MDF", "Melamine", "Hardware"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Visual comparison of materials for custom cabinets",
          },
          caption:
            "A materials page should show the material itself, not a generic kitchen",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "How we choose materials",
          description:
            "Performance does not depend only on the chosen panel. It also depends on moisture, usage loads, impact resistance, stability over time and assembly details.",
          cards: [
            {
              title: "Moisture",
              description:
                "Kitchen, bathroom and laundry room don't impose the same constraints.",
            },
            {
              title: "Loads and use",
              description:
                "Drawers, cabinet boxes and doors don't all require the same level of robustness.",
            },
            {
              title: "Expected finish",
              description:
                "A uniform painted finish isn't handled the same way as a melamine décor or a natural wood look.",
            },
            {
              title: "Final execution",
              description:
                "Edges, hardware and installation have a direct impact on durability.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "pages",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Explore the materials pages",
          intro:
            "Each page explains the trade-offs, uses and limits of the topic.",
          items: [
            {
              title: "Why plywood",
              description: "Stable, durable structure.",
              href: "/materiaux/contreplaque",
              image: {
                src: "/images/generated/materials/material-plywood-hero-01.webp",
                alt: "Plywood detail for custom cabinets",
              },
              badges: ["Structure", "Durability"],
              footerCtaLabel: "View plywood",
            },
            {
              title: "MDF",
              description: "Uniformity and painted finish.",
              href: "/materiaux/mdf",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "MDF panel with a painted finish",
              },
              badges: ["Finish", "Paint"],
              footerCtaLabel: "View MDF",
            },
            {
              title: "Melamine",
              description: "Décor and controlled cost.",
              href: "/materiaux/melamine",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Melamine panel for custom furniture",
              },
              badges: ["Décor", "Budget"],
              footerCtaLabel: "View melamine",
            },
            {
              title: "Solid wood",
              description: "Natural texture and character.",
              href: "/materiaux/bois-massif",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Natural solid wood finish",
              },
              badges: ["Natural", "Visible"],
              footerCtaLabel: "View solid wood",
            },
            {
              title: "Hardware",
              description: "Comfort, precision and longevity.",
              href: "/materiaux/quincaillerie",
              image: {
                src: "/images/generated/materials/material-hardware-hero-01.webp",
                alt: "Premium hardware for cabinets and drawers",
              },
              badges: ["Use", "Durability"],
              footerCtaLabel: "View hardware",
            },
            {
              title: "Colours and finishes",
              description: "Visual cohesion and maintenance.",
              href: "/materiaux/couleurs",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Colour and finish samples for a custom kitchen",
              },
              badges: ["Style", "Maintenance"],
              footerCtaLabel: "View colours and finishes",
            },
            {
              title: "Materials comparison",
              description: "A quick overview to frame the choice.",
              href: "/materiaux/comparatif",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Visual comparison of several cabinet materials",
              },
              badges: ["Comparison", "Decision"],
              footerCtaLabel: "View the comparison",
            },
          ],
        },
      },
    },
    {
      id: "quick-compare",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Quick comparison",
          intro:
            "For a complete read, then check the detailed comparison.",
          columns: ["Overall performance", "Typical use"],
          rows: [
            {
              label: "Plywood",
              values: [
                "Stable, durable structure",
                "Cabinet boxes and demanding structures",
              ],
            },
            {
              label: "MDF",
              values: [
                "Uniformity and painted look",
                "Painted doors and fronts",
              ],
            },
            {
              label: "Melamine",
              values: [
                "Varied décor and controlled cost",
                "Interiors and targeted applications",
              ],
            },
            {
              label: "Solid wood",
              values: [
                "Perceived value and natural texture",
                "Visible elements and premium details",
              ],
            },
            {
              label: "Hardware",
              values: [
                "Comfort and precise operation",
                "Doors, drawers and mechanisms",
              ],
            },
          ],
        },
      },
    },
    {
      id: "premium",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What truly makes it high-end",
          intro:
            "A premium result comes from a coherent system: the right materials in the right place, reliable hardware, solid fabrication details and clean installation adjustments.",
          badges: ["Structure", "Hardware", "Installation"],
          cardTitle: "The points that really change the result",
          items: [
            "Stable structures suited to the use",
            "Reliable, well-adjusted hardware",
            "Edge protection and finishing details",
            "Precise installation and adjustments",
          ],
          actions: [
            {
              label: "View hardware",
              href: "/materiaux/quincaillerie",
              variant: "primary",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
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
          heading: "Materials FAQ",
          items: [
            {
              q: "Plywood or MDF?",
              a: "They excel in different places. Plywood, more stable thanks to its cross-grain plies, is often preferred for cabinet structure and drawers. MDF offers a smoother surface, ideal for certain painted fronts. The choice depends on the role of the component, moisture and the targeted durability — and the best approach often combines the two.",
            },
            {
              q: "Is melamine a good choice?",
              a: "Yes, in the right contexts. Melamine offers a wide choice of finishes at a controlled cost and an easy-to-maintain surface. Its durability depends mainly on the quality of the edges and installation precision: well installed, it's relevant for many projects, especially cabinet interiors and budget-framed jobs.",
            },
            {
              q: "Is soft-close hardware worth it?",
              a: "Yes, provided the system is reliable and well installed. Soft-close reduces impact and noise, improves daily comfort and extends the life of doors and drawers, which are used constantly. It's one of the often-invisible details that most distinguish a durable kitchen from an entry-level one.",
            },
            {
              q: "Which materials should be avoided in a bathroom?",
              a: "In a bathroom, you avoid materials that are poorly protected against moisture or whose edges are poorly sealed, because steam and splashes seep in over time. You favour stable structures, moisture-resistant finishes and durable hardware, combined with good ventilation and careful installation — it's the execution that protects durability.",
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
          heading: "Need advice on the right technical choices?",
          intro:
            "We help you choose a combination of materials, hardware and finish that's consistent with your space and your priorities.",
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
