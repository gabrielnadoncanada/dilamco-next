import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const installationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom cabinet & kitchen installation",
    description:
      "Custom cabinet and kitchen installation by our own crews: precise alignments, on-site adjustments and coordination with the rest of the job site.",
    path: "/services/installation",
    ogAlt: "Dilamco installation service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Installation service",
      url: SITE.url + "/services/installation",
    },
  ],
  service: {
    name: "Installation service",
    description:
      "Precise alignments, on-site adjustments and careful finishing for kitchens, bathrooms, walk-ins and commercial spaces.",
    url: SITE.url + "/services/installation",
    serviceType: "Installation",
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
          heading: "Installation is planned around the other trades",
          description:
            "Our crews hang the cabinets at the right moment, after plumbing and electrical, before the countertops.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See installed projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Levelling", "Alignment", "Coordination"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Custom cabinets being installed in a kitchen",
          },
          caption: "Residential and commercial installs",
          imageSide: "left",
        },
      },
    },
    {
      id: "etapes",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Four steps on site",
          steps: [
            {
              number: "1",
              title: "Protection",
              description:
                "Floors covered, thresholds protected, dust kept to the room.",
            },
            {
              number: "2",
              title: "Levelling",
              description:
                "Boxes shimmed, then anchored into the wall studs.",
            },
            {
              number: "3",
              title: "Adjustment",
              description:
                "Hinges set on three axes, gaps evened out across the run.",
            },
            {
              number: "4",
              title: "Finishing",
              description:
                "Mouldings, toe kicks, handles and a walk-through with you.",
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
          intro: "What happens in your home during the install days.",
          rows: [
            {
              label: "Timeline",
              value: "One to two days for a vanity, three to five for a kitchen",
            },
            {
              label: "Deliverables",
              value: "Cabinets hung, doors adjusted, deficiencies corrected",
            },
            {
              label: "Who does what",
              value: "Our installers, coordinated with countertop and electrician",
            },
            {
              label: "Prerequisite",
              value: "Plumbing, electrical and flooring done before we arrive",
            },
            {
              label: "Warranty",
              value: "One catch-up adjustment included in the first year",
            },
            {
              label: "Job site",
              value: "Swept every evening, debris hauled out at the end",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Cabinets adjusted and aligned after installation",
          },
          note: "The install date is set once the delivery is confirmed.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about installation",
          items: [
            {
              q: "Do we have to leave the house during install?",
              a: "No. The room stays out of service for a few days, but the rest of the house remains protected and usable. Water is restored each evening where possible.",
            },
            {
              q: "Who installs the countertop?",
              a: "The countertop supplier, after our install. They template on the boxes already anchored, which removes millimetre-level gaps.",
            },
            {
              q: "Do you install cabinets bought elsewhere?",
              a: "No. We install what we designed and supplied, so that one responsibility covers the drawings, the parts and the install.",
            },
            {
              q: "What if a door rubs six months later?",
              a: "Call us. Wood that moves with the seasons is corrected in a few minutes of adjustment, and it is covered in the first year.",
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
          heading: "Schedule your cabinet installation",
          intro:
            "We set the date against the rest of the job site and hand over after a walk-through.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27",
        },
      },
    },
  ],
};
