import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Custom cabinet colours and finishes",
    description:
      "Colours and finishes for custom kitchens, vanities and cabinets: choosing based on light, use and materials.",
    path: "/materiaux/couleurs",
    ogAlt: "Colours and finishes - Custom materials",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Materials", url: SITE.url + "/materiaux" },
    { name: "Colours and finishes", url: SITE.url + "/materiaux/couleurs" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Materials",
          heading: "Colours and finishes: style, light and maintenance",
          description:
            "Choosing cabinet colours shapes the light, how the space is perceived and how easy it is to maintain. The right choice depends on the material, the finish (matte or satin), real use and the room's context.",
          actions: [
            {
              label: "Talk design and finishes",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
          badges: ["Light", "Maintenance", "Visual consistency"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Colour and finish choices for a custom project",
          },
          caption:
            "A good finish should look great today and be easy to live with tomorrow",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "A simple method for choosing",
          description:
            "Structuring choices early in the design phase prevents rendering mistakes. You need to consider light, volume, maintenance, the type of material and the use context before validating a palette.",
          cards: [
            {
              title: "Light",
              description:
                "A colour does not react the same way depending on orientation and light sources.",
            },
            {
              title: "Volume",
              description:
                "Contrast and visual mass change how a space is perceived.",
            },
            {
              title: "Use and maintenance",
              description:
                "Kitchens and bathrooms call for pragmatic choices.",
            },
            {
              title: "Material and finish",
              description:
                "MDF, melamine and wood do not produce the same look.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "families",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Main finish families",
          items: [
            {
              title: "Neutrals",
              href: "/services/design",
              description: "Timeless, bright and easy to integrate.",
              image: {
                src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
                alt: "Neutral finish palette for custom furniture",
              },
              badges: ["Timeless"],
              footerCtaLabel: "View page",
            },
            {
              title: "Dark tones",
              href: "/services/design",
              description: "Strong visual impact, require good lighting.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Custom furniture in dark tones",
              },
              badges: ["Accent"],
              footerCtaLabel: "View page",
            },
            {
              title: "Wood and textures",
              href: "/materiaux/bois-massif",
              description: "Bring warmth and natural variation.",
              image: {
                src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
                alt: "Natural solid wood texture",
              },
              badges: ["Natural"],
              footerCtaLabel: "View page",
            },
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description:
                "Coordinate countertop, backsplash, flooring and maintenance.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen with a cohesive finish palette",
              },
              badges: ["Kitchen"],
              footerCtaLabel: "View page",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description:
                "Humidity, frequent cleaning and ventilation matter.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom with suitable finishes",
              },
              badges: ["Bathroom"],
              footerCtaLabel: "View page",
            },
            {
              title: "Materials",
              href: "/materiaux",
              description: "The final finish also depends on the chosen substrate.",
              image: {
                src: "/images/generated/materials/comparatif-materiaux-01.webp",
                alt: "Visual comparison of materials and finishes",
              },
              badges: ["Substrate"],
              footerCtaLabel: "View page",
            },
          ],
        },
      },
    },
    {
      id: "material-impact",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Colour and material: real impact on the result",
          intro:
            "The result does not come from colour alone. It also depends on the texture, the regularity of the substrate and the finish chosen.",
          badges: ["MDF", "Wood", "Melamine"],
          cardTitle: "Quick reference",
          items: [
            "MDF: more uniform for painting",
            "Wood: natural texture and variation",
            "Melamine: wide variety of decors",
            "The same tone changes depending on the substrate",
          ],
          actions: [
            {
              label: "View design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "View materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "care",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Finishes and maintenance",
          intro:
            "The right finish is not just the one that looks good on the sample. You also need to think about marks, cleaning and everyday tolerance.",
          items: [
            {
              title: "Matte.",
              description:
                "Very elegant, but sometimes more demanding to maintain.",
            },
            {
              title: "Satin.",
              description:
                "Often a good compromise between look and maintenance.",
            },
            {
              title: "Gloss.",
              description:
                "Brighter, but marks more easily depending on the context.",
            },
          ],
          actions: [
            {
              label: "View hardware",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
            {
              label: "View installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Finish choices and colour samples",
          },
          cardTitle: "Common mistake",
          cardDescription:
            "Choosing an inspiration without re-contextualizing it to the real light, the real volumes and the real use of the project.",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - Colours and finishes",
          items: [
            {
              q: "Matte or satin?",
              a: "Satin is often the best compromise, especially in a kitchen: it reflects a little light, hides fingerprints better and is easy to maintain. Matte gives a more contemporary, muted look, but marks more easily and demands more careful maintenance on heavily used surfaces. The right choice depends on the room, the colour and your tolerance for upkeep.",
            },
            {
              q: "Are dark colours risky?",
              a: "Not with good lighting and a suitable finish.",
            },
            {
              q: "Can the colour be changed later?",
              a: "Sometimes, depending on the material and the finish chosen.",
            },
            {
              q: "How can a dated look be avoided?",
              a: "For a result that ages well, keep a timeless base (neutral tones, natural woods, warm whites) on the large surfaces, and save bolder colours or finishes for elements that are easy to change — an island, a backsplash, accessories. This approach lets you refresh the look without redoing the whole kitchen, and limits the risk of a strong trend locking the space into an era.",
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
          heading: "Need help framing your finish choices?",
          intro:
            "We help you choose a palette that ages better visually, is easier to live with and stays consistent with the materials chosen.",
          actions: [
            {
              label: "Talk design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
