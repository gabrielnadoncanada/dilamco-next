import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Process: how a renovation project runs",
    description:
      "From free estimate to guarantee: site visit, itemized quote, written contract, permits, coordinated trades, deficiency list and handover.",
    path: "/processus",
    ogAlt: "The stages of a renovation project run by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Process", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Residential renovation project management",
      description:
        "How a project runs with a general contractor: site visit and estimate, itemized quote, written contract with schedule, municipal permit, coordinated site work, deficiency list, handover and guarantee.",
      url: SITE.url + "/processus",
      serviceType: "Renovation project management",
      areaServed: [
        "West Island",
        "Montréal",
        "Laval",
        "South Shore",
        "Vaudreuil-Soulanges",
      ],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "How a renovation project runs",
          description:
            "Five stages. Each one ends with a signed document, a permit issued or an inspection passed.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "steps",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "The five stages, always in this order",
          steps: [
            {
              number: "1",
              title: "Visit to your home",
              description:
                "We take the measurements and give you a first price bracket.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Every item is priced, with the quantities and what stays excluded.",
            },
            {
              number: "3",
              title: "Signing and permit",
              description:
                "You sign the schedule and the payment calendar. We file the permit.",
            },
            {
              number: "4",
              title: "The work",
              description:
                "Each trade starts once the previous one has been inspected.",
            },
            {
              number: "5",
              title: "End of the work",
              description:
                "We walk through, note the corrections, then you pay the balance.",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "What you receive",
          rows: [
            {
              label: "The quote",
              value: "It details the work, the materials and the exclusions before signing",
            },
            {
              label: "The contract",
              value: "It sets the price, the payment terms and the warranty on the work",
            },
            {
              label: "The schedule",
              value: "It gives the start and end dates, and the order of the trades",
            },
            {
              label: "Changes",
              value: "Every change is priced and accepted in writing before it is done",
            },
            {
              label: "The permit",
              value: "You receive a copy of the permit, issued in the owner's name",
            },
            {
              label: "The correction list",
              value: "We draw it up with you at the end, and it is cleared before the balance",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Construction drawings and project documents on a work table",
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
              q: "Is the estimate really free?",
              a: "Yes. The visit and the first estimate are not billed and commit you to nothing. If architectural drawings or an engineer are needed, they are priced separately and approved first.",
            },
            {
              q: "Who handles the permit application?",
              a: "We do. We check your city's requirements, prepare the drawings, file the application and follow the file. The permit is still issued in the owner's name.",
            },
            {
              q: "How are the payments split up?",
              a: "A deposit on signing, then instalments tied to real progress rather than fixed dates. The last instalment is due once the corrections have been made.",
            },
            {
              q: "What happens if a hidden problem is found?",
              a: "We stop, document it, explain the options and price the fix in writing. Nothing is carried out before you agree.",
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
          heading: "It starts with a visit",
          intro:
            "Tell us about the project. You get a detailed quote, not a number given over the phone.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
