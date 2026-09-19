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
          heading: "How we install your cabinets at home",
          description:
            "Our crews hang the cabinets after the plumbing and the wiring, and before the countertops.",
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
          heading: "How installation day goes",
          steps: [
            {
              number: "1",
              title: "We protect the house",
              description:
                "We cover the floors and keep the dust inside the room we work in.",
            },
            {
              number: "2",
              title: "We fix the boxes",
              description:
                "We level each box, then screw it into the framing behind the wall.",
            },
            {
              number: "3",
              title: "We adjust the doors",
              description:
                "We set every door so the gaps are even from one end to the other.",
            },
            {
              number: "4",
              title: "We finish and show you",
              description:
                "We fit the mouldings and handles, then walk through it all with you.",
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
          heading: "Installation in brief",
          rows: [
            {
              label: "How long",
              value:
                "One to two days for a vanity, three to five for a full kitchen.",
            },
            {
              label: "Who handles it",
              value:
                "Our own installers, working in step with the electrician and the countertop.",
            },
            {
              label: "Needed beforehand",
              value:
                "The plumbing, the wiring and the floor must be finished before we arrive.",
            },
            {
              label: "Warranty",
              value:
                "One adjustment visit is included in the year following installation.",
            },
            {
              label: "Cleanliness",
              value:
                "We sweep up every evening and haul out all the debris at the end.",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Cabinets adjusted and aligned after installation",
          },
          note: "We set the installation date as soon as the delivery is confirmed.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about cabinet installation",
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
              a: "Call us. Wood that moves with the seasons is corrected in a few minutes of hinge adjustment, in your home.",
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
            "Give us the date you want, we confirm the site will be ready for it.",
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
        },
      },
    },
  ],
};
