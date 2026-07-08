import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "High-end custom laundry room",
    description:
      "Custom laundry room: design, controlled fabrication and precise installation in Montréal, Laval and on the South Shore.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Dilamco custom laundry room",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    {
      name: "Custom laundry room",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Custom laundry room",
    description:
      "Design, controlled fabrication and installation of custom laundry room cabinets.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Custom laundry room",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Spaces",
          heading: "Custom laundry room, a well-scoped utility space",
          description:
            "A custom laundry room is a technical space — storage, countertop, washer and dryer columns — designed and built for your actual configuration, with materials suited to moisture and frequent use. At Dilamco, across Greater Montréal, we design and install this fit-out from plan to finish.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Functional", "Durable", "Custom"],
          image: {
            src: "/images/generated/spaces/space-laundry-hero-01.webp",
            alt: "Custom laundry room in Pierrefonds and Greater Montréal",
          },
          caption:
            "A service space built to last and stay simple to use",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A laundry space designed as a utility space",
          intro:
            "Custom work is what manages machines, circulation, countertop, vertical storage and moisture constraints in a coherent whole.",
          badges: ["Storage", "Moisture", "Frequent use"],
          cardTitle: "When this approach is useful",
          items: [
            "You need to optimize a tight space.",
            "Storage and a folding countertop matter.",
            "You want a solution more stable than a standard assembly.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
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
          heading: "A clear sequence to reduce surprises",
          intro:
            "The project is scoped from the start to integrate technical constraints, storage and finish.",
          steps: [
            {
              number: "1",
              title: "Analysis",
              description:
                "Plumbing, ventilation, circulation and available depth constraints.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Validation of storage zones, the countertop and access to the machines.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Controlled production with material choices suited to use.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Adjustments and finishes verified on site for clean execution.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Materials that hold up over time",
          intro:
            "In a laundry room, moisture and daily use quickly punish weak or poorly suited choices.",
          items: [
            {
              title: "Robust structure",
              description:
                "Solid birch wood on critical components to better withstand use.",
            },
            {
              title: "Dimensional stability",
              description:
                "Birch plywood to limit warping and better support load.",
            },
            {
              title: "Useful storage",
              description:
                "A configuration designed for baskets, products, countertop and daily access.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our spaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-laundry-project-01.webp",
            alt: "Material detail for a custom laundry room",
          },
          cardTitle: "Concrete impact",
          cardDescription:
            "A more stable structure avoids visible compromises too early and protects the room's usability.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured laundry room projects",
          intro:
            "A few examples of well-executed configurations for frequent use.",
          items: [
            {
              title: "Custom laundry room",
              href: "/projets",
              description:
                "Storage and work surfaces integrated into a compact service space.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Custom laundry room project in Montréal",
              },
              badges: ["Montréal", "Functional"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom laundry room",
              href: "/projets",
              description:
                "A durable layout with vertical storage and a clean finish.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Custom laundry room project in Laval",
              },
              badges: ["Laval", "Durable"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom laundry room",
              href: "/projets",
              description:
                "A project designed to simplify daily use without sacrificing quality.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Custom laundry room project on the South Shore",
              },
              badges: ["South Shore", "Custom"],
              footerCtaLabel: "View project",
            },
          ],
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - custom laundry room",
          intro:
            "The most useful questions before scoping this kind of space.",
          items: [
            {
              q: "How much does a custom laundry room cost?",
              a: "The price of a custom laundry room depends on the configuration (stacked or side-by-side appliances, countertop, sink), the amount of storage, the materials and finishes, and the technical constraints of the space — plumbing, ventilation, available room. Because the space deals with moisture and frequent use, we favour stable materials and durable hardware, which affects the budget. We confirm a precise estimate once the configuration is scoped, to avoid surprises.",
            },
            {
              q: "Can you coordinate other work?",
              a: "Yes, depending on the project scope. The goal is to reduce fragmentation when it's relevant.",
            },
            {
              q: "Which materials do you recommend?",
              a: "For a laundry room, we favour materials that stay stable against moisture and frequent use: panels and finishes resistant to steam and splashes, durable hardware (slides and hinges that keep up with the pace), and countertops that are easy to maintain. The construction details — backs, fastenings, clearances around the appliances — are done carefully to limit warping and extend durability over time. The goal: a space that stays clean and functional despite heavy use.",
            },
            {
              q: "Do you work in Montréal and the surrounding area?",
              a: "Yes. Montréal, Laval and the South Shore are part of our service area.",
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
          heading: "Tell us about your laundry room",
          intro:
            "We help you define a durable, organized and realistic solution for your space.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
