import { Check, X } from "lucide-react";

const pains = [
  "Le chantier traîne depuis des mois.",
  "La facture a doublé en cours de route.",
  "Trois sous-traitants, personne ne se parle.",
  "Du travail bâclé qu'il faut refaire.",
] as const;

const solutions = [
  "Un échéancier clair, respecté.",
  "Un budget fixé d'avance, tenu.",
  "Un seul responsable, du début à la fin.",
  "Une exécution propre, garantie.",
] as const;

export function ConstructionPainSolution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          La rénovation, sans les cauchemars habituels.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left — pains */}
          <div className="rounded-2xl bg-muted p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Ce qu'on entend trop souvent
            </h3>
            <ul className="mt-6 space-y-4">
              {pains.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <X
                    className="mt-0.5 h-5 w-5 shrink-0 text-destructive"
                    aria-hidden
                  />
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — solutions */}
          <div className="rounded-2xl bg-primary p-6 sm:p-8 text-primary-foreground">
            <h3 className="text-lg font-semibold">Avec Dilamco</h3>
            <ul className="mt-6 space-y-4">
              {solutions.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground"
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
