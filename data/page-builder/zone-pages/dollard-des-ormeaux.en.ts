import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDollardDesOrmeauxPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Dollard-des-Ormeaux",
    description:
      "RBQ-licensed general contractor in Dollard-des-Ormeaux: kitchens, bathrooms, basements, additions. Based in Pierrefonds, ten minutes from DDO.",
    path: "/zones/dollard-des-ormeaux",
    ogAlt: "Home renovation in Dollard-des-Ormeaux by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "Dollard-des-Ormeaux",
      url: SITE.url + "/zones/dollard-des-ormeaux",
    },
  ],
  service: {
    name: "General contractor in Dollard-des-Ormeaux",
    description:
      "Full home renovation in Dollard-des-Ormeaux: kitchens, bathrooms, basements, additions and conversions, by an RBQ-licensed West Island general contractor.",
    url: SITE.url + "/zones/dollard-des-ormeaux",
    serviceType: "Residential renovation",
    areaServed: [
      "Dollard-des-Ormeaux",
      "Westpark",
      "Sunnybrooke",
      "Saint-Jean sector",
      "Lake Road",
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
          eyebrow: "Dilamco - Dollard-des-Ormeaux",
          heading:
            "General contractor in Dollard-des-Ormeaux: renovating a 1960s-to-1980s suburban home",
          description:
            "DDO is the most populated West Island city after the borough where our base sits, on rue Larocque in Pierrefonds-Roxboro — about ten minutes away. We work on the same house types week after week: bungalows, split-levels and two-storey cottages built during the suburban push of 1960 to 1985. RBQ licence 8306-0806-27, valid and unrestricted since 2004.",
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
            "General contractor",
            "DDO",
            "Insured",
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Kitchen renovation in a Dollard-des-Ormeaux home",
          },
          caption:
            "Saint-Jean, Westpark and Sunnybrooke sectors - West Island",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Dollard-des-Ormeaux homes",
          description:
            "DDO had roughly 1,800 residents in the early 1960s. By the early 1980s it had close to 40,000; today it has more than 48,000 across 15.1 km2, and its territory is fully built out. In other words: almost the entire housing stock went up in twenty-five years, in successive waves of development. That is a jobsite fact, not a historical footnote.",
          cards: [
            {
              title: "Three sectors, three generations of houses",
              description:
                "The three circles in the city's logo stand for the Saint-Jean, Westpark and Sunnybrooke sectors. Each matches a development phase, and therefore a different construction assembly. Sunnybrooke, between Sunnybrooke Park and Bois-de-Liesse nature park, is organized around Spring Garden Street, Hyman Drive and boulevard Sunnybrooke: first-wave bungalows and split-levels. Westpark, toward boulevard des Sources, and the areas along boulevard Saint-Jean hold more two-storey cottages, semi-detached homes, townhouses and multiplexes. Inside a single development the architecture is remarkably consistent — which also means the same defects repeat from one house to the next.",
            },
            {
              title: "What we find behind the walls",
              description:
                "In a 1960s-to-1980s DDO house, the findings repeat: a 100-amp panel that has become tight, basement insulation built straight against the concrete, a basement floor with no vapour barrier, upstairs bathrooms without adequate mechanical ventilation, a closed kitchen separated from the living room by a wall that turns out to be load-bearing about half the time. Townhouses and semi-detached homes in the Lake Road, Sunnybrooke and Westwood sectors add the party-wall question: sound insulation, fire separation and coordination with the neighbour when you open things up.",
            },
            {
              title: "Planning rules that were just rewritten",
              description:
                "DDO adopted a new urban planning programme (by-law R-2024-190), in force since 24 April 2025, then a new zoning by-law (R-2025-199), in force since 16 May 2025. In short: the reference points that applied three years ago may no longer hold. Permit applications are filed online or at city hall, 12001 boulevard De Salaberry; the permits and inspections division reviews compliance with the municipal by-laws in effect. Detailed sketches, plans or drawings are mandatory and must clearly illustrate the intended work.",
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
          heading: "What we build in Dollard-des-Ormeaux",
          intro:
            "One general contractor, one contract, one schedule. The most frequent DDO mandates and what they actually demand in a house of that era.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "Opening the original closed kitchen onto the dining room.",
              icon: "chefHat",
              bullets: [
                "Structural review before opening: in a split-level, the central wall is often load-bearing.",
                "Beam and columns sized, plumbing and electrical redone while the wall is open.",
                "Custom cabinetry supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "The 1972 main bathroom that has never been redone.",
              icon: "bath",
              bullets: [
                "Full waterproofing membrane before any shower tile.",
                "Ventilation added or corrected, vented outside rather than into the attic.",
                "Complete rethink of the layout when structure limits the available footprint.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Family room, home office, playroom or extra bedroom.",
              icon: "sofa",
              bullets: [
                "Insulation and vapour barrier rebuilt to current rules, not to the 1975 assembly.",
                "Headroom, columns and ducts assessed before any plan is promised.",
                "A full bathroom added where the existing drain allows it.",
              ],
            },
            {
              title: "Additions and second storeys",
              description:
                "Gaining floor area on an already built suburban lot.",
              icon: "building2",
              bullets: [
                "Rear extension, four-season sunroom or second storey over a bungalow.",
                "Setbacks, siting and lot coverage validated under zoning by-law R-2025-199.",
                "Permit file filed with the DDO permits and inspections division.",
              ],
            },
            {
              title: "Full interior renovation",
              description:
                "Taking on the whole house rather than one room at a time.",
              icon: "layers",
              bullets: [
                "Flooring, doors, mouldings, stairs and paint in a single sequence.",
                "Electrical upgraded while the walls are open.",
                "Trades coordinated under a single accountable contractor.",
              ],
            },
            {
              title: "Post-disaster reconstruction",
              description:
                "Water damage, sewer backup or structural damage.",
              icon: "droplets",
              bullets: [
                "Basement rebuilt after drying, with backwater valve and pump checked.",
                "Written scope and documented changes for follow-up with your insurer.",
                "Rebuilt to the Québec Construction Code.",
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
          heading: "How a DDO project runs",
          intro:
            "A stable sequence from first call to handover, designed so decisions get made before the work starts rather than during it.",
          steps: [
            {
              number: "1",
              title: "Site visit",
              description:
                "We come and look at the house: structure, electrical panel, plumbing, basement, access and site parking. DDO is about ten minutes from our Pierrefonds-Roxboro base.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "A written scope item by item, with inclusions and exclusions clearly named. Answer within 24 to 48 business hours. Free estimate.",
            },
            {
              number: "3",
              title: "Municipal permit",
              description:
                "We prepare the DDO file: detailed sketches, plans or drawings clearly illustrating the work. Filed online or at city hall, 12001 boulevard De Salaberry.",
            },
            {
              number: "4",
              title: "Written contract",
              description:
                "Budget, schedule, sequence and payment terms in the contract. RBQ licence and insurance verifiable before work starts.",
            },
            {
              number: "5",
              title: "Coordinated execution",
              description:
                "Demolition, structure, mechanical, finishing: each trade comes at the right moment. One point of contact for you, start to finish.",
            },
            {
              number: "6",
              title: "Inspection and handover",
              description:
                "Municipal inspection when required, a deficiency list closed with you, then handover. Work is guaranteed, details in the contract.",
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
          heading: "Why a West Island general contractor",
          intro:
            "In DDO, most homeowners are not looking for the lowest price. They are looking for someone who answers the phone in week three of the project.",
          items: [
            {
              title: "A verifiable RBQ licence",
              description:
                "Licence 8306-0806-27, issued 7 September 2004, valid and unrestricted, general contractor categories 1.2 and 1.3. No claim on file. Verifiable in the Régie du bâtiment registry.",
            },
            {
              title: "A ten-minute drive",
              description:
                "Our base is on rue Larocque, in Pierrefonds-Roxboro. An unplanned visit to DDO does not cost half a day, which changes how fast a surprise gets resolved.",
            },
            {
              title: "Houses we know inside out",
              description:
                "DDO developments repeat themselves. We know in advance what to check in a 1968 split-level or a 1979 cottage before committing to a price.",
            },
            {
              title: "Current planning rules",
              description:
                "Zoning by-law R-2025-199 and urban planning programme R-2024-190 are recent. We confirm with the city rather than relying on what was allowed before 2025.",
            },
            {
              title: "An in-house cabinet division",
              description:
                "Custom cabinetry is built for us by our partner factory (RBQ subcategory 12). One fewer supplier to coordinate between demolition and finishing.",
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
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Residential renovation project in Dollard-des-Ormeaux",
          },
          cardTitle: "Google rating 5.0 from 11 reviews",
          cardDescription:
            "Hundreds of residential projects since 2004 across the West Island. Civil liability and site insurance in place. Schedule and budget set in a written contract, not negotiated along the way.",
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
            "We work throughout Dollard-des-Ormeaux: the Saint-Jean sector, Westpark, Sunnybrooke, Lake Road, Westwood, the streets around the 48-hectare Centennial Park, and the residential streets on both sides of boulevard des Sources, boulevard Saint-Jean and boulevard De Salaberry.",
          columns: "3",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening, rebuilding and reorganizing a suburban home's kitchen.",
              ctaLabel: "See the service",
            },
            {
              title: "Basement renovation",
              href: "/services/renovation/sous-sol",
              description:
                "Family room, office or bedroom, with insulation rebuilt properly.",
              ctaLabel: "See the service",
            },
            {
              title: "Home additions",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Extension or second storey under the new zoning by-law.",
              ctaLabel: "See the service",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Our base, just north of boulevard Saint-Jean.",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "The neighbouring city west, across boulevard Saint-Charles.",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "South, toward Lac Saint-Louis and boulevard Hymus.",
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
          heading: "FAQ - renovating in Dollard-des-Ormeaux",
          intro:
            "Permits, timelines, pricing, structure: the questions that come up most often in DDO.",
          items: [
            {
              q: "Do you work in Dollard-des-Ormeaux regularly?",
              a: "Yes. Our base is at 18625 rue Larocque, in Pierrefonds-Roxboro, about ten minutes from the Sunnybrooke, Westpark and Saint-Jean sectors. DDO is part of our core territory, not an outlying area we visit occasionally.",
            },
            {
              q: "Do I need a permit to renovate in DDO?",
              a: "In the large majority of cases, yes: the city requires a permit application before renovation work begins. Detailed sketches, plans or drawings clearly illustrating the intended work are mandatory. Applications can be filed online or at city hall. We prepare the file as part of the mandate.",
            },
            {
              q: "Does the new zoning by-law change anything for my project?",
              a: "Possibly. Urban planning programme R-2024-190 has been in force since 24 April 2025 and zoning by-law R-2025-199 since 16 May 2025. Setbacks, heights, permitted uses and siting standards may have been revised. For an addition, a second storey or an accessory dwelling unit, we confirm the applicable framework with the city before drawing anything.",
            },
            {
              q: "Can the wall between the kitchen and living room of a split-level be opened?",
              a: "Often yes, but rarely without structural work. In DDO split-levels and bungalows, the central wall frequently carries part of the upper floor load. The solution is a properly sized beam with columns carried down to adequate bearing. That is exactly the kind of decision that belongs before the contract, not the morning of demolition.",
            },
            {
              q: "What does a renovation cost in Dollard-des-Ormeaux?",
              a: "Our renovation mandates generally start around $25,000. A full kitchen usually falls between $35,000 and $50,000 and up, depending on related work. Price depends on scope, the condition of the house, materials and the coordination required. Estimates are free and the budget is set in a written contract.",
            },
            {
              q: "My home shares a party wall. Does that complicate the work?",
              a: "In the townhouses and semi-detached homes of the Lake Road, Sunnybrooke and Westwood sectors, yes, it has to be accounted for. Party wall, sound insulation, fire separation, site access and dust are planned during scoping. We inform the neighbours and adjust working hours rather than handling the complaint afterwards.",
            },
            {
              q: "How long does a typical project take?",
              a: "A bathroom is measured in weeks, a full kitchen with custom cabinetry in months — cabinet lead time runs 9 to 15 weeks and overlaps the site work. An addition also depends on permit timing. The exact schedule is written into the contract once the scope is set.",
            },
            {
              q: "Do you also do commercial work in DDO?",
              a: "Yes. Our RBQ licence categories cover small buildings and buildings of all kinds, which includes commercial fit-outs, for example along boulevard des Sources or boulevard Saint-Jean. The logic is the same: written scope, permit, schedule and a single accountable contractor.",
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
          heading: "Planning a renovation in Dollard-des-Ormeaux?",
          intro:
            "Tell us what you want to do. We come and look at the house, frame the scope and come back with a detailed quote. Answer within 24 to 48 business hours.",
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
