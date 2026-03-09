import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";

import type { HeroCenteredProps } from "./schema";

export function HeroCentered(props: HeroCenteredProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <HeroContent
        actions={props.actions}
        align="center"
        badgeStyle="outline"
        badges={props.badges}
        description={props.description}
        heading={props.heading}
      />
    </div>
  );
}
