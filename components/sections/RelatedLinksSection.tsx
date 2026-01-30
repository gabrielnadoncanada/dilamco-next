import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";

interface LinkItem {
  label: string;
  href: string;
}

interface RelatedLinksSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  links: LinkItem[];
  columns?: 2 | 3;
  className?: string;
}

const RelatedLinksSection = ({
  heading,
  links,
  columns = 3,
  className,
  ...props
}: RelatedLinksSectionProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <Section className={className} {...props}>
      <div className="space-y-8 md:space-y-12">
        <div className="text-center">
          <Heading variant="h2" className="mb-4">
            {heading}
          </Heading>
        </div>
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            gridCols[columns]
          )}
        >
          {links.map((link, index) => (
            <Card key={index} className="transition-colors hover:bg-accent">
              <Link href={link.href}>
                <CardContent className="flex items-center justify-between p-6">
                  <span className="font-medium">{link.label}</span>
                  <ArrowRight className="size-4 text-muted-foreground" />
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export { RelatedLinksSection };
