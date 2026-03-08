import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Layers3, ShieldCheck, Ruler, ArrowRight } from "lucide-react";

const avantages = [
  {
    title: "Résistance structurelle élevée",
    description:
      "La structure multicouche répartit les contraintes et améliore la rigidité globale du panneau.",
    icon: ShieldCheck,
  },
  {
    title: "Stabilité dimensionnelle",
    description:
      "Le contreplaqué se déforme moins lorsque l’humidité ou la température varient.",
    icon: Ruler,
  },
  {
    title: "Durabilité à long terme",
    description:
      "Il conserve ses propriétés mécaniques pendant de nombreuses années.",
    icon: CheckCircle2,
  },
];

const utilisations = [
  "Fond de tiroirs",
  "Structure interne d’armoires",
  "Vanités de salle de bain",
  "Armoires de cuisine sur mesure",
  "Rangements intégrés",
];

const comparatif = [
  {
    critere: "Composition",
    mdf: "Fibres de bois compressées",
    plywood: "Placages de bois multicouches",
  },
  {
    critere: "Résistance mécanique",
    mdf: "Moyenne",
    plywood: "Élevée",
  },
  {
    critere: "Stabilité à l'humidité",
    mdf: "Plus sensible",
    plywood: "Plus stable",
  },
  {
    critere: "Durabilité",
    mdf: "Correcte",
    plywood: "Supérieure",
  },
];

const faqs = [
  {
    question: "Le contreplaqué est-il plus solide que le MDF ?",
    answer:
      "Oui, dans la majorité des cas. Sa structure multicouche offre une meilleure résistance mécanique et une meilleure stabilité.",
  },
  {
    question: "Pourquoi utiliser du contreplaqué pour les tiroirs ?",
    answer:
      "Les tiroirs supportent du poids et subissent des mouvements répétés. Le contreplaqué réduit les risques d’affaissement ou de déformation.",
  },
  {
    question: "Le contreplaqué est-il utilisé dans les armoires haut de gamme ?",
    answer:
      "Oui. Il est souvent utilisé dans les fonds de tiroirs et certaines structures internes pour améliorer la durabilité du meuble.",
  },
];

export default function PlywoodPage() {
  return (
    <div className="container max-w-6xl py-16 space-y-16">

      {/* HERO */}
      <section className="space-y-6">
        <Badge variant="secondary">Matériaux</Badge>

        <h1 className="text-4xl font-bold tracking-tight">
          Contreplaqué de bouleau pour armoires et tiroirs
        </h1>

        <p className="text-muted-foreground text-lg max-w-3xl">
          Le contreplaqué est un matériau structurel largement utilisé dans la
          fabrication d’armoires de qualité. Grâce à sa construction
          multicouche, il offre une excellente résistance, une bonne stabilité
          et une durabilité supérieure aux panneaux composites standards.
        </p>

        <Button asChild>
          <Link href="/espaces/cuisine">
            Voir nos cuisines sur mesure
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      <Separator />

      {/* EXPLICATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Layers3 className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">
            Qu’est-ce que le contreplaqué ?
          </h2>
        </div>

        <p className="text-muted-foreground max-w-3xl">
          Le contreplaqué est un panneau constitué de plusieurs fines couches de
          bois appelées placages. Ces couches sont collées sous pression et
          orientées dans des directions différentes afin d’améliorer la
          résistance et la stabilité du matériau.
        </p>
      </section>

      {/* AVANTAGES */}
      <section className="grid md:grid-cols-3 gap-6">
        {avantages.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center gap-3">
              <item.icon className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground text-sm">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </section>

      <Separator />

      {/* UTILISATIONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Utilisations courantes dans les armoires
        </h2>

        <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
          {utilisations.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <Separator />

      {/* COMPARATIF */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Contreplaqué vs MDF
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3">Critère</th>
                <th className="text-left p-3">MDF</th>
                <th className="text-left p-3">Contreplaqué</th>
              </tr>
            </thead>

            <tbody>
              {comparatif.map((row) => (
                <tr key={row.critere} className="border-t">
                  <td className="p-3 font-medium">{row.critere}</td>
                  <td className="p-3 text-muted-foreground">{row.mdf}</td>
                  <td className="p-3 text-muted-foreground">{row.plywood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Separator />

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">
          Questions fréquentes
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}