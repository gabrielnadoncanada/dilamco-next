import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { type LucideIcon } from "lucide-react";
import { Item, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { SectionFooterDivider, SectionTitle, getGridCols } from "@/components/sections/section-helpers";

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
  return (
    <SectionShell
      className={className}
      title={<SectionTitle heading={heading} className="text-balance" />}
      intro={description}
      align="center"
      {...props}
    >

      <ItemGroup
        className={cn(
          "grid grid-cols-1 gap-6 md:gap-8",
          getGridCols(columns)
        )}
      >
        {items.map((feature, index) => {
          const featureKey = feature.href ?? `${feature.title}-${index}`;
          return (
            <Item key={featureKey} variant="outline" className={cn("h-full", feature.href && "transition-all hover:shadow-lg cursor-pointer")}>
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
      <SectionFooterDivider />
    </SectionShell>
  );
};
export { FeatureGridSection };
