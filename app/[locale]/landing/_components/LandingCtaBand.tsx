import { ArrowRight, Phone } from "lucide-react";

import { Button } from "./button";
import { Reveal } from "./Reveal";

type LandingCtaBandProps = {
  title: string;
  description: string;
};

export function LandingCtaBand({ title, description }: LandingCtaBandProps) {
  return (
    <section className="relative overflow-hidden border-y bg-foreground text-background">
      {/* Subtle texture layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(255,255,255,0.6), transparent 55%), radial-gradient(circle at 80% 100%, rgba(255,255,255,0.45), transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-background/20 to-transparent"
        aria-hidden
      />

      <Reveal className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-background/55">
          Prochaine étape
        </p>

        <h2 className="max-w-3xl font-display text-3xl font-medium tracking-[-0.02em] text-balance text-background sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <p className="max-w-2xl text-base leading-7 text-background/70 sm:text-lg">
          {description}
        </p>

        <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="!bg-background px-8 text-base font-semibold !text-foreground shadow-sm transition-all hover:!bg-background/92 hover:shadow-md"
          >
            <a href="#formulaire">
              Obtenir ma soumission
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <a
            href="tel:+15148200773"
            className="group inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-background/80 transition-colors hover:text-background"
          >
            <Phone className="h-3.5 w-3.5 text-background/60 transition-colors group-hover:text-background" strokeWidth={1.6} />
            (514) 820-0773
          </a>
        </div>

        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-background/45">
          Réponse sous 24 h · Sans engagement
        </p>
      </Reveal>
    </section>
  );
}
