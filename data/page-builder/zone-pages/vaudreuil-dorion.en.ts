import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneVaudreuilDorionPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Vaudreuil-Dorion — Renovation",
    description:
      "RBQ-licensed general contractor in Vaudreuil-Dorion: renovating 2000s homes, finishing basements, permits filed with the City's permits division.",
    path: "/zones/vaudreuil-dorion",
    ogAlt: "Residential renovation in Vaudreuil-Dorion by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Vaudreuil-Dorion", url: SITE.url + "/zones/vaudreuil-dorion" },
  ],
  service: {
    name: "General contractor in Vaudreuil-Dorion",
    description:
      "Turnkey residential renovation in Vaudreuil-Dorion and Vaudreuil-Soulanges: scoping, municipal permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/vaudreuil-dorion",
    serviceType: "Residential renovation",
    areaServed: [
      "Vaudreuil-Dorion",
      "Dorion",
      "Harwood",
      "Cité-des-Jeunes",
      "Hudson",
      "Saint-Lazare",
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
          eyebrow: "Dilamco — general contractor",
          heading:
            "General contractor in Vaudreuil-Dorion: renovating a city that doubled in size",
          description:
            "Vaudreuil-Dorion had roughly 18,600 residents in 1995 and counts close to 46,000 today. That growth left a distinctive housing stock: large neighbourhoods built between 2000 and 2020, alongside an older core in the Dorion sector. From Pierrefonds-Roxboro we get there in about thirty minutes via Highway 40. Valid RBQ licence, one person accountable from permit to handover.",
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
          badges: [
            "Vaudreuil-Dorion",
            "Vaudreuil-Soulanges",
            "RBQ 8306-0806-27",
          ],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Renovated kitchen in a Vaudreuil-Dorion home",
          },
          caption: "Vaudreuil-Dorion, Hudson, Saint-Lazare and Île-Perrot",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Vaudreuil-Dorion homes",
          description:
            "The 2021 census counted 43,268 residents, up 13.5% from 2016. That pace of growth explains much of the current housing stock: a great many homes under twenty-five years old, built quickly, in planned neighbourhoods, next to a far older Dorion core.",
          cards: [
            {
              title: "The 2000-2020 neighbourhoods",
              description:
                "The Château de la Gare sector, laid out in circular streets around parc Aurèle-Joliat, holds homes from the late 1990s and early 2000s. Around boulevard de la Cité-des-Jeunes, construction is newer and larger. On these homes the structure and envelope are generally sound: projects focus on layout — opening the kitchen, finishing the basement, adding a bathroom, redoing storage that was poorly planned at delivery.",
            },
            {
              title: "The Dorion sector and avenue Saint-Charles",
              description:
                "Around avenue Saint-Charles, in old Dorion, homes predate 1960. Volumes are smaller, ceilings lower, systems often original, and successive additions poorly tied together. These are projects where surveying what exists is decisive and where demolition regularly turns up surprises.",
            },
            {
              title: "Harwood and the corridors in transition",
              description:
                "Boulevard Harwood – De Lotbinière is covered by a special planning programme, updated in November 2025, aimed at redeveloping it into a denser mixed-use sector. The city's planning by-laws are also under review. In practice: the rules applying to your address have to be confirmed at project time, not assumed from what applied three years ago.",
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
          heading: "What we build in Vaudreuil-Dorion",
          intro:
            "RBQ-licensed general contractor, categories 1.2 (small buildings) and 1.3 (buildings of all kinds). One contract covering the permit, the sequence and every trade.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "The number one project in homes delivered between 2000 and 2015.",
              icon: "chefHat",
              bullets: [
                "Replacing builder-grade cabinets with better-proportioned custom cabinetry.",
                "Island, storage and circulation reworked around how the family actually cooks.",
                "Cabinets supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Many newer homes here were delivered with an unfinished basement.",
              icon: "layers",
              bullets: [
                "A complete layout: family room, bedroom, bathroom and storage.",
                "Egress, window sizing and fire separation compliant with the Quebec Construction Code.",
                "Moisture and drainage checked before the walls are closed.",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Rebuilding an original bathroom or adding a powder room.",
              icon: "bath",
              bullets: [
                "Membrane, drain, slope and ventilation redone down to the substrate.",
                "Plumbing repositioned where the layout requires it.",
                "Plumber, electrician and tile setter sequenced in the contract.",
              ],
            },
            {
              title: "Home additions",
              description:
                "Adding a room, a garage or a storey on a newer suburban lot.",
              icon: "building2",
              bullets: [
                "Zoning, setbacks and applicable rules confirmed with the permits and inspections division.",
                "Foundation, structure and tie-in to the existing house handled in one sequence.",
                "A schedule built around the real processing time of the application.",
              ],
            },
            {
              title: "Older home renovation",
              description:
                "The Dorion sector and the streets around avenue Saint-Charles.",
              icon: "hammer",
              bullets: [
                "A serious survey of framing, levels and systems before any drawing.",
                "Electrical and plumbing upgrades built into the scope from the start.",
                "Junctions between successive additions rebuilt properly.",
              ],
            },
            {
              title: "Post-damage reconstruction",
              description:
                "Water damage, sewer backup or fire: a project that needs coordinating.",
              icon: "droplets",
              bullets: [
                "Selective demolition, drying and remediation before rebuilding.",
                "Work documented for the owner's insurance file.",
                "One point of contact between the trades and the move-back date.",
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
          heading: "How a Vaudreuil-Dorion project runs",
          intro:
            "The City's urban planning department brings together the planning division, the permits and inspections division and the municipal patrol section. The permits and inspections division supports applications and enforces the by-laws.",
          steps: [
            {
              number: "1",
              title: "Visit and scoping",
              description:
                "Survey of the house, its year of construction and the intended scope. We identify the required permit type right away.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions, schedule and budget in writing. Reply within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Regulatory check",
              description:
                "The city's planning by-laws are under review, and some sectors such as the Harwood – De Lotbinière corridor fall under a special planning programme. We confirm the rules that apply to your address.",
            },
            {
              number: "4",
              title: "Online application",
              description:
                "The City strongly recommends applying online: the platform lists the required documents and the regulations tied to the selected permit. No permit is issued on the spot.",
            },
            {
              number: "5",
              title: "Payment and issuance",
              description:
                "The invoice must be paid before the permit is issued. Fees are set by by-law no. 1709. The construction calendar accounts for this step.",
            },
            {
              number: "6",
              title: "Build and handover",
              description:
                "Trades sequenced per the contract, deficiency list cleared before handover, work guaranteed — details in the contract.",
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
          heading: "What we check before pricing a Vaudreuil-Dorion project",
          intro:
            "Between a 2008 house in a planned neighbourhood and a pre-1960 home in the Dorion sector, the same request — open the kitchen, finish the basement — leads to completely different projects. The visit is what settles it.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year of construction and neighbourhood: newer planned home or older Dorion-sector building.",
            "Quality of the original finishes: many 2000s homes were delivered with entry-level components.",
            "Basement clear height, location of mechanical systems and whether a compliant egress is possible.",
            "Electrical service and panel capacity before adding a full basement.",
            "Whether the walls to be opened are load-bearing, and whether the roof uses prefabricated trusses.",
            "Zoning, setbacks and the rules applicable at project time, since the by-laws are under review.",
            "Which permit is required and the fee set by municipal by-law no. 1709.",
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
          heading: "Why a general contractor for Vaudreuil-Soulanges",
          intro:
            "In a fast-growing city, renovation offers are plentiful and very uneven. The difference rarely comes down to the posted price: it comes down to the licence, the written contract, and having one accountable lead when three trades have to follow each other in the same week.",
          items: [
            {
              title: "Verifiable RBQ licence",
              description:
                "Licence 8306-0806-27, valid and unrestricted, issued in September 2004. General contractor categories 1.2 and 1.3, verifiable on the RBQ public register.",
            },
            {
              title: "Insured and bonded",
              description:
                "Civil liability and job-site coverage in force, licence bond in place, no claims on file.",
            },
            {
              title: "A territory served since 2004",
              description:
                "Our territory covers the West Island, Montreal, Laval, the South Shore and Vaudreuil-Soulanges. Vaudreuil-Dorion is not a detour for us: it is the natural extension of Highway 40.",
            },
            {
              title: "A detailed quote, not a number over the phone",
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
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Home addition under way in Vaudreuil-Dorion",
          },
          cardTitle: "What a written contract is worth",
          cardDescription:
            "A schedule and budget fixed in the contract do not guarantee there will be no surprises. They guarantee that surprises will be discussed, priced and documented instead of showing up in the final invoice.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget and schedule in Vaudreuil-Dorion",
          description:
            "Price depends on the age of the house, the scope you settle on and the number of trades to coordinate. These are the benchmarks we give on site, before any detailed quote.",
          cards: [
            {
              title: "From roughly $25,000",
              description:
                "Order of magnitude for a project coordinated by a general contractor: a finished basement, a full bathroom or an entry-level kitchen. The estimate is free and carries no obligation.",
            },
            {
              title: "Full kitchen: $35,000 to $50,000 and up",
              description:
                "In a 2000s home, the spread comes mostly from the level of finish, the size of the island and any plumbing or electrical relocation, rather than from structural work.",
            },
            {
              title: "What stretches the schedule",
              description:
                "Permit processing, paying the municipal invoice before issuance, cabinet production lead time, and — in old Dorion — whatever demolition uncovers.",
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
          heading: "The most frequent mandates in Vaudreuil-Dorion",
          intro:
            "In a city where much of the stock is under twenty-five years old, three projects dominate. Each has its own service page with the method and sequence spelled out.",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing a basement delivered unfinished: family room, bedroom, bathroom, storage and office.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Basement finished as an office and library",
              },
              badges: ["Basement", "Code compliance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Replacing builder-grade cabinets with better-proportioned custom cabinetry and reworking the island.",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Custom kitchen with a central island",
              },
              badges: ["Kitchen", "Custom cabinets"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Adding a room, a garage or a storey on a suburban lot, within the zoning in force.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Residential addition integrated with the existing house",
              },
              badges: ["Addition", "Permits"],
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
          heading: "Areas we serve and neighbouring zones",
          intro:
            "We cover Vaudreuil-Dorion and the neighbouring Vaudreuil-Soulanges municipalities, as well as the western end of the island of Montreal via Highway 40.",
          columns: "3",
          items: [
            {
              title: "Dorion sector and avenue Saint-Charles",
              description:
                "Pre-1960 homes with successive additions to rebuild properly.",
              href: "/services/renovation",
              badges: ["Pre-1960"],
            },
            {
              title: "Cité-des-Jeunes and Château de la Gare",
              description:
                "Neighbourhoods built from the late 1990s to today.",
              href: "/services/renovation/sous-sol",
              badges: ["2000-2020"],
            },
            {
              title: "Harwood, Hudson and Saint-Lazare",
              description:
                "A corridor in transition and neighbouring Vaudreuil-Soulanges municipalities.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Vaudreuil-Soulanges"],
            },
            {
              title: "Beaconsfield",
              description:
                "West Island, about twenty minutes away via Highway 20.",
              href: "/zones/beaconsfield",
              ctaLabel: "See the Beaconsfield page",
            },
            {
              title: "Kirkland",
              description:
                "The first stop on Highway 40 heading back onto the island.",
              href: "/zones/kirkland",
              ctaLabel: "See the Kirkland page",
            },
            {
              title: "Pierrefonds-Roxboro",
              description: "Our base, about thirty minutes away via Highway 40.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the Pierrefonds-Roxboro page",
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
          heading:
            "Frequently asked questions — renovating in Vaudreuil-Dorion",
          intro:
            "Permits, timelines, budget, licensing: the answers we give most often across Vaudreuil-Soulanges.",
          items: [
            {
              q: "How do I get a permit in Vaudreuil-Dorion?",
              a: "Through the permits and inspections division of the City's urban planning department. The City strongly recommends applying online, because the platform lists the required documents and the regulations specific to the chosen permit. No permit is issued on the spot, and the invoice must be paid before issuance.",
            },
            {
              q: "How much does the permit cost?",
              a: "Fees are set by municipal by-law no. 1709 and vary by type of work. We include that in the scoping so the overall budget is complete. The permits and inspections division can be reached at 450 455-3371 for questions specific to your address.",
            },
            {
              q: "Are the planning by-laws changing?",
              a: "Yes. The City has undertaken a review of its urban plan and planning by-laws, and the Harwood – De Lotbinière corridor is covered by a special planning programme updated in November 2025. That is why we confirm the applicable rules at project time rather than relying on precedent.",
            },
            {
              q: "Do you also work in Hudson, Saint-Lazare and Île-Perrot?",
              a: "Yes. Our territory covers the West Island, Montreal, Laval, the South Shore and Vaudreuil-Soulanges. Each neighbouring municipality has its own planning department and by-laws, so we validate the file with the right municipality before filing.",
            },
            {
              q: "My basement was never finished. Where do I start?",
              a: "With a survey: clear height, beam and column positions, location of mechanical systems, existing windows and the possibility of an egress. Those determine what can realistically go in. Only then come the layout, the permit and the order of the work.",
            },
            {
              q: "What budget should I plan for a renovation?",
              a: "Our projects start around $25,000. A full kitchen with custom cabinetry lands closer to $35,000 to $50,000 and up, depending on scope and level of finish. The estimate is free and the budget is set in the written contract before work begins.",
            },
            {
              q: "Do you work on older homes in the Dorion sector?",
              a: "Yes. Around avenue Saint-Charles we work on pre-1960 homes whose systems are often original and whose successive additions tie in poorly. We always start from a survey of what exists, and the scope explicitly allows for what demolition will uncover.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. Dilamco holds RBQ licence 8306-0806-27, valid and unrestricted, issued in September 2004, with general contractor categories 1.2 and 1.3 plus specialized subcategories including 12 (manufactured cabinets and countertops). Civil liability and job-site coverage are in force, the licence bond is in place, and there are no claims on file.",
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
          heading: "Planning a renovation in Vaudreuil-Dorion?",
          intro:
            "We take Highway 40, look at the house, confirm the applicable regulations and send you a detailed quote with a written schedule and budget.",
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
