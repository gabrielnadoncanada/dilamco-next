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
            "Our crews set the cabinets at the right point in the job: after plumbing and electrical, before the countertops.",
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
          badges: ["Levelling", "Alignments", "Coordination"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Technical drawing and panel samples for custom installation",
          },
          caption: "Residential and commercial installation",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why installation changes everything",
          description:
            "No wall is plumb and no floor is level. Installation absorbs that gap, or it shows on every door.",
          cards: [
            {
              title: "Levelling",
              description:
                "Boxes are shimmed before they are fastened to the structure.",
            },
            {
              title: "Alignments",
              description:
                "Even gaps between doors and drawers along the whole run.",
            },
            {
              title: "Fastening",
              description:
                "Anchored into the studs, not just into the drywall.",
            },
            {
              title: "Coordination",
              description:
                "Counters, backsplash and appliances follow in the right order.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What is included",
          intro:
            "Installation is more than screwing units to a wall.",
          items: [
            {
              title: "Site check",
              description: "Walls, floors, levels and constraints surveyed first.",
            },
            {
              title: "Setting and fastening",
              description: "Shimming, anchoring and joining the units together.",
            },
            {
              title: "Door adjustment",
              description: "Hinges set on three axes, drawers brought into line.",
            },
            {
              title: "Final walkthrough",
              description: "Done with you, deficiencies fixed before the last payment.",
            },
          ],
          actions: [
            {
              label: "View the process",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Custom installation in progress",
          },
          cardTitle: "On-site coordination",
          cardDescription:
            "A clean install depends as much on preparation as on the final adjustments.",
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
              q: "How long does an installation take?",
              a: "A vanity or a walk-in goes in within a day or two. A full kitchen takes longer, depending on the island, tall cabinets and appliances. The duration is confirmed at planning.",
            },
            {
              q: "Are adjustments normal?",
              a: "Yes. Doors and drawers are set after the boxes are fastened. It is a planned step, not a sign that something went wrong.",
            },
            {
              q: "Do you only install your own cabinets?",
              a: "Yes. We install what we design and supply, so the same tolerances apply from drawings to installation, under a single line of accountability.",
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
          heading: "Want a clean, coordinated install?",
          intro:
            "We plan the installation around the rest of the job and hand over after a walkthrough with you.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
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
