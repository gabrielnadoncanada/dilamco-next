import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Process: how a renovation project runs",
    description:
      "From free estimate to guarantee: site visit, itemized quote, written contract, permits, coordinated trades, deficiency list and handover.",
    path: "/processus",
    ogAlt: "The stages of a renovation project run by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Process", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Residential renovation project management",
      description:
        "How a project runs with a general contractor: site visit and estimate, itemized quote, written contract with schedule, municipal permit, coordinated site work, deficiency list, handover and guarantee.",
      url: SITE.url + "/processus",
      serviceType: "Renovation project management",
      areaServed: [
        "West Island",
        "Montréal",
        "Laval",
        "South Shore",
        "Vaudreuil-Soulanges",
      ],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Process",
          heading: "How a renovation project runs with a general contractor",
          description:
            "Here is what actually happens, in order, between the first call and the end of the guarantee. Eight stages, each with a concrete deliverable: a signed document, an approval obtained or an inspection passed. Nothing moves forward until the previous stage is closed.",
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Itemized quote", "Written contract", "Permits", "Inspection"],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Residential renovation work under way",
          },
          caption:
            "Free estimate, reply within 24 to 48 business hours. RBQ licence 8306-0806-27.",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What this sequence actually prevents",
          intro:
            "These stages are not there to make the project heavier. Each one closes off a classic cause of trouble on a residential job site.",
          columns: "2",
          items: [
            {
              title: "A price that doesn't move on its own",
              description:
                "Budgets slip when the work was never itemized in the first place.",
              icon: "fileCheck",
              bullets: [
                "Scope, materials and exclusions written into the quote",
                "A written, priced change order for every change",
                "No extra work carried out without your agreement",
              ],
            },
            {
              title: "A site that doesn't drag",
              description:
                "Delays mostly come from trades waiting on one another.",
              icon: "clock",
              bullets: [
                "Full sequence planned before the site opens",
                "Trades booked in advance, with dates",
                "Long lead-time materials ordered as soon as the contract is signed",
              ],
            },
            {
              title: "Work that is compliant and approved",
              description:
                "Unpermitted work can have to be redone, or hold up a sale.",
              icon: "clipboardCheck",
              bullets: [
                "City or borough requirements verified",
                "Drawings prepared and permit application filed",
                "Compliance with the Québec Construction Code",
              ],
            },
            {
              title: "Work that doesn't need redoing",
              description:
                "Final quality depends on what gets inspected before it is covered up.",
              icon: "shieldCheck",
              bullets: [
                "Each stage inspected before the walls are closed",
                "Deficiency list corrected before the final payment",
                "Guarantee on the work performed, terms in the contract",
              ],
            },
          ],
        },
      },
    },
    {
      id: "steps",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "The eight stages of a project",
          description:
            "Scope changes from one project to the next — a bathroom doesn't demand the same thing as an addition — but the order never does.",
          steps: [
            {
              number: "1",
              title: "Site visit and free estimate",
              description:
                "You describe the project and we come back within 24 to 48 business hours to book a visit. On site we take measurements, look at the state of the plumbing, electrical and structure, and give you a realistic order of magnitude. This stage costs nothing and commits you to nothing.",
            },
            {
              number: "2",
              title: "Itemized quote",
              description:
                "We write a quote that describes the work line by line: demolition, structure, systems, finishes, trim. Materials, quantities and — above all — exclusions are in it. A one-line quote with a lump sum isn't a quote: it's a bet.",
            },
            {
              number: "3",
              title: "Written contract, schedule and payment calendar",
              description:
                "Once accepted, the quote becomes a contract. We add the dated work schedule and the payment calendar, tied to real progress rather than to the calendar. You know what you are paying, when, and against what delivered work.",
            },
            {
              number: "4",
              title: "Municipal permit and drawings",
              description:
                "We check what your city or borough requires for your work: alteration permit, construction permit, certificate of authorization. We prepare the required drawings, file the application and follow the file. In a co-ownership, we also obtain the syndicate's approval.",
            },
            {
              number: "5",
              title: "Site preparation and protection",
              description:
                "Before the first demolition: floor and surface protection, dust containment, sealed-off access, debris container and temporary services as needed. This is also when we agree with you on working hours and access to the home.",
            },
            {
              number: "6",
              title: "Trade sequence and inspections",
              description:
                "Demolition, structure, rough plumbing, rough electrical, ventilation, insulation and vapour barrier, drywall, then finishing. Each trade starts after the previous stage has been inspected — including municipal inspections where required. Nothing is covered up before it has been checked.",
            },
            {
              number: "7",
              title: "Finishing and deficiency list",
              description:
                "Paint, flooring, cabinetry, hardware, appliances and sealants. We then walk the site with you, note anything that isn't up to standard and draw up the deficiency list. It is corrected before the final payment, not after.",
            },
            {
              number: "8",
              title: "Handover and guarantee",
              description:
                "Cleaning, handover of the premises, manufacturer warranties and permit documents. The work performed is guaranteed: scope and duration are written into the contract. If something shifts in the following months, you call the same contractor back.",
            },
          ],
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our renovation services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "The documents you receive",
          intro:
            "A well-run project leaves a paper trail. Here is what you hold at each stage — and what you should ask of any contractor, not only of us.",
          items: [
            {
              title: "The itemized quote",
              description:
                "the work line by line, the materials planned and what is not included.",
            },
            {
              title: "The written contract",
              description:
                "scope, price, dated schedule, payment calendar and guarantee terms.",
            },
            {
              title: "Change orders",
              description:
                "every change in scope is priced and accepted in writing before it is carried out.",
            },
            {
              title: "The permit and drawings",
              description:
                "a copy of the issued permit and the filed drawings, useful when you resell.",
            },
            {
              title: "The deficiency list",
              description:
                "drawn up with you at the final walkthrough and corrected before the final payment.",
            },
            {
              title: "The certificates",
              description:
                "RBQ licence, liability insurance and site coverage, on request.",
            },
          ],
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "More about Dilamco",
              href: "/a-propos",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Construction drawings and project documents on a work table",
          },
          cardTitle: "Everything in writing",
          cardDescription:
            "No structural decision rests on a verbal agreement or an ambiguous email.",
        },
      },
    },
    {
      id: "inputs",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What speeds up the first conversation",
          intro:
            "You don't need drawings or specifications to call us. A few basic details are enough to frame the discussion and give you a useful order of magnitude on the first call back.",
          badges: ["Address", "Type of work", "Scope", "Timing"],
          cardTitle: "Useful from the first call",
          items: [
            "The address, or at least the city and neighbourhood",
            "The type of building: single-family, plex, condo or commercial unit",
            "The rooms involved and how far you want the work to go",
            "The approximate year the building was built, if you know it",
            "Photos of the current condition and, if possible, rough measurements",
            "Your timing and the budget you have in mind, even loosely",
          ],
          actions: [
            {
              label: "Get a free estimate",
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
      id: "resources",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Useful pages to go further",
          intro:
            "Depending on where you are in the process, these pages detail the work, the territory and the technical choices.",
          columns: "3",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "The room with the most trades involved: plumbing, electrical, ventilation and cabinetry.",
              href: "/services/renovation/cuisine",
              badges: ["Kitchen", "Turnkey"],
              ctaLabel: "See kitchens",
            },
            {
              title: "Bathroom renovation",
              description:
                "Plumbing, waterproofing membrane, tile and ventilation: watertightness first.",
              href: "/services/renovation/salle-de-bain",
              badges: ["Waterproofing", "Tile"],
              ctaLabel: "See bathrooms",
            },
            {
              title: "Home addition",
              description:
                "The case where permits, drawings and foundation work stretch the schedule the most.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Permits", "Structure"],
              ctaLabel: "See additions",
            },
            {
              title: "Disaster restoration",
              description:
                "Controlled demolition, drying, reconstruction and documentation for your insurer.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Water damage", "Insurance"],
              ctaLabel: "See restoration",
            },
            {
              title: "Areas we serve",
              description:
                "Permit requirements and housing stock change from one city to the next.",
              href: "/zones",
              badges: ["Territory", "Permits"],
              ctaLabel: "See the areas",
            },
            {
              title: "About Dilamco",
              description:
                "Licence, classes, bond, insurance and designated officer: the verifiable facts.",
              href: "/a-propos",
              badges: ["RBQ", "Insurance"],
              ctaLabel: "See about",
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
          heading: "FAQ — how a project runs",
          intro:
            "The questions that come up most often between the first call and signing the contract.",
          items: [
            {
              q: "Is the estimate really free?",
              a: "Yes. The site visit and the initial estimate are not billed and commit you to nothing. If the project requires architectural drawings or an engineer's assessment, that work is separate and you are told what it costs before it is undertaken.",
            },
            {
              q: "How long between the call and the start of work?",
              a: "We reply within 24 to 48 business hours and the visit follows quickly. What stretches the timeline after that is mainly the municipal permit and trade availability. For work that needs no permit, expect a few weeks; for an addition, plan for more lead time up front.",
            },
            {
              q: "Who handles the permit application?",
              a: "We do. We check what your city or borough requires, prepare the documents and drawings, file the application and follow the file through to issuance. The permit is issued in the owner's name, but you don't have to navigate the process yourself.",
            },
            {
              q: "How are payments structured?",
              a: "The payment calendar is written into the contract and tied to actual progress, not to fixed dates. A deposit on signing, then instalments linked to milestones that can be verified. The final instalment is due only once the deficiency list has been corrected.",
            },
            {
              q: "What happens if a hidden problem is found?",
              a: "It happens often in renovation: mould behind a wall, non-compliant wiring, weakened structure. We stop, document it, explain the options and price the fix in a change order. Nothing is carried out before you have accepted it in writing.",
            },
            {
              q: "Can we live in the house during the work?",
              a: "Often yes, depending on scope. For a bathroom or a basement, we isolate the work area and protect the circulation paths. For a major renovation touching the kitchen, the main plumbing or the electrical service, the disruption is real and we discuss it plainly before signing.",
            },
            {
              q: "Do you work through the winter?",
              a: "Yes. Interior work runs year-round. What gets planned around the season is excavation, foundations, roofing and exterior cladding. For an addition, the sequence is set so the envelope is closed in before the ground freezes.",
            },
            {
              q: "Who is on site day to day?",
              a: "The trades required for the stage under way, under our coordination. You have a single point of contact at Dilamco for follow-up, questions and decisions. You neither hire nor pay the subcontractors directly.",
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
          heading: "It starts with a visit and an estimate",
          intro:
            "Tell us about the project. We book a visit, take the measurements that need taking, and you leave with an itemized quote rather than a number thrown out over the phone.",
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 • West Island, Montréal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
