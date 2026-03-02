import { type ReactNode } from "react";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { DefaultHero } from "./hero/DefaultHero";
import { BoxedHero } from "./hero/BoxedHero";
import { SplitPremiumHero } from "./hero/SplitPremiumHero";

export interface HeroSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children" | "container" | "align" | "padding"> {
  heading: string | ReactNode;
  description?: string | ReactNode;
  list?: string[];
  badges?: string[];
  proofs?: Array<{ title: string; description: string }>;
  actions?: ActionButton[];
  actionsSlot?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  imagePriority?: boolean;
  className?: string;
  variant?: "default" | "boxed" | "split-premium";
}

const HeroSection = ({
  variant = "default",
  ...props
}: HeroSectionProps) => {
  if (variant === "split-premium") {
    return <SplitPremiumHero {...props} />;
  }

  if (variant === "boxed") {
    return <BoxedHero {...props} />;
  }

  return <DefaultHero {...props} />;
};

export { HeroSection };
