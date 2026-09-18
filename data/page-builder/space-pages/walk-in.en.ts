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
        variant: "split-image",
        props: {
          eyebrow: "Walk-in",
          heading: "Custom closets and walk-ins, wall to ceiling",
          description:
            "Hanging space, drawers and shelves sized to your real walls, installed by the crew running the renovation.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom-built", "Cabinet division"],
          image: {
            src: "/images/generated/spaces/space-walkin-hero-01.webp",
            alt: "High-end custom closet and walk-in in Pierrefonds and Greater Montreal",
          },
          caption: "Montreal · Laval · West Island",
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What the mandate covers",
          description:
            "Storage is planned around what you actually keep, then built in from wall to wall.",
          cards: [
            {
              title: "Hanging space and drawers",
              description: "Rod heights and drawer depths worked out by garment type.",
            },
            {
              title: "Corners and alcoves used",
              description: "Corners, ceiling height and wall recesses all turn into storage.",
            },
            {
              title: "Island, lighting, glass doors",
              description: "High-end walk-in options planned in, not added afterwards.",
            },
            {
              title: "Installed with the job site",
              description: "Partitions, lighting, flooring and storage coordinated by one party.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Recent walk-ins",
          items: [
            {
              title: "Walk-in, Montreal",
              href: "/projets",
              description: "Circulation and storage set for daily use.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Custom walk-in project in Montreal",
              },
              badges: ["Montreal"],
              footerCtaLabel: "View project",
            },
            {
              title: "Walk-in, Laval",
              href: "/projets",
              description: "Space maximized in a tight room.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Custom walk-in project in Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "View project",
            },
            {
              title: "Walk-in, South Shore",
              href: "/projets",
              description: "Centre island and built-in lighting.",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Custom walk-in project on the South Shore",
              },
              badges: ["South Shore"],
              footerCtaLabel: "View project",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What still holds after five years",
          intro: "A closet is judged on loaded drawers and long shelves, not on the photo taken on day one.",
          items: [
            {
              title: "Solid birch drawers",
              description: "Built for a varying daily load",
            },
            {
              title: "Plywood structure",
              description: "Shelves that do not sag",
            },
            {
              title: "Solid hardware",
              description: "Soft-close slides and hinges",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Custom kitchens",
              href: "/espaces",
              variant: "ghost",
            },
            {
              label: "Home renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Material detail for a custom walk-in",
          },
          cardTitle: "The real benefit",
          cardDescription: "A walk-in that stays tidy and usable over time.",
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
              q: "How much does a custom closet or walk-in cost?",
              a: "A custom wall closet usually runs $3,000 to $8,000, a full walk-in $8,000 to $20,000. With a centre island, built-in lighting and glass doors, expect more than $20,000.",
            },
            {
              q: "How long does it take?",
              a: "Nine to fifteen weeks from design sign-off to installation, depending on complexity. The exact schedule is confirmed with the detailed quote.",
            },
            {
              q: "What is the difference between a closet and a walk-in?",
              a: "A walk-in is a small room you step into. A custom closet is built along a wall. In both cases, hanging space, drawers and shelves are sized for your room.",
            },
            {
              q: "Is it worth it over a modular system?",
              a: "A modular system costs less up front, imposes its stock sizes and sags sooner. Custom work uses the corners and heights, with birch plywood and solid wood drawers.",
            },
            {
              q: "Can you renovate the whole room?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: partitions, door, electrical, lighting, flooring, painting and storage installation, coordinated by one party, in the written contract.",
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
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our walk-ins",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montreal, Laval, West Island, South Shore",
        },
      },
    },
  ],
};
