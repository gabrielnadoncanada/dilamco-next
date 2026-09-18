import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Kirkland — renovation",
    description:
      "RBQ-licensed general contractor in Kirkland: major renovations, additions, kitchens and basements on the West Island's larger lots.",
    path: "/zones/kirkland",
    ogAlt: "Home renovation in Kirkland by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Kirkland", url: SITE.url + "/zones/kirkland" },
  ],
  service: {
    name: "General contractor in Kirkland",
    description:
      "Home renovation, additions, kitchens, bathrooms and basements in Kirkland, by an RBQ-licensed general contractor based in the West Island.",
    url: SITE.url + "/zones/kirkland",
    serviceType: "Residential renovation",
    areaServed: [
      "Kirkland",
      "Timberlea",
      "Boul. Hymus",
      "Boul. Saint-Charles",
      "Boul. Brunswick",
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
          eyebrow: "Dilamco - Kirkland",
          heading:
            "General contractor in Kirkland: renovations and additions on larger lots",
          description:
            "Kirkland is a city of fewer than 20,000 residents across 9.6 km2, with one of the lowest residential densities in the West Island. Large lots, detached single-family homes, and owners who extend rather than move. Our base is on rue Larocque in Pierrefonds-Roxboro, about fifteen minutes from boulevard Saint-Charles. RBQ licence 8306-0806-27, general contractor categories 1.2 and 1.3.",
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
          badges: ["RBQ 8306-0806-27", "Additions", "Kirkland", "Insured"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Addition to a detached home in Kirkland",
          },
          caption: "On both sides of Highway 40 - West Island",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Kirkland homes",
          description:
            "Kirkland was incorporated in 1961, then reconstituted on 1 January 2006 after the municipal merger years. Its development was shaped by one physical feature: the Trans-Canada Highway built in the 1960s, which splits the city in two. The industrial park settled on both sides of Highway 40 — Merck, Pfizer, Nissan, aerospace firms — while the rest of the territory stayed residential. The result is a two-speed city and a very homogeneous housing stock.",
          cards: [
            {
              title: "Large lots and detached houses",
              description:
                "At roughly 2,000 residents per square kilometre, Kirkland is markedly less dense than its neighbours. Most of the residential stock consists of detached single-family homes on generous lots, built from the late 1960s through the 1980s, with newer pockets added later. In practice that means side and rear additions that are genuinely feasible, double garages worth converting, basements with decent headroom and comfortable site access — which simplifies placing a bin and receiving materials, unlike the tighter streets of some neighbouring sectors.",
            },
            {
              title: "A generation of houses reaching its limit",
              description:
                "A Kirkland house built in the 1970s is now reaching end of life on several systems at once: windows replaced once, roof due, electrical panel to modernize for an EV charger, attic insulation below current standards, the original closed kitchen, two bathrooms never renovated. Renovating room by room over ten years costs more than one planned major renovation, because every round pays again for mobilization, site protection and finishing.",
            },
            {
              title: "A centralized and demanding municipal department",
              description:
                "In Kirkland, the Urban Planning and Environment department issues building permits and authorization certificates, inspects buildings and enforces planning by-laws — zoning, subdivision, construction. For most renovations, interior or exterior, you must consult the municipality and obtain a permit or certificate before work begins. Applications go through the Online Permit Management portal, or in person at city hall, 17200 boulevard Hymus. Excavation work requires its own certificate, not to be confused with the building permit.",
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
          heading: "What we build in Kirkland",
          intro:
            "The most frequent mandates in a city of detached houses on large lots, and what each one involves on site.",
          columns: "2",
          items: [
            {
              title: "Home additions",
              description:
                "The signature Kirkland mandate, thanks to lot sizes.",
              icon: "building2",
              bullets: [
                "Rear or side extension, second-storey addition, four-season sunroom.",
                "Excavation certificate and building permit obtained separately, as the city requires.",
                "Foundation, structure, envelope, roofing and tie-in to the existing house under one contract.",
              ],
            },
            {
              title: "Full major renovation",
              description:
                "Taking on a 1970s house in one go.",
              icon: "hardHat",
              bullets: [
                "Kitchen, bathrooms, flooring, doors and finishes in a single sequence.",
                "Electrical panel and plumbing upgraded while walls are open.",
                "One schedule instead of a string of small projects spread over ten years.",
              ],
            },
            {
              title: "Kitchen renovation",
              description:
                "Opening the original closed kitchen onto the living areas.",
              icon: "chefHat",
              bullets: [
                "Wall analysis and beam sizing before demolition.",
                "Island, ventilation and electrical circuits planned with the design, not after.",
                "Custom cabinetry supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Often two or three bathrooms to redo in the same house.",
              icon: "bath",
              bullets: [
                "Waterproofing rebuilt completely before any tile.",
                "Ventilation corrected and vented to the exterior.",
                "Sequence planned to keep at least one bathroom in service.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Basements with good headroom, often only partly finished.",
              icon: "sofa",
              bullets: [
                "Family room, home theatre, office, gym or guest bedroom.",
                "Insulation and vapour barrier rebuilt to current rules.",
                "Full bathroom added where drain and headroom allow.",
              ],
            },
            {
              title: "Garage conversions",
              description:
                "Turning non-habitable area into usable living space.",
              icon: "doorOpen",
              bullets: [
                "Double garage converted into an office, family room or workshop.",
                "Insulation, heating, electrical and glazing brought to habitable-room standards.",
                "Use and compliance confirmed with the Urban Planning department.",
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
          heading: "How a Kirkland project runs",
          intro:
            "In Kirkland, most projects touch the envelope or the structure. The permit is not a last formality: it is the first step after scoping.",
          steps: [
            {
              number: "1",
              title: "Visit and survey",
              description:
                "We survey dimensions, structure, panel, foundation and available space on the lot. Kirkland is about fifteen minutes from our Pierrefonds-Roxboro base.",
            },
            {
              number: "2",
              title: "Regulatory feasibility",
              description:
                "Setbacks, siting and applicable standards checked with the Urban Planning and Environment department before you pay for drawings.",
            },
            {
              number: "3",
              title: "Detailed quote",
              description:
                "A written scope, item by item, with inclusions and exclusions. Answer within 24 to 48 business hours after the visit. Free estimate.",
            },
            {
              number: "4",
              title: "Permits and certificates",
              description:
                "Application filed through the Online Permit Management portal or at city hall, 17200 boulevard Hymus. The excavation certificate, where applicable, is requested separately.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Excavation, foundation, structure, mechanical, envelope and finishes sequenced. One accountable contact for questions and changes, documented in writing.",
            },
            {
              number: "6",
              title: "Inspections and handover",
              description:
                "Municipal inspections at the scheduled stages, a deficiency list closed with you, then handover. Work is guaranteed, details in the contract.",
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
          heading: "Why a general contractor for a Kirkland project",
          intro:
            "An addition involves excavation, foundation, structure, roofing, envelope, mechanical and finishing. Seven trades. Without one accountable party, that is seven calendars contradicting each other.",
          items: [
            {
              title: "One contract, one accountable party",
              description:
                "You are not coordinating the excavator, the framer, the roofer, the electrician and the plasterer. That is our job, and it is written into the contract.",
            },
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "Issued 7 September 2004, valid and unrestricted, general contractor categories 1.2 (small buildings) and 1.3 (buildings of all kinds). Verifiable in the Régie du bâtiment registry.",
            },
            {
              title: "The permit treated as a project stage",
              description:
                "Kirkland requires a permit or certificate for most renovations, and a separate certificate for excavation. We build that into the schedule rather than discovering it in start-up week.",
            },
            {
              title: "Insurance and compliance",
              description:
                "Civil liability and site insurance in place, work carried out in compliance with the Québec Construction Code. No claim on our licence file.",
            },
            {
              title: "An in-house cabinet division",
              description:
                "Our custom cabinetry is built for us by our partner factory (RBQ subcategory 12): one fewer party between structure and finishing.",
            },
          ],
          actions: [
            {
              label: "See our addition service",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Addition and major renovation of a Kirkland home",
          },
          cardTitle: "Google rating 5.0 from 11 reviews",
          cardDescription:
            "A general contractor since 2004, with hundreds of residential projects across the West Island. Schedule and budget set in a written contract. Work is guaranteed, details in the contract.",
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
            "We work across Kirkland's eight districts, north and south of Highway 40: the residential streets around boulevard Saint-Charles, boulevard Brunswick and chemin Sainte-Marie, the Timberlea sector, and the commercial and industrial spaces along boulevard Hymus.",
          columns: "3",
          items: [
            {
              title: "Home additions",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Extension, second storey or garage conversion, permit included.",
              ctaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening the original closed kitchen and rebuilding the living areas.",
              ctaLabel: "See the service",
            },
            {
              title: "Basement renovation",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing a full-height basement with insulation done properly.",
              ctaLabel: "See the service",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "The neighbouring city southwest, toward Lac Saint-Louis.",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "East, along boulevard Hymus and boulevard Saint-Jean.",
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Northeast, across boulevard Saint-Charles.",
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
          heading: "FAQ - renovating in Kirkland",
          intro:
            "Permits, excavation, budget and process: the questions Kirkland homeowners ask most.",
          items: [
            {
              q: "Do I need a permit to renovate in Kirkland?",
              a: "Yes, in most cases. The city states that before undertaking home renovations, interior or exterior, you must first consult the municipality and, in most cases, obtain a building permit or authorization certificate issued by the Urban Planning and Environment department. We prepare the file as part of the mandate.",
            },
            {
              q: "How do you apply for a permit in Kirkland?",
              a: "Through the Online Permit Management portal, which lets you file the application, track its status and, in many cases, pay the fees and obtain the permit without travelling. You can also file in person at city hall, 17200 boulevard Hymus, during business hours.",
            },
            {
              q: "Does an addition require a separate excavation permit?",
              a: "Kirkland treats excavation work as an application separate from the building permit. For an addition with a foundation, you therefore need both. We obtain the required authorizations and build them into the schedule, instead of discovering them in start-up week.",
            },
            {
              q: "What does a major renovation cost in Kirkland?",
              a: "Our renovation mandates generally start around $25,000, and a full kitchen usually falls between $35,000 and $50,000 and up. An addition with a foundation sits in a higher range, since it adds excavation, structure, roofing and envelope. The exact price comes from the detailed quote, after the visit. Estimates are free.",
            },
            {
              q: "Can a Kirkland lot accommodate an addition?",
              a: "Often yes: Kirkland lots are generally larger than the West Island average. What decides is setbacks, lot coverage and the standards applicable in your zone. We confirm feasibility with the Urban Planning department before you spend money on drawings.",
            },
            {
              q: "How long does an addition take?",
              a: "Several months, with a significant share of that time before the first shovel: drawings, permit, excavation certificate and material orders. Once the site opens, the excavation, foundation, structure, envelope, mechanical and finishing sequence runs continuously. The exact schedule is written into the contract.",
            },
            {
              q: "Do you do commercial fit-outs in Kirkland?",
              a: "Yes. The industrial park spans both sides of Highway 40, and boulevard Hymus holds a number of commercial spaces. Our RBQ licence categories cover small buildings and buildings of all kinds, which includes commercial and office fit-outs.",
            },
            {
              q: "Do you build new homes in Kirkland?",
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
          heading: "Planning a renovation or an addition in Kirkland?",
          intro:
            "We come by, survey the house and the lot, confirm regulatory feasibility, then come back with a written scope and a price. Answer within 24 to 48 business hours.",
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
