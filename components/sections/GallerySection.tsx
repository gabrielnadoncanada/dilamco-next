import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

interface Image {
  src: string;
  alt: string;
}

interface GallerySectionProps extends React.HTMLAttributes<HTMLElement> {
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
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <Section className={className} {...props}>
      <div className="space-y-8 md:space-y-12">
        {heading && (
          <div className="text-center">
            <Heading variant="h2" className="mb-4">
              {heading}
            </Heading>
          </div>
        )}
        {images.length > 0 ? (
          <div
            className={cn(
              "grid grid-cols-1 gap-4 md:gap-6",
              gridCols[columns]
            )}
          >
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden p-0">
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
              gridCols[columns]
            )}
          >
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden p-0">
                <AspectRatio ratio={4 / 3}>
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                    <span className="text-sm">Image placeholder</span>
                  </div>
                </AspectRatio>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export { GallerySection };
