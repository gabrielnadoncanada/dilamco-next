import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading } from "@/components/ui/heading";

interface ComparisonTableSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description?: string;
  columns: string[];
  rows: Array<{
    label: string;
    values: string[];
  }>;
  firstColumnLabel?: string;
  className?: string;
}

const ComparisonTableSection = ({
  heading,
  description,
  columns,
  rows,
  firstColumnLabel = "Matériau",
  className,
  ...props
}: ComparisonTableSectionProps) => {
  return (
    <Section maxWidth="wide" className={className} {...props}>
      <div className="space-y-8 md:space-y-12">
        <div className="text-center">
          <Heading variant="h2" className="mb-4">
            {heading}
          </Heading>
          {description && (
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">{firstColumnLabel}</TableHead>
                {columns.map((column, index) => (
                  <TableHead key={index}>{column}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="font-medium">{row.label}</TableCell>
                  {row.values.map((value, colIndex) => (
                    <TableCell key={colIndex}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Section>
  );
};

export { ComparisonTableSection };
