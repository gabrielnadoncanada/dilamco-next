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
            "Folding counter, storage towers and utility sink, drawn around your appliances.",
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
          image: {
            src: "/images/generated/spaces/space-laundry-hero-01.webp",
            alt: "Laundry room with a continuous folding counter above the appliances",
          },
          caption: "Continuous folding counter",
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Laundry rooms we have fitted out",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "White laundry room with raised appliances and a broom cabinet",
              },
              caption: "Raised appliances, broom cabinet",
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
              label: "How long the cabinets take to build",
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
                "We redo the water line, the drain and the vent before drawing anything.",
              href: "/contact",
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
          heading: "The laundry room in brief",
          intro:
            "What to plan for in a room that carries water, hot air and power.",
          rows: [
            {
              label: "How long",
              value:
                "It takes nine to fifteen weeks, and the plumbing is redone before we install.",
            },
            {
              label: "Typical price",
              value:
                "The price follows the number of towers, the counter area and the utility sink.",
            },
            {
              label: "Materials",
              value:
                "Birch plywood, with the backs sealed because of the steam.",
            },
            {
              label: "Hardware",
              value:
                "Anchors chosen for shelves full of bottles and boxes of detergent.",
            },
            {
              label: "Who installs",
              value:
                "Our own crew, keeping the clearance the washer and dryer need.",
            },
            {
              label: "Warranty",
              value:
                "The contract covers us coming back to adjust the doors and drawers.",
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
