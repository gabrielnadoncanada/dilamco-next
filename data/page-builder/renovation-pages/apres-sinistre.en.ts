import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationApresSinistrePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Water damage restoration in the West Island & Pierrefonds",
    description:
      "Rebuilding after water damage or a flood: damage assessment, insurance claim support, custom fabrication and installation in Pierrefonds-Roxboro, the West Island and Greater Montreal.",
    path: "/services/renovation/apres-sinistre",
    ogAlt: "Dilamco water damage restoration",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Water damage restoration",
      url: SITE.url + "/services/renovation/apres-sinistre",
    },
  ],
  service: {
    name: "Water damage restoration",
    description:
      "Rebuilding after water damage or a flood: damage assessment, coordination, custom fabrication and installation, with insurance claim support, in Pierrefonds-Roxboro and the West Island.",
    url: SITE.url + "/services/renovation/apres-sinistre",
    serviceType: "Water damage restoration",
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
            "Water damage restoration: rebuilding properly after a flood, in Pierrefonds and the West Island",
          description:
            "Once the water is out and the space is dry, the rebuild begins. We take over the renovation: restoring flooded basements, kitchens, bathrooms and floors with the same fabrication standards as our custom projects. Based in Pierrefonds-Roxboro, we know the buildings in the affected area.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement renovation",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["After water damage", "Rebuild", "West Island"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Basement rebuilt after water damage",
          },
          caption: "Pierrefonds-Roxboro, DDO, the West Island and Greater Montreal",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why rebuilding after water damage is different",
          description:
            "Rebuilding after a flood is not an ordinary renovation. You have to deal with sometimes hidden damage, a timeline driven by insurance, and the need to return to a healthy home, not just a refinished one.",
          cards: [
            {
              title: "Underestimated damage",
              description:
                "Water travels behind finishes. A scope set too quickly misses hidden damage that resurfaces later.",
            },
            {
              title: "Timeline under pressure",
              description:
                "Between drying, insurance and getting back to normal, decisions pile up fast. A clear sequence avoids rework.",
            },
            {
              title: "Claim to document",
              description:
                "A well-built file — scope, photos, detailed quote — makes the claim smoother and reduces gaps with the insurer.",
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
          heading: "Our approach: rebuild, not just patch",
          intro:
            "The emergency market (drying, decontamination) is a separate step. We handle what comes next: a durable rebuild, with material and fabrication choices made to last.",
          items: [
            {
              title: "Damage assessment",
              description:
                "We document the real extent of the damage before setting a scope, to avoid surprises mid-project.",
            },
            {
              title: "Insurance claim support",
              description:
                "Detailed quote, photos and a clear scope: a file that speaks the insurer's language and supports your claim.",
            },
            {
              title: "Moisture-aware materials",
              description:
                "Material and finish choices that make sense for a space that has already taken on water, especially basements.",
            },
            {
              title: "Custom fabrication and install",
              description:
                "Cabinets, storage and finishes built and installed to the same standard as our regular projects.",
            },
          ],
          actions: [
            {
              label: "See renovation service",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "See basement renovation",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Floor rebuilt after water damage",
          },
          cardTitle: "What we protect",
          cardDescription:
            "A space rebuilt after a flood must become healthy and durable again, not just presentable. The value is in what you no longer see once the work is done.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Typical sequence of a post-flood rebuild",
          intro:
            "The exact scope is confirmed after the assessment and based on your insurance coverage, but the logic stays the same: assess, document, fabricate, coordinate and install cleanly.",
          steps: [
            {
              number: "1",
              title: "Assessment",
              description:
                "Survey of visible and hidden damage, measuring the extent to rebuild.",
            },
            {
              number: "2",
              title: "File",
              description:
                "Detailed quote and documentation to support the insurance claim.",
            },
            {
              number: "3",
              title: "Design",
              description:
                "Layout of the restored space and choice of moisture-aware materials.",
            },
            {
              number: "4",
              title: "Fabrication",
              description:
                "Custom cabinets, storage and finishes prepared ahead of the worksite.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Coordination of related work and careful install for a functional space again.",
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
          heading: "Technical points that matter after water damage",
          intro:
            "The quality of a rebuild comes down to decisions that seem minor but determine whether the problem comes back.",
          columns: "2",
          items: [
            {
              title: "Basement and lower walls",
              description:
                "The area most affected by floods needs particular attention.",
              icon: "package2",
              bullets: [
                "Finishes and materials chosen with residual moisture in mind.",
                "Lower-wall details designed for a return to a healthy space.",
                "Storage and cabinets built to last in the rebuilt room.",
              ],
            },
            {
              title: "Floors",
              description:
                "Flooring almost always needs full replacement after a flood.",
              icon: "slidersHorizontal",
              bullets: [
                "Subfloor preparation before the new covering is laid.",
                "Choice consistent with the room's use and location.",
                "Clean transitions with the elements being kept.",
              ],
            },
            {
              title: "Cabinets and fabrication",
              description:
                "Modules swollen or stained by water must be replaced, not hidden.",
              icon: "doorOpen",
              bullets: [
                "Solid birch wood for drawers.",
                "Birch plywood to better carry the load.",
                "Controlled fabrication at our partner factory, no improvised assembly.",
              ],
            },
            {
              title: "Site coordination",
              description:
                "A clean rebuild depends on a properly sequenced site.",
              icon: "wrench",
              bullets: [
                "Step order framed after drying.",
                "Fewer reworks between fabrication and installation.",
                "Clear follow-up through to handover.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "assurance",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Insurance claim: what we bring to the file",
          description:
            "Rebuilding is simpler when the insurance file is solid. Without replacing your insurer or adjuster, we provide the material the claim needs.",
          cards: [
            {
              title: "Documented scope",
              description:
                "A clear description of the rebuild work, room by room, with supporting photos.",
            },
            {
              title: "Detailed quote",
              description:
                "Transparent pricing that separates what stems from the claim and what is a chosen upgrade.",
            },
            {
              title: "Single point of contact",
              description:
                "One person responsible for the rebuild, from survey to handover, to limit grey areas.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The spaces we rebuild most often",
          intro:
            "After water damage, it is mostly the basement, kitchen and floors that need rebuilding. Each space has its own page.",
          items: [
            {
              title: "Basement renovation",
              href: "/espaces/sous-sol",
              description:
                "The space most exposed to floods. Full rebuild, from lower walls to storage.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement rebuilt after water damage",
              },
              badges: ["Basement", "After flood"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "When water reaches the kitchen, cabinets and base units often need replacing.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Kitchen rebuilt after water damage",
              },
              badges: ["Kitchen", "Rebuild"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Flooring renovation",
              href: "/services/renovation/plancher",
              description:
                "Floor coverings almost always need redoing after a flood.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring rebuilt after water damage",
              },
              badges: ["Flooring", "Covering"],
              footerCtaLabel: "See flooring",
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
          heading: "What a well-run rebuild should deliver",
          description:
            "Proof of competence is not a quick finish. It shows in a space that becomes healthy, durable and coherent again, without the damage resurfacing a few months later.",
          cards: [
            {
              title: "A healthy space again",
              description:
                "Affected areas are rebuilt, not hidden, so the problem does not come back.",
            },
            {
              title: "A readable site",
              description:
                "Less uncertainty about sequence and responsibilities, during an already trying time.",
            },
            {
              title: "A clean file",
              description:
                "Documentation that supports the claim and clarifies what was rebuilt.",
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
          heading: "FAQ - water damage restoration",
          intro:
            "Clear answers on insurance, timelines, drying and scope of work.",
          items: [
            {
              q: "Do you handle emergency drying?",
              a: "No. Drying, pumping and decontamination are emergency steps handled by specialized firms. We take over the rebuild that follows, once the space is dry.",
            },
            {
              q: "Do you work with my insurance?",
              a: "We provide the scope of work, a detailed quote and the photo documentation your claim needs. You remain the insurer's contact; we support the rebuild file.",
            },
            {
              q: "Do you serve Pierrefonds-Roxboro and the West Island?",
              a: "Yes. We are based in Pierrefonds-Roxboro and work across the West Island, DDO and Greater Montreal — the area most affected by the recent floods.",
            },
            {
              q: "How soon after the damage can work start?",
              a: "The rebuild starts once drying is complete and the scope is confirmed. We can run the assessment and build the file in parallel to save time.",
            },
            {
              q: "Which spaces do you rebuild?",
              a: "Mostly basements, kitchens, bathrooms and floors affected by water, with custom cabinet and storage fabrication.",
            },
            {
              q: "Where can I see your full basement approach?",
              a: "The basement renovation page details possible layouts and finish level. For a rebuild after water damage, that page is the logical next step.",
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
          heading: "Water damage to rebuild in the West Island?",
          intro:
            "We assess the damage, build the insurance file and rebuild properly. Request an assessment to frame the next steps.",
          actions: [
            {
              label: "Request an assessment",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basement renovation",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          note: "Rebuilding after water damage, Pierrefonds-Roxboro and the West Island",
        },
      },
    },
  ],
};
