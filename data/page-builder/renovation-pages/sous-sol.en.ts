import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSousSolPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Basement finishing in Montreal — turnkey",
    description:
      "Basement finishing: moisture, drainage, insulation, vapour barrier, egress, permit and plumbing. RBQ-licensed general contractor.",
    path: "/services/renovation/sous-sol",
    ogAlt: "Basement finished by a general contractor in Montreal",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Basement finishing",
      url: SITE.url + "/services/renovation/sous-sol",
    },
  ],
  service: {
    name: "Basement finishing",
    description:
      "Basement conversion and finishing by a general contractor: moisture and drainage assessment, insulation, vapour control, permit, egress, electrical, plumbing and finishing.",
    url: SITE.url + "/services/renovation/sous-sol",
    serviceType: "Basement finishing",
    areaServed: [
      "Montreal",
      "West Island",
      "Laval",
      "South Shore",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Basement finishing",
          heading: "Fix the water before a single panel goes up",
          description:
            "Diagnosis, drainage, insulation, egress and finishing carried out under a single contract.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement layouts",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Permit required", "Moisture checked"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement finished and furnished by a general contractor",
          },
          imageSide: "left",
          caption: "Basements finished in Montreal and the South Shore",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the basement mandate covers",
          columns: "2",
          items: [
            {
              title: "Water and foundation",
              description: "The step everything else depends on",
              icon: "droplets",
              bullets: [
                "Slab, walls and seepage marks examined",
                "Drain, ground slope and sump pump checked",
                "Cracks repaired before any insulation",
              ],
            },
            {
              title: "Insulation and framing",
              description: "The wall that manages vapour",
              icon: "layers",
              bullets: [
                "Continuous insulation against the concrete",
                "Studs held back off the slab",
                "Rim joists and slab perimeter treated",
              ],
            },
            {
              title: "Egress",
              description: "The condition for a bedroom",
              icon: "doorOpen",
              bullets: [
                "Opening window or door to the outside",
                "Foundation cut and window well",
                "Smoke and carbon monoxide alarms",
              ],
            },
            {
              title: "Finishing and storage",
              description: "The visible part, on a sound base",
              icon: "package2",
              bullets: [
                "Flooring a concrete slab can tolerate",
                "Drop ceiling or drywall, depending on access",
                "Stairs, doors and built-in storage",
              ],
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a basement unfolds",
          steps: [
            {
              number: "1",
              title: "Moisture diagnosis",
              description:
                "Slab, cracks, sump pump and clear ceiling height measured.",
            },
            {
              number: "2",
              title: "Corrective work",
              description:
                "Cracks sealed, drainage redone. Nothing gets finished over a leak.",
            },
            {
              number: "3",
              title: "Layout and permit",
              description:
                "Floor plan drawn, application filed with your city.",
            },
            {
              number: "4",
              title: "Insulation and framing",
              description:
                "Insulation, studs, egress, circuits and plumbing inspected.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "Drywall, ceiling, flooring, stairs, paint, then handover.",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "grid",
        variant: "price-tiles",
        props: {
          heading: "What a basement costs",
          tiles: [
            {
              title: "Open floor",
              price: "from $25,000",
              hint: "one large room, no plumbing",
              includes: [
                "Insulation and vapour control",
                "Framing, drywall and paint",
                "Lighting and circuits",
              ],
            },
            {
              title: "Full basement",
              price: "$40,000 to $80,000",
              hint: "bedroom, bathroom, storage",
              featured: true,
              includes: [
                "Floor plan and conversion permit",
                "Egress window",
                "Bathroom connected to the drain",
                "Flooring, ceiling, doors",
              ],
            },
          ],
          note: "Indicative ranges. Corrective drainage or foundation work is priced separately.",
          action: {
            label: "Free quote",
            href: "/contact",
            variant: "primary",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Basements already finished",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Home theatre built into a finished basement",
              },
              caption: "Home theatre",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Basement bar with counter and storage",
              },
              caption: "Bar and counter",
            },
            {
              kind: "stat",
              value: "1 permit",
              label: "Required as soon as a living space is added",
            },
            {
              kind: "text",
              title: "See basement layouts",
              description:
                "Theatre, bar, wine room, office: what a basement can become.",
              href: "/espaces/sous-sol",
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
              q: "My basement takes on water, can it still be finished?",
              a: "Not before the water is stopped: a crack, a blocked weeping tile, ground sloping toward the house or a failing pump. Finishing over seepage means doing it all again.",
            },
            {
              q: "Do I need a permit to finish a basement?",
              a: "Yes. Turning a raw basement into living space requires a permit in most municipalities, with a drawing attached. We prepare the file and submit the application.",
            },
            {
              q: "Can I put a bedroom in the basement?",
              a: "Only with an egress: a reachable opening window or a door to the outside. That usually means cutting the concrete foundation and adding a window well.",
            },
            {
              q: "Can a bathroom be added to the basement?",
              a: "Yes. Depending on how deep the main drain sits, we break the slab to connect by gravity or install an ejector pump. Ventilation follows, with an inspection.",
            },
            {
              q: "What if the ceiling height is tight?",
              a: "A few centimetres come back from hanging less, rerouting ducts and choosing a thin floor assembly. We measure the clear height at the visit and give you the verdict.",
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
          heading: "Have your basement assessed",
          intro:
            "We start with moisture and clear height, then price the layout.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Moisture, insulation, permit and egress",
        },
      },
    },
  ],
};
