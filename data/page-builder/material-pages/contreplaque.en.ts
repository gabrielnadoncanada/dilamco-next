import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Plywood cabinets: stability and durability",
    description:
      "Plywood: stability, screw-holding strength and durability for the structure of custom cabinets.",
    path: "/materiaux/contreplaque",
    ogAlt: "Plywood - Custom materials",
    ogImage: {
      url: "/images/generated/materials/material-plywood-hero-01.webp",
      alt: "Plywood - Custom materials",
      width: 1200,
      height: 630,
    },
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    {
      name: "Why plywood",
      url: SITE.url + "/materiaux/contreplaque",
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
            "Plywood: stability, durability and smart structure",
          description:
            "Plywood is often preferred in custom work for the structure of cabinets. Its cross-grain ply construction gives it a more stable and more predictable behaviour.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Stability", "Durability"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Custom kitchen with a durable structure",
          },
          caption:
            "Often relevant when structural strength really matters",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why it is often chosen for the structure",
          description:
            "Plywood is made of wood plies glued with cross-grain fibres. This constructive logic improves dimensional stability, mechanical strength and the holding of fasteners.",
          cards: [
            {
              title: "Cross-grain plies",
              description:
                "They limit movement and make the panel more stable.",
            },
            {
              title: "Strong screw-holding",
              description:
                "Useful for cabinets, drawers and modules subject to daily use.",
            },
            {
              title: "Robust structure",
              description:
                "Particularly relevant in long-term residential projects.",
            },
            {
              title: "Versatility",
              description: "Kitchen, storage and other demanding areas.",
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
          heading: "Where plywood is most relevant",
          intro:
            "This material gains value when structure, load and stability matter more than the decorative look alone.",
          badges: ["Cabinet boxes", "Drawers", "Long term"],
          cardTitle: "Typical applications",
          items: [
            "Cabinet boxes",
            "Load-bearing internal components",
            "Drawers and modules subject to loads",
            "Projects focused on long-term durability",
          ],
          actions: [
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "primary",
            },
            {
              label: "View hardware",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
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
          heading: "Moisture, limits and points to watch",
          intro:
            "Plywood is not waterproof. The edges, assembly, grade and finish remain decisive for the final result.",
          items: [
            {
              title: "Quality varies by grade.",
              description: "Not all plywood is created equal.",
            },
            {
              title: "Often a higher cost.",
              description:
                "The payoff comes mainly through structure and longevity.",
            },
            {
              title: "Critical final execution.",
              description:
                "Visible edges, moisture and installation strongly influence the result.",
            },
          ],
          actions: [
            {
              label: "Compare materials",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Detail of a custom kitchen in plywood",
          },
          cardTitle: "Key takeaway",
          cardDescription:
            "Plywood is often an excellent structural choice, but its real performance also depends on the execution details.",
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
          heading: "Related pages",
          items: [
            {
              title: "Full comparison",
              href: "/materiaux/comparatif",
              description:
                "Compare plywood, MDF, melamine and solid wood.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Visual comparison of several cabinet materials",
              },
              badges: ["Comparison"],
              footerCtaLabel: "View page",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "More geared toward painted finishes.",
              image: {
                src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
                alt: "MDF panel with a painted finish",
              },
              badges: ["Paint"],
              footerCtaLabel: "View page",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine",
              description: "More geared toward decor and budget.",
              image: {
                src: "/images/generated/materials/material-melamine-panel-detail-01.webp",
                alt: "Melamine panel for custom furniture",
              },
              badges: ["Decor"],
              footerCtaLabel: "View page",
            },
            {
              title: "Solid wood",
              href: "/materiaux/bois-massif",
              description: "More relevant on visible elements.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Natural solid wood finish",
              },
              badges: ["Natural"],
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
          heading: "FAQ - Plywood",
          items: [
            {
              q: "Is plywood always better than MDF?",
              a: "Not necessarily. Plywood is often very relevant for the structure; MDF can be a better fit for certain fronts and finishes.",
            },
            {
              q: "Is plywood suitable for the bathroom?",
              a: "Depending on the context, yes. The protection and installation details remain decisive.",
            },
            {
              q: "Is it more expensive?",
              a: "Often yes, in exchange for better structural quality depending on use.",
            },
            {
              q: "Is it visible once installed?",
              a: "Generally not, unless a specific design choice exposes the edges.",
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
          heading: "Want to prioritize a more durable structure?",
          intro:
            "We help you see whether plywood is relevant for your project, or whether a combination of materials will be more coherent.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Compare materials",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
