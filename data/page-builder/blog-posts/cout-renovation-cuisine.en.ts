// Article: kitchen renovation cost (queries "kitchen renovation cost Quebec",
// "how much does a kitchen renovation cost", "kitchen remodel price Montreal").
// Reference competitor: cuisinesrochon.com/blogue/renovation-cuisine-prix
// (~2,000 words, line-by-line breakdown, but no sources and totals that
// contradict each other). Our angle: consistent ranges everywhere (the ones on
// /services/renovation/cuisine and the home page), a direct answer under
// each question, official sources.
//
// Facts and sources (checked 2026-10-08):
// - Real Dilamco quotes (Ventes/Résidentiel folder, anonymized: no names, no
//   addresses): kitchen A, Oct. 2025, North Shore, $29,250 in 11 line items;
//   kitchen B, March 2026, North Shore, $49,225 in 9 line items; full kitchen,
//   Nov. 2025, Montreal, $25,835; kitchen without countertop with ~408 sq ft of
//   hardwood, Oct. 2025, Laval, $41,300. All prices before tax, appliances
//   excluded (confirmed by Sean Diffley on 2026-10-08). 40% deposit at order.
//   On-site work: 7 to 10 working days for kitchen A.
// - Refresh from $20,000 and open-concept over $50,000:
//   data/page-builder/renovation-pages/cuisine.ts.
// - 9 to 15 weeks between signed plans and installation; 2 to 4 weeks of design:
//   space pages and design service.
// - Montreal (montreal.ca/demarches/renover-linterieur-dun-batiment): cabinets,
//   countertop, sink replaced without a permit; permit if the structure or the
//   room layout changes; no municipal permit for interior plumbing/electrical.
// - Electrical: CMEQ licence; plumbing: CMMTQ licence.
// - Taxes: GST 5% + QST 9.975%.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "cout-renovation-cuisine",
  locale: "en",
  category: "budget",
  publishedAt: "2026-10-08",
  title: "How much does a kitchen renovation cost in Quebec in 2026",
  metaTitle: "Kitchen renovation cost in Quebec (2026 prices)",
  description:
    "Kitchen renovation cost in Quebec in 2026: $25,000 to $50,000 before tax for a full kitchen. Two real quotes broken down line by line.",
  excerpt:
    "Two of our real quotes, line by line, what moves the bill, the timelines and the mistakes that cost the most.",
  cover: {
    src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
    alt: "Renovated white kitchen with a quartz island",
  },
  body: [
    {
      type: "callout",
      title: "In short",
      items: [
        "Refresh that keeps the cabinet boxes: **from $20,000**.",
        "Kitchen fully redone, same layout: **$25,000 to $50,000** before tax.",
        "Cabinets account for **40% to 51%** of the price in our quotes; new flooring makes the biggest difference.",
        "Kitchen opened to the living room or flooring redone in the adjoining rooms: **over $50,000**.",
        "The three decisions that cost the most: moving the sink, removing a load-bearing wall, venting the range hood outdoors.",
        "Allow 9 to 15 weeks between signed plans and installation of the custom cabinets.",
      ],
    },
    {
      type: "h2",
      text: "What does a kitchen renovation cost in 2026?",
      id: "prix-2026",
    },
    {
      type: "p",
      text: "In Greater Montreal, a full kitchen renovation costs **$25,000 to $50,000 before tax** in 2026 when the layout stays the same. A refresh that keeps the cabinet boxes starts at **$20,000**. A kitchen opened to the living room, with a load-bearing wall removed, goes **over $50,000**.",
    },
    {
      type: "p",
      text: "These amounts come from our 2025 and 2026 quotes in Montreal, Laval and the North Shore. They include labour, cabinets, countertop and trades. Appliances are never included, and taxes are added at the end.",
    },
    {
      type: "table",
      caption: "Ranges from our kitchen projects. The firm price is set after a visit.",
      head: ["Type of project", "Indicative price", "Work included"],
      rows: [
        [
          "Refresh",
          "from $20,000",
          "Cabinet boxes kept. Doors or fronts, countertop, backsplash, sink, faucet and paint.",
        ],
        [
          "Full kitchen",
          "$25,000 to $50,000",
          "Demolition, new cabinets, countertop, plumbing and circuits redone, kitchen flooring.",
        ],
        [
          "Kitchen and open plan",
          "over $50,000",
          "All of the above, plus the beam, the engineer, the permit and the extended flooring.",
        ],
      ],
    },
    {
      type: "h2",
      text: "Two real quotes, line by line",
      id: "soumissions-reelles",
    },
    {
      type: "p",
      text: "Here are two full-kitchen quotes we issued, without names or addresses. In both cases: custom cabinets, quartz countertop, no structural work. **Kitchen B costs $19,975 more**, and flooring alone explains 39% of the gap.",
    },
    {
      type: "table",
      caption: "Amounts before tax, appliances excluded. Kitchen A: October 2025, North Shore. Kitchen B: March 2026, North Shore.",
      head: ["Line item", "Kitchen A", "Kitchen B"],
      rows: [
        ["Custom cabinets, supplied and installed", "$14,800", "$19,500"],
        ["Quartz countertop", "$3,200", "$7,475"],
        ["Ceramic or porcelain backsplash", "$1,800", "$3,500"],
        ["Flooring", "$800 (patching)", "$8,600 (new hardwood)"],
        ["Electrical, light fixtures included", "$2,200", "$2,900"],
        ["Plumbing, sink and faucet included", "$2,400", "$2,600"],
        ["Drywall, paint and baseboards", "$900", "$4,650"],
        ["Demolition and disposal", "$1,500", "within line items"],
        ["Design and project management", "$1,250", "within line items"],
        ["Appliance hook-ups", "$400", "within line items"],
        ["**Total before tax**", "**$29,250**", "**$49,225**"],
        ["Total with GST and QST", "$33,630", "$56,596"],
      ],
    },
    {
      type: "p",
      text: "Three lessons stand out. Cabinets take 40% to 51% of the total, whatever the budget. Flooring is the line that varies most: simple patching around the new cabinets, or new hardwood across the whole room. And the countertop easily doubles with its length and number of cut-outs.",
    },
    {
      type: "p",
      text: "On our two other recent quotes, a full kitchen in Montreal came to **$25,835**, and a Laval kitchen with 408 sq ft of hardwood, countertop excluded, to **$41,300**, again before tax.",
    },
    {
      type: "h2",
      text: "What drives up the cost of a kitchen?",
      id: "facteurs-de-prix",
    },
    {
      type: "p",
      text: "For the same floor area, the gap between two kitchens comes from decisions made on the plan, not from the size of the room. Here are the items that weigh the most, from heaviest to lightest.",
    },
    {
      type: "table",
      head: ["Decision", "Effect on price", "Why"],
      rows: [
        [
          "Removing a load-bearing wall",
          "Very high",
          "Engineer, beam, supports down to the foundation, permit and floor tie-ins.",
        ],
        [
          "Moving the sink to an island",
          "High",
          "The drain, water and vent follow; we open the floor or the basement ceiling.",
        ],
        [
          "Full-height cabinets and drawers",
          "High",
          "The number of units, drawers and accessories weighs more than the finish.",
        ],
        [
          "Range hood vented outdoors",
          "Medium",
          "Duct through the wall or roof, insulation and siding repair.",
        ],
        [
          "New electrical circuits",
          "Medium",
          "Island with outlets, induction cooktop, wall oven; sometimes a new panel.",
        ],
        [
          "Countertop",
          "Variable",
          "The material, thickness, number of cutouts and seams set the price.",
        ],
      ],
    },
    {
      type: "h3",
      text: "Keep the sink where it is",
    },
    {
      type: "p",
      text: "This is the first possible saving. A sink moved to an island brings the drain, the water supply and the vent with it. If the basement is finished, we also open its ceiling, then close it and repaint it.",
    },
    {
      type: "h3",
      text: "Removing a load-bearing wall",
    },
    {
      type: "p",
      text: "Removing a wall that supports the floor above is a project within the project. An engineer sizes the beam and its supports, the drawing goes with the permit application, and the flooring must be tied in between the two rooms. This is the item that moves a kitchen into the third range.",
    },
    {
      type: "h3",
      text: "Venting the range hood outdoors",
    },
    {
      type: "p",
      text: "A hood that vents outdoors removes grease, odours and moisture from cooking. It needs a duct through an exterior wall or the roof. A recirculating hood costs less to install, but it filters the air without replacing it.",
    },
    {
      type: "h2",
      text: "What should a kitchen quote include?",
      id: "soumission",
    },
    {
      type: "p",
      text: "A comparable quote names each item and its price. If one of the items below is missing, it will be billed later or it is not planned: ask for it in writing before you sign.",
    },
    {
      type: "ul",
      items: [
        "Demolition, protection of adjoining rooms and debris removal",
        "Plumbing: drains, supply lines, dishwasher and fridge hookups",
        "Electrical: dedicated circuits, counter outlets, under-cabinet lighting",
        "Range hood and its duct to the outside",
        "Cabinets, hardware, countertop, backsplash and installation",
        "Flooring, drywall, paint and mouldings",
        "Permits and plans, if the work requires them",
        "Written schedule and payment schedule",
      ],
    },
    {
      type: "p",
      text: "Also ask whether the price is before or after tax; ours always are before tax. In Quebec, the GST (5%) and the QST (9.975%) are added: on a $40,000 kitchen before tax, they come to $5,990.",
    },
    {
      type: "callout",
      title: "Keep a 10 to 15% reserve",
      text: "Demolition sometimes reveals damaged wood under the sink, wiring that is not to code or a floor to level. With us, every finding is photographed and priced in writing before it is repaired: you decide before you pay.",
    },
    {
      type: "h2",
      text: "How long does a kitchen renovation take?",
      id: "duree",
    },
    {
      type: "p",
      text: "A custom kitchen renovation takes **about three to five months** between the first visit and the last touch-up. The work on site lasts only a few weeks; the rest of the time, the cabinets are in production.",
    },
    {
      type: "table",
      head: ["Step", "Duration", "What happens"],
      rows: [
        ["Visit and quote", "1 to 2 weeks", "Measurements, check of the panel and the basement, written price"],
        ["Design", "2 to 4 weeks", "Plans, choice of finishes, adjustments"],
        ["Cabinet production", "9 to 15 weeks", "Production from the signed plans"],
        ["Work on site", "7 to 10 working days and up", "Demolition, plumbing, electrical, installation, countertop, finishing"],
      ],
    },
    {
      type: "p",
      text: "For kitchen A, we planned 7 to 10 working days on site. New flooring, opened walls or a countertop installed after the cabinets lengthen that time. We time the demolition to the cabinet delivery date, so you live without a sink for as short a time as possible.",
    },
    {
      type: "h2",
      text: "Do you need a permit to renovate a kitchen?",
      id: "permis",
    },
    {
      type: "p",
      text: "**No, not to replace cabinets, a countertop or a sink in the same spot.** The City of Montreal classes this work as cosmetic renovation that needs no permit. A permit becomes necessary as soon as the work touches the structure or changes the size or layout of the rooms, for example by removing a wall.",
    },
    {
      type: "p",
      text: "The City does not issue permits for interior plumbing and electrical, but this work is still regulated: electrical work is done by a contractor licensed by the CMEQ, plumbing by a contractor licensed by the CMMTQ. Planning rules vary from one city and borough to the next: our [service area](/zones) pages sum up the rules of each municipality.",
    },
    {
      type: "h2",
      text: "The mistakes that cost the most",
      id: "erreurs",
    },
    {
      type: "ol",
      items: [
        "**Comparing totals instead of line items.** The lowest quote is often the one that leaves out the range hood, the electrical or the permit.",
        "**Changing the plan after the order.** A cabinet changed during production goes back to the start of the lead time.",
        "**Choosing the appliances last.** Their dimensions and circuits set the cabinets; hand over their spec sheets before the plans.",
        "**Demolishing without checking the electrical panel.** A full panel discovered mid-project delays everything.",
        "**Paying cash without a contract.** Without a written contract that shows the licence number, you lose recourse to the contractor's bond.",
      ],
    },
    {
      type: "h2",
      text: "How do you get a firm price for your kitchen?",
      id: "prix-ferme",
    },
    {
      type: "p",
      text: "A firm price for your kitchen requires a visit, because a per-square-foot price found online does not describe your kitchen. We measure, look under the sink, open the electrical panel and go down to the basement under the kitchen. You then receive a line-by-line quote, with the schedule. Before comparing, [check the RBQ licence](/blogue/verifier-licence-rbq-entrepreneur) of each contractor.",
    },
  ],
  faq: {
    heading: "Questions about kitchen prices",
    items: [
      {
        q: "Can I keep the cabinets and change only the doors?",
        a: "Yes, if the cabinet boxes are sound and the layout suits you. We then replace the doors, the countertop and the hardware. It is the most direct way to stay close to $20,000.",
      },
      {
        q: "Does the price include appliances?",
        a: "No. You choose and buy them; we hook them up. Give us their spec sheets before the plans, because the dimensions and circuits depend on them.",
      },
      {
        q: "Why are two quotes for the same kitchen so different?",
        a: "Often because they do not cover the same thing. Compare line by line: permits, electrical, range hood, flooring and debris removal are the items most often left out.",
      },
      {
        q: "Do I have to pay a deposit?",
        a: "Yes, because custom cabinets are ordered before demolition. With us, it is 40% at order, then the balance in two payments tied to cabinet delivery and completion, written in the contract.",
      },
      {
        q: "Does a renovated kitchen increase the value of the house?",
        a: "It mainly helps to sell, because it is one of the rooms buyers look at first. The exact gain depends on the neighbourhood and the condition of the rest of the house: ask a local broker before investing to resell.",
      },
    ],
  },
  related: {
    heading: "Read next",
    items: [
      {
        title: "Kitchen renovation",
        href: "/services/renovation/cuisine",
        description: "What we do, step by step",
      },
      {
        title: "Custom kitchens",
        href: "/espaces/cuisine",
        description: "Cabinets, islands and storage",
      },
      {
        title: "Materials comparison",
        href: "/materiaux/comparatif",
        description: "Plywood, MDF, melamine",
      },
      {
        title: "Our projects",
        href: "/projets",
        description: "Kitchens delivered across Greater Montreal",
      },
    ],
  },
  sources: [
    {
      title: "City of Montreal, \"Renovate the interior of a building\"",
      url: "https://montreal.ca/en/how-to/renovate-interior-building",
    },
    {
      title: "Régie du bâtiment du Québec, \"What the RBQ does not do\" (electrical and plumbing licences)",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/contractor/the-rbq-and-you/what-the-rbq-does-not-do/",
    },
    {
      title: "Régie du bâtiment du Québec, \"Check a contractor's licence\"",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/citizen/check-a-contractors-licence/",
    },
    {
      title: "Revenu Québec, GST and QST rates",
      url: "https://www.revenuquebec.ca/en/businesses/consumption-taxes/gsthst-and-qst/collecting-gst-and-qst/calculating-the-taxes/",
    },
  ],
  cta: {
    heading: "Get your kitchen priced",
    intro: "We measure in your home and give you a line-by-line price, at no charge.",
  },
};
