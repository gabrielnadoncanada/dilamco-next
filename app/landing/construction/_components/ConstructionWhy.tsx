import { CalendarCheck, Hammer, ShieldCheck, Users } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Un seul interlocuteur",
    description: "Du design à la dernière vis, une seule équipe responsable.",
  },
  {
    icon: ShieldCheck,
    title: "Licence RBQ & assuré",
    description: "Vous êtes protégé, légalement et financièrement.",
  },
  {
    icon: CalendarCheck,
    title: "Délais & budget respectés",
    description: "Engagés par écrit au contrat, pas en paroles.",
  },
  {
    icon: Hammer,
    title: "20+ ans d'exécution",
    description: "Des centaines de chantiers résidentiels livrés.",
  },
] as const;

export function ConstructionWhy() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Pourquoi les propriétaires choisissent Dilamco
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
