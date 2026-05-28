import { ShieldCheck, Umbrella, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Guarantee {
  icon: LucideIcon;
  title: string;
  description: string;
}

const guarantees: Guarantee[] = [
  {
    icon: ShieldCheck,
    title: "RBQ 8306-0806-27",
    description: "Licence valide et vérifiable auprès de la Régie.",
  },
  {
    icon: Umbrella,
    title: "Entièrement assuré",
    description: "Responsabilité civile et chantier couverts.",
  },
  {
    icon: FileCheck,
    title: "Engagement écrit",
    description: "Délais et budget fixés au contrat.",
  },
];

export function ConstructionGuarantees() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-center">
          Vous êtes protégé, à chaque étape
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {guarantees.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="border border-border rounded-2xl p-6 bg-card"
              >
                <Icon className="h-8 w-8 text-primary" />
                <p className="font-medium mt-4">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials can be added here later */}
      </div>
    </section>
  );
}
