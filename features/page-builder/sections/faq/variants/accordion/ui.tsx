import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { AccordionProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function Accordion(props: AccordionProps) {
  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-4">
        <Heading as="h2" variant="h2" className="lg:sticky lg:top-28">
          {props.heading}
        </Heading>

        {props.intro ? <p className="text-lead mt-4">{props.intro}</p> : null}
      </div>

      <div className="lg:col-[6/13]">
        <AccordionComponent
          type="single"
          collapsible
          className="w-full border-t border-border/80"
        >
          {props.items.map((item, index) => (
            <AccordionItem
              key={`${item.q}-${index}`}
              value={`item-${index}`}
              className="border-b border-border/80"
            >
              <AccordionTrigger className="focus-ring rounded-none py-5 font-display text-[length:var(--title-5)] font-semibold leading-[1.25] tracking-[-0.015em] transition-ui hover:text-primary hover:no-underline focus-visible:ring-0 focus-visible:border-transparent **:data-[slot=accordion-trigger-icon]:size-5 **:data-[slot=accordion-trigger-icon]:text-primary">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-[62ch] pb-6 text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionComponent>
      </div>
    </div>
  );
}
