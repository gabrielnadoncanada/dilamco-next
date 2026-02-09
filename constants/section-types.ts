export const SECTION_TYPES = {
  TEXT: "text",
  LIST: "list",
  TABLE: "table",
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
