
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
    <div className="grid gap-y-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        {props.intro ? (
          <p className="mt-4 text-muted-foreground">{props.intro}</p>
        ) : null}
      </div>

      <div className="lg:col-[7/13]">
        <AccordionComponent type="single" collapsible className="w-full">
          {props.items.map((item, index) => (
            <AccordionItem key={`${item.q}-${index}`} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </AccordionComponent>
      </div>
    </div>
  );
}