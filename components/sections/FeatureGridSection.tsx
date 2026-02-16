import { cn } from "@/lib/utils";

import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { Badge } from "@/components/ui/badge";

interface Feature {
  id?: string;
  title: string;
  description: string;
  image?: string;
  href?: string;
}

interface FeatureGridSectionProps
  extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children"> {
  heading: string;
  description?: string;
  eyebrow?: string;
  items: Feature[];
  links?: ActionButton[];
  className?: string;
}

const fallbackImages = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
];

const FeatureGridSection = ({
  heading,
  description,
  eyebrow,
  items,
  links,
  className,
  ...props
}: FeatureGridSectionProps) => {
  return (
    <SectionShell
      title={heading}
      intro={description}
      eyebrow={eyebrow}
      actions={links && links.length > 0 ? <ActionButtons buttons={links} /> : undefined}

      align="center"
      className={cn("relative overflow-hidden bg-accent ", className)}
      headerClassName="relative  flex flex-col items-center text-center"
      bodyClassName=" grid gap-6 md:grid-cols-3 md:gap-8"
      {...props}
    >

      {items.map((item, index) => (
        <a
          key={item.id ?? item.href ?? item.title}
          href={item.href ?? "#"}
          className={cn(
            "relative flex flex-col items-center rounded-xl border bg-background/70 px-6 py-10 text-center backdrop-blur-sm lg:px-8 lg:py-12",
            index === 1 && "md:translate-y-4",
          )}
        >
          <div className="mb-6 flex aspect-square w-16 items-center justify-center md:w-20 lg:mb-8">
            <img
              src={item.image ?? fallbackImages[index % fallbackImages.length]}
              alt={item.title}
              className="h-full w-full object-contain object-center"
            />
          </div>
          <h3 className="mb-3 text-lg font-semibold md:text-xl">{item.title}</h3>
          <p className="mb-auto text-sm text-muted-foreground">{item.description}</p>
        </a>
      ))}
    </SectionShell>
  );
};

export { FeatureGridSection };
