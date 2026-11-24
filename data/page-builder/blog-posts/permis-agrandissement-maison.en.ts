// EN version of permis-agrandissement-maison.ts. Same facts and sources (checked
// 2026-11-24); see the FR file header for the full source list.

import type { BlogPost } from "@/features/blog/model";

export const post: BlogPost = {
  slug: "permis-agrandissement-maison",
  locale: "en",
  category: "permis",
  publishedAt: "2026-11-24",
  title: "What a home addition permit costs in the West Island in 2026",
  metaTitle: "Home addition permit, cost and timeline (2026)",
  description:
    "Permit fees, timelines, design review, architect or not: what Beaconsfield, Kirkland, Pointe-Claire, DDO, Dorval and three other areas require in 2026.",
  excerpt:
    "City by city, what the permit costs, how long it takes and which plans the City asks for before you build an addition.",
  cover: {
    src: "/images/generated/renovation/renovation-extension-approach-01.webp",
    alt: "Planning a home addition on a wooded lot",
  },
  body: [
    {
      type: "callout",
      title: "In short",
      items: [
        "Every addition needs a **building permit** from the city or the borough.",
        "The permit costs **$8 to $14.75 per $1,000 of work** in the West Island; Vaudreuil-Dorion charges $3.50 per m² added instead.",
        "An addition visible from the street goes before a design review committee almost everywhere: plan for **months**, not weeks.",
        "An architect is not mandatory for a detached house of two storeys or less under 600 m², but several cities require sealed plans.",
        "The new-home warranty (GCR) does **not** cover an addition: your protection is the RBQ licence and the written contract.",
      ],
    },
    {
      type: "h2",
      text: "Do you need a permit to build a home addition?",
      id: "permis-obligatoire",
    },
    {
      type: "p",
      text: "**Yes, always.** Adding living space, a storey or an attached garage changes the building's footprint: every West Island city requires a building permit before the first shovel goes in. The application is checked against the zoning by-law (setbacks, height, share of the lot covered) and, often, against how the project looks from the street.",
    },
    {
      type: "p",
      text: "You apply to the city, or to the borough in Pierrefonds-Roxboro and L'Île-Bizard–Sainte-Geneviève, which are part of Montréal. The rules change from one municipality to the next, even between neighbours like Beaconsfield and Kirkland. That is why we check the exact address before any plans are drawn.",
    },
    {
      type: "h2",
      text: "What does a home addition permit cost?",
      id: "cout-du-permis",
    },
    {
      type: "p",
      text: "In the West Island, a permit for a home addition costs **between $8 and $14.75 per $1,000 of work**, depending on the city, with a minimum of $50 to $200. Some cities add a guarantee deposit of up to $3,120, and a study fee of $180 to $1,000 when a committee has to review the look of the project.",
    },
    {
      type: "table",
      caption: "2026 fees published by each city for an addition to a single-family house. Checked in the by-laws on November 24, 2026.",
      head: ["City or area", "Permit", "Deposit", "Design review"],
      rows: [
        ["Beaconsfield", "$14.75 per $1,000 (min. $200)", "$2,500", "$600 if visible from the street"],
        ["Kirkland", "$8 per $1,000 (min. $50)", "not published", "$400 depending on the project"],
        ["Pointe-Claire", "$13 per $1,000, on at least $1,410 per m²", "$645 or $3,120", "$275 or $625"],
        ["Dollard-des-Ormeaux", "$100 up to $24,999, then $11 per $1,000", "not published", "always required"],
        ["Dorval", "$8 per $1,000 up to $100,000, then $6", "$2,500", "$1,000"],
        ["Pierrefonds-Roxboro", "not published by the borough", "not published", "$180, always required"],
        ["L'Île-Bizard–Sainte-Geneviève", "$9.80 per $1,000", "not published", "in some areas"],
        ["Vaudreuil-Dorion", "$3.50 per m² added (min. $200)", "not published", "in designated zones"],
      ],
    },
    {
      type: "h3",
      text: "Example: $150,000 of work",
    },
    {
      type: "p",
      text: "For an addition valued at $150,000, the permit alone comes to **$2,212.50 in Beaconsfield**, $1,950 in Pointe-Claire, $1,650 in DDO, $1,470 on Île Bizard, $1,200 in Kirkland and $1,100 in Dorval. In Vaudreuil-Dorion, a 40 m² addition pays the $200 minimum. Deposits and the design review fee come on top.",
    },
    {
      type: "p",
      text: "The fee is calculated on the estimated value of the work, not on the price you negotiate. Pointe-Claire even sets a floor of $1,410 per m² of added floor area: a 50 m² addition is calculated on at least $70,500 there.",
    },
    {
      type: "h2",
      text: "How long does it take to get the permit?",
      id: "delais",
    },
    {
      type: "p",
      text: "**From two weeks to more than four months.** Once the file is complete, cities generally give themselves 30 days to decide. That timeline grows as soon as a committee has to review the look of the addition, which happens in most cases when it can be seen from the street.",
    },
    {
      type: "table",
      head: ["City or area", "Published timeline", "Design review"],
      rows: [
        ["Beaconsfield", "1 month from March to September, 2 weeks from October to February", "If visible from the street: at least 4 months"],
        ["Kirkland", "Not published for the permit", "Committee opinion after 60 days, then council decision"],
        ["Pointe-Claire", "30 days after the file is complete", "Longer; the committee meets once a month"],
        ["Dollard-des-Ormeaux", "30 days after the file is complete", "For every addition, then council"],
        ["Dorval", "30 working days", "For every residential addition, then council"],
        ["Pierrefonds-Roxboro", "Not published", "For every addition, sometimes council"],
      ],
    },
    {
      type: "p",
      text: "The clock only starts with a complete file: as long as a document is missing, the City does not start counting. Also allow time to have the plans drawn and calculated, before the application is even filed.",
    },
    {
      type: "h2",
      text: "What is design review, and when does it apply?",
      id: "comite-apparence",
    },
    {
      type: "p",
      text: "**It is the step where the City decides what your addition will look like.** Cities call it PIIA (SPAIP in English), for site planning and architectural integration programme. A planning advisory committee compares the materials, roof, massing and position of the building with the criteria for your area, then council approves or asks for changes.",
    },
    {
      type: "ul",
      items: [
        "**Always** in Dollard-des-Ormeaux and Pierrefonds-Roxboro, and in Dorval according to the City's permit page.",
        "**If the addition can be seen from the street** in Beaconsfield and Pointe-Claire, attached garage included.",
        "**In Kirkland**, if the front facade changes or the house becomes more than 25% larger than the average of homes within 100 m.",
        "**In Vaudreuil-Dorion and on Île Bizard**, only in some areas.",
      ],
    },
    {
      type: "p",
      text: "The committee asks for renderings, material samples and photos of the neighbouring houses. In Pointe-Claire, it meets once a month and the file must be filed three weeks before the meeting: a project already adjusted to the area's criteria avoids losing a month.",
    },
    {
      type: "h2",
      text: "Do you need an architect for a home addition?",
      id: "architecte",
    },
    {
      type: "p",
      text: "**Not always.** Québec's Architects Act exempts a detached single-family house that, after the work, has at most two storeys and one basement, and less than 600 m² of floor area above ground. For a semi-detached house, a row house or a building of four units or fewer, the threshold drops to 300 m².",
    },
    {
      type: "p",
      text: "Cities can still ask for more. In Pointe-Claire, an added storey or an addition of more than one third of the floor area needs plans sealed by an architect or a technologist. In Beaconsfield, every plan except the surveyor's carries the signature and seal of an architect, an engineer, a technologist or an APDIQ-member designer; Kirkland requires it depending on the project. Foundations, framing and beams almost always need an engineer, and Dollard-des-Ormeaux and Île Bizard require it in writing.",
    },
    {
      type: "h2",
      text: "Which documents does the City ask for?",
      id: "documents",
    },
    {
      type: "p",
      text: "A complete addition file usually has seven items. The names change from one city to the next, but the content stays the same:",
    },
    {
      type: "ol",
      items: [
        "The signed application form, or a power of attorney if the contractor files for you.",
        "The property's certificate of location, prepared by a land surveyor.",
        "The proposed site plan, which places the addition on the lot with its setbacks.",
        "Scale drawings: every level, the elevations of every facade and the sections.",
        "Structural plans calculated by an engineer: foundations, framing, beams.",
        "Exterior materials and colours, with samples or data sheets.",
        "The estimated cost of the work and the contractor's RBQ licence number.",
      ],
    },
    {
      type: "p",
      text: "Some cities add their own items: photos of all four facades in Kirkland, a tree plan and urban forestry report in Pointe-Claire when the building footprint grows. In Kirkland, a partial permit first authorizes the foundations; the final permit follows once the new certificate of location is filed.",
    },
    {
      type: "h2",
      text: "Is a home addition covered by a warranty?",
      id: "garantie",
    },
    {
      type: "p",
      text: "**Not by the new-home warranty.** The Garantie de construction résidentielle (GCR) explicitly excludes renovation, including an addition. Your protection therefore rests on three things: a valid RBQ licence in the right category, the contractor's bond and a written contract showing the company's name and licence number.",
    },
    {
      type: "p",
      text: "For a residential addition, the general contractor holds subcategory 1.2, small buildings. Before you sign, [check the licence in the RBQ register](/blogue/verifier-licence-rbq-entrepreneur): valid status, categories and past claims.",
    },
    {
      type: "h2",
      text: "In what order should you take the steps?",
      id: "etapes",
    },
    {
      type: "ol",
      items: [
        "**Read the zoning for your address**: setbacks, height, share of the lot covered, protected trees.",
        "**Meet the planning department** if design review applies, before paying for plans.",
        "**Have the plans drawn and calculated**: architect or technologist, then engineer.",
        "**File the complete application** and pay the permit, the study fee and the deposit.",
        "**Sign the contract** with a schedule built around the expected permit date.",
        "**Build**, then file the new certificate of location if the City requires it.",
      ],
    },
    {
      type: "p",
      text: "At Dilamco, we put the file together, file it and answer the inspector. The permit and committee timelines are in the schedule from the quote onward. The details for each city are on our [Beaconsfield](/zones/beaconsfield), [Kirkland](/zones/kirkland), [Pointe-Claire](/zones/pointe-claire) and [Dollard-des-Ormeaux](/zones/dollard-des-ormeaux) pages.",
    },
  ],
  faq: {
    heading: "Questions about the addition permit",
    items: [
      {
        q: "Can the foundations start before the permit is issued?",
        a: "No, you need a permit in hand before digging. Kirkland is a special case: the City first issues a partial permit for the foundations, then the final permit once the new certificate of location is filed.",
      },
      {
        q: "Who files the permit application, me or the contractor?",
        a: "Either one. If the contractor files for you, the City asks for a power of attorney signed by the owner. The permit stays in the property's name.",
      },
      {
        q: "Does an attached garage count as an addition?",
        a: "Yes. A garage attached to the house enlarges the main building. In Pointe-Claire, it goes before design review as soon as it can be seen from the street, like any other addition.",
      },
      {
        q: "Is the permit included in the contractor's price?",
        a: "It depends on the quote: ask for it in writing. With us, the permit and study fees are included in the price. The deposit some cities require is a separate guarantee, and its refund conditions are set in the by-law.",
      },
    ],
  },
  related: {
    heading: "Read next",
    items: [
      {
        title: "Home addition",
        href: "/services/renovation/agrandissement-de-maison",
        description: "How we run the project, from the lot to the finishes",
      },
      {
        title: "Service areas",
        href: "/zones",
        description: "The rules in each West Island city",
      },
      {
        title: "Check an RBQ licence",
        href: "/blogue/verifier-licence-rbq-entrepreneur",
        description: "The 5 points to check before signing",
      },
    ],
  },
  sources: [
    {
      title: "LégisQuébec, Architects Act (s. 16 and 16.1)",
      url: "https://www.legisquebec.gouv.qc.ca/fr/document/lc/A-21",
    },
    {
      title: "Garantie GCR, « Bâtiments couverts » (additions excluded)",
      url: "https://www.garantiegcr.com/fr/entrepreneurs/batiments-couverts/",
    },
    {
      title: "City of Beaconsfield, Renovation permit and certificate (timelines and fees)",
      url: "https://www.beaconsfield.ca/en/renovation-permit-and-certificate",
    },
    {
      title: "City of Kirkland, By-law GEN-2026-51 on fees",
      url: "https://www.ville.kirkland.qc.ca/client_file/upload/Avis%20publics%202025/GEN-2026-51_EN.pdf",
    },
    {
      title: "City of Pointe-Claire, How to obtain a building permit (2026)",
      url: "https://www.pointe-claire.ca/assets/images/Documents/PRO_permis_construire-R_FR_2026.pdf",
    },
    {
      title: "City of Dollard-des-Ormeaux, By-law R-2025-211 on 2026 fees",
      url: "https://ville.ddo.qc.ca/wp-content/uploads/2025/12/TARIFS_R-2025-211_CODIFIE.pdf",
    },
    {
      title: "City of Dorval, By-law RCM-98-2023 on fees",
      url: "https://www.ville.dorval.qc.ca/storage/app/media/la-cite/administration-et-finances/reglements-municipaux/reglements-en-vigueur/cod-rcm-98-2023-tarification-fr-au-2026-05-15.pdf",
    },
    {
      title: "City of Montréal, Renovations, additions and new construction in Pierrefonds-Roxboro",
      url: "https://montreal.ca/articles/renovations-agrandissements-et-nouvelles-constructions-pierrefonds-roxboro-108318",
    },
    {
      title: "City of Montréal, Permit for a building addition (L'Île-Bizard–Sainte-Geneviève)",
      url: "https://montreal.ca/demarches/obtenir-un-permis-pour-lagrandissement-dun-immeuble?arrondissement=IBZSGV",
    },
    {
      title: "City of Vaudreuil-Dorion, By-law 1709 on fees",
      url: "https://www.ville.vaudreuil-dorion.qc.ca/uploads/sections/La_Ville/Reglementation/Reglements_generaux/Reg_1709_comp-40_finale.pdf",
    },
  ],
  cta: {
    heading: "Planning an addition?",
    intro: "We check the zoning for your address before you pay for plans.",
  },
};
