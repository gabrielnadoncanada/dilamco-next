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
          eyebrow: "Dilamco - General contractor",
          heading:
            "Turnkey renovation: one contractor from permit to handover",
          description:
            "Turnkey means one licensed company signs the contract, files the permit application, hires and pays the trades, holds the calendar, books the inspector and answers for the finished work. You are not running the site between two work days.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ licence 8306-0806-27",
            "Permit included",
            "Written contract",
            "Insured",
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Turnkey residential renovation job site",
          },
          caption:
            "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "derapage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why renovation projects go off the rails",
          description:
            "Jobs that drag on and cost twice as much almost always fail for the same reasons. None of them is mysterious, and none of them gets fixed once the site is open: they get fixed beforehand, when the scope is defined and the contract is signed.",
          cards: [
            {
              title: "The scope was never written down",
              description:
                "A one-page quote, a few round numbers, nothing about exclusions. Every decision not made before the start becomes an extra along the way, and nobody agrees on what was actually agreed.",
            },
            {
              title: "The permit comes after the demolition",
              description:
                "A load-bearing wall opened without authorization, plumbing moved with no drawings filed: the city can stop the work and require restoration or an expert report. The delay is then counted in months, not days.",
            },
            {
              title: "Nobody is coordinating the trades",
              description:
                "The homeowner hired four companies separately. The plumber shows up before the framing is ready, the electrician leaves because the walls are already closed, and each one bills the trip.",
            },
            {
              title: "The contractor was not licensed",
              description:
                "Without a valid RBQ licence there is no bond, no real recourse and no reliable job-site insurance. If the company disappears mid-project, the homeowner carries the rest alone.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "prise-en-charge",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What we take on",
          intro:
            "A general contracting mandate is not a marketing formula, it is a transfer of responsibility. Here is concretely what moves from your side to ours when you sign a turnkey renovation contract with Dilamco.",
          items: [
            {
              title: "The permit application",
              description:
                "Confirming the actual requirement with your city or borough, preparing the drawings and documents, filing the application and following it through to issuance.",
            },
            {
              title: "Hiring and paying the trades",
              description:
                "Demolition, framing, plumbing, electrical, ventilation, tiling, drywall, painting. They work for us, under our contract, and we pay them.",
            },
            {
              title: "The schedule, and holding to it",
              description:
                "Every trade gets a window. We plan the sequence, order long-lead materials on time and adjust when something unexpected turns up, without letting the site sit idle.",
            },
            {
              title: "Municipal inspections",
              description:
                "They happen at set stages, usually before walls are closed. A missed inspection means reopening what was just closed. We book them at the right moment.",
            },
            {
              title: "Building code compliance",
              description:
                "Ceiling heights, clearances, ventilation, electrical, egress: those requirements exist for safety and for resale value. They get met, not worked around.",
            },
            {
              title: "The warranty after handover",
              description:
                "Work is warranted and the terms are in the contract. If an adjustment is needed a few months later, you call back the same company.",
            },
          ],
          actions: [
            {
              label: "See all services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Trade coordination on a renovation job site",
          },
          cardTitle: "A licence, not a promise",
          cardDescription:
            "RBQ licence 8306-0806-27, issued September 7, 2004, valid and unrestricted. Categories 1.2 small buildings and 1.3 buildings of all kinds. A $40,000 bond with no claims on file. The number can be checked in the Régie du bâtiment du Québec registry.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Step by step",
          intro:
            "The same sequence for a bathroom or an addition. What changes is how long each phase runs and how many trades are involved.",
          steps: [
            {
              number: "1",
              title: "Visit and assessment",
              description:
                "We come and look at the space, take dimensions, assess the condition of what is there and note the constraints: structure, plumbing, electrical panel, access, condo or house. At no charge.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope room by room, trades involved, materials, exclusions and budget. Answer within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Contract and schedule",
              description:
                "Signed with dates, payment milestones and conditions. It is the document both sides refer to for the whole project.",
            },
            {
              number: "4",
              title: "Permit",
              description:
                "Application filed with the city or borough when one is required, and issuance awaited before the site opens.",
            },
            {
              number: "5",
              title: "Coordinated execution",
              description:
                "Protection of the premises, demolition, mechanical work, inspections, closing up, finishing. The trades follow one another on the agreed calendar.",
            },
            {
              number: "6",
              title: "Handover and warranty",
              description:
                "Final walkthrough with you, punch list, cleanup, return of the space and the contractual warranty takes effect.",
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
          heading: "The six types of renovation we take on",
          intro:
            "Each page sets out the real sequence of the work, what requires a permit, the technical points that matter and the price ranges to expect.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Demolition, plumbing, electrical, ventilation, flooring, walls, cabinets, countertops and finishing, coordinated in a single sequence.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Full kitchen renovation",
              },
              badges: ["Kitchen", "Multi-trade"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing, membrane, ventilation, plumbing, tiling and vanity, in the room least forgiving of execution shortcuts.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Full bathroom renovation",
              },
              badges: ["Bathroom", "Waterproofing"],
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Moisture, drainage, insulation, vapour barrier, egress, plumbing and the permit required to finish a basement.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished by a general contractor",
              },
              badges: ["Basement", "Permit required"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Subfloor, flatness, levels and transitions between rooms, done at the right point in the job sequence.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Residential flooring renovation",
              },
              badges: ["Flooring", "Subfloor"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Foundation, structure, envelope, service connections and zoning compliance, with engineer-sealed drawings when the scope requires them.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Home addition under construction",
              },
              badges: ["Addition", "Structure"],
              footerCtaLabel: "See addition",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Rebuilding after water damage, fire, smoke or mould, with the documentation your insurer needs for the claim.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Rebuilding after water damage",
              },
              badges: ["Loss", "Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
          ],
        },
      },
    },
    {
      id: "controle",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "The four things that hold a job site together",
          intro:
            "They are the same on every mandate, from replacing a bathroom to rebuilding a flooded basement.",
          columns: "2",
          items: [
            {
              title: "The written contract",
              description:
                "Anything not written down will eventually be argued about on site.",
              icon: "fileCheck",
              bullets: [
                "Scope described room by room, with exclusions.",
                "Materials named, with allowances where the choice is still open.",
                "Payments tied to progress, not to the calendar alone.",
                "A written procedure for changes requested along the way.",
              ],
            },
            {
              title: "The permit and the inspection",
              description:
                "The step contractors in a hurry offer to skip.",
              icon: "clipboardCheck",
              bullets: [
                "Permit requirement confirmed before any demolition.",
                "Drawings and documents prepared to your city's requirements.",
                "Inspections booked before walls are closed.",
                "Work compliant with the Québec Construction Code.",
              ],
            },
            {
              title: "The trade sequence",
              description:
                "The order of operations decides the real cost of the project.",
              icon: "hardHat",
              bullets: [
                "Every trade gets a planned window.",
                "Long-lead materials ordered as soon as the contract is signed.",
                "Subcontractors hired and paid by us.",
                "One contact for questions and for surprises.",
              ],
            },
            {
              title: "The homeowner's protection",
              description:
                "What exists because the company is licensed and insured.",
              icon: "shieldCheck",
              bullets: [
                "Valid, unrestricted RBQ licence, verifiable online.",
                "$40,000 licence bond, no claims on file.",
                "Civil liability and job-site insurance in force.",
                "Work warranted, terms in the contract.",
              ],
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
          heading: "FAQ — turnkey renovation",
          intro:
            "Pricing, permits, timelines, subcontractors, winter work, condos and warranty: the questions that come up before signing.",
          items: [
            {
              q: "What does turnkey actually include?",
              a: "Full project management: permit application, hiring and paying the trades, ordering materials, holding the calendar, booking inspections, protecting and cleaning the premises, then handover and warranty. Whatever is not included is spelled out in the exclusions section of the quote, so there is no grey zone.",
            },
            {
              q: "What does a turnkey renovation cost?",
              a: "Our mandates generally start around $25,000. As an indication, a full bathroom often lands between $15,000 and $35,000, a full kitchen between $35,000 and $50,000 and up. Scope, the condition of what is there, moving plumbing or electrical and the level of finish are what move the number. The detailed estimate is free.",
            },
            {
              q: "Do I need a permit?",
              a: "A permit is generally required as soon as you touch a load-bearing wall, move or add plumbing, finish a basement, add living area or change the exterior appearance. We confirm the case with your city or borough before work starts and file the application on your behalf.",
            },
            {
              q: "Who hires and pays the subcontractors?",
              a: "We do. Plumber, electrician, ventilation, tiling, drywall: they work under our contract and our schedule, and we pay them. You get a single invoicing stream and a single contact, which avoids the finger-pointing when something goes wrong.",
            },
            {
              q: "How long does a renovation take?",
              a: "It depends on scope, your municipality's permit turnaround and material lead times. A full bathroom runs in weeks, a full kitchen in several weeks of site work, an addition in months. Custom cabinets take 9 to 15 weeks to produce, planned in parallel. The precise schedule is attached to the contract.",
            },
            {
              q: "Can you renovate in winter?",
              a: "Yes. Interior work runs year-round, and winter is often a period when trades are more available. For an addition, excavation and foundation pours are scheduled around conditions, then the work continues once the envelope is closed in and heated.",
            },
            {
              q: "Do you work in condos?",
              a: "Yes. In a condo we confirm early the work hours allowed by the syndicate, access (elevator, parking, protection of common areas), acoustic requirements and any restrictions in the declaration of co-ownership on plumbing and ventilation. Once those are settled, the job is planned normally.",
            },
            {
              q: "Can I stay in the house during the work?",
              a: "Often yes, especially if the renovation touches a single room and another bathroom or a temporary kitchen stays available. For a major renovation or heavy demolition, many homeowners choose to move out for a few weeks. We discuss it when setting the schedule.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes. Work is warranted and the terms are written into the contract. That warranty sits on top of the protections provided by law and the $40,000 bond attached to our RBQ licence. We do not offer a new-home warranty plan, which applies only to new residential construction.",
            },
            {
              q: "Which areas do you serve?",
              a: "Our office is in Pierrefonds-Roxboro. We cover the West Island, Montreal, Laval, the South Shore and Vaudreuil-Soulanges. The service areas page lists the municipalities and the local permit particularities.",
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
          heading: "A renovation project worth framing properly?",
          intro:
            "We come out, note the real constraints and come back with a free estimate within 24 to 48 business hours. Permit, trades, schedule and budget, in writing.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · General contractor since 2004 · (514) 820-0773",
        },
      },
    },
  ],
};
