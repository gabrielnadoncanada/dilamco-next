import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom cabinetry fabrication — partner factory",
    description:
      "Custom cabinets produced by our partner factory, with quality control and job-site coordination handled by Dilamco, a licensed general contractor.",
    path: "/services/fabrication",
    ogAlt: "Dilamco fabrication service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Fabrication service",
      url: SITE.url + "/services/fabrication",
    },
  ],
  service: {
    name: "Fabrication service",
    description:
      "Custom cabinets built for us by our partner factory, under Dilamco's specifications, quality control and coordination.",
    url: SITE.url + "/services/fabrication",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Cabinetry division",
          heading: "Our plans, our partner factory, our quality control",
          description:
            "Production is entrusted to our exclusive partner factory. The drawings, the specifications and the check on delivery stay with us.",
          actions: [
            {
              label: "Discuss your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom", "Quality control", "One contract"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Technical drawings and material samples for custom fabrication",
          },
          caption: "Checked on delivery, before installation",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What custom actually means",
          description:
            "Every box is sized from the survey of your room, not picked out of a grid of standard widths.",
          cards: [
            {
              title: "Real dimensions",
              description:
                "Corners, heights and awkward spaces used in full.",
            },
            {
              title: "Specified materials",
              description:
                "Panel and hardware chosen part by part, based on use.",
            },
            {
              title: "Controlled alignments",
              description:
                "Gaps and proportions settled between units before production.",
            },
            {
              title: "One party accountable",
              description:
                "Plans, sourcing, receiving and installation all sit with Dilamco.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "From sign-off to delivery",
          intro:
            "Four steps between the signed drawings and the boxes landing on site.",
          items: [
            {
              title: "Sign-off",
              description: "Design, measurements and constraints settled with you.",
            },
            {
              title: "Sourcing",
              description: "Panels, finishes and hardware ordered to specification.",
            },
            {
              title: "Production",
              description: "Boxes, doors and drawers produced by our partner factory.",
            },
            {
              title: "Receiving",
              description: "Quality control on delivery, before anything reaches the site.",
            },
          ],
          actions: [
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-cuisine-hero-01.webp",
            alt: "Custom kitchen with precise fabrication",
          },
          cardTitle: "Our role",
          cardDescription:
            "We specify, we verify, we install. You deal with one party throughout.",
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
              q: "Who actually produces your cabinets?",
              a: "Our exclusive partner factory, to our drawings and specifications. Dilamco keeps the design, the material choices, quality control on delivery, the installation and the after-sales service.",
            },
            {
              q: "What are the lead times?",
              a: "Generally 9 to 15 weeks between design sign-off and installation. The firm schedule is confirmed once the drawings are settled and written into the contract.",
            },
            {
              q: "Custom or semi-custom?",
              a: "Custom starts from your real measurements, box by box. Semi-custom adapts predefined units in a few widths. The gap shows up in corners and heights.",
            },
            {
              q: "Can you renovate the whole room?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27. Permit, demolition, plumbing, electrical, flooring and cabinet installation under one written contract.",
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
          heading: "Want a project built to last?",
          intro:
            "We frame the materials, the hardware and the schedule before anything goes into production.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "West Island, Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
