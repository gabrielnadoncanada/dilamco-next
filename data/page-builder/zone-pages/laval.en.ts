import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Laval — Renovation",
    description:
      "RBQ-licensed general contractor in Laval: Chomedey bungalow renovations, basements, City urban planning permits, Mille Îles flood zones.",
    path: "/zones/laval",
    ogAlt: "Residential renovation in Laval by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "General contractor in Laval",
    description:
      "Turnkey residential renovation in Laval: scoping, City of Laval urban planning permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/laval",
    serviceType: "Residential renovation",
    areaServed: [
      "Laval",
      "Chomedey",
      "Sainte-Dorothée",
      "Laval-Ouest",
      "Fabreville",
      "Vimont",
      "Sainte-Rose",
      "Laval-des-Rapides",
      "Duvernay",
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
            "General contractor in Laval: residential renovation from permit to handover",
          description:
            "From our Pierrefonds-Roxboro base, Laval is about twenty minutes away via Highway 13 or the Lachapelle bridge. We mostly renovate 1960s-1970s bungalows in Chomedey, 1980s-1990s homes in Vimont, and basements rebuilt after Rivière des Mille Îles flooding in Laval-Ouest and Fabreville. Valid RBQ licence, one person accountable for the site.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Laval", "RBQ 8306-0806-27", "Since 2004"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovated kitchen in a Laval home",
          },
          caption:
            "Chomedey, Sainte-Dorothée, Laval-Ouest, Fabreville, Vimont, Sainte-Rose",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Laval homes",
          description:
            "Laval is not one uniform territory: the city was built in waves, sector by sector, from the 1960s to today. Knowing which generation a house belongs to means knowing what you will find behind the walls before you open them.",
          cards: [
            {
              title: "Chomedey and Laval-des-Rapides: the 1960-1970 wave",
              description:
                "These sectors were developed mainly in the 1960s and 1970s and hold a high proportion of bungalows on concrete block foundations. Roughly a third of Chomedey properties date from those two decades. On this type of home we systematically check the electrical service, the state of the plumbing, basement clear height, and whether the attic holds vermiculite — an insulation of that era that may contain asbestos.",
            },
            {
              title: "Sainte-Dorothée, Fabreville and Laval-Ouest",
              description:
                "West of Île Jésus, the stock mixes 1970s-1980s construction with far more recent developments. It is also the sector most exposed to the Rivière des Mille Îles: in 2017, entire residential streets in Laval-Ouest and Fabreville flooded, as did the chemin du Bord-de-l'eau area in Sainte-Dorothée. Basement floor level and the backwater valve are part of scoping from the first visit.",
            },
            {
              title: "Vimont, Duvernay and Sainte-Rose",
              description:
                "The centre and north of the island saw a construction wave in the 1980s and 1990s, with many two-storey homes and already-finished basements. Projects there are usually upgrades: opening the kitchen, redoing the bathroom, rethinking the basement and redoing finishes, rather than heavy reconstruction.",
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
          heading: "What we build in Laval",
          intro:
            "RBQ-licensed general contractor, categories 1.2 (small buildings) and 1.3 (buildings of all kinds). We take on the permit, the sequence and every trade on site.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "Opening up the closed kitchen of a 1960s-1970s bungalow.",
              icon: "chefHat",
              bullets: [
                "Load-bearing status confirmed before the opening is drawn.",
                "Electrical upgrade and plumbing relocation where required.",
                "Custom cabinets supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description: "Full rebuild of original bathrooms.",
              icon: "bath",
              bullets: [
                "Membrane, drain, slope and ventilation redone down to the substrate.",
                "Adding a powder room where layout and plumbing allow.",
                "Sequenced to shorten the time without a working bathroom.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "The most common project in Vimont, Duvernay and Sainte-Rose.",
              icon: "layers",
              bullets: [
                "Clear height, beams and columns measured before the layout is locked in.",
                "Drainage, sump pump and backwater valve verified before walls are closed.",
                "Egress, window sizing and fire separation compliant with the Quebec Construction Code.",
              ],
            },
            {
              title: "Water damage reconstruction",
              description:
                "Riverside sectors along the Mille Îles and sewer backups.",
              icon: "droplets",
              bullets: [
                "Selective demolition, drying and remediation before rebuilding.",
                "Materials and details chosen to better absorb a future water event.",
                "Work documented for the owner's insurance file.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Added volume, reworked upper floors, garage turned into living space.",
              icon: "building2",
              bullets: [
                "Zoning, setbacks and flood elevations verified before any commitment.",
                "Some sectors require review under a site planning and architectural integration programme.",
                "Foundation, structure and tie-in to the existing house handled in one sequence.",
              ],
            },
            {
              title: "Flooring and finishes",
              description:
                "Redoing floors, trim and thresholds after the work.",
              icon: "ruler",
              bullets: [
                "Substrate levelled before installation, especially on a basement slab.",
                "Continuous transitions between renovated rooms.",
                "Alignments and joints redone so the renovation does not show at the seams.",
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
          heading: "How a Laval project runs",
          intro:
            "Laval is a city in its own right: neither a Montreal borough nor a linked city of the agglomeration. Its Service de l'urbanisme handles applications, and all permit and certificate requests are now filed online.",
          steps: [
            {
              number: "1",
              title: "Visit and scoping",
              description:
                "Survey of the house, its construction era and its visible constraints. We tell you right away which permit will be required.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions, schedule and budget in writing. Reply within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Choosing the right permit",
              description:
                "The City distinguishes the interior residential renovation or repair permit from its exterior counterpart, and provides a separate permit for renovating a commercial space.",
            },
            {
              number: "4",
              title: "Online filing",
              description:
                "The application goes through the City's online service. Progress is tracked in Mon dossier, and the issued permit is posted there and sent by email.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Trades sequenced per the contract, premises protected, materials and waste container managed. One person accountable for the whole site.",
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
          heading: "What we check before pricing a Laval project",
          intro:
            "In Laval, the era a sector was built in gives a first hypothesis, but only the site visit confirms it. These are the points we look at before writing a number, because they are what moves a quote once the work starts.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year of construction and sector: the 1960-1970 wave does not hide the same surprises as the 1990s one.",
            "Electrical service capacity and panel condition before adding circuits.",
            "Foundation type and any signs of movement, common on concrete block foundations.",
            "Possible vermiculite in the attic if the work touches that space.",
            "Basement clear height, position of beams, columns and mechanical systems.",
            "Condition of the drainage, sump pump and backwater valve.",
            "Where the lot sits relative to the flood zones set out in the zoning by-law.",
            "The exact permit required: interior renovation, exterior renovation or commercial space.",
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
          heading: "Why work with us in Laval",
          intro:
            "Our base is in Pierrefonds-Roxboro, across the Rivière des Prairies. Highway 13 and the Lachapelle bridge put Chomedey, Sainte-Dorothée and Laval-Ouest within immediate reach, which changes how often we can visit a site and how fast we react when something stalls.",
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
              title: "Permits handled",
              description:
                "We identify the right permit, assemble the file and submit it through the City's online service. You follow progress in Mon dossier.",
            },
            {
              title: "Reading flood elevations",
              description:
                "In riverside sectors, we verify where the lot sits relative to the flood zones in the zoning by-law before drawing anything.",
            },
            {
              title: "One contract for every trade",
              description:
                "Structure, plumbing, electrical, drywall, tile and cabinetry answer to the same lead and the same schedule.",
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
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Coordinated residential renovation site in Laval",
          },
          cardTitle: "What actually derails a Laval project",
          cardDescription:
            "Almost never the countertop choice. More often a permit filed too late, a scope that was never written down, an electrical service that needed replacing, and nobody to arbitrate between subcontractors. A general contractor exists to remove those four.",
        },
      },
    },
    {
      id: "flood",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Flood zones: what actually changes",
          description:
            "In Laval, the Rivière des Mille Îles floodplain boundaries are set by the flood elevations written into the zoning by-law, based on a study approved by the Quebec government in 2014. That is not an administrative detail: it decides what can be built, filled or refinished.",
          cards: [
            {
              title: "Verify before drawing",
              description:
                "If your lot touches a mapped zone, we confirm the applicable elevation before proposing an addition, a foundation or a finished basement. A project drawn first and verified after usually has to be redone.",
            },
            {
              title: "Most affected sectors",
              description:
                "Laval-Ouest and Fabreville were heavily hit by the 2017 floods, with residential streets under water, as was the chemin du Bord-de-l'eau area of Sainte-Dorothée. These are the sectors where the regulatory side weighs most on the schedule.",
            },
            {
              title: "Refinishing a basement differently",
              description:
                "After a water event, closing everything back exactly as before usually means doing the work a second time. We revisit drainage, the backwater valve and the choice of floor and lower-wall materials before talking about finishes.",
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
          heading: "The most frequent mandates in Laval",
          intro:
            "Three kinds of projects come up constantly on Île Jésus, from a Chomedey bungalow to a two-storey home in Vimont. Each has its own service page.",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing or rethinking a basement: family room, bedroom, bathroom and storage, all to Code.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Finished basement with a bar area",
              },
              badges: ["Basement", "Code compliance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening up the closed kitchen of a 1960s-1970s bungalow and installing custom cabinetry.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Open renovated kitchen in a suburban home",
              },
              badges: ["Kitchen", "Custom cabinets"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              description:
                "Rebuilding after water damage or a flood: drying, selective demolition, documented reconstruction.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Materials staged for a basement rebuild",
              },
              badges: ["Post-damage", "Insurance"],
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
          heading: "Areas we serve in Laval and nearby",
          intro:
            "We work mostly in the west and centre of Île Jésus, the sectors most accessible from our West Island base.",
          columns: "3",
          items: [
            {
              title: "Chomedey and Laval-des-Rapides",
              description:
                "1960s-1970s bungalows, closed kitchens and basements due for a rebuild.",
              href: "/services/renovation/cuisine",
              badges: ["1960-1970"],
            },
            {
              title: "Sainte-Dorothée, Fabreville and Laval-Ouest",
              description:
                "A 1970s-1980s mix with newer developments, along the Mille Îles riverbanks.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Flood zones"],
            },
            {
              title: "Vimont, Duvernay and Sainte-Rose",
              description:
                "1980s-1990s two-storey homes with finished basements to rethink.",
              href: "/services/renovation/sous-sol",
              badges: ["1980-1990"],
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              description:
                "Across the Rivière des Prairies, with the same flood issues.",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "See the L'Île-Bizard–Sainte-Geneviève page",
            },
            {
              title: "Pierrefonds-Roxboro",
              description: "Our base, about twenty minutes away via Highway 13.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the Pierrefonds-Roxboro page",
            },
            {
              title: "Saint-Laurent",
              description:
                "South of the Lachapelle bridge, post-war plexes and newer condos.",
              href: "/zones/saint-laurent",
              ctaLabel: "See the Saint-Laurent page",
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
          heading: "Frequently asked questions — renovating in Laval",
          intro:
            "Permits, flood zones, budget, warranties: the answers we give Laval homeowners most often.",
          items: [
            {
              q: "How do I get a renovation permit in Laval?",
              a: "All permit and certificate requests are filed online with the City. Progress is tracked in Mon dossier, and once the application is complete and compliant the permit is posted there and sent by email. If a request cannot be filed online, it can be presented at the Service de l'urbanisme, 1333 boulevard Chomedey, by appointment.",
            },
            {
              q: "Does an interior renovation need a permit?",
              a: "The City provides an interior residential renovation or repair permit, separate from the exterior permit and from the commercial space permit. We identify the right one during scoping and assemble the file before work starts, because an incomplete application delays the whole project.",
            },
            {
              q: "Do you work in Chomedey, Sainte-Dorothée and Laval-Ouest?",
              a: "Yes, these are our most frequent Laval sectors. From Pierrefonds-Roxboro we reach them in about twenty minutes via Highway 13 or the Lachapelle bridge, which allows regular site visits rather than occasional ones.",
            },
            {
              q: "My house is in a flood zone. Does that block my project?",
              a: "Not necessarily, but it frames what is allowed. In Laval the floodplain boundaries rest on flood elevations written into the zoning by-law, based on a study approved by the Quebec government in 2014. We confirm the elevation applicable to your lot before proposing an addition, a foundation or a finished basement.",
            },
            {
              q: "What should I do with a flooded basement in Laval-Ouest or Fabreville?",
              a: "We step in after drying: selective demolition of affected materials, remediation, structural repairs if needed, then rebuild. We take the opportunity to revisit drainage, the sump pump and the backwater valve, and to choose floor and lower-wall materials that limit damage if it happens again.",
            },
            {
              q: "What does a renovation cost in Laval?",
              a: "Our projects start around $25,000. A full kitchen with custom cabinetry lands closer to $35,000 to $50,000 and up. The price depends on the condition of the building, the scope and the number of trades. The estimate is free and the budget is set in the written contract.",
            },
            {
              q: "Should I worry about vermiculite in 1960s-1970s homes?",
              a: "It is worth checking. Homes of that generation were often insulated with vermiculite in the attic, a material that may contain asbestos. If the work touches the attic space, we have the situation assessed before starting rather than discovering it mid-project.",
            },
            {
              q: "Are you licensed and insured to work in Laval?",
              a: "Yes. Dilamco holds RBQ licence 8306-0806-27, valid and unrestricted, issued in September 2004, with general contractor categories 1.2 and 1.3. Civil liability and job-site coverage are in force, the licence bond is in place, and there are no claims on file. The licence is verifiable on the RBQ's public register.",
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
          heading: "Planning a renovation in Laval?",
          intro:
            "We come out, look at the house and its era, identify the right permit and send you a detailed quote with a written schedule and budget.",
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
