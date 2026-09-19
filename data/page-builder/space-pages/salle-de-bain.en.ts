import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom bathroom vanity in Laval and Montréal",
    description:
      "Custom bathroom vanity in Laval, Montréal and on both shores, designed, supplied and installed by Dilamco, a licensed general contractor (RBQ).",
    path: "/espaces/salle-de-bain",
    ogAlt: "Dilamco custom bathroom vanity",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    {
      name: "Custom bathroom",
      url: SITE.url + "/espaces/salle-de-bain",
    },
  ],
  service: {
    name: "Custom bathroom vanity",
    description:
      "Design, controlled fabrication and installation of high-end custom bathroom vanities in Montréal, Laval, the North Shore and the South Shore.",
    url: SITE.url + "/espaces/salle-de-bain",
    serviceType: "Custom bathroom vanity",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Single or double", "Washable finish"],
          heading: "Custom bathroom vanity in Laval and Montréal",
          description:
            "We draw the vanity, have it built, then install it with the rest of the room.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/salle-de-bain",
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
          heading: "Bathrooms we redid completely",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-marbre-meuble-lavabo-flottant-01.webp",
                alt: "Marble bathroom with a floating vanity",
              },
              caption: "Floating vanity, marble",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Curbless shower with a glass panel",
              },
              caption: "Curbless shower, glass panel",
            },
            {
              kind: "stat",
              value: "9–15 wks",
              label: "The wait before your vanity is installed",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanity with an LED mirror and quartz countertop",
              },
              caption: "LED mirror and quartz top",
            },
            {
              kind: "quote",
              quote:
                "Customer experience sits at the centre of what Dilamco Construction does!",
              author: "Jean-Philippe Hébert, Google review (translated)",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-douche-pierre-claire-01.webp",
                alt: "Shower clad in pale stone in a renovated bathroom",
              },
              caption: "Pale stone, West Island",
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
          heading: "The bathroom in brief",
          intro:
            "What you should know before redoing a room that gets wet every day.",
          rows: [
            {
              label: "How long",
              value:
                "The vanity takes nine to fifteen weeks to build, starting from the survey.",
            },
            {
              label: "Typical price",
              value:
                "The price depends on the width, the number of sinks and the storage you want.",
            },
            {
              label: "Materials",
              value:
                "Birch plywood, with the edges sealed so steam cannot get into the panel.",
            },
            {
              label: "Hardware",
              value:
                "Hinges and slides treated so they will not rust in a humid room.",
            },
            {
              label: "Who installs",
              value:
                "Our own crew, after the tile is set and before the faucets are hooked up.",
            },
            {
              label: "Warranty",
              value:
                "Anything wrong is fixed before you pay the final instalment.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Custom bathroom vanity in a renovated room",
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
              q: "Can the toilet or tub be moved?",
              a: "Yes, provided the supply and drain are redone. On a concrete slab that means opening the floor, which shifts both budget and calendar. We settle it during the survey.",
            },
            {
              q: "How do you keep mould from forming behind the vanity?",
              a: "A continuous membrane under the tile, sealant at every junction, and a fan sized for the room and vented outdoors rather than into the attic.",
            },
            {
              q: "How long is the bathroom out of service?",
              a: "Expect two to four weeks of work on site, depending on demolition and drying. The dates are set in the schedule, not improvised as the job goes.",
            },
            {
              q: "Is a custom vanity worth it in a small bathroom?",
              a: "That is where it changes the most: width matched to the centimetre, drawers routed around the trap, height suited to the people using it rather than to a catalogue.",
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
          heading: "Tell us about your bathroom",
          intro: "Free site visit. You leave with a line-by-line quote.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/salle-de-bain",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, North Shore, South Shore",
        },
      },
    },
  ],
};
