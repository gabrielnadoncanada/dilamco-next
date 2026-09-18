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
          eyebrow: "Bathroom renovation",
          heading: "A bathroom kept watertight before it is pretty",
          description:
            "Drains, ventilation, membrane and tiling redone in order, with an inspection before the walls close.",
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
          badges: ["Continuous membrane", "Plumbing inspected"],
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
          heading: "What the mandate includes",
          columns: "2",
          items: [
            {
              title: "Strip-out",
              description: "The substrate is judged bare",
              icon: "hammer",
              bullets: [
                "Shower, vanity and finishes removed",
                "Joists and plywood inspected",
                "Subfloor corrected before tiling",
              ],
            },
            {
              title: "Drains and ventilation",
              description: "What an inspector looks at",
              icon: "droplets",
              bullets: [
                "Drain slope and supply lines redone",
                "Fan ducted outdoors, never into the attic",
                "Anti-scald valve installed",
              ],
            },
            {
              title: "Membrane and tile",
              description: "The hidden layer that decides lifespan",
              icon: "shieldCheck",
              bullets: [
                "Water-resistant board on wet surfaces",
                "Membrane carried up the walls, tied to the drain",
                "Slope verified before tiling",
              ],
            },
            {
              title: "Vanity and fixtures",
              description: "The visible part, on a sound base",
              icon: "bath",
              bullets: [
                "Vanity from our partner factory",
                "Faucets, mirror, lighting",
                "Toilet, shower door, mouldings",
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
          heading: "How a bathroom unfolds",
          steps: [
            {
              number: "1",
              title: "Site measure",
              description:
                "Ventilation, plumbing and signs of leaks examined on site.",
            },
            {
              number: "2",
              title: "Strip-out and findings",
              description:
                "A damaged subfloor is photographed, then priced with you.",
            },
            {
              number: "3",
              title: "Mechanical and inspection",
              description:
                "Drains, circuits and exhaust set, checked before closing.",
            },
            {
              number: "4",
              title: "Waterproofing and tile",
              description:
                "Board, membrane, slope, then tile from floor to walls.",
            },
            {
              number: "5",
              title: "Vanity and handover",
              description:
                "Vanity, faucets, shower door and final adjustments.",
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
                "Strip-out, plumbing kept in place",
                "Floor tile",
                "Vanity, toilet, lighting",
              ],
            },
            {
              title: "Full bathroom",
              price: "$15,000 to $35,000",
              hint: "shower, tub, vanity",
              featured: true,
              includes: [
                "Continuous waterproofing membrane",
                "Drains and ventilation redone",
                "Wall and floor tile",
                "Vanity, counter, faucets",
              ],
            },
            {
              title: "Curbless shower",
              price: "top of the range",
              hint: "recessed floor, linear drain",
              includes: [
                "Floor dropped for a zero threshold",
                "Linear drain and calculated slope",
                "Custom tempered glass",
              ],
            },
          ],
          note: "Indicative ranges. The firm amount depends on how far plumbing moves and on the tile format chosen.",
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
          heading: "Bathrooms already delivered",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Curbless shower with a glass panel",
              },
              caption: "Curbless shower",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanity with quartz counter and backlit mirror",
              },
              caption: "Vanity and backlit mirror",
            },
            {
              kind: "stat",
              value: "2 checks",
              label: "Inspection before closing, then slope verified",
            },
            {
              kind: "text",
              title: "See more bathrooms",
              description:
                "Showers, vanities and finishes photographed after handover.",
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
          heading: "Frequently asked questions",
          items: [
            {
              q: "What is a waterproofing membrane?",
              a: "A continuous layer set under the tile, carried up the shower walls and tied into the drain. It stops water before it reaches the wood framing underneath.",
            },
            {
              q: "Can I have a curbless shower?",
              a: "Often yes. The floor has to drop between the joists, or the slab has to be cut, to house the drain and its slope. We verify that at the visit, before pricing.",
            },
            {
              q: "Is bathroom ventilation mandatory?",
              a: "Yes, and it has to exhaust outdoors. A fan blowing into the attic builds frost, then mould. We redo the duct whenever it stops short under the roof.",
            },
            {
              q: "What if you find rotten wood during the strip-out?",
              a: "Common after twenty years under a leaking shower. We show you the photos, price the repair in writing, then carry on. Nothing gets closed over a known problem.",
            },
            {
              q: "Do I need a permit for a bathroom?",
              a: "Replacing fixtures in place usually does not. Moving plumbing or adding a bathroom does, with an inspection before the walls are closed back up.",
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
            "We measure, check the ventilation and hand you a detailed quote.",
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
          note: "RBQ licence 8306-0806-27 · Waterproofing, ventilation and plumbing to code",
        },
      },
    },
  ],
};
