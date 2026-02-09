import React from "react";
import { cn } from "@/lib/utils";
import {
  SectionShell,
  type SectionShellProps,
  type SectionSurface,
} from "@/components/ui/section-shell";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";

interface RelatedLink {
  title?: string;
  label?: string;
  href: string;
  description?: string;
}

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
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <SectionShell
      surface={sectionVariant}
      className={cn(className)}
      title={
        <Heading variant="h1" as="h2" className="text-center">
          {heading}
        </Heading>
      }
      intro={intro}
      align="center"
      {...props}
    >
      <Divider />
      <div
        data-animate-card-wrap
        className={cn(
          "group grid grid-cols-1 gap-4 md:gap-6",
          gridCols[columns]
        )}
      >
        {items.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block"
            data-animate-card-card
          >
            <Card
              className={cn(
                "min-h-[200px] h-full rounded-xl p-[var(--_spacing---space--2rem)]",
                "flex flex-col justify-between transition-colors",
                "group-hover:bg-transparent",
                "hover:bg-card"
              )}
            >
              <CardHeader className="p-0 pr-[var(--_spacing---space--1-5rem)]">
                <Heading variant="h3" className="text-2xl">
                  {link.title ?? link.label}
                </Heading>
              </CardHeader>
              {link.description && (
                <CardContent className="p-0">
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {link.description}
                  </p>
                </CardContent>
              )}

              <CardFooter className="p-0 space-x-2">
                <LinkIcon className="size-4 rotate-100" />
                <span className="font-medium">En savoir plus</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
};

export { RelatedLinksSection };
