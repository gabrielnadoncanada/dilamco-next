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
          heading: "Our drawings, our partner factory, our quality control",
          description:
            "Production goes to our exclusive partner factory. Specifications, order follow-up and receiving checks stay with us.",
          actions: [
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom-built", "Quality control", "One contract"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Technical drawings and material samples for a custom order",
          },
          caption: "Checked on delivery, before install",
          imageSide: "right",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "From order to job site",
          steps: [
            {
              number: "1",
              title: "Order",
              description:
                "Panels, finishes and hardware ordered against the signed drawings.",
            },
            {
              number: "2",
              title: "Production",
              description:
                "Boxes, doors and drawers produced by our partner factory.",
            },
            {
              number: "3",
              title: "Inspection",
              description:
                "Counts, dimensions and finishes checked as soon as it lands.",
            },
            {
              number: "4",
              title: "Delivery",
              description:
                "Modules wrapped and dropped on site in install sequence.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "In short",
          intro: "Who produces, who checks, and on what timeline.",
          rows: [
            {
              label: "Timeline",
              value: "9 to 15 weeks from signed drawings to install",
            },
            {
              label: "Deliverables",
              value: "Boxes, doors, drawers, shelves and hardware assembled",
            },
            {
              label: "Who does what",
              value: "The partner factory produces, Dilamco specifies and checks",
            },
            {
              label: "Inspection",
              value: "Every module opened and measured before it enters the site",
            },
            {
              label: "Warranty",
              value: "Non-conforming parts reordered at our cost",
            },
            {
              label: "Storage",
              value: "Held at our place if the job site runs late",
            },
          ],
          image: {
            src: "/images/services/fabrication-hero.webp",
            alt: "Wrapped cabinet modules waiting for delivery",
          },
          note: "Production lead times are confirmed in writing when the order goes out.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about production",
          items: [
            {
              q: "Who actually produces your cabinets?",
              a: "Our exclusive partner factory, to our drawings and specifications. Dilamco keeps the design, the receiving inspection, the install and the after-sales service.",
            },
            {
              q: "What if a part arrives damaged?",
              a: "It is refused on receiving and reordered the same day. That is exactly why the check happens before modules enter the job site.",
            },
            {
              q: "Can a module be added along the way?",
              a: "Before production starts, yes, at no restart cost. After that, the addition ships separately and carries its own lead time.",
            },
            {
              q: "Custom or semi-custom?",
              a: "Custom starts from your measurements, box by box. Semi-custom adapts preset widths. The gap shows up in corners and heights.",
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
          heading: "Put your cabinets into production",
          intro:
            "We frame materials, hardware and schedule before the order is sent out.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See the materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
  ],
};
