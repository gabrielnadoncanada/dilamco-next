import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneIleBizardSainteGenevievePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in L'Île-Bizard–Sainte-Geneviève",
    description:
      "RBQ-licensed general contractor in L'Île-Bizard–Sainte-Geneviève: renovation, basements, flood reconstruction, borough permits handled for you.",
    path: "/zones/ile-bizard-sainte-genevieve",
    ogAlt: "Residential renovation in L'Île-Bizard–Sainte-Geneviève by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "L'Île-Bizard–Sainte-Geneviève",
      url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    },
  ],
  service: {
    name: "General contractor in L'Île-Bizard–Sainte-Geneviève",
    description:
      "Residential renovation and post-damage reconstruction in L'Île-Bizard–Sainte-Geneviève: borough permits, flood zones and full coordination by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    serviceType: "Residential renovation",
    areaServed: [
      "L'Île-Bizard–Sainte-Geneviève",
      "L'Île-Bizard",
      "Sainte-Geneviève",
      "Île Mercier",
      "Boulevard Gouin Ouest",
      "Chemin Cherrier",
      "Montée de l'Église",
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
            "General contractor in L'Île-Bizard–Sainte-Geneviève: renovating with the water in mind",
          description:
            "Our office on rue Larocque in Pierrefonds-Roxboro sits less than ten minutes from the Jacques-Bizard bridge. We renovate single-family homes on large wooded lots in L'Île-Bizard, older properties in the Sainte-Geneviève village core, and basements rebuilt after the Rivière des Prairies floods. Valid RBQ licence, one person accountable from permit to handover.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          badges: ["L'Île-Bizard", "Sainte-Geneviève", "RBQ 8306-0806-27"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Addition to a single-family home in L'Île-Bizard",
          },
          caption: "The borough next door to Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "What we know about homes in L'Île-Bizard and Sainte-Geneviève",
          description:
            "The borough is bounded by the Rivière des Prairies and Lac des Deux Montagnes. That setting gives L'Île-Bizard its character — large lots, wooded pockets, the Bois-de-l'Île-Bizard nature park — but it also imposes regulatory and technical constraints found nowhere else in the West Island.",
          cards: [
            {
              title: "Single-family homes on large lots",
              description:
                "The stock is overwhelmingly single-family, often bungalows or two-storey homes on deep lots along chemin Cherrier, boulevard Jacques-Bizard and the streets branching off them. Generous footprints make additions and finished basements attractive, but lot depth, mature trees and distance from services change the site logistics.",
            },
            {
              title: "Flood zones and water levels",
              description:
                "Part of the territory, including Île Mercier, is mapped as a flood risk area. The borough's rules flow directly from Quebec's policy on the protection of shores, banks and floodplains: in the high-current zone (0-20 year recurrence) construction, works and structures are prohibited, with limited exceptions; in the low-current zone (20-100 years), any non-immunized construction is prohibited, as is fill other than what immunization requires.",
            },
            {
              title: "The old village of Sainte-Geneviève",
              description:
                "Along boulevard Gouin Ouest, the block between the church, the presbytery and rue de la Caserne has been recognized as a village core of exceptional character. It holds the 1843-1845 church designed by François Baillargé and older homes such as the D'Ailleboust-De-Manthet house at 15886 boulevard Gouin Ouest. Renovating here calls for care with materials, openings and massing.",
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
          heading: "What we build in L'Île-Bizard–Sainte-Geneviève",
          intro:
            "RBQ-licensed general contractor, categories 1.2 and 1.3. We coordinate every trade and carry the permit application with the borough.",
          columns: "2",
          items: [
            {
              title: "Flood reconstruction",
              description:
                "The most frequent request in the borough since the 2017 and 2019 floods.",
              icon: "droplets",
              bullets: [
                "Selective demolition of affected materials, drying and remediation before anything is closed up.",
                "Materials and details chosen to tolerate a future water event at floor level.",
                "Work documented for the insurance file and for borough follow-up.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "A basement near the river is not finished the way a Kirkland basement is.",
              icon: "layers",
              bullets: [
                "Weeping tile, sump pump and backwater valve verified first.",
                "The borough's by-law on protecting buildings against sewer backup (11-010) applies.",
                "Fire separation, egress and window sizing confirmed before finishes go on.",
              ],
            },
            {
              title: "Kitchen renovation",
              description:
                "Full rebuilds of the closed kitchens found in 1960s-1990s homes.",
              icon: "chefHat",
              bullets: [
                "Opening to the dining room once the structure has been verified.",
                "Custom cabinets supplied by our cabinet division (RBQ subcategory 12).",
                "Electrical and plumbing upgraded behind the boxes.",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Waterproofing and ventilation first, finishes after.",
              icon: "bath",
              bullets: [
                "Membrane, drain and shower slope redone down to the substrate.",
                "Mechanical ventilation sized to avoid winter condensation.",
                "Plumber, electrician and tile setter sequenced properly.",
              ],
            },
            {
              title: "Home additions",
              description:
                "Island lots lend themselves to added volume, provided setbacks and shorelines are respected.",
              icon: "building2",
              bullets: [
                "Zoning, setbacks and, where applicable, the protected riparian strip checked first.",
                "Fill and excavation are regulated and require their own authorization.",
                "Foundation, structure and tie-in to the existing house handled in one sequence.",
              ],
            },
            {
              title: "Heritage-sensitive renovation",
              description:
                "Work on the older homes of boulevard Gouin Ouest in Sainte-Geneviève.",
              icon: "hammer",
              bullets: [
                "A proper survey of what exists before any drawing: levels, framing, original openings.",
                "Materials and proportions chosen to blend in rather than stand out.",
                "Conversion permit filed under by-law 11-018 on the construction and transformation of buildings.",
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
          heading: "How a project runs in this borough",
          intro:
            "L'Île-Bizard–Sainte-Geneviève is a borough of the City of Montreal. Permits go through the urban planning, permits and inspections division at 406, montée de l'Église, and through the permit counter at 15795, boulevard Gouin Ouest.",
          steps: [
            {
              number: "1",
              title: "Visit and survey",
              description:
                "Condition of the building, basement floor level, water history, and where the lot sits relative to the mapped flood zone.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions, schedule and budget in writing. Reply within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Permit application",
              description:
                "Construction, demolition, interior or exterior renovation, foundation work, balconies, fences and removal of a tree 10 cm in diameter or more all require authorization.",
            },
            {
              number: "4",
              title: "Floodplain review",
              description:
                "All work in the floodplain requires a permit, and some excavation is prohibited there and in wetlands. That check happens before signing, not after.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Access to the island is via the Jacques-Bizard bridge, so deliveries and the waste container are planned accordingly. Trades follow the sequence set in the contract.",
            },
            {
              number: "6",
              title: "Handover and inspection",
              description:
                "Deficiency list cleared before handover, compliance with the Quebec Construction Code verified, work guaranteed — details in the contract.",
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
          heading: "What we check before pricing a project in the borough",
          intro:
            "On the island, a serious quote starts with two questions many contractors skip: where the lot sits relative to the mapped flood zone, and what water has already done to this building.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Where the lot sits relative to the mapped high-current and low-current zones.",
            "Any history of flooding or sewer backup, including the 2017 and 2019 events.",
            "Basement floor level and the water height reached during previous floods.",
            "Presence and condition of the backwater valve, sump pump and weeping tile.",
            "Protected riparian strip and applicable setbacks before considering an addition.",
            "Mature trees near the work: removing one 10 cm in diameter or more requires authorization.",
            "Which permit the urban planning, permits and inspections division will require.",
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
          heading: "Why choose a contractor who knows the island",
          intro:
            "After the 2017 and 2019 floods, many L'Île-Bizard owners learned that rebuilding exactly as before was neither always possible nor always wise. A general contractor who knows the regulatory file will not have you design a project that cannot be approved.",
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
              title: "Ten minutes from the bridge",
              description:
                "Our Pierrefonds-Roxboro base is the natural gateway to the island. Site visits are not a special trip for us.",
            },
            {
              title: "Reading the water risk",
              description:
                "Floor level, backwater valve, sump pump, weeping tile and basement material choices are all scoped on the first visit.",
            },
            {
              title: "One contract, one schedule",
              description:
                "Structure, plumbing, electrical, drywall, tile and cabinetry answer to the same lead. That is what keeps a project from stalling between two subcontractors.",
            },
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement renovation",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Finished basement rebuilt after water damage",
          },
          cardTitle: "Rebuild, not just repair",
          cardDescription:
            "A basement redone after a flood without revisiting drainage, the backwater valve and the materials will be redone a second time. The real question is not only how to restore it, but how to limit the damage next time.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget, permits and schedule: the local benchmarks",
          description:
            "In this borough, two factors move the budget more often than elsewhere: what is actually hidden behind the basement walls, and the regulatory side tied to water. Here is what we explain on site.",
          cards: [
            {
              title: "From roughly $25,000",
              description:
                "Order of magnitude for a project coordinated by a general contractor: a basement rebuild, a full bathroom or an entry-level kitchen. The estimate is free and carries no obligation.",
            },
            {
              title: "Full kitchen: $35,000 to $50,000 and up",
              description:
                "The spread comes from opening walls, relocating plumbing or electrical, the level of finish and custom cabinetry. The budget is set in the written contract before work begins.",
            },
            {
              title: "What stretches the schedule",
              description:
                "Getting the permit, floodplain verifications, cabinet lead time, and what demolition uncovers — mould, damaged framing, old fill. We put these in the calendar up front.",
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
          heading: "The most frequent mandates on the island",
          intro:
            "Three kinds of projects come up constantly in L'Île-Bizard and Sainte-Geneviève. Each has its own service page with the method and sequence spelled out.",
          items: [
            {
              title: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              description:
                "Full rebuild after water damage, a sewer backup or a flood: drying, selective demolition, reconstruction.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Materials staged for a basement rebuild",
              },
              badges: ["Post-damage", "Insurance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing or redoing a basement with drainage, the backwater valve and water risk accounted for.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Basement finished as a home cinema",
              },
              badges: ["Basement", "Drainage"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Adding volume on the island's large lots, within setbacks and protected shoreline rules.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning a home addition",
              },
              badges: ["Addition", "Zoning"],
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
            "We cover the whole borough, from Île Mercier to the old village of Sainte-Geneviève, plus adjacent West Island sectors and the Laval shore.",
          columns: "3",
          items: [
            {
              title: "L'Île-Bizard and chemin Cherrier",
              description:
                "Single-family homes on large lots, additions and finished basements.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Large lots"],
            },
            {
              title: "Île Mercier and the riverbanks",
              description:
                "Sectors mapped as flood risk areas, post-damage reconstruction.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Flood zone"],
            },
            {
              title: "Old Sainte-Geneviève",
              description:
                "Boulevard Gouin Ouest, a recognized village core, older homes to convert carefully.",
              href: "/services/renovation",
              badges: ["Heritage"],
            },
            {
              title: "Pierrefonds-Roxboro",
              description: "Our base, just across the Jacques-Bizard bridge.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the Pierrefonds-Roxboro page",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "Neighbour to the south, housing stock from the 1960s to the 1990s.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See the Dollard-des-Ormeaux page",
            },
            {
              title: "Laval",
              description:
                "Across the Rivière des Prairies, in the Sainte-Dorothée and Laval-Ouest sectors.",
              href: "/zones/laval",
              ctaLabel: "See the Laval page",
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
            "Frequently asked questions — renovating in L'Île-Bizard–Sainte-Geneviève",
          intro:
            "Permits, flood zones, basements, insurance: the questions borough homeowners ask us.",
          items: [
            {
              q: "Where do I apply for a permit in L'Île-Bizard–Sainte-Geneviève?",
              a: "With the borough. The permit counter is at 15795, boulevard Gouin Ouest, and the urban planning, permits and inspections division is at 406, montée de l'Église. We prepare and file the application as part of the mandate rather than leaving you to do it alongside the build.",
            },
            {
              q: "Which work requires a permit?",
              a: "Construction or demolition of a building, interior and exterior renovations, foundation work, building a balcony, installing a fence, removing a tree 10 cm in diameter or more, pools, replacing a roof with non-standard materials, and modifying interior walls. Minor repairs and replacing asphalt shingles with matching ones generally do not.",
            },
            {
              q: "My house is in a flood zone. Can I still renovate?",
              a: "It depends on the zone. In the high-current zone (0-20 year recurrence), construction, works and structures are prohibited except for the exceptions set out in the by-law. In the low-current zone (20-100 years), non-immunized construction is prohibited, as is fill other than what immunization requires. In every case, all work in the floodplain requires a permit. We confirm your situation before drawing anything.",
            },
            {
              q: "Do you handle reconstruction after a flood?",
              a: "Yes. The 2017 and 2019 floods affected several streets in the borough, including Île Mercier. We step in after drying: selective demolition, remediation, structural repairs where needed, then rebuild. The work is documented so your insurance file keeps pace with the site.",
            },
            {
              q: "Can a basement be finished near the Rivière des Prairies?",
              a: "Often yes, but not the same way as elsewhere. We check the weeping tile, sump pump and backwater valve — the by-law on protecting buildings against sewer backup (11-010) applies in the borough — then select floor and lower-wall materials that limit damage if water returns.",
            },
            {
              q: "What does a renovation cost in this area?",
              a: "Our projects start around $25,000, and a full kitchen with custom cabinetry lands closer to $35,000 to $50,000 and up. Price depends on the condition of the building, the scope and the number of trades. The estimate is free, and budget and schedule are both set in the written contract.",
            },
            {
              q: "Do you work on the older homes in Sainte-Geneviève?",
              a: "Yes. Along boulevard Gouin Ouest, the village core between the church, the presbytery and rue de la Caserne is recognized for its exceptional character. We start from a proper survey of what exists — framing, levels, original openings — and file the conversion application under the borough's by-law 11-018.",
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
          heading: "Planning a project in L'Île-Bizard or Sainte-Geneviève?",
          intro:
            "We cross the Jacques-Bizard bridge, look at the house, confirm the regulatory side and send you a detailed quote with a written schedule and budget.",
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
          note: "RBQ-licensed general contractor 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
