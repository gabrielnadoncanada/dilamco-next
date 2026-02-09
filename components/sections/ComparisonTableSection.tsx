import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";

interface ComparisonTableSectionProps
  extends Omit<SectionShellProps, "title" | "intro" | "children"> {
  heading: string;
  description?: string;
  columns: string[];
  rows: Array<{
    label?: string;
    title?: string;
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
    <SectionShell
      className={className}
      title={<Heading variant="h2">{heading}</Heading>}
      intro={description}
      align="center"
      {...props}
    >
      <Divider />
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
                <TableCell className="font-medium">{row.label ?? row.title}</TableCell>
                {row.values.map((value, colIndex) => (
                  <TableCell key={colIndex}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </SectionShell>
  );
};

export { ComparisonTableSection };
