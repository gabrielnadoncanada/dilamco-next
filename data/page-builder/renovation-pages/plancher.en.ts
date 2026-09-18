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
          heading: "What holds a floor up sits underneath it",
          description:
            "Substrate, flatness and moisture measured before installation. Thresholds and levels settled on the plan.",
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
          badges: ["Substrate checked", "Written contract"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Residential flooring renovation by a general contractor",
          },
          imageSide: "left",
          caption: "Floors redone across the West Island",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the flooring mandate covers",
          columns: "2",
          items: [
            {
              title: "Tear-out and reading",
              description: "A substrate is judged bare",
              icon: "hammer",
              bullets: [
                "Finishes, baseboards and thresholds removed",
                "Water stains and soft panels located",
                "Moisture read on slab or on wood",
              ],
            },
            {
              title: "Substrate repair",
              description: "The line installers bill as an extra",
              icon: "ruler",
              bullets: [
                "Damaged panels swapped, screwing redone",
                "Levelling to the product's own tolerance",
                "Joists reinforced where the floor sags",
              ],
            },
            {
              title: "Installation",
              description: "Hardwood, engineered, vinyl or tile",
              icon: "layers",
              bullets: [
                "Wood acclimatized indoors before laying",
                "Membrane or underlay chosen by storey",
                "Expansion gaps respected throughout",
              ],
            },
            {
              title: "Thresholds and trim",
              description: "The details of a clean install",
              icon: "slidersHorizontal",
              bullets: [
                "Room-to-room transitions planned ahead",
                "Stair nosings and landing details",
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
          heading: "How a floor unfolds",
          steps: [
            {
              number: "1",
              title: "Level survey",
              description:
                "Areas, flatness, differences between rooms and existing thresholds.",
            },
            {
              number: "2",
              title: "Tear-out",
              description:
                "Site protected, old finishes removed, substrate exposed.",
            },
            {
              number: "3",
              title: "Repair",
              description:
                "Panels replaced, full re-screwing, joists addressed if needed.",
            },
            {
              number: "4",
              title: "Levelling and drying",
              description:
                "Compound poured, drying time written into the schedule.",
            },
            {
              number: "5",
              title: "Install and thresholds",
              description:
                "Flooring, transitions, baseboards, doors trimmed, site returned.",
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
          heading: "When flooring belongs in the schedule",
          intro:
            "The order of trades moves the invoice as much as the product you pick.",
          items: [
            {
              title: "After mechanical and paint",
              description: "new flooring under an open site gets marked up.",
            },
            {
              title: "Before the cabinets",
              description: "avoids a height mismatch if an appliance changes.",
            },
            {
              title: "Levels set on the plan",
              description: "tile, wood and vinyl are not the same thickness.",
            },
            {
              title: "On a concrete slab",
              description: "insulated subfloor or an uncoupling membrane first.",
            },
          ],
          actions: [
            {
              label: "See the kitchen",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "See the basement",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Subfloor preparation before a flooring installation",
          },
          cardTitle: "One schedule",
          cardDescription:
            "Tying the floor into the cabinets, the bathroom and the staircase falls under the same contract.",
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
              q: "Why does my floor squeak?",
              a: "Almost always the substrate: loose panels, missing screws, plywood too thin. The surface only reveals the fault. We tear out, re-screw and replace what has moved.",
            },
            {
              q: "Can new flooring go over the old one?",
              a: "Rarely a good idea. Height goes up, doors rub, thresholds get awkward and the substrate stays hidden. We recommend tearing out, unless the quote notes an exception.",
            },
            {
              q: "Which flooring suits a basement?",
              a: "We read the slab moisture first. Luxury vinyl and tile handle it well. Solid hardwood laid straight on concrete is the one to avoid.",
            },
            {
              q: "Do I need a permit to redo a floor?",
              a: "Not to change a surface. A permit is needed once the structure moves: joists altered, a stairwell opened, a slab lowered. We check with your city first.",
            },
            {
              q: "Why let hardwood acclimatize?",
              a: "Wood swells and shrinks with indoor humidity. Laid too soon, it opens gaps in winter. A few days in the house at normal temperature settles it.",
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
            "We measure flatness, open a corner of the substrate, then price the work.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Substrate, levelling, install and thresholds",
        },
      },
    },
  ],
};
