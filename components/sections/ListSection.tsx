import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Check, ChevronRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";

interface ListSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  intro?: string;
  items: string[];
  links?: ActionButton[];
  variant?: "bullets" | "checkmarks" | "numbered";
  className?: string;
}

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
    <Section className={className} {...props}>
      <Container>
        <div className="mx-auto space-y-6">
          <Heading variant="h2" className="mb-4">
            {heading}
          </Heading>
          {intro && (
            <p className="mb-6 text-lg text-muted-foreground">{intro}</p>
          )}
          <ul
            className={cn(
              "space-y-4",
              variant === "numbered" && "list-decimal list-inside space-y-3"
            )}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={cn(
                  "flex gap-3",
                  variant === "numbered" && "list-item"
                )}
              >
                {variant !== "numbered" && (
                  <div className="mt-1.5 shrink-0">
                    <IconComponent
                      className={cn(
                        "size-5",
                        variant === "checkmarks"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </div>
                )}
                <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {variant === "numbered" ? item : item}
                </span>
              </li>
            ))}
          </ul>
          {links && links.length > 0 && (
            <div className="pt-4">
              <ActionButtons buttons={links} />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export { ListSection };
