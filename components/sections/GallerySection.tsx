import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { SectionTitle, getGridCols } from "@/components/sections/section-helpers";

interface Image {
  src: string;
  alt: string;
}

interface GallerySectionProps extends Omit<SectionShellProps, "title" | "children"> {
  heading?: string;
  images?: Image[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const GallerySection = ({
  heading,
  images = [],
  columns = 3,
  className,
  ...props
}: GallerySectionProps) => {
  return (
    <SectionShell
      className={className}
      title={heading ? <SectionTitle heading={heading} /> : undefined}
      align="center"
      {...props}
    >
      {images.length > 0 ? (
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            getGridCols(columns)
          )}
        >
          {images.map((image, index) => (
            <Card key={`${image.src}-${index}`} className="overflow-hidden p-0">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </Card>
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "grid grid-cols-1 gap-4 md:gap-6",
            getGridCols(columns)
          )}
        >
          {[1, 2, 3].map((i) => (
            <Card key={`placeholder-${i}`} className="overflow-hidden p-0">
              <AspectRatio ratio={4 / 3}>
                <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                  <span className="text-sm">Image placeholder</span>
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
      )}
    </SectionShell>
  );
};

export { GallerySection };
