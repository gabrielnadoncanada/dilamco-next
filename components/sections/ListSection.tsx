import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Check, ChevronRight } from "lucide-react";
import { Heading } from "@/components/elements/heading";
import { Divider } from "../elements/divider";
interface ListSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children"> {
  heading: string;
  intro?: string;
  items: Array<ListItem | string>;
  links?: ActionButton[];
  variant?: "bullets" | "checkmarks" | "numbered";
  layout?: "default" | "split";
  className?: string;
}

interface ListItem {
  title: string;
  description: string;
}

const normalizeListItem = (item: ListItem | string): ListItem => {
  if (typeof item === "string") {
    return { title: "", description: item };
  }

  return item;
};

const ListSection = ({
  heading,
  intro,
  items,
  links,
  variant = "bullets",
  layout = "default",
  className,
  ...props
}: ListSectionProps) => {
  const IconComponent = variant === "checkmarks" ? Check : ChevronRight;
  const hasStructuredItems = items.some((item) => typeof item !== "string" && Boolean(item.title));
  const useSplitLayout =
    variant !== "numbered" && (layout === "split" || (layout === "default" && hasStructuredItems));

  return (
    <SectionShell
      className={className}
      title={<Heading variant="h2">{heading}</Heading>}
      intro={intro}
      actions={links && links.length > 0 ? <ActionButtons buttons={links} /> : undefined}
      align="center"
      {...props}
    ><Divider />
      <div
        className={cn(
          "space-y-4",
          variant === "numbered" && "list-decimal list-inside space-y-3"
        )}
      >
        {items.map((rawItem, index) => {
          const item = normalizeListItem(rawItem);
          const hasTitle = Boolean(item.title);

          if (useSplitLayout && hasTitle) {
            return (
              <div
                key={index}
                className="grid gap-6 border-t border-border/60 py-8 md:grid-cols-2 md:gap-10"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 rounded-full border border-border/80 p-1">
                    <IconComponent
                      className={cn(
                        "size-4",
                        variant === "checkmarks" ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <Heading variant="h3" className="text-pretty">
                    {item.title}
                  </Heading>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {item.description}
                </p>
              </div>
            );
          }

          return (
            <div
              key={index}
              className={cn("flex gap-3", variant === "numbered" && "list-item")}
            >
              {variant !== "numbered" && (
                <div className="mt-1.5 shrink-0 flex gap-x-2 items-center">
                  <IconComponent
                    className={cn(
                      "size-5 bg-primary/10 rounded-full p-1",
                      variant === "checkmarks" ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                  {item.title && (
                    <Heading variant="h3" className="mb-2">
                      {item.title}
                    </Heading>
                  )}
                </div>
              )}
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
};

export { ListSection };
