import { Heading } from "@/components/elements/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { ComparisonTableBasicProps } from "./schema";

export function ComparisonTableBasic(props: ComparisonTableBasicProps) {
  const [leftColumn, rightColumn] = props.columns;

  return (
    <div className="text-left">
      <div className="max-w-2xl">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        {props.intro ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {props.intro}
          </p>
        ) : null}
      </div>

      <div className="mt-10 overflow-x-auto rounded-2xl border border-border/80 bg-card">
        <Table className="min-w-[560px]">
          <TableHeader>
            <TableRow className="bg-primary-soft/60 hover:bg-primary-soft/60">
              <TableHead className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Critère
              </TableHead>
              <TableHead className="px-5 py-4 font-display text-base font-semibold tracking-[-0.01em] text-foreground">
                {leftColumn}
              </TableHead>
              <TableHead className="px-5 py-4 font-display text-base font-semibold tracking-[-0.01em] text-foreground">
                {rightColumn}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row.label} className="hover:bg-muted/40">
                <TableCell className="px-5 py-4 font-semibold text-foreground">
                  {row.label}
                </TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground">
                  {row.values[0]}
                </TableCell>
                <TableCell className="px-5 py-4 text-muted-foreground">
                  {row.values[1]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
