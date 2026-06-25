import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const comparatifPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Materials comparison",
    description:
      "Materials comparison for custom kitchens, vanities and cabinets: MDF, melamine, plywood and solid wood.",
    path: "/materiaux/comparatif",
    ogAlt: "Custom materials comparison",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Comparison", url: SITE.url + "/materiaux/comparatif" },
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
          heading: "Materials comparison: choosing based on use",
          description:
            "There is no universal material. The right choice depends on the space, humidity, targeted durability, the desired finish and the quality of execution.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Humidity", "Finish"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Materials comparison for a custom kitchen",
          },
          caption: "The right choice always depends on the real context",
        },
      },
    },
    {
      id: "table",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Comparison table",
          intro: "A general summary to adapt to your real context.",
          columns: ["Performance générale", "Usage recommandé"],
          rows: [
            {
              label: "Plywood",
              values: ["Very good stability", "Demanding structures"],
            },
            {
              label: "MDF",
              values: ["Good uniformity", "Painted doors and fronts"],
            },
            {
              label: "Melamine",
              values: [
                "Variable depending on context",
                "Targeted storage and decor",
              ],
            },
            {
              label: "Solid wood",
              values: ["High perceived value", "Visible aesthetic elements"],
            },
          ],
        },
      },
    },
    {
      id: "détails",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Detailed pages",
          intro: "Dig deeper into each material according to its own logic.",
          items: [
            {
              title: "Why plywood",
              href: "/materiaux/contreplaque",
              description: "Stability and structural integrity.",
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
              description: "Uniformity and painted finish.",
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
              description: "Decorative finishes and controlled cost.",
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
              description: "Natural texture and character.",
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
      id: "limits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What the table doesn't show",
          description:
            "Real performance also depends on edge protection, assembly quality, hardware and installation adjustments. The table helps frame the choice, but it doesn't replace a decision suited to the project.",
          cards: [
            {
              title: "Edges",
              description:
                "They become critical as soon as there is humidity, impact or frequent cleaning.",
            },
            {
              title: "Assembly",
              description: "Good execution changes how it holds up over time.",
            },
            {
              title: "Hardware",
              description:
                "Comfort and durability also depend on the mechanisms.",
            },
            {
              title: "Installation",
              description:
                "Final adjustments influence how it actually performs.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "errors",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Mistakes to avoid",
          intro:
            "Poor choices often come from an oversimplified reading: looks alone, overlooking humidity, or underestimating finishing details.",
          badges: ["Real use", "Humidity", "Execution"],
          cardTitle: "Keep in mind",
          items: [
            "Don't choose based on looks alone",
            "Account for humidity",
            "Don't underestimate finishing details",
            "Assess the real role of each piece",
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
          heading: "FAQ - Materials comparison",
          items: [
            {
              q: "MDF or melamine?",
              a: "MDF often serves a uniform painted finish; melamine is better suited to a decorative look and controlled cost.",
            },
            {
              q: "Is plywood always preferable?",
              a: "Not always, but it is often relevant for durable structure.",
            },
            {
              q: "Solid wood everywhere?",
              a: "Not necessarily. It is often best when targeted at visible elements.",
            },
            {
              q: "Can several materials be combined?",
              a: "Yes. It is often the best strategy to balance performance, look and budget.",
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
          heading: "Need a comparison tailored to your project?",
          intro:
            "We help you weigh structure, finish, humidity and budget to make a smarter choice.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View all materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
