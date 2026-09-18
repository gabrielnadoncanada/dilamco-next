import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Materials for custom kitchens & cabinetry",
    description:
      "Materials and comparisons for custom cabinetry: plywood, MDF, melamine, solid wood, hardware and finishes, explained by our cabinetry division.",
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
          eyebrow: "Cabinetry division",
          heading: "The materials that go into your cabinets",
          description:
            "Panels, hardware and finishes are specified by us, produced by our partner factory, then checked on delivery before installation.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our kitchens",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Plywood", "MDF", "Hardware"],
          image: {
            src: "/images/generated/materials/comparatif-materiaux-01.webp",
            alt: "Visual comparison of materials for custom cabinets",
          },
          caption: "Specified here, checked on delivery",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "How we choose",
          description:
            "The panel is decided part by part. A kitchen door and a cabinet box under a sink do not face the same conditions.",
          cards: [
            {
              title: "Humidity",
              description:
                "Bathrooms, under-sink boxes and laundry rooms call for more protection.",
            },
            {
              title: "Load",
              description:
                "Drawers, shelves and tall cabinets carry very different weights.",
            },
            {
              title: "Target finish",
              description:
                "Uniform paint, thermofused decor or natural wood grain.",
            },
            {
              title: "Edges and installation",
              description:
                "They decide how long it lasts, not just the panel itself.",
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
        variant: "link-cards-compact",
        props: {
          heading: "Materials in detail",
          columns: "3",
          items: [
            {
              title: "Plywood",
              href: "/materiaux/contreplaque",
              description: "Cabinet box structure",
            },
            {
              title: "MDF",
              href: "/materiaux/mdf",
              description: "Painted doors",
            },
            {
              title: "Melamine",
              href: "/materiaux/melamine",
              description: "Pre-finished decor",
            },
            {
              title: "Solid wood",
              href: "/materiaux/bois-massif",
              description: "Fronts and details",
            },
            {
              title: "Hardware",
              href: "/materiaux/quincaillerie",
              description: "Hinges and slides",
            },
            {
              title: "Colours and finishes",
              href: "/materiaux/couleurs",
              description: "Shade and sheen",
            },
            {
              title: "Comparison",
              href: "/materiaux/comparatif",
              description: "The four panels side by side",
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
              q: "Plywood or MDF?",
              a: "Plywood for boxes and drawers, because it holds screws. MDF for painted doors, because its surface lets no grain telegraph through.",
            },
            {
              q: "Is melamine a good choice?",
              a: "Yes, inside cabinet boxes and on shelves. Its life depends on the edges: thick, well-bonded banding, or water eventually gets in.",
            },
            {
              q: "What should be avoided in a bathroom?",
              a: "Any panel left with bare edges. Steam attacks the edges before the surface. We seal, we ventilate, and we switch to plywood under the basin.",
            },
            {
              q: "Can you renovate the whole room?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27. Permit, demolition, plumbing, electrical, flooring and cabinet installation under one written contract.",
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
          heading: "Want a read on your technical choices?",
          intro:
            "We lock the panel, hardware and finish combination into the detailed quote.",
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
