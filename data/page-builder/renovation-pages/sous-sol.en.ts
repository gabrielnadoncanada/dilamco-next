import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSousSolPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Basement finishing in Montreal — turnkey",
    description:
      "Basement finishing: moisture, drainage, insulation, vapour barrier, egress, permit and plumbing. RBQ-licensed general contractor.",
    path: "/services/renovation/sous-sol",
    ogAlt: "Basement finished by a general contractor in Montreal",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Basement finishing",
      url: SITE.url + "/services/renovation/sous-sol",
    },
  ],
  service: {
    name: "Basement finishing",
    description:
      "Basement conversion and finishing by a general contractor: moisture and drainage assessment, insulation, vapour control, permit, egress, electrical, plumbing and finishing.",
    url: SITE.url + "/services/renovation/sous-sol",
    serviceType: "Basement finishing",
    areaServed: [
      "Montreal",
      "West Island",
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
          eyebrow: "Basement finishing",
          heading: "Solve the moisture before a single panel goes up",
          description:
            "Diagnosis, drainage, insulation, permit, egress and finishing. One contract, from bare basement to handover.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement layouts",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Permit required", "Moisture and drainage", "Firm price"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement finished and fitted out by a general contractor",
          },
          caption: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the mandate covers",
          intro:
            "The first two parts disappear once they are done. They are the ones that hold.",
          columns: "2",
          items: [
            {
              title: "Diagnosis, water and permit",
              description: "The stage everything else depends on",
              icon: "droplets",
              bullets: [
                "Foundation, slab and signs of seepage inspected",
                "Drainage, ground slope and sump pump checked",
                "Cracks repaired, conversion permit filed",
              ],
            },
            {
              title: "Insulation and framing",
              description: "The wall that settles the moisture for twenty years",
              icon: "layers",
              bullets: [
                "Continuous insulation against the concrete, vapour handled properly",
                "Studs held back from the wall, off the slab",
                "Rim joists and slab perimeter insulated",
              ],
            },
            {
              title: "Electrical, plumbing, egress",
              description: "The work inspected before the walls close",
              icon: "wrench",
              bullets: [
                "Circuits, lighting, smoke and carbon monoxide alarms",
                "Egress window or exterior door for any bedroom",
                "Bathroom: slab drain or sewage ejector pump",
              ],
            },
            {
              title: "Floors, ceiling, finishing",
              description: "The visible part, set on a sound base",
              icon: "package2",
              bullets: [
                "Basement-rated flooring over an insulating subfloor",
                "Suspended ceiling or drywall, depending on service access",
                "Paint, doors, mouldings, stairs and built-in storage",
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
          heading: "The job, step by step",
          steps: [
            {
              number: "1",
              title: "Visit and diagnosis",
              description:
                "Foundation, slab, drainage, sump pump and headroom inspected.",
            },
            {
              number: "2",
              title: "Layout and quote",
              description:
                "Layout drawing, written scope and estimate within 24 to 48 hours.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Schedule signed, permit application filed with the required drawings.",
            },
            {
              number: "4",
              title: "Corrective work",
              description:
                "Cracks, drainage, pump. We never finish over an active leak.",
            },
            {
              number: "5",
              title: "Structure, mechanical, finishing",
              description:
                "Insulation, egress, electrical, plumbing, inspections, then drywall and finishes.",
            },
          ],
        },
      },
    },
    {
      id: "permis",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Permit, egress and compliance",
          intro:
            "Turning a bare basement into living space requires a permit. We prepare and file the application.",
          items: [
            {
              title: "Conversion permit",
              description: "Required as soon as habitable rooms are added.",
            },
            {
              title: "Egress window",
              description: "Mandatory for any bedroom: accessible window or door.",
            },
            {
              title: "Headroom",
              description: "A minimum height is required for recognized living space.",
            },
            {
              title: "Electrical and alarms",
              description: "Inspected circuits, smoke and carbon monoxide alarms.",
            },
            {
              title: "Secondary suite",
              description: "Zoning, separate entrance, fire separation: a different scope.",
            },
          ],
          actions: [
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Materials and finishes suited to a basement conversion",
          },
          cardTitle: "Why the permit protects you",
          cardDescription:
            "A basement finished with a permit and inspections counts as living area and does not turn into a dispute with your insurer.",
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
              q: "What does finishing a basement cost?",
              a: "A basic conversion starts around $25,000. A complete basement with a bedroom, bathroom and built-in storage often lands between $40,000 and $80,000 and up. Corrective work is priced separately.",
            },
            {
              q: "Do I need a permit to finish a basement?",
              a: "Yes. Converting a basement into living space requires a conversion permit in Montreal and in the vast majority of municipalities, with a drawing to support it. We file the application for you.",
            },
            {
              q: "My basement takes on water. Can it still be finished?",
              a: "Not before the water is stopped: foundation crack, blocked weeping tile, ground sloping toward the house, gutters or sump pump. Finishing over an active leak guarantees redoing all of it.",
            },
            {
              q: "Can I put a bedroom in the basement?",
              a: "Yes, provided there is an egress opening: an accessible operable window of sufficient size, or a door leading outside. That often means cutting the foundation wall and installing a window well.",
            },
            {
              q: "Can a bathroom be added?",
              a: "Yes. Depending on where the main drain sits, we either break the slab to connect by gravity or install an ejector pump. Ventilation, water supply and inspection before closing up come with it.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes, with the scope and duration written into the contract. RBQ licence 8306-0806-27, valid with no restrictions since 2004, $40,000 bond, no claims on file. Liability and job-site insurance in force.",
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
          heading: "Have your basement assessed",
          intro:
            "Free estimate, permit included. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Moisture, insulation, permit and egress",
        },
      },
    },
  ],
};
