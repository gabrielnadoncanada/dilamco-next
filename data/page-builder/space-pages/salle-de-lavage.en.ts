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
            "A high-performing laundry room relies on organization, durability and clean execution suited to moisture and frequent use.",
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
              href: "/",
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
              a: "The price depends on the configuration, materials, storage and the technical constraints of the space.",
            },
            {
              q: "Can you coordinate other work?",
              a: "Yes, depending on the project scope. The goal is to reduce fragmentation when it's relevant.",
            },
            {
              q: "Which materials do you recommend?",
              a: "Stable, durable choices suited to moisture and frequent use.",
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
