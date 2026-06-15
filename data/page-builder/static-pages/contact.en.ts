import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Contact and quote",
    description:
      "Contact Dilamco for a quote on a custom kitchen, bathroom, storage or commercial project.",
    path: "/contact",
    ogAlt: "Contact Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact" },
  ],
  blocks: [
    {
      id: "contact-form",
      content: {
        type: "split",
        variant: "details-form-card",
        props: {
          heading: "Tell us about your project",
          intro:
            "Request a quote for a custom kitchen, vanity or storage project, or a renovation with coordination.",
          detailsTitle: "Get in touch",
          detailsIntro:
            "We mainly support residential and commercial projects looking for a durable, well-built and well-planned solution.",
          details: [
            {
              title: "Email",
              description: "info@dilamco.com",
              icon: "mail",
              href: "mailto:info@dilamco.com",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              title: "Phone",
              description: "(514) 820-0773",
              icon: "phone",
              href: "tel:+15148200773",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              title: "Areas served",
              description: "Montréal, Laval and the South Shore",
              icon: "map-pin",
            },
            {
              title: "Target response time",
              description: "Initial reply within 24 to 48 business hours.",
              icon: "clock",
            },
          ],
          formAction: "/contact/",
          formMethod: "post",
          honeypotName: "website",
          groups: [
            {
              legend: "Basic information",
              fields: [
                {
                  kind: "text",
                  name: "nom",
                  label: "Name",
                  autoComplete: "name",
                  required: true,
                },
                {
                  kind: "email",
                  name: "courriel",
                  label: "Email",
                  autoComplete: "email",
                  required: true,
                },
                {
                  kind: "tel",
                  name: "telephone",
                  label: "Phone",
                  autoComplete: "tel",
                  required: true,
                },
                {
                  kind: "text",
                  name: "ville",
                  label: "City / area",
                  autoComplete: "address-level2",
                  placeholder: "Montréal, Laval, South Shore",
                  required: true,
                },
                {
                  kind: "select",
                  name: "espace",
                  label: "Type of space",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    { label: "Kitchen", value: "cuisine" },
                    { label: "Bathroom / vanity", value: "salle-de-bain" },
                    { label: "Walk-in / storage", value: "walk-in" },
                    { label: "Laundry room", value: "salle-de-lavage" },
                    { label: "Commercial", value: "commercial" },
                  ],
                },
                {
                  kind: "select",
                  name: "type_projet",
                  label: "Nature of the project",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    {
                      label: "Custom (design + fabrication + installation)",
                      value: "sur-mesure",
                    },
                    {
                      label: "Renovation with coordination",
                      value: "renovation",
                    },
                    {
                      label: "To be determined / need advice",
                      value: "a-determiner",
                    },
                  ],
                },
                {
                  kind: "select",
                  name: "budget",
                  label: "Approximate budget",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    { label: "Under $15,000", value: "moins-15000" },
                    { label: "$15,000 to $25,000", value: "15000-25000" },
                    { label: "$25,000 to $40,000", value: "25000-40000" },
                    { label: "$40,000 to $60,000", value: "40000-60000" },
                    { label: "$60,000 and up", value: "60000-plus" },
                    { label: "To discuss", value: "a-discuter" },
                  ],
                },
                {
                  kind: "select",
                  name: "echeance",
                  label: "Desired timeline",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    { label: "0-3 months", value: "0-3" },
                    { label: "3-6 months", value: "3-6" },
                    { label: "6-12 months", value: "6-12" },
                    { label: "Flexible", value: "flexible" },
                  ],
                },
                {
                  kind: "textarea",
                  name: "message",
                  label: "Describe your project",
                  rows: 8,
                  required: true,
                  placeholder:
                    "E.g. type of room, approximate dimensions, current condition, storage needs, desired materials, access constraints or timeline.",
                },
              ],
            },
          ],
          submitLabel: "Request a quote",
        },
      },
    },
  ],
};
