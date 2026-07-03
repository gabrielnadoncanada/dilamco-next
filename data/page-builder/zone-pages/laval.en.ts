import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom Kitchen Cabinets in Laval | Dilamco",
    description:
      "Custom kitchen cabinets, bathroom vanities and closets in Laval: in-home measurements, cabinets sourced directly from our partner factory and installation by our own team, anywhere in Laval.",
    path: "/zones/laval",
    ogAlt: "Custom kitchen cabinets in Laval — Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/en" },
    { name: "Kitchen cabinets in Laval", url: SITE.url + "/en/areas/laval" },
  ],
  service: {
    name: "Custom kitchen cabinets in Laval",
    description:
      "Design, supply and installation of custom kitchen cabinets, bathroom vanities and closets in Laval, by Dilamco, a cabinet design and installation company based in Greater Montreal.",
    url: SITE.url + "/en/areas/laval",
    serviceType: "Custom kitchen cabinets",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Laval",
          heading:
            "Custom kitchen cabinets in Laval, designed and installed by Dilamco",
          description:
            "Kitchens, bathroom vanities and custom closets, designed with you around your actual space, made exclusively for Dilamco by our partner factory and installed by our own team. In-home measurements anywhere in Laval, and a Dorval showroom to see materials and finishes.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our custom kitchens",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          badges: ["Factory-direct", "Dorval showroom", "Laval"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "High-end white custom kitchen completed in Laval",
          },
          caption: "In-home measurements, anywhere in Laval",
        },
      },
    },
    {
      id: "pourquoi",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Why Laval homeowners choose factory-direct over a big-box store",
          description:
            "In Laval, kitchen cabinets mostly mean showrooms and standard modules. True custom work answers a different need: cabinetry built to your home's real dimensions, materials you actually choose, and one team accountable from design to installation.",
          cards: [
            {
              title: "Factory-direct, no middleman",
              description:
                "Our cabinets are made exclusively for Dilamco by our partner factory, to our standards. Every cabinet is fitted to your space, not the other way around.",
            },
            {
              title: "One point of contact",
              description:
                "Design, fabrication and installation by the same team. No grey zone between the seller, the factory and the installer.",
            },
            {
              title: "Materials we stand behind",
              description:
                "Birch plywood boxes, solid wood drawers, proven hardware. We show you what's behind the doors.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we do for Laval homes",
          intro:
            "The same know-how applies to every room of the house: kitchen, bathroom, bedrooms and storage.",
          columns: "2",
          items: [
            {
              title: "Kitchen cabinets",
              description:
                "Complete custom kitchens: cabinets, fronts, island, pantry and ceiling-height uppers.",
              icon: "package2",
              bullets: [
                "Layout designed for your actual space, not standard modules.",
                "Countertop and hardware coordination included.",
                "Finish options: wood, veneer, lacquer, high-grade melamine.",
              ],
            },
            {
              title: "Bathroom vanities",
              description:
                "Custom vanities adapted to your plumbing and the exact dimensions of your bathroom.",
              icon: "doorOpen",
              bullets: [
                "Optimized storage even in small bathrooms.",
                "Moisture-resistant materials.",
                "Already delivered in Laval — see it in our projects.",
              ],
            },
            {
              title: "Closets and walk-ins",
              description:
                "Custom closets, walk-ins and built-in storage for bedrooms and entryways.",
              icon: "slidersHorizontal",
              bullets: [
                "Complete fit-out: rods, drawers, adjustable shelving.",
                "From a reorganized reach-in to a full walk-in.",
                "Built to match the rest of your home.",
              ],
            },
            {
              title: "Custom built-ins",
              description:
                "Built-in furniture, bookcases, wall units and layouts catalogues don't offer.",
              icon: "wrench",
              bullets: [
                "Living-room built-ins, desks and integrated bookcases.",
                "Laundry rooms and basement storage.",
                "Designed around your building's constraints.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "processus",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "A Laval project, step by step",
          intro:
            "No need to travel: we take measurements at your home. And if you want to see materials, cabinets and finishes in person, our Dorval showroom is about thirty minutes from Laval.",
          steps: [
            {
              number: "1",
              title: "Consultation",
              description:
                "We discuss your project, needs and budget, by phone or in person.",
            },
            {
              number: "2",
              title: "In-home measurements",
              description: "Precise measurements at your home, anywhere in Laval.",
            },
            {
              number: "3",
              title: "Design and quote",
              description:
                "Plans, material choices and a detailed quote, no surprises.",
            },
            {
              number: "4",
              title: "Fabrication",
              description:
                "Your cabinets are made by our partner factory to our plans, with quality control before installation.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Clean installation and final adjustments by our own team.",
            },
          ],
        },
      },
    },
    {
      id: "realisations",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projects delivered in Laval and Greater Montreal",
          intro:
            "Real projects, from the same team that would handle yours.",
          items: [
            {
              title: "Custom vanity in Laval",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
              description:
                "Bathroom vanity built and installed for a Laval residence.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "3D rendering of a custom bathroom vanity",
              },
              badges: ["Laval", "Bathroom"],
              footerCtaLabel: "See the project",
            },
            {
              title: "High-end white kitchen",
              href: "/projets/cuisine",
              description:
                "Custom kitchen with white lacquered cabinets, completed for a Laval property.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "White lacquered custom kitchen cabinets in Laval",
              },
              badges: ["Laval", "Kitchen"],
              footerCtaLabel: "See our kitchens",
            },
            {
              title: "Custom kitchens",
              href: "/espaces/cuisine",
              description:
                "Our complete approach to the custom kitchen: layout, materials, fabrication.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "3D rendering of a custom kitchen layout",
              },
              badges: ["Kitchen", "Custom"],
              footerCtaLabel: "See the kitchen page",
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
          heading: "FAQ - custom kitchen cabinets in Laval",
          intro: "The questions Laval clients ask us most often.",
          items: [
            {
              q: "Do you serve every Laval neighbourhood?",
              a: "Yes. We work throughout Laval: Chomedey, Sainte-Rose, Fabreville, Vimont, Auteuil, Duvernay, Laval-des-Rapides, Pont-Viau, Sainte-Dorothée and Laval-Ouest. Measurements are taken at your home.",
            },
            {
              q: "Do you have a showroom in Laval?",
              a: "Not in Laval, but close by: our showroom is in Dorval, about thirty minutes away. Come see cabinets, doors, finishes and hardware by appointment. Measurements, on the other hand, are taken at your home.",
            },
            {
              q: "How much do custom kitchen cabinets cost in Laval?",
              a: "A complete custom kitchen generally runs from $30,000 to $65,000, depending on the number of cabinets, materials and layout complexity. The detailed quote is free.",
            },
            {
              q: "Do you also do vanities and closets?",
              a: "Yes. Beyond kitchen cabinets, we do bathroom vanities, custom closets, walk-ins and built-in furniture. We've already delivered custom vanities in Laval.",
            },
            {
              q: "What's the lead time for a custom kitchen?",
              a: "For custom work, allow roughly 9 to 15 weeks between plan approval and installation, depending on the season and project complexity. For a project built from our in-stock cabinets, delivery takes just a few days.",
            },
            {
              q: "Where do your cabinets come from?",
              a: "They are made exclusively for Dilamco by our partner factory, with no middleman. Design, project management and installation are handled by our local team, and stock is held at our Rigaud warehouse.",
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
          heading: "A custom cabinet or kitchen project in Laval?",
          intro:
            "Tell us about your project: we'll call you back, measure at your home and hand you a detailed quote, no strings attached.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Custom kitchen cabinets, vanities and closets — Laval and Greater Montreal",
        },
      },
    },
  ],
};
