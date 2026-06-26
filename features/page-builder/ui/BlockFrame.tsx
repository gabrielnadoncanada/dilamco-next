import type { ReactNode } from "react";
import { cva } from "class-variance-authority";

import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";
import type { FrameOptions } from "../model/block-types";

const defaultFrame: Required<FrameOptions> = {
  headerAlign: "center",
  contentAlign: "center",
  container: "xl",
  surface: "default",
  divider: "none",
  paddingY: "lg",
  className: "",
  headingLevel: "h2",
  titleAs: "h2",
  titleVariant: "h3",
};

const sectionVariants = cva("", {
  variants: {
    paddingY: {
      sm: "py-[var(--section-py-compact)]",
      md: "py-[var(--section-py)]",
      lg: "py-[var(--section-py)]",
      hero: "py-[var(--section-py-spacious)]",
      none: "",
    },
    divider: {
      none: "",
      top: "border-t",
      bottom: "border-b",
      y: "border-y",
    },
  },
  defaultVariants: {
    paddingY: "lg",
    divider: "none",
  },
});

// Gutter horizontal unifié avec la boutique (référence « un seul produit »).
const containerVariants = cva(
  "mx-auto px-[clamp(20px,4vw,56px)] max-[700px]:px-[18px]",
  {
    variants: {
      container: {
        full: "max-w-none",
        // Largeur de contenu canonique du site : 1440px (alignée boutique).
        xl: "max-w-[1440px]",
        "2xl": "max-w-[1440px]",
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
      },
    },
    defaultVariants: {
      container: "xl",
    },
  },
);

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
  const headingLevel = frame.headingLevel ?? frame.titleAs;

  return (
    <section
      id={props.id}
      data-surface={frame.surface}
      className={cn(sectionVariants({
        paddingY: frame.paddingY,
        divider: frame.divider,
      }), "relative", frame.className)}
    >
      <div className={containerVariants({ container: frame.container })}>
        {hasHeading && (
          <header className={headerVariants({ headerAlign: frame.headerAlign })}>
            {props.title ? (
              <Heading
                as={headingLevel}
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
