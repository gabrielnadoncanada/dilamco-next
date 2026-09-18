import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const commercialPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Commercial construction and fit-outs in Montréal",
    description:
      "Commercial construction and fit-outs in Montréal: offices, retail, leasehold improvements and multi-unit buildings, by a licensed general contractor.",
    path: "/espaces/commercial",
    ogAlt: "Dilamco commercial construction and fit-outs",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial" },
  ],
  service: {
    name: "Commercial construction and fit-outs",
    description:
      "Renovation and fit-out of offices, retail spaces and multi-unit buildings, leasehold improvements and built-in cabinetry, by a licensed general contractor (RBQ).",
    url: SITE.url + "/espaces/commercial",
    serviceType: "Commercial construction and fit-outs",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Commercial",
          heading: "Commercial fit-outs delivered on the agreed date",
          description:
            "Offices, retail, leasehold improvements and multi-unit buildings. Permit, trades and schedule under one accountability.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Offices", "Retail", "Multi-unit"],
          image: {
            src: "/images/generated/spaces/space-commercial-hero-01.webp",
            alt: "Custom commercial fit-out in Montréal and Greater Montréal",
          },
          caption: "Montréal · Laval · South Shore · Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What the mandate covers",
          description:
            "A unit closed longer than planned is expensive. The sequence is set before the walls open.",
          cards: [
            {
              title: "Permit and compliance",
              description: "Plans, city application and work compliant with the Québec Construction Code.",
            },
            {
              title: "Phased work",
              description: "After-hours intervention when the space has to stay open.",
            },
            {
              title: "One party accountable",
              description: "Partitions, electrical, plumbing, venting, flooring and paint coordinated.",
            },
            {
              title: "Built-in millwork",
              description: "Reception, technical storage and service areas from our cabinet division.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Commercial projects",
          items: [
            {
              title: "Office fit-out",
              href: "/projets",
              description: "Downtown space reworked and handed over ready to occupy.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Commercial project in Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "View project",
            },
            {
              title: "Leasehold improvements",
              href: "/projets",
              description: "Space adapted to the tenant, within the lease terms.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Commercial project in Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "View project",
            },
            {
              title: "Built-in commercial millwork",
              href: "/projets",
              description: "Reception and technical storage installed with the rest.",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Commercial project on the South Shore",
              },
              badges: ["South Shore"],
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
          heading: "Frequently asked questions",
          items: [
            {
              q: "What kinds of commercial projects do you take on?",
              a: "Offices, retail, service spaces, leasehold improvements within the lease terms and work in multi-unit buildings. Built-in millwork is supplied by our cabinet division when the project calls for it.",
            },
            {
              q: "Can you work around our opening hours?",
              a: "Yes, when the sequence is set during planning. The work is split into phases, and after-hours interventions are written into the contract with their dates.",
            },
            {
              q: "Do you handle permits and compliance?",
              a: "Yes. City permit application, inspection coordination and work compliant with the Québec Construction Code. RBQ licence 8306-0806-27, classes 1.2 and 1.3, liability and site insurance.",
            },
            {
              q: "How long does a commercial fit-out take?",
              a: "Mostly it depends on the permit and the scope. The schedule is set in the contract after scoping. Built-in millwork takes 9 to 15 weeks, ordered alongside the work.",
            },
            {
              q: "Where do you work?",
              a: "Our base is in the West Island. We work in Montréal, Laval, on the South Shore and in Vaudreuil-Soulanges.",
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
          heading: "Tell us about your commercial project",
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, South Shore, Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
