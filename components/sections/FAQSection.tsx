import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";

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
      title={<Heading variant="h2">{heading}</Heading>}
      align="center"
      {...props}
    >
      <Divider />
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  );
};

export { FAQSection };
