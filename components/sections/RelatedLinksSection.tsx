import React from "react";
import { cn } from "@/lib/utils";
import {
  SectionShell,
  type SectionShellProps,
  type SectionSurface,
} from "@/components/elements/section-shell";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, LinkIcon } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/elements/heading";
import { Divider } from "../elements/divider";
import { Button } from "../ui/button";

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
        <Heading variant="h2" as="h2" className="text-center">
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
            <Card className="">

              <CardHeader>
                <CardTitle>{link.title}</CardTitle>
                <CardDescription>
                  {link.description}
                </CardDescription>
              </CardHeader>
              <CardFooter v-if={link.href}>
                <Button asChild>
                  <Link href={link.href || "#"}>
                    En savoir plus
                    <ArrowRight data-icon="inline-start" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
};

export { RelatedLinksSection };
