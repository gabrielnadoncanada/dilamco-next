import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const risks = [
  "Trop de monde sur le projet, personne responsable",
  "Délais qui s’allongent",
  "Des armoires qui ne tiennent pas dans le temps",
  "Budget qui dépasse la soumission initiale",
  "Difficile de juger la qualité avant de payer",
  "Un projet mal planifié dès le départ",
] as const;

const answers = [
  "Un seul responsable du début à la fin",
  "Un échéancier clair et respecté",
  "Caisson de qualité en contreplaqué",
  "Budget clair dès le départ",
  "Matériaux réels que vous pouvez voir",
  "Projet bien planifié avant de commencer",
] as const;

export function LandingPainSolution() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ce que la plupart des rénovations de cuisine ont en commun
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl border shadow-none">
            <CardContent className="p-8 pt-4">
              <h3 className="text-xl font-semibold">
                Les risques les plus fréquents
              </h3>
              <ul className="mt-6 space-y-4">
                {risks.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
                    <span className="leading-7 text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border shadow-none">
            <CardContent className="p-8 pt-4">
              <h3 className="text-xl font-semibold">L&apos;approche Dilamco</h3>
              <ul className="mt-6 space-y-4">
                {answers.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                    <span className="leading-7 text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
