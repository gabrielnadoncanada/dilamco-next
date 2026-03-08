import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  DoorOpen,
  HelpCircle,
  Layers3,
  Package2,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Quincaillerie d’armoires haut de gamme | Dilamco",
  description:
    "Découvrez pourquoi la quincaillerie joue un rôle central dans la durabilité, la fluidité et la qualité perçue d’une cuisine ou d’une vanité haut de gamme.",
};

const hardwareTypes = [
  {
    title: "Charnières d’armoires",
    description:
      "Permettent l’ouverture et la fermeture précises des portes, avec réglages fins et fermeture amortie.",
    icon: DoorOpen,
    points: [
      "Alignement précis des portes",
      "Réglage tridimensionnel",
      "Fermeture douce et silencieuse",
    ],
  },
  {
    title: "Coulisses de tiroirs",
    description:
      "Assurent la fluidité du mouvement, la stabilité du tiroir et l’accès complet au rangement.",
    icon: SlidersHorizontal,
    points: [
      "Extension complète",
      "Fermeture amortie (soft-close)",
      "Stabilité même sous charge",
    ],
  },
  {
    title: "Systèmes de tiroirs",
    description:
      "L’ensemble structure + mécanisme doit être cohérent pour offrir une utilisation durable.",
    icon: Package2,
    points: [
      "Supporte un usage quotidien intensif",
      "Améliore la perception de qualité",
      "Réduit l’usure prématurée",
    ],
  },
  {
    title: "Mécanismes spécialisés",
    description:
      "Solutions pour armoires hautes, systèmes sans poignées ou rangements plus techniques.",
    icon: Wrench,
    points: [
      "Ouverture plus fluide",
      "Design plus épuré",
      "Meilleure ergonomie",
    ],
  },
];

const evaluationCriteria = [
  {
    title: "Capacité de charge",
    description:
      "Une bonne quincaillerie doit supporter un poids important sans déformation ni jeu excessif.",
  },
  {
    title: "Extension complète",
    description:
      "Le tiroir s’ouvre entièrement, ce qui permet un accès plus simple et une meilleure utilisation de l’espace.",
  },
  {
    title: "Fermeture amortie",
    description:
      "Le mécanisme ralentit la fermeture et limite les chocs, le bruit et l’usure.",
  },
  {
    title: "Précision des ajustements",
    description:
      "Des réglages précis permettent de garder les portes alignées et le mobilier stable dans le temps.",
  },
];

const clientBenefits = [
  "Tiroirs plus solides et plus stables",
  "Ouverture et fermeture plus fluides",
  "Réduction du bruit au quotidien",
  "Moins de chocs mécaniques",
  "Moins de réparations à long terme",
  "Meilleure durabilité globale du mobilier",
];

const faqItems = [
  {
    question:
      "Quelle est la différence entre une coulisse standard et une coulisse à extension complète ?",
    answer:
      "Une coulisse standard n’ouvre pas complètement le tiroir. Une coulisse à extension complète donne accès à toute la profondeur du tiroir, ce qui améliore l’usage quotidien et l’organisation.",
  },
  {
    question: "Pourquoi la fermeture amortie est-elle importante ?",
    answer:
      "Elle réduit les chocs lors de la fermeture, améliore le confort d’utilisation, diminue le bruit et contribue à prolonger la durée de vie du mécanisme.",
  },
  {
    question: "La quincaillerie influence-t-elle réellement la durabilité d’une cuisine ?",
    answer:
      "Oui. Les portes et tiroirs sont utilisés très fréquemment. Une quincaillerie robuste et bien conçue permet de conserver la stabilité, l’alignement et la fluidité pendant de nombreuses années.",
  },
  {
    question: "La quincaillerie haut de gamme change-t-elle seulement le confort ou aussi la qualité globale ?",
    answer:
      "Les deux. Elle améliore le confort au quotidien, mais elle participe aussi à la qualité perçue, à la résistance à l’usure et à la cohérence d’un mobilier conçu pour durer.",
  },
];

export default function HardwarePage() {
  return (
    <main className="bg-background">
      <section className="border-b">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="mb-4">
              Matériaux & qualité
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Quincaillerie d’armoires : un élément clé de la durabilité d’une
              cuisine
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              La qualité d’une cuisine ou d’une vanité ne dépend pas seulement
              des matériaux visibles. Les mécanismes qui permettent d’ouvrir,
              fermer et supporter les portes et les tiroirs jouent un rôle
              central dans la durabilité, la fluidité et le confort
              d’utilisation.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/espaces/cuisine">
                  Découvrir nos cuisines sur mesure
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/services/renovation">
                  Voir notre approche clé en main
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Pourquoi la quincaillerie est-elle si importante ?
              </CardTitle>
              <CardDescription>
                Dans une cuisine, les portes et tiroirs sont sollicités des
                milliers de fois par année.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                La quincaillerie regroupe l’ensemble des mécanismes qui rendent
                les armoires fonctionnelles : charnières, coulisses, systèmes
                d’ouverture et mécanismes de fermeture.
              </p>
              <p>
                Ces composants influencent directement la stabilité des portes,
                la fluidité des tiroirs, le niveau de bruit, la résistance à
                l’usure et la qualité perçue du mobilier dans le temps.
              </p>
              <p>
                Dans un projet durable, la quincaillerie ne doit pas être pensée
                comme un détail. Elle fait partie intégrante de la qualité
                globale.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Ce qu’une bonne quincaillerie apporte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {clientBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Les différents types de quincaillerie utilisés dans les armoires
            </h2>
            <p className="mt-4 text-muted-foreground">
              Une cuisine haut de gamme repose sur plusieurs mécanismes, chacun
              ayant un impact concret sur la durabilité et l’expérience
              d’utilisation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {hardwareTypes.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="rounded-2xl">
                  <CardHeader>
                    <div className="mb-3 flex size-11 items-center justify-center rounded-xl border bg-background">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Comment reconnaître une quincaillerie de qualité
              </CardTitle>
              <CardDescription>
                Plusieurs critères permettent d’évaluer la robustesse et la
                pertinence d’un mécanisme.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {evaluationCriteria.map((criterion, index) => (
                <div key={criterion.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{criterion.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {criterion.description}
                      </p>
                    </div>
                  </div>

                  {index < evaluationCriteria.length - 1 ? (
                    <Separator className="my-4" />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Application concrète dans un tiroir durable
              </CardTitle>
              <CardDescription>
                La structure du tiroir et la quincaillerie doivent fonctionner
                ensemble.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                La performance d’un tiroir dépend à la fois de sa construction
                et de la qualité de ses mécanismes.
              </p>

              <div className="rounded-2xl border bg-muted/50 p-5">
                <h3 className="font-semibold text-foreground">
                  Exemple de structure durable
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Structure en bois massif de bouleau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>Fond en contreplaqué de bouleau</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>
                      Coulisses robustes avec extension complète et fermeture
                      amortie
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Cette combinaison améliore la stabilité, la résistance au poids
                et la fluidité du tiroir, tout en réduisant l’usure à long
                terme.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Quincaillerie standard vs quincaillerie haut de gamme
            </h2>
            <p className="mt-4 text-muted-foreground">
              Les différences deviennent rapidement visibles dans un usage
              quotidien.
            </p>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Critère</TableHead>
                    <TableHead>Quincaillerie standard</TableHead>
                    <TableHead>Quincaillerie haut de gamme</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Extension du tiroir
                    </TableCell>
                    <TableCell>Partielle</TableCell>
                    <TableCell>Extension complète</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Fermeture</TableCell>
                    <TableCell>Sans amortisseur</TableCell>
                    <TableCell>Douce et amortie</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Capacité de charge
                    </TableCell>
                    <TableCell>Plus faible</TableCell>
                    <TableCell>Élevée</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Durabilité</TableCell>
                    <TableCell>Moyenne</TableCell>
                    <TableCell>Conçue pour durer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Confort</TableCell>
                    <TableCell>Fonctionnel</TableCell>
                    <TableCell>Fluide et silencieux</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Pourquoi c’est essentiel dans une cuisine haut de gamme
              </CardTitle>
              <CardDescription>
                La qualité se perçoit aussi dans chaque ouverture et chaque
                fermeture.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Dans une cuisine haut de gamme, la qualité ne dépend pas
                uniquement des matériaux visibles. Les mécanismes jouent un rôle
                direct dans la fluidité des mouvements, le silence d’utilisation
                et la sensation de solidité.
              </p>
              <p>
                Une quincaillerie robuste aide à maintenir l’alignement des
                portes, la stabilité des tiroirs et une expérience cohérente
                pendant des années.
              </p>
              <p>
                C’est un détail technique, mais avec un impact réel sur la
                durabilité du mobilier au quotidien.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <div className="mb-3 flex size-11 items-center justify-center rounded-xl border bg-background">
                <HelpCircle className="size-5" />
              </div>
              <CardTitle className="text-2xl">FAQ</CardTitle>
              <CardDescription>
                Réponses aux questions fréquentes sur la quincaillerie
                d’armoires.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
              <Layers3 className="size-4" />
              Aller plus loin
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Explorez les autres éléments qui influencent la durabilité d’un
              projet sur mesure
            </h2>

            <p className="mt-4 text-muted-foreground">
              La quincaillerie est un maillon important, mais elle s’intègre
              toujours à une logique plus large de conception, de structure et
              de matériaux.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <Link href="/materiaux/bois-massif" className="block">
                <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Bois massif</CardTitle>
                    <CardDescription>
                      Comprendre son rôle dans la solidité des armoires.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/materiaux/contreplaque" className="block">
                <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Contreplaqué</CardTitle>
                    <CardDescription>
                      Pourquoi il améliore la stabilité et la durabilité.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/espaces/cuisine" className="block">
                <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Cuisine sur mesure</CardTitle>
                    <CardDescription>
                      Voir comment ces choix s’intègrent dans un projet complet.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/espaces/salle-de-bain" className="block">
                <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Vanité salle de bain
                    </CardTitle>
                    <CardDescription>
                      Explorer les mêmes principes appliqués à la salle de bain.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">
                  Obtenir une soumission
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}