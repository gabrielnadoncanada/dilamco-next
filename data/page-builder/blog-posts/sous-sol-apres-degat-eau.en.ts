// Article: basement after water damage (queries "flooded basement what to do",
// "basement water damage"; FR source targets « dégât d'eau sous-sol », low
// competition per Keyword Planner 2026-06-21). Rebuild angle, not emergency:
// Dilamco does neither pumping nor drying (see /services/renovation/apres-sinistre).
// Insurance advice stays general (endorsements to be checked in the policy).
// Safety guidance: RBQ, "Floods: advice for victims"
// (https://www.rbq.gouv.qc.ca/en/major-issues/floods-advice-for-victims/, accessed 2026-10-08):
// never touch a switch while standing in water, no flooded heating to dry out,
// check the municipal sewer, electrical work by a licensed contractor (16).

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "sous-sol-apres-degat-eau",
  locale: "en",
  category: "sinistre",
  publishedAt: "2026-10-08",
  title: "Flooded basement: the steps, from drying out to rebuilding",
  metaTitle: "Flooded basement: what to do after water damage",
  description:
    "Basement water damage: what to do in the first hours, who dries it out, what to throw away, how to find the cause and rebuild without a repeat.",
  excerpt:
    "The order of steps after basement water damage, and the mistakes that bring the moisture back a year later.",
  cover: {
    src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
    alt: "Finished basement with a built-in TV unit and a bar corner",
  },
  body: [
    {
      type: "callout",
      title: "In short",
      items: [
        "Safety first, then photos, then a call to your insurer.",
        "Drying is a job for a specialized firm; the rebuild comes after.",
        "Never refinish a basement before fixing what let the water in.",
      ],
    },
    {
      type: "h2",
      text: "The first hours: safety, photos, insurer",
    },
    {
      type: "ol",
      items: [
        "**Do not touch anything electrical while standing in water**, not even the main switch. If the water reaches outlets, a baseboard heater or the panel, have the power cut by an electrician or by Hydro-Québec.",
        "**Photograph everything** before you move anything: the water line on the walls, the furniture, the boxes, the spot where the water seems to come from.",
        "**Call your insurer** and write down the claim number. Ask what is covered and whether they send an emergency firm.",
        "**Keep the evidence**: do not throw out damaged belongings before the adjuster has seen them, or photograph them with a label.",
      ],
    },
    {
      type: "h2",
      text: "Who dries it out and who rebuilds",
    },
    {
      type: "p",
      text: "These are two different trades. Pumping, drying and decontamination go to specialized firms, often sent by the insurer. They set up dehumidifiers and measure the moisture in the walls until they are dry. The general contractor then takes over to [rebuild after the loss](/services/renovation/apres-sinistre): walls, insulation, floors, plumbing and finishing.",
    },
    {
      type: "p",
      text: "Timing matters. Mould can appear within 24 to 48 hours on wet drywall and insulation. The sooner drying starts, the fewer materials have to be thrown out.",
    },
    {
      type: "callout",
      title: "Before turning things back on",
      items: [
        "Do not use a flooded furnace or baseboard heaters to dry the space: have them inspected first.",
        "Confirm with your municipality that the sewer works before using sinks and toilets.",
        "Affected outlets, wires and baseboard heaters are replaced by a licensed electrical contractor, never by the homeowner.",
      ],
    },
    {
      type: "h2",
      text: "What to remove, and what you can keep",
    },
    {
      type: "p",
      text: "Porous materials that soaked do not dry all the way through. They are removed up to a sound height, often 30 to 60 cm (12 to 24 in.) above the line left by the water.",
    },
    {
      type: "table",
      head: ["Material", "After water damage"],
      rows: [
        ["Drywall and batt insulation", "Removed above the water line"],
        ["Carpet and underpad", "Thrown out"],
        ["Laminate floating floor", "Almost always replaced: the board swells"],
        ["Luxury vinyl and ceramic", "Often salvageable, check underneath"],
        ["Wood studs", "Kept if they dry and stay sound"],
        ["Concrete (slab and walls)", "Kept; look for cracks once dry"],
      ],
    },
    {
      type: "h2",
      text: "Finding what let the water in",
    },
    {
      type: "p",
      text: "Refinishing a basement without fixing the cause means paying twice. Once the walls are open, we look for where the water came from. The most common causes in West Island homes:",
    },
    {
      type: "ul",
      items: [
        "**Sewer backup**: water comes up through the floor drain during a heavy storm. The fix is a backwater valve, kept maintained.",
        "**Sump pump** that failed or is undersized, with no alarm or battery backup.",
        "**Crack** in the foundation that lets groundwater in.",
        "**Grading** that slopes toward the house, or gutters that empty at the foot of the wall.",
        "**Weeping tile** clogged around the foundation.",
      ],
    },
    {
      type: "p",
      text: "Many insurers require a backwater valve to cover sewer backup, and several cities make it mandatory. Have it checked before anything is closed up.",
    },
    {
      type: "h2",
      text: "Rebuilding a basement that tolerates moisture",
    },
    {
      type: "p",
      text: "A basement stays damper than the rest of the house. The rebuild is a chance to choose forgiving materials:",
    },
    {
      type: "ul",
      items: [
        "Rigid insulation glued to the concrete, which does not hold water",
        "Walls framed slightly away from the foundation",
        "Moisture-resistant drywall at the bottom of the walls",
        "Vinyl or ceramic flooring rather than laminate",
        "Electrical outlets high enough to escape a minor flood",
      ],
    },
    {
      type: "p",
      text: "If the basement was living space, the rebuild often requires a permit, especially if plumbing moves or a bedroom is redone. The technical details of [basement finishing](/services/renovation/sous-sol) are on our dedicated page.",
    },
    {
      type: "h2",
      text: "Preparing the claim with the contractor",
    },
    {
      type: "p",
      text: "The insurer compares the rebuild price against its own schedule. The more detailed the quote, the simpler the comparison. Ask the contractor for:",
    },
    {
      type: "ul",
      items: [
        "A list of the damage room by room, with photos",
        "A price for each type of work rather than one lump sum",
        "Separate lines for anything unrelated to the loss (a larger window, for example)",
        "A written note for each piece of hidden damage found during the work",
      ],
    },
    {
      type: "p",
      text: "Check your policy for the endorsements that apply: sewer backup, surface water and groundwater are not covered by default, and each has its own limit.",
    },
  ],
  faq: {
    heading: "Questions about a flooded basement",
    items: [
      {
        q: "How long should I wait before rebuilding?",
        a: "Until the drying firm confirms, with readings, that the concrete and the studs are dry. Closing up a damp wall traps the water and grows mould behind the new drywall.",
      },
      {
        q: "Can I choose my contractor if the insurer suggests one?",
        a: "Generally, yes: you are the insured. Read your policy and tell the adjuster who you have chosen. Give them a detailed quote so they can compare it.",
      },
      {
        q: "Does everything need redoing if only 5 cm (2 in.) of water came in?",
        a: "Not everything. The bottom of the drywall, the insulation and the flooring are usually replaced. Higher walls, ceilings and dry studs stay in place.",
      },
      {
        q: "Can we use the rebuild to redesign the basement?",
        a: "Yes. The insurer pays to restore what was there; anything you add is billed separately, on its own lines. Many clients use the open walls to rethink the rooms.",
      },
    ],
  },
  related: {
    heading: "Further reading",
    items: [
      {
        title: "Disaster rebuild",
        href: "/services/renovation/apres-sinistre",
        description: "What we handle once drying is done",
      },
      {
        title: "Basement finishing",
        href: "/services/renovation/sous-sol",
        description: "Insulation, drainage and permits",
      },
      {
        title: "Pierrefonds-Roxboro",
        href: "/zones/pierrefonds-roxboro",
        description: "Our base, in the West Island",
      },
    ],
  },
  sources: [
    {
      title: "Régie du bâtiment du Québec, \"Floods: advice for victims\"",
      url: "https://www.rbq.gouv.qc.ca/en/major-issues/floods-advice-for-victims/",
    },
    {
      title: "Régie du bâtiment du Québec, \"Check a contractor's licence\"",
      url: "https://www.rbq.gouv.qc.ca/en/you-are/citizen/check-a-contractors-licence/",
    },
  ],
  cta: {
    heading: "A basement to rebuild?",
    intro: "Once the space is dry, we assess the damage and put together a quote your insurer can read line by line.",
  },
};
