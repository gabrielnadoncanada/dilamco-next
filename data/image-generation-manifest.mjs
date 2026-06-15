const baseStyle =
  "Photorealistic interior architecture photography, premium renovation and custom millwork in Montreal, realistic materials, natural light, clean composition, editorial style, high-end but believable, sharp details, no exaggerated luxury, no CGI look, no text, no watermark, practical Quebec home proportions.";

const defaultNegativePrompt =
  "cheap look, unrealistic proportions, distorted cabinets, warped walls, duplicated objects, fake CGI, clutter, overdecorated luxury mansion, text overlay, watermark, blur, low detail";

const prompt = (scene) => `${baseStyle} ${scene}`;

const target = (file, currentSrc, occurrence = 1) => ({
  file,
  currentSrc,
  occurrence,
});

const asset = ({
  id,
  output,
  promptText,
  pages,
  targets,
  size = "1536x1024",
  quality = "high",
}) => ({
  id,
  model: "gpt-image-1.5",
  size,
  quality,
  prompt: prompt(promptText),
  negativePrompt: defaultNegativePrompt,
  output,
  pages,
  targets,
});

export const imageManifest = [
  asset({
    id: "home-hero-premium-kitchen-01",
    output: "/images/generated/home/home-hero-premium-kitchen-01.webp",
    promptText:
      "Wide hero image for a Montreal custom interior brand homepage, completed open-concept kitchen with integrated dining area, premium cabinetry, warm natural daylight, strong negative space for overlaid text, calm confident atmosphere, structured and believable renovation result.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "home-space-cuisine-card-01",
    output: "/images/generated/home/home-space-cuisine-card-01.webp",
    promptText:
      "Premium custom kitchen in a Montreal family home, medium-wide shot, integrated appliances, practical island, realistic storage layout, warm neutral palette, editorial interior photograph.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/cabinet-cuisines.webp", 1),
    ],
  }),
  asset({
    id: "home-space-bath-card-01",
    output: "/images/generated/home/home-space-bath-card-01.webp",
    promptText:
      "Premium bathroom vanity area in a Montreal home, compact but refined layout, humidity-friendly finishes, custom storage, soft natural light, believable residential scale, editorial interior photograph.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/vanite-salles-de-bain.webp", 1),
    ],
  }),
  asset({
    id: "home-space-laundry-card-01",
    output: "/images/generated/home/home-space-laundry-card-01.webp",
    promptText:
      "Custom laundry room in a Montreal home, vertical storage, folding counter, stacked machines, clean durable materials, bright natural light, organized and believable premium utility space.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/vanite-salles-de-lavage.webp", 1),
    ],
  }),
  asset({
    id: "home-space-walkin-card-01",
    output: "/images/generated/home/home-space-walkin-card-01.webp",
    promptText:
      "Custom walk-in closet in a Montreal residence, elegant organization, practical shelving and drawers, warm neutral materials, premium but restrained, editorial interior photography.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 1),
    ],
  }),
  asset({
    id: "home-space-commercial-card-01",
    output: "/images/generated/home/home-space-commercial-card-01.webp",
    promptText:
      "Custom commercial millwork in a modern Montreal office reception, durable materials, clean branding-neutral environment, structured lighting, premium and realistic business interior photograph.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/commercial.webp", 1),
    ],
  }),
  asset({
    id: "home-featured-cuisine-project-01",
    output: "/images/generated/home/home-featured-cuisine-project-01.webp",
    promptText:
      "Completed custom kitchen project in Montreal, editorial project photo, refined cabinetry, clean lines, realistic lived-in architecture, wide but intimate framing.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/cabinet-cuisines.webp", 2),
    ],
  }),
  asset({
    id: "home-featured-bath-project-01",
    output: "/images/generated/home/home-featured-bath-project-01.webp",
    promptText:
      "Completed bathroom vanity project in Laval, premium custom millwork, clean humidity-resistant finishes, realistic residential lighting, editorial project shot.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/vanite-salles-de-bain.webp", 2),
    ],
  }),
  asset({
    id: "home-featured-commercial-project-01",
    output: "/images/generated/home/home-featured-commercial-project-01.webp",
    promptText:
      "Commercial custom workspace project in downtown Montreal, clean millwork, durable surfaces, refined but practical layout, documentary-style editorial interior photo.",
    pages: ["/"],
    targets: [
      target("data/page-builder/static-pages/home.ts", "/images/spaces/vanite-salles-de-lavage.webp", 2),
    ],
  }),
  asset({
    id: "espaces-hero-overview-01",
    output: "/images/generated/spaces/espaces-hero-overview-01.webp",
    promptText:
      "Hero image for a custom spaces overview page, collage-like but realistic interior composition showing kitchen, bathroom, storage and commercial cues in one coherent Montreal design language, wide editorial framing, premium and believable.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/spaces.webp"),
    ],
  }),
  asset({
    id: "espaces-card-cuisine-01",
    output: "/images/generated/spaces/espaces-card-cuisine-01.webp",
    promptText:
      "Custom kitchen pillar page image, premium Montreal kitchen, functional island, cabinetry details, clean editorial composition, realistic proportions.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/cabinet-cuisines.webp", 1),
    ],
  }),
  asset({
    id: "espaces-card-bath-01",
    output: "/images/generated/spaces/espaces-card-bath-01.webp",
    promptText:
      "Custom bathroom pillar page image, vanity and mirror composition, moisture-friendly finishes, storage-first design, calm natural light, premium but believable.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/vanite-salles-de-bain.webp", 1),
    ],
  }),
  asset({
    id: "espaces-card-laundry-01",
    output: "/images/generated/spaces/espaces-card-laundry-01.webp",
    promptText:
      "Custom laundry room pillar page image, cabinetry around washer and dryer, folding area, vertical storage, bright and durable Montreal home utility space.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/vanite-salles-de-lavage.webp", 1),
    ],
  }),
  asset({
    id: "espaces-card-walkin-01",
    output: "/images/generated/spaces/espaces-card-walkin-01.webp",
    promptText:
      "Custom walk-in pillar page image, wardrobe organization, soft premium materials, precise shelving and drawers, editorial residential photo.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 1),
    ],
  }),
  asset({
    id: "espaces-card-commercial-01",
    output: "/images/generated/spaces/espaces-card-commercial-01.webp",
    promptText:
      "Custom commercial pillar page image, millwork in a client-facing office or boutique, durable materials, controlled lighting, modern Montreal commercial interior.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/commercial.webp", 1),
    ],
  }),
  asset({
    id: "espaces-featured-cuisine-project-01",
    output: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
    promptText:
      "Featured kitchen project image for a Montreal custom interiors site, completed installation, high-quality millwork, clean editorial framing, believable premium finish.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/cabinet-cuisines.webp", 2),
    ],
  }),
  asset({
    id: "espaces-featured-bath-project-01",
    output: "/images/generated/spaces/espaces-featured-bath-project-01.webp",
    promptText:
      "Featured bathroom project image, custom vanity and storage, premium finish, Montreal residential project, editorial interior photo.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/vanite-salles-de-bain.webp", 2),
    ],
  }),
  asset({
    id: "espaces-featured-commercial-project-01",
    output: "/images/generated/spaces/espaces-featured-commercial-project-01.webp",
    promptText:
      "Featured commercial millwork project image, reception or collaborative area, practical layout, durable finishes, premium but real execution.",
    pages: ["/espaces/"],
    targets: [
      target("data/page-builder/static-pages/espaces.ts", "/images/spaces/commercial.webp", 2),
    ],
  }),
  asset({
    id: "service-renovation-hero-01",
    output: "/images/generated/services/service-renovation-hero-01.webp",
    promptText:
      "Full-service residential renovation hero image in Montreal, open kitchen and adjoining living area, strong sense of coordination between flooring, millwork and architectural details, wide editorial shot with negative space.",
    pages: ["/services/renovation/"],
    targets: [
      target("data/page-builder/service-pages/renovation.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "service-renovation-project-01",
    output: "/images/generated/services/service-renovation-project-01.webp",
    promptText:
      "Completed custom kitchen renovation project in Montreal, premium cabinetry, warm natural light, documentary project photo, believable upscale residence.",
    pages: ["/services/renovation/"],
    targets: [
      target("data/page-builder/service-pages/renovation.ts", "/images/projects/cuisine-rive-sud/1.webp"),
    ],
  }),
  asset({
    id: "service-renovation-project-02",
    output: "/images/generated/services/service-renovation-project-02.webp",
    promptText:
      "Completed renovation project in Laval with custom kitchen and precise finish details, editorial project shot, realistic family home proportions.",
    pages: ["/services/renovation/"],
    targets: [
      target("data/page-builder/service-pages/renovation.ts", "/images/projects/cuisine-rive-sud/2.webp"),
    ],
  }),
  asset({
    id: "service-renovation-project-03",
    output: "/images/generated/services/service-renovation-project-03.webp",
    promptText:
      "Completed residential renovation project on the South Shore, integrated kitchen millwork, balanced natural light, calm premium mood, project photography.",
    pages: ["/services/renovation/"],
    targets: [
      target("data/page-builder/service-pages/renovation.ts", "/images/projects/cuisine-rive-sud/3.webp"),
    ],
  }),
  asset({
    id: "service-design-hero-01",
    output: "/images/generated/services/service-design-hero-01.webp",
    promptText:
      "Design service hero image, Montreal renovation planning table with cabinetry samples, floor samples, hardware, measured drawings and a soft editorial mood, no people, premium studio atmosphere.",
    pages: ["/services/design/"],
    targets: [
      target("data/page-builder/service-pages/design.ts", "/images/services/design-hero.webp", 1),
    ],
  }),
  asset({
    id: "service-fabrication-hero-01",
    output: "/images/generated/services/service-fabrication-hero-01.webp",
    promptText:
      "Cabinet fabrication hero image, premium custom millwork workshop, birch plywood, drawer components, clean and precise environment, realistic craftsmanship, editorial industrial photo.",
    pages: ["/services/fabrication/"],
    targets: [
      target("data/page-builder/service-pages/fabrication.ts", "/images/services/fabrication-hero-v2.webp"),
    ],
  }),
  asset({
    id: "service-installation-hero-01",
    output: "/images/generated/services/service-installation-hero-01.webp",
    promptText:
      "Installation service hero image, custom cabinetry being aligned on site in a Montreal home, clean chantier, precise tools, level adjustments, premium documentary-style craftsmanship photo.",
    pages: ["/services/installation/"],
    targets: [
      target("data/page-builder/service-pages/installation.ts", "/images/services/installation-hero.webp", 1),
    ],
  }),
  asset({
    id: "renovation-cuisine-hero-01",
    output: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
    promptText:
      "Kitchen renovation service hero image for Montreal, open concept kitchen under structured renovation management, integrated appliances, premium cabinetry, clean and believable editorial framing.",
    pages: ["/services/renovation/cuisine/"],
    targets: [
      target("data/page-builder/renovation-pages/cuisine.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "renovation-cuisine-approach-01",
    output: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
    promptText:
      "Kitchen renovation planning image, design documents, finish samples, appliance integration notes, calm premium studio mood, architectural workflow photography.",
    pages: ["/services/renovation/cuisine/"],
    targets: [
      target("data/page-builder/renovation-pages/cuisine.ts", "/images/services/design-hero.webp"),
    ],
  }),
  asset({
    id: "renovation-bath-hero-01",
    output: "/images/generated/renovation/renovation-bath-hero-01.webp",
    promptText:
      "Bathroom renovation service hero image in a Montreal home, custom vanity, refined moisture-friendly finishes, soft natural daylight, realistic premium bathroom renovation, editorial photograph.",
    pages: ["/services/renovation/salle-de-bain/"],
    targets: [
      target("data/page-builder/renovation-pages/salle-de-bain.ts", "/images/spaces/vanite-salles-de-bain.webp", 1),
    ],
  }),
  asset({
    id: "renovation-bath-approach-01",
    output: "/images/generated/renovation/renovation-bath-approach-01.webp",
    promptText:
      "Bathroom renovation planning image, vanity details, tile and finish samples, plumbing-aware layout documents, premium but believable design workflow.",
    pages: ["/services/renovation/salle-de-bain/"],
    targets: [
      target("data/page-builder/renovation-pages/salle-de-bain.ts", "/images/services/design-hero.webp"),
    ],
  }),
  asset({
    id: "renovation-plancher-hero-01",
    output: "/images/generated/renovation/renovation-plancher-hero-01.webp",
    promptText:
      "Flooring renovation service hero image, residential interior showing refined flooring transitions into kitchen and living area, precise levels and clean lines, premium Montreal renovation result.",
    pages: ["/services/renovation/plancher/"],
    targets: [
      target("data/page-builder/renovation-pages/plancher.ts", "/images/spaces/commercial.webp"),
    ],
  }),
  asset({
    id: "renovation-plancher-approach-01",
    output: "/images/generated/renovation/renovation-plancher-approach-01.webp",
    promptText:
      "On-site flooring integration image, installer coordinating cabinetry base levels and floor transitions, clean chantier, precise alignment work, documentary craftsmanship photo.",
    pages: ["/services/renovation/plancher/"],
    targets: [
      target("data/page-builder/renovation-pages/plancher.ts", "/images/services/installation-hero.webp"),
    ],
  }),
  asset({
    id: "renovation-extension-hero-01",
    output: "/images/generated/renovation/renovation-extension-hero-01.webp",
    promptText:
      "Home extension renovation hero image, newly integrated family room and kitchen addition in a Montreal house, seamless connection between old and new structure, premium but realistic architecture, wide editorial shot.",
    pages: ["/services/renovation/agrandissement-de-maison/"],
    targets: [
      target("data/page-builder/renovation-pages/agrandissement-de-maison.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "renovation-extension-approach-01",
    output: "/images/generated/renovation/renovation-extension-approach-01.webp",
    promptText:
      "Home extension planning image, residential architectural plans, finish samples and scale model feeling, calm premium workflow, real renovation design process.",
    pages: ["/services/renovation/agrandissement-de-maison/"],
    targets: [
      target("data/page-builder/renovation-pages/agrandissement-de-maison.ts", "/images/services/design-hero.webp"),
    ],
  }),
  asset({
    id: "space-cuisine-hero-01",
    output: "/images/generated/spaces/space-cuisine-hero-01.webp",
    promptText:
      "Kitchen pillar hero image, custom kitchen in Montreal, integrated appliances, warm natural light, premium but practical family kitchen, wide editorial composition with space for copy.",
    pages: ["/espaces/cuisine/"],
    targets: [
      target("data/page-builder/space-pages/cuisine.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "space-cuisine-project-01",
    output: "/images/generated/spaces/space-cuisine-project-01.webp",
    promptText:
      "Custom kitchen project image in Montreal, clean cabinetry lines, refined island and storage, documentary project photo, believable premium renovation.",
    pages: ["/espaces/cuisine/"],
    targets: [
      target("data/page-builder/space-pages/cuisine.ts", "/images/projects/cuisine-rive-sud/1.webp"),
    ],
  }),
  asset({
    id: "space-cuisine-project-02",
    output: "/images/generated/spaces/space-cuisine-project-02.webp",
    promptText:
      "Custom kitchen project image in Laval, elegant material palette, realistic family-home scale, editorial completed-installation shot.",
    pages: ["/espaces/cuisine/"],
    targets: [
      target("data/page-builder/space-pages/cuisine.ts", "/images/projects/cuisine-rive-sud/2.webp"),
    ],
  }),
  asset({
    id: "space-cuisine-project-03",
    output: "/images/generated/spaces/space-cuisine-project-03.webp",
    promptText:
      "Custom kitchen project image on the South Shore, premium cabinetry, calm daylight, finished installation, credible high-end residential interior.",
    pages: ["/espaces/cuisine/"],
    targets: [
      target("data/page-builder/space-pages/cuisine.ts", "/images/projects/cuisine-rive-sud/3.webp"),
    ],
  }),
  asset({
    id: "space-bath-hero-01",
    output: "/images/generated/spaces/space-bath-hero-01.webp",
    promptText:
      "Bathroom pillar hero image, custom vanity in a Montreal home, refined but durable finishes, humidity-friendly materials, clean editorial interior photo.",
    pages: ["/espaces/salle-de-bain/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-bain.ts", "/images/spaces/vanite-salles-de-bain.webp", 1),
    ],
  }),
  asset({
    id: "space-bath-project-01",
    output: "/images/generated/spaces/space-bath-project-01.webp",
    promptText:
      "Bathroom project image in Laval, custom vanity and efficient storage, realistic premium finish, documentary interior project shot.",
    pages: ["/espaces/salle-de-bain/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-bain.ts", "/images/spaces/vanite-salles-de-bain.webp", 3),
    ],
  }),
  asset({
    id: "space-bath-project-02",
    output: "/images/generated/spaces/space-bath-project-02.webp",
    promptText:
      "Bathroom project image in Montreal, refined vanity, clean mirror lighting, premium but believable residential bathroom, editorial project photo.",
    pages: ["/espaces/salle-de-bain/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-bain.ts", "/images/spaces/vanite-salles-de-bain.webp", 4),
    ],
  }),
  asset({
    id: "space-bath-project-03",
    output: "/images/generated/spaces/space-bath-project-03.webp",
    promptText:
      "Bathroom project image on the South Shore, custom storage, clean lines, durable materials, realistic premium residential atmosphere.",
    pages: ["/espaces/salle-de-bain/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-bain.ts", "/images/spaces/vanite-salles-de-bain.webp", 5),
    ],
  }),
  asset({
    id: "space-laundry-hero-01",
    output: "/images/generated/spaces/space-laundry-hero-01.webp",
    promptText:
      "Laundry room pillar hero image, premium custom cabinetry around laundry appliances, folding surface, natural light, practical Montreal home utility room, editorial photograph.",
    pages: ["/espaces/salle-de-lavage/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-lavage.ts", "/images/spaces/vanite-salles-de-lavage.webp", 1),
    ],
  }),
  asset({
    id: "space-laundry-project-01",
    output: "/images/generated/spaces/space-laundry-project-01.webp",
    promptText:
      "Laundry room project image in Montreal, custom storage, stacked machines, tidy premium utility design, believable residential project shot.",
    pages: ["/espaces/salle-de-lavage/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-lavage.ts", "/images/spaces/vanite-salles-de-lavage.webp", 3),
    ],
  }),
  asset({
    id: "space-laundry-project-02",
    output: "/images/generated/spaces/space-laundry-project-02.webp",
    promptText:
      "Laundry room project image in Laval, durable cabinetry and folding counter, bright editorial framing, premium but practical result.",
    pages: ["/espaces/salle-de-lavage/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-lavage.ts", "/images/spaces/vanite-salles-de-lavage.webp", 4),
    ],
  }),
  asset({
    id: "space-laundry-project-03",
    output: "/images/generated/spaces/space-laundry-project-03.webp",
    promptText:
      "Laundry room project image on the South Shore, integrated storage and work surface, realistic daily-use space, clean completed installation photo.",
    pages: ["/espaces/salle-de-lavage/"],
    targets: [
      target("data/page-builder/space-pages/salle-de-lavage.ts", "/images/spaces/vanite-salles-de-lavage.webp", 5),
    ],
  }),
  asset({
    id: "space-walkin-hero-01",
    output: "/images/generated/spaces/space-walkin-hero-01.webp",
    promptText:
      "Walk-in pillar hero image, custom wardrobe layout in a Montreal home, elegant but restrained materials, organized drawers and hanging space, editorial interior photo.",
    pages: ["/espaces/walk-in/"],
    targets: [
      target("data/page-builder/space-pages/walk-in.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 1),
    ],
  }),
  asset({
    id: "space-walkin-project-01",
    output: "/images/generated/spaces/space-walkin-project-01.webp",
    promptText:
      "Walk-in project image in Montreal, clear storage zones, warm neutral finishes, realistic premium closet design, editorial project shot.",
    pages: ["/espaces/walk-in/"],
    targets: [
      target("data/page-builder/space-pages/walk-in.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 3),
    ],
  }),
  asset({
    id: "space-walkin-project-02",
    output: "/images/generated/spaces/space-walkin-project-02.webp",
    promptText:
      "Walk-in project image in Laval, optimized storage and circulation, practical luxury feel, clean millwork and believable residential scale.",
    pages: ["/espaces/walk-in/"],
    targets: [
      target("data/page-builder/space-pages/walk-in.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 4),
    ],
  }),
  asset({
    id: "space-walkin-project-03",
    output: "/images/generated/spaces/space-walkin-project-03.webp",
    promptText:
      "Walk-in project image on the South Shore, refined closet organization, premium cabinetry details, natural light, completed residential project photo.",
    pages: ["/espaces/walk-in/"],
    targets: [
      target("data/page-builder/space-pages/walk-in.ts", "/images/spaces/vanite-garde-robes-et-walk-ins.webp", 5),
    ],
  }),
  asset({
    id: "space-commercial-hero-01",
    output: "/images/generated/spaces/space-commercial-hero-01.webp",
    promptText:
      "Commercial pillar hero image, custom millwork in a Montreal office or boutique interior, durable and refined materials, structured lighting, premium but realistic business space.",
    pages: ["/espaces/commercial/"],
    targets: [
      target("data/page-builder/space-pages/commercial.ts", "/images/spaces/commercial.webp", 1),
    ],
  }),
  asset({
    id: "space-commercial-project-01",
    output: "/images/generated/spaces/space-commercial-project-01.webp",
    promptText:
      "Commercial project image in Montreal, reception or collaborative workspace with custom millwork, clean lines, durable finishes, project documentary photo.",
    pages: ["/espaces/commercial/"],
    targets: [
      target("data/page-builder/space-pages/commercial.ts", "/images/spaces/commercial.webp", 3),
    ],
  }),
  asset({
    id: "space-commercial-project-02",
    output: "/images/generated/spaces/space-commercial-project-02.webp",
    promptText:
      "Commercial project image in Laval, custom cabinetry and display millwork, realistic retail or office scale, premium execution, editorial interior shot.",
    pages: ["/espaces/commercial/"],
    targets: [
      target("data/page-builder/space-pages/commercial.ts", "/images/spaces/commercial.webp", 4),
    ],
  }),
  asset({
    id: "space-commercial-project-03",
    output: "/images/generated/spaces/space-commercial-project-03.webp",
    promptText:
      "Commercial project image on the South Shore, durable custom millwork, organized circulation, clean business interior, believable premium atmosphere.",
    pages: ["/espaces/commercial/"],
    targets: [
      target("data/page-builder/space-pages/commercial.ts", "/images/spaces/commercial.webp", 5),
    ],
  }),
  asset({
    id: "material-birch-drawer-detail-01",
    output: "/images/generated/materials/material-birch-drawer-detail-01.webp",
    promptText:
      "Macro material detail of premium solid birch drawer construction, crisp joinery, realistic wood grain, clean workshop or installed context, editorial product-detail photograph.",
    pages: ["/materiaux/bois-massif/", "/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/bois-massif.ts", "/images/spaces/cabinet-cuisines.webp"),
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/spaces/cabinet-cuisines.webp", 1),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-plywood-detail-01",
    output: "/images/generated/materials/material-plywood-detail-01.webp",
    promptText:
      "Macro material detail of birch plywood cabinet construction, exposed edge, refined craftsmanship, realistic texture, sharp editorial product photography.",
    pages: ["/materiaux/contreplaque/", "/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/contreplaque.ts", "/images/spaces/cabinet-cuisines.webp"),
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/spaces/cabinet-cuisines.webp", 2),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-hardware-detail-01",
    output: "/images/generated/materials/material-hardware-detail-01.webp",
    promptText:
      "Macro shot of premium cabinet hardware, soft-close hinge or drawer slide integrated into custom millwork, crisp lighting, realistic metal finish, premium technical detail photo.",
    pages: ["/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/spaces/vanite-salles-de-bain.webp"),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-finish-samples-01",
    output: "/images/generated/materials/material-finish-samples-01.webp",
    promptText:
      "Design material flat lay with cabinet finish samples, color chips, hardware and wood textures, premium Montreal renovation palette, editorial overhead photograph.",
    pages: ["/materiaux/couleurs/", "/materiaux/mdf/", "/materiaux/melamine/"],
    targets: [
      target("data/page-builder/material-pages/couleurs.ts", "/images/services/design-hero.webp", 1),
      target("data/page-builder/material-pages/mdf.ts", "/images/services/design-hero.webp", 1),
      target("data/page-builder/material-pages/melamine.ts", "/images/services/design-hero.webp", 1),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "comparatif-materiaux-01",
    output: "/images/generated/materials/comparatif-materiaux-01.webp",
    promptText:
      "Hero image for a custom materials comparison page, curated composition of birch plywood edge, painted MDF panel, melamine sample, solid wood detail and premium cabinet hardware, arranged in a refined editorial interior-material scene, realistic textures, no labels.",
    pages: ["/materiaux/comparatif/"],
    targets: [
      target("data/page-builder/material-pages/comparatif.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "material-plywood-hero-01",
    output: "/images/generated/materials/material-plywood-hero-01.webp",
    promptText:
      "Hero image for a plywood material page, premium custom cabinetry structure in birch plywood, visible layered edge details, refined workshop-to-installed feel, warm natural light, wide editorial composition, realistic craftsmanship.",
    pages: ["/materiaux/contreplaque/"],
    targets: [
      target("data/page-builder/material-pages/contreplaque.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "material-solid-wood-finish-detail-01",
    output: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
    promptText:
      "Close-up detail of solid wood cabinetry finish, visible grain variation, premium matte protective finish, subtle movement in natural wood tone, realistic handcrafted millwork, editorial material photography.",
    pages: ["/materiaux/bois-massif/"],
    targets: [
      target("data/page-builder/material-pages/bois-massif.ts", "/images/hero/kitchen-hero.webp"),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-color-finish-lifestyle-01",
    output: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
    promptText:
      "Interior lifestyle image showing color and finish choices applied in a real Montreal kitchen, painted cabinetry, wood accent, countertop and backsplash working together, soft daylight, premium but believable editorial interior photo.",
    pages: ["/materiaux/couleurs/"],
    targets: [
      target("data/page-builder/material-pages/couleurs.ts", "/images/services/design-hero.webp"),
    ],
  }),
  asset({
    id: "material-mdf-painted-panel-01",
    output: "/images/generated/materials/material-mdf-painted-panel-01.webp",
    promptText:
      "Close-up of painted MDF cabinet panel, ultra-smooth uniform surface, crisp profile detail, premium sprayed finish, realistic material behavior, editorial product-style millwork photography.",
    pages: ["/materiaux/mdf/"],
    targets: [
      target("data/page-builder/material-pages/mdf.ts", "/images/services/design-hero.webp"),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-melamine-panel-detail-01",
    output: "/images/generated/materials/material-melamine-panel-detail-01.webp",
    promptText:
      "Close-up of melamine cabinet panel with refined decorative finish and clean edge banding, realistic texture, practical premium cabinetry context, sharp editorial material photograph.",
    pages: ["/materiaux/melamine/"],
    targets: [
      target("data/page-builder/material-pages/melamine.ts", "/images/services/design-hero.webp"),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-hardware-hero-01",
    output: "/images/generated/materials/material-hardware-hero-01.webp",
    promptText:
      "Hero image for a cabinet hardware page, premium custom kitchen drawer slightly open to reveal refined hinge and slide systems, soft-close quality implied, elegant millwork context, realistic editorial interior photo.",
    pages: ["/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/hero/kitchen-hero.webp"),
    ],
  }),
  asset({
    id: "material-solid-wood-card-01",
    output: "/images/generated/materials/material-solid-wood-card-01.webp",
    promptText:
      "Square card image for solid wood material content, premium solid wood cabinet door and drawer detail, warm grain, tactile finish, clean composition, believable high-end millwork.",
    pages: ["/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/spaces/cabinet-cuisines.webp", 1),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-plywood-card-01",
    output: "/images/generated/materials/material-plywood-card-01.webp",
    promptText:
      "Square card image for plywood material content, birch plywood cabinet box detail with exposed layered edge, clean joinery, realistic premium craftsmanship, sharp editorial photo.",
    pages: ["/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/hero/kitchen-hero.webp", 2),
    ],
    size: "1024x1024",
  }),
  asset({
    id: "material-kitchen-durability-card-01",
    output: "/images/generated/materials/material-kitchen-durability-card-01.webp",
    promptText:
      "Square card image showing durable custom kitchen millwork in use, premium drawers and cabinetry, realistic daily-use context, clean lines, refined but believable Montreal residential interior.",
    pages: ["/materiaux/quincaillerie/"],
    targets: [
      target("data/page-builder/material-pages/quincaillerie.ts", "/images/spaces/cabinet-cuisines.webp", 2),
    ],
    size: "1024x1024",
  }),

  // --- Aménagement de sous-sol (espaces haut de gamme) ---
  asset({
    id: "space-sous-sol-hero-01",
    output: "/images/generated/spaces/space-sous-sol-hero-01.webp",
    promptText:
      "Wide hero image of a finished high-end basement living space in a Montreal home, custom millwork media wall with integrated TV and warm wood storage, recessed lighting, cozy seating, low-ceiling realistic basement proportions, calm confident atmosphere, generous negative space for overlaid text, believable Quebec renovation result.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-materials-01",
    output: "/images/generated/spaces/space-sous-sol-materials-01.webp",
    promptText:
      "Close-up detail of custom basement millwork, birch plywood and solid wood cabinet construction, concealed hardware and cable management, humidity-aware finishes, neutral palette, soft natural light, editorial material-focused interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "espaces-card-sous-sol-01",
    output: "/images/generated/spaces/espaces-card-sous-sol-01.webp",
    promptText:
      "Medium-wide card image of a custom-furnished Montreal basement, built-in bookshelves and a small bar area visible, warm wood tones, realistic basement scale, tidy and inviting, editorial interior photograph.",
    pages: ["/espaces"],
    targets: [],
  }),
  asset({
    id: "home-space-sous-sol-card-01",
    output: "/images/generated/home/home-space-sous-sol-card-01.webp",
    promptText:
      "Premium finished basement in a Montreal family home, integrated media wall and storage, warm neutral palette, soft layered lighting, believable residential basement proportions, editorial interior photograph.",
    pages: ["/"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-cinema-01",
    output: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
    promptText:
      "Custom home cinema room in a Montreal basement, tiered seating platform built in wood, acoustic wall panels, concealed equipment cabinet, large screen, dimmed ambient lighting, realistic residential scale, not a commercial theater, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-bar-01",
    output: "/images/generated/spaces/space-sous-sol-bar-01.webp",
    promptText:
      "Custom basement bar in a Montreal home, wood and stone counter, integrated bottle and glass storage, bar fridge built in, warm under-cabinet lighting, believable residential proportions, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-cave-vin-01",
    output: "/images/generated/spaces/space-sous-sol-cave-vin-01.webp",
    promptText:
      "Custom residential wine cellar in a Montreal basement, wood and glass enclosure with climate door, neatly organized bottle racks, focused accent lighting, refined but practical, not a wine shop, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-bibliotheque-bureau-01",
    output: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
    promptText:
      "Custom floor-to-ceiling bookcase wall with an integrated desk nook in a Montreal basement, warm wood shelving, books and a few objects, soft reading light, tidy and believable home office corner, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-salle-jeux-01",
    output: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
    promptText:
      "Custom family game room in a Montreal basement, built-in media and storage unit, open play area, durable warm finishes, organized and uncluttered, realistic basement proportions, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
  asset({
    id: "space-sous-sol-rangement-01",
    output: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
    promptText:
      "Custom closed storage cabinetry along a Montreal basement wall, clean flat-panel doors hiding mechanical access, neutral palette, well-lit, very tidy, practical and believable, editorial interior photograph.",
    pages: ["/espaces/sous-sol"],
    targets: [],
  }),
];

export default imageManifest;
