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
          heading: "Putting the house back together after water or fire",
          description:
            "We step in once the place is dry: findings, written scope, line-by-line quote and rebuild.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See the basement",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Insurance file", "West Island"],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Room rebuilt after water damage",
          },
          imageSide: "left",
          caption: "Pierrefonds-Roxboro and the West Island",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the rebuild mandate covers",
          intro:
            "Pumping and decontamination stay with the emergency firms. We rebuild afterwards.",
          columns: "2",
          items: [
            {
              title: "Water damage",
              description: "Sewer backup, burst pipe, flooding",
              icon: "droplets",
              bullets: [
                "Walls opened to measure the real extent",
                "Drywall, insulation and substrate replaced",
                "Joists checked before anything closes",
              ],
            },
            {
              title: "Fire and smoke",
              description: "Soot and odours inside porous materials",
              icon: "hardHat",
              bullets: [
                "Affected sections demolished outright",
                "Structure and envelope rebuilt to drawings",
                "Rooms rebuilt from studs to paint",
              ],
            },
            {
              title: "Mould",
              description: "The tail of a slow leak or stagnant air",
              icon: "shieldCheck",
              bullets: [
                "Rebuild after specialized decontamination",
                "Cause corrected: ventilation, seal, drain",
                "Assemblies chosen for damp areas",
              ],
            },
            {
              title: "Flooded basement",
              description: "The most frequent case near the shoreline",
              icon: "layers",
              bullets: [
                "Finishes and insulation cut back to sound height",
                "Drain, pump and cracks re-examined",
                "Permit filed if the basement is refinished",
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
          heading: "How a rebuild unfolds",
          steps: [
            {
              number: "1",
              title: "On-site findings",
              description:
                "Visit after drying, targeted openings behind the finishes.",
            },
            {
              number: "2",
              title: "Scope and quote",
              description:
                "Room-by-room description, price per item, photos attached.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Signature, then an application if the structure is affected.",
            },
            {
              number: "4",
              title: "Selective demolition",
              description:
                "Damaged materials removed, hidden damage logged in the file.",
            },
            {
              number: "5",
              title: "Rebuild",
              description:
                "Mechanical, inspections, drywall, paint, floors, keys returned.",
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
            "We replace neither your insurer nor the adjuster. We supply the technical substance.",
          items: [
            {
              title: "A room-by-room scope",
              description: "every damage described, instead of one lump sum.",
            },
            {
              title: "A price per item",
              description:
                "demolition, mechanical, materials and finishing costed apart.",
            },
            {
              title: "Photo documentation",
              description: "condition before work, test openings, hidden damage.",
            },
            {
              title: "Upgrades kept separate",
              description: "anything beyond the loss sits on its own lines.",
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
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Damage assessment before a room is rebuilt",
          },
          cardTitle: "One point of contact",
          cardDescription:
            "The same contractor signs the quote, coordinates the trades and answers the adjuster's technical questions.",
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
              a: "No. Emergency work, pumping and decontamination go to specialized firms, often hired by the insurer. We take over once the place is dry and measured.",
            },
            {
              q: "Do you work with my insurer?",
              a: "We hand over the written scope, the itemized quote and the photos the claim needs, and we answer the adjuster. You remain the insured and the contact on file.",
            },
            {
              q: "Can I choose my own contractor after a loss?",
              a: "As a rule yes, even when the insurer suggests firms from its network. Check the wording of your policy. We provide documents so our quote can be compared.",
            },
            {
              q: "What if you uncover more damage?",
              a: "Common behind a flooded wall. We photograph it, price it in writing and let you file a supplementary claim before we continue. Nothing gets closed over a known problem.",
            },
            {
              q: "Is a permit required to rebuild?",
              a: "Often. As soon as the rebuild touches structure, moves plumbing or refinishes a basement as living space, the city requires one. We verify and file the application.",
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
            "We document the damage, build the quote, then rebuild under a single contract.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
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
