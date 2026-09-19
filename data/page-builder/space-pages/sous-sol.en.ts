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
            "Home theatre, bar, wine cellar or library, drawn once we have checked the basement.",
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
          heading: "What we build in a basement",
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
              label: "The time it takes to build the cabinetry",
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
                "We dry the space, rebuild it and put your insurance file together.",
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
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The basement in brief",
          intro:
            "What we check and what we plan before anyone talks about finishes.",
          rows: [
            {
              label: "Checked first",
              value:
                "We inspect the drain, the cracks and the moisture level before any insulation goes in.",
            },
            {
              label: "Permit",
              value:
                "The city requires one as soon as you add a wall, a bedroom or a bathroom.",
            },
            {
              label: "How long",
              value:
                "The cabinetry takes nine to fifteen weeks and goes in once the floor is finished.",
            },
            {
              label: "Materials",
              value:
                "Shelves that carry weight are made of birch plywood.",
            },
            {
              label: "Who installs",
              value:
                "Our own crew, leaving access doors to the plumbing and the wiring.",
            },
            {
              label: "Warranty",
              value:
                "The work meets the Québec Construction Code and the term is in the contract.",
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
