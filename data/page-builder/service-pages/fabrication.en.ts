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
          heading: "Who builds your cabinets and who checks them",
          description:
            "Our partner factory builds them to our drawings, and we check every piece when it arrives.",
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
          heading: "From the order to your door",
          steps: [
            {
              number: "1",
              title: "We place the order",
              description:
                "We order the panels, the finishes and the hardware from your signed drawings.",
            },
            {
              number: "2",
              title: "The factory builds",
              description:
                "Our partner factory assembles the boxes, the doors and the drawers.",
            },
            {
              number: "3",
              title: "We check everything",
              description:
                "We count the parts and measure every module the moment it arrives.",
            },
            {
              number: "4",
              title: "We deliver to you",
              description:
                "We wrap the modules and drop them in the order we will install them.",
            },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Production in brief",
          rows: [
            {
              label: "How long",
              value:
                "Nine to fifteen weeks pass between your signed drawings and installation day.",
            },
            {
              label: "What you receive",
              value:
                "Cabinet boxes, doors, drawers and shelves that arrive already assembled.",
            },
            {
              label: "Who handles it",
              value:
                "Our partner factory builds, and Dilamco picks the materials and inspects.",
            },
            {
              label: "Inspection",
              value:
                "Every module is opened and measured before it comes into your home.",
            },
            {
              label: "Warranty",
              value:
                "A part that does not match is reordered at our cost, not yours.",
            },
            {
              label: "If the site runs late",
              value:
                "We keep your cabinets at our place until the room is ready for them.",
            },
          ],
          image: {
            src: "/images/services/fabrication-hero.webp",
            alt: "Wrapped cabinet modules waiting for delivery",
          },
          note: "Your delivery date is confirmed in writing as soon as the order goes out.",
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
            "We settle the materials, the hardware and the dates before the order goes out.",
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
        },
      },
    },
  ],
};
