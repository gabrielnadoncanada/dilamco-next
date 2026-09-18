"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { AppLink as Link } from "@/components/AppLink";
import type { MenuItem } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";

interface MobileMenuItemProps {
  item: MenuItem;
  index: number;
}

export function MobileMenuItem({ item, index }: MobileMenuItemProps) {
  if (item.groups) {
    return (
      <AccordionItem value={`nav-${index}`} className="border-b-0">
        <AccordionTrigger className="h-14 items-center rounded-xl p-0 !px-3 font-display text-lg font-semibold tracking-[-0.01em] text-foreground hover:bg-primary-soft hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="max-h-[60dvh] overflow-y-auto pb-2">
          {item.groups.flatMap((group, groupIndex) =>
            group.links.map((link, linkIndex) => (
              <NavLinkItem
                key={`mobile-link-${groupIndex}-${linkIndex}`}
                link={link}
                variant="mobile"
              />
            )),
          )}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      href={item.url ?? "/"}
      className="flex h-14 items-center rounded-xl px-3 font-display text-lg font-semibold tracking-[-0.01em] text-foreground transition-colors hover:bg-primary-soft focus-visible:bg-primary-soft focus-visible:outline-none"
    >
      {item.title}
    </Link>
  );
}
