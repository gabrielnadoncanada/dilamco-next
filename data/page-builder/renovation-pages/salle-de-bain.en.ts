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
          heading: "A bathroom rebuilt first for its waterproofing",
          description:
            "Plumbing, ventilation, membrane, tiling and vanity. One contract, one licence, inspected work.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Waterproofing membrane", "Inspected plumbing", "Firm price"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom renovated by a general contractor",
          },
          caption: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the mandate covers",
          intro: "The exact scope is written into the quote.",
          columns: "2",
          items: [
            {
              title: "Demolition and strip-out",
              description: "We open up to see the real state of the framing",
              icon: "hammer",
              bullets: [
                "Shower, vanity and finishes removed",
                "Plywood and joists checked under the shower",
                "Subfloor and framing repaired before any new work",
              ],
            },
            {
              title: "Plumbing and ventilation",
              description: "The work that has to pass inspection",
              icon: "droplets",
              bullets: [
                "Drains and supply redone at the required slope",
                "Exhaust fan vented outside, never into the attic",
                "Anti-scald valve and inspection before closing up",
              ],
            },
            {
              title: "Waterproofing and tiling",
              description: "The invisible stage that sets the lifespan",
              icon: "shieldCheck",
              bullets: [
                "Water-resistant board on every wet surface",
                "Continuous membrane up the walls and tied to the drain",
                "Slope checked before the tile goes down",
              ],
            },
            {
              title: "Vanity and finishing",
              description: "The visible part, set on a sound base",
              icon: "bath",
              bullets: [
                "Custom vanity supplied by our partner factory",
                "Countertop, faucets, mirror and lighting",
                "Toilet, shower door, paint and mouldings",
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
          heading: "The job, step by step",
          steps: [
            {
              number: "1",
              title: "Visit and quote",
              description:
                "Measurements, ventilation, plumbing and signs of leaks checked on site.",
            },
            {
              number: "2",
              title: "Contract and permit",
              description:
                "Scope, price and schedule signed, application filed if plumbing moves.",
            },
            {
              number: "3",
              title: "Demolition",
              description:
                "Full strip-out. A damaged subfloor is priced with you first.",
            },
            {
              number: "4",
              title: "Mechanical and inspection",
              description:
                "Drains, circuits, ventilation, then inspection before the walls close.",
            },
            {
              number: "5",
              title: "Waterproofing, finishing, handover",
              description:
                "Membrane, tile, vanity, hookups and final walkthrough with you.",
            },
          ],
        },
      },
    },
    {
      id: "permis",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Permits, ventilation and compliance",
          intro:
            "These are the points an inspector checks and an insurer looks at after water damage.",
          items: [
            {
              title: "Plumbing relocated",
              description: "Permit required, inspection before the walls close.",
            },
            {
              title: "New bathroom",
              description: "Permit required almost everywhere, with drawings.",
            },
            {
              title: "Ventilation is mandatory",
              description: "Exhaust to the outside, never into the attic.",
            },
            {
              title: "Anti-scald protection",
              description: "Shower and tub valves must limit the temperature.",
            },
            {
              title: "Like-for-like replacement",
              description: "Usually no permit. We confirm with the city.",
            },
          ],
          actions: [
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Shower prepared with a waterproofing membrane",
          },
          cardTitle: "What the insurer looks at",
          cardDescription:
            "Compliant work and a licensed contractor both weigh on how a water damage claim is handled.",
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
              q: "What does a bathroom renovation cost?",
              a: "A complete bathroom most often lands between $15,000 and $35,000. The high end covers a curbless shower, heated flooring or relocated plumbing.",
            },
            {
              q: "Do I need a permit?",
              a: "A like-for-like replacement usually does not need one. As soon as plumbing is relocated or a bathroom is added, a permit is required, with inspection before the walls close.",
            },
            {
              q: "How long does the job take?",
              a: "A few weeks on site. Curing times for mortar, grout and paint cannot be compressed, and the municipal inspection is booked before the walls close. The schedule comes with the contract.",
            },
            {
              q: "What is a waterproofing membrane?",
              a: "A continuous layer set under the shower tile, run up the walls and tied into the drain. It keeps water away from the framing. We install it on every wet surface.",
            },
            {
              q: "What if you find water damage during demolition?",
              a: "It is common after twenty years. We show you what is affected, document the condition and submit the repair cost in writing before going further. Nothing is closed up over a known problem.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes, with the scope and duration written into the contract. RBQ licence 8306-0806-27, valid with no restrictions since 2004, $40,000 bond, no claims on file. Liability and job-site insurance in force.",
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
          heading: "Have your bathroom assessed",
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Compliant waterproofing, ventilation and plumbing",
        },
      },
    },
  ],
};
