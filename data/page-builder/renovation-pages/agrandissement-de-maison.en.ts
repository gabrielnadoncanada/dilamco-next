import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Home addition in Montreal — turnkey general contractor",
    description:
      "Residential addition: zoning, permit, foundation, structure, envelope and service connections. RBQ-licensed general contractor.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Home addition by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Home addition",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Home addition",
    description:
      "Residential addition by a general contractor: zoning verification, building permit, engineered drawings, foundation, structure, envelope, service connections and interior finishing.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Residential addition",
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
            "Home addition: from zoning to foundation, through to the finishes",
          description:
            "An addition is not a big renovation. It is construction: zoning and setbacks have to be verified, a permit obtained, the structure calculated by an engineer, footings poured below the frost line, an airtight envelope closed in, and the new section tied into the existing services. We are the general contractor accountable for all of it.",
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
            "Categories 1.2 and 1.3",
            "Engineered drawings",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Residential addition under construction",
          },
          caption:
            "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "risks",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What stops an addition project",
          description:
            "Most additions that fail do not fail on site. They fail beforehand, on regulatory or structural constraints that could have been checked in a few days. Here are the four obstacles that come up most often.",
          cards: [
            {
              title: "Zoning does not allow the area you want",
              description:
                "Every lot is subject to front, rear and side setbacks, a lot coverage ratio and sometimes a maximum height. A 20-foot rear addition on a narrow lot may simply be impossible without a variance.",
            },
            {
              title: "The existing structure cannot carry the load",
              description:
                "Opening a load-bearing wall to join the two sections, adding a storey or framing a new roof requires a load calculation. A structural engineer must provide sealed drawings, and that document is part of the permit application.",
            },
            {
              title: "The foundation is not suited to the site",
              description:
                "An addition on a slab, on piles or on a poured foundation does not behave the same way. The footing has to reach below the frost line, and the junction with the existing foundation must avoid differential settlement.",
            },
            {
              title: "The envelope is not closed before winter",
              description:
                "An addition exposed to the weather takes on water. The sequence — excavation, foundation, framing, roof, windows, envelope — has to be planned around the season, not around the wish to start quickly.",
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
          heading: "What an addition mandate covers",
          intro:
            "An addition runs through four major phases. We are the general contractor for all of them and we coordinate the outside professionals required.",
          columns: "2",
          items: [
            {
              title: "Feasibility, zoning and permit",
              description: "What gets verified before anything is drawn.",
              icon: "fileCheck",
              bullets: [
                "Zoning by-law check: setbacks, siting, height, lot coverage ratio.",
                "Survey of the existing building, foundation, structure and services.",
                "Construction drawings and structural drawings sealed by an engineer.",
                "Building permit application filed with your city or borough and followed through to issuance.",
              ],
            },
            {
              title: "Excavation and foundation",
              description: "The part that decides how the building holds up.",
              icon: "hardHat",
              bullets: [
                "Excavation, with underground services located beforehand.",
                "Footings and foundation poured below the frost line.",
                "Foundation drain, damp-proofing and free-draining backfill.",
                "Junction with the existing foundation designed to limit differential settlement.",
              ],
            },
            {
              title: "Structure, envelope and roof",
              description: "Closing the building in before the weather decides.",
              icon: "building2",
              bullets: [
                "Framing to the engineer's drawings, with beams and supports sized accordingly.",
                "Existing wall opened and loads carried on a calculated beam.",
                "Roof tied into the existing one, membrane, flashing and gutters.",
                "Insulation, air barrier, vapour control, windows, doors and exterior cladding matched to the house.",
              ],
            },
            {
              title: "Connections and interior finishing",
              description: "The new section becomes a real part of the house.",
              icon: "wrench",
              bullets: [
                "Plumbing, electrical, heating and ventilation extended from the existing systems, with their capacity verified.",
                "Municipal inspections at the required stages, before walls are closed.",
                "Drywall, taping, paint, flooring tied into the levels of the existing house.",
                "Kitchen, bathroom, storage or walk-in millwork supplied and installed by our crews.",
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
          heading: "How an addition unfolds",
          intro:
            "It is the longest mandate we take on, and the one where the administrative phase weighs the most. Feasibility and permitting often take as long as the foundation.",
          steps: [
            {
              number: "1",
              title: "Feasibility",
              description:
                "Site visit, survey of the existing building and zoning check: setbacks, siting, height and permitted area. This is when we know whether the project works as imagined.",
            },
            {
              number: "2",
              title: "Drawings and engineer",
              description:
                "Construction drawings, then structural calculations and sealed drawings for the foundation, the opening beam and the framing.",
            },
            {
              number: "3",
              title: "Permit and contract",
              description:
                "Building permit application filed with the drawings, contract signed with the schedule and the budget, and issuance awaited.",
            },
            {
              number: "4",
              title: "Excavation and foundation",
              description:
                "Services located, excavation, footings, foundation, drain, damp-proofing and backfill. Inspection before backfilling.",
            },
            {
              number: "5",
              title: "Structure and close-in",
              description:
                "Framing, roof, windows, doors, air barrier and exterior cladding. The goal: a closed, weathertight building as early as possible.",
            },
            {
              number: "6",
              title: "Mechanical and finishing",
              description:
                "Plumbing, electrical, heating and ventilation, inspections, insulation, drywall, paint, flooring, custom millwork, then handover.",
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
          heading: "Permit, zoning and engineer: what is mandatory",
          intro:
            "An addition adds floor area and changes the building's footprint. That is a building permit, not a renovation permit, and it requires specific documents.",
          items: [
            {
              title: "Zoning by-law compliance",
              description:
                "Front, rear and side setbacks, lot coverage, maximum height and sometimes alignment with neighbouring buildings. If the project exceeds them, a minor variance application is needed, with delays and no guaranteed outcome.",
            },
            {
              title: "Construction drawings",
              description:
                "Site plan, floor plans, sections and elevations, required by the city to review the application. Some boroughs also ask for an up-to-date certificate of location.",
            },
            {
              title: "Sealed structural drawings",
              description:
                "Foundation, beams, supports and the opening in the existing wall must be calculated by a structural engineer. The sealed drawing goes with the application and serves as the site reference.",
            },
            {
              title: "Inspections at key stages",
              description:
                "Foundation before backfilling, framing, plumbing and electrical before the walls close. A missed inspection means reopening what was just closed.",
            },
            {
              title: "Capacity of existing systems",
              description:
                "Electrical panel, heating appliance, water service and septic system where applicable must be able to serve the added area. We check that before pricing, not after.",
            },
          ],
          actions: [
            {
              label: "See all services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planning and surveying a residential addition project",
          },
          cardTitle: "Our licence covers this work",
          cardDescription:
            "RBQ licence 8306-0806-27, general contractor categories 1.2 small buildings and 1.3 buildings of all kinds, valid and unrestricted since 2004. We build additions, conversions and rebuilds — not new houses, which fall under a different category.",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "The types of addition we build",
          intro:
            "The shape of an addition depends as much on the lot and the zoning as on the need. Often the solution we land on is not the one first imagined.",
          badges: [
            "Rear addition",
            "Side addition",
            "Second storey",
            "Four-season sunroom",
            "Primary suite",
            "Attached garage",
          ],
          cardTitle: "What we assess before deciding",
          items: [
            "The area zoning allows once setbacks are applied.",
            "Whether the existing foundation and structure can carry a storey.",
            "Orientation, sunlight and the impact on existing windows.",
            "Where the electrical service, the drain and the heating appliance sit.",
            "Site access for excavation and material delivery.",
          ],
          actions: [
            {
              label: "See kitchen renovation",
              href: "/services/renovation/cuisine",
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
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What an addition actually solves",
          intro:
            "An addition almost always serves a specific need: a kitchen that is too small, a missing bathroom, no storage. These mandates are carried out under the same contract.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "A rear addition is often the only way to get an open kitchen with an island in a 1960s bungalow.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Kitchen enlarged by a rear addition",
              },
              badges: ["Kitchen", "Addition"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "A second storey or a primary suite lets you add a full bathroom where no plumbing existed.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Bathroom added within an extension",
              },
              badges: ["Bathroom", "Plumbing"],
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Tying the new floor into the existing one without a visible step is prepared at the floor framing stage.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Floor junction between the addition and the house",
              },
              badges: ["Levels", "Junction"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Walk-in and storage",
              href: "/espaces/walk-in",
              description:
                "An added primary suite often includes a custom walk-in, designed and installed by our crews.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Custom walk-in in an added primary suite",
              },
              badges: ["Storage", "Custom"],
              footerCtaLabel: "See walk-in",
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
          heading: "What a successful addition delivers",
          description:
            "The best compliment an addition can get is that you cannot tell where it starts. That plays out on three levels, and two of them are invisible.",
          cards: [
            {
              title: "Compliant structure and envelope",
              description:
                "Footings below the frost line, framing to the engineer's drawings, an airtight envelope and inspections passed at every stage.",
            },
            {
              title: "Systems that keep up",
              description:
                "Heating, ventilation, electrical and plumbing sized for the added area, not simply extended.",
            },
            {
              title: "An invisible junction",
              description:
                "Floor levels aligned, cladding matched, roofline continuous and interior transitions handled as if the room had always been there.",
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
          heading: "FAQ — home addition",
          intro:
            "Zoning, permits, engineers, foundations, timelines, winter work, pricing and warranty.",
          items: [
            {
              q: "Do I need a permit to add on to my house?",
              a: "Yes, always. An addition adds floor area and changes the building's footprint: that is a building permit, supported by a site plan, floor plans, sections and elevations, plus structural drawings sealed by an engineer. We assemble the file and submit the application.",
            },
            {
              q: "How do I know if my lot allows an addition?",
              a: "Your city or borough zoning by-law sets the front, rear and side setbacks, the lot coverage ratio and the maximum height. We check those parameters and your certificate of location before drawing anything. If the project exceeds them, a minor variance application is possible, with delays and no guaranteed outcome.",
            },
            {
              q: "Do I need an engineer?",
              a: "In nearly every case, yes. The foundation, the framing and above all the beam replacing the load-bearing wall opened between the existing house and the new section require a load calculation. Structural drawings sealed by an engineer accompany the permit application and serve as the reference on site.",
            },
            {
              q: "What kind of foundation is needed?",
              a: "It depends on the soil, the water table, whether there is a basement and the type of addition. Poured footing and foundation wall, slab on grade or piles: in every case the bearing must reach below the frost line and the junction with the existing foundation must be designed to limit differential settlement.",
            },
            {
              q: "Can a second storey be added to an existing house?",
              a: "It is possible when the foundation and load-bearing walls can carry the additional load, which the engineer determines by calculation. The maximum height allowed by zoning also has to be checked. It is a heavy job, often involving removal of the existing roof, so weather planning is tight.",
            },
            {
              q: "How long does an addition take?",
              a: "Think in months, not weeks. The administrative phase — feasibility, drawings, engineer, permit — often runs to several weeks on its own, depending on your municipality's review time. The site work then follows the excavation, foundation, framing, close-in, mechanical and finishing sequence. The detailed schedule is attached to the contract.",
            },
            {
              q: "Can you build in winter?",
              a: "Excavation and foundation pours are scheduled around conditions and may require frost protection measures. Once the envelope is closed in and the site is heated, interior work continues normally. We set the sequence so the building is closed in before the hardest stretch of the season.",
            },
            {
              q: "Can I stay in the house during construction?",
              a: "Generally yes during excavation, foundation and framing, since the new section is built alongside. The most disruptive period is opening the wall between the two sections and tying in the systems. We discuss it when setting the schedule.",
            },
            {
              q: "What does an addition cost?",
              a: "It is the mandate with the widest spread, because the foundation, structure, roof and envelope change completely with the lot and the type of addition. A serious budget is not given over the phone: it is built after the site visit, the zoning check and the drawings. The estimate is free and detailed.",
            },
            {
              q: "Do you build new houses?",
              a: "No. Our RBQ licence covers renovation, conversion, additions and rebuilding — general contractor categories 1.2 and 1.3. Building a new house falls under a different category and a separate warranty plan. Addition work itself is warranted under the terms of the contract.",
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
          heading: "An addition to validate before going further?",
          intro:
            "We start with the only question that matters: what your lot and your structure actually allow. Site visit, zoning check and a detailed estimate within 24 to 48 business hours.",
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
          note: "RBQ licence 8306-0806-27 · Zoning, permit, engineer and foundation",
        },
      },
    },
  ],
};
