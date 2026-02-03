import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
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
    <Section className={className} {...props}>
      <Container>
        <div className="text-center">
          <Heading variant="h2" className="mb-4">
            {heading}
          </Heading>
        </div>
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
      </Container>
    </Section>
  );
};

export { FAQSection };
