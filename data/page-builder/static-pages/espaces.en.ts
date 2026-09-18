import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom spaces — our cabinetry division",
    description:
      "Kitchen, bathroom, walk-in, laundry room, basement and commercial: custom cabinetry by Dilamco, a licensed general contractor (RBQ).",
    path: "/espaces",
    ogAlt: "Dilamco custom spaces",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Spaces", url: SITE.url + "/espaces" },
  ],
  service: {
    name: "Custom spaces",
    description:
      "Pillar pages for kitchens, bathrooms, walk-ins, laundry rooms and commercial projects.",
    url: SITE.url + "/espaces",
    serviceType: "Custom spaces",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Cabinet division",
          heading: "Custom cabinetry, built into your renovation",
          description:
            "Kitchen, bathroom, walk-in, basement, laundry room or commercial space: one contract, one party accountable.",
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
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Dilamco custom spaces",
          },
          caption: "Montréal · Laval · South Shore",
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Choose your space",
          items: [
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description: "Island, pantry and cabinets to the ceiling.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "High-end custom kitchen cabinets",
              },
              badges: ["Custom-built"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description: "Single or double vanities, built for moisture.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Custom bathroom vanity",
              },
              badges: ["Vanity"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Laundry room",
              href: "/espaces/salle-de-lavage",
              description: "Folding counter, towers and plumbing worked out.",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Custom laundry room",
              },
              badges: ["Storage"],
              footerCtaLabel: "See laundry rooms",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description: "Hanging space, drawers and shelves, wall to ceiling.",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Custom walk-in closet",
              },
              badges: ["Closet"],
              footerCtaLabel: "See walk-ins",
            },
            {
              title: "Basement",
              href: "/espaces/sous-sol",
              description: "Home theatre, bar, wine cellar and library.",
              image: {
                src: "/images/generated/spaces/espaces-card-sous-sol-01.webp",
                alt: "Custom basement finishing",
              },
              badges: ["Home theatre"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description: "Offices, retail and leasehold improvements.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Custom commercial fit-out",
              },
              badges: ["Offices"],
              footerCtaLabel: "See commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why go through the general contractor",
          description:
            "Our RBQ licence covers cabinets and countertops. They arrive at the right moment in the job-site sequence.",
          cards: [
            {
              title: "One quote",
              description: "Work and cabinets priced together, one less supplier to manage.",
            },
            {
              title: "Measured after demolition",
              description: "Taken once the walls are in their final position.",
            },
            {
              title: "One party accountable",
              description: "Plumbing, electrical, flooring and installation coordinated by us.",
            },
          ],
          columns: "3",
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
              q: "Which spaces do you cover?",
              a: "Kitchen, bathroom, laundry room, walk-in and closets, basement and commercial units. Each space has its own moisture, dimension and use constraints, handled at the design stage.",
            },
            {
              q: "How long does it take?",
              a: "Nine to fifteen weeks from design sign-off to installation. When the cabinets are part of a renovation, the order is timed to the site schedule.",
            },
            {
              q: "How is this different from a stock solution?",
              a: "Stock modules impose their sizes on the room and leave wasted space. Custom work starts from your real space, with solid wood and birch plywood on the structural parts.",
            },
            {
              q: "Can you handle the full renovation?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: permit, demolition, plumbing, electrical, flooring, painting and cabinet installation, coordinated by one party, in the written contract.",
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
          heading: "Tell us about your space",
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Get a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
