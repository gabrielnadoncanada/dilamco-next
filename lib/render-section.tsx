import type { ReactNode } from "react";
import { Circle } from "lucide-react";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
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
import type {
  ContentSection,
  FaqItem,
  ListEntry,
  RelatedLink,
  SectionItemWithLink,
  SectionLink,
} from "@/types/sections";

type RenderSectionOptions = {
  dedupeLinkedLabel?: boolean;
};

function toActionButtons(links?: SectionLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.title ?? link.label ?? link.text ?? "",
    href: link.href,
    variant: "outline",
  }));
}

function toListEntries(items?: Array<ListEntry | RelatedLink | undefined>): ListEntry[] {
  return (items ?? [])
    .filter((item): item is ListEntry | RelatedLink => item != null)
    .flatMap((item): ListEntry[] => {
      if (typeof item === "string") return [item];

      if ("href" in item) {
        const label = item.title ?? item.label ?? item.href;
        return label ? [label] : [];
      }

      if ("title" in item && "description" in item && typeof item.title === "string") {
        return [item as ListEntry];
      }

      return [];
    });
}

function mapItemsWithLinks(items: SectionItemWithLink[] | undefined, dedupeLinkedLabel: boolean) {
  return (
    items?.map((item) => {
      const itemText = item.title ?? item.label ?? "";
      if (!item.link) return itemText;
      const linkText = item.link.title ?? item.link.label ?? "";
      if (dedupeLinkedLabel && itemText === linkText) {
        return linkText;
      }
      return `${itemText} - ${linkText}`;
    }) ?? []
  );
}

function faqItemsToSectionItems(items: FaqItem[] | undefined) {
  return (items ?? []).map((item) => ({
    question: item.q,
    answer: item.a,
  }));
}

export function renderSection(section: ContentSection, options: RenderSectionOptions = {}): ReactNode {
  const { id, title, intro, content } = section;
  const dedupeLinkedLabel = options.dedupeLinkedLabel ?? false;

  switch (content.type) {
    case SECTION_TYPES.TEXT: {
      const paragraphs =
        content.paragraphs ??
        (content.items
          ? toListEntries(content.items).map((item) =>
              typeof item === "string" ? item : `${item.title} ${item.description}`.trim()
            )
          : []);

      return (
        <TextSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          paragraphs={paragraphs}
          links={toActionButtons(content.links)}
        />
      );
    }

    case SECTION_TYPES.LIST:
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={toListEntries(content.items)}
          links={toActionButtons(content.links)}
          variant={content.variant ?? "bullets"}
        />
      );

    case SECTION_TYPES.TABLE:
      return (
        <ComparisonTableSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          columns={content.columns}
          rows={content.rows}
          firstColumnLabel={content.firstColumnLabel}
        />
      );

    case SECTION_TYPES.STEPS: {
      const stepLinks = toActionButtons(content.links);
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={(content.steps ?? []).map((step, idx) => ({
            step: String(idx + 1),
            title: step,
            description: "",
          }))}
          actions={stepLinks && stepLinks.length > 0 ? <ActionButtons buttons={stepLinks} /> : undefined}
        />
      );
    }

    case SECTION_TYPES.LIST_WITH_LINKS:
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={mapItemsWithLinks(content.itemsWithLinks, dedupeLinkedLabel)}
          variant="bullets"
        />
      );

    case SECTION_TYPES.RELATED_LINKS:
      return (
        <RelatedLinksSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={content.items.filter((item) => Boolean(item.href)) as Array<RelatedLink & { href: string }>}
          columns={content.columns}
        />
      );

    case SECTION_TYPES.FEATURE_GRID:
      return (
        <FeatureGridSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={content.items.map((item) => ({
            ...item,
            icon: item.icon ?? Circle,
          }))}
          columns={content.columns}
        />
      );

    case SECTION_TYPES.PROOF:
      return (
        <ProofSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={content.items}
        />
      );

    case SECTION_TYPES.PROCESS:
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={content.items}
          layout={content.layout}
          actions={content.actions}
        />
      );

    case SECTION_TYPES.SLIDER:
      return (
        <SliderSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={content.items}
          showNavigation={content.showNavigation}
        />
      );

    case SECTION_TYPES.FAQ:
      return (
        <FAQSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={intro}
          items={faqItemsToSectionItems(content.items)}
        />
      );

    case SECTION_TYPES.CUSTOM:
      return <div key={id}>{content.node ?? null}</div>;

    default:
      return null;
  }
}
