import { ShieldCheck, Warehouse, Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const differentiators = [
  {
    icon: Warehouse,
    title: "Experts depuis plus de 20 ans",
    description:
      "Basé à Montréal, Dilamco a réalisé des centaines de projets résidentiels. Une expérience concrète qui permet d’éviter les erreurs et de livrer des projets solides et bien exécutés.",
  },
  {
    icon: ShieldCheck,
    title: "Matériaux de qualité",
    description:
      "Caissons en contreplaqué, l’un des matériaux les plus durables pour des armoires conçues pour durer des décennies.",
  },
  {
    icon: Wrench,
    title: "Gestion complète du projet",
    description:
      "Un seul interlocuteur du design à l'installation. Moins de friction, moins d'erreurs, un résultat cohérent avec ce qui a été convenu.",
  },
] as const;

export function LandingDifferentiators() {
  return (
    <section className="border-y bg-[var(--surface-tint-bg)] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Trois raisons concrètes de choisir Dilamco
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="group rounded-3xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-colors duration-300 group-hover:bg-foreground/[0.07]">
                    <Icon className="h-7 w-7 text-foreground/50" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
