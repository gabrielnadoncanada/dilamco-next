import { type ReactNode } from "react";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { DefaultHero } from "./hero/DefaultHero";
import { BoxedHero } from "./hero/BoxedHero";

export interface HeroSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children" | "container" | "align" | "padding"> {
  heading: string | ReactNode;
  description?: string | ReactNode;
  actions?: ActionButton[];
  actionsSlot?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
  variant?: "default" | "boxed";
}

const HeroSection = ({
  variant = "default",
  ...props
}: HeroSectionProps) => {
  if (variant === "boxed") {
    return <BoxedHero {...props} />;
  }

  return <DefaultHero {...props} />;
};

export { HeroSection };
