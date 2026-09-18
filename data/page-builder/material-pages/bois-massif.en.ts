import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const boisMassifPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Solid wood cabinets, custom-made",
    description:
      "Solid wood: benefits, limits and recommended uses for custom cabinets, doors and furniture.",
    path: "/materiaux/bois-massif",
    ogAlt: "Solid wood - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Solid wood", url: SITE.url + "/materiaux/bois-massif" },
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
          heading: "Solid wood in the right place, not everywhere",
          description:
            "Full boards, visible grain. A material that moves with humidity, so we keep it on the parts you actually see.",
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Natural", "Doors", "Details"],
          image: {
            src: "/images/generated/materials/material-solid-wood-card-01.webp",
            alt: "Solid wood cabinet door with visible grain",
          },
          caption: "Doors and details seen up close",
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
          heading: "Solid wood at a glance",
          intro: "What to know before it goes into the quote.",
          rows: [
            {
              label: "Composition",
              value: "Full boards edge-glued, in maple, oak or walnut",
            },
            {
              label: "Humidity",
              value: "Strong reaction, swells in summer, shrinks in winter",
            },
            {
              label: "Upkeep",
              value: "Soft cloth, never leave water sitting on a joint",
            },
            {
              label: "Recommended uses",
              value: "Doors, mouldings, crowns, exposed shelves",
            },
            {
              label: "Relative cost",
              value: "The highest of the four panels",
            },
            {
              label: "Available finishes",
              value: "Stain, varnish, oil, opaque lacquer",
            },
          ],
          image: {
            src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
            alt: "Finish detail on a solid wood component",
          },
          note: "Indicative values. The species is confirmed in the quote.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about solid wood",
          items: [
            {
              q: "Does solid wood suit cabinet boxes?",
              a: "No. Under load and across wide flat surfaces it moves and eventually cups. Plywood keeps the boxes straight; solid wood stays on the visible parts.",
            },
            {
              q: "Which species should you choose?",
              a: "Maple takes light stains without blotching. Oak shows a strong grain. Walnut starts dark and costs more. The call is made on a sample, in your home.",
            },
            {
              q: "Will the joints open in winter?",
              a: "Slight movement is normal once dry air drops below 30 per cent humidity. A properly set humidifier keeps that movement invisible.",
            },
            {
              q: "Can a scratch be repaired?",
              a: "On an oiled finish, yes: spot sanding, then a fresh coat. On an opaque lacquer, the touch-up always shows a little.",
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
          heading: "Solid wood in your kitchen?",
          intro:
            "We tell you which parts are worth the price and where a panel will hold up better.",
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
        },
      },
    },
  ],
};
