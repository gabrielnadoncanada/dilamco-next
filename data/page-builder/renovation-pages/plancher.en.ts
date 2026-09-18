import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Flooring renovation in Montreal — general contractor",
    description:
      "Flooring renovation: subfloor, flatness, levels, transitions and installation. RBQ-licensed general contractor, written contract.",
    path: "/services/renovation/plancher",
    ogAlt: "Flooring renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Flooring renovation",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Flooring renovation",
    description:
      "Flooring replacement by a general contractor: subfloor assessment, level correction, transitions between rooms, installation and finishing, coordinated with the rest of the job.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Flooring renovation",
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
          eyebrow: "Flooring renovation",
          heading: "A floor that holds starts under the surface",
          description:
            "Subfloor, flatness and moisture checked before installation. Thresholds and transitions settled on the plan.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Subfloor checked", "Written contract"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Residential flooring renovation by a general contractor",
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
          columns: "2",
          items: [
            {
              title: "Tear-out and diagnosis",
              description: "We see the subfloor before pricing the install.",
              icon: "hammer",
              bullets: [
                "Old flooring, baseboards and thresholds removed",
                "Subfloor and water staining inspected",
                "Moisture tested on slab or wood",
              ],
            },
            {
              title: "Fixing the base",
              description: "The step most installers bill as an extra.",
              icon: "ruler",
              bullets: [
                "Damaged panels replaced, everything re-screwed",
                "Levelling to the flooring's stated tolerance",
                "Joists reinforced where sagging shows",
              ],
            },
            {
              title: "Installation",
              description: "Hardwood, engineered, vinyl or tile.",
              icon: "layers",
              bullets: [
                "Wood acclimatized before installation",
                "Membrane or underlay chosen by floor level",
                "Perimeter expansion gaps respected",
              ],
            },
            {
              title: "Thresholds and finishing",
              description: "The details that set a clean install apart.",
              icon: "slidersHorizontal",
              bullets: [
                "Room-to-room transitions planned ahead",
                "Stair tie-ins and nosings",
                "Baseboards, quarter round, doors trimmed",
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
              title: "Visit and survey",
              description:
                "Areas, flatness, levels between rooms and existing thresholds.",
            },
            {
              number: "2",
              title: "Quote",
              description:
                "Scope and exclusions in writing. Answer within 24 to 48 business hours.",
            },
            {
              number: "3",
              title: "Tear-out",
              description:
                "Premises protected, old flooring removed, subfloor inspected for real.",
            },
            {
              number: "4",
              title: "Subfloor preparation",
              description:
                "Repairs, re-screwing, added subfloor, levelling and drying time.",
            },
            {
              number: "5",
              title: "Install and handover",
              description:
                "Flooring, thresholds, baseboards, doors trimmed, final walkthrough with you.",
            },
          ],
        },
      },
    },
    {
      id: "sequence",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Where flooring fits in the job sequence",
          intro:
            "The order of the work decides the real cost. These are the rules we apply.",
          items: [
            {
              title: "After mechanical work and paint",
              description: "A new floor under an open job site gets marked up.",
            },
            {
              title: "Before the cabinets",
              description:
                "Avoids height mismatches if an appliance changes later.",
            },
            {
              title: "Levels decided on the plan",
              description:
                "Tile, wood and vinyl do not share the same thickness.",
            },
            {
              title: "Basements on slab",
              description:
                "Insulated subfloor or uncoupling membrane before the finish.",
            },
          ],
          actions: [
            {
              label: "See kitchens",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "See basements",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Subfloor prepared before a new floor is installed",
          },
          cardTitle: "One party accountable",
          cardDescription:
            "We answer for the schedule, for protecting the premises and for the tie-in with cabinets, bathroom and stairs.",
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
              q: "Can you install over the old floor?",
              a: "Rarely a good idea: height goes up, doors have to be trimmed, thresholds get awkward and the subfloor stays hidden. We recommend tear-out, unless the quote documents a specific exception.",
            },
            {
              q: "Why does my floor squeak?",
              a: "Almost always the subfloor: loose panels, missing screws, plywood too thin for the joist span. The surface is only the symptom. We tear out, re-screw and replace what is damaged.",
            },
            {
              q: "Do I need a permit?",
              a: "Not to replace a floor covering. A permit is needed as soon as the work touches structure: joists altered, an opening framed, a slab lowered. We confirm with your city before starting.",
            },
            {
              q: "Which floor suits a basement?",
              a: "On a concrete slab we measure moisture first. Luxury vinyl and tile handle the environment well. Solid hardwood is not recommended directly over a slab.",
            },
            {
              q: "What does a floor replacement cost?",
              a: "Three line items: tear-out, subfloor repair and installation. The subfloor is the most variable line from one house to the next. The firm price is set after the survey.",
            },
            {
              q: "How long does the job take?",
              a: "It depends on the area and the condition of the subfloor. Levelling and wood acclimatization add drying and waiting days, written into the contract schedule.",
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
          heading: "A floor to redo?",
          intro:
            "We check flatness and the subfloor, then price the work within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island and Greater Montreal",
        },
      },
    },
  ],
};
