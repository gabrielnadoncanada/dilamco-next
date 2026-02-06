import React from "react";
import {
  SectionShell,
  type SectionAlign,
  type SectionContainer,
  type SectionPadding,
  type SectionShellProps,
  type SectionSurface,
} from "./section-shell";

interface SectionProps
  extends Omit<SectionShellProps, "surface"> {
  variant?: SectionSurface;
}

const Section = ({ variant = "default", ...props }: SectionProps) => {
  return <SectionShell surface={variant} {...props} />;
};

export { Section };
export type { SectionProps, SectionSurface, SectionPadding, SectionAlign, SectionContainer };
