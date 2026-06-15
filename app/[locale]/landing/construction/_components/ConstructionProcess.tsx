const steps = [
  {
    number: "01",
    title: "Consultation gratuite",
    description: "On évalue, on écoute, on conseille.",
  },
  {
    number: "02",
    title: "Estimation détaillée",
    description: "Un prix clair, par écrit, sous 24 h.",
  },
  {
    number: "03",
    title: "Planification & permis",
    description: "Échéancier, matériaux, coordination.",
  },
  {
    number: "04",
    title: "Exécution & livraison",
    description: "Chantier propre, livré dans les délais.",
  },
] as const;

export function ConstructionProcess() {
  return (
    <section id="processus" className="py-20 lg:py-28 bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Un processus clair, du premier appel à la livraison
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="rounded-2xl bg-background p-6 flex flex-col gap-3"
            >
              <span className="font-display text-4xl font-medium text-primary/30 leading-none">
                {number}
              </span>
              <h3 className="font-medium text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
