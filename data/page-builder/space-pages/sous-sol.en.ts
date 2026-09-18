import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const sousSolPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom basement finishing in Pierrefonds and Montréal",
    description:
      "Custom basement finishing: home theatre, bar, wine cellar and storage, built into your renovation by a licensed general contractor (RBQ) in Montréal.",
    path: "/espaces/sous-sol",
    ogAlt: "Dilamco custom basement finishing",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Basement finishing", url: SITE.url + "/espaces/sous-sol" },
  ],
  service: {
    name: "Custom basement finishing",
    description:
      "Design, fabrication and installation of high-end basement finishing: home theatre, bar, wine cellar, library and custom storage in Pierrefonds-Roxboro, the West Island, Montréal, Laval and Greater Montréal.",
    url: SITE.url + "/espaces/sous-sol",
    serviceType: "Custom basement finishing",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Turnkey"],
          heading: "Custom basement finishing in Pierrefonds",
          description:
            "Home theatre, bar, cellar or library, drawn once moisture and headroom have been checked.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Basement finishing",
              href: "/services/renovation/sous-sol",
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
          heading: "What we build below the main floor",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Home theatre with a riser platform and acoustic panels",
              },
              caption: "Home theatre, built-in riser",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Glass wine cellar built under a basement staircase",
              },
              caption: "Glass cellar under the stairs",
            },
            {
              kind: "stat",
              value: "9–15 wks",
              label: "Built-in millwork, ordered during framing",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Basement bar with counter and bottle storage",
              },
              caption: "Bar and bottle storage",
            },
            {
              kind: "text",
              title: "After water damage",
              description:
                "Drying, rebuilding and a file put together for your insurer.",
              href: "/services/renovation/apres-sinistre",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Wall library and built-in desk in a basement",
              },
              caption: "Library and built-in desk",
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
          heading: "The basement at a glance",
          intro:
            "A buried floor sets its own rules long before anyone picks a finish.",
          rows: [
            {
              label: "Prerequisite",
              value: "Drain, cracks and moisture level checked before insulating",
            },
            {
              label: "Permit",
              value: "Required as soon as a wall, bedroom or bathroom is added",
            },
            {
              label: "Lead time",
              value: "Nine to fifteen weeks for millwork, fitted after flooring",
            },
            {
              label: "Materials",
              value: "Birch plywood wherever shelves carry real weight",
            },
            {
              label: "Installation",
              value: "Mechanical access kept and hidden behind panels",
            },
            {
              label: "Warranty",
              value: "Québec Construction Code compliance, term in the contract",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Close-up of custom built-in millwork in a finished basement",
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
              q: "How much headroom does a finished basement need?",
              a: "We aim for at least two metres under the finished ceiling. Ducts and pipes get relocated or boxed in so the height is there where people walk and sit.",
            },
            {
              q: "How do you deal with moisture before finishing?",
              a: "We survey the weeping tile, inspect cracks and measure moisture levels. Fixes come before insulation, otherwise the millwork warps within two years.",
            },
            {
              q: "Can a bedroom go in the basement?",
              a: "Yes, if the window meets the required egress dimensions. Enlarging the opening means cutting the foundation, which is planned with the structure.",
            },
            {
              q: "Does a wine cellar need a refrigerated room?",
              a: "Not always. A cool, stable basement suits an everyday reserve. For a collection, we insulate the room and allow for a dedicated cooling unit.",
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
          heading: "Tell us about your basement project",
          intro:
            "Free estimate. Moisture and headroom get checked on the first visit.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island, Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
