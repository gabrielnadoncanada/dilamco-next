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
          heading: "Complete kitchen renovation, from permit to finishing",
          description:
            "The same crew handles the demolition, the plumbing, the electrical, the cabinets and the countertop.",
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
          heading: "What a kitchen renovation includes",
          columns: "2",
          items: [
            {
              title: "Demolition and protection",
              icon: "hammer",
              bullets: [
                "We remove the cabinets, the countertop and the finishes",
                "We protect the floors and the hallways every day",
                "We supply the bin and haul the debris away",
              ],
            },
            {
              title: "Plumbing and electrical",
              icon: "wrench",
              bullets: [
                "We connect the sink, the dishwasher and the fridge",
                "We add the island circuits and the counter outlets",
                "We vent the range hood outdoors, then it gets inspected",
              ],
            },
            {
              title: "Cabinets and countertop",
              icon: "package2",
              bullets: [
                "The cabinets come from our partner factory",
                "The countertop is measured in your home, cut, then set",
                "We adjust the doors and the drawers at handover",
              ],
            },
            {
              title: "Floor, backsplash and paint",
              icon: "layers",
              bullets: [
                "We correct the floor before laying the new surface",
                "We set the backsplash, tape the joints and paint",
                "We install the mouldings, the lighting and the handles",
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
          heading: "How a kitchen renovation unfolds",
          steps: [
            {
              number: "1",
              title: "Visit and quote",
              description:
                "We measure the room and check the electrical panel and the drain.",
            },
            {
              number: "2",
              title: "Demolition",
              description:
                "We take out the old cabinets, the countertop and the finishes.",
            },
            {
              number: "3",
              title: "Plumbing and electrical",
              description:
                "We redo the drains, the circuits and the range hood duct.",
            },
            {
              number: "4",
              title: "Cabinets and countertop",
              description:
                "We install the cabinets, then measure and cut the countertop.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "We set the backsplash, paint and hook up the appliances.",
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
          heading: "What a kitchen renovation costs",
          tiles: [
            {
              title: "Refresh",
              price: "from $20,000",
              hint: "we keep your current cabinets",
              includes: [
                "Countertop and backsplash replaced",
                "New paint and new handles",
                "Appliances reconnected",
              ],
            },
            {
              title: "Full kitchen",
              price: "$35,000 to $50,000",
              hint: "new cabinets and countertop",
              featured: true,
              includes: [
                "Demolition and debris removal",
                "Plumbing and electrical redone",
                "Cabinets and countertop installed",
                "Backsplash, paint and mouldings",
              ],
            },
            {
              title: "Kitchen and open plan",
              price: "above $50,000",
              hint: "with a wall opening or new flooring",
              includes: [
                "Beam sized by an engineer",
                "Flooring tied into the adjoining rooms",
                "Lighting and ventilation reworked",
              ],
            },
          ],
          note: "These are ballpark ranges. The exact price is written in the quote, after the visit to your home.",
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
          heading: "Kitchens we have delivered",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen open to the living room with island and tall columns",
              },
              caption: "Kitchen open to the living room",
            },
            {
              kind: "stat",
              value: "9 to 15 wks",
              label: "Cabinet production at our partner factory",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "White kitchen with a quartz island",
              },
              caption: "Island with a quartz countertop",
            },
            {
              kind: "text",
              title: "See more kitchens",
              description:
                "Photos taken in our clients' homes.",
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
              q: "How long will I be without a kitchen?",
              a: "A few weeks without a sink or appliances. We set up a temporary corner and have the cabinets delivered as soon as the plumbing is done.",
            },
            {
              q: "Can the wall between the kitchen and the living room come out?",
              a: "Often yes. If the wall carries a load, an engineer sizes the beam and its supports, and that drawing goes with the permit application.",
            },
            {
              q: "Do I need a permit to renovate a kitchen?",
              a: "Yes if a load-bearing wall changes, if plumbing moves or if the range hood goes through an exterior wall. Replacing fixtures in the same spot usually does not.",
            },
            {
              q: "Where do the cabinets and the countertop come from?",
              a: "The custom cabinets come from our partner factory and our own crews install them. The countertop is measured once the cabinets are in place.",
            },
            {
              q: "What if I want to move the island?",
              a: "The drain, the water lines and the wiring have to follow. We open the floor or run the services from the basement, and that work is priced before demolition.",
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
            "We come to your home, take the measurements and hand you a detailed quote, at no charge.",
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
        },
      },
    },
  ],
};
