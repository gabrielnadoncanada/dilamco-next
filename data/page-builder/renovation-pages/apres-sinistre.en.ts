import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationApresSinistrePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Disaster rebuild in Pierrefonds and the West Island",
    description:
      "Rebuilding after water damage, fire, smoke or mould: scope documented for your insurer, permits and construction. RBQ-licensed contractor.",
    path: "/services/renovation/apres-sinistre",
    ogAlt: "Disaster rebuild by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Disaster rebuild",
      url: SITE.url + "/services/renovation/apres-sinistre",
    },
  ],
  service: {
    name: "Disaster rebuild",
    description:
      "Rebuilding after water damage, fire, smoke or mould by a general contractor: damage assessment, detailed scope and quote for the insurance claim, permits, trade coordination and full restoration.",
    url: SITE.url + "/services/renovation/apres-sinistre",
    serviceType: "Disaster rebuild",
    areaServed: [
      "Pierrefonds-Roxboro",
      "West Island",
      "Montreal",
      "Laval",
      "South Shore",
      "Vaudreuil-Soulanges",
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
          eyebrow: "Dilamco - Renovation",
          heading:
            "Disaster rebuild: rebuilding with a licensed general contractor",
          description:
            "Once the emergency is over and the space is dried out, the real rebuild begins: opening up, assessing, pricing, obtaining permits, coordinating the trades and restoring the home. We put together the scope and the detailed quote your insurer needs, then carry out the work under one contract. Based in Pierrefonds-Roxboro.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement finishing",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ licence 8306-0806-27",
            "Insurance documentation",
            "West Island",
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement rebuilt after water damage",
          },
          caption:
            "Pierrefonds-Roxboro, the West Island, Montreal, Laval and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What sets a rebuild apart from a renovation",
          description:
            "Rebuilding after a loss follows a different logic. The scope is not chosen by the homeowner, it is dictated by the damage and by what the policy covers. Three factors change everything compared with an ordinary job.",
          cards: [
            {
              title: "The damage goes past what you can see",
              description:
                "Water migrates behind the finishes, smoke saturates porous materials, mould grows inside cavities. A scope set by eye, without opening up, misses damage that will resurface after the work is done.",
            },
            {
              title: "The insurance file dictates the format",
              description:
                "An insurer and their adjuster work from a written scope room by room, photos and a line-item quote. A one-page lump sum slows the settlement and feeds disagreement.",
            },
            {
              title: "Loss versus upgrade",
              description:
                "Restoring what was there falls under the claim; upgrading or enlarging falls on you. The two blur easily. We separate them in the quote so everyone knows what they are paying for.",
            },
            {
              title: "The code has moved on",
              description:
                "In an older building, rebuilding can require bringing certain components up to current standards — electrical, ventilation, basement egress. That is documented early in the file.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "The losses we rebuild",
          intro:
            "We do not do emergency response: pumping, drying and decontamination are handled by specialized firms. We take over the rebuild, once the space is dry and safe.",
          columns: "2",
          items: [
            {
              title: "Water damage and flooding",
              description: "Sewer backup, burst pipe, infiltration, river flooding.",
              icon: "droplets",
              bullets: [
                "Walls and floors opened to establish the real extent behind the finishes.",
                "Drywall, insulation, subfloor and affected finishes replaced.",
                "Framing and joists checked before anything is closed up.",
                "Affected electrical and plumbing reworked, with inspection.",
              ],
            },
            {
              title: "Fire and smoke",
              description:
                "Direct damage, soot, odours held in the materials.",
              icon: "hardHat",
              bullets: [
                "Demolition of affected sections and removal of saturated materials.",
                "Structure and envelope rebuilt to the required drawings.",
                "Full reconstruction of affected rooms, from studs to paint.",
                "Damaged cabinets, storage and finishes replaced.",
              ],
            },
            {
              title: "Mould",
              description:
                "Usually the consequence of a slow leak or missing ventilation.",
              icon: "shieldCheck",
              bullets: [
                "Rebuilding after decontamination carried out by a specialized firm.",
                "The cause corrected: ventilation, waterproofing, drainage, misplaced vapour control.",
                "Materials and assemblies suited to damp areas.",
                "Finishes redone once the moisture problem is solved at the source.",
              ],
            },
            {
              title: "Flooded basement",
              description: "The most common situation in the West Island.",
              icon: "layers",
              bullets: [
                "Affected finishes removed up to a safe height, including insulation behind the drywall.",
                "Drain, sump pump and foundation cracks checked.",
                "Wall rebuilt with an assembly more tolerant of moisture.",
                "Conversion permit where the basement is refinished as living space.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "assurance",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What we bring to your claim",
          intro:
            "We replace neither your insurer nor your claims adjuster. We supply the technical material the claim needs, in a format an insurer can process, and we stay available for questions about the scope of work.",
          items: [
            {
              title: "A written scope, room by room",
              description:
                "A description of the damage and of the restoration work for each room, rather than a lump sum. That is the document that makes comparison and discussion with the adjuster possible.",
            },
            {
              title: "A line-item quote",
              description:
                "Demolition, mechanical, materials, labour, finishing: each item priced separately. Adjustments are negotiated line by line, not against an opaque total.",
            },
            {
              title: "Photographic documentation",
              description:
                "Photos of the condition before work, of the openings made to assess, and of the hidden damage uncovered during demolition.",
            },
            {
              title: "Loss and upgrades kept separate",
              description:
                "If you take the opportunity to improve a room or change a layout, the non-loss portion is isolated in the quote. Everyone knows what belongs to the policy and what belongs to you.",
            },
            {
              title: "One contact through to the end",
              description:
                "The same contractor from assessment to handover, licensed and insured. No passing you between the demolition crew, the drywaller and the installer when a question comes up.",
            },
          ],
          actions: [
            {
              label: "See turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Assessing damage before rebuilding a floor",
          },
          cardTitle: "Why the licence matters here",
          cardDescription:
            "RBQ licence 8306-0806-27, valid and unrestricted since 2004, a $40,000 bond and no claims on file. Civil liability and job-site insurance in force. Work carried out by a licensed contractor and inspected stands up better, both with the insurer and at resale.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a rebuild unfolds",
          intro:
            "The final scope is confirmed once the walls are open and according to your insurer's settlement. The sequence itself stays the same.",
          steps: [
            {
              number: "1",
              title: "On-site assessment",
              description:
                "Visit after drying, assessment of visible damage and targeted openings to check what is hidden behind the finishes.",
            },
            {
              number: "2",
              title: "Scope and quote",
              description:
                "Room-by-room description, line-item quote and photos, in a format your insurer and their adjuster can work with.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Signed with the schedule once the scope is settled, then a permit application where the rebuild touches structure, plumbing or a basement conversion.",
            },
            {
              number: "4",
              title: "Demolition and final assessment",
              description:
                "Complete removal of affected materials. Hidden damage found here is documented and submitted as a supplementary claim before work continues.",
            },
            {
              number: "5",
              title: "Rebuilding",
              description:
                "Framing, plumbing, electrical, ventilation, insulation, municipal inspections, drywall, paint, flooring and custom millwork.",
            },
            {
              number: "6",
              title: "Handover",
              description:
                "Final walkthrough with you, punch list, cleanup, return of the space and the contractual warranty takes effect.",
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The spaces most often rebuilt",
          intro:
            "After water damage, it is the basement, the kitchen, the bathroom and the flooring that need a full rebuild first.",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "The space most exposed to backups and flooding. Lower walls, insulation and finishes rebuilt, with drainage corrected.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement rebuilt after a flood",
              },
              badges: ["Basement", "Drainage"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "When water reaches the kitchen, base cabinets, subfloor and sometimes plumbing have to be replaced.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Kitchen rebuilt after water damage",
              },
              badges: ["Kitchen", "Cabinets"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "A long-running leak behind the shower means opening everything up, repairing the framing and redoing the waterproofing entirely.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Bathroom rebuilt after a leak",
              },
              badges: ["Waterproofing", "Framing"],
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "The finish and often the subfloor have to be redone after a flood. Moisture testing before anything new goes down.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Floor replaced after water damage",
              },
              badges: ["Flooring", "Moisture"],
              footerCtaLabel: "See flooring",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What a well-run rebuild delivers",
          description:
            "The goal is not simply to make it presentable again. It is to bring the building back to a sound, compliant and documented state, so the loss does not repeat itself in two years.",
          cards: [
            {
              title: "A genuinely cleaned-out building",
              description:
                "Affected materials were removed, not covered over, and the cause of the loss was corrected where it belonged to the building.",
            },
            {
              title: "A file that holds up",
              description:
                "Written scope, line-item quote and photos: a claim supported by documents the insurer can actually process.",
            },
            {
              title: "Compliant, warranted work",
              description:
                "Permits obtained, inspections passed, a licensed and insured contractor, and a contractual warranty at handover.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ — disaster rebuild",
          intro:
            "Emergency response, insurance, scope, timelines, permits, hidden damage and warranty.",
          items: [
            {
              q: "Do you handle the emergency, pumping and drying?",
              a: "No. Pumping, drying, disinfection and decontamination are emergency interventions carried out by specialized firms, often retained directly by the insurer. We take over for the rebuild, once the space is dry and safe.",
            },
            {
              q: "Do you work with my insurance?",
              a: "We supply the written room-by-room scope, the line-item quote and the photographic documentation your claim needs, and we stay available to answer the adjuster's technical questions. You remain the policyholder and your insurer's contact; we support the rebuild side.",
            },
            {
              q: "Can I choose my own contractor?",
              a: "As a rule, yes: the homeowner chooses who does the work, even when the insurer proposes companies from its network. Check the terms of your policy and discuss it with your insurer before signing anything. We provide the documents needed for our quote to be compared with others.",
            },
            {
              q: "How soon after the loss can work start?",
              a: "The rebuild starts once drying is complete, the scope is settled and the claim is far enough along. The assessment and the quote can be prepared in parallel with the drying, which avoids losing several weeks.",
            },
            {
              q: "What if you find more damage during demolition?",
              a: "It is common, especially after water damage. We document the hidden damage with photos and a description, give you the cost in writing and let you file a supplementary claim before continuing. Nothing gets closed up over a known problem.",
            },
            {
              q: "Is a permit required to rebuild?",
              a: "Often, yes. As soon as the rebuild touches the structure, relocates plumbing or refinishes a basement as living space, a permit is required. We check with your city or borough and file the application. Work done without a permit can complicate resale and a future claim.",
            },
            {
              q: "Do you rebuild identically, or can we upgrade?",
              a: "Both are possible. Restoring what was there falls under the claim; upgrades you want to add are at your expense. We separate the two clearly in the quote, so you and your insurer know exactly what belongs to which.",
            },
            {
              q: "Do you work in Pierrefonds-Roxboro and the West Island?",
              a: "Yes. Our office is at 18625 Larocque Street in Pierrefonds-Roxboro, and we cover the whole West Island, Montreal, Laval, the South Shore and Vaudreuil-Soulanges. We know the housing stock in the waterfront sectors and their constraints.",
            },
            {
              q: "Which spaces do you rebuild?",
              a: "Mainly basements, kitchens, bathrooms and flooring, though the scope can cover an entire house depending on the damage. Damaged cabinets, vanities and storage are rebuilt to measure and installed by our crews, under subcategory 12 of our licence.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes. Rebuild work is warranted and the terms are in the contract. Our RBQ licence 8306-0806-27 has been valid and unrestricted since 2004, with a $40,000 bond and no claims on file. Civil liability and job-site insurance are in force.",
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
          heading: "A loss to rebuild in the West Island?",
          intro:
            "We assess the damage, prepare the scope and the detailed quote for your claim, then rebuild under a single contract. Call (514) 820-0773 or request an assessment.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Pierrefonds-Roxboro, the West Island and Greater Montreal",
        },
      },
    },
  ],
};
