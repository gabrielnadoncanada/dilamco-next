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
          heading: "Custom cabinetry for six rooms of the house",
          description:
            "We draw it, we order it and we install it. There is nobody else for you to call.",
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
              footerCtaLabel: "See commercial",
            },
          ],
        },
      },
    },
    {
      id: "division",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The cabinet division in brief",
          rows: [
            {
              label: "Licence",
              value:
                "Our RBQ licence already covers cabinets and countertops.",
            },
            {
              label: "Who builds it",
              value:
                "Our partner factory, once the survey has been done at your place.",
            },
            {
              label: "How long",
              value:
                "It takes nine to fifteen weeks from drawing approval to delivery.",
            },
            {
              label: "Materials",
              value:
                "Solid birch for the drawers and plywood for the cabinet boxes.",
            },
            {
              label: "Who installs",
              value:
                "Our own crew, at the right moment in the order of works.",
            },
            {
              label: "What you sign",
              value:
                "A single quote, covering both the renovation and the cabinets.",
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
          heading: "Tell us about the room you want redone",
          intro:
            "The estimate is free and there is only one contract for you to sign.",
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
        },
      },
    },
  ],
};
