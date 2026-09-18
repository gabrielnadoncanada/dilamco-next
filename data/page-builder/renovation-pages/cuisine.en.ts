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
          eyebrow: "Dilamco - Renovation",
          heading:
            "Full kitchen renovation: one general contractor, not six suppliers",
          description:
            "Redoing a kitchen is not ordering cabinets. It is demolition, moving plumbing, adding electrical circuits, venting a range hood through an exterior wall, redoing the floor and the walls, setting cabinets and countertop, then connecting everything. We sign one contract for all of it, permit included.",
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
            "Coordinated trades",
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Kitchen renovated by a general contractor in Montreal",
          },
          caption:
            "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What actually derails a kitchen renovation",
          description:
            "The kitchen packs more trades per square metre than any other room: plumbing, electrical, ventilation, finishes, carpentry, countertop. When those are bought separately, the trouble always shows up in the same places.",
          cards: [
            {
              title: "A load-bearing wall opened without a permit",
              description:
                "Many kitchen renovations aim to open onto the living room. As soon as a load-bearing wall is touched, the city requires a permit and usually an engineer-sealed drawing for the replacement beam. Skipping that step can shut the site down.",
            },
            {
              title: "Plumbing moved too late",
              description:
                "Moving a sink or a dishwasher means reopening the floor or the wall, rebuilding a drain at the right slope and passing inspection before closing up. Deciding that after the cabinets are ordered is expensive.",
            },
            {
              title: "An electrical panel that cannot keep up",
              description:
                "Range, wall oven, induction cooktop, dishwasher, built-in microwave, island receptacles: the panel has to carry it. We check that at the site visit, not during hookup week.",
            },
            {
              title: "A hood that vents nowhere",
              description:
                "A serious range hood needs an exterior outlet, a proper duct diameter and a short run. In a condo or in the middle of a house, that single constraint sometimes redefines the whole layout.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What a full kitchen renovation covers",
          intro:
            "The exact scope is written into the quote. Here is what a full kitchen mandate usually includes, from the permit to the last trim.",
          columns: "2",
          items: [
            {
              title: "Permit and demolition",
              description: "What happens before the first cabinet box arrives.",
              icon: "fileCheck",
              bullets: [
                "Permit requirement confirmed: load-bearing wall, relocated plumbing, new exterior opening.",
                "Drawings filed with the city or borough, with an engineer's report when structure is involved.",
                "Protection of the premises, removal of old cabinets, countertop and finishes.",
                "Debris handling and disposal.",
              ],
            },
            {
              title: "Plumbing, electrical, ventilation",
              description: "The work that has to be done before walls close.",
              icon: "wrench",
              bullets: [
                "Relocating sink supply and drain, dishwasher and refrigerator lines.",
                "New circuits, island receptacles, recessed and under-cabinet lighting.",
                "Range hood duct to the exterior with the right diameter and run.",
                "Municipal inspections booked before the walls are closed.",
              ],
            },
            {
              title: "Floors, walls and ceilings",
              description: "The base everything else aligns to.",
              icon: "layers",
              bullets: [
                "Subfloor repair and flatness correction before any finish goes down.",
                "New flooring or a clean transition to the adjoining rooms.",
                "Drywall, taping, sanding and paint after the mechanical work.",
                "Backsplash, mouldings and finish transitions.",
              ],
            },
            {
              title: "Cabinets, countertops and finishing",
              description: "The visible part, supplied and installed by the same crew.",
              icon: "package2",
              bullets: [
                "Custom cabinets built for us by our partner factory, under RBQ subcategory 12.",
                "Birch plywood boxes, solid birch drawers, quality hardware.",
                "Countertop templating, cutting and setting, with sink and cooktop cutouts.",
                "Appliance installation, door and drawer adjustment, final walkthrough.",
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
          heading: "How a kitchen job unfolds",
          intro:
            "The order is not negotiable: what hides behind the walls goes in before what shows. Every step taken out of order is paid for in rework.",
          steps: [
            {
              number: "1",
              title: "Visit and quote",
              description:
                "Dimensions taken, electrical panel checked, existing plumbing, structure and possible hood routing assessed. Detailed estimate within 24 to 48 business hours.",
            },
            {
              number: "2",
              title: "Contract, drawings, permit",
              description:
                "Contract signed with the schedule, kitchen layout drawings, cabinet shop drawings and permit application filed when required.",
            },
            {
              number: "3",
              title: "Demolition",
              description:
                "Circulation areas protected, cabinets, countertop and finishes removed, the relevant walls opened. This is where the surprises in the existing structure appear.",
            },
            {
              number: "4",
              title: "Mechanical and inspection",
              description:
                "Framing if a wall is opened, then plumbing, electrical and ventilation. Municipal inspection before anything is closed up.",
            },
            {
              number: "5",
              title: "Closing up and finishing",
              description:
                "Insulation where required, drywall, taping, paint, then flooring. The room is clean and square again before the cabinets arrive.",
            },
            {
              number: "6",
              title: "Cabinets, countertop, handover",
              description:
                "Boxes set and levelled, countertop templated and installed, backsplash, appliances connected, adjustments and return of the space.",
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
          heading: "Permits: when does a kitchen need one?",
          intro:
            "Requirements vary from one municipality and borough to the next, but the logic is consistent across Québec. We confirm your case before work starts and file the application for you.",
          items: [
            {
              title: "Load-bearing wall modified or removed",
              description:
                "Permit required, almost always with an engineer-sealed drawing for the beam and its supports. It is the most common trigger in kitchen work.",
            },
            {
              title: "Plumbing moved or added",
              description:
                "Relocating a sink, adding an island drain or altering plumbing venting generally triggers a permit and an inspection before closing up.",
            },
            {
              title: "New exterior opening",
              description:
                "Cutting a wall for a hood outlet, enlarging a window or adding a patio door affects the envelope and the building's appearance: permit required.",
            },
            {
              title: "Cosmetic refresh with no structural work",
              description:
                "Replacing cabinets and countertop in the same footprint, repainting and changing the flooring usually needs no permit. We confirm with the city anyway.",
            },
            {
              title: "Condos and co-ownership",
              description:
                "On top of the municipal permit come the syndicate's authorization, work hours, elevator access and sometimes restrictions on plumbing and venting.",
            },
          ],
          actions: [
            {
              label: "See turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planning and measuring a kitchen renovation",
          },
          cardTitle: "Why we do not skip this",
          cardDescription:
            "Work done without a permit can lead to a stop-work order, mandated restoration and complications at resale or during an insurance claim. Our RBQ licence commits us to the Québec Construction Code.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What does a kitchen renovation cost?",
          description:
            "The ranges below are indicative for the Québec market. The real price depends on the area, the condition of what is there, how much mechanical work is involved and the level of finish. The detailed quote is free and binds both parties once signed.",
          cards: [
            {
              title: "Refresh — from roughly $20,000",
              description:
                "Cabinets, countertop and flooring replaced in the same footprint, with no plumbing or structural changes. No permit in most cases.",
            },
            {
              title: "Full renovation — $35,000 to $50,000 and up",
              description:
                "Demolition, revised layout, plumbing and electrical modified, ventilation, floors and walls redone, custom cabinets, countertop and finishing. This is our typical mandate.",
            },
            {
              title: "Opening onto the living area — budget separately",
              description:
                "Removing a load-bearing wall adds the engineer's report, the beam, the supports, the permit and the ceiling, floor and electrical work that follows. It is the most underestimated line in a kitchen budget.",
            },
            {
              title: "What moves the number",
              description:
                "Area, number of cabinet boxes, countertop material, built-in appliances, relocated plumbing, panel capacity, ceiling height and site access.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Related work on a kitchen project",
          intro:
            "A kitchen renovation rarely stops at the kitchen. These are the mandates most often attached to it.",
          items: [
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Kitchen flooring meets the living room and the entry. Subfloor, levels and transitions have to be settled before cabinets go in.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring transition between kitchen and living area",
              },
              badges: ["Flooring", "Transitions"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "When the kitchen is simply too small, a rear addition is sometimes the only real answer. Foundation, structure, envelope and connections.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition to enlarge a kitchen",
              },
              badges: ["Addition", "Structure"],
              footerCtaLabel: "See addition",
            },
            {
              title: "Custom kitchens",
              href: "/espaces/cuisine",
              description:
                "The cabinetry side of the project: layout, island, storage, finishes and hardware, with completed examples.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen built by Dilamco",
              },
              badges: ["Cabinets", "Custom"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "After water damage, base cabinets and kitchen flooring often have to be replaced. Rebuilding and insurance documentation.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Kitchen rebuilt after water damage",
              },
              badges: ["Loss", "Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What a well-run kitchen job should deliver",
          description:
            "A good kitchen is not judged only on a photo taken the day it is handed over. It is judged on what was done behind the walls and on what still holds five years later.",
          cards: [
            {
              title: "Compliant, inspected work",
              description:
                "Plumbing, electrical and ventilation carried out to code and signed off by the municipal inspector before the walls were closed.",
            },
            {
              title: "A schedule that was held",
              description:
                "Trades follow one another with no idle stretches, and any slippage is announced in advance rather than discovered after the fact.",
            },
            {
              title: "Finishing that lasts",
              description:
                "Cabinets level, doors aligned, countertop with no movement, backsplash straight, clean flooring transitions between rooms.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ — kitchen renovation",
          intro:
            "Pricing, permits, duration, plumbing, condos, appliances and warranty.",
          items: [
            {
              q: "What does a full kitchen renovation cost?",
              a: "As an indication, a full renovation generally runs between $35,000 and $50,000 and up, while a simple refresh starts around $20,000. Area, relocated plumbing, opening a load-bearing wall, countertop material and built-in appliances are the main drivers. The detailed estimate is free and sets out the exact scope.",
            },
            {
              q: "Do I need a permit to redo my kitchen?",
              a: "Yes for most full renovations: as soon as a load-bearing wall is modified, plumbing is relocated or an exterior opening is cut, your city requires a permit and sometimes an engineer's drawing. Replacing cabinets and countertop in the same footprint usually does not. We check with your municipality and file the application.",
            },
            {
              q: "How long does the job take?",
              a: "For a full renovation, expect several weeks of on-site work, plus your municipality's permit turnaround and the 9 to 15 week production lead time for custom cabinets. Those two timelines are planned in parallel with preparatory work so the kitchen is not out of service longer than necessary.",
            },
            {
              q: "Can the sink or dishwasher be moved?",
              a: "Yes, but it is plumbing work that generally requires opening the floor or the wall, rebuilding the drain at the correct slope, adjusting the plumbing vent and passing inspection before closing up. That is decided at quoting time, not after the cabinets are ordered.",
            },
            {
              q: "Can I remove the wall between the kitchen and the living room?",
              a: "Often yes, but first we determine whether the wall is load-bearing. If it is, a structural engineer sizes the beam and supports, the drawing is filed with the permit application, and the resulting ceiling, flooring and electrical work has to be budgeted. We tell you at the site visit which situation you are in.",
            },
            {
              q: "Is this feasible in a condo?",
              a: "Yes. You need to confirm with the syndicate the permitted work hours, elevator access, protection of common areas and any restrictions in the declaration of co-ownership, particularly on plumbing, hood venting and floor coverings. Those get settled before the start, not during.",
            },
            {
              q: "Can I stay in the house during the work?",
              a: "Most clients do. We protect circulation areas and group the noisiest days together. Still, plan a temporary kitchen — fridge, microwave, bathroom sink — for the period when the room is out of service.",
            },
            {
              q: "Do you supply the cabinets and the countertop?",
              a: "Yes. Custom cabinets are built for us by our partner factory, under subcategory 12 of our RBQ licence, then measured and installed by our own crews. The countertop is templated, cut and set within the same mandate. There is no extra supplier for you to coordinate.",
            },
            {
              q: "Who installs the appliances?",
              a: "We plan the clearances, circuits, water supply and venting during the mechanical phase, then connect the appliances at the end of the job. Built-in units, wall ovens and integrated hoods require confirmed dimensions before the cabinets go into production.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes. Work is warranted and the terms are written into the contract. Our RBQ licence 8306-0806-27 has been valid and unrestricted since 2004, with a $40,000 bond and no claims on file. Civil liability and job-site insurance are in force.",
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
          heading: "Ready to have your kitchen project assessed?",
          intro:
            "We come and see the room, check the structure, the electrical panel and the plumbing, then come back with a detailed estimate within 24 to 48 business hours.",
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
          note: "RBQ licence 8306-0806-27 · Permit, trades and schedule included",
        },
      },
    },
  ],
};
