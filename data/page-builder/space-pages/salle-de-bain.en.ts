import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom bathroom vanity in Laval and Montréal",
    description:
      "High-end custom bathroom vanity: design, controlled fabrication and precise installation in Montréal, Laval, the North Shore and the South Shore.",
    path: "/espaces/salle-de-bain",
    ogAlt: "Dilamco custom bathroom vanity",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    {
      name: "Custom bathroom",
      url: SITE.url + "/espaces/salle-de-bain",
    },
  ],
  service: {
    name: "Custom bathroom vanity",
    description:
      "Design, controlled fabrication and installation of high-end custom bathroom vanities in Montréal, Laval, the North Shore and the South Shore.",
    url: SITE.url + "/espaces/salle-de-bain",
    serviceType: "Custom bathroom vanity",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Spaces",
          heading:
            "Custom bathroom vanity in Laval and Greater Montréal",
          description:
            "A custom bathroom vanity is a sink cabinet designed and built to the exact dimensions of your room, with materials chosen to withstand moisture. At Dilamco, in Laval and across Greater Montréal, we design, fabricate and install custom vanities — stable structure, tailored storage and precise installation, from plan to finish.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our bathroom projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom", "Greater Montréal", "Moisture"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Custom bathroom vanity in Pierrefonds and Greater Montréal",
          },
          caption: "Built for daily use and a humid environment",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A custom bathroom built to last",
          intro:
            "In a bathroom, structure and durability over time matter as much as the design.",
          badges: ["Stability", "Moisture", "Finish"],
          cardTitle: "When custom work makes sense",
          items: [
            "You want to optimize a genuinely constrained space.",
            "Durability and stability are priorities.",
            "You're looking for execution that's better controlled than a stock solution.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
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
          heading: "From plan to installation, no improvising",
          intro:
            "The project is framed early to better manage plumbing, storage, ergonomics and finish.",
          steps: [
            {
              number: "1",
              title: "Analysis",
              description:
                "Space constraints, circulation, plumbing and storage needs.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Validation of dimensions, finishes and the logic of use.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Controlled production with standards suited to a demanding environment.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Adjustments, alignments and finishes verified at delivery.",
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
          heading: "Materials suited to moisture",
          intro:
            "A premium bathroom rests on a stable structure, durable components and choices that are simple to maintain.",
          items: [
            {
              title: "Solid birch wood",
              description:
                "Used on critical elements for its resistance and stability.",
            },
            {
              title: "Birch plywood",
              description:
                "Better dimensional stability and better load resistance.",
            },
            {
              title: "Finish choices",
              description:
                "Selection aligned with maintenance, use and the humid environment.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "In-stock vanities",
              href: "/boutique/vanites",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Material detail for a custom bathroom",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "Less warping, better durability over time and a more lasting sense of solidity.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Featured bathroom projects",
          intro:
            "A few projects that show the finish level and the quality of execution.",
          items: [
            {
              title: "Custom vanity",
              href: "/projets",
              description:
                "Optimized storage and precise finish suited to the bathroom.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Custom bathroom project in Laval",
              },
              badges: ["Laval", "Vanity"],
              footerCtaLabel: "View project",
            },
            {
              title: "Custom bathroom",
              href: "/projets",
              description:
                "A custom project designed for everyday use and durability over time.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Custom bathroom project in Montréal",
              },
              badges: ["Montréal", "Custom"],
              footerCtaLabel: "View projects",
            },
            {
              title: "Custom bathroom",
              href: "/projets",
              description:
                "Clean execution with suitable materials and careful alignments.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.webp",
                alt: "Custom bathroom project on the South Shore",
              },
              badges: ["South Shore", "Finish"],
              footerCtaLabel: "View projects",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Custom vanities across Greater Montréal",
          intro:
            "We design, fabricate and install custom bathroom vanities on both sides of the river: from the West Island to Laval, the North Shore and the South Shore.",
          badges: ["Montréal", "Laval", "North Shore", "South Shore"],
          cardTitle: "Areas served",
          items: [
            "Montréal and the West Island",
            "Laval and the North Shore",
            "South Shore and southern suburbs",
            "Design, fabrication and installation included",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our bathroom projects",
              href: "/projets",
              variant: "ghost",
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
          heading: "FAQ - custom bathrooms",
          intro:
            "The points we clarify most often before starting a project.",
          items: [
            {
              q: "How much does a custom bathroom vanity cost?",
              a: "The price of a custom bathroom vanity depends mainly on five things: the dimensions and format (single or double sink), the amount of storage (drawers, columns, niches), the materials and finishes chosen, the hardware (slides, hinges), and the constraints of the space. Because the room is humid, the materials and construction details are selected for stability and durability over time, which also affects the budget. We provide a precise estimate once the project is scoped — real measurements, desired storage and finish level — for a clear budget with no surprises.",
            },
            {
              q: "Do you make custom vanities in Laval and on the North Shore?",
              a: "Yes. We design, fabricate and install custom bathroom vanities in Laval, on the North Shore, in Montréal and on the South Shore.",
            },
            {
              q: "What's the difference with a stock bathroom vanity?",
              a: "A stock vanity is sold in fixed sizes, so you have to work around the leftover space, often losing centimetres around the sink or the plumbing. A custom vanity is sized to the millimetre for your bathroom, which lets you use the corners, heights and niches, and tailor the storage precisely around the pipes. The structure is also chosen for the room's humid environment — stable materials, construction details that limit warping — where many stock vanities age poorly. The result: a cabinet that fits better, lasts longer and is integrated into the room.",
            },
            {
              q: "Does moisture change your material choices?",
              a: "Yes. The materials and construction details are selected for this humid environment, for stability and durability over time.",
            },
            {
              q: "What's the lead time for a custom vanity?",
              a: "The lead time depends on complexity, finishes and the fabrication schedule. We confirm it during the design phase.",
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
          heading: "Tell us about your bathroom",
          intro:
            "We help you frame a durable project, suited to the space and well executed.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our bathroom projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
