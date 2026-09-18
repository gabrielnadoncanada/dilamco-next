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
          heading: "A kitchen rebuilt in full, under one contract",
          description:
            "Demolition, plumbing, electrical, ventilation, cabinets and countertop. Permit included, schedule in writing.",
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
          badges: ["Permit included", "Coordinated trades", "Firm price"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Kitchen renovated by a general contractor in Montreal",
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
              title: "Permit and demolition",
              description: "What is settled before the cabinets arrive",
              icon: "fileCheck",
              bullets: [
                "Permit confirmed and filed with your city",
                "Old cabinets, countertop and finishes removed",
                "Debris handling and disposal",
              ],
            },
            {
              title: "Plumbing, electrical, ventilation",
              description: "The work done before the walls close",
              icon: "wrench",
              bullets: [
                "Sink, dishwasher and refrigerator lines connected",
                "Circuits, island receptacles, recessed lighting",
                "Hood vented outside, inspection before closing up",
              ],
            },
            {
              title: "Floors, walls and ceilings",
              description: "The base everything else aligns to",
              icon: "layers",
              bullets: [
                "Subfloor repaired and levelled",
                "New flooring or clean transition to existing",
                "Drywall, taping, paint, backsplash and mouldings",
              ],
            },
            {
              title: "Cabinets, countertop, finishing",
              description: "Supplied and installed by the same crew",
              icon: "package2",
              bullets: [
                "Custom cabinets supplied by our partner factory",
                "Countertop templated, cut and set",
                "Appliances connected, doors and drawers adjusted",
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
                "Dimensions, electrical panel, plumbing and structure checked on site.",
            },
            {
              number: "2",
              title: "Contract and drawings",
              description:
                "Scope, price, schedule and layout drawings signed before any purchase.",
            },
            {
              number: "3",
              title: "Permit and demolition",
              description:
                "Application filed with your city, then the room is stripped.",
            },
            {
              number: "4",
              title: "Mechanical and inspection",
              description:
                "Plumbing, electrical and ventilation inspected before the walls close.",
            },
            {
              number: "5",
              title: "Cabinets and handover",
              description:
                "Install, countertop, hookups, adjustments and final walkthrough with you.",
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
          heading: "Permits: when do you need one?",
          intro:
            "Requirements change from one city to the next. We confirm your case and file the application.",
          items: [
            {
              title: "Load-bearing wall modified",
              description: "Permit required, with an engineer's drawing for the beam.",
            },
            {
              title: "Plumbing relocated",
              description: "Permit and inspection before the walls are closed.",
            },
            {
              title: "New exterior opening",
              description: "Hood outlet or enlarged window: permit required.",
            },
            {
              title: "Replacement in the same footprint",
              description: "Usually no permit. We confirm with the city.",
            },
            {
              title: "Condo",
              description: "Syndicate approval, work hours and access confirmed first.",
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
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planning and measuring a kitchen renovation",
          },
          cardTitle: "Why we never skip this",
          cardDescription:
            "Work done without a permit can trigger a stop-work order and complicate a resale or an insurance claim.",
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
              q: "What does a kitchen renovation cost?",
              a: "A refresh starts around $20,000. A full renovation generally runs between $35,000 and $50,000 and up. The firm price is set after the on-site survey.",
            },
            {
              q: "Do I need a permit?",
              a: "Yes for most full renovations: load-bearing wall modified, plumbing relocated or a new exterior opening. A replacement in the same footprint usually does not. We check and file the application.",
            },
            {
              q: "How long does the job take?",
              a: "Several weeks on site, plus your city's permit turnaround and the 9 to 15 week cabinet production lead time. Both are planned in parallel.",
            },
            {
              q: "Can the wall between kitchen and living room come out?",
              a: "Often yes. If it is load-bearing, an engineer sizes the beam and supports, and the drawing goes in with the permit application. We tell you at the site visit.",
            },
            {
              q: "Do you supply the cabinets and the countertop?",
              a: "Yes. Custom cabinets are supplied by our partner factory, under subcategory 12 of our RBQ licence, then installed by our own crews. The countertop is templated and set in the same mandate.",
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
          heading: "Have your kitchen assessed",
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
          note: "RBQ licence 8306-0806-27 · Permit, trades and schedule included",
        },
      },
    },
  ],
};
