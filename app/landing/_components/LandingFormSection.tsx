import { CheckCircle2, Clock, ShieldCheck, Sparkles } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { LandingLeadForm } from "./LandingLeadForm";
import { Reveal } from "./Reveal";

const benefits = [
  "Une première estimation budgétaire réaliste",
  "Une validation de la faisabilité",
  "Les prochaines étapes claires et sans pression",
] as const;

const reassurances = [
  { icon: Clock, label: "Réponse sous 24 h" },
  { icon: ShieldCheck, label: "Licence RBQ" },
  { icon: Sparkles, label: "Sans engagement" },
] as const;

export function LandingFormSection() {
  return (
    <section
      id="formulaire"
      className="border-t bg-[var(--surface-tint-bg)] py-16 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Commencez votre projet
          </p>

          <h2 className="mt-6 font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Validez votre projet avant de vous engager
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Obtenez une estimation claire et un premier cadrage de votre projet
            pour comparer sur les bons critères, éviter les compromis invisibles
            et avancer avec plus de certitude.
          </p>

          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              En soumettant votre projet, vous recevez
            </p>
            <ul className="mt-5 space-y-3.5">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground/85 sm:text-[15px]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground/60" strokeWidth={1.8} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust chips */}
          <div className="mt-10 flex flex-wrap gap-2">
            {reassurances.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  <Icon className="h-3.5 w-3.5 text-foreground/55" strokeWidth={1.6} />
                  {chip.label}
                </div>
              );
            })}
          </div>

          {/* Micro social proof */}
          <div className="mt-10 border-t border-border pt-6">
            <p className="font-display text-[15px] italic leading-[1.65] text-foreground/75">
              &ldquo;Le processus a été structuré du début à la fin. On sent
              qu&apos;il y a une vraie maîtrise du projet.&rdquo;
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Client — Laval · Cuisine sur mesure
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <Card className="rounded-3xl border bg-background shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <LandingLeadForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
