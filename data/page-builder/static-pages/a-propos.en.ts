import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Licensed general contractor since 2004 — About",
    description:
      "Dilamco, residential renovation general contractor since 2004. RBQ licence 8306-0806-27, based in Pierrefonds-Roxboro, West Island.",
    path: "/a-propos",
    ogAlt: "Dilamco's team and approach to running a job site",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "About", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - About",
          heading: "A residential renovation general contractor since 2004",
          description:
            "Dilamco is a construction and renovation company based in Pierrefonds-Roxboro, in Montréal's West Island. Our general contractor licence was issued on September 7, 2004 and remains valid, with no restrictions. Since then we have run residential projects — full renovations, conversions, additions and post-disaster reconstruction — across Greater Montréal.",
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ 8306-0806-27",
            "Since 2004",
            "Pierrefonds-Roxboro",
            "West Island",
          ],
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Staircase and glass railing: interior finishing by Dilamco",
          },
          caption:
            "Legal name: 9139-1250 Québec inc. — also operating as « Construction Dilamco » and « Le Groupe Dilamco ».",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Our thesis: it all comes down to controlling execution",
          description:
            "A renovation rarely fails because of a poor tile choice. It fails because something broke between the people involved: information that didn't travel, a trade that showed up too early, a decision made without anyone weighing what it meant downstream. We built the company around one idea: reduce the number of breaks, and have one party carry the result.",
          cards: [
            {
              title: "Fewer breaks between the people involved",
              description:
                "Every handoff between trades is a place where a project can go wrong. We plan the full sequence before the site opens, and we inspect each stage before moving on to the next.",
            },
            {
              title: "One party accountable for the result",
              description:
                "You don't coordinate subcontractors and you don't settle their disagreements. We hire the trades, set their calendar and answer for the work delivered — including when we have to come back and correct it.",
            },
            {
              title: "Written commitments, not promises",
              description:
                "Scope, price, exclusions, schedule and payment calendar are in the contract before the first hammer swing. Any change goes through a written, priced change order, accepted before it is carried out.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "history",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "How the company took shape",
          description:
            "Our path is unremarkable, and that is deliberate. Each step widened what we can take on ourselves, rather than subcontracting the responsibility.",
          steps: [
            {
              number: "1",
              title: "2004 — The general contractor licence",
              description:
                "RBQ licence 8306-0806-27 was issued on September 7, 2004, in classes 1.2 (small buildings) and 1.3 (buildings of all kinds). Together, those two classes let us run a complete residential project under a single responsibility.",
            },
            {
              number: "2",
              title: "A base in the West Island",
              description:
                "Our office is at 18625 rue Larocque, in Pierrefonds-Roxboro. That proximity isn't a sales pitch: it shortens the real gap between a call and a site visit, and between a reported deficiency and its correction.",
            },
            {
              number: "3",
              title: "Broadening the subclasses",
              description:
                "The licence now covers a range of specialized subclasses — from masonry and framing to cladding, interior finishing and building systems. Less work farmed out, so fewer grey zones on site.",
            },
            {
              number: "4",
              title: "The cabinetry division",
              description:
                "Subclass 12, manufactured cabinets and countertops, lets us fold custom cabinetry into the renovation mandate instead of adding a supplier running alongside the site.",
            },
            {
              number: "5",
              title: "A clean record",
              description:
                "Twenty years on, the licence is still valid and unrestricted, a $40,000 licence bond is in force with FACCQ, and no claim appears on file. All of it can be checked on the RBQ register.",
            },
          ],
          actions: [
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "licence",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Licence, insurance and guarantees",
          intro:
            "Everything below can be verified. The licence number lets you look up our file directly on the Régie du bâtiment du Québec's register of licence holders.",
          columns: "2",
          items: [
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "General contractor licence, issued September 7, 2004, valid and without restrictions.",
              icon: "fileCheck",
              bullets: [
                "Class 1.2 — general contractor, small buildings",
                "Class 1.3 — general contractor, buildings of all kinds",
                "Specialized subclasses, including 12: manufactured cabinets and countertops",
              ],
            },
            {
              title: "Bond and record",
              description:
                "The licence bond protects the client should the contractor default.",
              icon: "shieldCheck",
              bullets: [
                "$40,000 licence bond with FACCQ",
                "No claim recorded on file",
                "One permanent designated officer: Sean Diffley",
              ],
            },
            {
              title: "Insurance in force",
              description:
                "A contractor without coverage transfers the risk to the homeowner. That is not the case here.",
              icon: "hardHat",
              bullets: [
                "Civil liability insurance",
                "Site coverage for the duration of the work",
                "Certificates available on request before signing",
              ],
            },
            {
              title: "Guarantee on the work",
              description:
                "The work performed is guaranteed, with the scope and duration written into the contract.",
              icon: "clipboardCheck",
              bullets: [
                "Final walkthrough and deficiency list before the final payment",
                "Compliance with the Québec Construction Code",
                "We don't build new homes: the GCR warranty plan does not apply",
              ],
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "A secondary strength: the cabinetry division",
          intro:
            "Dilamco is first and foremost a general contractor. But subclass 12 of our licence covers manufactured cabinets and countertops, which lets us include custom cabinetry in the same mandate as the renovation. On a kitchen or bathroom project, that is one fewer party to coordinate and one fewer lead time to absorb.",
          items: [
            {
              title: "Folded into the mandate",
              description:
                "cabinetry appears in the same quote and the same schedule as the construction work.",
            },
            {
              title: "Measured after demolition",
              description:
                "dimensions are taken once the walls are in their final position, not before.",
            },
            {
              title: "Made by our partner factory",
              description:
                "a consistent standard from one project to the next, under our responsibility end to end.",
            },
            {
              title: "No in-house production",
              description:
                "we don't claim to produce on site: we specify, coordinate and install.",
            },
          ],
          actions: [
            {
              label: "Explore the spaces",
              href: "/espaces",
              variant: "primary",
            },
            {
              label: "Understand our materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Plywood panels used for custom cabinetry",
          },
          cardTitle: "RBQ subclass 12",
          cardDescription:
            "Manufactured cabinets and countertops — a division of the company, never its main identity.",
        },
      },
    },
    {
      id: "where-to-go-next",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Keep checking",
          intro:
            "Depending on what you want to confirm before handing us a project, these pages set out the method, the services, the territory and the work completed.",
          columns: "2",
          items: [
            {
              title: "Our process",
              description:
                "The full run of a project: estimate, quote, contract, permits, site work, handover.",
              href: "/processus",
              badges: ["Steps", "Contract"],
              ctaLabel: "See the process",
            },
            {
              title: "Our renovation services",
              description:
                "Kitchen, bathroom, basement, addition, flooring and post-disaster reconstruction.",
              href: "/services/renovation",
              badges: ["Residential", "Turnkey"],
              ctaLabel: "See the services",
            },
            {
              title: "Areas we serve",
              description:
                "West Island, Montréal, Laval, the South Shore and Vaudreuil-Soulanges, city by city.",
              href: "/zones",
              badges: ["Territory", "Local"],
              ctaLabel: "See the areas",
            },
            {
              title: "Our projects",
              description:
                "Concrete examples of work carried out across Greater Montréal.",
              href: "/projets",
              badges: ["References", "Job sites"],
              ctaLabel: "See the projects",
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
          heading: "Let's talk before you commit a budget",
          intro:
            "A site visit, an itemized quote, and a straight answer about what your project actually involves. The estimate is free and we reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 • 18625 rue Larocque, Pierrefonds-Roxboro (Montréal) • (514) 820-0773",
        },
      },
    },
  ],
};
