import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Turnkey renovation",
    description:
      "Turnkey renovation in Montréal: design, coordination, fabrication, installation and a better-managed worksite sequence.",
    path: "/services/renovation",
    ogAlt: "Dilamco turnkey renovation",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Turnkey renovation", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Turnkey renovation",
    description:
      "Design, coordination and execution when the project involves several trades.",
    url: SITE.url + "/services/renovation",
    serviceType: "Renovation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading:
            "Turnkey renovation in Montréal, a single framework from design to installation",
          description:
            "When a renovation involves several trades, the value isn't decided only by the final result. It's decided by the sequence, the coordination, the quality of technical decisions and the ability to deliver a coherent whole from start to finish.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Turnkey", "Coordination", "Montréal"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Custom renovation project",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Why Dilamco doesn't operate like a simple retailer",
          description:
            "A turnkey renovation takes more than a cabinet supplier. The advantage comes from controlling the chain, from consistent fabrication and from better management of the sequence between design, procurement, installation and related work.",
          cards: [
            {
              title: "Better-controlled procurement",
              description:
                "Choices of materials, components and finishes are framed earlier to reduce variances and better protect the schedule.",
            },
            {
              title: "More stable quality",
              description:
                "Design, fabrication and installation are thought of as a whole, not as pieces delivered without shared logic.",
            },
            {
              title: "Real coordination",
              description:
                "When the worksite involves several stages, a clear framework limits fragmentation and the grey areas between contributors.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "When a turnkey renovation makes sense",
          intro:
            "This approach becomes relevant when the project goes beyond just fabricating and installing cabinets and the overall sequence needs better management.",
          badges: ["Plumbing", "Electrical", "Flooring", "Coordination"],
          cardTitle: "What it brings",
          items: [
            "Less fragmentation between contributors.",
            "A better-framed schedule from the start.",
            "More coherent execution on site.",
          ],
          actions: [
            {
              label: "View design",
              href: "/services/design",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "A turnkey process that keeps the worksite readable",
          intro:
            "The logic stays the same from one project to the next: clarify first, lock in the important decisions, then execute in the right order.",
          steps: [
            {
              number: "1",
              title: "Scoping",
              description:
                "Needs, scope, site constraints and the level of renovation to confirm before opening the worksite.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Space organization, uses, circulation and decisions that will impact fabrication and the sequence.",
            },
            {
              number: "3",
              title: "Materials",
              description:
                "Choice of components, finishes and solutions suited to durability, maintenance and the expected level of use.",
            },
            {
              number: "4",
              title: "Fabrication and worksite",
              description:
                "Preparation of custom elements and coordination of related stages to limit rework and conflicts.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Fitting, adjustments and finishing with a clear reading of the whole project.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Technical choices that justify a premium renovation",
          intro:
            "The positioning doesn't rely on marketing talk. It relies on the quality of the components, the stability of fabrication and the integration of technical decisions into the worksite.",
          items: [
            {
              title: "Drawer structure in solid birch wood",
              description:
                "A stronger, more durable choice than a weak build when the project targets intensive daily use.",
            },
            {
              title: "Drawer bottoms in birch plywood",
              description:
                "Better load resistance, better dimensional stability and a better perception of quality over the long term.",
            },
            {
              title: "Material selection based on the space",
              description:
                "A kitchen, bathroom, storage area or service zone don't call for exactly the same technical trade-offs.",
            },
            {
              title: "Execution designed for the install",
              description:
                "A renovation goes better when choices are made with fabrication and installation in mind, not separately.",
            },
          ],
          actions: [
            {
              label: "View materials",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Material details for a custom renovation",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "In a full renovation, the invisible components influence durability as much as the visible final result.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projects that show the level of coordination",
          intro:
            "Proof of mastery shows in projects where design, fabrication, fitting and finishing stay coherent through to delivery.",
          items: [
            {
              title: "Custom kitchen",
              href: "/projets",
              description:
                "Residential project with precise layout, better-framed technical decisions and a clean finish.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Kitchen renovation project in Montréal",
              },
              badges: ["Montréal", "Kitchen"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen",
              href: "/projets",
              description:
                "Renovation designed for everyday use with better coherence between fabrication, worksite and installation.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Residential renovation project in Laval",
              },
              badges: ["Laval", "Coordination"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom kitchen",
              href: "/projets",
              description:
                "Full project with cleaner management of the sequence, the adjustments and the finishing details.",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Renovation project on the South Shore",
              },
              badges: ["South Shore", "Turnkey"],
              footerCtaLabel: "View project",
            },
          ],
          ctaLabel: "View all our projects",
          ctaHref: "/projets/",
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Types of renovation",
          intro:
            "Go to the page that fits the nature of the work to coordinate.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "A full kitchen with worksite sequencing, cabinet integration and coordination of related work.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Turnkey kitchen renovation",
              },
              badges: ["Kitchen", "Coordination"],
              footerCtaLabel: "View kitchen",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "A bathroom better framed for moisture, plumbing, storage and durable finishing.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Turnkey bathroom renovation",
              },
              badges: ["Bathroom", "Moisture"],
              footerCtaLabel: "View bathroom",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Flooring integrated in the right order to manage levels, transitions and finishing without needless rework.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring renovation integrated into a residential project",
              },
              badges: ["Flooring", "Transitions"],
              footerCtaLabel: "View flooring",
            },
            {
              title: "Home extension",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "A residential extension with feasibility, connections and execution better coordinated with the existing structure.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Turnkey home extension",
              },
              badges: ["Extension", "Execution"],
              footerCtaLabel: "View extension",
            },
          ],
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - turnkey renovation",
          intro:
            "Clear answers on price, timelines, coordination and the difference with a more fragmented approach.",
          items: [
            {
              q: "How much does a turnkey renovation cost?",
              a: "The price depends on the scope, the materials, the complexity of the worksite and the level of coordination required. A structured quote is exactly what clarifies these points before starting.",
            },
            {
              q: "What's the difference with buying cabinets then managing the rest separately?",
              a: "A fragmented approach multiplies the grey areas between design, fabrication, worksite and finishing. Turnkey, on the contrary, aims for better continuity between decisions and execution.",
            },
            {
              q: "Do you handle only the cabinets or also the worksite coordination?",
              a: "Depending on the defined scope, the renovation can include a broader level of coordination to better structure the stages and reduce rework.",
            },
            {
              q: "What are the timelines for a renovation?",
              a: "Timelines vary depending on the space, the complexity, procurement and related work. A realistic schedule is set once the project scope is clarified.",
            },
            {
              q: "Is it relevant for a kitchen, a bathroom or an extension?",
              a: "Yes. The turnkey logic becomes particularly useful as soon as several decisions need to align between space, materials, sequence and finishing.",
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
          heading: "Do you have a renovation project to scope seriously?",
          intro:
            "Get a clear, detailed quote for a turnkey renovation project that's better structured, better sequenced and better executed.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "default",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "outline",
            },
          ],
          note: "Residential, kitchen, bathroom, flooring and extension",
        },
      },
    },
  ],
};
