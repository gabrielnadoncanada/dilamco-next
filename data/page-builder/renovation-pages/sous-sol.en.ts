import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSousSolPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Basement finishing in Montreal — turnkey",
    description:
      "Basement finishing: moisture, drainage, insulation, vapour barrier, egress, permit and plumbing. RBQ-licensed general contractor.",
    path: "/services/renovation/sous-sol",
    ogAlt: "Basement finished by a general contractor in Montreal",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Basement finishing",
      url: SITE.url + "/services/renovation/sous-sol",
    },
  ],
  service: {
    name: "Basement finishing",
    description:
      "Basement conversion and finishing by a general contractor: moisture and drainage assessment, insulation, vapour control, permit, egress, electrical, plumbing and finishing.",
    url: SITE.url + "/services/renovation/sous-sol",
    serviceType: "Basement finishing",
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
            "Turnkey basement finishing: solve the moisture before a single panel goes up",
          description:
            "A finished basement is the cheapest living area you can add per square foot — provided the water, the insulation and the code compliance are dealt with before the finishes. Finishing a basement requires a permit in Montreal, and a bedroom requires an egress opening. We take the whole mandate, from moisture diagnosis to handover.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement layouts",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ licence 8306-0806-27",
            "Permit required",
            "Moisture and drainage",
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement finished and fitted out by a general contractor",
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
          heading: "Why so many finished basements have to be redone",
          description:
            "The basement is where you see the most work done too fast. It looks fine for two years, then the smell shows up, the floor cups, or mould creeps up behind the drywall. The causes are always the same.",
          cards: [
            {
              title: "Finishing over a water problem",
              description:
                "Foundation crack, blocked weeping tile, ground sloping toward the house, failing sump pump: if water still gets in, no material will fix it. The diagnosis comes before the finishing quote.",
            },
            {
              title: "Vapour control on the wrong side",
              description:
                "A basement wall is built with continuous insulation against the concrete and vapour control suited to it. Misplaced polyethylene traps moisture inside the wall and feeds mould.",
            },
            {
              title: "No egress in the bedroom",
              description:
                "A basement bedroom needs an egress window or a door to the outside. Without it, the room is not a legal bedroom, which is a problem at resale and at inspection.",
            },
            {
              title: "Undeclared work",
              description:
                "Finishing a basement requires a permit. Without one, the finished area is not recognized, the electrical is not inspected, and a loss can turn into a dispute with your insurer.",
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
          heading: "What a full basement finishing covers",
          intro:
            "The mandate splits into four phases. The first two are invisible once finished, and they are what decides whether the basement holds up.",
          columns: "2",
          items: [
            {
              title: "Diagnosis, water and permit",
              description: "The step everything else depends on.",
              icon: "droplets",
              bullets: [
                "Inspection of foundation walls, slab, and any signs of infiltration or efflorescence.",
                "Check of the perimeter drain, ground slope, gutters and sump pump.",
                "Cracks repaired and drainage corrected before any finishing.",
                "Basement conversion permit filed with your city or borough.",
              ],
            },
            {
              title: "Insulation, vapour control and framing",
              description: "The wall that decides moisture for twenty years.",
              icon: "layers",
              bullets: [
                "Continuous insulation against the concrete with vapour control suited to a foundation wall.",
                "Studs set off the concrete, with no direct contact with the slab.",
                "Slab perimeter and rim joists insulated.",
                "Ceiling sound insulation between basement and main floor where wanted.",
              ],
            },
            {
              title: "Electrical, plumbing and egress",
              description: "The work inspected before the walls close.",
              icon: "wrench",
              bullets: [
                "Circuits, receptacles, recessed lighting, smoke and carbon monoxide alarms.",
                "Egress window or exterior door where a bedroom is created.",
                "Basement bathroom: drain in the slab or ejector pump, ventilation, water supply.",
                "Municipal inspections booked at the right stages.",
              ],
            },
            {
              title: "Floors, ceiling and finishes",
              description: "The visible part, laid over a sound base.",
              icon: "package2",
              bullets: [
                "Flooring suited to a basement, over an insulating subfloor where required.",
                "Suspended ceiling or drywall, depending on service access and available height.",
                "Drywall, taping, paint, doors, trim and stairs.",
                "Storage, built-in shelving, bar or custom millwork supplied and installed by our crews.",
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
          heading: "How a basement job unfolds",
          intro:
            "Order matters more here than anywhere else: everything touching water and compliance gets settled before a single sheet of drywall goes up.",
          steps: [
            {
              number: "1",
              title: "Visit and diagnosis",
              description:
                "Inspection of the foundation, slab, sump pump, drainage and clear height. We locate the water service, the electrical panel and the main drain.",
            },
            {
              number: "2",
              title: "Quote and layout",
              description:
                "Layout plan — family room, bedroom, bathroom, office, storage —, written scope and estimate within 24 to 48 business hours.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Signed with the schedule, then the basement conversion permit filed with the drawings your municipality requires.",
            },
            {
              number: "4",
              title: "Corrective work",
              description:
                "Cracks repaired, drainage or grading corrected, sump pump replaced if needed. We do not finish over an active leak.",
            },
            {
              number: "5",
              title: "Framing and mechanical",
              description:
                "Insulation, framing, egress window, electrical, plumbing and ventilation, then municipal inspections before the walls close.",
            },
            {
              number: "6",
              title: "Finishing and handover",
              description:
                "Drywall, taping, paint, flooring, ceiling, doors, trim, custom storage, adjustments and return of the space.",
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
          heading: "Permit, egress and compliance",
          intro:
            "Finishing a basement is regulated. In Montreal, as in most Greater Montreal municipalities, converting an unfinished basement into living space requires an alteration permit with drawings attached. We prepare and file the application.",
          items: [
            {
              title: "Conversion permit required",
              description:
                "Adding habitable rooms in the basement changes the building's declared living area. A permit is required, and the borough may ask for a dimensioned layout plan.",
            },
            {
              title: "Egress window for any bedroom",
              description:
                "A basement bedroom must have an escape route: an operable window of sufficient size and reachable height, or a door directly outside. That often means cutting the concrete and building a window well.",
            },
            {
              title: "Clear ceiling height",
              description:
                "The Code sets a minimum height for a space to count as habitable. Ducts, beams and pipes are worked around with a considered ceiling plan, occasionally by lowering the slab when the margin is too tight.",
            },
            {
              title: "Electrical and alarms",
              description:
                "Circuits, receptacles and lighting are installed to code and inspected. Smoke alarms and a carbon monoxide detector are fitted where required.",
            },
            {
              title: "Secondary suite or family room",
              description:
                "Creating an independent dwelling in the basement depends on your zoning and adds requirements: separate entrance, fire separation, sound insulation, sometimes parking. That is a different scope from a simple family room.",
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
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Materials and finishes suited to a basement conversion",
          },
          cardTitle: "Why the permit protects you",
          cardDescription:
            "A basement finished with a permit and inspections counts as recognized living area, sells better and does not become a dispute with your insurer after a loss. Our RBQ licence 8306-0806-27 commits us to the Québec Construction Code.",
        },
      },
    },
    {
      id: "usages",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Family room, bedroom, office or secondary suite?",
          intro:
            "The scope shifts a lot depending on what the basement is meant to become. An open space with no bedroom is the simplest mandate; a bedroom adds the egress opening; a secondary suite adds zoning, fire separation and a separate entrance.",
          badges: [
            "Family room",
            "Bedroom",
            "Bathroom",
            "Office",
            "Storage",
            "Secondary suite",
          ],
          cardTitle: "What we confirm before choosing",
          items: [
            "The real clear height under beams and ducts.",
            "Where the main drain sits, if a bathroom is wanted.",
            "Whether an egress window can be cut into the foundation wall.",
            "The zoning of your sector, if the goal is an independent dwelling.",
            "The capacity of the electrical panel and the heating system.",
          ],
          actions: [
            {
              label: "See basement layouts",
              href: "/espaces/sous-sol",
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
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What does finishing a basement cost?",
          description:
            "The ranges below are indicative for the Québec market. The price depends mostly on the area, the condition of the envelope and how much mechanical work has to be added.",
          cards: [
            {
              title: "Basic conversion — from roughly $25,000",
              description:
                "Open family room: insulation, framing, electrical, drywall, paint, flooring and ceiling, in a dry basement with no bathroom.",
            },
            {
              title: "Full basement — $40,000 to $80,000 and up",
              description:
                "Several closed rooms, a bedroom with egress window, a bathroom, custom storage and careful finishing. This is the most common mandate.",
            },
            {
              title: "Corrective work, budgeted separately",
              description:
                "Crack repair, weeping tile, sump pump, cutting concrete for an egress window or a bathroom drain: each is priced on its own, after the diagnosis.",
            },
            {
              title: "What moves the number",
              description:
                "Area, clear height, number of closed rooms, adding a bathroom, finish quality, ceiling sound insulation and zoning requirements for a secondary suite.",
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
          heading: "What usually comes with a basement project",
          intro:
            "Most finished basements involve at least one of these mandates. They are carried out under the same contract.",
          items: [
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "Adding a basement bathroom: drain in the slab or ejector pump, waterproofing membrane, ventilation and vanity.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Bathroom built in a basement",
              },
              badges: ["Bathroom", "Plumbing"],
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Basements take the most water damage. Rebuilding after a flood or a sewer backup, with the insurance file.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Basement rebuilt after water damage",
              },
              badges: ["Water damage", "Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Slab flatness, insulating subfloor and the junction at the stairs: basement flooring has its own rules.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring laid over a basement slab",
              },
              badges: ["Slab", "Subfloor"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Basement layouts",
              href: "/espaces/sous-sol",
              description:
                "Home theatre, games room, bar, wine cellar, library or storage: the possible uses, with examples.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Games room in a finished basement",
              },
              badges: ["Layout", "Custom"],
              footerCtaLabel: "See basements",
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
          heading: "What a properly finished basement delivers",
          description:
            "You do not recognize a good basement by its finishes but by its air. If it smells like a basement, something was not settled before the drywall went up.",
          cards: [
            {
              title: "A dry space with no smell",
              description:
                "Water was stopped at the source, the wall assembly handles vapour correctly, and relative humidity stays stable season to season.",
            },
            {
              title: "Recognized living area",
              description:
                "Permit obtained, inspections passed, compliant clear height and egress in place: the square footage actually counts at resale.",
            },
            {
              title: "A room that works in winter",
              description:
                "Continuous insulation, treated rim joists and an insulated floor: the space is usable in January, not only in June.",
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
          heading: "FAQ — basement finishing",
          intro:
            "Permits, moisture, legal bedrooms, bathrooms, pricing, timelines and warranty.",
          items: [
            {
              q: "Do I need a permit to finish a basement?",
              a: "Yes. Converting an unfinished basement into living space requires an alteration permit in Montreal and in the vast majority of Greater Montreal municipalities, with a layout plan attached. The permit also triggers the electrical and plumbing inspections. We prepare and file the application for you.",
            },
            {
              q: "My basement takes on water. Can it still be finished?",
              a: "Not before the water is stopped. We first identify the source — foundation crack, blocked weeping tile, ground sloping toward the house, misdirected downspouts, failing sump pump — and correct it. Finishing over an active leak guarantees having to redo everything.",
            },
            {
              q: "Can I put a bedroom in the basement?",
              a: "Yes, provided there is an escape route: an operable window of sufficient size and reachable height, or a door directly outside. That often means cutting the foundation wall and installing a window well. Without egress, the room cannot be declared a bedroom.",
            },
            {
              q: "How do you insulate a foundation wall?",
              a: "With continuous insulation applied against the concrete and vapour control suited to that assembly, with studs set off the wall and away from direct contact with the slab. Rim joists and the slab perimeter are treated as well. That sequence is what stops condensation from forming inside the wall.",
            },
            {
              q: "Can a bathroom be added in the basement?",
              a: "Yes. Two options, depending on where the main drain sits: break the slab to connect by gravity, or install an ejector pump. Add mechanical ventilation to the exterior, water supply and inspection before the walls close. It is the single heaviest item in a basement budget.",
            },
            {
              q: "What if the ceiling is too low?",
              a: "The Code sets a minimum clear height for a space to count as habitable. A few inches can often be gained by rethinking the ceiling plan around ducts and beams, or by choosing a thinner subfloor. When the margin is genuinely insufficient, lowering the slab is a heavy option to evaluate case by case.",
            },
            {
              q: "Can I create a rental unit in the basement?",
              a: "That depends on your zoning, which either permits a secondary suite or does not. The requirements go well beyond a family room: separate entrance, fire separation from the main dwelling, sound insulation, ventilation and sometimes parking. We check the zoning before proposing a scope.",
            },
            {
              q: "What does finishing a basement cost?",
              a: "As an indication, a basic conversion starts around $25,000, and a full basement with a bedroom, a bathroom and built-in storage often lands between $40,000 and $80,000 and up. Corrective work on drainage, cracks or an egress window is priced separately, after the diagnosis.",
            },
            {
              q: "How long does the job take?",
              a: "A full basement takes several weeks of on-site work, plus your municipality's permit turnaround. Adding a bathroom, cutting an egress window and correcting moisture issues all extend the schedule, which is attached to the contract.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes. Work is warranted and the terms are in the contract. Our RBQ licence 8306-0806-27 has been valid and unrestricted since 2004, with a $40,000 bond and no claims on file. Civil liability and job-site insurance are in force.",
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
          heading: "A basement to finish in the West Island?",
          intro:
            "We come and inspect the foundation, the drainage, the clear height and the electrical panel, then come back with a detailed estimate within 24 to 48 business hours, permit included.",
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
          note: "RBQ licence 8306-0806-27 · Moisture, insulation, permit and egress",
        },
      },
    },
  ],
};
