import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Combien coûte une rénovation ?",
    a: "Ça dépend de l'ampleur. La plupart de nos projets démarrent autour de 25 000 $. On vous remet une estimation gratuite et détaillée sous 24 h.",
  },
  {
    q: "Combien de temps dure un projet ?",
    a: "De quelques semaines pour une salle de bain à quelques mois pour une rénovation complète. On fixe l'échéancier dès le départ.",
  },
  {
    q: "Gérez-vous les permis ?",
    a: "Oui. On s'occupe des permis et de la coordination avec la municipalité quand c'est requis.",
  },
  {
    q: "Êtes-vous licenciés et assurés ?",
    a: "Oui — licence RBQ 8306-0806-27 et couverture d'assurance complète.",
  },
  {
    q: "Travaillez-vous dans mon secteur ?",
    a: "Grand Montréal, Laval, Rive-Sud et Ouest-de-l'Île. Contactez-nous pour confirmer.",
  },
  {
    q: "Offrez-vous une garantie ?",
    a: "Oui, nos travaux sont garantis. Les détails figurent au contrat.",
  },
];

export function ConstructionFaq() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-center">
          Questions fréquentes
        </h2>

        <div className="mt-12">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-border py-4">
              <summary className="flex cursor-pointer items-center justify-between font-medium list-none">
                {faq.q}
                <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180 shrink-0 ml-4" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
