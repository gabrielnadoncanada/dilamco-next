import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { SplitFaqAccordionProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitFaqAccordion(props: SplitFaqAccordionProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        {props.intro ? (
          <p className="mt-4 text-muted-foreground">{props.intro}</p>
        ) : null}
      </div>

      <div className="lg:col-span-8">
        <Accordion type="single" collapsible className="w-full">
          {props.items.map((item, index) => (
            <AccordionItem key={`${item.q}-${index}`} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </div>
  );
}