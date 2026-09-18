import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Bathroom renovation in Montreal — turnkey",
    description:
      "Full bathroom renovation: waterproofing, membrane, ventilation, plumbing, tiling and vanity. RBQ-licensed general contractor.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Bathroom renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Bathroom renovation",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Bathroom renovation",
    description:
      "Bathroom renovation by a general contractor: permit, plumbing, ventilation, waterproofing membrane, tiling, custom vanity and finishing.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Bathroom renovation",
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
            "Bathroom renovation: the room where waterproofing decides everything",
          description:
            "A badly waterproofed bathroom does not show in the first year. It shows when the ceiling below stains, when the tile sounds hollow, or when the framing under the shower has rotted. We redo the whole room — plumbing, ventilation, membrane, tiling, vanity — under one contract and one licence.",
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
            "Waterproofing membrane",
            "Inspected plumbing",
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom renovated by a general contractor",
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
          heading: "Why bathrooms get redone twice",
          description:
            "It is the smallest and most expensive room per square foot, and the one where shortcuts cost the most. Redos almost always come from four execution failures, never from the choice of tile.",
          cards: [
            {
              title: "No real membrane under the shower",
              description:
                "Setting tile straight onto an ordinary board, with no waterproofing membrane and no proper slope to the drain, lets water through. The damage shows up months later, often on the ceiling of the floor below.",
            },
            {
              title: "Ventilation missing or badly ducted",
              description:
                "A fan that blows into the attic or lacks the required airflow leaves the moisture in the room. The result: bubbling paint, blackened grout, mould behind the drywall.",
            },
            {
              title: "Plumbing changed with no permit or inspection",
              description:
                "Moving a shower or a drain changes the slope and the plumbing vent. With no permit and no inspection before closing up, nobody validates the work, and the problem is sealed inside the wall.",
            },
            {
              title: "Framing nobody opened up",
              description:
                "When a bathroom has been leaking for years, the subfloor and sometimes the joists are affected. Installing new finishes over the top without opening up simply hides the real problem.",
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
          heading: "What a full bathroom renovation covers",
          intro:
            "The exact scope is written into the quote. Here are the four phases of a full bathroom mandate, in the order they happen.",
          columns: "2",
          items: [
            {
              title: "Demolition and strip-out",
              description:
                "We open it up to see the real condition before pricing the rest.",
              icon: "hammer",
              bullets: [
                "Protection of the premises and circulation areas.",
                "Removal of the shower or tub, vanity, toilet and finishes.",
                "Framing stripped to check the subfloor, joists and water staining.",
                "Subfloor and framing repaired before anything new goes in.",
              ],
            },
            {
              title: "Plumbing and ventilation",
              description: "The work that must pass inspection before closing up.",
              icon: "droplets",
              bullets: [
                "Supply and drains reworked or relocated, at the required slope.",
                "Compliant plumbing venting, anti-scald shower valve.",
                "Exhaust fan with adequate airflow, ducted outside and not into the attic.",
                "Municipal inspection booked before the walls are closed.",
              ],
            },
            {
              title: "Waterproofing and tiling",
              description: "The invisible step that sets the lifespan.",
              icon: "shieldCheck",
              bullets: [
                "Cement board or moisture-resistant panel on all wet surfaces.",
                "Continuous waterproofing membrane in the shower, carried up the walls and tied into the drain.",
                "Even slope to the drain, verified before any tile is set.",
                "Tiling, grout, caulking and threshold transitions.",
              ],
            },
            {
              title: "Vanity, finishing and hookups",
              description: "The visible part, installed once the base is sound.",
              icon: "bath",
              bullets: [
                "Custom vanity built for us by our partner factory, under RBQ subcategory 12.",
                "Countertop, faucets, mirror, lighting and storage.",
                "Toilet, shower door and hardware installed.",
                "Paint, trim, adjustments and a final walkthrough with you.",
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
          heading: "How a bathroom job unfolds",
          intro:
            "Six steps, three of which happen entirely behind the walls. Curing times for grout, caulking and paint are part of the schedule; they do not compress.",
          steps: [
            {
              number: "1",
              title: "Visit and quote",
              description:
                "Measurements, existing ventilation and plumbing checked, the floor below assessed and signs of infiltration noted. Estimate within 24 to 48 business hours.",
            },
            {
              number: "2",
              title: "Contract, layout, permit",
              description:
                "Signed with the schedule, room layout set, materials selected, then the permit filed if plumbing is being relocated.",
            },
            {
              number: "3",
              title: "Demolition and condition check",
              description:
                "Full strip-out. This is when a swollen subfloor or a damaged joist turns up, and when the scope can be adjusted with you.",
            },
            {
              number: "4",
              title: "Plumbing, electrical, ventilation",
              description:
                "Drains, supply, circuits, in-floor heating if specified and the exhaust fan. Municipal inspection before closing up.",
            },
            {
              number: "5",
              title: "Waterproofing and tiling",
              description:
                "Boards, membrane, slope to the drain, then tile, grout and caulking, with the curing times they require.",
            },
            {
              number: "6",
              title: "Vanity, finishing, handover",
              description:
                "Paint, vanity and countertop set, faucets, toilet, shower door, adjustments and return of the space.",
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
          heading: "Permits, ventilation and compliance",
          intro:
            "Bathrooms are governed by the Québec Construction Code on several specific points. They are also the points an inspector checks and an insurer looks at after water damage.",
          items: [
            {
              title: "Plumbing relocated",
              description:
                "Moving a shower, tub or toilet changes drains and plumbing venting. A permit is generally required, and inspection happens before the walls are closed.",
            },
            {
              title: "A new bathroom",
              description:
                "Adding a bathroom — in a basement, a suite or an addition — requires a permit in virtually every municipality, with drawings attached.",
            },
            {
              title: "Mandatory ventilation",
              description:
                "Every bathroom must be mechanically vented to the outside. A fan discharging into the attic is non-compliant and simply moves the moisture problem elsewhere in the house.",
            },
            {
              title: "Anti-scald protection",
              description:
                "Shower and tub valves must limit temperature. It is a standard safety requirement in residential inspections.",
            },
            {
              title: "Like-for-like replacement",
              description:
                "Changing the vanity, toilet, tile and faucets without moving plumbing usually needs no permit. We confirm with your city regardless.",
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
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Shower prepared with a waterproofing membrane",
          },
          cardTitle: "What the insurer looks at",
          cardDescription:
            "After water damage, the compliance of the work and the presence of a licensed contractor weigh on how the claim is handled. Our RBQ licence 8306-0806-27 has been valid and unrestricted since 2004.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What does a bathroom renovation cost?",
          description:
            "The figures below are indicative for the Québec market. They move with the area, the condition of the framing under the finishes, whether plumbing is relocated and the level of finish chosen.",
          cards: [
            {
              title: "Full bathroom — $15,000 to $35,000",
              description:
                "Demolition, plumbing reworked, ventilation, membrane, tiling, vanity, countertop, toilet, faucets and finishing, without moving the fixtures.",
            },
            {
              title: "Relocated plumbing or curbless shower",
              description:
                "Moving the shower or toilet, building a curbless shower with a linear drain or adding in-floor heating pushes the budget to the top of the range and beyond.",
            },
            {
              title: "A new basement bathroom",
              description:
                "Adding a bathroom where there was none often means breaking the slab for the drain, or installing an ejector pump. Budget it separately.",
            },
            {
              title: "What moves the number",
              description:
                "Area, tile format, framing repairs under the shower, shower type, heated floor, faucet quality and site access in a condo.",
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
          heading: "Work that often comes with a bathroom",
          intro:
            "A bathroom is rarely renovated on its own. These pages cover the work most often attached to it.",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Adding a basement bathroom means a drain in the slab or an ejector pump, plus the basement conversion permit.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Bathroom built into a finished basement",
              },
              badges: ["Basement", "Ejector pump"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "A long-running leak, water damage or mould: rebuilding starts by opening up and cleaning out, not by setting new tile.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Rebuilding after a bathroom leak",
              },
              badges: ["Mould", "Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Door threshold, level difference with the hallway and the joint between tile and hardwood: details to settle at the right moment.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring transition at a bathroom threshold",
              },
              badges: ["Thresholds", "Transitions"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Custom bathrooms",
              href: "/espaces/salle-de-bain",
              description:
                "The vanity and storage side: dimensions, finishes, hardware and completed examples.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom vanity in a bathroom",
              },
              badges: ["Vanity", "Custom"],
              footerCtaLabel: "See bathrooms",
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
          heading: "What a properly built bathroom delivers",
          description:
            "A bathroom is judged over ten years, not on a photo taken on day one. Three things decide it, and none of them is visible once the work is done.",
          cards: [
            {
              title: "A shower that is genuinely watertight",
              description:
                "Continuous membrane, slope to the drain, wall junctions treated. Water never reaches the framing.",
            },
            {
              title: "A room that dries out",
              description:
                "Ventilation at the right airflow, ducted outside. Mirrors clear, grout stays clean, paint holds.",
            },
            {
              title: "Sound framing under the finishes",
              description:
                "The subfloor was checked and repaired before anything was set. Tile does not move and grout does not crack.",
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
          heading: "FAQ — bathroom renovation",
          intro:
            "Pricing, permits, duration, waterproofing, ventilation, condos and warranty.",
          items: [
            {
              q: "What does a bathroom renovation cost?",
              a: "As an indication, a full bathroom most often runs between $15,000 and $35,000 depending on scope. The top of the range corresponds to a larger room, a curbless shower, a heated floor or relocated plumbing. The detailed estimate is free and sets out what is included and excluded.",
            },
            {
              q: "Do I need a permit to redo a bathroom?",
              a: "A like-for-like replacement — vanity, toilet, tile and faucets in the same locations — usually needs no permit. As soon as plumbing is relocated, the shower is moved or a new bathroom is added, a permit is generally required with inspection before the walls are closed. We confirm with your city and file the application.",
            },
            {
              q: "How long does the job take?",
              a: "A full bathroom runs to several weeks of on-site work. Curing times for mortar, grout, caulking and paint cannot be compressed, and the municipal inspection has to be booked before the walls are closed. The precise schedule is attached to the contract.",
            },
            {
              q: "What is a waterproofing membrane, and is it required?",
              a: "It is a continuous layer installed under the shower tile, carried up the walls and tied into the drain, that stops water from reaching the framing. It is the single most important element of a durable shower. We install it on all wet surfaces, with an even slope to the drain.",
            },
            {
              q: "What kind of fan does a bathroom need?",
              a: "An exhaust fan ducted to the exterior, never into the attic, sized to the volume of the room, with a short, insulated duct run. That is what keeps moisture from building up and mould from growing behind the finishes. Replacing the fan is part of the mandate.",
            },
            {
              q: "Can a bathroom be added in the basement?",
              a: "Yes. We first check where the main drain sits: either the slab is broken to connect by gravity, or an ejector pump is installed. Ventilation, supply lines and the basement conversion permit come with it. The basement finishing page covers the whole mandate.",
            },
            {
              q: "What if you find water damage during demolition?",
              a: "It is common in a bathroom over twenty years old. We show you what is affected — subfloor, studs, joists —, document the condition and give you the repair cost in writing before continuing. Nothing gets closed up over a known problem.",
            },
            {
              q: "Is this feasible in a condo?",
              a: "Yes. You first need the syndicate's approval and confirmation of work hours, elevator access, protection of common areas and any restrictions in the declaration of co-ownership regarding plumbing and sound insulation. Those are settled before demolition.",
            },
            {
              q: "Do you supply the vanity?",
              a: "Yes. Custom vanities are built for us by our partner factory, under subcategory 12 of our RBQ licence, then measured and installed by our crews along with the countertop and faucets. One company is accountable for the result.",
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
          heading: "A bathroom to redo properly?",
          intro:
            "We come and assess the room, the existing ventilation, the plumbing and any signs of infiltration, then come back with a detailed estimate within 24 to 48 business hours.",
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
          note: "RBQ licence 8306-0806-27 · Compliant waterproofing, ventilation and plumbing",
        },
      },
    },
  ],
};
