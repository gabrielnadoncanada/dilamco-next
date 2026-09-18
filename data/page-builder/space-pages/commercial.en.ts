import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Commercial construction and fit-outs in Montréal",
    description:
      "Commercial construction and fit-outs in Montréal: offices, retail, leasehold improvements and multi-unit buildings, by a licensed general contractor.",
    path: "/espaces/commercial",
    ogAlt: "Dilamco commercial construction and fit-outs",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial" },
  ],
  service: {
    name: "Commercial construction and fit-outs",
    description:
      "Renovation and fit-out of offices, retail spaces and multi-unit buildings, leasehold improvements and built-in cabinetry, by a licensed general contractor (RBQ).",
    url: SITE.url + "/espaces/commercial",
    serviceType: "Commercial construction and fit-outs",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - General contractor",
          heading:
            "Commercial construction and fit-outs in Montréal and Greater Montréal",
          description:
            "Dilamco has been a licensed general contractor (RBQ 8306-0806-27) since 2004: office renovations, retail fit-outs, leasehold improvements and work in multi-unit buildings. We take care of the municipal permit, the trades and the schedule, and our cabinetry division supplies the built-in millwork when the project calls for it.",
          actions: [
            {
              label: "Get a commercial quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our commercial projects",
              href: "/projets",
              variant: "ghost",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Offices", "Retail", "Leasehold improvements"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Custom commercial fit-out in Montréal and Greater Montréal",
          },
          caption:
            "Offices, retail spaces, service areas and multi-unit buildings",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A commercial job site that respects your operations",
          intro:
            "Premises that stay closed longer than planned cost money. The project is planned to limit disruption, hold the schedule and stay compliant with the Québec Construction Code.",
          badges: ["Schedule", "Compliance", "Coordination"],
          cardTitle: "When this approach makes sense",
          items: [
            "Office renovation or fit-out of a commercial unit.",
            "Leasehold improvements to deliver under the terms of the lease.",
            "A multi-unit building to renovate without emptying it.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
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
          heading: "A predictable sequence, from permit to handover",
          intro:
            "The project is framed early to manage the permit, the trades, the schedule and the handover of the premises.",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description:
                "Use, site constraints, lease requirements and available work windows.",
            },
            {
              number: "2",
              title: "Permit",
              description:
                "Plans, municipal permit application and compliance check before work starts.",
            },
            {
              number: "3",
              title: "Execution",
              description:
                "Trades coordinated by a single party, with schedule tracking throughout.",
            },
            {
              number: "4",
              title: "Handover",
              description:
                "Inspection, corrections and premises handed back ready to open.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Specifications designed for commercial use",
          intro:
            "In commercial work, durability, maintenance and compliance matter as much as how the space looks.",
          items: [
            {
              title: "Robust structure",
              description:
                "Materials and construction details chosen to withstand sustained foot traffic.",
            },
            {
              title: "Simplified maintenance",
              description:
                "Surfaces and finishes aligned with the reality of the space and its daily cleaning.",
            },
            {
              title: "Code compliance",
              description:
                "Clearances, exits and installations compliant with the Québec Construction Code.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-01.webp",
            alt: "Material detail for a commercial fit-out",
          },
          cardTitle: "Intended result",
          cardDescription:
            "Premises that are durable, compliant and delivered on the agreed date, with no costly rework after opening.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured commercial projects",
          intro:
            "A few references that show the execution quality and the level of coordination.",
          items: [
            {
              title: "Office fit-out",
              href: "/projets",
              description:
                "Office premises reworked and handed over ready to occupy, with trades coordinated.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Commercial project in Montréal",
              },
              badges: ["Montréal", "Commercial"],
              footerCtaLabel: "View project",
            },
            {
              title: "Leasehold improvements",
              href: "/projets",
              description:
                "Premises adapted to the tenant's needs, within the terms of the lease.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Commercial project in Laval",
              },
              badges: ["Laval", "Commercial lease"],
              footerCtaLabel: "View project",
            },
            {
              title: "Built-in commercial millwork",
              href: "/projets",
              description:
                "Reception, technical storage and service areas supplied by our cabinetry division.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Commercial project on the South Shore",
              },
              badges: ["South Shore", "Built-in millwork"],
              footerCtaLabel: "View project",
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
          heading: "FAQ - commercial construction and fit-outs",
          intro:
            "The most useful questions before scoping a commercial project.",
          items: [
            {
              q: "What kinds of commercial projects do you take on?",
              a: "Renovation and fit-out of offices, retail units and service areas, leasehold improvements under the terms of the lease, and work in multi-unit buildings. Dilamco is a licensed general contractor (RBQ 8306-0806-27), so the permit, the trades and the schedule all sit with one party. Our cabinetry division supplies the built-in millwork — reception, technical storage, service areas — when the project calls for it.",
            },
            {
              q: "Can you work around our hours and available windows?",
              a: "Yes, when the sequence is framed at the planning stage. We break the work into phases, identify what has to happen outside business hours, and the dates go into the written contract.",
            },
            {
              q: "Do you handle permits and code compliance?",
              a: "Yes. We prepare the municipal permit application, coordinate inspections and carry out the work in compliance with the Québec Construction Code. Dilamco holds a general contractor licence (categories 1.2 Small buildings and 1.3 Buildings of all kinds) and carries liability and job-site insurance.",
            },
            {
              q: "Do you work in Montréal and the surrounding area?",
              a: "Yes. Our base is in the West Island. We work in Montréal, Laval, on the South Shore and in Vaudreuil-Soulanges.",
            },
            {
              q: "Can you also handle the full renovation of the space?",
              a: "Yes — Dilamco is a general contractor (RBQ 8306-0806-27) and cabinetry is one of our divisions. We can take on the full renovation: permit, demolition, partitions, electrical, plumbing, ventilation, flooring, painting and built-in millwork, all coordinated by a single party. The schedule and the budget are set in the written contract before work begins.",
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
          heading: "Tell us about your commercial project",
          intro:
            "Free estimate, reply within 24 to 48 business hours. We frame the scope, the permit and the schedule before pricing.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our commercial projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
