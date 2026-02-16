import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { Heading } from "@/components/elements/heading";
import { Divider } from "../elements/divider";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";

interface Feature {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
}

interface FeatureGridSectionProps extends Omit<SectionShellProps, "title" | "intro" | "children"> {
  heading: string;
  description?: string;
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const FeatureGridSection = ({
  heading,
  description,
  items,
  columns = 3,
  className,
  ...props
}: FeatureGridSectionProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <SectionShell
      className={className}
      title={<Heading variant="h2" className="text-balance">{heading}</Heading>}
      intro={description}
      align="center"
      {...props}
    >

      <ItemGroup
        className={cn(
          "grid grid-cols-1 gap-6 md:gap-8",
          gridCols[columns]
        )}
      >
        {items.map((feature, index) => {
          return (
            <Item key={index} variant="outline" className={cn("h-full", feature.href && "transition-all hover:shadow-lg cursor-pointer")}>
              <ItemMedia variant="icon">
                {feature.icon && (
                  <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                )}
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{feature.title}</ItemTitle>
                <ItemDescription>{feature.description}</ItemDescription>
              </ItemContent>
            </Item>
          );
        })}
      </ItemGroup>
      <Divider />
    </SectionShell>
  );
};
export { FeatureGridSection };
