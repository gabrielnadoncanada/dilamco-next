import type { ReactNode } from "react";
import { ActionButtons } from "@/components/ActionButtons";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { SliderSection } from "@/components/sections/SliderSection";
import { TextSection } from "@/components/sections/TextSection";
import { SECTION_TYPES } from "@/constants/section-types";
import {
  faqItemsToSectionItems,
  normalizeContentSection,
  toActionButtons,
} from "@/lib/section-normalizers";
import type { ContentSection, RenderableSection, SectionContent } from "@/types/sections";

type RenderSectionOptions = {
  dedupeLinkedLabel?: boolean;
};

type SectionType = SectionContent["type"];
type SectionOfType<T extends SectionType> = {
  id: string;
  title: string;
  content: Extract<SectionContent, { type: T }>;
};

type RegistryEntry<T extends SectionType> = {
  normalize: (
    section: SectionOfType<T>,
    options: RenderSectionOptions
  ) => RenderableSection;
  render: (section: RenderableSection) => ReactNode;
};

type SectionRegistry = {
  [K in SectionType]: RegistryEntry<K>;
};

export const sectionRegistry: SectionRegistry = {
  [SECTION_TYPES.TEXT]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <TextSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={typeof section.intro === "string" ? section.intro : undefined}
        paragraphs={section.paragraphs ?? []}
        links={toActionButtons(section.links)}
      />
    ),
  },
  [SECTION_TYPES.LIST]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <ListSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={typeof section.intro === "string" ? section.intro : undefined}
        items={(section.items as Array<string | { title: string; description: string }>) ?? []}
        links={toActionButtons(section.links)}
        variant={section.variant ?? "bullets"}
      />
    ),
  },
  [SECTION_TYPES.TABLE]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <ComparisonTableSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        description={section.description}
        columns={section.tableColumns ?? []}
        rows={section.rows ?? []}
        firstColumnLabel={section.firstColumnLabel}
      />
    ),
  },
  [SECTION_TYPES.STEPS]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => {
      const stepLinks = toActionButtons(section.links);
      return (
        <ProcessSection
          key={section.id}
          aria-labelledby={section.id}
          heading={section.title}
          intro={typeof section.intro === "string" ? section.intro : undefined}
          items={(section.steps ?? []).map((step, idx) => ({
            step: String(idx + 1),
            title: step,
            description: "",
          }))}
          actions={stepLinks && stepLinks.length > 0 ? <ActionButtons buttons={stepLinks} /> : undefined}
        />
      );
    },
  },
  [SECTION_TYPES.LIST_WITH_LINKS]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <ListSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={typeof section.intro === "string" ? section.intro : undefined}
        items={
          (section.items as Array<string | { title: string; description: string }>) ?? []
        }
        variant="bullets"
      />
    ),
  },
  [SECTION_TYPES.RELATED_LINKS]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <RelatedLinksSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={section.intro}
        items={section.relatedLinks ?? []}
        columns={section.columns as 2 | 3 | undefined}
      />
    ),
  },
  [SECTION_TYPES.FEATURE_GRID]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <FeatureGridSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        description={section.description}
        items={(section.items as Array<{ title: string; description: string }>) ?? []}
        columns={section.columns as 2 | 3 | 4 | undefined}
      />
    ),
  },
  [SECTION_TYPES.PROOF]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <ProofSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        description={section.description}
        items={(section.items as Array<{ title: string; description: string }>) ?? []}
      />
    ),
  },
  [SECTION_TYPES.PROCESS]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <ProcessSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={section.description}
        items={
          (section.items as Array<{
            id?: string | number;
            step?: string | number;
            title: string;
            description: string;
          }>) ?? []
        }
        layout={section.layout}
        actions={section.actions}
      />
    ),
  },
  [SECTION_TYPES.SLIDER]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <SliderSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        description={section.description}
        items={
          (section.items as Array<{
            id: string;
            title: string;
            description?: string;
            href?: string;
            image?: { src: string; alt: string };
          }>) ?? []
        }
        showNavigation={section.showNavigation}
      />
    ),
  },
  [SECTION_TYPES.CUSTOM]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => <div key={section.id}>{section.node ?? null}</div>,
  },
  [SECTION_TYPES.FAQ]: {
    normalize: (section, options) => normalizeContentSection(section, options),
    render: (section) => (
      <FAQSection
        key={section.id}
        aria-labelledby={section.id}
        heading={section.title}
        intro={section.intro}
        items={faqItemsToSectionItems(section.faqItems)}
      />
    ),
  },
};

export function renderSection(
  section: ContentSection,
  options: RenderSectionOptions = {}
): ReactNode {
  const entry = sectionRegistry[section.content.type];
  const normalized = (entry.normalize as (
    input: ContentSection,
    opts: RenderSectionOptions
  ) => RenderableSection)(section, options);
  return entry.render(normalized);
}
