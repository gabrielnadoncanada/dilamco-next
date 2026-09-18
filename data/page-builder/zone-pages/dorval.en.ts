import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDorvalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Dorval — Renovation",
    description:
      "RBQ-licensed general contractor in Dorval: post-war bungalow renovations, City of Dorval permits, Lakeshore SPAIP, one accountable lead.",
    path: "/zones/dorval",
    ogAlt: "Residential renovation in Dorval by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Dorval", url: SITE.url + "/zones/dorval" },
  ],
  service: {
    name: "General contractor in Dorval",
    description:
      "Turnkey residential renovation in Dorval: scoping, City of Dorval permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/dorval",
    serviceType: "Residential renovation",
    areaServed: [
      "Dorval",
      "Dorval Village",
      "Strathmore",
      "Pine Beach",
      "Dorval Gardens",
      "Chemin du Bord-du-Lac",
      "Île-Dorval",
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
          eyebrow: "Dilamco — general contractor",
          heading:
            "General contractor in Dorval: residential renovation from permit to handover",
          description:
            "Dilamco is based on rue Larocque in Pierrefonds-Roxboro, about fifteen minutes from Dorval via boulevard Saint-Jean and Highway 20. We have been renovating post-war bungalows in central Dorval, cottages in Strathmore and waterfront homes along chemin du Bord-du-Lac since 2004, with a valid RBQ licence and a single person accountable from start to finish.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Dorval", "RBQ 8306-0806-27", "Since 2004"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Full residential renovation led by a general contractor in Dorval",
          },
          caption: "West Island, Montreal, Laval and Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Dorval homes",
          description:
            "Dorval is not one uniform neighbourhood. The city runs from Lac Saint-Louis in the south — the Village, its church, its parks and its lakeside promenade — to the employment zones around Montréal-Trudeau airport in the north, along Highways 20 and 520. In between sits a residential fabric built mostly between 1950 and 1975. Each band carries its own site constraints.",
          cards: [
            {
              title: "Post-war bungalows and cottages",
              description:
                "Between the lake and Highway 20, most of the housing stock consists of bungalows, cottages and semi-detached homes from the 1950s to the 1970s. Strathmore, with its quiet streets around Surrey Park, is typical of that 1950s-1960s architecture. On these homes we routinely find undersized electrical services, concrete block foundations, low basement clearances, and load-bearing or party walls that dictate what can actually be opened up.",
            },
            {
              title: "Lakeshore and Village properties",
              description:
                "Along chemin du Bord-du-Lac–Lakeshore and in the Village we work on older, often larger, sometimes waterfront properties. Volumes are irregular, additions have accumulated over decades and floor levels rarely line up. On these projects, surveying what is actually there matters as much as the drawings.",
            },
            {
              title: "Condos and rentals near the station",
              description:
                "Around Dorval station and avenue Dorval, the stock includes condos and rental buildings. Work there is mostly kitchens and bathrooms, with the usual multi-unit constraints: access, elevator use, protection of common areas, work hours approved by the syndicate, and shared plumbing stacks.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What we build in Dorval",
          intro:
            "General contractor in residential renovation, RBQ categories 1.2 (small buildings) and 1.3 (buildings of all kinds). We take responsibility for the permit, the sequence and the trades — not just one slice of the work.",
          columns: "2",
          items: [
            {
              title: "Kitchen renovation",
              description:
                "The most common project on Dorval's 1950s-1970s bungalows.",
              icon: "chefHat",
              bullets: [
                "Opening the wall between a closed kitchen and the living room, once load-bearing status is confirmed.",
                "Electrical and plumbing upgrades behind the cabinetry.",
                "Custom cabinets supplied by our cabinet division (RBQ subcategory 12).",
              ],
            },
            {
              title: "Bathroom renovation",
              description:
                "Full rebuild of an original bathroom, often the only one upstairs.",
              icon: "bath",
              bullets: [
                "Membrane, drain and ventilation redone before any finish goes on.",
                "Adding a powder room on the main floor where the layout allows.",
                "Plumber, electrician and tile setter sequenced in the right order.",
              ],
            },
            {
              title: "Basement finishing",
              description:
                "Dorval bungalow basements need a technical read before any layout.",
              icon: "layers",
              bullets: [
                "Moisture and weeping tile checked before walls are closed.",
                "Clear height, beams and columns verified before promising a habitable room.",
                "Egress, window sizing and fire separation compliant with the Quebec Construction Code.",
              ],
            },
            {
              title: "Additions and conversions",
              description:
                "Adding volume in Dorval requires council approval.",
              icon: "building2",
              bullets: [
                "A residential addition goes through a SPAIP process before the permit is issued.",
                "Drawings, siting and architectural integration prepared for that review.",
                "A realistic schedule that accounts for the City's approval calendar.",
              ],
            },
            {
              title: "Post-damage reconstruction",
              description:
                "Water damage, sewer backup or fire: reconstruction is a coordinated project.",
              icon: "droplets",
              bullets: [
                "Drying, selective demolition, then rebuild according to the agreed scope.",
                "Work documented for the owner's insurance file.",
                "One point of contact between the trades and the move-back date.",
              ],
            },
            {
              title: "Flooring and finishes",
              description:
                "On a 1960 floor, preparation matters more than the product you pick.",
              icon: "ruler",
              bullets: [
                "Substrate levelled before installation, especially on a basement slab.",
                "Consistent thresholds and transitions between renovated rooms.",
                "Trim, doors and alignments redone so the renovation does not show at the joints.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "context",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What actually complicates a Dorval project",
          intro:
            "Difficulties on a Dorval site almost never come from the choice of materials. They come from the building, the municipal calendar and street logistics. These are the three factors we scope before writing a quote.",
          columns: "2",
          items: [
            {
              title: "A housing stock over sixty years old",
              description:
                "A 1958 house was not built for today's electrical loads.",
              icon: "clipboardCheck",
              bullets: [
                "Electrical service, panel and available capacity checked before adding appliances.",
                "Original copper or cast iron plumbing located before promising to move a drain.",
                "Exterior wall insulation and air tightness assessed while the walls are open.",
              ],
            },
            {
              title: "The permit calendar",
              description:
                "The City issues its own permits, with its own delays and its own council calendar.",
              icon: "fileCheck",
              bullets: [
                "Thirty business days to plan for once the file is complete, compliant and paid.",
                "A SPAIP adds a council approval step tied to the meeting schedule.",
                "We file early so waiting on the permit does not become waiting on the build.",
              ],
            },
            {
              title: "Winter and street access",
              description:
                "The season dictates the order of work, and Dorval's residential streets are narrow.",
              icon: "clock",
              bullets: [
                "Excavation and foundation work planned outside deep-frost periods.",
                "Kitchens, bathrooms and basements run perfectly well through winter.",
                "Container, deliveries and parking organized before day one on site.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "permits",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a Dorval project runs",
          intro:
            "Dorval is a linked city: it issues its own permits and is not a Montreal borough. The City of Dorval's Service de l'aménagement urbain handles applications, and that step has to be planned rather than improvised.",
          steps: [
            {
              number: "1",
              title: "Site visit and scoping",
              description:
                "Survey of the house, the visible constraints and the intended scope. At this stage we tell you what needs a permit and what does not.",
            },
            {
              number: "2",
              title: "Detailed quote",
              description:
                "Scope, materials, exclusions, schedule and budget in writing. Turnaround within 24 to 48 business hours after the visit.",
            },
            {
              number: "3",
              title: "Permit application",
              description:
                "File submitted to the Service de l'aménagement urbain through the City's online platform. Every renovation requires its own separate application.",
            },
            {
              number: "4",
              title: "SPAIP if required",
              description:
                "For new construction, a residential addition or a building along chemin du Bord-du-Lac, a site planning and architectural integration review with council approval precedes the permit.",
            },
            {
              number: "5",
              title: "Coordinated site work",
              description:
                "Once the file is complete, compliant and paid, the City has 30 business days to issue or refuse the building permit. The construction calendar is built around that reality.",
            },
            {
              number: "6",
              title: "Handover and inspection",
              description:
                "Deficiency list cleared before handover, warranty documents provided, and work guaranteed — details set out in the contract.",
            },
          ],
        },
      },
    },
    {
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What we check before pricing a Dorval project",
          intro:
            "A number given over the phone commits nobody. The quote we hand over after a visit rests on precise on-site checks that define the real scope of work.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Approximate year of construction and visible changes since the original build.",
            "Electrical service capacity and panel condition before adding circuits or appliances.",
            "Type and location of existing plumbing, including shared stacks in a condo.",
            "Whether the walls you want to open are load-bearing, and where beams or columns sit.",
            "Basement clear height, clearance under ducts, and whether a compliant egress is possible.",
            "Signs of moisture, any history of sewer backup, and the apparent state of the drainage.",
            "Regulatory status of the address: zoning, applicable SPAIP, and which permit the City requires.",
            "The scope you want measured against the budget you have, so it is adjusted before drawings, not after.",
          ],
          actions: [
            {
              label: "Book a visit",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "local",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Why a West Island general contractor in Dorval",
          intro:
            "A contractor who works the area every month does not discover the rules along the way. They know what the City asks for, what aircraft noise changes in window selection, and why a 1958 bungalow rarely hides the same surprises as a Lakeshore cottage.",
          items: [
            {
              title: "Verifiable RBQ licence",
              description:
                "Licence 8306-0806-27, valid and unrestricted, issued in September 2004. General contractor categories 1.2 and 1.3. Verifiable on the RBQ public register.",
            },
            {
              title: "Insured and bonded",
              description:
                "Civil liability and job-site coverage in force, licence bond in place, and no claims on the licence file.",
            },
            {
              title: "Fast response",
              description:
                "Reply within 24 to 48 business hours on an estimate request, and a Dorval showroom where you can see finishes before deciding.",
            },
            {
              title: "One accountable lead",
              description:
                "Plumbing, electrical, structure, drywall, tile and cabinetry all sit under the same contract and the same schedule.",
            },
            {
              title: "Integrated cabinet division",
              description:
                "Our custom cabinets are built for us by our partner factory (RBQ subcategory 12). One fewer supplier for you to coordinate.",
            },
          ],
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our renovation services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Renovated bathroom in a Dorval home",
          },
          cardTitle: "What we are trying to prevent",
          cardDescription:
            "The project that drags because the permit was filed too late, the invoice that swells because the scope was never written down, and trades that do not talk to each other. Removing exactly that is what the general contractor role is for.",
        },
      },
    },
    {
      id: "budget",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Budget and schedule: what to know before you start",
          description:
            "Renovating in Dorval does not cost more because it is Dorval. What moves the price is the real condition of the building, the scope of work and the number of trades to coordinate. These are the benchmarks we give on site, before any quote.",
          cards: [
            {
              title: "From roughly $25,000",
              description:
                "That is the order of magnitude for a renovation run by a general contractor: a full bathroom, a finished basement or an entry-level kitchen. Below that, work is usually one-off and needs no coordination.",
            },
            {
              title: "Full kitchen: $35,000 to $50,000 and up",
              description:
                "On a Dorval bungalow, opening a wall, relocating plumbing or electrical and custom cabinetry explain most of the spread. The estimate is free and the exact scope is set in the written contract.",
            },
            {
              title: "What stretches the schedule",
              description:
                "Permit processing time, a SPAIP review when an addition requires it, cabinet production lead time, and surprises found at demolition. We plan for them rather than discover them mid-project.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "related",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "The projects we run most often in Dorval",
          intro:
            "Three kinds of mandates come up constantly in the area's post-war homes. Each has its own service page with the method and sequence spelled out.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening up a closed bungalow kitchen, redoing the electrical and plumbing, installing custom cabinetry.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Custom kitchen built in a West Island home",
              },
              badges: ["Kitchen", "Custom cabinets"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "A full rebuild down to the substrate: membrane, drain, slope, ventilation, then finishes.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Renovated bathroom with careful finishing",
              },
              badges: ["Bathroom", "Waterproofing"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Turning a bungalow basement into compliant, dry, comfortable living space.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Basement finished as a games room",
              },
              badges: ["Basement", "Code compliance"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "sectors",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Areas we serve in and around Dorval",
          intro:
            "We work throughout Dorval, from the Village to the residential streets along Highway 20, as well as in neighbouring West Island and western Montreal communities.",
          columns: "3",
          items: [
            {
              title: "Dorval Village and Lakeshore",
              description:
                "Older and waterfront homes, projects subject to SPAIP along chemin du Bord-du-Lac.",
              href: "/services/renovation",
              badges: ["Heritage", "SPAIP"],
            },
            {
              title: "Strathmore and Surrey Park",
              description:
                "1950s-1960s cottages and bungalows, kitchens and basements due for a rebuild.",
              href: "/services/renovation/cuisine",
              badges: ["1950-1960"],
            },
            {
              title: "Central Dorval and Dorval Gardens",
              description:
                "Post-war bungalows between the lake and Highway 20, the core of our local volume.",
              href: "/services/renovation/sous-sol",
              badges: ["Bungalows"],
            },
            {
              title: "Pointe-Claire",
              description:
                "Neighbouring city to the west, with a similar post-war housing stock.",
              href: "/zones/pointe-claire",
              ctaLabel: "See the Pointe-Claire page",
            },
            {
              title: "Saint-Laurent",
              description:
                "Neighbouring borough to the northeast, on the far side of the airport.",
              href: "/zones/saint-laurent",
              ctaLabel: "See the Saint-Laurent page",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "About ten minutes north via boulevard des Sources.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See the Dollard-des-Ormeaux page",
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
          heading: "Frequently asked questions — renovating in Dorval",
          intro:
            "Permits, timelines, budget, insurance: the answers we give Dorval homeowners most often.",
          items: [
            {
              q: "Do I need a permit to renovate in Dorval?",
              a: "In most cases, yes. The City of Dorval requires a permit for construction, conversion and additions, as well as for interior work affecting a load-bearing wall or requiring a container. Every renovation needs its own separate application. We confirm the scope with the Service de l'aménagement urbain before filing.",
            },
            {
              q: "How long does the City take to issue a permit?",
              a: "Once all required information and technical documents are provided, compliant, error-free and the fee is paid, the competent authority has 30 business days to issue or refuse a building permit. An incomplete file restarts that count, which is why we prepare the application ourselves.",
            },
            {
              q: "What is SPAIP and does it apply to me?",
              a: "The site planning and architectural integration programme is a council approval process layered on top of the permit. In Dorval it applies notably before a permit is issued for new construction or a residential addition, and for buildings along chemin du Bord-du-Lac. It lengthens the schedule, so we plan for it during scoping.",
            },
            {
              q: "Do you work on 1950s and 1960s bungalows?",
              a: "That is most of our Dorval volume. On these homes we systematically check the electrical service, the state of the plumbing, whether the wall you want to open is load-bearing, and the basement clear height before approving a layout. Those checks prevent scope changes once the project is underway.",
            },
            {
              q: "What is the minimum budget for a general contractor project?",
              a: "Our renovation projects start around $25,000. A full kitchen with custom cabinetry lands closer to $35,000 to $50,000 and up, depending on scope. The estimate is free, and the budget and schedule are both set in the written contract before work begins.",
            },
            {
              q: "Are you licensed and insured to work in Dorval?",
              a: "Yes. Dilamco holds RBQ licence 8306-0806-27, valid and unrestricted, issued in September 2004, with general contractor categories 1.2 and 1.3. Our civil liability and job-site coverage are in force. The licence can be verified on the RBQ's public register.",
            },
            {
              q: "Do you renovate condos near Dorval station?",
              a: "Yes. In a co-ownership we settle access, protection of common areas, syndicate-approved work hours and the technical constraints tied to shared plumbing stacks and sound insulation early. Once those are cleared, the project runs like any other, on a schedule adapted to the building.",
            },
            {
              q: "Does aircraft noise change anything about the work?",
              a: "In sectors close to Montréal-Trudeau airport and Highways 20 and 520, owners often ask us to improve acoustic comfort at the same time as the renovation. Exterior wall insulation, window selection and air tightness are decided during scoping, because they are far easier to integrate while the walls are already open.",
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
          heading: "Planning a renovation in Dorval?",
          intro:
            "We come see the house, scope the work and send you a detailed quote with a written schedule and budget. Reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ-licensed general contractor 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
