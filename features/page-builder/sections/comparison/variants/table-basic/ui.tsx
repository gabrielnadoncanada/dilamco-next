import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";
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
      <SectionHeader heading={props.heading} intro={props.intro} />

      <div className={`${sectionBodyClassName} relative`}>
        {/* Indice de défilement horizontal sur petit écran. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-px right-px z-10 w-12 rounded-r-card bg-gradient-to-l from-card to-transparent sm:hidden"
        />
        <div className="overflow-x-auto rounded-card border border-border/80 bg-card">
        <Table className="min-w-[560px]">
          <TableHeader>
            <TableRow className="bg-primary-soft/60 hover:bg-primary-soft/60">
              <TableHead className="text-label px-5 py-4 text-muted-foreground">
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
    </div>
  );
}
