import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Turnkey renovation — general contractor in Montreal",
    description:
      "Turnkey renovation: permits, coordinated trades, schedule and written contract. RBQ-licensed general contractor since 2004.",
    path: "/services/renovation",
    ogAlt: "Turnkey renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Turnkey renovation", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Turnkey renovation",
    description:
      "General contractor accountable for the whole project: permit application, trade coordination, inspections, schedule and handover, under RBQ licence 8306-0806-27.",
    url: SITE.url + "/services/renovation",
    serviceType: "Turnkey residential renovation",
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
        variant: "centered",
        props: {
          badges: ["Permit included", "Written contract", "Insured"],
          heading: "One contractor, from the permit to the handover",
          description:
            "We hire and pay the trades, and we answer for the result in front of you.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The six kinds of renovation we do",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "We redo the whole room and we supply the cabinets.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Full kitchen renovation",
              },
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "We waterproof the shower and vent the fan outdoors.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Full bathroom renovation",
              },
              footerCtaLabel: "See bathroom",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "We settle the moisture before the first wall goes up.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished by a general contractor",
              },
              footerCtaLabel: "See basement",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "We repair the subfloor before laying the new floor.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Residential flooring renovation",
              },
              footerCtaLabel: "See flooring",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "We check the zoning, then we build the new room.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Home addition under construction",
              },
              footerCtaLabel: "See addition",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "We document the damage, then put the house back together.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rebuild after water damage",
              },
              footerCtaLabel: "See disaster rebuild",
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
          heading: "How we run a project",
          steps: [
            {
              number: "1",
              title: "Call and visit",
              description:
                "We come see the place and note the constraints, at no charge.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "You get the work, the materials, the exclusions and the price.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "You sign the dates and the payments, we file the application.",
            },
            {
              number: "4",
              title: "Site work",
              description:
                "Each trade shows up on its date, following the signed schedule.",
            },
            {
              number: "5",
              title: "Handover",
              description:
                "We walk through with you and fix things before the final payment.",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "What a turnkey mandate covers",
          rows: [
            {
              label: "What you sign",
              value: "A contract setting out the work, the price, the dates and the payments",
            },
            {
              label: "Who files the permit",
              value: "We do. We check your city's requirements and follow the file",
            },
            {
              label: "Who coordinates the trades",
              value: "We hire them and we pay them, you receive a single invoice",
            },
            {
              label: "Insurance",
              value: "Our civil liability and builder's risk coverage are in force",
            },
            {
              label: "First reply",
              value: "You hear back from us within 24 to 48 business hours",
            },
            {
              label: "Territory",
              value: "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
            },
          ],
          note: "Licence valid since 2004, categories 1.2 and 1.3: renovation and additions, not new construction.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Tell us about your renovation project",
          intro:
            "Give us the room, the budget in mind and the deadline. We book the visit.",
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
