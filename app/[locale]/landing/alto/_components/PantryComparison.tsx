import { Heading } from "@/components/elements/heading";

const rows = [
  {
    label: "Survit aux déménagements",
    dilamco: "Oui",
    ordinaire: "Rarement",
  },
  {
    label: "Se remonte aussi solide qu'au premier jour",
    dilamco: "Oui",
    ordinaire: "Non",
  },
  {
    label: "Monté en quelques minutes, sans frustration",
    dilamco: "Oui",
    ordinaire: "Variable",
  },
  {
    label: "Fini noyer élégant, digne d'un salon",
    dilamco: "Oui",
    ordinaire: "Variable",
  },
  {
    label: "Vis apparentes dans le caisson",
    dilamco: "Aucune",
    ordinaire: "Souvent",
  },
] as const;

export function PantryComparison() {
  return (
    <section className="border-y bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              § 05 · La différence Dilamco
            </p>
            <Heading as="h2" variant="h2" className="text-balance">
              Un meuble conçu autour de sa <em>deuxième</em> installation.
            </Heading>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-foreground md:mb-1 md:justify-self-end">
            La première installation est facile. La vraie différence apparaît
            lorsque vous devez le démonter, le transporter et le remonter
            ailleurs.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background">
          <div
            role="table"
            aria-label="Comparaison entre le garde-manger Dilamco et un meuble ordinaire"
          >
            <div
              role="row"
              className="grid grid-cols-[1.25fr_0.9fr_0.9fr] border-b border-border text-sm font-semibold"
            >
              <div role="columnheader" className="px-4 py-4 sm:px-6">
                Critère
              </div>
              <div
                role="columnheader"
                className="border-l border-border bg-foreground px-4 py-4 text-background sm:px-6"
              >
                Dilamco
              </div>
              <div
                role="columnheader"
                className="border-l border-border px-4 py-4 text-muted-foreground sm:px-6"
              >
                Meuble ordinaire
              </div>
            </div>
            {rows.map((row) => (
              <div
                key={row.label}
                role="row"
                className="grid grid-cols-[1.25fr_0.9fr_0.9fr] border-b border-border text-sm last:border-b-0"
              >
                <div role="cell" className="px-4 py-4 text-foreground/85 sm:px-6">
                  {row.label}
                </div>
                <div
                  role="cell"
                  className="border-l border-border px-4 py-4 font-semibold text-primary sm:px-6"
                >
                  {row.dilamco}
                </div>
                <div
                  role="cell"
                  className="border-l border-border px-4 py-4 text-muted-foreground sm:px-6"
                >
                  {row.ordinaire}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
