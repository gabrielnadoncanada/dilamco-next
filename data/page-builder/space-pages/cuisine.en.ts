import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom kitchen cabinets in Pierrefonds and Montréal",
    description:
      "Custom kitchen cabinets in Pierrefonds and Greater Montréal, designed, supplied and installed by Dilamco, a licensed general contractor (RBQ).",
    path: "/espaces/cuisine",
    ogAlt: "Dilamco custom kitchen cabinets",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Custom kitchens", url: SITE.url + "/espaces/cuisine" },
  ],
  service: {
    name: "Custom kitchen cabinets",
    description:
      "Design, controlled fabrication and installation of high-end custom kitchen cabinetry in Pierrefonds-Roxboro, the West Island, Montréal, Laval and Greater Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Custom kitchen cabinets",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Kitchen",
          heading: "Custom kitchen cabinets, installed by your contractor",
          description:
            "Built to the real dimensions of the room and folded into the job site. One less supplier, one quote.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our kitchens",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Custom-built", "Cabinet division"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "High-end custom kitchen cabinets in Pierrefonds",
          },
          caption: "Pierrefonds · West Island · Greater Montréal",
        },
      },
    },
    {
      id: "composition",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the mandate covers",
          columns: "2",
          items: [
            {
              title: "Island and worktop",
              description: "Proportions set to how you actually move through the room.",
              icon: "package2",
              bullets: [
                "Built-in storage and outlets",
                "Overhang sized for the seating side",
              ],
            },
            {
              title: "Storage and pantry",
              description: "Planned for daily use, not added at the end.",
              icon: "doorOpen",
              bullets: [
                "Deep drawers and dedicated spaces",
                "Direct access to the cooking zone",
              ],
            },
            {
              title: "Cabinets to the ceiling",
              description: "The full wall height used, with no gap above.",
              icon: "slidersHorizontal",
              bullets: [
                "Heights adjusted to the room",
                "More storage, less dust",
              ],
            },
            {
              title: "Design, order and install",
              description: "One team, from the plan to the final adjustment.",
              icon: "wrench",
              bullets: [
                "Measured after demolition",
                "Adjustments checked on site",
              ],
            },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Recent kitchens",
          items: [
            {
              title: "Custom kitchen, Pierrefonds",
              href: "/projets/cuisine/cuisine-sur-mesure-pierrefonds",
              description: "Precise layout and careful finish in the West Island.",
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Custom kitchen cabinet project in Pierrefonds",
              },
              badges: ["Pierrefonds"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen, Montréal",
              href: "/projets/cuisine/cuisine-sur-mesure-montreal",
              description: "Cabinets to the ceiling and a central island.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Custom kitchen project in Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen, South Shore",
              href: "/projets/cuisine/cuisine-sur-mesure-rive-sud",
              description: "Full room renovation, cabinets included.",
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Custom kitchen project on the South Shore",
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
          heading: "What sits under the finish",
          intro: "Durability comes from the parts you stop seeing once the kitchen is installed.",
          items: [
            {
              title: "Solid wood drawers",
              description: "Solid birch, joinery that holds the load",
            },
            {
              title: "Plywood bottoms",
              description: "Birch plywood, no particleboard",
            },
            {
              title: "Finishes and hardware",
              description: "Chosen for upkeep and daily use",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Material detail for a custom kitchen",
          },
          cardTitle: "Why it matters",
          cardDescription: "A sound structure avoids premature replacements.",
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
              q: "How much do custom kitchen cabinets cost?",
              a: "Usually $30,000 to $65,000, depending on dimensions, layout complexity, finishes and the coordination required. The firm price is set after the on-site survey, in the detailed quote.",
            },
            {
              q: "How long does it take?",
              a: "Nine to fifteen weeks from design sign-off to final installation. When the cabinets are part of a full renovation, the order is placed to land at the right point in the site schedule.",
            },
            {
              q: "How is this different from stock cabinets?",
              a: "Stock modules come in fixed sizes, which leaves wasted space and poorly used heights. Every custom cabinet is sized for your room, up to the ceiling where needed.",
            },
            {
              q: "What materials do you use?",
              a: "Solid birch drawers, birch plywood bottoms, soft-close hardware. Doors, finishes and countertops are chosen with you before the order goes in.",
            },
            {
              q: "Can you handle the full kitchen renovation?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: permit, demolition, plumbing, electrical, flooring, painting and cabinet installation, coordinated by one party. Schedule and budget set in the written contract.",
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
          heading: "Tell us about your kitchen project",
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our kitchens",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island, Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
