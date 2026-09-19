import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom kitchen & cabinetry projects",
    description:
      "Custom projects: kitchens, vanities, walk-ins, laundry rooms and commercial work, delivered by Dilamco, a licensed general contractor (RBQ).",
    path: "/projets",
    ogAlt: "Dilamco projects",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Projects", url: SITE.url + "/projets" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Real cases"],
          heading: "Kitchens, vanities, storage and commercial work",
          description:
            "Job sites we ran from start to finish across Greater Montréal.",
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
      id: "categories",
      content: {
        type: "grid",
        variant: "image-cards-slider-lightbox",
        props: {
          heading: "Browse the projects by room",
          intro: "Pick the room that looks most like your own project.",
          items: [
            {
              title: "Kitchens",
              href: "/projets/cuisine",
              description: "Kitchens rebuilt from top to bottom.",
              footerCtaLabel: "View kitchens",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Custom kitchen projects",
              },
            },
            {
              title: "Bathrooms & vanities",
              href: "/projets/salle-de-bain",
              description: "Vanities that hold up in a wet room.",
              footerCtaLabel: "View bathrooms",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Custom bathroom vanity projects",
              },
            },
            {
              title: "Walk-in closets & storage",
              href: "/projets/walk-in",
              description: "Storage drawn around what you actually own.",
              footerCtaLabel: "View walk-ins",
              image: {
                src: "/images/generated/spaces/espaces-card-walkin-01.webp",
                alt: "Custom walk-in closet and storage projects",
              },
            },
            {
              title: "Laundry rooms",
              href: "/projets/salle-de-lavage",
              description: "Laundry rooms that are easy to keep clean.",
              footerCtaLabel: "View laundry rooms",
              image: {
                src: "/images/generated/spaces/espaces-card-laundry-01.webp",
                alt: "Custom laundry room projects",
              },
            },
            {
              title: "Commercial",
              href: "/projets/commercial",
              description: "Offices and retail delivered ready to occupy.",
              footerCtaLabel: "View commercial",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Custom commercial projects",
              },
            },
          ],
        },
      },
    },

    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "A few completed job sites",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/projects/cuisine-sur-mesure-laval-1.webp",
                alt: "Custom kitchen delivered in Laval",
              },
              caption: "Custom kitchen, Laval",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/projects/cuisine-sur-mesure-terrebonne-1.webp",
                alt: "Full-height cabinets installed in Terrebonne",
              },
              caption: "Full-height cabinets, Terrebonne",
            },
            {
              kind: "image",
              image: {
                src: "/images/projects/cuisine-sur-mesure-repentigny-1.webp",
                alt: "Centre island in a custom kitchen in Repentigny",
              },
              caption: "Centre island, Repentigny",
            },
            {
              kind: "image",
              image: {
                src: "/images/projects/Signature-Bouleau.webp",
                alt: "Birch cabinet boxes and drawers in a signature kitchen",
              },
              caption: "Birch interiors",
            },
            {
              kind: "text",
              title: "Something similar in mind?",
              description:
                "Send us your photos and measurements and we will give you a price range.",
              href: "/contact",
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
          heading: "You have a project of the same kind",
          intro: "The estimate is free and we get back to you within a day or two.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View our spaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          note: "Residential and commercial · Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
