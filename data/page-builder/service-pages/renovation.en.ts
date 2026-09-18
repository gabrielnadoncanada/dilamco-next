import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Turnkey renovation — general contractor in Montreal",
    description:
      "Turnkey renovation: permits, coordinated trades, schedule and written contract. RBQ-licensed general contractor since 2004.",
    path: "/services/renovation",
    ogAlt: "Turnkey renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Turnkey renovation", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Turnkey renovation",
    description:
      "General contractor accountable for the whole project: permit application, trade coordination, inspections, schedule and handover, under RBQ licence 8306-0806-27.",
    url: SITE.url + "/services/renovation",
    serviceType: "Turnkey residential renovation",
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
        variant: "centered",
        props: {
          badges: ["Permit included", "Written contract", "Insured"],
          heading: "One contractor, from the permit to the handover",
          description:
            "We sign the contract, file the permit, pay the trades and answer for the result.",
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
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The six kinds of renovation",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "From the drain to the countertop, cabinets supplied and installed.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Full kitchen renovation",
              },
              badges: ["Multi-trade"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Continuous membrane, verified slope, exhaust vented outdoors.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Full bathroom renovation",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Water and clear height are settled before the first partition.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished by a general contractor",
              },
              badges: ["Permit required"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Substrate brought back true, thresholds and levels set on plan.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Residential flooring renovation",
              },
              badges: ["Subfloor"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Zoning read, drawings sealed, footings poured below the frost line.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Home addition under construction",
              },
              badges: ["Structure"],
              footerCtaLabel: "See addition",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Room-by-room scope and an itemized quote for your claim.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rebuild after water damage",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
          ],
        },
      },
    },
    {
      id: "process",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Five steps, always the same",
          steps: [
            {
              number: "1",
              title: "Call and visit",
              description:
                "We come see the place and note the constraints, at no charge.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions and budget within 24 to 48 hours.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Dates and payment terms signed, file submitted to the city.",
            },
            {
              number: "4",
              title: "Coordinated site",
              description:
                "Trades follow the schedule, walls opened then closed again.",
            },
            {
              number: "5",
              title: "Handover",
              description:
                "Closing walkthrough with you, touch-ups done before the balance.",
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
          heading: "At a glance",
          intro: "The terms of a turnkey mandate.",
          rows: [
            {
              label: "Contract",
              value: "Scope, price, schedule and payments in writing, priced change orders",
            },
            {
              label: "Permit",
              value: "Verified with your city, filed and followed by us",
            },
            {
              label: "Trades",
              value: "Hired and paid by us, a single invoice stream",
            },
            {
              label: "Insurance",
              value: "Civil liability and builder's risk coverage in force",
            },
            {
              label: "Response time",
              value: "24 to 48 business hours after your request",
            },
            {
              label: "Territory",
              value: "West Island, Montreal, Laval, South Shore, Vaudreuil-Soulanges",
            },
          ],
          note: "RBQ licence 8306-0806-27, categories 1.2 and 1.3, valid since 2004.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Tell us about your renovation project",
          intro:
            "Give us the room, the budget in mind and the deadline. We book the visit.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · General contractor since 2004",
        },
      },
    },
  ],
};
