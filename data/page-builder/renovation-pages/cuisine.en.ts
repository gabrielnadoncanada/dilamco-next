import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Kitchen renovation in Montreal — turnkey",
    description:
      "Full kitchen renovation: demolition, plumbing, electrical, ventilation, cabinets, countertops. RBQ-licensed general contractor.",
    path: "/services/renovation/cuisine",
    ogAlt: "Full kitchen renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Kitchen renovation",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Kitchen renovation",
    description:
      "Full kitchen renovation by a general contractor: permit, demolition, plumbing, electrical, ventilation, flooring, custom cabinets, countertops and finishing.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Kitchen renovation",
    areaServed: [
      "Montreal",
      "West Island",
      "Laval",
      "South Shore",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Kitchen renovation",
          heading: "A kitchen rebuilt from the drain to the countertop",
          description:
            "Demolition, plumbing, electrical, ventilation, cabinets and countertop handled by the same crew.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Permit filed", "Trades coordinated", "Firm price"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Kitchen renovated by a general contractor in Montreal",
          },
          imageSide: "left",
          caption: "Kitchens delivered across Greater Montreal",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Four scopes, one contract",
          intro: "Exclusions are listed in the quote.",
          columns: "2",
          items: [
            {
              title: "Demolition and protection",
              description: "The site opened cleanly",
              icon: "hammer",
              bullets: [
                "Cabinets, countertop and finishes removed",
                "Floors and hallways protected daily",
                "Bin supplied, debris hauled away",
              ],
            },
            {
              title: "Plumbing and electrical",
              description: "Redone before the walls close",
              icon: "wrench",
              bullets: [
                "Sink, dishwasher and fridge connected",
                "Island circuits and counter outlets",
                "Range hood vented outside, then inspected",
              ],
            },
            {
              title: "Cabinets and countertop",
              description: "Supplied and set in the same mandate",
              icon: "package2",
              bullets: [
                "Cabinets from our partner factory",
                "Countertop templated, cut, installed",
                "Doors and drawers adjusted at handover",
              ],
            },
            {
              title: "Surfaces and finishing",
              description: "What you see walking in",
              icon: "layers",
              bullets: [
                "Subfloor corrected and levelled",
                "Backsplash, drywall, taping and paint",
                "Mouldings, lighting and hardware",
              ],
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a kitchen unfolds",
          steps: [
            {
              number: "1",
              title: "Measure and quote",
              description:
                "Dimensions, electrical panel, drain and structure checked on site.",
            },
            {
              number: "2",
              title: "Demolition",
              description:
                "Cabinets, countertop and old finishes stripped out.",
            },
            {
              number: "3",
              title: "Mechanical",
              description:
                "Drains, supply lines, circuits and hood duct redone.",
            },
            {
              number: "4",
              title: "Cabinets and countertop",
              description:
                "Boxes set, countertop templated, sink opening cut.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "Backsplash, paint, appliances hooked up, doors aligned.",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "grid",
        variant: "price-tiles",
        props: {
          heading: "What a kitchen costs",
          tiles: [
            {
              title: "Refresh",
              price: "from $20,000",
              hint: "existing boxes kept",
              includes: [
                "Countertop and backsplash replaced",
                "New paint and hardware",
                "Appliances reconnected",
              ],
            },
            {
              title: "Full kitchen",
              price: "$35,000 to $50,000",
              hint: "cabinets and countertop included",
              featured: true,
              includes: [
                "Demolition and debris handling",
                "Plumbing and electrical redone",
                "Cabinets and countertop installed",
                "Backsplash, paint, mouldings",
              ],
            },
            {
              title: "Kitchen and open plan",
              price: "above $50,000",
              hint: "load-bearing wall or floor included",
              includes: [
                "Beam sized by an engineer",
                "Flooring tied into adjoining rooms",
                "Lighting and ventilation reworked",
              ],
            },
          ],
          note: "Indicative ranges. The firm amount for a kitchen is set in the quote, after the on-site measure.",
          action: {
            label: "Free quote",
            href: "/contact",
            variant: "primary",
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
          heading: "Kitchens already delivered",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen open to the living room with island and tall columns",
              },
              caption: "Island and full-height columns",
            },
            {
              kind: "stat",
              value: "9 to 15 wks",
              label: "Cabinet production, scheduled in parallel",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "White kitchen with a quartz island",
              },
              caption: "Quartz island",
            },
            {
              kind: "text",
              title: "See more kitchens",
              description:
                "Layouts, storage and finishes photographed in client homes.",
              href: "/espaces/cuisine",
            },
          ],
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
              q: "How long is the kitchen unusable?",
              a: "A few weeks without a sink or appliances. We set up a temporary corner and time the cabinet delivery to the end of the mechanical work, which shortens the gap.",
            },
            {
              q: "Can the wall between kitchen and living room come out?",
              a: "Often yes. If it carries a load, an engineer sizes the beam and its supports, and that drawing goes with the permit application. We tell you at the first visit.",
            },
            {
              q: "Do I need a permit to renovate a kitchen?",
              a: "Yes as soon as a bearing wall changes, plumbing moves or a hood duct pierces the exterior wall. Replacing fixtures in the same spot usually does not require one.",
            },
            {
              q: "Where do the cabinets and countertop come from?",
              a: "Custom cabinets come from our partner factory and our crews install them. The countertop is templated once the boxes are set, then cut and fitted.",
            },
            {
              q: "What if the island moves?",
              a: "The drain, supply lines and circuits have to follow. We open the floor or run the services from the basement, and that work is priced before demolition starts.",
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
          heading: "Get your kitchen priced",
          intro:
            "On-site visit, full measure and a detailed quote, at no charge.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Permit, mechanical, cabinets and countertop",
        },
      },
    },
  ],
};
