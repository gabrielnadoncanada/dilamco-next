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
          eyebrow: "Materials",
          heading: "MDF, the most even surface to paint on",
          description:
            "Pressed fibres, no knots, no grain. The base for uniform painted doors, provided the edges are sealed.",
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
          badges: ["Paint", "Doors", "Evenness"],
          image: {
            src: "/images/generated/materials/material-mdf-painted-panel-01.webp",
            alt: "MDF panel with an even painted finish",
          },
          caption: "Painted doors and smooth fronts",
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "MDF at a glance",
          intro: "The engineered panel behind painted doors, strengths and limit.",
          rows: [
            {
              label: "Composition",
              value: "Wood fibres and resin pressed to a constant density",
            },
            {
              label: "Humidity",
              value: "Weak point, a bare edge swells for good",
            },
            {
              label: "Upkeep",
              value: "Mild cleaner, never water left on a joint",
            },
            {
              label: "Recommended uses",
              value: "Painted doors, moulded panels, applied panels",
            },
            {
              label: "Relative cost",
              value: "The most affordable after melamine",
            },
            {
              label: "Available finishes",
              value: "Matte, satin or gloss paint, any colour",
            },
          ],
          image: {
            src: "/images/generated/materials/material-kitchen-durability-card-01.webp",
            alt: "Painted fronts in a custom kitchen",
          },
          note: "A moisture-resistant version exists for vanities and sink base cabinets.",
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
          heading: "Painted doors that stay crisp?",
          intro:
            "We pick the thickness, the profile and the number of coats room by room.",
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
