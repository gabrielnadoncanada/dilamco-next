import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const mdfPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "MDF cabinets: finish, durability and uses",
    description:
      "MDF: advantages, limitations and recommended uses for cabinets, vanities and custom projects.",
    path: "/materiaux/mdf",
    ogAlt: "MDF - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "MDF", url: SITE.url + "/materiaux/mdf" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading: "Why our painted doors are made of MDF",
          description:
            "It is the smoothest panel, with no knots and no grain, so the paint comes out perfectly even.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See the comparison",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "MDF panel with an even painted finish",
          },
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "What you should know about MDF",
          rows: [
            {
              label: "What it is made of",
              value:
                "Wood fibres mixed with resin, then pressed into a dense, even panel.",
            },
            {
              label: "Does it handle humidity?",
              value:
                "This is its weak point: a bare edge swells and never goes back flat.",
            },
            {
              label: "Upkeep",
              value:
                "A barely damp cloth and a mild soap, with no water left sitting on the joints.",
            },
            {
              label: "Best used for",
              value:
                "Painted doors and fronts with mouldings on them.",
            },
            {
              label: "Price against the others",
              value:
                "The second cheapest, just after melamine.",
            },
            {
              label: "Finishes offered",
              value:
                "Any paint colour you like, in a matte, satin or gloss finish.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
            alt: "Painted fronts in a custom kitchen",
          },
          note: "There is a version that handles water better, used under sinks.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about MDF",
          items: [
            {
              q: "Can an MDF door warp?",
              a: "Over a tall height, yes, if it stays painted on one side only. Both faces get the same number of coats, which balances the tension.",
            },
            {
              q: "Does MDF stand up to knocks?",
              a: "Less than a wood door. A bumped corner crushes instead of chipping, and the repair calls for filler then a local repaint.",
            },
            {
              q: "Can an MDF door be repainted later?",
              a: "Yes. Light sanding, bonding primer, two coats. That is its main edge over a thermofused decor, which has to be replaced instead.",
            },
            {
              q: "Is there formaldehyde in these panels?",
              a: "Standard panels in Canada meet the CARB 2 rule. The batch sheet comes with the order and is handed to you on request.",
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
          heading: "You want painted doors that stay crisp",
          intro:
            "We pick the thickness, the shape and the number of coats room by room.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See colours and finishes",
              href: "/materiaux/couleurs",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
