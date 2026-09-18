import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Free renovation quote — contact Dilamco",
    description:
      "Tell us about your renovation or construction project. Free estimate, reply within 24 to 48 business hours. RBQ licence 8306-0806-27.",
    path: "/contact",
    ogAlt: "Contact Dilamco for a renovation estimate",
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
          heading: "Tell us about your renovation project",
          intro:
            "Free estimate, no strings attached. The more precise your description, the more useful our first reply: we can give you a realistic order of magnitude even before the site visit.",
          detailsTitle: "Get in touch",
          detailsIntro:
            "Dilamco is a residential renovation general contractor based in Pierrefonds-Roxboro since 2004. RBQ licence 8306-0806-27, valid and without restrictions.",
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
              description:
                "West Island, Montréal, Laval, the South Shore and Vaudreuil-Soulanges.",
              icon: "map-pin",
            },
            {
              title: "Response time",
              description:
                "Reply within 24 to 48 business hours to book the visit and the estimate.",
              icon: "clock",
            },
          ],
          note: "RBQ licence 8306-0806-27 — general contractor, classes 1.2 and 1.3. Civil liability insurance and site coverage in force. Free estimate, no fee and no obligation.",
          formTitle: "Request a free estimate",
          formIntro:
            "This information is used only to prepare the visit and frame your project. No automated sales follow-up.",
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
                  helper:
                    "A two-minute call often saves three rounds of email.",
                },
                {
                  kind: "text",
                  name: "ville",
                  label: "City / area of the project",
                  autoComplete: "address-level2",
                  placeholder: "Pierrefonds, Kirkland, Laval, Vaudreuil...",
                  required: true,
                  helper:
                    "Permit requirements change from one city and borough to the next.",
                },
                {
                  kind: "select",
                  name: "espace",
                  label: "Type of work",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    { label: "Kitchen renovation", value: "cuisine" },
                    { label: "Bathroom renovation", value: "salle-de-bain" },
                    { label: "Basement finishing", value: "sous-sol" },
                    { label: "Home addition", value: "agrandissement" },
                    { label: "Flooring", value: "plancher" },
                    {
                      label: "Disaster restoration (water, fire)",
                      value: "apres-sinistre",
                    },
                    {
                      label: "Full renovation / several rooms",
                      value: "renovation-complete",
                    },
                    { label: "Custom cabinetry only", value: "armoires" },
                    { label: "Commercial", value: "commercial" },
                    { label: "Other", value: "autre" },
                  ],
                },
                {
                  kind: "select",
                  name: "type_projet",
                  label: "Type of mandate",
                  placeholder: "Select...",
                  required: true,
                  options: [
                    {
                      label:
                        "Turnkey (general contractor, permits and coordination)",
                      value: "cle-en-main",
                    },
                    {
                      label: "Renovation with coordination",
                      value: "renovation",
                    },
                    {
                      label: "Custom cabinetry only",
                      value: "armoires-seulement",
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
                  helper:
                    "Our renovation projects generally start around $25,000.",
                  options: [
                    { label: "Under $15,000", value: "moins-15000" },
                    { label: "$15,000 to $25,000", value: "15000-25000" },
                    { label: "$25,000 to $40,000", value: "25000-40000" },
                    { label: "$40,000 to $60,000", value: "40000-60000" },
                    { label: "$60,000 and up", value: "60000-plus" },
                    { label: "To be discussed", value: "a-discuter" },
                  ],
                },
                {
                  kind: "select",
                  name: "echeance",
                  label: "When would you like to start?",
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
                  label: "Describe the work",
                  rows: 8,
                  required: true,
                  helper:
                    "Type of building, year built, current condition, access constraints: anything that saves us a surprise saves you a change order.",
                  placeholder:
                    "E.g. 1968 bungalow, original kitchen to be redone entirely, wall to open toward the dining room, plumbing and electrical never touched, basement to be revisited later.",
                },
              ],
            },
          ],
          submitLabel: "Request a free estimate",
        },
      },
    },
  ],
};
