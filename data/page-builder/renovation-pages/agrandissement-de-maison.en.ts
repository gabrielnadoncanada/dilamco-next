import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Home addition in Montreal — turnkey general contractor",
    description:
      "Residential addition: zoning, permit, foundation, structure, envelope and service connections. RBQ-licensed general contractor.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Home addition by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Home addition",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Home addition",
    description:
      "Residential addition by a general contractor: zoning verification, building permit, engineered drawings, foundation, structure, envelope, service connections and interior finishing.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Residential addition",
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
          eyebrow: "Home addition",
          heading: "Home addition, from the zoning to the finishing",
          description:
            "We check the zoning, have the drawings made, pour the foundation and tie the new space into your house.",
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
          badges: ["Building permit", "Engineered drawings"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Residential addition under construction",
          },
          imageSide: "left",
          caption: "Additions in the West Island and Laval",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What an addition includes",
          columns: "2",
          items: [
            {
              title: "Checks and permit",
              description: "We look at what the city allows before drawing",
              icon: "fileCheck",
              bullets: [
                "We read the required setbacks and the allowed height",
                "We survey the foundation, the structure and the services",
                "The engineer's sealed drawings go with the application",
              ],
            },
            {
              title: "Digging and foundation",
              description: "This is what carries the whole addition",
              icon: "hardHat",
              bullets: [
                "We locate the underground services before digging",
                "We pour the footings below the frost line",
                "We lay the drain and damp-proof the foundation",
              ],
            },
            {
              title: "Framing, walls and roof",
              description: "We close the building in before winter",
              icon: "building2",
              bullets: [
                "We raise the framing to the engineer's drawings",
                "We install a beam wherever the wall is opened",
                "Roof, windows and siding matched to your house",
              ],
            },
            {
              title: "Connections and finishing",
              description: "The new room is joined to the house",
              icon: "wrench",
              bullets: [
                "We extend the heating, the ventilation and the circuits",
                "We have it inspected before the walls close",
                "We hang the drywall, paint and level the floors",
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
          heading: "The stages of an addition",
          steps: [
            {
              number: "1",
              title: "Checking the lot",
              description:
                "We read the zoning and the location certificate to see what is allowed.",
            },
            {
              number: "2",
              title: "Drawings and engineer",
              description:
                "An engineer calculates the loads and seals the construction drawings.",
            },
            {
              number: "3",
              title: "Permit and contract",
              description:
                "We file with the city and sign the schedule with you.",
            },
            {
              number: "4",
              title: "Foundation and structure",
              description:
                "We dig, pour the foundation, raise the framing and the roof.",
            },
            {
              number: "5",
              title: "Connections and finishing",
              description:
                "We extend the services, have it inspected, then finish the walls.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "The kinds of addition that are possible",
          intro:
            "The lot and the city by-law usually decide before your original wish does.",
          items: [
            {
              title: "Extension at the back",
              description: "the most common one, if the yard leaves enough room.",
            },
            {
              title: "Extension on the side",
              description: "possible depending on the distance to your neighbour.",
            },
            {
              title: "Adding a storey",
              description: "possible if the foundation can carry the added weight.",
            },
            {
              title: "Primary suite or garage",
              description: "a room attached to the house and heated with it.",
            },
          ],
          actions: [
            {
              label: "See the kitchen",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Addition under construction tied into an existing house",
          },
          cardTitle: "What we look at first",
          cardDescription:
            "Access to the lot for the machinery, where the electrical entrance and the drain sit, and the daylight your current windows will lose.",
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
              q: "Does my lot allow an addition?",
              a: "The zoning by-law sets the setbacks you must respect, how much of the lot you may cover and the permitted height. We read those against your location certificate.",
            },
            {
              q: "Do I need a permit to add on?",
              a: "Always. Adding floor area changes the footprint of the building, so a building permit is required, with the structural drawings, the sections and the elevations.",
            },
            {
              q: "Do I need an engineer?",
              a: "In nearly every case. Footings, framing and any replacement beam call for a load calculation. The sealed drawings go with the application and guide the site.",
            },
            {
              q: "How long does an addition take?",
              a: "Count in months. The paperwork, meaning the checks, the drawings and the city's review, often takes as long as the foundation itself.",
            },
            {
              q: "Add on or build new?",
              a: "We do not build new houses. Our work always starts from an existing building. For many families an extension costs less than moving.",
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
          heading: "Have your addition project checked",
          intro:
            "We start by reading the zoning and the foundation to see what is allowed at your address.",
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
          note: "RBQ licence 8306-0806-27 · Zoning, permit, engineer and foundations",
        },
      },
    },
  ],
};
