import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom closets and walk-ins in Montreal: pricing and design",
    description:
      "Custom closets and walk-ins in Montreal and Laval: price ranges, custom vs modular comparison, design and installation by a licensed general contractor.",
    path: "/espaces/walk-in",
    ogAlt: "Dilamco custom closet and walk-in",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Custom closets", url: SITE.url + "/espaces/walk-in" },
  ],
  service: {
    name: "Custom closets and walk-in closets",
    description:
      "Design, controlled fabrication and installation of high-end custom closets and walk-in closets in Montreal, Laval and the Greater Montreal area.",
    url: SITE.url + "/espaces/walk-in",
    serviceType: "Custom closet",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Custom-built"],
          heading: "Custom closets and walk-ins in Montréal",
          description:
            "Hanging rails, drawers and shelves worked out by garment type, built floor to ceiling.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our walk-ins",
              href: "/projets/walk-in",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "From a storage wall to a full room",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Custom walk-in closet with double-height hanging rails",
              },
              caption: "Double-height hanging rails",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Walk-in closet fitted into a bedroom corner in Laval",
              },
              caption: "Corner put to work, Laval",
            },
            {
              kind: "stat",
              value: "$3,000",
              label: "Storage wall starting point, walk-ins from $8,000",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Custom drawers and shelves in a Montréal walk-in closet",
              },
              caption: "Drawers and shelves, Montréal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Walk-in closet with a centre island and integrated lighting",
              },
              caption: "Centre island and lighting",
            },
            {
              kind: "text",
              title: "Against modular kits",
              description:
                "Fixed sizes, and shelves that sag under load after a few seasons.",
              href: "/materiaux",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Storage at a glance",
          intro:
            "A walk-in is judged five years later, drawers full and shelves loaded.",
          rows: [
            {
              label: "Price",
              value: "$3,000 to $8,000 a wall, $8,000 to $20,000 a walk-in",
            },
            {
              label: "Lead time",
              value: "Nine to fifteen weeks, driven by unit count and finishes",
            },
            {
              label: "Materials",
              value: "Solid birch drawers, plywood shelving",
            },
            {
              label: "Hardware",
              value: "Full-extension slides, soft-close hinges",
            },
            {
              label: "Installation",
              value: "After painting, before baseboards and lighting",
            },
            {
              label: "Warranty",
              value: "Door and drawer adjustments redone, term in the contract",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Close-up of drawers and shelving in a custom walk-in closet",
          },
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
              q: "How wide does a comfortable walk-in need to be?",
              a: "Allow 1.7 m wall to wall for hanging on one side and a usable aisle, 2.4 m for both sides. Below that, a storage wall serves you better.",
            },
            {
              q: "How much hanging space versus shelving?",
              a: "We count your long garments, jackets and folded stacks before drawing anything. The split comes out of what you actually own, not a standard template.",
            },
            {
              q: "Do walk-ins need doors on the units?",
              a: "A room door is usually enough. Closed fronts mainly earn their place on what is visible from the bedroom and on off-season storage.",
            },
            {
              q: "Can lighting and an outlet be added?",
              a: "Yes. LED strips under the shelves, an occupancy sensor and an outlet for a steamer are run by our electrician before the walls close up.",
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
          heading: "Tell us about your walk-in project",
          intro:
            "Free estimate. A wall survey is enough to price the storage.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our walk-ins",
              href: "/projets/walk-in",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, West Island, South Shore",
        },
      },
    },
  ],
};
