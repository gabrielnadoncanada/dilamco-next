import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Check, ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";
interface ListSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children"> {
  heading: string;
  intro?: string;
  items: Array<ListItem | string>;
  links?: ActionButton[];
  variant?: "bullets" | "checkmarks" | "numbered";
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
  className,
  ...props
}: ListSectionProps) => {
  const IconComponent = variant === "checkmarks" ? Check : ChevronRight;

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
