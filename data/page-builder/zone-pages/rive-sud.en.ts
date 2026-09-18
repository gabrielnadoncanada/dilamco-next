import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneRiveSudPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor on Montreal's South Shore",
    description:
      "RBQ-licensed general contractor on Montreal's South Shore: full renovations, home additions and post-disaster rebuilds. Detailed written quote.",
    path: "/zones/rive-sud",
    ogAlt: "Residential renovation on Montreal's South Shore by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "South Shore", url: SITE.url + "/zones/rive-sud" },
  ],
  service: {
    name: "General contractor on Montreal's South Shore",
    description:
      "Full residential renovations, home additions, conversions and post-disaster rebuilds on Montreal's South Shore, by a general contractor licensed by the RBQ since 2004.",
    url: SITE.url + "/zones/rive-sud",
    serviceType: "Residential renovation",
    areaServed: [
      "South Shore of Montreal",
      "Longueuil",
      "Brossard",
      "Saint-Lambert",
      "Boucherville",
      "Saint-Bruno-de-Montarville",
      "Candiac",
      "La Prairie",
      "Châteauguay",
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
          eyebrow: "Dilamco - South Shore of Montreal",
          heading: "General contractor on Montreal's South Shore",
          description:
            "Longueuil, Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie, Châteauguay. We are based in the West Island and we cross over for substantial projects: full renovations, additions, conversions and post-disaster rebuilds. One contractor accountable for the permit, the trades and the schedule. RBQ licence 8306-0806-27, valid since 2004.",
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
            "Since 2004",
            "Insured",
            "Travel priced in the quote",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Home addition built by a general contractor on Montreal's South Shore",
          },
          caption:
            "Substantial South Shore projects: full renovations, additions, post-disaster rebuilds",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about South Shore homes",
          description:
            "The South Shore is not one housing stock: it is four or five distinct ones sitting side by side. A post-war bungalow in Vieux-Longueuil, a heritage home in Saint-Lambert, a sector cottage in Brossard and a 2008 build in Candiac share neither the same walls, nor the same services, nor the same planning rules. A serious quote starts with knowing which of those worlds you are standing in.",
          cards: [
            {
              title: "Post-war bungalows: Vieux-Longueuil, Le Moyne, Greenfield Park",
              description:
                "The core of Longueuil was built between 1947 and the 1960s, often by builders who put up entire streets at once — which is why the same details repeat from one house to the next: basement slabs with no continuous insulation, 2x8 joists, electrical services that no longer keep up with a modern kitchen, windows replaced once in the 1990s, and a central load-bearing wall people now want opened toward the living room. Saint-Hubert adds a wide band of 1960s-to-1980s bungalows and split-levels, with the same issues shifted twenty years later.",
            },
            {
              title: "Saint-Lambert and Vieux-Boucherville: renovating under heritage review",
              description:
                "Saint-Lambert completed an inventory of its built heritage with the firm Patri-Arch: roughly 250 documented buildings and ten residential typologies, from the vernacular cottage to Arts and Crafts, including the King Cottage unique to the city. In practice, any exterior change visible from the street falls under the site planning and architectural integration (PIIA) by-law, so it goes through the planning advisory committee before the permit is issued. Vieux-Boucherville, a recognized heritage site in Quebec's cultural heritage directory, works the same way. The interior can be fully modernized; it is the façade that gets negotiated, months ahead.",
            },
            {
              title: "Brossard, Boucherville, Saint-Bruno: planned suburbs, 1960-1985",
              description:
                "Brossard is divided into alphabetical sectors — A, B, C, E, I, J, L, M, N, O, P, R, S, T, V — a legacy of the 1960s master plan drawn up by the firm Beauchemin, Beaton et Lapointe to make a non-orthogonal street grid navigable. Those sectors do not renovate alike: the older ones line up 1960s and 1970s bungalows, the newer ones contemporary two-storey homes. Boucherville went from 8,182 to 21,072 residents between 1961 and 1971, in the wake of the Louis-Hippolyte-La Fontaine tunnel that opened in 1967; most of its single-family stock dates from that wave, as does Saint-Bruno-de-Montarville's. On site, that means original kitchens and bathrooms, and basements finished in the 1980s that need redoing from scratch.",
            },
            {
              title: "Candiac, La Prairie, Châteauguay: recent builds and water",
              description:
                "Candiac issued 2,406 residential building permits between 2000 and 2010, including 422 in 2007 alone, before annexing part of Saint-Philippe. The stock there is young: you do not rebuild a house, you reshape it — an addition, a basement to finish, a kitchen to reconfigure, a garage to convert. La Prairie follows the same curve. Châteauguay is a different file: the number of homes in the flood zone there could rise from 700 to 1,100 depending on whether the dikes along boulevard Salaberry Nord and boulevard D'Youville are recognized as protective structures. Before finishing a basement on that side, we check the property's status.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we build on the South Shore",
          intro:
            "Substantial projects — the ones that justify putting a full crew in one place for several weeks. One contract, one person accountable, one written schedule.",
          columns: "2",
          items: [
            {
              title: "Full interior renovation",
              description:
                "Taking the whole house on at once instead of one room at a time.",
              icon: "layers",
              bullets: [
                "A 1950s Vieux-Longueuil bungalow redone end to end: electrical, plumbing, floors, finishes.",
                "Panel and circuits upgraded while the walls are open, not after the paint.",
                "One schedule instead of six subcontractors who never talk to each other.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Adding floor area on an already built lot, with the permit on file.",
              icon: "building2",
              bullets: [
                "Rear addition, second storey or garage converted into living space.",
                "Siting, setbacks and lot coverage analyzed before anything is drawn.",
                "Foundation, structure, roof, envelope and connections coordinated under one contract.",
              ],
            },
            {
              title: "Kitchen renovation",
              description:
                "The room with the most trades per square metre.",
              icon: "chefHat",
              bullets: [
                "Load-bearing wall opened between kitchen and living room, with an engineer's drawing when structure is involved.",
                "Plumbing relocated, circuits added, range hood vented to the outside.",
                "Custom cabinetry made for us by our partner factory, under RBQ subcategory 12.",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Often the first rebuild since the house went up.",
              icon: "bath",
              bullets: [
                "Waterproofing done before the tile, never corrected afterwards.",
                "Ventilation fixed in the windowless bathrooms of 1970s cottages.",
                "A powder room added in the basement, with a macerator or a tie-in to the existing drain.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "The most requested project — and the one where water decides everything.",
              icon: "sofa",
              bullets: [
                "Drain, backwater valve and sump pump checked before a single sheet of drywall.",
                "Property status verified in riverside areas, notably along the Châteauguay River.",
                "Insulation and vapour barrier rebuilt to current rules, not to the 1985 assembly.",
              ],
            },
            {
              title: "Post-disaster rebuilding",
              description:
                "Water damage, sewer backup, flooding, fire or structural damage.",
              icon: "droplets",
              bullets: [
                "Full rebuild once drying and decontamination are complete.",
                "Scope and sequence documented to make follow-up with your insurer easier.",
                "Rebuilt to the Quebec Construction Code, not simply restored to its former state.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "acces",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Let's be straight about the distance",
          intro:
            "Our business address is 18625 rue Larocque, in Pierrefonds-Roxboro. The South Shore is not at the end of our street and we will not pretend otherwise: we say so upfront, we price it in the quote, and we only take on projects where our presence on site makes sense.",
          badges: [
            "A-30 · A-20 · A-15",
            "Samuel De Champlain Bridge",
            "La Fontaine bridge-tunnel",
            "Travel written into the contract",
          ],
          cardTitle: "How we cover the South Shore from the West Island",
          items: [
            "To Châteauguay, La Prairie and Candiac: Autoroute 30, whose Châteauguay–Vaudreuil-Dorion section opened on December 15, 2012 and completes the bypass of the island along the South Shore — without crossing Montreal.",
            "To Brossard, Saint-Lambert and Longueuil: the A-20, then the Samuel De Champlain Bridge, fully open to traffic since July 1, 2019.",
            "To Boucherville and Saint-Bruno-de-Montarville: the Louis-Hippolyte-La Fontaine bridge-tunnel, whose major rehabilitation started in 2022 is still under way, with both tubes expected to reopen around the fall of 2026. Deliveries are planned around the closures, not the other way around.",
            "Travel is included in the quote as a visible line item, never added mid-project as a \"transport fee\".",
            "We favour substantial projects. For a two-day job, a contractor from your own municipality will serve you better, and we will tell you so.",
            "When we are on site, we are there for the full day: no back-and-forth three times a week for ten minutes of supervision.",
          ],
          actions: [
            {
              label: "Describe your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our renovation services",
              href: "/services/renovation",
              variant: "ghost",
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
          heading: "How a South Shore project unfolds",
          intro:
            "Every South Shore city has its own planning department, its own zoning by-law and its own portal. The permit is not a formality at the end: it is the first thing we frame.",
          steps: [
            {
              number: "1",
              title: "Call and qualification",
              description:
                "We confirm the intended scope and the address over the phone. If the project is not large enough to justify our travel, we say so right away.",
            },
            {
              number: "2",
              title: "Site visit",
              description:
                "A full visit, not a drive-by: measurements, electrical panel, plumbing, drain, slab condition, structure and site access. This is where we see what no photo shows.",
            },
            {
              number: "3",
              title: "Detailed quote",
              description:
                "Scope written line by line, with what is included, what is not, and travel priced out. Answer within 24 to 48 business hours. Estimate is free.",
            },
            {
              number: "4",
              title: "Municipal permit",
              description:
                "In Longueuil the file goes through the Direction de l'aménagement et de l'urbanisme, using the Permis en ligne portal to submit, pay and track it. In Brossard it goes through the Direction de l'urbanisme, online or by email depending on the type of work. In Saint-Lambert, a change visible from the street first goes through the PIIA by-law and the planning advisory committee. Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie and Châteauguay each have their own department and timelines.",
            },
            {
              number: "5",
              title: "Contract and schedule",
              description:
                "Written contract with budget, trade sequence, payment terms and dates. RBQ licence and insurance verifiable before day one on site.",
            },
            {
              number: "6",
              title: "Site work, inspection and handover",
              description:
                "Trades follow in order, from structure to finishes, with a single point of contact and every scope change confirmed in writing. Municipal inspection when the work calls for it, deficiency list closed with you, then handover. Work is warranted; terms are in the contract.",
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
          heading: "Why a general contractor instead of a string of subcontractors",
          intro:
            "What derails a project is almost never the price of materials. It is coordination: the plumber arriving before the electrician is done, the permit filed too late, the missed inspection that forces a wall closed last week to be opened again.",
          items: [
            {
              title: "A licence you can verify, not a promise",
              description:
                "RBQ licence 8306-0806-27, issued on September 7, 2004, valid and unrestricted, general contractor categories 1.2 (small buildings) and 1.3 (buildings of all kinds). A $40,000 licence bond, no claims on file, civil liability and builder's risk coverage in force. You can check it yourself in the Régie du bâtiment du Québec register.",
            },
            {
              title: "One person accountable from permit to handover",
              description:
                "We prepare the file for your city's planning department, schedule the inspections and answer for the timeline. You are not refereeing four companies pointing at each other.",
            },
            {
              title: "A quote that also states what is excluded",
              description:
                "The line that appears nowhere is the one that becomes an extra. Scope written item by item, budget and schedule in the contract, changes confirmed in writing before they are carried out.",
            },
            {
              title: "Municipal rules taken seriously",
              description:
                "Eight cities, eight sets of rules: the PIIA by-law in Saint-Lambert, the Vieux-Boucherville heritage site, the Châteauguay River flood zones. We verify before promising a date.",
            },
            {
              title: "An in-house cabinetry division",
              description:
                "Our custom cabinetry is made for us by our partner factory, under subcategory 12 of our RBQ licence: one less party to coordinate between demolition and finishes.",
            },
          ],
          actions: [
            {
              label: "See our renovation services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planning a home addition on Montreal's South Shore",
          },
          cardTitle: "5.0 Google rating from 11 reviews",
          cardDescription:
            "Hundreds of residential projects since 2004. We are not selling a discount: we are selling the absence of bad surprises — a permit filed at the right time, trades that follow without dead time, a written budget and a deficiency list closed before handover.",
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Cities served and most requested services",
          intro:
            "Longueuil and its three boroughs — Vieux-Longueuil, Saint-Hubert, Greenfield Park — along with Brossard and its alphabetical sectors, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie and Châteauguay. Brossard has also been the southern terminus of the REM's South Shore branch since July 31, 2023, which has revived projects in the neighbourhoods around the stations.",
          columns: "3",
          items: [
            {
              title: "Home additions",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rear addition, second storey or garage conversion, municipal permit included.",
              ctaLabel: "See the service",
            },
            {
              title: "Post-disaster renovation",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage, sewer backup, flooding: a full, code-compliant rebuild.",
              ctaLabel: "See the service",
            },
            {
              title: "Basement renovation",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, valve and pump verified before finishing, especially near water.",
              ctaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Load-bearing wall openings, plumbing moves, custom cabinetry included.",
              ctaLabel: "See the service",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description:
                "The other large suburb we serve, north of the island.",
              ctaLabel: "See the area",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description:
                "Our home base, in Montreal's West Island.",
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
          heading: "FAQ - general contractor on the South Shore",
          intro:
            "Territory covered, permits by city, pricing, timelines, insurance and warranty.",
          items: [
            {
              q: "Does Dilamco really work on the South Shore, or only in the West Island?",
              a: "Our base is in Pierrefonds-Roxboro and most of our projects are in the West Island. We cover the South Shore for substantial work: full renovations, additions, conversions and post-disaster rebuilds. Travel is priced and included in the quote. For small one- or two-day jobs, a contractor from your own municipality will serve you better — and we will say so on the first call.",
            },
            {
              q: "Which South Shore cities do you cover?",
              a: "Longueuil, including the Vieux-Longueuil, Saint-Hubert and Greenfield Park boroughs, as well as Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie and Châteauguay. If your address is in a neighbouring municipality, call us: the answer depends on the size of the project more than on the postal code.",
            },
            {
              q: "Who handles the permit in Longueuil or Brossard?",
              a: "We do. In Longueuil the application falls under the Direction de l'aménagement et de l'urbanisme: the Permis en ligne portal is used to submit, pay and track the file, and a meeting at the service counter is by appointment. In Brossard it is filed with the Direction de l'urbanisme, online for certain types of work, by email or at city hall for others. We prepare the file and handle the back-and-forth with the analyst.",
            },
            {
              q: "My house is in an older part of Saint-Lambert. Is that more complicated?",
              a: "Mostly longer. Saint-Lambert has documented its built heritage — some 250 buildings and about ten residential typologies — and any exterior change visible from the street falls under the site planning and architectural integration by-law: the application goes to the planning advisory committee before the permit is issued. The interior can be fully modernized under the Quebec Construction Code. That delay is built into the schedule at quoting time.",
            },
            {
              q: "What does a renovation cost on the South Shore?",
              a: "Our projects generally start around $25,000. A complete kitchen tends to land between $35,000 and $50,000 and up, depending on how much mechanical and structural work is involved. An addition is priced project by project, after zoning and setbacks are verified. The estimate is free, the budget is set in the written contract, and travel appears there in plain words.",
            },
            {
              q: "How long does a project take, permits included?",
              a: "Three things add up: your municipality's review time, material production and the site work itself. Custom cabinetry, for example, takes 9 to 15 weeks to produce. Those lead times are planned in parallel rather than in sequence, and the signed schedule reflects your city's real calendar.",
            },
            {
              q: "Can you renovate in winter on the South Shore?",
              a: "Yes for anything interior: kitchen, bathroom, basement, full renovation. Excavation, foundation, roofing and envelope work are sensitive to frost and are planned from late spring to fall. Winter remains the right time to prepare an addition: drawings, permits and orders get settled so work can start at thaw.",
            },
            {
              q: "Do you build new houses on the South Shore?",
              a: "No. Our RBQ licence categories are those of a general contractor for small buildings (1.2) and buildings of all kinds (1.3): renovation, conversion, addition, post-disaster rebuilding and commercial fit-outs. We do not build new homes and we do not offer a new residential building warranty plan.",
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
          heading: "A substantial project on the South Shore?",
          intro:
            "Tell us about the work and the address. We first confirm whether the project justifies our travel, then we come on site and return with a written scope, a price and a schedule. Free estimate, answer within 24 to 48 business hours.",
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
          note: "Dilamco - RBQ 8306-0806-27 - Longueuil, Brossard, Saint-Lambert, Boucherville, Saint-Bruno, Candiac, La Prairie, Châteauguay",
        },
      },
    },
  ],
};
