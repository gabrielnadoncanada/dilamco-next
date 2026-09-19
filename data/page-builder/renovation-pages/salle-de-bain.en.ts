import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Bathroom renovation in Montreal — turnkey",
    description:
      "Full bathroom renovation: waterproofing, membrane, ventilation, plumbing, tiling and vanity. RBQ-licensed general contractor.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Bathroom renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Bathroom renovation",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Bathroom renovation",
    description:
      "Bathroom renovation by a general contractor: permit, plumbing, ventilation, waterproofing membrane, tiling, custom vanity and finishing.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Bathroom renovation",
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
          heading: "Bathroom renovation, from the plumbing to the tile",
          description:
            "We redo the plumbing, the ventilation and the waterproofing, then we tile and set the vanity.",
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
          badges: ["Plumbing inspected", "Fully waterproofed"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom renovated by a general contractor",
          },
          imageSide: "left",
          caption: "Bathrooms in the West Island and Laval",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the quote covers",
          columns: "2",
          items: [
            {
              title: "Demolition",
              icon: "hammer",
              bullets: [
                "We take out the shower, the vanity and the finishes",
                "We inspect the floor joists and the plywood",
                "We repair the floor before anything goes back down",
              ],
            },
            {
              title: "Plumbing and ventilation",
              icon: "droplets",
              bullets: [
                "We redo the drain slope and the water supply",
                "We vent the fan outdoors, never into the attic",
                "We install a valve that prevents scalding",
              ],
            },
            {
              title: "Waterproofing and tile",
              icon: "shieldCheck",
              bullets: [
                "Water-resistant board on every wet wall",
                "Membrane carried up the walls and sealed to the drain",
                "Slope verified before the first tile",
              ],
            },
            {
              title: "Vanity and fixtures",
              icon: "bath",
              bullets: [
                "Vanity supplied by our partner factory",
                "Faucets, mirror and lighting",
                "Toilet, shower door and mouldings",
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
          heading: "How the work goes",
          steps: [
            {
              number: "1",
              title: "Visit and measurements",
              description:
                "We look at the ventilation, the plumbing and any water stains.",
            },
            {
              number: "2",
              title: "Demolition",
              description:
                "If the floor is damaged, we photograph it and price it with you.",
            },
            {
              number: "3",
              title: "Plumbing and ventilation",
              description:
                "We set the drains, the wiring and the fan, then call the inspector.",
            },
            {
              number: "4",
              title: "Waterproofing and tile",
              description:
                "We lay the membrane and let it cure before we tile.",
            },
            {
              number: "5",
              title: "Vanity and handover",
              description:
                "We install the vanity, then we walk the room with you.",
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
          heading: "What a bathroom costs",
          tiles: [
            {
              title: "Powder room",
              price: "from $10,000",
              hint: "toilet and sink, no shower",
              includes: [
                "Demolition, plumbing kept in place",
                "Floor tile",
                "Vanity, toilet and lighting",
              ],
            },
            {
              title: "Full bathroom",
              price: "$15,000 to $35,000",
              hint: "shower, tub and vanity",
              featured: true,
              includes: [
                "Waterproofing membrane over the whole shower",
                "Plumbing and ventilation redone",
                "Floor and wall tile",
                "Vanity, counter and faucets",
              ],
            },
            {
              title: "Curbless shower",
              price: "close to $35,000",
              includes: [
                "Floor lowered to remove the threshold",
                "Linear drain and calculated slope",
                "Custom tempered glass",
              ],
            },
          ],
          note: "The price changes if the plumbing moves and with the tile you choose.",
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
          heading: "Bathrooms we have redone",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Curbless shower with a glass panel",
              },
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanity with quartz counter and backlit mirror",
              },
            },
            {
              kind: "stat",
              value: "2 checks",
              label: "Before the walls close, then before tiling",
            },
            {
              kind: "text",
              title: "See more bathrooms",
              description:
                "Curbless showers, double vanities and bathroom storage.",
              href: "/espaces/salle-de-bain",
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
          heading: "Questions about bathroom renovation",
          items: [
            {
              q: "What is a waterproofing membrane?",
              a: "It is a layer set under the tile, carried up the shower walls and sealed to the drain. It stops water before it reaches the wood of the house.",
            },
            {
              q: "Can I have a shower with no threshold?",
              a: "Often yes. The floor has to be lowered between the joists, or the concrete slab cut, to house the drain and its slope. We check that at the visit.",
            },
            {
              q: "Is ventilation mandatory in a bathroom?",
              a: "Yes, and it has to exhaust outdoors. A fan blowing into the attic creates frost, then mould. We redo the duct whenever it stops short under the roof.",
            },
            {
              q: "What if you find rotten wood during demolition?",
              a: "That is common after twenty years under a leaking shower. We show you the photos, price the repair in writing, then carry on.",
            },
            {
              q: "Do I need a permit for a bathroom?",
              a: "Not to replace fixtures in the same spot. You do need one to move plumbing or add a bathroom, with an inspection before the walls close again.",
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
          heading: "Get your bathroom priced",
          intro:
            "We measure the room, check the ventilation and hand you a detailed quote.",
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
