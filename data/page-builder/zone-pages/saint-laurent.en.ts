import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneSaintLaurentPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Saint-Laurent — Renovation",
    description:
      "RBQ-licensed general contractor in Saint-Laurent: post-war plex renovations, Bois-Franc condos, borough permits handled, one accountable lead.",
    path: "/zones/saint-laurent",
    ogAlt: "Residential renovation in Saint-Laurent by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Saint-Laurent", url: SITE.url + "/zones/saint-laurent" },
  ],
  service: {
    name: "General contractor in Saint-Laurent",
    description:
      "Residential renovation in Saint-Laurent: post-war duplexes and plexes, bungalows, newer Bois-Franc and Nouveau-Saint-Laurent condos, borough permits and full coordination.",
    url: SITE.url + "/zones/saint-laurent",
    serviceType: "Residential renovation",
    areaServed: [
      "Saint-Laurent",
      "Bois-Franc",
      "Nouveau-Saint-Laurent",
      "Norgate",
      "Côte-Vertu",
      "Chameran",
      "Old Saint-Laurent",
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
          eyebrow: "Dilamco — general contractor",
          heading:
            "General contractor in Saint-Laurent: renovating a housing stock built in three eras",
          description:
            "Saint-Laurent mixes post-war plexes, 1960s bungalows and condos delivered since the 1990s in Bois-Franc and Nouveau-Saint-Laurent. Each era brings its own site surprises. Dilamco is about twenty minutes away via Highway 40, with an RBQ licence held since 2004 and one person accountable from permit to handover.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Saint-Laurent", "RBQ 8306-0806-27", "Since 2004"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Renovated bathroom in a Saint-Laurent plex",
          },
          caption: "Montreal, West Island, Laval and the South Shore",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Saint-Laurent buildings",
          description:
            "Saint-Laurent went from farming village to industrial and residential city in a few decades: its population tripled between 1941 and 1951, then doubled again over the following decade. That growth left a heavily dated housing stock, later joined by much newer planned neighbourhoods. The three are not approached the same way.",
          cards: [
            {
              title: "Post-war duplexes and plexes",
              description:
                "The Norgate neighbourhood was developed from 1949 into the early 1950s, with apartments marketed at the time as a Garden Community. A single 1949 project counted more than 480 dwellings, split between single-family homes and rental buildings. In these buildings we find original electrical services, shared plumbing stacks, hardwood floors laid on sleepers, and party walls that limit what can be opened without structural work.",
            },
            {
              title: "1950s-1970s bungalows and cottages",
              description:
                "Around boulevard Décarie, boulevard de la Côte-Vertu and boulevard Marcel-Laurin, the residential fabric filled in during the post-war boom. Closed kitchens, a single upstairs bathroom, limited basement clearance: these are the most common renovation projects, and they almost always require an electrical or plumbing upgrade alongside the finishes.",
            },
            {
              title: "Bois-Franc and Nouveau-Saint-Laurent",
              description:
                "The Nouveau-Saint-Laurent neighbourhood began in the early 1990s on former farmland and the Challenger golf course, next to Bois-Franc, with a wide variety of residential buildings. Construction is recent and better insulated, but projects are governed by condo syndicates: access, work hours, protection of common areas and limits on touching common elements.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we build in Saint-Laurent",
          intro:
            "RBQ-licensed general contractor, categories 1.2 (small buildings) and 1.3 (buildings of all kinds). Residential work and light commercial fit-outs, with the permit and coordination included in the mandate.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "The most requested project, from a Norgate plex to a Bois-Franc condo.",
              icon: "chefHat",
              bullets: [
                "Load-bearing status confirmed before any opening toward the living room.",
                "Electrical capacity verified before adding appliances.",
                "Custom cabinets supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "A full rebuild, often the only bathroom in the unit.",
              icon: "bath",
              bullets: [
                "Shared plumbing stacks located before any drain is moved in a plex.",
                "Membrane, slope and ventilation redone down to the substrate.",
                "Sequenced to shorten the time without a working bathroom.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Turning a bungalow basement into usable living space.",
              icon: "layers",
              bullets: [
                "Clear height, beams and columns measured before a layout is locked in.",
                "Moisture, drainage and backwater valve checked.",
                "Egress, window sizing and fire separation compliant with the Quebec Construction Code.",
              ],
            },
            {
              title: "Plex and rental unit renovation",
              description:
                "Bringing a post-war duplex or triplex back up to standard.",
              icon: "building2",
              bullets: [
                "Sequencing designed to shorten how long a unit sits vacant.",
                "Sound insulation between floors addressed while the floors are open.",
                "Any change of use or unit count confirmed against zoning before committing.",
              ],
            },
            {
              title: "Light commercial fit-out",
              description:
                "Small commercial units along the borough's main arteries.",
              icon: "hardHat",
              bullets: [
                "Partitions, finishes, counters and storage coordinated under one mandate.",
                "An occupancy certificate may be required on top of the conversion permit.",
                "Work planned outside business hours where possible.",
              ],
            },
            {
              title: "Flooring and finishes",
              description:
                "Redoing original floors laid on sleepers or on slab.",
              icon: "ruler",
              bullets: [
                "Substrate levelled before installation, especially in pre-1970 buildings.",
                "Transitions and thresholds aligned between renovated rooms.",
                "Trim, doors and alignments redone for a continuous result.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "permits",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a Saint-Laurent project runs",
          intro:
            "Saint-Laurent is a borough of the City of Montreal. Applications go through the permits and inspections division at 777, boulevard Marcel-Laurin, and through the City's digital services, which require creating an account.",
          steps: [
            {
              number: "1",
              title: "Visit and scoping",
              description:
                "Survey of the unit or building, verification of existing structure, electrical and plumbing, and clarification of the intended scope.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions, schedule and budget in writing. Reply within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Zoning check",
              description:
                "Use, unit count and exterior alterations are confirmed before filing, especially on a plex or a commercial unit.",
            },
            {
              number: "4",
              title: "Permit application",
              description:
                "File submitted to the permits and inspections division, online or at the boulevard Marcel-Laurin counter.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "In a condo, access, elevator use, protection of common areas and syndicate-approved work hours are settled before day one.",
            },
            {
              number: "6",
              title: "Handover and inspection",
              description:
                "Deficiency list cleared before handover, documents provided, work guaranteed — details in the contract.",
            },
          ],
        },
      },
    },
    {
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What we check before pricing a Saint-Laurent project",
          intro:
            "In a borough where much of the stock is over seventy years old and the rest sits in co-ownership, the quote depends on a series of checks that cannot be done over the phone.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year of construction and what has changed since, especially in the post-war sectors.",
            "Electrical service capacity and panel condition before adding circuits.",
            "Location of shared plumbing stacks, decisive in a plex and in co-ownership.",
            "Whether the walls to be opened are load-bearing, and where party walls sit.",
            "State of sound insulation between units or between floors of a plex.",
            "Permitted use and number of dwellings allowed under borough zoning.",
            "Syndicate constraints: access, elevator, work hours, common elements.",
            "The scope you want measured against the budget you have, so it is adjusted before drawings, not after.",
          ],
          actions: [
            {
              label: "Book a visit",
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
      id: "local",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Why a general contractor in Saint-Laurent",
          intro:
            "On a 1950s plex, a renovation rarely involves a single trade. Opening a kitchen wall almost always means structure, electrical, plumbing and sound insulation in the same week. That is exactly what a general contractor is for.",
          items: [
            {
              title: "Verifiable RBQ licence",
              description:
                "Licence 8306-0806-27, valid and unrestricted, issued in September 2004. General contractor categories 1.2 and 1.3, plus specialized subcategories.",
            },
            {
              title: "Insured and bonded",
              description:
                "Civil liability and job-site coverage in force, licence bond in place, no claims on file.",
            },
            {
              title: "Used to multi-unit buildings",
              description:
                "Shared stacks, party walls, access and work hours are scoped from the start rather than discovered halfway through.",
            },
            {
              title: "Written quote before the build",
              description:
                "Scope, exclusions, schedule and budget set out in the contract. Free estimate, reply within 24 to 48 business hours.",
            },
            {
              title: "Integrated cabinet division",
              description:
                "Our custom cabinets are built for us by our partner factory (RBQ subcategory 12), so that is one fewer supplier for you to coordinate.",
            },
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See kitchen renovation",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Residential renovation project in Saint-Laurent",
          },
          cardTitle: "The real risk on a plex",
          cardDescription:
            "It is not the cost of materials, it is the late discovery: a plumbing stack that cannot be moved, a wall assumed to be non-load-bearing, an electrical service that needs replacing. Finding them during scoping costs far less than finding them after demolition.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget and schedule in Saint-Laurent",
          description:
            "The price of a renovation depends mostly on the age of the building, the scope you settle on and the number of trades to coordinate. These are the benchmarks we give on site, before any detailed quote.",
          cards: [
            {
              title: "From roughly $25,000",
              description:
                "Order of magnitude for a project run by a general contractor: a full bathroom, a finished basement or an entry-level kitchen in an existing unit.",
            },
            {
              title: "Full kitchen: $35,000 to $50,000 and up",
              description:
                "In a post-war building, opening a wall, upgrading the electrical service and relocating plumbing explain most of the spread, before material choices even come up.",
            },
            {
              title: "What stretches the schedule",
              description:
                "Borough permit processing, syndicate approvals in a condo, cabinet production lead time, and what demolition uncovers in a building over sixty years old.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "related",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The most frequent mandates in Saint-Laurent",
          intro:
            "Three kinds of projects come up constantly in the borough, from post-war plexes to newer condos. Each has its own service page with the method spelled out.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening up a closed kitchen, redoing the electrical and plumbing, installing custom cabinetry.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Renovated kitchen with custom cabinetry",
              },
              badges: ["Kitchen", "Custom cabinets"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "A full rebuild down to the substrate, accounting for shared plumbing stacks.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Renovated bathroom in an existing unit",
              },
              badges: ["Bathroom", "Plex"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Redoing original floors laid on sleepers or slab, with the substrate properly levelled.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Floor being installed in a renovated room",
              },
              badges: ["Flooring", "Preparation"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "sectors",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Areas we serve in and around Saint-Laurent",
          intro:
            "We work across the borough, from Norgate to the planned neighbourhoods in the northwest, as well as in neighbouring cities and boroughs.",
          columns: "3",
          items: [
            {
              title: "Norgate and boulevard Décarie",
              description:
                "Post-war housing developed from 1949 into the early 1950s.",
              href: "/services/renovation",
              badges: ["Post-war", "Plex"],
            },
            {
              title: "Côte-Vertu and Marcel-Laurin",
              description:
                "1950s-1970s bungalows and cottages, kitchens and basements due for a rebuild.",
              href: "/services/renovation/sous-sol",
              badges: ["Bungalows"],
            },
            {
              title: "Bois-Franc and Nouveau-Saint-Laurent",
              description:
                "Planned neighbourhoods built since the 1990s, condos and co-ownerships.",
              href: "/services/renovation/cuisine",
              badges: ["Co-ownership"],
            },
            {
              title: "Dorval",
              description:
                "Neighbouring city to the west, on the far side of Montréal-Trudeau airport.",
              href: "/zones/dorval",
              ctaLabel: "See the Dorval page",
            },
            {
              title: "Laval",
              description:
                "Across the Rivière des Prairies, via Highway 15 or the Lachapelle bridge.",
              href: "/zones/laval",
              ctaLabel: "See the Laval page",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "West Island, about fifteen minutes away via Highway 40.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See the Dollard-des-Ormeaux page",
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
          heading: "Frequently asked questions — renovating in Saint-Laurent",
          intro:
            "Borough permits, plexes, co-ownership, budget: the answers we give most often.",
          items: [
            {
              q: "Where do I get a renovation permit in Saint-Laurent?",
              a: "From the borough's permits and inspections division at 777, boulevard Marcel-Laurin. Applications can also be filed online through the City of Montreal's digital services, which requires creating an account. We prepare and submit the file as part of the mandate.",
            },
            {
              q: "Do interior renovations need a permit?",
              a: "In most cases yes, particularly when the work touches the structure, the room layout, the plumbing or the electrical system. Routine maintenance generally does not. We confirm the scope with the borough before anything starts, because working without a permit can lead to a stop-work order.",
            },
            {
              q: "Do you work on the Norgate duplexes and triplexes?",
              a: "Yes. Most of these buildings date from 1949 to the early 1950s. We systematically check the electrical service, the condition and location of the plumbing stacks, whether the walls are load-bearing, and sound insulation between units before approving a renovation plan.",
            },
            {
              q: "Can a Bois-Franc condo be renovated?",
              a: "Yes, with extra preparation. The syndicate governs access, elevator use, protection of common areas and work hours. Some work touching common elements requires written authorization. These points are settled before the first day on site.",
            },
            {
              q: "What budget should I plan for?",
              a: "Our renovation projects start around $25,000. A full kitchen with custom cabinetry lands closer to $35,000 to $50,000 and up, depending on scope and the condition of the building. The estimate is free and the budget is set in the written contract before work begins.",
            },
            {
              q: "Can I add a unit or change my building's use?",
              a: "It depends on the zoning that applies to your address. The permitted number of units, the use, and certain exterior alterations are governed by the borough's planning by-laws. We check that before the quote, never after demolition.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. Dilamco holds RBQ licence 8306-0806-27, valid and unrestricted, issued in September 2004, with general contractor categories 1.2 and 1.3. Civil liability and job-site coverage are in force, the licence bond is in place, and there are no claims on file. The licence is verifiable on the RBQ's public register.",
            },
            {
              q: "Do you take on commercial spaces?",
              a: "Yes, for light fit-outs: partitions, finishes, counters and storage. Depending on the space and the intended use, an occupancy certificate may be required in addition to the conversion permit. We confirm both with the borough during scoping.",
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
          heading: "Planning a renovation in Saint-Laurent?",
          intro:
            "We come out, look at the building as it actually is, confirm zoning and permits, then send you a detailed quote with a written schedule and budget.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ-licensed general contractor 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
