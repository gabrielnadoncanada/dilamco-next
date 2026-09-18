import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const sousSolPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom basement finishing in Pierrefonds and Montréal",
    description:
      "Custom basement finishing: home theatre, bar, wine cellar and storage, built into your renovation by a licensed general contractor (RBQ) in Montréal.",
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
          eyebrow: "Basement",
          heading: "Custom basement finishing, from framing to built-ins",
          description:
            "Home theatre, bar, wine cellar or built-in storage, designed with the room and installed in the site sequence.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Custom-built", "Turnkey"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "High-end custom basement finishing in Pierrefonds",
          },
          caption: "Pierrefonds · West Island · Greater Montréal",
        },
      },
    },
    {
      id: "espaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build downstairs",
          items: [
            {
              title: "Home theatre room",
              description: "Riser, panels, equipment storage and screen integration.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Custom home theatre room in a basement",
              },
              badges: ["Home theatre"],
            },
            {
              title: "Basement bar",
              description: "Counter, bottle and glassware storage, appliances built in.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Custom basement bar",
              },
              badges: ["Bar"],
            },
            {
              title: "Wine cellar",
              description: "Wood, glass or under-stair, designed for storage conditions.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
                alt: "Custom wine cellar in a basement",
              },
              badges: ["Cellar"],
            },
            {
              title: "Library and office",
              description: "Storage wall and built-in desk for working from home.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Custom wall library and built-in desk",
              },
              badges: ["Office"],
            },
            {
              title: "Games room",
              description: "Wall unit and storage for an orderly family room.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Custom games room and wall unit in a basement",
              },
              badges: ["Wall unit"],
            },
            {
              title: "Storage and mechanical",
              href: "/espaces/walk-in",
              description: "Closed storage and discreet access to mechanical spaces.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
                alt: "Custom closed storage along a basement wall",
              },
              badges: ["Storage"],
              footerCtaLabel: "See closets",
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
          heading: "What a basement demands",
          intro: "Moisture, headroom and mechanical access are settled before the finishing, not after.",
          items: [
            {
              title: "Moisture checked first",
              description: "Drain, cracks and levels verified before insulating",
            },
            {
              title: "Durable structure",
              description: "Birch plywood where the load matters",
            },
            {
              title: "Clean integration",
              description: "Wiring and mechanical access concealed",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Basement finishing",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
            {
              label: "After water damage",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Detail of custom built-in millwork for a finished basement",
          },
          cardTitle: "Why it matters",
          cardDescription: "A poorly prepped basement warps and smells damp.",
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
              q: "How much does finishing a basement cost?",
              a: "The price varies with the area and the spaces you keep: a home theatre, a bar or a cellar do not involve the same millwork. The firm amount is set after the on-site survey, in the detailed quote.",
            },
            {
              q: "How long for the built-in millwork?",
              a: "Nine to fifteen weeks from design sign-off to installation. The order is timed to the site schedule so it lands once the partitions and flooring are done.",
            },
            {
              q: "How do you handle moisture?",
              a: "We check the drain, the cracks and the moisture levels before insulating. Finishes and materials are chosen for a basement environment, which limits warping.",
            },
            {
              q: "Do I need a permit to finish a basement?",
              a: "Often yes, as soon as you add partitions, a bathroom or a bedroom. We check your city's requirements and file the application for you.",
            },
            {
              q: "Can you handle the full finishing?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: permit, insulation, partitions, electrical, plumbing, flooring and millwork installation, coordinated by one party, in the written contract.",
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
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island, Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
