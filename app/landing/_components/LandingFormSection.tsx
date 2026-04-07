import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { LandingLeadForm } from "./LandingLeadForm";

const benefits = [
  "Une première estimation budgétaire réaliste",
  "Une validation de la faisabilité",
  "Les prochaines étapes claires et sans pression",
] as const;

export function LandingFormSection() {
  return (
    <section
      id="formulaire"
      className="border-t bg-[var(--surface-tint-bg)] py-12 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Commencez votre projet
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Validez votre projet avant de vous engager
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
            Obtenez une estimation claire et un premier cadrage de votre projet
            pour comparer sur les bons critères, éviter les compromis invisibles
            et avancer avec plus de certitude.
          </p>

          <div className="mt-10 space-y-4">
            <p className="text-sm font-semibold">
              En soumettant votre projet, vous recevez :
            </p>
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/60" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <Card className="rounded-3xl border bg-background shadow-lg">
          <CardContent className="p-6 sm:p-8">
            <LandingLeadForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
