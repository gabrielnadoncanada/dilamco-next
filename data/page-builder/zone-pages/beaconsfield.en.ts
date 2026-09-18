import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneBeaconsfieldPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Beaconsfield",
    description:
      "RBQ-licensed general contractor in Beaconsfield: major renovations, additions, kitchens and basements, with zoning by-law 720 and tree permits handled.",
    path: "/zones/beaconsfield",
    ogAlt: "Home renovation in Beaconsfield by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Beaconsfield", url: SITE.url + "/zones/beaconsfield" },
  ],
  service: {
    name: "General contractor in Beaconsfield",
    description:
      "Major home renovation, additions, kitchens, bathrooms and basements in Beaconsfield, by an RBQ-licensed West Island general contractor.",
    url: SITE.url + "/zones/beaconsfield",
    serviceType: "Residential renovation",
    areaServed: [
      "Beaconsfield",
      "Beaurepaire",
      "Kensington Gardens",
      "Forest Garden",
      "Drummond Park",
      "Beacon Hill",
      "Sherwood",
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
          eyebrow: "Dilamco - Beaconsfield",
          heading:
            "General contractor in Beaconsfield: renovating a planned 1950s and 1960s suburb",
          description:
            "Beaconsfield went from 990 residents in 1951 to 16,800 in 1967. Almost the whole city was built in fifteen years, neighbourhood by neighbourhood, with tight planning and a commitment to greenery that still applies today. We renovate sixty- and seventy-year-old houses here, on wooded lots where you cannot cut a tree without a permit. RBQ licence 8306-0806-27, valid since 2004.",
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
            "Major renovation",
            "Beaconsfield",
            "Insured",
          ],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Interior renovation of a Beaconsfield home",
          },
          caption:
            "Beaurepaire, Beacon Hill, Sherwood and the Lakeshore - West Island",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Beaconsfield homes",
          description:
            "About 19,300 residents across 24.5 km2 — a density of barely 787 people per square kilometre, the lowest in the built-up West Island. The city covers 1,050 hectares along Lac Saint-Louis. It was developed in an ordered and well-planned way, prioritizing single-family homes, tree-lined streets and parks, with developers required to hand over 5% of developed land as public green space. That history still shows up on every jobsite.",
          cards: [
            {
              title: "Neighbourhoods you can date to the year",
              description:
                "Kensington Gardens in 1951, Forest Garden in 1954, Drummond Park in 1955, Edgewood Village in 1960, Beacon Hill in 1962, Sherwood in 1963. Village Beaurepaire grew as a commercial core starting in 1925, and the former Beaurepaire golf club, opened in 1926 at the north end of Woodland Avenue, was subdivided into residential lots from the late 1990s — which explains the much newer houses inside an otherwise older sector. Knowing a neighbourhood's year means knowing in advance what insulation, framing, plumbing and electrical panel you will run into.",
            },
            {
              title: "Seventy years of wear, every system at once",
              description:
                "A Kensington Gardens or Forest Garden house is now over seventy years old. A Beacon Hill or Sherwood house is over sixty. At that age it is no longer one system reaching the end of its life but all of them together: electrical service, plumbing, windows, insulation, roof, original kitchen and bathrooms. That is why a large share of our Beaconsfield mandates are major renovations rather than one-off jobs: one mobilization, one round of site protection, one finishing pass.",
            },
            {
              title: "The tree canopy is regulated, not decorative",
              description:
                "In Beaconsfield it is prohibited to cut down a tree on private property without first obtaining a permit. No authorization is required if the trunk diameter is under 10 cm measured 1.5 m above ground. A tree within 3 m of the footprint of a proposed construction may be cut, but only if the construction cannot be located elsewhere on the lot. Every tree removed must be replaced: the certificate application requires a $500 deposit for the first five trees, plus $100 per additional tree, refunded once replacement is completed under the conditions of zoning by-law 720. For an addition, that directly shapes where the building can go.",
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
          heading: "What we build in Beaconsfield",
          intro:
            "The most frequent mandates in a city whose housing stock is mostly between sixty and seventy-five years old.",
          columns: "2",
          items: [
            {
              title: "Full major renovation",
              description:
                "Taking on a 1950s or 1960s house in one go.",
              icon: "hardHat",
              bullets: [
                "Kitchen, bathrooms, flooring, doors, mouldings and paint in a single sequence.",
                "Electrical service and plumbing upgraded while the walls are open.",
                "One written schedule instead of ten years of successive small projects.",
              ],
            },
            {
              title: "Kitchen renovation",
              description:
                "The original closed kitchen, rarely suited to how people cook now.",
              icon: "chefHat",
              bullets: [
                "Load-bearing wall analyzed and beam sized before demolition.",
                "Electrical circuits and ventilation planned together with the design.",
                "Custom cabinetry supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Often two or three bathrooms never renovated.",
              icon: "bath",
              bullets: [
                "Full waterproofing membrane before any tile.",
                "Ventilation added and vented outside, not into the attic.",
                "Sequence planned to keep one bathroom usable during the work.",
              ],
            },
            {
              title: "Home additions",
              description:
                "Gaining floor area on a wooded, regulated lot.",
              icon: "building2",
              bullets: [
                "Siting studied around the trees to keep and the tree-cutting by-law.",
                "Setbacks, heights and lot coverage validated under zoning by-law 720.",
                "Foundation, structure, envelope and tie-in to the existing house under one contract.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Basements often partly finished back in the 1970s.",
              icon: "sofa",
              bullets: [
                "Old finishes removed, moisture and drainage assessed before closing up.",
                "Insulation and vapour barrier rebuilt to current rules.",
                "Family room, office, gym or extra bedroom.",
              ],
            },
            {
              title: "Envelope and efficiency",
              description:
                "Fixing what makes a period house uncomfortable.",
              icon: "layers",
              bullets: [
                "Attic insulation and air sealing redone properly.",
                "Doors and windows replaced with careful flashing and installation.",
                "Envelope work scheduled from late spring through fall.",
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
          heading: "How a Beaconsfield project runs",
          intro:
            "A stable sequence, with one step few contractors anticipate in Beaconsfield: the tree question.",
          steps: [
            {
              number: "1",
              title: "Visit and survey",
              description:
                "We survey the house and the lot: structure, panel, plumbing, foundation, and also the trees and vegetation near the work area.",
            },
            {
              number: "2",
              title: "Regulatory feasibility",
              description:
                "Setbacks, heights and lot coverage checked under zoning by-law 720, and confirmed with the city's urban planning and building inspection advisors.",
            },
            {
              number: "3",
              title: "Detailed quote",
              description:
                "A written scope item by item, with inclusions and exclusions clearly named. Answer within 24 to 48 business hours after the visit. Free estimate.",
            },
            {
              number: "4",
              title: "Permits and certificates",
              description:
                "Building permit and, if a tree must come down, a tree-cutting authorization certificate with the required deposit and replacement commitment.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Trades sequenced, retained trees protected, access and debris managed. One point of contact from start to finish.",
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
          heading: "Why a general contractor for a Beaconsfield house",
          intro:
            "On a seventy-year-old house, the gap between two quotes almost never comes from material prices. It comes from what was anticipated, or not, before the walls were opened.",
          items: [
            {
              title: "Assessment before price",
              description:
                "Electrical service, plumbing, insulation, framing: we look at what will actually have to be touched rather than quoting the visible scope and adding extras along the way.",
            },
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "Issued 7 September 2004, valid and unrestricted, general contractor categories 1.2 and 1.3, no claim on file. Verifiable in the Régie du bâtiment registry.",
            },
            {
              title: "The tree by-law accounted for",
              description:
                "A poorly sited addition can trigger an unnecessary tree-cutting application, a deposit and a replacement obligation. We design around the trees worth keeping.",
            },
            {
              title: "One contract for a major renovation",
              description:
                "When a whole house is taken on, the number of trades multiplies. One general contractor, one schedule, one written budget: that is where coordination pays for itself.",
            },
            {
              title: "An in-house cabinet division",
              description:
                "Our custom cabinetry is built for us by our partner factory (RBQ subcategory 12): one fewer party between demolition and finishing.",
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
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planning an addition in Beaconsfield",
          },
          cardTitle: "Google rating 5.0 from 11 reviews",
          cardDescription:
            "A general contractor since 2004, with hundreds of residential projects across the West Island. Civil liability and site insurance in place. Schedule and budget set in a written contract.",
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
            "We work in every Beaconsfield sector: Beaurepaire and its commercial village, Kensington Gardens, Forest Garden, Drummond Park, Edgewood Village, Beacon Hill, Sherwood, the lakeside streets off chemin du Bord-du-Lac—Lakeshore, and the neighbourhoods served by the Beaconsfield and Beaurepaire stations on the Vaudreuil-Hudson line.",
          columns: "3",
          items: [
            {
              title: "Home additions",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Siting designed around retained trees and zoning by-law 720.",
              ctaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening and rebuilding the original kitchen of a 1950s house.",
              ctaLabel: "See the service",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing, ventilation and plumbing done properly.",
              ctaLabel: "See the service",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "The neighbouring city northeast, across Highway 20.",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "East, the other city on Lac Saint-Louis.",
              ctaLabel: "See the area",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Our base, in the north of the West Island.",
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
          heading: "FAQ - renovating in Beaconsfield",
          intro:
            "Permits, trees, budget and process: the questions Beaconsfield homeowners ask most.",
          items: [
            {
              q: "Do I need a permit to renovate in Beaconsfield?",
              a: "In most cases, yes. The city makes urban planning and building inspection advisors available to confirm whether a permit is required for a renovation or construction project. As soon as structure, envelope, siting or use is involved, you go through the planning department. We prepare the file as part of the mandate.",
            },
            {
              q: "Can I cut a tree to make room for my addition?",
              a: "Not without authorization. It is prohibited to cut down a tree on private property in Beaconsfield without first obtaining a permit. A tree within the footprint of a proposed construction, or less than three metres from it, may be cut, but only if the construction cannot be located elsewhere on the lot. That is why we study siting before drawing anything.",
            },
            {
              q: "What does the tree-cutting certificate cost?",
              a: "The city requires a $500 deposit for the first five trees, plus $100 per additional tree, to secure the replacement obligation set out in zoning by-law 720. The deposit is refunded once the tree is replaced under the conditions of the by-law. No authorization is required if the trunk diameter is under 10 cm measured 1.5 m above ground.",
            },
            {
              q: "My house is seventy years old: should I renovate in stages?",
              a: "Rarely, when several systems reach end of life at the same time. Every small project pays again for mobilization, site protection, debris handling and finishing. A major renovation planned as one sequence usually costs less overall and avoids rebuilding the same walls twice. We can also split the project into contractual phases if the budget requires it.",
            },
            {
              q: "What does a renovation cost in Beaconsfield?",
              a: "Our renovation mandates generally start around $25,000. A full kitchen usually falls between $35,000 and $50,000 and up. A major renovation or an addition sits in a higher range. The exact price comes from the detailed quote, after the visit. Estimates are free.",
            },
            {
              q: "How far are you from Beaconsfield?",
              a: "Our base is at 18625 rue Larocque, in Pierrefonds-Roxboro, roughly fifteen to twenty minutes from Beaconsfield depending on the sector. Close enough that a follow-up visit or an unexpected issue does not cost half a day of travel.",
            },
            {
              q: "Can envelope work be done in winter?",
              a: "Interior work runs year-round. Roofing, siding, excavation and foundations are more sensitive to frost and are usually scheduled from late spring through fall. Winter remains a good time to prepare drawings, obtain the permit and the tree certificate, and start at thaw.",
            },
            {
              q: "Do you build new homes in Beaconsfield?",
              a: "No. We are a general contractor for renovation, conversion, addition, post-disaster reconstruction and commercial fit-out. We do not build new houses and do not offer a new-home warranty plan.",
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
          heading: "Planning a renovation in Beaconsfield?",
          intro:
            "We survey the house and the lot, confirm what zoning by-law 720 and the tree by-law allow, then come back with a written scope and a price. Free estimate.",
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
