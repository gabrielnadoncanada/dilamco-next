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
        variant: "split-image",
        props: {
          eyebrow: "Process",
          heading: "How a renovation project runs",
          description:
            "Five stages. Each one closes with a signed document, a permit obtained or an inspection passed.",
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
          badges: ["Itemized quote", "Written contract", "Permits"],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Residential renovation work under way",
          },
          caption: "Free estimate · RBQ licence 8306-0806-27",
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
          heading: "Five stages, always in this order",
          steps: [
            {
              number: "1",
              title: "Visit and estimate",
              description:
                "Reply within 24 to 48 business hours, on-site survey, order of magnitude.",
            },
            {
              number: "2",
              title: "Itemized quote",
              description:
                "Work line by line, materials, quantities and exclusions set out in writing.",
            },
            {
              number: "3",
              title: "Contract and permit",
              description:
                "Dated schedule, payment calendar, permit application filed with the city.",
            },
            {
              number: "4",
              title: "Coordinated job site",
              description:
                "Each trade starts after the previous stage is inspected. Nothing is covered up unchecked.",
            },
            {
              number: "5",
              title: "Handover and warranty",
              description:
                "Final walkthrough with you, deficiencies fixed before the last payment.",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What you receive",
          intro:
            "A well-run project leaves a paper trail. Ask any contractor for these documents.",
          items: [
            {
              title: "The itemized quote",
              description:
                "the work line by line and what is not included.",
            },
            {
              title: "The written contract",
              description:
                "scope, price, dated schedule, payments and warranty terms.",
            },
            {
              title: "Change orders",
              description:
                "every change is priced and accepted in writing before it is carried out.",
            },
            {
              title: "The permit and deficiency list",
              description:
                "a copy of the issued permit and the list fixed before the final payment.",
            },
          ],
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "More about Dilamco",
              href: "/a-propos",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Construction drawings and project documents on a work table",
          },
          cardTitle: "Everything in writing",
          cardDescription:
            "No structural decision rests on a verbal agreement.",
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
