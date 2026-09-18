import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePointeClairePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Pointe-Claire",
    description:
      "RBQ-licensed general contractor in Pointe-Claire: renovations, bathrooms, kitchens, additions. Site Planning and Architectural Integration files handled.",
    path: "/zones/pointe-claire",
    ogAlt: "Home renovation in Pointe-Claire by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Pointe-Claire", url: SITE.url + "/zones/pointe-claire" },
  ],
  service: {
    name: "General contractor in Pointe-Claire",
    description:
      "Home renovation, additions and conversions in Pointe-Claire, including sectors subject to the Site Planning and Architectural Integration by-law, by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/pointe-claire",
    serviceType: "Residential renovation",
    areaServed: [
      "Pointe-Claire",
      "Pointe-Claire Village",
      "Valois",
      "Cedar Park",
      "Lakeside",
      "Northview",
      "West Island",
      "Montréal",
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
          eyebrow: "Dilamco - Pointe-Claire",
          heading:
            "General contractor in Pointe-Claire: a city where the age of the house changes everything",
          description:
            "Pointe-Claire is one of the oldest municipalities in the West Island: its origins go back to the 17th century, it became a municipality in 1854 and a city in 1911. As a result, we renovate century-old lakeshore houses on chemin du Bord-du-Lac, post-war bungalows in Cedar Park and recent condos near boulevard Saint-Jean. Each case has its own rules. RBQ licence 8306-0806-27, valid since 2004.",
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
            "RBQ 8306-0806-27",
            "Heritage-sector files",
            "Pointe-Claire",
            "Insured",
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom renovation in a Pointe-Claire home",
          },
          caption: "From the Village to boulevard Saint-Jean - West Island",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Pointe-Claire homes",
          description:
            "About 33,500 residents across 34.7 km2, bordered by Lac Saint-Louis. The arrival of the railway in 1853, then again in 1887, made Pointe-Claire a resort destination before it became a suburb. That double history explains why two houses eight streets apart can call for completely different approaches on site.",
          cards: [
            {
              title: "Seven neighbourhoods, three construction eras",
              description:
                "The city is divided into districts that match real neighbourhoods: Cedar/Le Village, Lakeside, Valois, Cedar Park Heights, Lakeside Heights, Seigniory, Northview and Oneida. Along chemin du Bord-du-Lac—Lakeshore and in the Village you find older houses and converted summer residences, often with stone foundations, out-of-level floors and systems added in successive layers. Valois, a former village merged into Pointe-Claire in 1911, mixes eras. Cedar Park Heights and Northview are more typically post-war: bungalows, split-levels and cottages from the 1950s to the 1970s. Lakeside also has high-rises and condos.",
            },
            {
              title: "Architectural integration review: the constraint many discover too late",
              description:
                "Some Pointe-Claire sectors are subject to the Site Planning and Architectural Integration (PIIA) by-law PC-2787, designed in particular to protect buildings of heritage interest and older sectors. The city has also cited its institutional core as a heritage site (by-law PC-2808) and adopted a special planning programme for the Village sector in 2016. In practice: a project subject to the PIIA by-law goes through a qualitative review and a longer processing time than an ordinary permit application. It is not an obstacle, but it belongs in the schedule from day one.",
            },
            {
              title: "An accessible planning department, a file worth preparing properly",
              description:
                "The Urban Planning Department sits at city hall, 451 boulevard Saint-Jean, with a planning counter on the first floor where you can get information and file a residential or commercial permit application. Every project must comply with the zoning by-law (PC-2775), the construction by-law and, where applicable, the PIIA by-law, in addition to the Québec Construction Code. A complete file moves far faster than one missing a site plan, an elevation or a clear description of materials.",
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
          heading: "What we build in Pointe-Claire",
          intro:
            "The most frequent mandates in a city whose housing stock spans more than a century, and what each one requires depending on the sector.",
          columns: "2",
          items: [
            {
              title: "Bathroom renovation",
              description:
                "The most common mandate in post-war houses.",
              icon: "bath",
              bullets: [
                "Full waterproofing rebuilt before tile, membrane included.",
                "Original cast-iron or copper plumbing replaced where its condition requires it.",
                "Ventilation added and vented outside, not into the attic.",
              ],
            },
            {
              title: "Kitchen renovation",
              description:
                "Opening up and modernizing without destabilizing an older house.",
              icon: "chefHat",
              bullets: [
                "Structure verified before any opening, especially in pre-1950s houses.",
                "Electrical, plumbing and ventilation redone while the walls are open.",
                "Custom cabinetry supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Older-home renovation",
              description:
                "The Village, Valois and the streets off chemin du Bord-du-Lac.",
              icon: "ruler",
              bullets: [
                "Survey of existing conditions before drawing: levels, foundation, framing.",
                "Work compatible with the building's character where the PIIA by-law applies.",
                "A staged, documented rebuild rather than a demolition that reveals everything at once.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Adding floor area within a regulated framework.",
              icon: "building2",
              bullets: [
                "Extension, second storey or sunroom, within what zoning by-law PC-2775 allows.",
                "File prepared for the planning counter at 451 boulevard Saint-Jean.",
                "Extra time built into the schedule when the project is subject to PIIA review.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Pointe-Claire basements do not all share the same history.",
              icon: "sofa",
              bullets: [
                "Moisture and drainage assessed before any finishing is considered.",
                "Headroom and foundation checked in the oldest houses.",
                "Insulation and vapour barrier rebuilt to current rules.",
              ],
            },
            {
              title: "Commercial fit-out",
              description:
                "Businesses in the Village, on boulevard Saint-Jean and boulevard Hymus.",
              icon: "layers",
              bullets: [
                "Space planning, partitions, ceilings, electrical and finishes.",
                "Permits and compliance coordinated with the Urban Planning Department.",
                "Work scheduled to limit interruption of operations.",
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
          heading: "How a Pointe-Claire project runs",
          intro:
            "In Pointe-Claire the first question is not 'what style?' but 'which sector and under what rules?'. Everything else follows from that.",
          steps: [
            {
              number: "1",
              title: "Visit and assessment",
              description:
                "We look at the age of the building, the foundation, the framing, the mechanical systems and the real condition of what will be touched. In an older house, that assessment is what protects the budget.",
            },
            {
              number: "2",
              title: "Regulatory check",
              description:
                "We confirm the applicable zoning and, above all, whether the property sits in a sector subject to the PIIA by-law. That changes both the timeline and the contents of the file.",
            },
            {
              number: "3",
              title: "Detailed quote",
              description:
                "A written scope item by item, with inclusions and exclusions. Answer within 24 to 48 business hours after the visit. Free estimate.",
            },
            {
              number: "4",
              title: "Permit filing",
              description:
                "File submitted at the planning counter, city hall, 451 boulevard Saint-Jean. A complete file is processed faster; a project subject to PIIA review takes additional time.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Trades sequenced, preserved surfaces protected, access and parking managed. One point of contact from start to finish.",
            },
            {
              number: "6",
              title: "Inspection and handover",
              description:
                "Municipal inspection where the work requires it, a deficiency list closed with you, then handover. Work is guaranteed, details in the contract.",
            },
          ],
        },
      },
    },
    {
      id: "pourquoi-local",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Why a general contractor who knows the local framework",
          intro:
            "In Pointe-Claire the main risk is not the quality of the installation. It is starting a project without confirming which rules it falls under.",
          items: [
            {
              title: "PIIA identified before the quote",
              description:
                "Certain sectors and buildings of heritage interest are subject to by-law PC-2787. We check that during scoping, not after the materials have been ordered.",
            },
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "Issued 7 September 2004, valid and unrestricted, general contractor categories 1.2 and 1.3, no claim on file. Verifiable in the Régie du bâtiment registry.",
            },
            {
              title: "Older homes treated as older homes",
              description:
                "A stone foundation, an out-of-level floor or old-growth framing is not renovated like a 1975 bungalow. The assessment comes before the price.",
            },
            {
              title: "One accountable party, permit to handover",
              description:
                "Permit, trades, schedule, inspections and deficiencies: one contract and one contact, not a chain of subcontractors passing the blame.",
            },
            {
              title: "An in-house cabinet division",
              description:
                "Our custom cabinetry is built for us by our partner factory (RBQ subcategory 12), which lets us adapt to the real dimensions of an older house.",
            },
          ],
          actions: [
            {
              label: "See our renovation services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Interior renovation of a Pointe-Claire home",
          },
          cardTitle: "Google rating 5.0 from 11 reviews",
          cardDescription:
            "A licensed general contractor since 2004, with hundreds of residential projects across the West Island. Civil liability and site insurance in place. Budget and schedule set in a written contract.",
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Sectors we serve and neighbouring cities",
          intro:
            "We work in every Pointe-Claire neighbourhood: Cedar and the Village, Lakeside, Lakeside Heights, Valois, Cedar Park Heights, Seigniory, Northview and Oneida, from chemin du Bord-du-Lac—Lakeshore up to boulevard Hymus, boulevard Saint-Jean and boulevard des Sources.",
          columns: "3",
          items: [
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing, ventilation and plumbing done properly.",
              ctaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Modernizing without weakening a house that is decades old.",
              ctaLabel: "See the service",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Subfloor, levels and transitions in older houses.",
              ctaLabel: "See the service",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "The neighbouring city east, along Lac Saint-Louis.",
              ctaLabel: "See the area",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "West, the other lakeshore city on the same road.",
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "North, on the other side of boulevard Saint-Jean.",
              ctaLabel: "See the area",
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
          heading: "FAQ - renovating in Pointe-Claire",
          intro:
            "Architectural review, permits, older homes and budget: what Pointe-Claire homeowners ask us most.",
          items: [
            {
              q: "Where do I file a permit application in Pointe-Claire?",
              a: "At the planning counter on the first floor of city hall, 451 boulevard Saint-Jean. The Urban Planning Department answers questions there and receives residential and commercial permit applications. We prepare and file the application as part of the mandate.",
            },
            {
              q: "What is the PIIA by-law and does it apply to my property?",
              a: "The Site Planning and Architectural Integration by-law (PC-2787) complements zoning, subdivision and construction by-laws. It applies to certain sectors, notably to protect buildings of heritage interest and Pointe-Claire's older areas, and allows a qualitative review of the project. We check during scoping whether your address is covered, because it changes both the file contents and the timeline.",
            },
            {
              q: "Does a project subject to PIIA review take longer?",
              a: "Yes. The city notes that a project subject to the PIIA by-law justifies a longer processing time than an ordinary application, since it goes through a qualitative review. We put that delay in the schedule from the start rather than absorbing it mid-project.",
            },
            {
              q: "Do you renovate the older homes of the Village and chemin du Bord-du-Lac?",
              a: "Yes. These houses require a serious survey before drawing anything: foundation, floor levels, framing and systems added in successive layers. The method differs from a post-war bungalow, and the budget should carry a contingency for what appears once things are opened. We document every scope change in writing.",
            },
            {
              q: "What does a renovation cost in Pointe-Claire?",
              a: "Our renovation mandates generally start around $25,000. A full kitchen usually falls between $35,000 and $50,000 and up. In an older house, the real scope depends on what is found behind the finishes, which is why the visit always precedes the quote. Estimates are free.",
            },
            {
              q: "Can you renovate a condo in Pointe-Claire?",
              a: "Yes, particularly in the Lakeside buildings and near boulevard Saint-Jean. Co-ownership constraints need to be framed early: permitted working hours, elevator access, protection of common areas, sound insulation and common elements that cannot be modified. Once those points are settled, the project is planned like any other.",
            },
            {
              q: "Do you work on businesses in the Village or on boulevard Saint-Jean?",
              a: "Yes. Our RBQ licence categories cover small buildings and buildings of all kinds, which includes commercial fit-outs. In the Village, access constraints and, depending on the case, the applicable heritage framework have to be planned for.",
            },
            {
              q: "How fast do you respond?",
              a: "We come back with an estimate within 24 to 48 business hours after the visit. Pointe-Claire is about twenty minutes from our base at 18625 rue Larocque in Pierrefonds-Roxboro, which lets us schedule the visit quickly.",
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
          heading: "Planning a renovation in Pointe-Claire?",
          intro:
            "We come and look at the house, confirm the regulatory framework that applies to your sector, then come back with a written scope and a price. Free estimate.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco - RBQ-licensed general contractor 8306-0806-27 - West Island",
        },
      },
    },
  ],
};
