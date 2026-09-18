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
          eyebrow: "Disaster rebuild",
          heading: "Rebuilding after water or fire damage",
          description:
            "We take over once the space is dry: written scope, line-by-line quote, permits and reconstruction.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basements",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Insurance file", "West Island"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement rebuilt after water damage",
          },
          caption: "Pierrefonds-Roxboro · West Island",
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
            "Pumping, drying and decontamination belong to specialized firms. We rebuild afterwards.",
          columns: "2",
          items: [
            {
              title: "Water damage and flooding",
              description: "Sewer backup, burst pipe, seepage, rising water.",
              icon: "droplets",
              bullets: [
                "Walls and floors opened to see the real extent",
                "Affected drywall, insulation and subfloor replaced",
                "Framing and joists checked before closing up",
              ],
            },
            {
              title: "Fire and smoke",
              description: "Direct damage, soot, odours held in porous materials.",
              icon: "hardHat",
              bullets: [
                "Affected sections demolished",
                "Structure and envelope rebuilt to the drawings",
                "Rooms rebuilt from studs to paint",
              ],
            },
            {
              title: "Mould",
              description: "Usually the result of a slow leak or missing ventilation.",
              icon: "shieldCheck",
              bullets: [
                "Rebuild after specialized decontamination",
                "Cause fixed: ventilation, air sealing, drainage",
                "Assemblies suited to damp areas",
              ],
            },
            {
              title: "Flooded basement",
              description: "The most common situation in the West Island.",
              icon: "layers",
              bullets: [
                "Finishes and insulation removed to a safe height",
                "Weeping tile, sump pump and cracks checked",
                "Permit required if the basement is finished again",
              ],
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Five steps",
          steps: [
            {
              number: "1",
              title: "On-site assessment",
              description:
                "Visit after drying, with targeted openings to see behind the finishes.",
            },
            {
              number: "2",
              title: "Scope and quote",
              description:
                "Room-by-room description, line-by-line quote and photos, for your insurer.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Signed with a schedule, then a permit application if structure is involved.",
            },
            {
              number: "4",
              title: "Demolition",
              description:
                "Affected materials removed. Hidden damage documented before the work continues.",
            },
            {
              number: "5",
              title: "Reconstruction",
              description:
                "Mechanical, inspections, drywall, paint, floors, then a final walkthrough with you.",
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
            "We replace neither your insurer nor your adjuster. We supply the technical substance of the file.",
          items: [
            {
              title: "A written scope, room by room",
              description: "Damage and repairs described, not a single lump sum.",
            },
            {
              title: "A line-by-line quote",
              description:
                "Demolition, mechanical, materials and finishing priced separately.",
            },
            {
              title: "Photo documentation",
              description:
                "Condition before work, inspection openings and hidden damage.",
            },
            {
              title: "Loss and upgrades kept apart",
              description:
                "Anything outside the claim is isolated in the quote, line by line.",
            },
          ],
          actions: [
            {
              label: "Turnkey renovation",
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
            alt: "Damage assessed before a floor is rebuilt",
          },
          cardTitle: "Why the licence matters here",
          cardDescription:
            "RBQ licence 8306-0806-27, valid since 2004, bond in force, civil liability and job-site insurance. Licensed, inspected work stands up better.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Frequently asked questions",
          items: [
            {
              q: "Do you handle pumping and drying?",
              a: "No. Pumping, drying and decontamination are emergency services handled by specialized firms, often retained by the insurer. We take over the rebuild once the premises are dry and safe.",
            },
            {
              q: "Do you work with my insurance?",
              a: "We supply the written scope, the line-by-line quote and the photos your claim needs, and we answer the adjuster's technical questions. You remain the policyholder and your insurer's point of contact.",
            },
            {
              q: "Can I choose my own contractor?",
              a: "As a rule the homeowner chooses who does the work, even when the insurer suggests companies from its network. Confirm the terms of your policy with your insurer. We provide the documents so our quote can be compared.",
            },
            {
              q: "What if you find more damage?",
              a: "It happens often after water damage. We document hidden damage with photos and a description, give you the cost in writing and let you file a supplementary claim. Nothing is closed over a known problem.",
            },
            {
              q: "Do I need a permit to rebuild?",
              a: "Often. As soon as the rebuild touches structure, moves plumbing or finishes a basement as living space, a permit is required. We confirm with your city and file the application.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes, with the scope and duration written into the contract. RBQ licence 8306-0806-27, valid with no restrictions since 2004, bond in force, no claims on file.",
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
          heading: "A loss to rebuild?",
          intro:
            "We assess the damage, build the scope and the quote, then rebuild under a single contract.",
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
          note: "RBQ licence 8306-0806-27 · Pierrefonds-Roxboro and Greater Montreal",
        },
      },
    },
  ],
};
