import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePageEn: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Custom laundry room — general contractor",
    description:
      "Custom laundry room in Montréal, Laval and on the South Shore: design, production at our partner factory and installation by a licensed general contractor.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Dilamco custom laundry room",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    {
      name: "Custom laundry room",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Custom laundry room",
    description:
      "Design, controlled fabrication and installation of custom laundry room cabinets.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Custom laundry room",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Laundry room",
          heading: "Custom laundry room, plumbing and storage in one go",
          description:
            "Folding counter, towers and storage sized for the room, installed with the plumbing and venting.",
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
            src: "/images/generated/spaces/space-laundry-hero-01.webp",
            alt: "Custom laundry room in Pierrefonds and Greater Montréal",
          },
          caption: "Montréal · Laval · South Shore",
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What the mandate covers",
          description:
            "A laundry room is a service space. We settle the appliances, the water and the air before the storage.",
          cards: [
            {
              title: "Folding counter",
              description: "A continuous surface over the appliances, at working height.",
            },
            {
              title: "Towers and baskets",
              description: "Vertical storage for supplies, baskets and cleaning gear.",
            },
            {
              title: "Plumbing and venting",
              description: "Sink, tap, dryer exhaust and appliance clearances all checked.",
            },
            {
              title: "One party accountable",
              description: "Flooring, paint, electrical and cabinets under the same contract.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Recent laundry rooms",
          items: [
            {
              title: "Laundry room, Montréal",
              href: "/projets",
              description: "Storage and worktop in a compact service space.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Custom laundry room project in Montréal",
              },
              badges: ["Montréal"],
              footerCtaLabel: "View project",
            },
            {
              title: "Laundry room, Laval",
              href: "/projets",
              description: "Vertical storage and washable finishes.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Custom laundry room project in Laval",
              },
              badges: ["Laval"],
              footerCtaLabel: "View project",
            },
            {
              title: "Laundry room, South Shore",
              href: "/projets",
              description: "Sink, counter and towers on a single run.",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Custom laundry room project on the South Shore",
              },
              badges: ["South Shore"],
              footerCtaLabel: "View project",
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
          heading: "Frequently asked questions",
          items: [
            {
              q: "How much does a custom laundry room cost?",
              a: "The price depends on the layout (stacked or side-by-side appliances, sink, worktop), the amount of storage and the technical constraints. The firm amount is set after the on-site survey.",
            },
            {
              q: "How long does it take?",
              a: "Nine to fifteen weeks from design sign-off to installation. Plumbing and electrical work are scheduled before the cabinets are delivered.",
            },
            {
              q: "What materials do you recommend?",
              a: "Birch plywood, washable finishes that stand up to steam and splashes, durable hardware. Backs, fasteners and clearances around the appliances limit warping.",
            },
            {
              q: "Can the appliances be moved in the room?",
              a: "Yes, by relocating the supply, the drain and the dryer exhaust. That often decides the final layout, so we confirm it during the survey.",
            },
            {
              q: "Can you renovate the whole room?",
              a: "Yes. Dilamco is a general contractor, RBQ licence 8306-0806-27: plumbing, electrical, venting, flooring, painting and cabinet installation, coordinated by one party, in the written contract.",
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
          heading: "Tell us about your laundry room",
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
          note: "RBQ licence 8306-0806-27 · Montréal, Laval, South Shore",
        },
      },
    },
  ],
};
