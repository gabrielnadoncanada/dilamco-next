import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Service areas — West Island, Montréal, Laval",
    description:
      "General contractor based in Pierrefonds-Roxboro: West Island, Montréal, Laval, Vaudreuil-Soulanges and the South Shore on request. See our service areas.",
    path: "/zones",
    ogAlt: "Dilamco general contractor service areas",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
  ],
  service: {
    name: "General contractor — service areas",
    description:
      "Residential and commercial renovation by an RBQ-licensed general contractor based in Pierrefonds-Roxboro, active across the West Island, Montréal, Laval and Vaudreuil-Soulanges.",
    url: SITE.url + "/zones",
    serviceType: "Residential renovation",
    areaServed: [
      "West Island",
      "Montréal",
      "Laval",
      "Vaudreuil-Soulanges",
      "South Shore",
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
          eyebrow: "Dilamco - Service areas",
          heading:
            "Where we work: the West Island first, then Montréal, Laval and Vaudreuil",
          description:
            "Our base is at 18625 rue Larocque, in Pierrefonds-Roxboro. That is where our projects start from, and it explains the shape of our territory: very dense across the West Island, broad on the island of Montréal, steady toward Laval and Vaudreuil-Soulanges, occasional on the South Shore. RBQ-licensed general contractor 8306-0806-27 since 2004.",
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
          badges: [
            "RBQ 8306-0806-27",
            "Since 2004",
            "West Island",
            "Insured",
          ],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Renovation project completed by Dilamco in the West Island",
          },
          caption:
            "Business address: Pierrefonds-Roxboro, borough of Montréal",
        },
      },
    },
    {
      id: "territoire",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "How our territory is drawn",
          description:
            "A general contractor is not a supplier you call once. On a project that runs for weeks, they come back, they correct, they inspect a surprise, they meet the building inspector. Distance is therefore not a logistical detail: it determines how fast problems get solved. That is why our territory is organized in circles rather than as a list.",
          cards: [
            {
              title: "The West Island: our core territory",
              description:
                "Pierrefonds-Roxboro, Dollard-des-Ormeaux, Kirkland, Pointe-Claire, Beaconsfield, Dorval, L'Île-Bizard–Sainte-Geneviève and Saint-Laurent form the area where we work most often. A trip there generally takes under twenty minutes from our base, which allows a fast visit, tight project follow-up and a real answer when something does not go as planned. We also know the local rules: every West Island city has its own planning department and its own by-laws.",
            },
            {
              title: "Montréal, Laval and Vaudreuil-Soulanges: regular territory",
              description:
                "We work regularly elsewhere on the island of Montréal, in Laval and across Vaudreuil-Soulanges, notably in Vaudreuil-Dorion. These are ordinary mandates for us, with the same method: visit, detailed quote, municipal permit, written contract, coordinated site work. The only difference is which municipal department we deal with and which by-laws apply, which we confirm during scoping rather than along the way.",
            },
            {
              title: "South Shore and beyond: on request",
              description:
                "The South Shore and more distant areas are handled case by case, depending on the scope of the project and the season. A substantial mandate often justifies the travel; a small one-off job rarely does. Write to us describing the project and the city: we will say plainly if it is not a mandate we can serve well. A quick no beats a poorly supervised project.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "The areas we serve",
          intro:
            "One page per city, covering the local housing stock, the permit department involved, the sectors we cover and a municipality-specific FAQ.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description:
                "Our base. 1950s-1980s bungalows and cottages, basements and post-disaster rebuilds.",
              badges: ["Home base"],
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description:
                "Saint-Jean, Westpark and Sunnybrooke sectors. Zoning rewritten in 2025.",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description:
                "Large lots, detached homes, additions and major renovations.",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description:
                "From the heritage Village to Cedar Park, including architectural review files.",
              ctaLabel: "See the area",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description:
                "Planned 1950s-1960s neighbourhoods, zoning by-law 720 and tree permits.",
              ctaLabel: "See the area",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description:
                "Home renovation and commercial fit-out near the airport.",
              ctaLabel: "See the area",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description:
                "The neighbouring borough: waterfront homes, wide lots, access constraints.",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description:
                "Plexes, post-war bungalows and commercial spaces in a dense borough.",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description:
                "Home renovation and additions, from Chomedey to Sainte-Rose.",
              ctaLabel: "See the area",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description:
                "Vaudreuil-Soulanges: growing sectors and houses due for modernizing.",
              ctaLabel: "See the area",
            },
            {
              title: "South Shore",
              href: "/zones/rive-sud",
              description:
                "Longueuil, Brossard, Saint-Lambert and nearby: additions, full renovations and disaster recovery.",
              ctaLabel: "See the area",
            },
          ],
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we do, in every area",
          intro:
            "The method does not change from one city to the next: one accountable contractor from permit to handover, a written scope and a schedule in the contract.",
          columns: "3",
          items: [
            {
              title: "Home renovation",
              description:
                "Kitchens, bathrooms, flooring and full interior renovations.",
              icon: "hammer",
              bullets: [
                "Trades coordinated under a single contract.",
                "Electrical and plumbing upgraded while the walls are open.",
                "Custom cabinetry from our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Basements and reclaimed space",
              description:
                "Finishing, correcting or converting an existing basement.",
              icon: "sofa",
              bullets: [
                "Moisture, drainage and backwater valve checked before finishing.",
                "Insulation and vapour barrier rebuilt to current rules.",
                "Family room, office, bedroom or extra bathroom.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Adding floor area on an already built lot.",
              icon: "building2",
              bullets: [
                "Regulatory feasibility confirmed before you pay for drawings.",
                "Excavation, foundation, structure, envelope and finishes sequenced.",
                "Municipal permit prepared and filed as part of the mandate.",
              ],
            },
            {
              title: "Post-disaster reconstruction",
              description:
                "Water damage, sewer backup, flooding or fire.",
              icon: "droplets",
              bullets: [
                "We step in once drying and decontamination are complete.",
                "Written scope and documented changes for your insurer.",
                "Rebuilt to the Québec Construction Code.",
              ],
            },
            {
              title: "Permits and compliance",
              description:
                "The step most bad surprises have in common.",
              icon: "fileCheck",
              bullets: [
                "File prepared for the relevant city or borough.",
                "Inspections scheduled at the right stages of the work.",
                "RBQ licence and insurance verifiable before start-up.",
              ],
            },
            {
              title: "Commercial fit-out",
              description:
                "Retail spaces, offices and neighbourhood businesses.",
              icon: "building2",
              bullets: [
                "Licence categories 1.2 and 1.3: small buildings and buildings of all kinds.",
                "Work scheduled to limit interruption of operations.",
                "Schedule and budget set in a written contract.",
              ],
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
          heading: "FAQ - territory and travel",
          intro:
            "Distance, fees, cities not on the list: what to know before writing to us.",
          items: [
            {
              q: "What territory do you actually cover?",
              a: "Our core territory is the West Island, working out of our base at 18625 rue Larocque in Pierrefonds-Roxboro. We also work regularly elsewhere on the island of Montréal, in Laval and across Vaudreuil-Soulanges. The South Shore and more distant areas are assessed case by case depending on the scope of the project.",
            },
            {
              q: "Do you charge travel fees?",
              a: "The assessment visit and the estimate are free within our service areas. For a project farther out, travel cost is built transparently into the quote rather than billed separately during the work. Everything is written into the contract before work begins.",
            },
            {
              q: "My city is not on the list. Do you still work there?",
              a: "Possibly. The list of pages covers the municipalities where we work most often, not the only places we accept mandates. Write to us with the city and the nature of the project. If it is not a project we can supervise properly at that distance, we will say so plainly rather than take on a mandate we would serve badly.",
            },
            {
              q: "Does the price change depending on the city?",
              a: "Price depends on the scope of work, the condition of the building, materials and the coordination required, not on a per-municipality rate. What can vary from one city to the next is municipal permit fees, regulatory requirements and sometimes site access constraints. Those are detailed in the quote.",
            },
            {
              q: "Do you handle the permit in every city?",
              a: "Yes. Every municipality and borough has its own planning department, its own by-laws and its own process. We prepare and file the application as part of the mandate, and we build the processing time into the schedule instead of discovering it mid-project.",
            },
            {
              q: "How long before I get a quote?",
              a: "We come back with an estimate within 24 to 48 business hours after the visit. In the West Island the visit itself can usually be scheduled very quickly, since our projects and our base are there.",
            },
            {
              q: "Do you do commercial work throughout your territory?",
              a: "Yes. Our RBQ licence categories cover small buildings (1.2) and buildings of all kinds (1.3), which includes commercial and office fit-outs. The logic is the same as in residential work: written scope, permit, schedule and a single accountable contractor.",
            },
            {
              q: "Do you build new homes?",
              a: "No, in none of our areas. We are a general contractor for renovation, conversion, addition, post-disaster reconstruction and commercial fit-out. We do not build new houses and do not offer a new-home warranty plan.",
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
          heading: "Tell us where your project is",
          intro:
            "City, type of work, target timeline. We confirm quickly whether it is a mandate for us, then we book the visit. Free estimate, answer within 24 to 48 business hours.",
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
          note: "Dilamco - 18625 rue Larocque, Pierrefonds-Roxboro - RBQ 8306-0806-27",
        },
      },
    },
  ],
};
