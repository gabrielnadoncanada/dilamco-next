import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePierrefondsRoxboroPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Pierrefonds-Roxboro",
    description:
      "RBQ-licensed general contractor based on rue Larocque in Pierrefonds-Roxboro: renovations, basements, additions and post-disaster reconstruction.",
    path: "/zones/pierrefonds-roxboro",
    ogAlt: "Home renovation in Pierrefonds-Roxboro by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "Pierrefonds-Roxboro",
      url: SITE.url + "/zones/pierrefonds-roxboro",
    },
  ],
  service: {
    name: "General contractor in Pierrefonds-Roxboro",
    description:
      "Home renovation, basement finishing, additions and post-disaster reconstruction in Pierrefonds-Roxboro, by an RBQ-licensed general contractor based in the borough.",
    url: SITE.url + "/zones/pierrefonds-roxboro",
    serviceType: "Residential renovation",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Pierrefonds",
      "Roxboro",
      "Cap-Saint-Jacques",
      "Bois-de-Liesse",
      "Cloverdale",
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
          eyebrow: "Dilamco - Pierrefonds-Roxboro",
          heading:
            "General contractor in Pierrefonds-Roxboro: home renovation from permit to handover",
          description:
            "Our business address is 18625 rue Larocque, in Pierrefonds-Roxboro. This is our own neighbourhood: we know the post-war bungalows of the Roxboro sector, the 1970s cottages along boulevard Pierrefonds, the basements rebuilt after the Rivière des Prairies floods, and the borough permit counter on boulevard de Pierrefonds. RBQ licence 8306-0806-27, valid since 2004, general contractor categories 1.2 and 1.3.",
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
          badges: ["RBQ 8306-0806-27", "Since 2004", "West Island", "Insured"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Full home renovation in Pierrefonds-Roxboro",
          },
          caption:
            "Based in the borough — rue Larocque, Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Pierrefonds-Roxboro homes",
          description:
            "Pierrefonds-Roxboro is home to roughly 70,000 residents across 27 km2 and remains the only Montréal borough with official bilingual status. Its territory touches three of the city's large nature parks — Bois-de-Liesse, Cap-Saint-Jacques and Anse-à-l'Orme — and follows the Rivière des Prairies along almost its entire length. That produces a very particular housing stock, and site constraints unlike those of a central neighbourhood.",
          cards: [
            {
              title: "A 1950s-to-1980s housing stock, plus recent condos",
              description:
                "Most of the residential building stock consists of bungalows, split-levels and cottages built between the 1950s and the 1980s, mainly in Roxboro, Pierrefonds East and the Cloverdale sector. The same realities come back again and again: basement slabs without continuous insulation, 2x8 joists, undersized electrical panels, windows replaced once in the 1990s. Newer developments — condos and townhouses near boulevard Saint-Charles and the river — raise the opposite challenge: tighter spaces, co-ownership rules and restricted site access.",
            },
            {
              title: "The Rivière des Prairies and the water question",
              description:
                "The 2017 and 2019 spring floods left their mark on the borough: the Rivière des Prairies overflowed starting 6 May 2017 and dykes gave way in Pierrefonds. Since then, every basement project in the riverside sectors along boulevard Gouin is approached differently: slab level, backwater valve, submersible pump, finishes that tolerate moisture, weeping tile checked before the walls go back up. Part of the territory appears on the Government of Québec flood-risk maps, and the borough distributes sand by sector according to its emergency response plan.",
            },
            {
              title: "Borough rules, not city-wide rules",
              description:
                "In Pierrefonds-Roxboro, permits do not go through a central department: they go through the borough permit counter at 13665 boulevard de Pierrefonds, under the Direction du développement du territoire et des études techniques. Plans and documents are sent by email before signing and paying in person, by appointment. For an addition, the review covers siting, setbacks, lot coverage and sometimes an architectural review. It is a step to frame at the start of a project, not to improvise halfway through.",
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
          heading: "What we build in Pierrefonds-Roxboro",
          intro:
            "One general contractor accountable for the permit, the trades, the schedule and the handover. Here are the projects we see most often in the borough, and what they actually involve on site.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "The most requested project in the area's bungalows and cottages.",
              icon: "chefHat",
              bullets: [
                "Opening a load-bearing wall between kitchen and living room in a 1960s bungalow.",
                "Plumbing and electrical panel brought up to the Québec Construction Code.",
                "Custom cabinetry supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Often the first bathroom redone since the house was built.",
              icon: "bath",
              bullets: [
                "Waterproofing rebuilt before the tile goes on, not after.",
                "Ventilation corrected in the windowless bathrooms of 1970s cottages.",
                "Adding a basement powder room with a macerator or a tie-in to the existing drain.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "The signature project of this area — and the one where water decides everything.",
              icon: "sofa",
              bullets: [
                "Drain, backwater valve and pump checked before any finishing work begins.",
                "Insulation and vapour barrier rebuilt to current rules, not to the original assembly.",
                "Family room, home office, extra bedroom or accessory dwelling unit, subject to zoning.",
              ],
            },
            {
              title: "Post-disaster reconstruction",
              description:
                "Water damage, sewer backup, flooding, fire or structural damage.",
              icon: "droplets",
              bullets: [
                "Basement rebuilt after water damage, once drying is complete.",
                "Scope and sequence documented to simplify follow-up with your insurer.",
                "A compliant rebuild, not a simple return to the pre-loss condition.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Adding floor area on an already built lot in the borough.",
              icon: "building2",
              bullets: [
                "Rear extension, second-storey addition or garage converted into living space.",
                "Permit file prepared for the Pierrefonds-Roxboro permit counter.",
                "Structure, roofing, envelope, electrical and finishes coordinated under one contract.",
              ],
            },
            {
              title: "Full interior renovation",
              description:
                "When the house is taken on as a whole rather than room by room.",
              icon: "layers",
              bullets: [
                "Flooring, doors, mouldings and paint sequenced to avoid rework.",
                "Electrical and plumbing upgraded while the walls are open.",
                "One written schedule instead of six subcontractors who never talk to each other.",
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
          heading: "How a Pierrefonds-Roxboro project runs",
          intro:
            "The exact sequence depends on scope, but the logic stays the same: the permit and the real constraints are settled before a wall is opened.",
          steps: [
            {
              number: "1",
              title: "Site visit and scoping",
              description:
                "We come to you — often the same day or the next, since the borough is our home base. We measure and look at the panel, the plumbing, the drain, the slab and site access.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "A written scope, item by item, stating what is included and what is not. We come back within 24 to 48 business hours after the visit. Estimates are free.",
            },
            {
              number: "3",
              title: "Borough permit",
              description:
                "We prepare the file for the permit counter at 13665 boulevard de Pierrefonds: plans, siting, description of the work. Documents are sent by email ahead of the signing and payment appointment.",
            },
            {
              number: "4",
              title: "Contract and schedule",
              description:
                "A written contract with budget, schedule and payment terms. RBQ licence and insurance are verifiable before the first day on site.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Trades come through in order. One point of contact for questions, changes and surprises, with every scope change confirmed in writing.",
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
          heading: "Why hire a general contractor based in the borough",
          intro:
            "The difference between a contractor who 'serves' the West Island and one whose address is in it shows up at the third surprise of the project, not in the quote.",
          items: [
            {
              title: "A licence you can verify",
              description:
                "RBQ licence 8306-0806-27, issued on 7 September 2004, valid and without restriction, general contractor categories 1.2 (small buildings) and 1.3 (buildings of all kinds). You can check it yourself in the Régie du bâtiment registry.",
            },
            {
              title: "A few minutes away",
              description:
                "Our base is on rue Larocque. A follow-up visit, a measurement to redo or a surprise to inspect does not require rescheduling half a day of driving.",
            },
            {
              title: "Borough rules, not another city's",
              description:
                "Pierrefonds-Roxboro has its own permit counter and its own planning by-laws. A contractor who mostly works on the South Shore starts that learning curve over on every file.",
            },
            {
              title: "Water taken seriously",
              description:
                "After 2017 and 2019, finishing a basement in a riverside sector without checking the drain, the backwater valve and the pump is not a saving. It is a redo postponed.",
            },
            {
              title: "An in-house cabinet division",
              description:
                "Our custom cabinetry is built for us by our partner factory (RBQ subcategory 12). One less party to coordinate between demolition and finishing.",
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
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Finished basement in a Pierrefonds-Roxboro home",
          },
          cardTitle: "Google rating 5.0 from 11 reviews",
          cardDescription:
            "Hundreds of residential projects since 2004, an RBQ licence with no claim on file, civil liability and site insurance in place. We are not selling a discount: we are selling the absence of bad surprises.",
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
            "We work across the whole borough: Pierrefonds East, Pierrefonds West, Roxboro, the Cloverdale sector, the areas along boulevard Gouin, boulevard Pierrefonds and boulevard Saint-Charles, and the riverside streets toward Cap-Saint-Jacques and Bois-de-Liesse. And all around it, the rest of the West Island.",
          columns: "3",
          items: [
            {
              title: "Basement renovation",
              href: "/services/renovation/sous-sol",
              description:
                "The most requested service in the borough, moisture and drainage included.",
              ctaLabel: "See the service",
            },
            {
              title: "Post-disaster reconstruction",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage, sewer backup, flooding: a complete and compliant rebuild.",
              ctaLabel: "See the service",
            },
            {
              title: "Home additions",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Extension, second storey or garage conversion, permit included.",
              ctaLabel: "See the service",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Minutes away, on the other side of boulevard Saint-Jean.",
              ctaLabel: "See the area",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "The neighbouring borough, across the Jacques-Bizard bridge.",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "South of boulevard Saint-Charles, under fifteen minutes away.",
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
          heading: "FAQ - renovating in Pierrefonds-Roxboro",
          intro:
            "The questions borough homeowners ask us most often.",
          items: [
            {
              q: "Does Dilamco really work in Pierrefonds-Roxboro?",
              a: "Our business address is 18625 rue Larocque, in the borough. Pierrefonds-Roxboro is not an area we serve from a distance: it is our starting point, and a large share of our residential projects are less than ten minutes away.",
            },
            {
              q: "Do I need a permit to renovate my home in Pierrefonds-Roxboro?",
              a: "In most cases, yes. Renovating, converting or extending a building requires a permit issued by the borough, obtained at the permit counter at 13665 boulevard de Pierrefonds. Some minor interior work is exempt, but as soon as structure, envelope, plumbing or electrical are involved, a permit is required. We prepare the file as part of the mandate.",
            },
            {
              q: "How long does a borough permit take?",
              a: "It depends on how complex the file is and how complete the documents are. A complete, well-prepared file moves much faster than one missing a site plan or a clear description of the work. Plans are sent by email before the signing and payment appointment. We build that delay into the schedule instead of discovering it mid-project.",
            },
            {
              q: "My house is in a sector affected by the 2017 and 2019 floods. Can you redo my basement?",
              a: "Yes, and it is a frequent mandate for us. Before any finishing, we check the drain, the backwater valve, the submersible pump and the condition of the slab. Material choices change too: in a riverside sector, an assembly that tolerates moisture beats a good-looking one that will have to be torn out. If your property appears on the Government of Québec flood-risk maps, some work may be subject to specific rules that we confirm with the borough.",
            },
            {
              q: "Do you work with insurers after water damage?",
              a: "We handle reconstruction, once drying and decontamination are complete. We produce a detailed scope of work and document every change, which makes follow-up with your insurer easier. The contract stays between you and us: you decide the scope.",
            },
            {
              q: "What does a renovation cost in Pierrefonds-Roxboro?",
              a: "Our renovation mandates generally start around $25,000. A full kitchen usually falls between $35,000 and $50,000 and up, depending on the related work involved. Price depends on scope, the condition of the house, materials and the coordination required. Estimates are free and the budget is set in a written contract.",
            },
            {
              q: "Can you renovate during a West Island winter?",
              a: "Yes for interior work: kitchens, bathrooms, basements and full interior renovations run year-round. Envelope, roofing and excavation work is more sensitive to cold and snow, and is usually scheduled from late spring through fall. Winter is often the best time to prepare an addition that will start at thaw.",
            },
            {
              q: "Do you build new homes?",
              a: "No. Our RBQ licence categories are those of a general contractor for small buildings and buildings of all kinds: renovation, conversion, addition, post-disaster reconstruction and commercial fit-out. We do not build new houses and do not offer a new-home warranty plan.",
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
          heading: "A project in Pierrefonds-Roxboro? We are next door.",
          intro:
            "Tell us what you are planning. We come by, look at the house and come back with a written scope and a price. Free estimate, answer within 24 to 48 business hours.",
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
          note: "Dilamco - 18625 rue Larocque, Pierrefonds-Roxboro - RBQ 8306-0806-27",
        },
      },
    },
  ],
};
