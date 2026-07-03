import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom cabinet specialist in Montreal — About Dilamco",
    description:
      "About Dilamco: custom work, controlled fabrication, careful installation and a long-term vision for durable projects.",
    path: "/a-propos",
    ogAlt: "About Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "About", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - About",
          heading: "A custom-cabinet company built to better control execution",
          description:
            "Dilamco is not just a cabinet seller. Our approach connects design, fabrication, installation and coordination when the project calls for it, to deliver a result that is more consistent and more durable.",
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
          badges: ["Custom", "Execution", "Durability", "Turnkey"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Dilamco team and approach for custom projects",
          },
          caption:
            "Our value doesn't come from a premium pitch. It comes from the level of control over the final result.",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "The structural advantage we aim to protect",
          description:
            "A solid custom-cabinet company doesn't rely on style alone. It relies on its ability to stay in control across design decisions, fabrication quality, material choices and on-site installation.",
          cards: [
            {
              title: "Less fragmentation",
              description:
                "The fewer breaks between design, production and installation, the more the project stays clear and executable.",
            },
            {
              title: "More tangible quality",
              description:
                "Value shows in the details: structure, hardware, finishes, adjustments and consistency of execution.",
            },
            {
              title: "Clearer accountability",
              description:
                "Clients move forward better when they know who frames the decisions and who carries the result through to the end.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "history",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "How the company took shape",
          description:
            "Our path followed a simple logic: reduce the weaknesses that hurt final quality and reinforce the steps that truly stabilize a project.",
          steps: [
            {
              number: "1",
              title: "Understand the real constraints",
              description:
                "Custom projects demand more than a good visual. They demand a serious reading of the space, the use and the limits of the job site.",
            },
            {
              number: "2",
              title: "Better connect design and execution",
              description:
                "The company's structure was built around better continuity between upstream choices and the reality of fabrication and installation.",
            },
            {
              number: "3",
              title: "Standardize without making generic",
              description:
                "The goal has never been to make stock work. The goal is to have a repeatable method to deliver true custom work with more consistency.",
            },
            {
              number: "4",
              title: "Aim for a long-term relationship",
              description:
                "We prefer growth based on reputation, perceived quality and well-executed projects rather than volume at any cost.",
            },
          ],
          actions: [
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "View services",
              href: "/services",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "principles",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "The principles that guide our decisions",
          intro:
            "The right project isn't just beautiful at delivery. It has to stay consistent over time, in use and in perceived quality.",
          columns: "2",
          items: [
            {
              title: "Function before effect",
              description:
                "Design first serves to make the space more accurate, more fluid and more durable.",
              icon: "doorOpen",
              bullets: [
                "Ergonomics designed around daily life",
                "Configurations suited to the real space",
                "Choices that serve function before fashion",
              ],
            },
            {
              title: "Concrete durability",
              description:
                "Premium has to be verifiable in the components and in the way they're integrated.",
              icon: "package2",
              bullets: [
                "Materials chosen according to use",
                "Consistent hardware and details",
                "Fewer invisible compromises",
              ],
            },
            {
              title: "Controlled execution",
              description:
                "Final quality depends as much on the sequence as on the product itself.",
              icon: "wrench",
              bullets: [
                "Validation before production",
                "Better-framed fabrication",
                "Precise installation and adjustments",
              ],
            },
            {
              title: "Long-term vision",
              description:
                "We aim to build a brand that holds up by repeating a good standard, not through vague promises.",
              icon: "slidersHorizontal",
              bullets: [
                "An assumed premium positioning",
                "Growth based on trust",
                "Reputation backed by the result",
              ],
            },
          ],
        },
      },
    },
    {
      id: "where-to-go-next",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Explore the company by angle",
          intro:
            "Depending on what you want to validate, you can dig into the method, the services, the materials or the completed work.",
          columns: "2",
          items: [
            {
              title: "Our process",
              description:
                "To see how a project moves from scoping to installation.",
              href: "/processus",
              badges: ["Method", "Steps"],
              ctaLabel: "See the process",
            },
            {
              title: "Our services",
              description:
                "To understand the role of design, fabrication, installation and renovation.",
              href: "/services",
              badges: ["Design", "Installation"],
              ctaLabel: "View services",
            },
            {
              title: "Our materials",
              description:
                "To understand the technical choices that support durability and finish.",
              href: "/materiaux",
              badges: ["Panels", "Hardware"],
              ctaLabel: "View materials",
            },
            {
              title: "Our projects",
              description:
                "To see concrete examples of the level of execution we aim for.",
              href: "/projets",
              badges: ["References", "Completed work"],
              ctaLabel: "View projects",
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
          heading: "Want to check whether Dilamco is the right fit for your project?",
          intro:
            "The simplest way is to frame the scope, the priorities and the expected level of demand. We'll tell you clearly how we can step in.",
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
          note: "Montréal, Laval and the South Shore",
        },
      },
    },
  ],
};
