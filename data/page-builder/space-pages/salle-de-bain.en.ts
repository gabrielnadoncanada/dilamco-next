import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom bathroom vanity in Laval and Montréal",
    description:
      "Custom bathroom vanity in Laval, Montréal and on both shores, designed, supplied and installed by Dilamco, a licensed general contractor (RBQ).",
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
          eyebrow: "Bathroom",
          heading: "Custom vanity, installed with the plumbing",
          description:
            "The vanity is sized for the room and installed in the job-site sequence, by one team.",
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
          badges: ["Custom-built", "Moisture-ready"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Custom bathroom vanity in Pierrefonds and Greater Montréal",
          },
          caption: "Laval · Montréal · North Shore · South Shore",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "The configurations we build",
          columns: "2",
          items: [
            {
              title: "Single sink",
              description: "For compact bathrooms and powder rooms.",
              icon: "package2",
              bullets: [
                "Width set to the available wall",
                "Storage optimized under the sink",
              ],
            },
            {
              title: "Double sink",
              description: "For a shared primary bathroom.",
              icon: "slidersHorizontal",
              bullets: [
                "Two dedicated counter areas",
                "Centre tower or drawers if needed",
              ],
            },
            {
              title: "Floating vanity",
              description: "Wall-mounted, clear floor and easier cleaning.",
              icon: "doorOpen",
              bullets: [
                "More open feel in small rooms",
                "Height set to your use",
              ],
            },
            {
              title: "Storage vanity",
              description: "Deep drawers, tower and built-in organization.",
              icon: "wrench",
              bullets: [
                "Solid birch drawers",
                "Dedicated space for products and towels",
              ],
            },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Recent bathrooms",
          items: [
            {
              title: "Custom vanity, Laval",
              href: "/projets",
              description: "Storage worked around the existing plumbing.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Custom bathroom project in Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "See the work",
            },
            {
              title: "Bathroom, Montréal",
              href: "/projets",
              description: "Vanity and tile installed in the same sequence.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Custom bathroom project in Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "See the work",
            },
            {
              title: "Bathroom, South Shore",
              href: "/projets",
              description: "Careful alignments and finishes chosen for moisture.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.webp",
                alt: "Custom bathroom project on the South Shore",
              },
              badges: ["South Shore"],
              footerCtaLabel: "See the work",
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
          heading: "Materials chosen for moisture",
          intro: "A bathroom wears furniture down faster than the rest of the house. The structure is what holds.",
          items: [
            {
              title: "Solid birch",
              description: "On the critical parts, for stability",
            },
            {
              title: "Birch plywood",
              description: "Holds its shape better than particleboard",
            },
            {
              title: "Washable finishes",
              description: "Chosen for daily upkeep",
            },
          ],
          actions: [
            {
              label: "Explore materials",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Material detail for a custom bathroom",
          },
          cardTitle: "What it changes",
          cardDescription: "Less warping, a longer service life.",
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
              q: "How much does a custom vanity cost?",
              a: "The price depends on the format (single or double sink), the amount of storage, the finishes and the hardware. The firm amount is set after the on-site survey, in the detailed quote.",
            },
            {
              q: "How long does it take?",
              a: "Nine to fifteen weeks from design sign-off to installation. When the vanity is part of a full renovation, the order is timed to the site schedule.",
            },
            {
              q: "How is this different from a stock vanity?",
              a: "A stock vanity comes in fixed sizes, which wastes inches around the sink and the pipes. Custom work uses the real angles, heights and alcoves of the room.",
            },
            {
              q: "Does moisture change your materials?",
              a: "Yes. Solid birch, birch plywood and washable finishes, chosen to limit warping. Room ventilation is checked along with the rest of the job.",
            },
            {
              q: "Can you renovate the whole bathroom?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: demolition, plumbing, electrical, waterproofing membrane, tile, ventilation and vanity installation, coordinated by one party, in the written contract.",
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
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, North Shore, South Shore",
        },
      },
    },
  ],
};
