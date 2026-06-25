import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Bathroom renovation",
    description:
      "Turnkey bathroom renovation: coordination, moisture control, custom vanities and durable finishes in Montréal.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Dilamco bathroom renovation",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Bathroom renovation",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Bathroom renovation",
    description:
      "Design, coordination, custom vanities and durable finishes suited to moisture and plumbing constraints.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Bathroom renovation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Turnkey bathroom renovation in Montréal — better managing moisture, plumbing and finishes",
          description:
            "In a bathroom, the final quality depends as much on coordination as on materials, moisture, plumbing and installation details. The site must be better sequenced to protect long-term durability.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View bathroom projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Moisture", "Coordination", "Montréal"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Custom bathroom renovation",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "What makes a bathroom more demanding than it looks",
          description:
            "A bathroom concentrates water, moisture, plumbing, ventilation, storage and finishes in an often more compact space. The project ages poorly when these elements are handled separately or too late.",
          cards: [
            {
              title: "Water and moisture risk",
              description:
                "Poor technical trade-offs cost more here than elsewhere because they directly affect durability.",
            },
            {
              title: "Space constraints",
              description:
                "Circulation, clearances, storage and access must be carefully thought out in a limited room.",
            },
            {
              title: "Sensitive coordination",
              description:
                "Plumbing, ventilation, finishes and furniture must align to avoid rework and poorly resolved details.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "priorities",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "The priorities of a bathroom renovation",
          intro:
            "The project must protect against water, integrate the plumbing and deliver a durable finish.",
          badges: ["Ventilation", "Plumbing", "Protection", "Finishes"],
          cardTitle: "What we aim to protect",
          items: [
            "Reduce water-related risks with clear planning.",
            "Achieve a durable result in a humid environment.",
            "Avoid grey areas between trades and finishes.",
          ],
          actions: [
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Hardware",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Our approach to framing a more durable bathroom",
          intro:
            "The goal is not to separate design decisions from the realities of the site. A bathroom must be thought of as a whole where moisture, storage, plumbing and finishes hold together.",
          items: [
            {
              title: "Analysis of the real context",
              description:
                "We read the space, access, plumbing and ventilation constraints before proposing solutions.",
            },
            {
              title: "Hierarchy of choices",
              description:
                "Structural and technical decisions come before purely aesthetic details.",
            },
            {
              title: "Sequence of work",
              description:
                "The site is organized to better protect the sensitive stages and reduce touch-ups.",
            },
            {
              title: "Quality of the final result",
              description:
                "Vanity, storage, transitions and finishes must give a clean, durable read of the room.",
            },
          ],
          actions: [
            {
              label: "View the bathroom page",
              href: "/espaces/salle-de-bain",
              variant: "ghost",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Planning a bathroom renovation",
          },
          cardTitle: "What we aim to avoid",
          cardDescription:
            "Bathrooms that age poorly were often decided without enough clarity on water, daily use and the quality of the joints.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Typical sequence of a bathroom renovation",
          intro:
            "The logic stays the same: clarify the constraints, validate the sensitive choices, then execute cleanly in a humid environment.",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description:
                "Scope, site constraints, access, plumbing and level of intervention to confirm.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Vanity, storage, circulation, clearances and finish decisions.",
            },
            {
              number: "3",
              title: "Materials",
              description:
                "Selection of components suited to moisture, maintenance and the expected durability.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Related work sequenced to better protect the sensitive details and the finish.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Fitting, adjustments and final validation for a clean read of the whole.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Technical points that really matter in a bathroom",
          intro:
            "A bathroom's durability does not depend on a single product. It depends on a set of well-aligned technical decisions.",
          columns: "2",
          items: [
            {
              title: "Moisture management",
              description:
                "A humid environment calls for more rigorous choices than another room.",
              icon: "doorOpen",
              bullets: [
                "Materials and finishes suited to the environment.",
                "Construction details designed to last.",
                "Fewer visible risks in the medium term.",
              ],
            },
            {
              title: "Vanity structure",
              description:
                "The invisible components directly influence how it holds up over time.",
              icon: "package2",
              bullets: [
                "Solid birch wood for the critical elements.",
                "Birch plywood to better resist the load.",
                "A better sense of solidity in use.",
              ],
            },
            {
              title: "Ergonomics and storage",
              description:
                "The room must stay simple to use even when it is compact.",
              icon: "slidersHorizontal",
              bullets: [
                "Clearances planned around the real space.",
                "Storage suited to daily habits.",
                "Less friction in use.",
              ],
            },
            {
              title: "On-site execution",
              description:
                "The finish depends on the order of the work and the quality of the adjustments.",
              icon: "wrench",
              bullets: [
                "Fewer conflicts between trades.",
                "Fewer end-of-site touch-ups.",
                "A cleaner finish at delivery.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "This service page mainly supports your custom bathroom project",
          intro:
            "The bathroom renovation mainly explains the method, the risks and the coordination. For the full view of the product, the materials and the completed projects, the bathroom pillar page remains the main destination.",
          items: [
            {
              title: "Custom bathroom",
              href: "/espaces/salle-de-bain",
              description:
                "The main pillar page to see the finish level, the materials, the projects and the storage logic.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "High-end custom bathroom",
              },
              badges: ["Pillar page", "Bathroom"],
              footerCtaLabel: "View the bathroom page",
            },
            {
              title: "Fabrication service",
              href: "/services/fabrication",
              description:
                "To understand what makes the vanity more stable, more durable and better executed over time.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Custom fabrication and technical details",
              },
              badges: ["Fabrication", "Durability"],
              footerCtaLabel: "View fabrication",
            },
            {
              title: "Installation service",
              href: "/services/installation",
              description:
                "To see how fitting, adjustments and alignments protect a cleaner result at the end of the site.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Custom installation with precise adjustments",
              },
              badges: ["Installation", "Finish"],
              footerCtaLabel: "View installation",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "What a well-managed bathroom renovation should deliver",
          description:
            "Proof of competence is not only about appearance. It shows in how the room ages, cleans up and functions day to day without visible weakness.",
          cards: [
            {
              title: "A more durable room",
              description:
                "The technical choices better support moisture, load and daily use.",
            },
            {
              title: "Simpler to use",
              description:
                "Storage, circulation and clearances make the bathroom more pleasant to use.",
            },
            {
              title: "A more credible finish",
              description:
                "Joints, alignments and installation details support a cleaner, more premium result.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - bathroom renovation",
          intro:
            "Clear answers on timelines, moisture, coordination and project scope.",
          items: [
            {
              q: "How long does a bathroom renovation take?",
              a: "The duration depends on the scope, the site constraints and the related work.",
            },
            {
              q: "Is there a risk of water damage?",
              a: "Rigorous execution and choices suited to moisture greatly reduce long-term risks.",
            },
            {
              q: "Do you work with other trades on this kind of project?",
              a: "Yes, when the scope requires it. Coordination is precisely there to better order plumbing, ventilation, finishes and fitting to avoid grey areas.",
            },
            {
              q: "Is it possible in a condo?",
              a: "Yes. Access, scheduling and building constraints are framed from the start.",
            },
            {
              q: "Can I do a partial renovation?",
              a: "Yes. Some projects focus mainly on the vanity and storage, others are more complete.",
            },
            {
              q: "Where can I see the full approach for a custom bathroom?",
              a: "The bathroom renovation page mainly serves to explain the site and coordination logic. For the full view of the product, the materials and the projects, the custom bathroom page remains the main reference.",
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
          heading: "Need a well-framed bathroom renovation?",
          intro:
            "We help you structure the project, the sequence and the right choices for a humid environment, then guide you toward the bathroom pillar page for the full view.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View the bathroom page",
              href: "/espaces/salle-de-bain",
              variant: "ghost",
            },
          ],
          note: "Bathroom, custom vanity, storage and humid environment",
        },
      },
    },
  ],
};
