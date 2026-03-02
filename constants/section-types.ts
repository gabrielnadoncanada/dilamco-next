export const SECTION_TYPES = {
  TEXT: "text",
  LIST: "list",
  TABLE: "table",
  ASYMMETRIC_2_COLUMNS: "asymmetric-2-columns",
  CENTERED_MINIMAL: "centered-minimal",
  INTRO_VALUE: "introduction-value",
  HERO_SPLIT_PREMIUM: "hero-split-premium",
  MATERIALS_CONTRAST: "materials-contrast",
  PROJECTS_IMMERSIVE: "projects-immersive",
  STEPS: "steps",
  LIST_WITH_LINKS: "list-with-links",
  RELATED_LINKS: "related-links",
  CUSTOM: "custom",
  FAQ: "faq",
  FEATURE_GRID: "featureGrid",
  PROOF: "proof",
  PROCESS: "process",
  SLIDER: "slider",
} as const;

export type SectionTypeValue =
  (typeof SECTION_TYPES)[keyof typeof SECTION_TYPES];
