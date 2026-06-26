import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Flooring renovation in Montreal",
    description:
      "Flooring renovation: site sequencing, levels, transitions and clean integration within a larger project.",
    path: "/services/renovation/plancher",
    ogAlt: "Dilamco flooring renovation",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Flooring renovation",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Flooring renovation",
    description:
      "Planning, coordination and careful finishing when flooring is part of a larger renovation with cabinets, installation or reconfiguration.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Flooring renovation",
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
            "Flooring renovation: better manage levels, transitions and site sequencing",
          description:
            "Flooring affects levels, transitions, cabinet installation and the perceived quality of the project. It must be planned within the overall site sequence, not treated as an isolated decision.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Transitions", "Levels", "Sequencing"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Flooring renovation",
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
            "Why flooring often creates delayed problems",
          description:
            "Flooring seems simple until you connect it to the rest of the site. In reality, it affects heights, transitions, on-site adjustments and sometimes the entire installation logic.",
          cards: [
            {
              title: "Levels and flatness",
              description:
                "Variations in the subfloor carry straight through to the layout, alignments and the final result.",
            },
            {
              title: "Wrong order of work",
              description:
                "When flooring is handled too late or too early, it often forces rework or extra protection.",
            },
            {
              title: "Visible joints",
              description:
                "Poorly planned transitions between areas, rooms or materials quickly reduce the perception of quality.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading:
            "Our approach to integrating flooring without harming the rest of the project",
          intro:
            "The goal isn't just to replace a surface. We make sure the flooring integrates properly with the cabinets, the levels, the transitions and the overall site sequence.",
          items: [
            {
              title: "Reading the existing conditions",
              description:
                "We clarify the levels, the visible irregularities, the transitions and the relationship with the other areas of the project.",
            },
            {
              title: "Order of the steps",
              description:
                "Flooring is placed in the right sequence to reduce rework and protect the finish.",
            },
            {
              title: "Coordination with installation",
              description:
                "Cabinets, on-site adjustments and joints must be planned together.",
            },
            {
              title: "Control of the final result",
              description:
                "Joints, transition lines and the way surfaces read must stay clean after the work.",
            },
          ],
          actions: [
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "View turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Coordinating flooring within a renovation",
          },
          cardTitle: "What we aim to avoid",
          cardDescription:
            "Poorly integrated flooring can force a cascade of corrections to the layout, the levels and the transitions, when the problem really came from bad sequencing.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading:
            "Typical sequence for integrating flooring into a renovation",
          intro:
            "The logic stays simple: understand the subfloor, check the impacts on the other elements, then execute in the right order.",
          steps: [
            {
              number: "1",
              title: "Analysis",
              description:
                "Reading the subfloor, the levels, the transitions and the relationship with the other areas of the site.",
            },
            {
              number: "2",
              title: "Decision",
              description:
                "Choosing the material, the joints and the sequence based on the real scope of the project.",
            },
            {
              number: "3",
              title: "Preparation",
              description:
                "Getting the site ready to protect the next steps and limit rework.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Integration with cabinets, installation, transitions and the necessary adjustments.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "Checking the joints, the lines and the final result across the whole space.",
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
            "Technical points that really affect a flooring project",
          intro:
            "Flooring is rarely just an aesthetic choice. It's the technical details around it that affect the final quality most.",
          columns: "2",
          items: [
            {
              title: "Subfloor flatness",
              description:
                "The base directly determines the visual and functional result.",
              icon: "slidersHorizontal",
              bullets: [
                "Level variations carry through to the installation.",
                "A poorly read subfloor creates corrections later.",
                "The final result often depends on this preparatory work.",
              ],
            },
            {
              title: "Transitions between areas",
              description:
                "Visible joints matter as much as the surface itself.",
              icon: "doorOpen",
              bullets: [
                "Clean junctions between rooms or materials.",
                "Transitions planned around circulation and height.",
                "Fewer poorly resolved threshold effects.",
              ],
            },
            {
              title: "Relationship with the cabinets",
              description:
                "Flooring and cabinetry influence each other's installation.",
              icon: "package2",
              bullets: [
                "Direct impact on alignments and heights.",
                "Need for a clear sequence with installation.",
                "Fewer reworks on joints and adjustments.",
              ],
            },
            {
              title: "Site execution",
              description:
                "The quality of the result also depends on the order of the interventions.",
              icon: "wrench",
              bullets: [
                "Protecting surfaces at the right time.",
                "Fewer end-of-site corrections.",
                "A cleaner finish across the whole project.",
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
          heading: "Flooring mostly fits into a larger project",
          intro:
            "This service page is here to explain the coordination logic. In most cases, flooring mainly supports a kitchen, bathroom or larger turnkey renovation project.",
          items: [
            {
              title: "Turnkey renovation",
              href: "/services/renovation",
              description:
                "The main page to understand how sequencing, coordination and related work line up within a larger project.",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.webp",
                alt: "Better coordinated turnkey renovation",
              },
              badges: ["Main page", "Coordination"],
              footerCtaLabel: "View renovation",
            },
            {
              title: "Custom kitchen",
              href: "/espaces/cuisine",
              description:
                "When flooring affects the levels, the island, the cabinets and the overall reading of the kitchen.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen with clean flooring integration",
              },
              badges: ["Kitchen", "Levels"],
              footerCtaLabel: "View the kitchen page",
            },
            {
              title: "Custom bathroom",
              href: "/espaces/salle-de-bain",
              description:
                "When the transitions, moisture and floor finish need to support the rest of the room with no visible weakness.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom with clean floor finishing",
              },
              badges: ["Bathroom", "Finishing"],
              footerCtaLabel: "View the bathroom page",
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
          heading: "What a well-integrated floor should bring to the project",
          description:
            "The proof of skill isn't only in the surface chosen. It shows in the levels, the transitions and the way the flooring supports the rest of the layout without drawing attention for the wrong reasons.",
          cards: [
            {
              title: "A cleaner reading",
              description:
                "The lines and joints stay discreet instead of breaking the consistency of the space.",
            },
            {
              title: "A more stable installation",
              description:
                "The other elements of the project adjust better when the subfloor and the sequence are well framed.",
            },
            {
              title: "A more credible finish",
              description:
                "The final result looks more controlled because the technical details don't stand out.",
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
          heading: "FAQ - flooring renovation",
          intro:
            "Clear answers on sequencing, levels, condos and integration with the rest of the site.",
          items: [
            {
              q: "Can I redo only the flooring?",
              a: "Yes, but as soon as there are cabinets or a larger renovation, coordination becomes decisive.",
            },
            {
              q: "In what order should the work be done?",
              a: "The order depends on the scope, but the goal stays the same: avoid rework and protect the final result.",
            },
            {
              q: "Do you work with other trades for this type of project?",
              a: "Yes, when the flooring fits into a larger renovation. Coordination is precisely there to clarify the order of the interventions and protect the finish.",
            },
            {
              q: "Is it possible in a condo?",
              a: "Yes. Access, scheduling and sometimes acoustic constraints must be framed at the start.",
            },
            {
              q: "Does the flooring affect the cabinet installation?",
              a: "Yes. Levels and flatness directly affect the alignment, the joints and the transitions.",
            },
            {
              q: "Where can I see the complete approach for a more global project?",
              a: "The flooring renovation page mainly explains the logic of sequencing and coordination. For the full picture of a larger project, the turnkey renovation page remains the main reference.",
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
          heading:
            "Need to integrate flooring into a larger renovation?",
          intro:
            "We help you frame the right sequence and the right joints to protect the final result, then point you to the main renovation page if the project goes beyond the flooring alone.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Flooring, transitions, levels and site coordination",
        },
      },
    },
  ],
};
