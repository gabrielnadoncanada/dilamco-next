import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Turnkey home extension in Montreal",
    description:
      "Turnkey home addition: feasibility, work sequencing, coordination and clean integration with the existing house.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Dilamco home addition",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Home addition",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Home addition",
    description:
      "Planning, feasibility, coordination and full execution for residential addition projects.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Home addition",
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
            "Turnkey home addition: planning the extension without weakening the existing house",
          description:
            "A residential addition is the adding of livable space to an existing house — a ground-floor extension, a raised storey or an annex — which touches feasibility, structure, the building envelope and interior connections. Far more than adding square footage, you have to frame the work sequence to deliver a coherent, livable result.",
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
          badges: ["Feasibility", "Coordination", "Integration"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Residential renovation and addition project",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "risks",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why an addition quickly becomes complex",
          description:
            "The risk isn't only the cost of the work. The real challenge is integrating a new section into an existing house without creating grey zones between structure, envelope, circulation and finish.",
          cards: [
            {
              title: "Existing house",
              description:
                "Levels, structure, openings and hidden constraints must be validated before designing the addition.",
            },
            {
              title: "Work sequence",
              description:
                "Demolition, structure, closing the envelope and finishing must follow each other cleanly to limit rework.",
            },
            {
              title: "Trade coordination",
              description:
                "The more elements a project touches, the more coordination determines the final quality and the predictability of timelines.",
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
          heading: "Our approach to framing a residential addition",
          intro:
            "The goal isn't just to add a room. You have to confirm what's realistic, structure the decisions and prepare an execution that integrates with the current house.",
          items: [
            {
              title: "Scope analysis",
              description:
                "We clarify the intended use, the target square footage, the site constraints and the level of intervention on the existing house.",
            },
            {
              title: "Technical validation",
              description:
                "We frame the sensitive points such as structure, connections, site access and the overall logic of the work.",
            },
            {
              title: "Execution sequence",
              description:
                "The steps are ordered to limit interruptions, rework and conflicts between trades.",
            },
            {
              title: "Control of the final result",
              description:
                "The addition should feel like it belongs to the house, not work like a poorly connected add-on.",
            },
          ],
          actions: [
            {
              label: "View the design service",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "View turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planning a residential addition project",
          },
          cardTitle: "What we aim to avoid",
          cardDescription:
            "Projects that move ahead without a clear sequence often end with costly adjustments, compromised finishes or weak visual integration.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Typical sequence of an addition project",
          intro:
            "Every project varies, but the logic stays the same: frame before opening up, coordinate before accelerating, and finish only when the integration is clean.",
          steps: [
            {
              number: "1",
              title: "Framing",
              description:
                "Needs, feasibility, site constraints and the level of intervention on the existing house.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Organization of volumes, connections, circulation, openings and the main technical decisions.",
            },
            {
              number: "3",
              title: "Execution",
              description:
                "Structural and related work coordinated according to a sequence that protects progress on site.",
            },
            {
              number: "4",
              title: "Integration",
              description:
                "Finishes, adjustments and connections so the addition works with the rest of the house.",
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
          heading: "Technical points that truly shape the project",
          intro:
            "A successful addition depends on a series of technical decisions made early enough to avoid blockers and visible compromises.",
          columns: "2",
          items: [
            {
              title: "Structure and openings",
              description:
                "Connection between the new volume and the existing house.",
              icon: "package2",
              bullets: [
                "Checking the structure to be modified before the work begins.",
                "Openings and spans designed for real-world use.",
                "Impact on walls, levels and interior circulation.",
              ],
            },
            {
              title: "Envelope and connections",
              description:
                "The visible and invisible connection affects durability as much as appearance.",
              icon: "doorOpen",
              bullets: [
                "Clean junction between old and new.",
                "Management of interior and exterior transitions.",
                "Attention to the details that give away a poorly integrated add-on.",
              ],
            },
            {
              title: "Interior organization",
              description:
                "The addition should improve the house, not just add square footage.",
              icon: "slidersHorizontal",
              bullets: [
                "Smoother circulation between living areas.",
                "Storage, furniture and openings planned from the start.",
                "Possible integration of a kitchen, bathroom or walk-in.",
              ],
            },
            {
              title: "Site coordination",
              description:
                "The level of control determines the predictability of timelines and the quality of the finish.",
              icon: "wrench",
              bullets: [
                "Order of interventions clarified before starting.",
                "Less unproductive overlap between teams.",
                "Fewer corrections at the end of the project.",
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
            "How the addition integrates with the rooms of the house",
          intro:
            "An addition often makes the most sense when it better supports the kitchen, the bathroom or the storage areas. These pillar pages remain the main conversion destinations.",
          items: [
            {
              title: "Custom kitchen",
              href: "/espaces/cuisine",
              description:
                "When the addition mainly serves a more functional kitchen, the focus becomes circulation, the island and the integration of appliances.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen integrated into an addition",
              },
              badges: ["Kitchen", "Circulation"],
              footerCtaLabel: "View the kitchen page",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description:
                "An extension can let you add or enlarge a bathroom with better management of moisture, plumbing and storage.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom integrated into an addition",
              },
              badges: ["Moisture", "Plumbing"],
              footerCtaLabel: "View the bathroom page",
            },
            {
              title: "Walk-in and storage",
              href: "/espaces/walk-in",
              description:
                "Several additions are built to create a more complete suite with tailored storage and clearer organization.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Custom walk-in in a residential extension",
              },
              badges: ["Storage", "Suite"],
              footerCtaLabel: "View the walk-in page",
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
          heading: "What a good addition should ultimately deliver",
          description:
            "Proof of mastery isn't only in the added volume. It shows in how the house works after the project and in the quality of the connections visible day to day.",
          cards: [
            {
              title: "Clear reading",
              description:
                "The new section should feel consistent with the house rather than look hastily added.",
            },
            {
              title: "Improved use",
              description:
                "Circulation, natural light, storage or capacity should be genuinely better.",
            },
            {
              title: "Clean finish",
              description:
                "Transitions, alignments and finishing details should support the perception of a well-controlled project.",
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
          heading: "FAQ - home addition",
          intro:
            "Clear answers on feasibility, coordination, timelines and integration with the existing house.",
          items: [
            {
              q: "Does Dilamco handle a complete addition?",
              a: "Yes, depending on the confirmed scope. The goal is to clearly frame what's included, the level of coordination required and the overall sequence before starting.",
            },
            {
              q: "Are all additions feasible?",
              a: "No. Feasibility depends on the existing house, the site, the structure, access and the applicable regulations. That's why the initial analysis is essential.",
            },
            {
              q: "How do you handle the unexpected on this kind of project?",
              a: "We don't eliminate every surprise, but a good sequence and a better reading of the existing house strongly reduce late corrections and conflicts between interventions.",
            },
            {
              q: "How long does a home addition take?",
              a: "The duration varies with the square footage, the complexity, the level of intervention on the existing house and the related work. A realistic timeline is set once the scope is better defined.",
            },
            {
              q: "Is it relevant if the main goal is to improve the kitchen or a primary suite?",
              a: "Yes. Many addition projects exist to better accommodate a kitchen, a bathroom or a storage area. In that case, the addition serves the corresponding pillar page rather than replacing it.",
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
          heading: "Planning a residential addition?",
          intro:
            "We help you frame feasibility, the work sequence and integration with the existing house so you start from a more manageable base.",
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
          note: "Addition, reconfiguration and integrated renovation",
        },
      },
    },
  ],
};
