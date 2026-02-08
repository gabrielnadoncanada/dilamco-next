import type { ReactNode } from "react";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { FAQSection } from "@/components/sections/FAQSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TextSection } from "@/components/sections/TextSection";

type SectionLink = { label: string; href: string };

type SectionItemWithLink = {
  label: string;
  link?: SectionLink;
};

export type RenderableSection = {
  id: string;
  title: string;
  type: "text" | "list" | "steps" | "list-with-links" | "faq";
  paragraphs?: string[];
  intro?: string;
  items?: string[];
  itemsWithLinks?: SectionItemWithLink[];
  steps?: string[];
  links?: SectionLink[];
  faqItems?: Array<{ q: string; a: string }>;
};

type RenderSectionOptions = {
  dedupeLinkedLabel?: boolean;
};

function toActionButtons(links?: SectionLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.label,
    href: link.href,
    variant: "outline",
  }));
}

function mapItemsWithLinks(
  items: SectionItemWithLink[] | undefined,
  dedupeLinkedLabel: boolean
) {
  return (
    items?.map((item) => {
      if (!item.link) return item.label;
      if (dedupeLinkedLabel && item.label === item.link.label) {
        return item.link.label;
      }
      return `${item.label} â€” ${item.link.label}`;
    }) ?? []
  );
}

export function renderSection(
  section: RenderableSection,
  options: RenderSectionOptions = {}
): ReactNode {
  const { id, title, type } = section;
  const dedupeLinkedLabel = options.dedupeLinkedLabel ?? false;

  switch (type) {
    case "text":
      return (
        <TextSection
          key={id}
          aria-labelledby={id}
          heading={title}
          paragraphs={section.paragraphs ?? []}
          links={toActionButtons(section.links)}
        />
      );

    case "list":
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={section.intro}
          items={section.items ?? []}
          links={toActionButtons(section.links)}
          variant="bullets"
        />
      );

    case "list-with-links":
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={section.intro}
          items={mapItemsWithLinks(section.itemsWithLinks, dedupeLinkedLabel)}
          variant="bullets"
        />
      );

    case "steps":
      const stepLinks = toActionButtons(section.links);
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          steps={(section.steps ?? []).map((step, idx) => ({
            step: String(idx + 1),
            title: step,
            description: "",
          }))}
          actions={
            stepLinks && stepLinks.length > 0 ? (
              <ActionButtons buttons={stepLinks} />
            ) : undefined
          }
        />
      );

    case "faq":
      return (
        <FAQSection
          key={id}
          aria-labelledby={id}
          heading={title}
          items={(section.faqItems ?? []).map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />
      );

    default:
      return null;
  }
}
