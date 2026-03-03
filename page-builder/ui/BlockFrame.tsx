import type { ReactNode } from "react";
import { cva } from "class-variance-authority";

import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";
import type { FrameOptions } from "../model/block-types";

const defaultFrame: Required<FrameOptions> = {
  headerAlign: "center",
  contentAlign: "center",
  container: "2xl",
  surface: "default",
  paddingY: "lg",
  titleAs: "h2",
  titleVariant: "h3",
};

const sectionVariants = cva("", {
  variants: {
    paddingY: {
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
    },
    surface: {
      default: "bg-transparent",
      muted: "bg-muted/40",
    },
  },
  defaultVariants: {
    paddingY: "lg",
    surface: "default",
  },
});

const containerVariants = cva("mx-auto", {
  variants: {
    container: {
      full: "max-w-none px-4",
      xl: "max-w-screen-xl px-4",
      "2xl": "max-w-screen-2xl px-4",
    },
  },
  defaultVariants: {
    container: "2xl",
  },
});

const headerVariants = cva("", {
  variants: {
    headerAlign: {
      left: "text-left",
      center: "text-center",
    },
  },
  defaultVariants: {
    headerAlign: "center",
  },
});

const contentVariants = cva("", {
  variants: {
    contentAlign: {
      left: "text-left",
      center: "text-center",
    },
    hasHeading: {
      true: "mt-10",
      false: "",
    },
  },
  defaultVariants: {
    contentAlign: "center",
    hasHeading: false,
  },
});

export function BlockFrame(props: {
  id?: string;
  title?: string;
  intro?: string;
  frame?: FrameOptions;
  children: ReactNode;
}) {
  const frame = { ...defaultFrame, ...(props.frame ?? {}) };
  const hasHeading = Boolean(props.title || props.intro);
  const hasCustomTitleVariant = props.frame?.titleVariant !== undefined;

  return (
    <section
      id={props.id}
      className={sectionVariants({
        paddingY: frame.paddingY,
        surface: frame.surface,
      })}
    >
      <div className={containerVariants({ container: frame.container })}>
        {hasHeading && (
          <header className={headerVariants({ headerAlign: frame.headerAlign })}>
            {props.title ? (
              <Heading
                as={frame.titleAs}
                variant={frame.titleVariant}
                className={cn("font-semibold", !hasCustomTitleVariant && "sm:text-3xl")}
              >
                {props.title}
              </Heading>
            ) : null}
            {props.intro ? (
              <p className="mt-3 text-base leading-relaxed opacity-80 sm:text-lg">
                {props.intro}
              </p>
            ) : null}
          </header>
        )}

        <div
          className={cn(
            contentVariants({
              contentAlign: frame.contentAlign,
              hasHeading,
            }),
          )}
        >
          {props.children}
        </div>
      </div>
    </section>
  );
}
