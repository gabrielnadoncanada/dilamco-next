import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Residential renovation and construction services",
    description:
      "General contractor in Montreal: kitchen, bathroom, basement, flooring, addition, disaster rebuild. RBQ licence, written contract.",
    path: "/services",
    ogAlt: "Dilamco renovation services, general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "General contracting services",
    description:
      "Residential and commercial renovation coordinated by a general contractor holding RBQ licence 8306-0806-27: permits, trades, schedule and written contract.",
    url: SITE.url + "/services",
    serviceType: "General contractor, renovation",
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
            "Residential renovation and construction services, coordinated by a single contractor",
          description:
            "Dilamco is a general contractor holding RBQ licence 8306-0806-27 since 2004. We take charge of the whole project: permit application, trades, schedule, inspections and handover. One contract, one person accountable, one number to call when a question comes up on site.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ licence 8306-0806-27",
            "Since 2004",
            "Insured",
            "Written contract",
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Residential renovation site coordinated by a general contractor",
          },
          caption:
            "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "positionnement",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What a general contractor changes on your project",
          description:
            "Most bad renovation experiences do not come from a bad material. They come from a job site where nobody owns the whole thing: the plumber waits on the electrician, the inspector rejects work done too early, and the homeowner ends up running the site between two work days. That role is ours, and it is backed by a licence.",
          cards: [
            {
              title: "One person accountable, from permit to handover",
              description:
                "We prepare the permit application, hire and pay the trades, schedule the inspections and answer for the finished work. You are not coordinating six companies that never speak to each other.",
            },
            {
              title: "A verifiable licence and real insurance",
              description:
                "RBQ licence 8306-0806-27, valid and unrestricted, issued September 7, 2004, general contractor categories 1.2 and 1.3. A $40,000 licence bond with no claims on file. Civil liability and job-site coverage in force.",
            },
            {
              title: "A written budget and schedule",
              description:
                "The quote spells out the scope, the materials, the exclusions and the dates. What is not in the contract does not show up mid-project as a surprise extra.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Our renovation services",
          intro:
            "Six residential mandates plus commercial work. Each page explains the real sequence of the work, what requires a permit and what moves the price.",
          columns: "3",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "Demolition, plumbing, electrical, ventilation, flooring, cabinets, countertops and finishing, coordinated in a single sequence.",
              href: "/services/renovation/cuisine",
              badges: ["Permit possible", "Multi-trade"],
              ctaLabel: "See kitchen renovation",
            },
            {
              title: "Bathroom renovation",
              description:
                "Waterproofing, membrane, ventilation, plumbing, tiling and vanity: the room where an execution error costs the most.",
              href: "/services/renovation/salle-de-bain",
              badges: ["Waterproofing", "Plumbing"],
              ctaLabel: "See bathroom renovation",
            },
            {
              title: "Basement finishing",
              description:
                "Moisture, drainage, insulation, vapour barrier, egress window and the permit required to finish a basement.",
              href: "/services/renovation/sous-sol",
              badges: ["Permit required", "Insulation"],
              ctaLabel: "See basement finishing",
            },
            {
              title: "Flooring renovation",
              description:
                "Subfloor, flatness, levels and transitions between rooms, sequenced at the right point in the job.",
              href: "/services/renovation/plancher",
              badges: ["Subfloor", "Transitions"],
              ctaLabel: "See flooring renovation",
            },
            {
              title: "Home addition",
              description:
                "Foundation, structure, envelope, service connections and zoning compliance, with engineered drawings when the scope calls for them.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Engineer", "Zoning"],
              ctaLabel: "See home additions",
            },
            {
              title: "Disaster rebuild",
              description:
                "Rebuilding after water damage, fire, smoke or mould, with the documentation your insurer needs.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Insurance", "Rebuild"],
              ctaLabel: "See disaster rebuild",
            },
            {
              title: "Commercial fit-out",
              description:
                "Offices, retail, restaurants and tenant improvements, under RBQ categories 1.2 and 1.3 covering buildings of all kinds.",
              href: "/espaces/commercial",
              badges: ["Commercial", "RBQ 1.3"],
              ctaLabel: "See commercial",
            },
          ],
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What is included when you hire a general contractor",
          intro:
            "These are the four things a homeowner has to shoulder alone when hiring subcontractors one at a time. In a Dilamco mandate, they are part of the contract.",
          columns: "2",
          items: [
            {
              title: "Permits and code compliance",
              description: "The permit application is our job, not yours.",
              icon: "fileCheck",
              bullets: [
                "We confirm whether a permit is needed before any demolition: load-bearing walls, plumbing, added floor area, basement conversion.",
                "Drawings and documents prepared as required by the city or the borough.",
                "Municipal inspections booked at the right stages of the job.",
                "Work carried out to the Québec Construction Code.",
              ],
            },
            {
              title: "Trade coordination",
              description: "One schedule for everyone on site.",
              icon: "hardHat",
              bullets: [
                "Demolition, framing, plumbing, electrical, ventilation, tiling, drywall, painting and finishing planned in the right order.",
                "Subcontractors are hired and paid by us, not by you.",
                "One point of contact for questions, delays and change orders.",
                "Protection of the premises, debris removal and a clean site.",
              ],
            },
            {
              title: "Licence, bond and insurance",
              description:
                "The protections that exist because the company is licensed.",
              icon: "shieldCheck",
              bullets: [
                "RBQ licence 8306-0806-27, valid and unrestricted since September 7, 2004.",
                "General contractor categories 1.2 small buildings and 1.3 buildings of all kinds.",
                "$40,000 licence bond, no claims on file.",
                "Civil liability and job-site insurance in force.",
              ],
            },
            {
              title: "Contract, schedule and warranty",
              description: "What is written down before the first wall comes out.",
              icon: "clipboardCheck",
              bullets: [
                "Free estimate, answer within 24 to 48 business hours.",
                "Detailed quote: scope, materials, exclusions, payment terms.",
                "Schedule with start date, milestones and handover.",
                "Work is warranted, terms set out in the contract.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "deroulement",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a mandate unfolds",
          intro:
            "The same method whether it is a bathroom or an addition. What changes is how long each step takes.",
          steps: [
            {
              number: "1",
              title: "Call and site visit",
              description:
                "You describe the project. We come and look at the space, note the constraints and check what requires a permit or an engineer's opinion.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, trades, exclusions and budget, in writing. That document is the reference for the whole job.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Contract signed with the schedule attached, then the permit application filed with the city or borough when one is required.",
            },
            {
              number: "4",
              title: "Coordinated job site",
              description:
                "Demolition, mechanical work, inspections, closing up, finishing. The trades follow one another on a calendar we hold to.",
            },
            {
              number: "5",
              title: "Handover",
              description:
                "Final walkthrough with you, punch list, cleanup and return of the space. The warranty starts.",
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Our cabinetry division: one supplier less",
          intro:
            "Most general contractors farm cabinetry out to a third party, which adds a supplier, a lead time and a grey zone of responsibility. Our RBQ licence includes subcategory 12, manufactured cabinets and countertops. Custom cabinets are built for us by our partner factory, then designed, measured and installed by our own crews, inside the same renovation contract.",
          items: [
            {
              title: "Design and shop drawings",
              description:
                "On-site measurements, layout, ergonomics, finish selection and drawings approved before anything goes into production.",
            },
            {
              title: "Custom fabrication",
              description:
                "Birch plywood boxes, solid birch drawers, quality hardware, built to the exact dimensions of your room.",
            },
            {
              title: "Installed by our crews",
              description:
                "Setting, alignment and adjustments coordinated with the rest of the job: plumbing, electrical, countertop and flooring.",
            },
            {
              title: "A single line of responsibility",
              description:
                "If a door does not close square, you call the same contractor as for everything else. No passing you between suppliers.",
            },
          ],
          actions: [
            {
              label: "See design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "See spaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Custom cabinet installation during a renovation project",
          },
          cardTitle: "RBQ subcategory 12",
          cardDescription:
            "Manufactured cabinets and countertops. It is one of the subcategories listed on our licence, alongside plumbing, building electrical, carpentry and finishes.",
        },
      },
    },
    {
      id: "divisions",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "The three stages of the cabinetry side",
          intro:
            "When your project is mostly about cabinetry, these pages detail each stage. The space pages show the result room by room.",
          columns: "3",
          items: [
            {
              title: "Design",
              description:
                "Measurements, layout, ergonomics and material choices before production.",
              href: "/services/design",
              badges: ["Drawings", "Ergonomics"],
              ctaLabel: "See design",
            },
            {
              title: "Fabrication",
              description:
                "Custom production by our partner factory, to our drawings and our standards.",
              href: "/services/fabrication",
              badges: ["Custom", "Durability"],
              ctaLabel: "See fabrication",
            },
            {
              title: "Installation",
              description:
                "Setting, adjustments and on-site finishing, coordinated with the other trades.",
              href: "/services/installation",
              badges: ["Install", "Precision"],
              ctaLabel: "See installation",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Where we work",
          intro:
            "Our office is in Pierrefonds-Roxboro. The West Island is our home base and we cover Greater Montreal. Working with a contractor who already knows your borough's permit department saves weeks.",
          badges: [
            "West Island",
            "Montreal",
            "Laval",
            "South Shore",
            "Vaudreuil-Soulanges",
          ],
          cardTitle: "What being nearby changes",
          items: [
            "Assessment visit booked quickly, at no charge.",
            "Familiarity with local by-laws and permit departments.",
            "Frequent site supervision rather than one visit a week.",
            "We come back after handover when an adjustment is needed.",
          ],
          actions: [
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
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
          heading: "FAQ — general contracting services",
          intro:
            "Licence, permits, pricing, schedule, insurance and warranty: what homeowners ask before signing.",
          items: [
            {
              q: "What is your RBQ licence?",
              a: "RBQ licence 8306-0806-27, issued September 7, 2004, valid and unrestricted. General contractor categories 1.2 small buildings and 1.3 buildings of all kinds, plus several specialized subcategories including 12, manufactured cabinets and countertops. The number can be checked online in the Régie du bâtiment du Québec licence holder registry.",
            },
            {
              q: "Do you build new houses?",
              a: "No. Our licence covers renovation, conversion, additions, rebuilding after a loss and commercial fit-outs. Building a new house requires a different licence category and enrolment in a new-home warranty plan, which is not what we do.",
            },
            {
              q: "Do my renovations need a permit?",
              a: "Often, yes. A permit is generally required to modify a load-bearing wall, move or add plumbing, finish a basement, add living area or change the exterior appearance. Refreshing surfaces with no structural or mechanical work usually does not. We confirm the case with your city before opening the site and we file the application.",
            },
            {
              q: "What does a renovation cost?",
              a: "Our mandates generally start around $25,000. A full bathroom often lands between $15,000 and $35,000, a full kitchen between $35,000 and $50,000 and up, depending on scope. These figures are indicative: the real price depends on the area, the condition of what is there, the mechanical work and the level of finish. The detailed quote is free.",
            },
            {
              q: "How long before the work starts?",
              a: "After the visit, we come back with an estimate within 24 to 48 business hours. The start date then depends on your municipality's permit turnaround, material lead times and our calendar. Custom cabinets take 9 to 15 weeks to produce, which we plan in parallel with the work.",
            },
            {
              q: "Who hires and pays the subcontractors?",
              a: "We do. Plumber, electrician, ventilation, tiling, drywall: they work for us, under our contract and our schedule. You have one contact and one invoicing stream, and you are not acting as site coordinator.",
            },
            {
              q: "Are you insured?",
              a: "Yes. Civil liability and job-site insurance are in force, and our licence carries a $40,000 bond with no claims on file. Certificates can be provided on request before the contract is signed.",
            },
            {
              q: "Do you work through the winter?",
              a: "Yes. Interior work — kitchen, bathroom, basement, flooring, rebuilding after a loss — runs year-round. For an addition, excavation and foundation pours are scheduled around conditions, and the rest of the work continues once the envelope is closed in and heated.",
            },
            {
              q: "Do you do commercial fit-outs?",
              a: "Yes. Category 1.3, buildings of all kinds, covers offices, retail, restaurants and tenant improvements. The constraints differ from residential: hours, access, landlord requirements and permit timelines. The commercial spaces page sets out the approach.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes, and the terms are written into the contract. That contractual warranty sits on top of the protections provided by law and the bond attached to our RBQ licence. We do not offer a new-home warranty plan, which applies only to new residential construction.",
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
          heading: "A renovation project to price out?",
          intro:
            "Tell us about it. We come out, note the constraints and come back with a free estimate within 24 to 48 business hours, covering the permit, the trades and the schedule.",
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
          note: "RBQ licence 8306-0806-27 · General contractor since 2004 · West Island and Greater Montreal",
        },
      },
    },
  ],
};
