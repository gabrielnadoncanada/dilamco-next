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
          heading: "Rebuilding after water damage or a fire",
          description:
            "We come in once the place is dry, describe the damage room by room, then rebuild.",
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
          heading: "What we rebuild after a loss",
          intro:
            "Pumping and decontamination are done by emergency firms. We rebuild afterwards.",
          columns: "2",
          items: [
            {
              title: "Water damage",
              description: "Sewer backup, burst pipe or flooding",
              icon: "droplets",
              bullets: [
                "We open the walls to see how far the water went",
                "We replace the drywall, the insulation and the subfloor",
                "We check the joists before anything closes",
              ],
            },
            {
              title: "Fire and smoke",
              description: "Soot and odour stay inside the materials",
              icon: "hardHat",
              bullets: [
                "We demolish the affected sections completely",
                "We rebuild the structure, the walls and the roof to drawings",
                "We rebuild the room, from the framing to the paint",
              ],
            },
            {
              title: "Mould",
              description: "Almost always the result of a slow leak",
              icon: "shieldCheck",
              bullets: [
                "We rebuild after the specialized decontamination",
                "We correct the cause: ventilation, sealing or drain",
                "We choose materials that handle humidity",
              ],
            },
            {
              title: "Flooded basement",
              description: "The most common case near the river",
              icon: "layers",
              bullets: [
                "We cut the finishes and insulation back to sound height",
                "We re-examine the drain, the pump and the cracks",
                "We apply for the permit if the basement is refinished",
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
              title: "Site visit",
              description:
                "We come once the place is dry and open the walls in spots.",
            },
            {
              number: "2",
              title: "Description and price",
              description:
                "We describe the damage room by room, with photos and a price.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "We sign, then file an application if the structure is affected.",
            },
            {
              number: "4",
              title: "Demolition",
              description:
                "We remove the damaged materials and log any hidden damage.",
            },
            {
              number: "5",
              title: "Rebuild",
              description:
                "Plumbing, wiring, drywall, paint, floors, then the keys go back.",
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
          heading: "What we provide for your claim",
          intro:
            "We replace neither your insurer nor the adjuster. We provide the technical documents.",
          items: [
            {
              title: "The list of damage, room by room",
              description: "every item described, instead of one lump sum.",
            },
            {
              title: "A price for each kind of work",
              description:
                "demolition, plumbing, materials and finishing costed separately.",
            },
            {
              title: "Photos of everything",
              description: "the state before work, the openings made, the hidden damage.",
            },
            {
              title: "Upgrades kept apart",
              description: "anything unrelated to the loss sits on its own lines.",
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
          cardTitle: "One person to talk to",
          cardDescription:
            "The same contractor signs the quote, coordinates the trades and answers the claims adjuster's questions.",
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
              a: "No. Emergency work, pumping and decontamination go to specialized firms, often sent by the insurer. We take over once the place is dry.",
            },
            {
              q: "Do you work with my insurer?",
              a: "We hand over the list of damage, the detailed price and the photos your claim needs, and we answer the adjuster. You remain the insured and the contact.",
            },
            {
              q: "Can I choose my own contractor after a loss?",
              a: "As a rule yes, even when the insurer suggests firms from its network. Check your policy. We provide what is needed so our price can be compared.",
            },
            {
              q: "What if you uncover more damage?",
              a: "That is common behind a flooded wall. We photograph it, price it in writing and let you add to your claim before we carry on.",
            },
            {
              q: "Is a permit required to rebuild?",
              a: "Often. As soon as the rebuild touches the structure, moves plumbing or refinishes a basement as living space, the city requires one. We file the application.",
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
          heading: "Have the damage assessed at your home",
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
