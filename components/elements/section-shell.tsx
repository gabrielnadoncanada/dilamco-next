import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/elements/container";
import { Heading } from "@/components/elements/heading";
import { Badge } from "../ui/badge";

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
  none: "pt-0 pb-0",
  small:
    "pt-4 pb-4",
  main: "pt-8 pb-8",
  large:
    "pt-16 pb-16",
  "page-top":
    "pt-32 pb-32",
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
  padding = "none",
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
    <>
      {hasHeader && (
        <div
          data-animate-header-wrap
          className={cn(
            "flex flex-col gap-2 px-6 pb-8 md:pb-16 lg:pb-20 xl:gap-4",
            titleAlignClassMap[align],
            headerClassName
          )}
        >
          {eyebrow && (
            <Badge variant="secondary">
              {eyebrow}
            </Badge>
          )}
          {title && (
            <div data-animate-header-heading>
              {typeof title === "string" ? <Heading variant="h2">{title}</Heading> : title}
            </div>
          )}
          {intro &&
            (typeof intro === "string" ? (
              <p data-animate-header-text className="text-foreground max-w-4xl text-base text-balance sm:text-lg">
                {intro}
              </p>
            ) : (
              <div
                data-animate-header-text
                className="text-foreground max-w-4xl text-base text-balance sm:text-lg"
              >
                {intro}
              </div>
            ))}
          {actions && (
            <div data-animate-header-cta className={cn("flex pt-2 ", actionAlignClassMap[align])}>
              {actions}
            </div>
          )}
        </div>
      )}
      {children && <div className={bodyClassName}>{children}</div>}
      {!hasHeader && actions && (
        <div className={cn("flex pt-2", actionAlignClassMap[align])}>{actions}</div>
      )}
    </>
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
