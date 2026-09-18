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
        variant: "split-image",
        props: {
          eyebrow: "General contractor",
          heading: "One contractor, from permit to handover",
          description:
            "We sign the contract, file the permit, pay the trades and answer for the finished work.",
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
          badges: ["Permit included", "Written contract", "Insured"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Turnkey residential renovation job site",
          },
          caption: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
    {
      id: "promesse",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What moves from your side to ours",
          description:
            "A general contracting mandate is not a marketing formula, it is a transfer of responsibility.",
          cards: [
            {
              title: "The permit",
              description:
                "Requirement confirmed with your city, application filed and followed through to issuance.",
            },
            {
              title: "The trades",
              description:
                "Plumbing, electrical, ventilation, drywall and finishing work under our contract. We pay them.",
            },
            {
              title: "Schedule and inspections",
              description:
                "Every trade gets a window, every inspection is booked before the walls close.",
            },
            {
              title: "The warranty",
              description:
                "Work warranted per the contract. Need an adjustment later? You call the same company.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The six types of renovation",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Demolition, plumbing, electrical, cabinets and finishing in one sequence.",
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
                "Waterproofing membrane, ventilation, plumbing, tile and vanity.",
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
                "Moisture, drainage, insulation, egress and the permit you must have.",
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
                "Subfloor, flatness, levels and transitions between rooms.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Residential flooring renovation",
              },
              badges: ["Subfloor"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Zoning, permit, foundation, structure, envelope and service connections.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Home addition under construction",
              },
              badges: ["Structure"],
              footerCtaLabel: "See addition",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Rebuilding after water or fire damage, documented for your insurer.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Rebuilding after water damage",
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
              title: "Visit and assessment",
              description:
                "We survey the space, the existing condition and the constraints. At no charge.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions and budget, within 24 to 48 business hours.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Dates, payments and conditions signed, then the application filed with the city.",
            },
            {
              number: "4",
              title: "Coordinated execution",
              description:
                "Demolition, mechanical, inspections, closing up and finishing, in order.",
            },
            {
              number: "5",
              title: "Handover and warranty",
              description:
                "Final walkthrough with you, deficiencies fixed before the last payment.",
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
              q: "What does turnkey actually include?",
              a: "Full project management: permit, hiring and paying the trades, ordering materials, the calendar, inspections, protecting and cleaning the premises, handover and warranty. Exclusions are spelled out in the quote.",
            },
            {
              q: "What does a renovation cost?",
              a: "Our mandates start around $25,000. As an indication, a bathroom often lands between $15,000 and $35,000, a full kitchen between $35,000 and $50,000. The firm price is set after the on-site survey.",
            },
            {
              q: "Do I need a permit?",
              a: "Generally as soon as you touch a load-bearing wall, move plumbing, finish a basement or add living area. We confirm with your city and file the application on your behalf.",
            },
            {
              q: "How long does a job take?",
              a: "A bathroom runs in weeks, a kitchen or basement in months, an addition longer because of the permit and the foundation. Custom cabinets take 9 to 15 weeks, planned in parallel.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes, with the scope and duration written into the contract. RBQ licence 8306-0806-27, valid with no restrictions since 2004, classes 1.2 and 1.3. We do not build new homes, so the GCR plan does not apply.",
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
          heading: "Tell us about your project",
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
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
