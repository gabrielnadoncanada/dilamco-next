import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const installationPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Custom cabinet & kitchen installation",
    description:
      "Custom cabinet and kitchen installation by our own crews: precise alignments, on-site adjustments and coordination with the rest of the job site.",
    path: "/services/installation",
    ogAlt: "Dilamco installation service",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    {
      name: "Installation service",
      url: SITE.url + "/services/installation",
    },
  ],
  service: {
    name: "Installation service",
    description:
      "Precise alignments, on-site adjustments and careful finishing for kitchens, bathrooms, walk-ins and commercial spaces.",
    url: SITE.url + "/services/installation",
    serviceType: "Installation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Cabinetry division",
          heading:
            "Professional installation: precision, alignment and finish",
          description:
            "Installation is the final stage where cabinets are set and adjusted on site: levelling, precise alignments, fastening and finishing. It is carried out by the crews of Dilamco, a licensed general contractor (RBQ 8306-0806-27): the install is planned with the other trades on the job — plumbing, electrical, countertops, flooring — to avoid waiting and rework.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View installed projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Alignments", "Adjustments", "Finish"],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Technical drawing and panel samples for custom installation",
          },
          caption: "A clean install changes how the whole room is perceived",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why installation makes all the difference",
          description:
            "Walls, floors and ceilings are never perfectly straight. A professional installation absorbs that reality to deliver a clean and durable result.",
          cards: [
            {
              title: "Alignments",
              description:
                "Doors, drawers and modules kept straight despite site irregularities.",
            },
            {
              title: "Adjustments",
              description:
                "Fine on-site tuning for a uniform and stable result.",
            },
            {
              title: "Durability",
              description:
                "A good installation reduces premature wear and visible defects.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "What's included in a Dilamco installation",
          intro:
            "Installation is not just about fastening modules. It includes preparation, adjustment and final verification.",
          items: [
            {
              title: "Site preparation",
              description:
                "Checking walls, floors, levels and visible constraints.",
            },
            {
              title: "Levelling and fastening",
              description: "Secure and stable anchoring of the modules.",
            },
            {
              title: "Door and drawer adjustment",
              description: "Precise alignment and smooth operation.",
            },
            {
              title: "Final inspection",
              description:
                "Verification and adjustments before the project is delivered.",
            },
          ],
          actions: [
            {
              label: "See the process",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "View fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/services/installation-hero.webp",
            alt: "Custom installation in progress",
          },
          cardTitle: "On-site coordination",
          cardDescription:
            "A clean install depends as much on preparation as on on-site adjustments.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Installation by project type",
          intro:
            "Installation logic changes depending on the space, the access and the level of use.",
          items: [
            {
              title: "Kitchen",
              href: "/espaces/cuisine",
              description:
                "Cabinets, islands and appliance integration.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Custom kitchen with precise installation",
              },
              badges: ["Kitchen", "Integration"],
              footerCtaLabel: "View kitchen",
            },
            {
              title: "Bathroom",
              href: "/espaces/salle-de-bain",
              description: "Vanities and edge protection in humid environments.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Custom bathroom with clean finish",
              },
              badges: ["Humidity", "Finish"],
              footerCtaLabel: "View bathroom",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description: "Heavy use, durability and coordination.",
              image: {
                src: "/images/generated/spaces/space-commercial-hero-01.webp",
                alt: "Commercial fit-out with planned installation",
              },
              badges: ["Commercial", "Coordination"],
              footerCtaLabel: "View commercial",
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
          heading: "FAQ - installation",
          intro:
            "Clear answers about the install, the adjustments and how the job unfolds.",
          items: [
            {
              q: "How long does an installation take?",
              a: "How long an installation takes depends on the project type and its complexity. A bathroom vanity or a walk-in is generally set in a day or two, while a full kitchen — with an island, tall cabinets and appliance coordination — takes longer. We confirm the expected duration during planning, once the project scope is set, so you know what to expect on site.",
            },
            {
              q: "Are adjustments normal?",
              a: "Yes. Adjustments are part of a professional installation and are essential to the final result.",
            },
            {
              q: "Do you only install your own cabinets?",
              a: "Yes. We install the elements we design and fabricate, which lets us guarantee consistency between fabrication and installation: same standards, same tolerances, one team responsible for the result. This continuity avoids the grey areas that are common when fabrication and installation are handled by different parties, and it makes final on-site adjustments easier.",
            },
            {
              q: "Do you work in condos or commercial spaces?",
              a: "Yes. We adapt the installation to the access, scheduling and usage constraints of each environment.",
            },
            {
              q: "Can you also handle the full renovation of the room?",
              a: "Yes — Dilamco is a general contractor (RBQ 8306-0806-27) and cabinetry is one of our divisions. We can take on the full renovation of the room: municipal permit, demolition, plumbing, electrical, flooring, painting and cabinet installation, all coordinated by a single party. The schedule and the budget are set in the written contract before work begins.",
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
          heading: "Need a clean, well-controlled installation?",
          intro:
            "We frame the install, the adjustments and the coordination to deliver a crisp, durable result.",
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
          note: "Residential and commercial installation",
        },
      },
    },
  ],
};
