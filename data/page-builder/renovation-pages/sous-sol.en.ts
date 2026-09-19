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
          heading: "Basement finishing, from the moisture check to the paint",
          description:
            "We check the moisture first, then insulate, divide the rooms and finish, under a single contract.",
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
          heading: "What a finished basement includes",
          columns: "2",
          items: [
            {
              title: "Moisture and foundation",
              icon: "droplets",
              bullets: [
                "We examine the slab, the walls and any water marks",
                "We check the drain, the ground slope and the sump pump",
                "We repair the cracks before we insulate",
              ],
            },
            {
              title: "Insulation and walls",
              icon: "layers",
              bullets: [
                "We apply continuous insulation against the concrete",
                "We hold the stud walls slightly back off the slab",
                "We also insulate the perimeter of the floor above",
              ],
            },
            {
              title: "Emergency exit",
              icon: "doorOpen",
              bullets: [
                "A window that opens, or a door to the outside",
                "We cut the foundation and install a window well",
                "We add the smoke and carbon monoxide alarms",
              ],
            },
            {
              title: "Finishing and storage",
              icon: "package2",
              bullets: [
                "We choose flooring that can sit on concrete",
                "Drop ceiling or drywall, depending on pipe access",
                "We redo the stairs, the doors and the storage",
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
          heading: "The stages of a basement finish",
          steps: [
            {
              number: "1",
              title: "Moisture check",
              description:
                "We look for cracks and measure the height of the ceiling.",
            },
            {
              number: "2",
              title: "Repairs",
              description:
                "We seal the cracks and fix the drainage. We never finish over a leak.",
            },
            {
              number: "3",
              title: "Layout and permit",
              description:
                "We draw the room plan and file the application with your city.",
            },
            {
              number: "4",
              title: "Insulation and walls",
              description:
                "We insulate, frame the walls, run the wiring, and the inspector comes.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "We hang the drywall, the ceiling and the floor, then paint.",
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
          heading: "What a finished basement costs",
          tiles: [
            {
              title: "One large room",
              price: "from $25,000",
              hint: "no bedroom and no bathroom",
              includes: [
                "Insulation and vapour control",
                "Walls, drywall and paint",
                "Lighting and outlets",
              ],
            },
            {
              title: "Full basement",
              price: "$40,000 to $80,000",
              hint: "bedroom, bathroom and storage",
              featured: true,
              includes: [
                "Floor plan and conversion permit",
                "Emergency exit window",
                "Bathroom connected to the drain",
                "Flooring, ceiling and doors",
              ],
            },
          ],
          note: "These are ballpark ranges. Drainage or foundation repairs are priced separately.",
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
          heading: "Basements we have finished",
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
              caption: "Bar with counter and storage",
            },
            {
              kind: "stat",
              value: "1 permit",
              label: "Required as soon as you add a living space",
            },
            {
              kind: "text",
              title: "See basement layouts",
              description:
                "Theatre, bar, wine room or office: what a basement can become.",
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
              a: "Not before the water is stopped: a crack, a blocked weeping tile, ground sloping toward the house or a pump that no longer works. Finishing over it means starting again.",
            },
            {
              q: "Do I need a permit to finish a basement?",
              a: "Yes. Turning a raw basement into living space requires a permit in most cities, with a drawing attached. We prepare the file and submit the application.",
            },
            {
              q: "Can I put a bedroom in the basement?",
              a: "Only with an emergency exit: a window that opens and can be reached, or a door to the outside. That often means cutting the concrete and adding a window well.",
            },
            {
              q: "Can a bathroom be added to the basement?",
              a: "Yes. Depending on how deep the main drain sits, we break the slab to connect by gravity, or we install a pump. Ventilation follows, with an inspection.",
            },
            {
              q: "What if my ceiling is too low?",
              a: "We gain a few centimetres by rerouting the ducts and choosing a thin floor. We measure the height at the visit and give you a straight answer.",
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
            "We start by checking the moisture and the ceiling height, then we price the work.",
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
        },
      },
    },
  ],
};
