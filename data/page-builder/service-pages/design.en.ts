import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const designPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom kitchen & cabinetry design",
    description:
      "Custom cabinetry design: space optimization, planning and material selection, built into your renovation by a licensed general contractor.",
    path: "/services/design",
    ogAlt: "Dilamco design service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Design service", url: SITE.url + "/services/design" },
  ],
  service: {
    name: "Design service",
    description:
      "Space optimization, planning and material selection for kitchens, vanities, walk-ins and commercial projects.",
    url: SITE.url + "/services/design",
    serviceType: "Design",
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
          heading: "We settle the plans before a wall is opened",
          description:
            "On-site survey, layout, heights, materials. The decisions are made and approved with you before anything goes into production.",
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
          badges: ["On-site survey", "Plans", "Materials"],
          image: {
            src: "/images/generated/services/service-design-hero-01.webp",
            alt: "Custom kitchen plan and material samples",
          },
          caption: "West Island, Montréal, Laval, South Shore",
        },
      },
    },
    {
      id: "rôle",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What design settles",
          description:
            "A plan locked early costs less than a change mid-project. Four things get decided here.",
          cards: [
            {
              title: "Layout",
              description:
                "Circulation, work zones, clearance in front of every door.",
            },
            {
              title: "Storage",
              description:
                "Drawers instead of low doors, heights matched to you.",
            },
            {
              title: "Plumbing and electrical",
              description:
                "What moves, what stays, and what that implies.",
            },
            {
              title: "Materials and finishes",
              description:
                "Panels, hardware and colours fixed before the order.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "includes",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What you receive",
          intro:
            "Design exists to be built, not to be admired. It becomes the contract's reference.",
          items: [
            {
              title: "Survey of the existing space",
              description: "Real measurements, walls, openings, constraints.",
            },
            {
              title: "Layout drawings",
              description: "Elevations and the position of every unit.",
            },
            {
              title: "Material list",
              description: "Panels, hardware, colours and finishes selected.",
            },
            {
              title: "Detailed quote",
              description: "Scope, exclusions, price and schedule in writing.",
            },
          ],
          actions: [
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
            {
              label: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/design-hero.webp",
            alt: "Custom design being planned",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "The earlier the decisions are made, the fewer surprises the job site holds.",
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
              q: "Is design mandatory?",
              a: "For custom work, yes. Without settled plans, dimensions, appliance integration and technical constraints get discovered during installation, when every change is expensive.",
            },
            {
              q: "When does design happen?",
              a: "At the very start, before the order. The drawings approved with you then serve as the stable reference for production, installation and the contract.",
            },
            {
              q: "Does it work in a condo?",
              a: "Yes, and it matters more there: elevator access, room dimensions, building rules and column locations all get resolved on paper first.",
            },
            {
              q: "Can you renovate the whole room?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27. Design then covers layout, plumbing, electrical, flooring and lighting, not only the cabinets.",
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
          heading: "Tell us about your project",
          intro:
            "Your space, your area, your timeline. We come back with a realistic framework.",
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
          note: "First reply within 24 to 48 business hours.",
        },
      },
    },
  ],
};
