import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps extends Omit<
  SectionShellProps,
  | "title"
  | "intro"
  | "actions"
  | "children"
  | "surface"
  | "padding"
  | "container"
  | "eyebrow"
  | "align"
  | "contentClassName"
  | "headerClassName"
  | "bodyClassName"
> {
  heading: string;
  description?: string;
  intro?: React.ReactNode;
  items: FAQItem[];
  className?: string;
}

const FAQSection = ({
  heading,
  description,
  intro,
  items,
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: FAQSectionProps) => {
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;
  const resolvedDescription =
    description ?? intro ?? "Réponses claires sur les prix, les délais et ce que signifie la livraison clé en main.";

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto max-w-7xl px-4 py-14 sm:py-16", className)}
      {...props}
    >
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h2>
          {typeof resolvedDescription === "string" ? (
            <p className="mt-3 text-muted-foreground">{resolvedDescription}</p>
          ) : resolvedDescription ? (
            <div className="mt-3 text-muted-foreground">{resolvedDescription}</div>
          ) : null}
        </div>

        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={`${item.question}-${index}`} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FAQSection };
