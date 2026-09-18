import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom laundry room — general contractor",
    description:
      "Custom laundry room in Montréal, Laval and on the South Shore: design, production at our partner factory and installation by a licensed general contractor.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Dilamco custom laundry room",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    {
      name: "Custom laundry room",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Custom laundry room",
    description:
      "Design, controlled fabrication and installation of custom laundry room cabinets.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Custom laundry room",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Washable finish"],
          heading: "Custom laundry room in Montréal and Laval",
          description:
            "Folding counter, towers and sink set around the supply, drain and dryer vent.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/salle-de-lavage",
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
          heading: "A service room kept in line",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-laundry-hero-01.webp",
                alt: "Laundry room with a continuous folding counter above the appliances",
              },
              caption: "Continuous folding counter",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Storage towers and pull-out baskets in a Laval laundry room",
              },
              caption: "Towers and baskets, Laval",
            },
            {
              kind: "stat",
              value: "9–15 wks",
              label: "Cabinets delivered once the plumbing is redone",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Compact laundry room fitted into a Montréal home",
              },
              caption: "Tight footprint, Montréal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Utility sink and counter aligned along the same wall",
              },
              caption: "Sink and counter aligned",
            },
            {
              kind: "text",
              title: "Moving the appliances",
              description:
                "Supply, drain and vent follow along, and often decide the final layout.",
              href: "/contact",
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
          heading: "The laundry room at a glance",
          intro:
            "Three things run through this room: water, hot air and power.",
          rows: [
            {
              label: "Lead time",
              value: "Nine to fifteen weeks, plumbing and wiring done first",
            },
            {
              label: "Price",
              value: "Driven by the sink, the worktop and the tower count",
            },
            {
              label: "Materials",
              value: "Birch plywood, backs sealed against steam",
            },
            {
              label: "Hardware",
              value: "Anchors sized for shelves loaded with detergent",
            },
            {
              label: "Installation",
              value: "Clearances kept around the washer and dryer",
            },
            {
              label: "Warranty",
              value: "Adjustment work written into the signed contract",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-laundry-project-01.webp",
            alt: "Close-up of custom laundry room cabinetry",
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
              q: "Does a laundry room need a floor drain?",
              a: "It is not required everywhere, but it prevents expensive damage upstairs. Otherwise we fit a drain pan under the washer and a shut-off valve you can reach.",
            },
            {
              q: "Can the washer and dryer be stacked?",
              a: "Yes, if the appliances are rated for stacking. It frees half a wall for a storage tower and an access panel to the pipework.",
            },
            {
              q: "Where does the dryer vent run?",
              a: "The shortest path to an exterior wall, in rigid duct. A long run full of elbows stretches cycles out and clogs the duct faster.",
            },
            {
              q: "Can the laundry room go upstairs?",
              a: "Yes, with reinforced framing where needed, a water shut-off and a dedicated vent. We check the structure and duct route before drawing the storage.",
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
          heading: "Tell us about your laundry room",
          intro:
            "Free estimate. Plumbing constraints get surveyed on site.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/salle-de-lavage",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
