import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Flooring renovation in Montreal — general contractor",
    description:
      "Flooring renovation: subfloor, flatness, levels, transitions and installation. RBQ-licensed general contractor, written contract.",
    path: "/services/renovation/plancher",
    ogAlt: "Flooring renovation by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Flooring renovation",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Flooring renovation",
    description:
      "Flooring replacement by a general contractor: subfloor assessment, level correction, transitions between rooms, installation and finishing, coordinated with the rest of the job.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Flooring renovation",
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
          eyebrow: "Dilamco - Renovation",
          heading:
            "Flooring renovation: what happens under the finish decides the result",
          description:
            "A floor that squeaks, moves or opens at the seams almost never has a finish problem. It has a subfloor, flatness, moisture or fastening problem. We tear out, fix the base, then install — with the transitions and thresholds worked out in advance.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ licence 8306-0806-27",
            "Subfloor and levels",
            "Written contract",
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Residential flooring renovation by a general contractor",
          },
          caption:
            "West Island, Montreal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why a brand-new floor starts moving",
          description:
            "In a West Island house built in the 1960s or 1970s, the floor has often been covered over two or three times. Each layer hides the real condition of the support. The recurring failures are all structural, not cosmetic.",
          cards: [
            {
              title: "A tired or poorly fastened subfloor",
              description:
                "Plywood too thin, screws missing, panels swollen by an old leak: that is where the squeak comes from. Installing new material on top only makes it louder.",
            },
            {
              title: "Flatness outside tolerance",
              description:
                "Engineered wood, vinyl and tile manufacturers all impose a flatness tolerance. Beyond it, the warranty is void and the finish eventually separates or sounds hollow.",
            },
            {
              title: "Moisture content never measured",
              description:
                "On a concrete slab or over wood, installing without measuring the moisture in the support leads to cupping. It is the leading cause of redos in basements and slab-on-grade main floors.",
            },
            {
              title: "Improvised transitions",
              description:
                "Flooring meets the entry tile, the bathroom threshold, the stairs and the baseboards. When those points are not planned, they get solved with a metal strip you end up regretting.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What a flooring mandate covers",
          intro:
            "The scope is written into the quote. A full flooring mandate covers four phases, and the first one decides whether the rest holds.",
          columns: "2",
          items: [
            {
              title: "Tear-out and diagnosis",
              description: "We see the support before pricing the install.",
              icon: "hammer",
              bullets: [
                "Removal of existing finishes, baseboards and thresholds.",
                "Inspection of the subfloor, visible joists and water staining.",
                "Moisture testing on a concrete slab or a wood support.",
                "In an older building, verification before tearing out old vinyl tile and its adhesive.",
              ],
            },
            {
              title: "Fixing the base",
              description: "The step most installers bill as an extra.",
              icon: "ruler",
              bullets: [
                "Damaged plywood panels replaced, full re-screwing.",
                "An added layer of subfloor where stiffness is insufficient.",
                "Self-levelling compound or sanding of high joints to meet the manufacturer's tolerance.",
                "Joist reinforcement or added support where sagging is found.",
              ],
            },
            {
              title: "Installing the finish",
              description: "Hardwood, engineered, vinyl or tile.",
              icon: "layers",
              bullets: [
                "Wood acclimatized in the room before installation.",
                "Membrane, acoustic underlay or uncoupling membrane according to the finish and the floor level.",
                "Direction and layout confirmed with you before starting.",
                "Perimeter expansion gaps respected so the floor can move.",
              ],
            },
            {
              title: "Levels, thresholds and finishing",
              description: "The details that mark a clean installation.",
              icon: "slidersHorizontal",
              bullets: [
                "Transitions between rooms and between materials planned in advance.",
                "Junctions at the stairs, door thresholds and stair nosings.",
                "Baseboards, quarter round and finish caulking.",
                "Doors trimmed where the floor thickness changes.",
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
          heading: "How a flooring job unfolds",
          intro:
            "When flooring is part of a larger project, its place in the sequence changes everything: too early and it gets damaged, too late and the cabinets are already set at the wrong height.",
          steps: [
            {
              number: "1",
              title: "Visit and survey",
              description:
                "Areas measured, flatness and level differences between rooms checked, thresholds, stairs and existing finishes noted.",
            },
            {
              number: "2",
              title: "Quote",
              description:
                "Written scope: tear-out, support correction, finish, transitions and trim, with exclusions. Estimate within 24 to 48 business hours.",
            },
            {
              number: "3",
              title: "Tear-out and strip",
              description:
                "Premises protected, old finishes and baseboards removed, debris hauled away, then a real inspection of the support.",
            },
            {
              number: "4",
              title: "Support preparation",
              description:
                "Repairs, re-screwing, added subfloor, levelling and drying. This is where the lifespan of the floor is decided.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Acclimatization, membranes, layout and then installation, with the expansion gaps and transitions set out in the plan.",
            },
            {
              number: "6",
              title: "Finishing and handover",
              description:
                "Thresholds, baseboards, quarter round, doors trimmed, cleanup and a final walkthrough with you.",
            },
          ],
        },
      },
    },
    {
      id: "sequence",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Where flooring belongs in the job sequence",
          intro:
            "It is the most useful question to settle before starting, and the most expensive one to answer at random. Here are the rules we apply on a coordinated job site.",
          items: [
            {
              title: "After the mechanical work and the paint",
              description:
                "Plumbing, electrical, ventilation, drywall and the first coat of paint go first. A new floor under an open job site gets marked, whatever protection is used.",
            },
            {
              title: "Before the cabinets, in most cases",
              description:
                "Running the floor under the cabinet boxes avoids height mismatches if you change appliances later and simplifies the junction at the base of the island.",
            },
            {
              title: "Level differences are decided on the drawing",
              description:
                "Entry tile, living room wood, basement vinyl: thicknesses differ. We calculate the thresholds before purchasing, not after installation.",
            },
            {
              title: "The bathroom follows its own logic",
              description:
                "Waterproofing membrane, shower slope and threshold are coordinated with the hallway floor. That junction has to be planned explicitly.",
            },
            {
              title: "Basements need an insulating support",
              description:
                "Over a slab, an insulating subfloor or an uncoupling membrane prevents cold and condensation under the finish.",
            },
          ],
          actions: [
            {
              label: "See kitchen renovation",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "See basement finishing",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Subfloor prepared before a new finish is installed",
          },
          cardTitle: "Why a general contractor",
          cardDescription:
            "When flooring is part of a larger project, we decide where it sits in the calendar, we protect the surface and we answer for the junction with the cabinets, the bathroom and the stairs. One company, one contract.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What moves the price of a floor",
          description:
            "The cost of a flooring job comes in three distinct blocks: removing what is there, repairing the support and installing the new finish. Many quotes price only the third, which is where the gaps between bids come from.",
          cards: [
            {
              title: "Tear-out and disposal",
              description:
                "Removing several glued layers, stapled carpet or tile set in mortar takes far longer than unclipping a floating floor.",
            },
            {
              title: "Repairing the support",
              description:
                "Re-screwing, replacing panels, adding a layer of subfloor or pouring self-levelling compound: the most variable line from one house to the next.",
            },
            {
              title: "The finish and its installation",
              description:
                "Solid hardwood, engineered wood, luxury vinyl and tile differ in price per square foot, in preparation and in installation time.",
            },
            {
              title: "Transitions and trim",
              description:
                "Thresholds, stair nosings, baseboards, door trimming and stair junctions: small items individually, but they add up across a whole house.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Flooring inside a larger project",
          intro:
            "A flooring job almost always accompanies another mandate. These are the most frequent combinations.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Kitchen flooring meets the living room and the entry, and goes in before the cabinets. The sequence is planned at quoting time.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Flooring installed before kitchen cabinets",
              },
              badges: ["Kitchen", "Sequence"],
              footerCtaLabel: "See kitchen",
            },
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "On a concrete slab, moisture and support insulation drive both the choice of finish and the installation method.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement floor over an insulating subfloor",
              },
              badges: ["Slab", "Insulation"],
              footerCtaLabel: "See basement",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "After water damage, the finish and often the subfloor have to be replaced. Rebuilding documented for the insurer.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Floor replaced after water damage",
              },
              badges: ["Water damage", "Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Tying the new section's floor to the existing one means managing levels at the framing stage, not at finishing.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Floor junction between an addition and the existing house",
              },
              badges: ["Levels", "Junction"],
              footerCtaLabel: "See addition",
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
          heading: "What a properly installed floor delivers",
          description:
            "Quality is judged by what you hear and feel underfoot, not by the photo taken on day one. Three signs do not lie.",
          cards: [
            {
              title: "A silent floor",
              description:
                "No squeak when you walk, because the subfloor was re-screwed and damaged panels were replaced.",
            },
            {
              title: "Seams that stay closed",
              description:
                "Flatness respected, moisture measured and expansion gaps provided: the finish moves without opening up.",
            },
            {
              title: "Discreet transitions",
              description:
                "Thresholds calculated, stair junctions clean and doors trimmed, so the result does not advertise where the job stopped.",
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
          heading: "FAQ — flooring renovation",
          intro:
            "Subfloor, squeaks, moisture, work sequence, condos, permits and warranty.",
          items: [
            {
              q: "Can the new floor go over the old one?",
              a: "Sometimes, but it is rarely a good idea. Stacking layers raises the height, forces every door to be trimmed, complicates thresholds and above all hides the real condition of the subfloor. We recommend tearing out, except in specific cases documented in the quote.",
            },
            {
              q: "Why does my floor squeak?",
              a: "Almost always because of the subfloor: panels poorly fastened, screws missing, plywood too thin for the joist span, or friction between two layers. The finish is only a symptom. We fix it by tearing out, re-screwing and replacing what is damaged.",
            },
            {
              q: "Do I need a permit to replace flooring?",
              a: "Not in most cases: replacing a finish is not structural work. A permit becomes necessary if the work touches the structure — reinforcing or altering joists, cutting an opening, lowering a slab. We confirm with your city before starting.",
            },
            {
              q: "Flooring or cabinets first?",
              a: "On a coordinated job, flooring goes in after the mechanical work and the paint, and generally before the cabinets. That avoids height mismatches if an appliance changes later and simplifies the junction at the base of the island. We set that sequence at contract time.",
            },
            {
              q: "What finish should I choose for a basement?",
              a: "Over a concrete slab, moisture has to be measured first and an insulating subfloor or uncoupling membrane planned. Luxury vinyl and tile handle the environment well; solid hardwood directly on a slab is not advised. The choice follows the moisture test.",
            },
            {
              q: "Does wood need to be acclimatized?",
              a: "Yes. Hardwood and engineered flooring must sit in the room where they will be installed, at normal temperature and humidity, before installation. Skipping that step is a classic cause of open seams in winter or buckling in summer.",
            },
            {
              q: "Is this feasible in a condo?",
              a: "Yes, but many syndicates require an acoustic membrane of a minimum rating under the finish, along with set work hours and controlled access. We check the declaration of co-ownership before ordering materials, not after.",
            },
            {
              q: "My house is from the 1970s. Is there a risk with the old tile?",
              a: "In older buildings, some vinyl finishes and adhesives may contain materials that require specific precautions during removal. We have it verified before tearing out rather than taking the risk, and the step is written into the contract.",
            },
            {
              q: "How long does a flooring job take?",
              a: "It depends on the area, the type of tear-out and the condition of the support. Self-levelling compound and wood acclimatization add drying and waiting days that are part of the schedule. A realistic duration is written into the contract after the survey.",
            },
            {
              q: "Is the work warranted?",
              a: "Yes. The installation is warranted and the terms are in the contract, on top of the manufacturer's warranty on the finish — a warranty that requires exactly the flatness and moisture levels we verify. Our RBQ licence 8306-0806-27 has been valid and unrestricted since 2004.",
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
          heading: "A floor to redo properly?",
          intro:
            "We come and check the flatness, the condition of the subfloor and the level differences between rooms, then come back with a detailed estimate within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Subfloor, levels and transitions included",
        },
      },
    },
  ],
};
