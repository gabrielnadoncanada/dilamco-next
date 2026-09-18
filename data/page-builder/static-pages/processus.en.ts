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
          badges: ["Written contract", "Permits"],
          heading: "How a renovation project runs",
          description:
            "Five milestones. Each closes on a signed document, a permit issued or an inspection passed.",
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
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Five milestones, always in this order",
          steps: [
            {
              number: "1",
              title: "Visit and survey",
              description:
                "Measurements taken at your place and a first budget bracket.",
            },
            {
              number: "2",
              title: "Line-by-line quote",
              description:
                "Every line priced, with quantities and what stays excluded.",
            },
            {
              number: "3",
              title: "Signing and permit",
              description:
                "Dated schedule, payment calendar, application filed with your city.",
            },
            {
              number: "4",
              title: "Trades on site",
              description:
                "Each trade starts once the previous one has been inspected.",
            },
            {
              number: "5",
              title: "Handover",
              description:
                "Final walkthrough, deficiency list, corrections before the balance.",
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
          intro:
            "Six documents worth demanding from any contractor you consider.",
          rows: [
            {
              label: "Quote",
              value: "Work, materials and exclusions detailed before signing",
            },
            {
              label: "Contract",
              value: "Scope, price, payment terms and the warranty clause",
            },
            {
              label: "Schedule",
              value: "Start and end dates, milestones trade by trade",
            },
            {
              label: "Change orders",
              value: "Every change priced and accepted before it is carried out",
            },
            {
              label: "Permit",
              value: "A copy of the issued permit, in the owner's name",
            },
            {
              label: "Handover",
              value: "Deficiency list drawn up with you, cleared at the balance",
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
              a: "Yes. The site visit and the initial estimate are not billed and commit you to nothing. If architectural drawings or an engineer's assessment are required, they are priced separately and approved first.",
            },
            {
              q: "Who handles the permit application?",
              a: "We do. We check your city's requirements, prepare the drawings, file the application and follow the file through to issuance. The permit is still issued in the owner's name.",
            },
            {
              q: "How are payments structured?",
              a: "A deposit on signing, then instalments tied to actual progress rather than fixed dates. The final instalment is due once the deficiency list has been corrected.",
            },
            {
              q: "What happens if a hidden problem is found?",
              a: "We stop, document it, explain the options and price the fix in a change order. Nothing is carried out before you agree in writing.",
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
            "Tell us about the project. You leave with an itemized quote, not a number thrown out over the phone.",
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
          note: "RBQ licence 8306-0806-27 • West Island, Montréal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
