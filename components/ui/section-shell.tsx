import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/elements/container";
import { Heading } from "@/components/ui/heading";

export type SectionSurface = "default" | "muted";
export type SectionPadding = "none" | "small" | "main" | "large" | "page-top";
export type SectionAlign = "left" | "center";
export type SectionContainer = boolean | "default" | "narrow" | "wide" | "full";

export interface SectionShellProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  surface?: SectionSurface;
  padding?: SectionPadding;
  container?: SectionContainer;
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  actions?: React.ReactNode;
  align?: SectionAlign;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
}

const containerClassMap: Record<Exclude<SectionContainer, boolean>, string> = {
  default: "",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
  full: "",
};

const paddingClassMap: Record<SectionPadding, string> = {
  none: "pt-[var(--_spacing---section-space--none)] pb-[var(--_spacing---section-space--none)]",
  small:
    "pt-[var(--_spacing---section-space--small)] pb-[var(--_spacing---section-space--small)]",
  main: "pt-[var(--_spacing---section-space--main)] pb-[var(--_spacing---section-space--large)]",
  large:
    "pt-[var(--_spacing---section-space--large)] pb-[var(--_spacing---section-space--large)]",
  "page-top":
    "pt-[var(--_spacing---section-space--page-top)] pb-[var(--_spacing---section-space--large)]",
};

const titleAlignClassMap: Record<SectionAlign, string> = {
  left: "text-left items-start",
  center: "text-center items-center",
};

const actionAlignClassMap: Record<SectionAlign, string> = {
  left: "justify-start",
  center: "justify-center",
};

const SectionShell = ({
  className,
  surface = "default",
  padding = "main",
  container = "default",
  eyebrow,
  title,
  intro,
  actions,
  align = "left",
  contentClassName,
  headerClassName,
  bodyClassName,
  children,
  ...props
}: SectionShellProps) => {
  const hasHeader = Boolean(eyebrow || title || intro || actions);
  const useContainer = container !== false && container !== "full";
  const resolvedContainer =
    container === true || container === false ? "default" : container;

  const shellContent = (
    <div className={cn("w-full", contentClassName)}>
      {hasHeader && (
        <div
          className={cn(
            "mb-8 flex flex-col gap-4 md:mb-10",
            titleAlignClassMap[align],
            headerClassName
          )}
        >
          {eyebrow && (
            <div className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {eyebrow}
            </div>
          )}
          {title &&
            (typeof title === "string" ? (
              <Heading variant="h2">{title}</Heading>
            ) : (
              title
            ))}
          {intro &&
            (typeof intro === "string" ? (
              <p className="max-w-3xl text-lg text-muted-foreground">{intro}</p>
            ) : (
              <div className="max-w-3xl text-lg text-muted-foreground">{intro}</div>
            ))}
          {actions && (
            <div className={cn("flex", actionAlignClassMap[align])}>{actions}</div>
          )}
        </div>
      )}
      {children && <div className={bodyClassName}>{children}</div>}
    </div>
  );

  return (
    <section
      data-surface={surface}
      className={cn(
        "relative w-full bg-background text-foreground",
        paddingClassMap[padding],
        className
      )}
      {...props}
    >
      {useContainer ? (
        <Container className={containerClassMap[resolvedContainer]}>{shellContent}</Container>
      ) : (
        shellContent
      )}
    </section>
  );
};

export { SectionShell };
