import { Heading } from "@/components/elements/heading";
import { PantryBuyButton } from "./PantryBuyButton";

export function PantryFinalCta() {
  return (
    <section
      id="inscription"
      className="border-t bg-foreground py-16 text-background md:py-28"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-7 px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/55">
          Accès prioritaire
        </p>
        <Heading
          as="h2"
          variant="h2"
          className="text-balance text-background [&_em]:text-background"
        >
          ALTO, le meuble que vous avez toujours <em>voulu</em>
        </Heading>
        <p className="max-w-2xl text-base leading-7 text-background/70">
          Prix de lancement :{" "}
          <span className="font-semibold text-background">895&nbsp;$</span>.
          Soyez avisé avant l&apos;ouverture publique.
        </p>
        <PantryBuyButton
          size="xl"
          variant="paper"
          label="Acheter — 895 $"
          className="mt-2"
        />
      </div>
    </section>
  );
}
