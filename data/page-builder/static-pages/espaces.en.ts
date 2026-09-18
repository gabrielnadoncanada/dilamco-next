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
        variant: "centered",
        props: {
          badges: ["Cabinet division"],
          heading: "Custom cabinetry for six rooms of the house",
          description:
            "The general contractor draws it, orders it and installs it. No supplier for you to chase.",
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
              description: "Island, pantry and ceiling height put to work",
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
              description: "Vanity set with the tile and the plumbing",
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
              description: "Sink, towers and an unbroken folding surface",
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
              description: "Hanging rails and drawers worked out by garment",
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
              description: "Theatre, bar, cellar or library built in",
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
              description: "Reception, service storage and back-of-house",
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
      id: "division",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The cabinetry division at a glance",
          intro:
            "A division of the general contracting firm, not a second company to hire.",
          rows: [
            {
              label: "Licence",
              value: "RBQ subclass 12, cabinets and countertops, held by us",
            },
            {
              label: "Production",
              value: "Partner factory, ordered after the on-site survey",
            },
            {
              label: "Lead time",
              value: "Nine to fifteen weeks from drawing approval to delivery",
            },
            {
              label: "Materials",
              value: "Solid birch in drawers, plywood in the boxes",
            },
            {
              label: "Installation",
              value: "By our crew, in its place among the trades",
            },
            {
              label: "Contract",
              value: "Work and cabinets gathered into a single quote",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Overview of custom spaces delivered by Dilamco",
          },
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
          intro:
            "Free estimate for the room you have in mind, and one contract to sign.",
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
