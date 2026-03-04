"use client";

import ImageComponent, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type AppImageProps = Omit<ImageProps, "src" | "alt" | "onError"> & {
  src?: ImageProps["src"] | null;
  alt: string;
  fallbackSrc?: ImageProps["src"];
};

export default function Image({
  src,
  alt,
  fallbackSrc = "/images/placeholder.webp",
  ...rest
}: AppImageProps) {
  const initial = (src ?? fallbackSrc) as ImageProps["src"];
  const [currentSrc, setCurrentSrc] = useState<ImageProps["src"]>(initial);

  // If parent changes src later, sync it
  useEffect(() => {
    setCurrentSrc((src ?? fallbackSrc) as ImageProps["src"]);
  }, [src, fallbackSrc]);

  return (
    <ImageComponent
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        // Avoid infinite loop if fallback also fails
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}