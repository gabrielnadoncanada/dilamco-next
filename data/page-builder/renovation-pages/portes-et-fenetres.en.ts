import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPortesFenetresPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Window and door replacement in the West Island",
    description:
      "Window, patio door, entry door and basement egress window replacement. Measuring, sealed installation, permits and trim by an RBQ contractor.",
    path: "/services/renovation/portes-et-fenetres",
    ogAlt: "Window and door replacement by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Windows and doors",
      url: SITE.url + "/services/renovation/portes-et-fenetres",
    },
  ],
  service: {
    name: "Window and door replacement",
    description:
      "Replacement and installation of windows, patio doors, entry doors and basement egress windows by a general contractor: measuring, custom ordering, sealed installation, permits and interior and exterior trim.",
    url: SITE.url + "/services/renovation/portes-et-fenetres",
    serviceType: "Window and door replacement",
    areaServed: [
      "Pierrefonds-Roxboro",
      "West Island",
      "Montreal",
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
          heading: "Window and door replacement, from rough opening to trim",
          description:
            "We measure, order to size, install with a tight seal and redo the trim inside and out.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Trim included", "Price per opening"],
          image: {
            src: "/images/generated/renovation/renovation-portes-fenetres-hero-01.webp",
            alt: "Living room with new windows and a sliding patio door",
          },
          imageSide: "left",
          caption: "West Island, Montreal and Laval",
        },
      },
    },
    {
      id: "ouvertures",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "The windows and doors we replace",
          columns: "2",
          items: [
            {
              title: "Windows",
              icon: "window",
              bullets: [
                "We measure every opening before ordering",
                "We install PVC, hybrid or aluminum windows",
                "We insulate and caulk the perimeter, inside and out",
              ],
            },
            {
              title: "Patio doors",
              icon: "patioDoor",
              bullets: [
                "We replace 5, 6 and 8 foot patio doors",
                "We check the floor and the sill under the threshold",
                "We add a header if the opening gets wider",
              ],
            },
            {
              title: "Entry doors",
              icon: "doorOpen",
              bullets: [
                "We install steel, glass and double entry doors",
                "We adjust the threshold, hardware and weatherstripping",
                "We redo the interior casing and exterior trim",
              ],
            },
            {
              title: "Basement egress windows",
              icon: "shovel",
              bullets: [
                "We enlarge the opening in the concrete for a bedroom",
                "We install the window well and connect the drainage",
                "We meet the exit size the building code requires",
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
          heading: "How we replace your windows and doors",
          steps: [
            {
              number: "1",
              title: "Visit and measuring",
              description:
                "We measure every opening and check the condition of the existing frames.",
            },
            {
              number: "2",
              title: "Price per opening",
              description:
                "You get a written price for each window and each door.",
            },
            {
              number: "3",
              title: "Custom order",
              description:
                "Units are built to your dimensions, then delivered to the site.",
            },
            {
              number: "4",
              title: "Sealed installation",
              description:
                "We remove the old unit and install membrane, foam and sealant.",
            },
            {
              number: "5",
              title: "Finishing",
              description:
                "We redo the casing, the exterior trim and the paint as needed.",
            },
          ],
        },
      },
    },
    {
      id: "methode",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Insert replacement or full-frame replacement",
          intro:
            "There are two ways to replace a window. We pick one after checking the frame and the sill.",
          items: [
            {
              title: "Inside the existing frame",
              description: "faster and leaves the walls untouched, if the frame is sound.",
            },
            {
              title: "Down to the rough opening",
              description: "we remove the whole frame to inspect, insulate and redo the seal.",
            },
            {
              title: "Enlarged opening",
              description: "we add a header, and the city then requires a permit.",
            },
            {
              title: "Foggy sealed unit only",
              description: "if the frame holds up, replacing the glass unit may be enough.",
            },
          ],
          actions: [
            {
              label: "See basements",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-portes-fenetres-approach-01.webp",
            alt: "New window being installed over a membrane on the sill",
          },
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions about window and door replacement",
          items: [
            {
              q: "How much does window replacement cost?",
              a: "The price depends on size, material, glazing and installation. A PVC window set inside the existing frame costs less than a hybrid installed down to the structure. We price each opening in writing.",
            },
            {
              q: "Do I need a permit to replace my windows?",
              a: "Several Montreal boroughs require one, even for a same-size replacement. Enlarging an opening or cutting concrete always does. We check your city's rules before we order.",
            },
            {
              q: "PVC, hybrid or aluminum windows?",
              a: "PVC insulates well and costs the least. Hybrid adds aluminum cladding outside, which is stiffer and comes in more colours. Aluminum is mostly used for large glazed areas.",
            },
            {
              q: "Double or triple glazing for my windows?",
              a: "Triple glazing insulates better and blocks more noise, but it is heavier and costs more. It pays off mostly on the north side or in a bedroom on a busy street.",
            },
            {
              q: "What window does a basement bedroom need?",
              a: "A window that opens from the inside without tools, with a clear opening of at least 0.35 m² and no side under 380 mm. The window well in front must leave enough room to get out.",
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
          heading: "Windows or a door to replace?",
          intro:
            "We come measure your openings, then you get a written price for each one.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
