import { Heading } from "@/components/elements/heading";
import { Card, CardContent } from "@/components/ui/card";
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
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
        {props.intro ? (
          <p className="mt-4 text-muted-foreground">{props.intro}</p>
        ) : null}
      </div>

      <Card className="mt-10 rounded-2xl">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Critere</TableHead>
                <TableHead>{leftColumn}</TableHead>
                <TableHead>{rightColumn}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-medium">{row.label}</TableCell>
                  <TableCell>{row.values[0]}</TableCell>
                  <TableCell>{row.values[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
