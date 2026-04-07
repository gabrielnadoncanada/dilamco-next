import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quel budget prévoir pour une cuisine sur mesure ?",
    answer:
      "La majorité de nos projets se situent entre 20 000 $ et 60 000 $+, selon la complexité, les matériaux, la configuration et l'ampleur du chantier. Nous clarifions le budget réaliste dès la consultation initiale.",
  },
  {
    question: "Gérez-vous l'ensemble de la rénovation ?",
    answer:
      "Oui. Selon le projet, notre équipe coordonne l'ensemble du mandat, du design à l'installation, afin de limiter les frictions et de mieux maîtriser l'exécution.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous réalisons des projets dans tout le Grand Montréal, notamment à Montréal, Laval, Longueuil, Brossard, Boucherville, Saint-Bruno, Terrebonne, Repentigny, Vaudreuil-Dorion, et plus encore!",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer:
      "Le calendrier varie selon le projet, mais les étapes, la logique d'exécution et les délais sont clarifiés dès la phase de planification. Aucune zone grise.",
  },
  {
    question:
      "Pourquoi choisir le sur mesure plutôt qu'une solution standard ?",
    answer:
      "Une solution standard peut convenir à certains contextes. Mais un projet sur mesure bien exécuté offre une meilleure durabilité, une meilleure cohérence avec votre espace et des matériaux pensés pour le long terme.",
  },
] as const;

export function LandingFaq() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 rounded-3xl border px-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
