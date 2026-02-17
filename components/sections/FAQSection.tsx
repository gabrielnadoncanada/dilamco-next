import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionFooterDivider, SectionTitle } from "@/components/sections/section-helpers";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps extends Omit<SectionShellProps, "title" | "children"> {
  heading: string;
  items: FAQItem[];
  className?: string;
}

const FAQSection = ({
  heading,
  items,
  className,
  ...props
}: FAQSectionProps) => {
  return (
    <SectionShell
      className={className}
      container="narrow"
      title={<SectionTitle heading={heading} />}
      align="center"
      {...props}
    >

      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={`${item.question}-${index}`} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base leading-relaxed font-semibold hover:no-underline md:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <SectionFooterDivider />
    </SectionShell>
  );
};

export { FAQSection };
