type Proof = {
  value: string;
  label: string;
  rating?: boolean;
};

const proofs: readonly Proof[] = [
  { value: "5700-2318", label: "Licence RBQ" },
  { value: "4.9", label: "Avis Google", rating: true },
  { value: "200+", label: "Cuisines livrées" },
  { value: "24 h", label: "Réponse garantie" },
];

export function LandingTrustBar() {
  return (
    <section
      aria-label="Accréditations et garanties"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border/60 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {proofs.map((p) => (
          <div
            key={p.label}
            className="flex flex-col items-center justify-center gap-1 px-4 py-5 text-center md:py-6"
          >
            {p.rating ? (
              <span className="flex items-baseline gap-1.5 font-display text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
                {p.value}
                <span
                  aria-hidden
                  className="text-base leading-none text-foreground/75 sm:text-lg"
                >
                  ★
                </span>
                <span className="sr-only">sur 5</span>
              </span>
            ) : (
              <span className="font-display text-lg font-medium tracking-[-0.01em] text-foreground sm:text-xl">
                {p.value}
              </span>
            )}
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
