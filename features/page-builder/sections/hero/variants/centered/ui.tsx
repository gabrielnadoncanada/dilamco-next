import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";

import type { HeroCenteredProps } from "./schema";

export function HeroCentered(props: HeroCenteredProps) {
  return (
    <div className="mx-auto max-w-3xl py-8 text-center sm:py-12">
      <HeroContent
        actions={props.actions}
        align="center"
        badgeStyle="secondary"
        badges={props.badges}
        description={props.description}
        heading={props.heading}
      />
    </div>
  );
}
