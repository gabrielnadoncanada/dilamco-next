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
      "Design, partner-factory production and installation of high-end custom kitchen cabinetry in Pierrefonds-Roxboro, the West Island, Montréal, Laval and Greater Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Custom kitchen cabinets",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Custom kitchen cabinets, installed by your general contractor",
          description:
            "We measure the room after demolition, order the cabinets, then install them.",
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
          image: {
            src: "/images/realisations/cuisine-shaker-en-u-dosseret-metro-01.webp",
            alt: "U-shaped kitchen with white shaker cabinets and subway tile backsplash",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Kitchens we have delivered",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Open-plan kitchen with island and full-height cabinet columns",
              },
            },
            {
              kind: "stat",
              value: "$30,000",
              label: "The starting price for a full kitchen",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "White kitchen with island and quartz countertop",
              },
            },
            {
              kind: "quote",
              quote:
                "Excellent contractor. They did my floors and other projects and we are very satisfied. I recommend them 100%.",
              author: "Mélina Desbiens, Google review (translated)",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
                alt: "Glass-front kitchen cabinets and tile backsplash",
              },
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
                alt: "Navy blue island with birch-lined drawers",
              },
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The kitchen in brief",
          rows: [
            {
              label: "How long",
              value: "Expect nine to fifteen weeks between the signed plan and installation.",
            },
            {
              label: "Typical price",
              value: "A full kitchen runs between $30,000 and $65,000, confirmed after the survey.",
            },
            {
              label: "Materials",
              value: "The cabinet boxes are birch plywood and the drawers are solid birch.",
            },
            {
              label: "Hardware",
              value: "Drawers run on hidden rails and the doors close softly.",
            },
            {
              label: "Who installs",
              value: "Our own crew, once the plumbing is redone and the floor is laid.",
            },
            {
              label: "Warranty",
              value: "The term is written into the contract and we come back to adjust the doors.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-cuisine-hero-01.webp",
            alt: "High-end custom kitchen with a central island",
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
              q: "When do you measure the kitchen?",
              a: "After demolition, once the walls sit in their final position. That is what keeps dead space from showing up beside the columns and under the ceiling.",
            },
            {
              q: "Can the kitchen stay usable during the work?",
              a: "A temporary station, sink and fridge, goes somewhere else in the house. The room itself stays closed while demolition, plumbing and flooring are under way.",
            },
            {
              q: "Who supplies the countertop and backsplash?",
              a: "We do. The countertop template is taken once the boxes are anchored, then the backsplash follows. Both are priced in the same quote as the cabinets.",
            },
            {
              q: "Do you handle the wiring and the range hood vent?",
              a: "Yes. Dedicated circuits, island outlets and the hood duct are set on the kitchen drawing and run by our trades before the cabinets arrive.",
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
          intro:
            "Free estimate, on-site survey and an itemized quote before anything is ordered.",
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
        },
      },
    },
  ],
};
