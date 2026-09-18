import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const fabricationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom cabinetry fabrication — partner factory",
    description:
      "Custom cabinets produced by our partner factory, with quality control and job-site coordination handled by Dilamco, a licensed general contractor.",
    path: "/services/fabrication",
    ogAlt: "Dilamco fabrication service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Fabrication service",
      url: SITE.url + "/services/fabrication",
    },
  ],
  service: {
    name: "Fabrication service",
    description:
      "Custom cabinets built for us by our partner factory, under Dilamco's specifications, quality control and coordination.",
    url: SITE.url + "/services/fabrication",
    serviceType: "Fabrication",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Cabinetry division",
          heading: "Custom fabrication: precision, consistency and durability",
          description:
            "Fabrication is the stage where cabinets are produced from the approved plans: cutting, assembly and finishing of the boxes, doors and drawers. Production is entrusted to our exclusive partner factory. The cabinetry division of Dilamco, a licensed general contractor (RBQ 8306-0806-27), remains responsible for the plans, for quality control on delivery and for coordination with the rest of the job site.",
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
          badges: ["Precision", "Durability", "Custom"],
          image: {
            src: "/images/generated/services/service-fabrication-hero-01.webp",
            alt: "Technical drawings and material samples for custom fabrication",
          },
          caption:
            "Materials, assembly and details that hold up over time",
        },
      },
    },
    {
      id: "meaning",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What custom fabrication really means",
          intro:
            "Custom work aims for a real fit to the space and the use, not just cutting to the right width. The plans and the specifications come from us; the production comes from our partner factory.",
          badges: ["Real dimensions", "Quality control", "Real use"],
          cardTitle: "What makes the difference",
          items: [
            "Adapting to the space and to real constraints.",
            "Controlled alignments and proportions between modules.",
            "Choice of materials and hardware based on use.",
            "Quality control on delivery, before installation.",
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
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
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
          heading: "Fabrication process",
          intro:
            "Each step prepares the next one to reduce rework and make for a clean installation.",
          steps: [
            {
              number: "1",
              title: "Validation",
              description:
                "Design, measurements and constraints clarified by Dilamco before production starts.",
            },
            {
              number: "2",
              title: "Selection",
              description:
                "Materials and hardware specified for durability, moisture and maintenance.",
            },
            {
              number: "3",
              title: "Production",
              description:
                "Modules, doors and drawers built by our partner factory to our specifications.",
            },
            {
              number: "4",
              title: "Receiving",
              description:
                "Quality control on delivery and coordination with the job-site schedule.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Fabrication by project type",
          intro:
            "The level of use and the constraints change with the space, but the execution standard stays high.",
          items: [
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description:
                "Modules, islands, optimized storage and appliance integration.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen with precise fabrication",
              },
              badges: ["Kitchen", "Storage"],
              footerCtaLabel: "View kitchen",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description: "Vanities and storage suited to moisture.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom with durable fabrication",
              },
              badges: ["Moisture", "Durability"],
              footerCtaLabel: "View bathroom",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Heavy use, durability and functional consistency.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Custom commercial fit-out with robust fabrication",
              },
              badges: ["Commercial", "Heavy use"],
              footerCtaLabel: "View commercial",
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
          heading: "FAQ - fabrication",
          intro:
            "Clear answers about custom fabrication and what it involves.",
          items: [
            {
              q: "What's the difference between custom and semi-custom?",
              a: "Custom starts from your real space: each cabinet is sized to the millimetre according to your measurements, layout and constraints. Semi-custom starts from predefined modules that are adapted within certain limits (a few widths, finish options), without redesigning entirely. Custom makes better use of corners, heights and unusual spaces; semi-custom can be enough when the space is standard. The difference shows mostly in the final fit and in making the most of every centimetre.",
            },
            {
              q: "Which materials age best?",
              a: "It depends on the space, moisture, maintenance, edge banding, hardware and installation.",
            },
            {
              q: "Is it 100% customizable?",
              a: "The goal is to adapt the project to the space and the use, within the limits of real technical constraints.",
            },
            {
              q: "What are the fabrication lead times?",
              a: "Fabrication lead times vary with the project's complexity, material availability and coordination with installation. For a custom project, you should generally allow 9 to 15 weeks between design approval and the final install. A precise schedule is confirmed once the plans are settled, to give you clear visibility on each stage.",
            },
            {
              q: "Who actually builds your cabinets?",
              a: "The cabinets are produced for us by our exclusive partner factory, to the plans and specifications set by Dilamco. We remain responsible for the design, the choice of materials and hardware, quality control on delivery, the installation and the follow-up afterwards. You deal with one party from plan to handover, with no extra middleman.",
            },
            {
              q: "Can you also handle the full renovation of the room?",
              a: "Yes — Dilamco is a general contractor (RBQ 8306-0806-27) and cabinetry is one of our divisions. We can take on the full renovation of the room: municipal permit, demolition, plumbing, electrical, flooring, painting and cabinet installation, all coordinated by a single party. The schedule and the budget are set in the written contract before work begins.",
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
          heading: "Want a project built to last?",
          intro:
            "We help you frame the right technical choices, materials and execution details before production starts.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          note: "Montréal, Laval and the South Shore",
        },
      },
    },
  ],
};
