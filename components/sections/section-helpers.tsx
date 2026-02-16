import React from "react";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/elements/heading";
import { Divider } from "@/components/elements/divider";

type GridColumnCount = 2 | 3 | 4;

const GRID_CLASS_MAP: Record<GridColumnCount, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function getGridCols(columns: GridColumnCount) {
  return GRID_CLASS_MAP[columns];
}

export function SectionTitle({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) {
  return (
    <Heading variant="h2" className={cn(className)}>
      {heading}
    </Heading>
  );
}

export function withSectionFooterDivider(content: React.ReactNode) {
  return (
    <>
      {content}
      <Divider />
    </>
  );
}

export function SectionFooterDivider() {
  return <Divider />;
}
