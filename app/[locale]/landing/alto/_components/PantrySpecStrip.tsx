const specs = [
  { value: "5", label: "tablettes en bois" },
  { value: "24 po", label: "largeur compacte" },
  { value: "72 po", label: "hauteur utile" },
  { value: "895 $", label: "prix de lancement" },
] as const;

export function PantrySpecStrip() {
  return (
    <div
      className="border-y border-border bg-background"
      aria-label="Caractéristiques principales"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className={`px-2 py-7 sm:px-6 ${
              index > 0 ? "border-l border-border" : ""
            } ${index === 2 ? "max-md:border-l-0" : ""} ${
              index < 2 ? "max-md:border-b max-md:border-border" : ""
            }`}
          >
            <p className="font-display text-2xl font-medium tracking-[-0.01em] text-foreground sm:text-3xl">
              {spec.value}
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {spec.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
