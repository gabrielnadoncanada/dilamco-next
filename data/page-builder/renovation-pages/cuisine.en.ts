import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Kitchen renovation in Montreal — turnkey",
    description:
      "Turnkey kitchen renovation: feasibility, coordination, fabrication and installation of custom cabinets in Montréal.",
    path: "/services/renovation/cuisine",
    ogAlt: "Dilamco kitchen renovation",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Kitchen renovation",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Kitchen renovation",
    description:
      "Design, coordination, fabrication and installation of custom cabinets in a turnkey approach for kitchen projects.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Kitchen renovation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Turnkey kitchen renovation in Montréal: framing the kitchen before opening the job site",
          description:
            "A kitchen renovation is a project that combines replacing the cabinets and surfaces, often with plumbing and electrical, while coordinating several trades. Its success depends as much on the coordination and the sequence as on the final result: that is what reduces surprises and protects quality.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "View kitchen projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Kitchen", "turnkey", "Montréal"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Custom kitchen renovation",
          },
          caption: "Montréal, Laval and the South Shore",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What really makes a kitchen renovation complicated",
          description:
            "The challenge isn't just choosing cabinets. A kitchen brings together circulation, plumbing, electrical, appliances, storage and finish in a space that has to stay functional every day.",
          cards: [
            {
              title: "Poorly framed scope",
              description:
                "When the sequence isn't clear, the job site piles up rework, delays and visible compromises.",
            },
            {
              title: "Technical constraints",
              description:
                "Outlets, plumbing, ventilation, levels and appliance access directly influence design decisions.",
            },
            {
              title: "Fragmented coordination",
              description:
                "The more misaligned parties there are, the more the final quality depends on late and costly adjustments.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Our approach to better frame a kitchen renovation",
          intro:
            "The goal is to keep a kitchen from being decided piece by piece. The project must be thought of as a whole where design, fabrication, job site and installation support each other.",
          items: [
            {
              title: "Reading the existing space",
              description:
                "We start from the real constraints of the room, not from an idealized plan disconnected from the job site.",
            },
            {
              title: "Hierarchy of decisions",
              description:
                "Circulation, island, storage, appliances and technical points are clarified before fabrication.",
            },
            {
              title: "Sequence of work",
              description:
                "The job site is structured to better manage related steps and limit backtracking.",
            },
            {
              title: "Control of the final result",
              description:
                "Alignments, finishes and equipment integration are thought through from the start, not corrected at the end.",
            },
          ],
          actions: [
            {
              label: "See the design service",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "See the kitchen page",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planning a kitchen renovation",
          },
          cardTitle: "What we aim to protect",
          cardDescription:
            "A poorly sequenced kitchen rarely costs less in the end. It mostly costs more time, more corrections and often a less clean result.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Typical sequence of a kitchen renovation",
          intro:
            "The exact scope is confirmed during the quote, but the general logic stays the same: clarify, fabricate, coordinate, then install cleanly.",
          steps: [
            {
              number: "1",
              title: "Framing",
              description:
                "Analysis of the existing kitchen, the scope and the visible constraints.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Space organization, ergonomics, island, storage and main technical decisions.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Custom cabinets, island and storage prepared according to the validated choices.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Related work sequenced cleanly according to the chosen scope.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Alignments, adjustments and careful finish for a clear and coherent kitchen.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Technical points that change the quality of a renovated kitchen",
          intro:
            "The final result depends on a series of technical decisions that seem secondary on paper but become critical on the job site.",
          columns: "2",
          items: [
            {
              title: "Cabinet structure",
              description:
                "Quality also comes down to the invisible components.",
              icon: "package2",
              bullets: [
                "Solid birch wood for the drawers.",
                "Birch plywood to better support the load.",
                "More credible choices for intensive daily use.",
              ],
            },
            {
              title: "Appliance integration",
              description:
                "A kitchen reads poorly when the equipment is handled too late.",
              icon: "doorOpen",
              bullets: [
                "Refrigerator, hood and dishwasher influenced by the design.",
                "Clearances and alignments validated upfront.",
                "Fewer visible compromises at the end of the job site.",
              ],
            },
            {
              title: "Ergonomics and circulation",
              description:
                "Daily comfort depends on how the room works.",
              icon: "slidersHorizontal",
              bullets: [
                "More logical work distances.",
                "Island and storage better proportioned to the space.",
                "Less friction in everyday use.",
              ],
            },
            {
              title: "Job site coordination",
              description:
                "A clean installation depends on a properly prepared job site.",
              icon: "wrench",
              bullets: [
                "Better framed order of steps.",
                "Fewer reworks between fabrication and installation.",
                "More stable finish through to delivery.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "This service page mainly supports your custom kitchen project",
          intro:
            "Kitchen renovation reassures on method and coordination. For the full vision of the result, the materials and the projects, the kitchen pillar page remains the main destination.",
          items: [
            {
              title: "Custom kitchen",
              href: "/espaces/cuisine",
              description:
                "The main pillar page to see the level of finish, the materials, the projects and the overall positioning.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "High-end custom kitchen",
              },
              badges: ["Pillar page", "Kitchen"],
              footerCtaLabel: "See the kitchen page",
            },
            {
              title: "Fabrication service",
              href: "/services/fabrication",
              description:
                "To understand what makes cabinets more stable, more consistent and more credible over the long term.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Custom fabrication and technical details",
              },
              badges: ["Fabrication", "Durability"],
              footerCtaLabel: "See fabrication",
            },
            {
              title: "Installation service",
              href: "/services/installation",
              description:
                "To see how installation, on-site adjustments and alignments protect the final result.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Custom installation with precise adjustments",
              },
              badges: ["Installation", "Finish"],
              footerCtaLabel: "See installation",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What a well-framed kitchen renovation should produce",
          description:
            "Proof of competence isn't just a nice photo. It shows in how smoothly the kitchen is used, in the reading of alignments and in the way technical decisions disappear in favour of a kitchen that's simple to live with.",
          cards: [
            {
              title: "A more readable job site",
              description:
                "Less hesitation over the sequence, the responsibilities and last-minute adjustments.",
            },
            {
              title: "A more coherent kitchen",
              description:
                "Island, storage, appliances and circulation work as a whole instead of competing with each other.",
            },
            {
              title: "A cleaner finish",
              description:
                "Alignments, joints and equipment integration support a more premium perception.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - kitchen renovation",
          intro:
            "Clear answers on timelines, condos, coordination and project scope.",
          items: [
            {
              q: "How long does a kitchen renovation take?",
              a: "How long a kitchen renovation takes varies depending on the scope (a refresh or a full redesign), the constraints of the location and the coordination required between trades. For a full renovation with custom cabinets, you should allow several weeks of on-site work, on top of the 9 to 15 week fabrication lead time. A precise schedule is set once the scope is clarified.",
            },
            {
              q: "Do you work with other trades on the job site?",
              a: "Yes, when the scope calls for it. The goal is precisely to order the work so as to avoid conflicts and protect the quality of the final result.",
            },
            {
              q: "Is it possible in a condo?",
              a: "Yes. In a condo, access (elevator, parking, protection of common areas), the work hours allowed by the board and certain technical constraints (plumbing, ventilation, soundproofing) must be framed early. Once these points are clarified, a kitchen renovation in a condo proceeds like anywhere else, with planning adapted to the building.",
            },
            {
              q: "Do I have to leave the home during the work?",
              a: "It depends on the scope. For a full renovation, some periods may be less comfortable.",
            },
            {
              q: "Can I do a partial renovation?",
              a: "Yes. Some projects focus mainly on the cabinets, the island and the installation, while others include more work.",
            },
            {
              q: "Where can I see the complete approach for a custom kitchen?",
              a: "The kitchen renovation page mainly explains the logic of coordination and the job site. For the full vision of the product, the materials and the projects, the custom kitchen page is the main reference.",
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
          heading:
            "Want to frame a kitchen renovation correctly?",
          intro:
            "We help you define the right sequence and the right level of coordination, then redirect you to the kitchen pillar page for the full vision of the project.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See the kitchen page",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          note: "Custom kitchen, island, storage and integrated renovation",
        },
      },
    },
  ],
};
