"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/navigation";
import type { MenuItem } from "../navbar.types";
import { NavLinkItem } from "./nav-link-item";

interface MobileMenuItemProps {
  item: MenuItem;
  index: number;
}

export function MobileMenuItem({ item, index }: MobileMenuItemProps) {
  if (item.groups) {
    return (
      <AccordionItem
        value={`nav-${index}`}
        className="border-b-0"
      >
        <AccordionTrigger className="h-[3.75rem] items-center p-0 !px-6 text-base leading-normal font-medium text-muted-foreground hover:bg-muted hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="max-h-[60dvh] overflow-x-auto px-2">
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
      className="flex h-[3.75rem] items-center border-b  p-0 px-6 text-left text-base leading-normal font-medium text-muted-foreground ring-ring/10 outline-ring/50 transition-all hover:bg-muted focus-visible:ring-4 focus-visible:outline-1 nth-last-1:border-0"
    >
      {item.title}
    </Link>
  );
}
