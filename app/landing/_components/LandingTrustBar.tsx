const items = [
  "Entrepôt local à Montréal",
  "Qualité et durabilité garanties",
  "Fabrication sur mesure",
  "Soumission gratuite en 24h",
] as const;

export function LandingTrustBar() {
  return (
    <section className="border-b bg-background">
      <div className="mx-auto  max-w-7xl   px-4 py-5 sm:px-6 grid grid-cols-2 md:grid-cols-4  gap-6  lg:px-8">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center justify-center gap-2.5 text-xs md:text-sm"
          >
            <span className="text-balance font-medium text-center">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
