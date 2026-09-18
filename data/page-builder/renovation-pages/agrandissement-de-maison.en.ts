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
          heading: "Gain a room without leaving your neighbourhood",
          description:
            "Zoning verified, drawings sealed, footings poured below the frost line and a clean tie-in to the house.",
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
          heading: "What the addition mandate covers",
          columns: "2",
          items: [
            {
              title: "Feasibility and file",
              description: "Checked before anything is drawn",
              icon: "fileCheck",
              bullets: [
                "Setbacks, height and lot coverage",
                "Foundation, structure and services surveyed",
                "Sealed drawings filed with the application",
              ],
            },
            {
              title: "Excavation and foundation",
              description: "The part that carries everything",
              icon: "hardHat",
              bullets: [
                "Underground services located before digging",
                "Footings poured below the frost line",
                "Drain, damp-proofing, draining backfill",
              ],
            },
            {
              title: "Framing and envelope",
              description: "Closed in before the weather decides",
              icon: "building2",
              bullets: [
                "Framing raised to the sealed drawings",
                "Opened wall's load carried by a beam",
                "Roof, air barrier, windows, matched siding",
              ],
            },
            {
              title: "Connections and finishing",
              description: "The room joins the house",
              icon: "wrench",
              bullets: [
                "Heating, ventilation and circuits extended",
                "Inspections before the walls close",
                "Drywall, paint, floors brought to level",
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
          heading: "How an addition unfolds",
          steps: [
            {
              number: "1",
              title: "Feasibility",
              description:
                "Zoning, location certificate and allowable area reviewed.",
            },
            {
              number: "2",
              title: "Drawings and engineer",
              description:
                "Construction drawings and load calculations by an engineer.",
            },
            {
              number: "3",
              title: "Permit and contract",
              description:
                "File submitted to the city, schedule and budget signed.",
            },
            {
              number: "4",
              title: "Foundation and structure",
              description:
                "Excavation, footings, drain, framing, roof, envelope closed.",
            },
            {
              number: "5",
              title: "Mechanical and finishing",
              description:
                "Services extended, inspections, drywall, floors, then handover.",
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
          heading: "The shapes an addition can take",
          intro:
            "The lot and the zoning by-law usually decide before the original wish does.",
          items: [
            {
              title: "Rear extension",
              description: "the most common, if the yard leaves the setback.",
            },
            {
              title: "Side extension",
              description: "depends on the distance to the neighbouring lot line.",
            },
            {
              title: "Second storey",
              description: "possible when the foundation carries the added load.",
            },
            {
              title: "Primary suite or garage",
              description: "an attached volume tied into the home's heating.",
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
          cardTitle: "What we weigh first",
          cardDescription:
            "Site access for excavation, position of the electrical entrance and the drain, daylight reaching the existing windows.",
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
              a: "The zoning by-law sets the setbacks, the buildable share of the lot and the permitted height. We read those against your location certificate before anything gets drawn.",
            },
            {
              q: "Do I need a permit to add on?",
              a: "Always. Adding floor area changes the building's footprint, so a building permit is required, together with sections, elevations and structural drawings.",
            },
            {
              q: "Do I need an engineer for an addition?",
              a: "In nearly every case. Footings, framing and any replacement beam rest on a load calculation. The sealed drawings go with the application and guide the site.",
            },
            {
              q: "How long does an addition take?",
              a: "Count in months. The paper phase, feasibility, drawings and municipal review, often weighs as much as the foundation. The detailed schedule comes with the contract.",
            },
            {
              q: "Add on or build new?",
              a: "We do not build new houses. Our work always starts from an existing building: extending, converting, rebuilding. For many families an extension costs less than moving.",
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
          heading: "An addition to validate?",
          intro:
            "First step, read the zoning and the foundation to see what is truly allowed.",
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
