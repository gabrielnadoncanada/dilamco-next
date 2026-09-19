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
          heading: "Flooring renovation, from tear-out to installation",
          description:
            "We check the subfloor and the moisture before we lay your new flooring.",
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
          heading: "What a flooring job includes",
          columns: "2",
          items: [
            {
              title: "Tearing out the old floor",
              icon: "hammer",
              bullets: [
                "We remove the flooring, the baseboards and the thresholds",
                "We look for water stains and soft panels",
                "We measure the moisture in the concrete or the wood",
              ],
            },
            {
              title: "Subfloor repair",
              icon: "ruler",
              bullets: [
                "We change damaged panels and re-screw the rest",
                "We level to what the new flooring can tolerate",
                "We reinforce the joists where the floor sags",
              ],
            },
            {
              title: "Laying the new floor",
              icon: "layers",
              bullets: [
                "We let the wood acclimatize inside the house",
                "We pick the membrane for the storey and the substrate",
                "We leave the expansion gap the wood needs",
              ],
            },
            {
              title: "Thresholds, baseboards and doors",
              icon: "slidersHorizontal",
              bullets: [
                "We plan the transitions from one room to the next",
                "We redo the stair nosings and the landing details",
                "We put the baseboards back and trim the doors",
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
          heading: "How we redo a floor",
          steps: [
            {
              number: "1",
              title: "Measurements",
              description:
                "We measure the areas and the height differences between rooms.",
            },
            {
              number: "2",
              title: "Tear-out",
              description:
                "We protect the house and take out the old flooring.",
            },
            {
              number: "3",
              title: "Repair",
              description:
                "We replace damaged panels and re-screw the whole subfloor.",
            },
            {
              number: "4",
              title: "Levelling",
              description:
                "We pour the levelling compound and let it dry properly.",
            },
            {
              number: "5",
              title: "Install and thresholds",
              description:
                "We lay the floor, the thresholds and the baseboards, then trim the doors.",
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
          heading: "When to lay the floor",
          intro:
            "The order of the trades changes the invoice as much as the flooring you pick.",
          items: [
            {
              title: "After the plumbing and the paint",
              description: "a new floor gets marked up if the site is still open.",
            },
            {
              title: "Before the cabinets",
              description: "it avoids a height mismatch if an appliance changes.",
            },
            {
              title: "Heights are decided on the plan",
              description: "tile, wood and vinyl are not the same thickness.",
            },
            {
              title: "On a concrete slab",
              description: "an insulated subfloor or a membrane comes first.",
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
              a: "Almost always the subfloor: loose panels, missing screws, plywood that is too thin. The surface only reveals the fault. We tear out, re-screw and replace.",
            },
            {
              q: "Can new flooring go over the old one?",
              a: "It is rarely a good idea. The height goes up, doors rub, thresholds get awkward and you never see what is underneath. We recommend tearing out.",
            },
            {
              q: "Which flooring suits a basement?",
              a: "We measure the moisture in the concrete first. Good vinyl and tile handle it well. Solid hardwood laid straight on concrete is the one to avoid.",
            },
            {
              q: "Do I need a permit to redo a floor?",
              a: "Not to change a surface. You need one as soon as the structure moves: joists altered, an opening cut for stairs, a slab lowered. We check with your city.",
            },
            {
              q: "Why let hardwood acclimatize?",
              a: "Wood swells and shrinks with the humidity in the house. Laid too soon, it opens gaps in winter. A few days indoors at normal temperature settles it.",
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
          heading: "A floor to redo? Let's talk.",
          intro:
            "We measure the levels, open a corner of the subfloor, then price the work.",
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
        },
      },
    },
  ],
};
