import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const sousSolPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom basement finishing in Pierrefonds and Montréal",
    description:
      "High-end custom basement finishing: home theatre, bar, wine cellar, library and storage. Design and installation in Montréal and Greater Montréal.",
    path: "/espaces/sous-sol",
    ogAlt: "Dilamco custom basement finishing",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Basement finishing", url: SITE.url + "/espaces/sous-sol" },
  ],
  service: {
    name: "Custom basement finishing",
    description:
      "Design, fabrication and installation of high-end basement finishing: home theatre, bar, wine cellar, library and custom storage in Pierrefonds-Roxboro, the West Island, Montréal, Laval and Greater Montréal.",
    url: SITE.url + "/espaces/sous-sol",
    serviceType: "Custom basement finishing",
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
            "Custom basement finishing in Pierrefonds and Greater Montréal",
          description:
            "Turn your basement into a high-end living space: home theatre, bar, wine cellar, library or game room. Design, controlled fabrication and careful installation — from plan to finish, by a single team based in Pierrefonds-Roxboro.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom", "Turnkey", "West Island"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "High-end custom basement finishing in Pierrefonds",
          },
          caption:
            "High-end residential in Pierrefonds, the West Island and Greater Montréal",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "A basement designed as a true living space",
          intro:
            "A basement gains value when the cabinetry is integrated from the start: storage, wall units, a bar or a theatre planned with the room, not added afterward.",
          badges: ["Custom", "Durability", "Turnkey"],
          cardTitle: "A good fit for this kind of project",
          items: [
            "A basement to finish or rethink entirely.",
            "A desire for a theatre, bar, wine cellar or built-in office.",
            "Priority on storage, finishes and a single point of coordination.",
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "espaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in a basement",
          intro:
            "Every basement combines a few of these spaces. We design custom cabinetry so they fit into the room and stay functional day to day.",
          items: [
            {
              title: "Home theatre room",
              description:
                "Riser, panels, equipment storage and screen integration for a true custom home theatre room — not just an audio system set on a console.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Custom home theatre room in a basement",
              },
              badges: ["Home theatre", "Custom"],
            },
            {
              title: "Basement bar",
              description:
                "Custom bar with countertop, bottle storage, glassware and built-in appliances, designed for entertaining.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Custom basement bar",
              },
              badges: ["Bar", "Custom"],
            },
            {
              title: "Wine cellar",
              description:
                "Custom wine cellar (wood, glass, under-stairs) designed for preserving and showcasing your bottles.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Custom wine cellar in a basement",
              },
              badges: ["Wine cellar", "Cellar"],
            },
            {
              title: "Library & office",
              description:
                "Wall-mounted library, storage wall and built-in desk for a reading, work or home-office nook in the basement.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Custom wall-mounted library and built-in office",
              },
              badges: ["Library", "Office"],
            },
            {
              title: "Game & entertainment room",
              description:
                "Wall unit, entertainment wall and storage for an orderly, durable game or family room.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Custom game room and wall unit in a basement",
              },
              badges: ["Game room", "Wall unit"],
            },
            {
              title: "Storage & mechanical",
              href: "/espaces/walk-in",
              description:
                "Custom closets, closed storage and discreet access to technical spaces to keep a basement clean and organized.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
                alt: "Custom closed storage along a basement wall",
              },
              badges: ["Storage", "Durable"],
              footerCtaLabel: "See custom closets",
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
          heading: "A clear process from design to installation",
          intro:
            "A single partner to frame decisions, coordinate the trades and reduce surprises on site.",
          steps: [
            {
              number: "1",
              title: "Design",
              description:
                "Analysis of the space, the constraints (height, columns, mechanical) and zone planning.",
            },
            {
              number: "2",
              title: "Materials",
              description:
                "Selection of components and finishes suited to humidity and the real use of a basement.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Controlled production of the modules (theatre, bar, cellar, storage) with stable standards.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Precise fitting, clean alignments and finishes verified on site.",
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
          heading: "Materials chosen for the reality of a basement",
          intro:
            "A basement imposes its constraints: humidity, temperature swings and technical access. The choice of materials and structure matters as much as the look.",
          items: [
            {
              title: "Moisture resistance",
              description:
                "Components and finishes selected to better tolerate a basement environment.",
            },
            {
              title: "Durable structure",
              description:
                "Birch plywood and solid wood where load and stability matter.",
            },
            {
              title: "Clean integration",
              description:
                "Wiring, equipment and mechanical access concealed for a consistent finish.",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "View our services",
              href: "/services",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Custom cabinetry detail for basement finishing",
          },
          cardTitle: "Why it matters",
          cardDescription:
            "Materials suited to the basement prevent warping, odours and premature replacements.",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Basement finishing across Greater Montréal",
          intro:
            "Based in Pierrefonds-Roxboro, we design, fabricate and install custom basement finishing in the West Island and across Greater Montréal.",
          badges: [
            "Pierrefonds-Roxboro",
            "West Island",
            "Montréal",
            "Laval",
            "North Shore",
            "South Shore",
          ],
          cardTitle: "Areas served",
          items: [
            "Pierrefonds-Roxboro and the West Island",
            "Montréal and central neighbourhoods",
            "Laval and the North Shore",
            "South Shore and southern suburbs",
          ],
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
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - basement finishing",
          intro:
            "Clear answers to the most common questions before starting a basement project.",
          items: [
            {
              q: "How much does custom basement finishing cost?",
              a: "The price depends on the floor area, the spaces you want (theatre, bar, wine cellar, storage), the materials and the coordination required. We give you a clear estimate once the project is scoped.",
            },
            {
              q: "What's the difference between a “home theatre room” and a “home theatre”?",
              a: "A “home theatre” often refers to the audio-video equipment (speakers, receiver). A custom home theatre room is the finishing of the room itself: riser, panels, equipment storage and built-in cabinetry. That is what we design and fabricate.",
            },
            {
              q: "Do you do basement finishing in Pierrefonds and the West Island?",
              a: "Yes. We are based in Pierrefonds-Roxboro and build custom basement finishing throughout the West Island, Montréal, Laval and Greater Montréal.",
            },
            {
              q: "How do you handle basement humidity?",
              a: "We select materials and finishes suited to a basement environment and take care with construction details to limit warping and humidity-related issues.",
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
          heading: "Tell us about your basement project",
          intro:
            "Get a structured quote tailored to your space, your priorities and your finish level.",
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
        },
      },
    },
  ],
};
