import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const contreplaquePageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Plywood cabinets: stability and durability",
    description:
      "Plywood: stability, screw-holding strength and durability for the structure of custom cabinets.",
    path: "/materiaux/contreplaque",
    ogAlt: "Plywood - Custom materials",
    ogImage: {
      url: "/images/generated/materials/material-plywood-hero-01.webp",
      alt: "Plywood - Custom materials",
      width: 1200,
      height: 630,
    },
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    {
      name: "Why plywood",
      url: SITE.url + "/materiaux/contreplaque",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Materials",
          heading: "Plywood holds the structure of your cabinets",
          description:
            "Wood plies glued with the grain crossed. The result is a panel far more stable than particleboard, and one that keeps its screws.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Structure", "Stability", "Boxes"],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Custom kitchen with a durable structure",
          },
          caption: "Boxes, drawers and parts under load",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why it serves as structure",
          description:
            "Crossing the grain from one ply to the next locks the wood's movement. That is what gives the panel its mechanical strength.",
          cards: [
            {
              title: "Cross-grain plies",
              description:
                "The panel barely moves, even over tall runs.",
            },
            {
              title: "Screw retention",
              description:
                "Hinges and slides stay tight after thousands of cycles.",
            },
            {
              title: "Load capacity",
              description:
                "Shelves and drawer bottoms sag less under weight.",
            },
            {
              title: "Higher cost",
              description:
                "The gap pays off on the parts under stress, not on everything.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "limits",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What to watch for",
          intro:
            "Plywood is not waterproof. The grade, the edges and the installation decide the result.",
          items: [
            {
              title: "Grade changes everything",
              description: "Ply count, internal voids, quality of the glue.",
            },
            {
              title: "Edges must be closed",
              description: "Visible or water-exposed edges have to be sealed.",
            },
            {
              title: "Wet areas",
              description: "Under sinks and in bathrooms, we protect more.",
            },
          ],
          actions: [
            {
              label: "Compare materials",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
            {
              label: "View hardware",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-detail-01.webp",
            alt: "Detail of a custom kitchen in plywood",
          },
          cardTitle: "Key takeaway",
          cardDescription:
            "An excellent structural choice, provided the grade and the edges are handled properly.",
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
              q: "Plywood or MDF?",
              a: "Both, in different places. Plywood for boxes and drawers, because it holds screws. MDF for painted doors, because its surface is smoother.",
            },
            {
              q: "Is it more expensive?",
              a: "Yes, generally more than MDF or particleboard. The gap pays for itself on the parts used every day: boxes, drawers, loaded shelves.",
            },
            {
              q: "Is it suitable for a bathroom?",
              a: "Yes, with sealed edges, a finish that protects the surface and decent ventilation. Steam attacks panels through their edges first.",
            },
            {
              q: "Is it visible once installed?",
              a: "No, unless that is a deliberate design choice. The plies can be left exposed on an edge or a shelf as a visual statement.",
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
          heading: "Looking for a structure that lasts?",
          intro:
            "We tell you where plywood actually makes a difference in your project.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Compare materials",
              href: "/materiaux/comparatif",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
