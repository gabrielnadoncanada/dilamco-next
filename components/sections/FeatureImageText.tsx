import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { Heading } from "../elements/heading";
import { type ActionButton, ActionButtons } from "../ActionButtons";
import { Divider } from "../elements/divider";

export interface FeatureImageTextItem {
  ariaLabelledby: string;
  heading: string;
  content: React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  links?: ActionButton[];
}

interface FeatureImageTextProps extends Omit<SectionShellProps, "content" | "title" | "intro" | "actions" | "children"> {
  items: FeatureImageTextItem[];
  className?: string;
}

const FeatureImageTextItem = ({
  heading,
  content,
  image,
  isRight,
  links,
}: {
  heading: string;
  content: React.ReactNode;
  image: {
    src: string;
    alt: string;
  };
  isRight: boolean;
  links?: ActionButton[];
}) => {
  return (
    <div
      className={cn(
        "lg:flex lg:gap-x-4",
        isRight && "flex-row-reverse"
      )}
    >
      <div className="lg:w-1/2">
        <div className="mb-6 md:mb-8 lg:mb-0">
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-4/3 w-full rounded-md border border-border object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          "lg:flex lg:w-1/2 lg:items-center",
          isRight ? "lg:pr-24 2xl:pr-32" : "lg:pl-24 2xl:pl-32"
        )}
      >
        <div>
          <Heading variant="h3" className="mb-3 md:mb-4 lg:mb-6">
            {heading}
          </Heading>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {content}
          </div>
          {links && links.length > 0 && (
            <div className="pt-4">
              <ActionButtons className="justify-start" buttons={links} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FeatureImageText = ({ items, className, ...sectionProps }: FeatureImageTextProps) => {
  return (
    <SectionShell className={cn("space-y-10 md:space-y-16", className)} {...sectionProps}>

      <div className="space-y-10 md:space-y-16">
        {items.map((item, index) => (
          <FeatureImageTextItem
            key={item.ariaLabelledby}
            heading={item.heading}
            content={item.content}
            image={item.image}
            isRight={index % 2 !== 0}
            links={item.links}
          />
        ))}
      </div>
      <Divider />
    </SectionShell>
  );
};

export { FeatureImageText };
