import Image from "next/image";

import { Heading } from "@/components/elements/heading";

const dimensions = [
  { value: "24 po", label: "Largeur" },
  { value: "16 po", label: "Profondeur" },
  { value: "72 po", label: "Hauteur" },
  { value: "5", label: "Tablettes" },
] as const;

export function PantryDimensions() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-background p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:p-16">
          <div className="relative overflow-hidden rounded-xl bg-[var(--surface-tint-bg)]">
            <Image
              src="/images/landing/garde-manger/closed.webp"
              alt="Dimensions du garde-manger Dilamco : 24 pouces de largeur, 16 de profondeur, 72 de hauteur"
              width={1122}
              height={1402}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background shadow-md">
              72 po · 1830 mm
            </span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-background shadow-md">
              24 po · 610 mm
            </span>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              § 06 · Dimensions
            </p>
            <Heading as="h2" variant="h2" className="text-balance">
              Beaucoup de rangement, sans bloquer la <em>pièce</em>.
            </Heading>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Assez étroit pour un condo, assez beau pour rester en vue.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {dimensions.map((dim) => (
                <div
                  key={dim.label}
                  className="rounded-xl border border-border p-5"
                >
                  <p className="font-display text-2xl font-medium tracking-[-0.01em] text-foreground">
                    {dim.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {dim.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
