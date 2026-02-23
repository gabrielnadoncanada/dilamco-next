import React from "react";
import { cn } from "@/lib/utils";
import {
  SectionShell,
  type SectionShellProps,
  type SectionSurface,
} from "@/components/elements/section-shell";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { SectionFooterDivider, SectionTitle, getGridCols } from "@/components/sections/section-helpers";
import type { RelatedLink } from "@/types/sections";

interface RelatedLinksSectionProps
  extends Omit<SectionShellProps, "title" | "intro" | "children" | "surface"> {
  heading: string;
  items: RelatedLink[];
  columns?: 2 | 3;
  intro?: React.ReactNode;
  sectionVariant?: SectionSurface;
  className?: string;
}

const RelatedLinksSection = ({
  heading,
  sectionVariant = "default",
  items,
  columns = 3,
  intro,
  className,
  ...props
}: RelatedLinksSectionProps) => {
  return (
    <SectionShell
      surface={sectionVariant}
      className={cn(className)}
      title={
        <SectionTitle heading={heading} className="text-center" />
      }
      intro={intro}
      align="center"
      {...props}
    >
      <div
        data-animate-card-wrap
        className={cn(
          "group grid grid-cols-1 gap-4 md:gap-6",
          getGridCols(columns)
        )}
      >
        {items.map((link, index) => (
          <Card
            key={`${link.href ?? link.title ?? link.label ?? index}-${index}`}
            data-animate-card-card
          >
            <CardHeader>
              <CardTitle>{link.title ?? link.label}</CardTitle>
              <CardDescription>
                {link.description}
              </CardDescription>
            </CardHeader>
            {link.href && (
              <CardFooter>
                <Button asChild>
                  <Link href={link.href}>
                    En savoir plus
                    <ArrowRight data-icon="inline-start" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
      <SectionFooterDivider />
    </SectionShell>
  );
};

export { RelatedLinksSection };
