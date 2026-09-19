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
        variant: "centered",
        props: {
          badges: ["Offices", "Retail"],
          heading: "Commercial fit-outs in Montréal, delivered on the agreed date",
          description:
            "Offices, stores and leasehold improvements, done in stages so you can stay open.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/commercial",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Units put back into service",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Office refitted in a downtown Montréal building",
              },
              caption: "Office refit, downtown",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-commercial-project-02.webp",
                alt: "Leasehold improvements carried out in a Laval unit",
              },
              caption: "Leasehold work, Laval",
            },
            {
              kind: "stat",
              value: "1.2 and 1.3",
              label: "Our RBQ classes, valid for any type of building",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-commercial-project-01.webp",
                alt: "Commercial unit delivered ready to occupy in downtown Montréal",
              },
              caption: "Unit ready to occupy",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-commercial-project-03.webp",
                alt: "Reception counter and service storage built into a retail space",
              },
              caption: "Built-in reception millwork",
            },
            {
              kind: "text",
              title: "Work outside opening hours",
              description:
                "We work evenings or overnight so you can keep serving customers.",
              href: "/processus",
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
          heading: "The commercial project in brief",
          intro:
            "What an owner or a tenant should know before a site opens.",
          rows: [
            {
              label: "How long",
              value:
                "The date is set in the contract, and the permit sets the pace.",
            },
            {
              label: "Permit",
              value:
                "We file the application with the city and follow the inspections through.",
            },
            {
              label: "Compliance",
              value:
                "Our RBQ classes 1.2 and 1.3 cover buildings of every kind.",
            },
            {
              label: "Insurance",
              value:
                "We carry civil liability cover and you get the certificates in hand.",
            },
            {
              label: "Millwork",
              value:
                "A reception counter or custom storage takes nine to fifteen weeks.",
            },
            {
              label: "Who installs",
              value:
                "Our own crew, in stages and outside opening hours if you must stay open.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-commercial-project-03.webp",
            alt: "Built-in commercial millwork in a unit delivered by Dilamco",
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
              q: "Who deals with the building owner during the work?",
              a: "We do. Notice to the manager, freight elevator booking, protection of common areas and approved working hours are settled before day one on site.",
            },
            {
              q: "How are leasehold improvements handled under the lease?",
              a: "The scope is split according to what the lease puts on the landlord and on the tenant. Each share is priced separately so the invoicing can follow.",
            },
            {
              q: "Do you work in multi-unit residential buildings?",
              a: "Yes: vacant units, common areas, balconies and storage rooms. Work is sequenced to limit noise and service interruptions for the occupants.",
            },
            {
              q: "What if a municipal inspection rejects an item?",
              a: "The fix is carried out at our cost when it comes from our execution. If the refusal stems from the drawings supplied, it is documented and reworked with the designer.",
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
          intro:
            "Free estimate. We scope the permit and the sequence before any wall opens.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets/commercial",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, South Shore, Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
