// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// If you already use your own helper (ex: createPageMetadata), replace this export.
export const metadata: Metadata = {
  title: "Dilamco — Cuisine et armoires sur mesure haut de gamme à Montréal",
  description:
    "Armoires et vanités sur mesure haut de gamme : fabrication contrôlée, matériaux premium et gestion clé en main à Montréal, Laval et Rive-Sud.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dilamco — Sur mesure, contrôlé, clé en main",
    description:
      "Cuisine, salle de bain, walk-in et projets commerciaux. Matériaux premium et exécution maîtrisée.",
    url: "/",
    type: "website",
  },
};

type SpaceCard = {
  title: string;
  description: string;
  href: string;
  badge?: string;
};

const spaces: SpaceCard[] = [
  {
    title: "Cuisine sur mesure",
    description: "Conception, fabrication et installation — avec coordination complète.",
    href: "/espaces/cuisine/",
    badge: "Pilier",
  },
  {
    title: "Salle de bain",
    description: "Vanités sur mesure et aménagement durable, pensé pour l’usage réel.",
    href: "/espaces/salle-de-bain/",
    badge: "Pilier",
  },
  {
    title: "Walk-in",
    description: "Rangement personnalisé, ergonomie et finition haut de gamme.",
    href: "/espaces/walk-in/",
    badge: "Pilier",
  },
  {
    title: "Commercial",
    description: "Armoires et mobilier durable pour bureaux, commerces et espaces pro.",
    href: "/espaces/commercial/",
    badge: "Pilier",
  },
];

const processSteps = [
  {
    title: "Conception",
    description: "Plans clairs, choix fonctionnels, validation avant fabrication.",
  },
  {
    title: "Sélection matériaux",
    description: "Choix guidé selon durabilité, entretien, et cohérence esthétique.",
  },
  {
    title: "Fabrication contrôlée",
    description: "Spécifications définies, qualité reproductible, contrôle à la source.",
  },
  {
    title: "Installation coordonnée",
    description: "Exécution précise, moins d’imprévus, un responsable du début à la fin.",
  },
];

const featuredProjects = [
  {
    title: "Cuisine sur mesure — Plateau-Mont-Royal",
    meta: "Montréal",
    href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
  },
  {
    title: "Cuisine sur mesure — Rive-Sud",
    meta: "Rive-Sud",
    href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
  },
  {
    title: "Aménagement bureau — Centre-ville",
    meta: "Montréal",
    href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal/",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Sur mesure</Badge>
                <Badge variant="secondary">Matériaux premium</Badge>
                <Badge variant="secondary">Clé en main</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
                Cuisine et armoires sur mesure haut de gamme à Montréal
              </h1>

              <p className="mt-5 text-base text-muted-foreground sm:text-lg">
                Fabrication contrôlée, matériaux durables et exécution maîtrisée — pour des projets
                résidentiels et commerciaux à Montréal, Laval et sur la Rive-Sud.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact/">Obtenir une soumission</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projets/">Voir nos projets</Link>
                </Button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Positionnement premium : idéal pour des projets durables et bien exécutés.
              </p>
            </div>

            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Pourquoi Dilamco</CardTitle>
                  <CardDescription>Un modèle structuré qui protège la qualité.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>
                      <span className="font-medium">Entrepôt à Montréal</span> : contrôle des inventaires et
                      réduction des imprévus.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>
                      <span className="font-medium">Approvisionnement direct</span> : spécifications définies,
                      qualité cohérente.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>
                      <span className="font-medium">Gestion clé en main</span> : un responsable du design à
                      l’installation.
                    </p>
                  </div>

                  <Separator />

                  <div className="flex flex-col gap-2">
                    <Button asChild variant="secondary">
                      <Link href="/processus/">Voir notre processus</Link>
                    </Button>
                    <Button asChild variant="ghost">
                      <Link href="/a-propos/">À propos de Dilamco</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Nos espaces</h2>
              <p className="mt-2 text-muted-foreground">
                Chaque page pilier cible une intention forte et un besoin concret.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/espaces/">Voir tous les espaces</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {spaces.map((space) => (
              <Card key={space.href} className="h-full">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-base">{space.title}</CardTitle>
                    {space.badge ? <Badge variant="outline">{space.badge}</Badge> : null}
                  </div>
                  <CardDescription>{space.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={space.href}>Découvrir</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/espaces/">Voir tous les espaces</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MATERIALS PROOF */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Qualité tangible, pas du marketing
              </h2>
              <p className="mt-3 text-muted-foreground">
                On justifie le premium par des choix techniques vérifiables — là où ça compte.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Structure des tiroirs</CardTitle>
                    <CardDescription>Bois massif de bouleau</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Robustesse, grain dense, meilleure tenue dans le temps.
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Fond des tiroirs</CardTitle>
                    <CardDescription>Contreplaqué de bouleau</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Stabilité dimensionnelle, résistance au poids, durabilité accrue.
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary">
                  <Link href="/materiaux/">Explorer les matériaux</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/materiaux/contreplaque/">Pourquoi le contreplaqué</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card>
                <CardHeader>
                  <CardTitle>Ce que ça change pour vous</CardTitle>
                  <CardDescription>Technique → bénéfices concrets.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>Moins de déformation et d’usure à long terme.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>Meilleure résistance à l’usage quotidien (poids, ouverture, humidité).</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                    <p>Un projet durable : investissement, pas solution temporaire.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Processus clé en main</h2>
              <p className="mt-2 text-muted-foreground">
                Un cadre clair pour réduire le risque, les imprévus et la friction.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/services/">Voir nos services</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/services/">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projets récents</h2>
              <p className="mt-2 text-muted-foreground">
                Des réalisations réelles, avec contexte et choix techniques.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/projets/">Tous les projets</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.href} className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <CardDescription>{project.meta}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={project.href}>Voir le projet</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/projets/">Tous les projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">FAQ</h2>
          <p className="mt-2 text-muted-foreground">
            Réponses claires aux questions qui bloquent le plus souvent la décision.
          </p>

          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="price">
                <AccordionTrigger>Quel budget prévoir pour une cuisine sur mesure ?</AccordionTrigger>
                <AccordionContent>
                  Le budget dépend des dimensions, de l’aménagement (tiroirs, accessoires, îlot), des matériaux
                  et de la coordination. Pour une approche sur mesure et clé en main, il faut s’attendre à un
                  investissement aligné avec une exécution premium et durable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vs-ikea">
                <AccordionTrigger>Quelle est la différence avec IKEA / grandes surfaces ?</AccordionTrigger>
                <AccordionContent>
                  Les solutions standardisées peuvent convenir à certains contextes. Le sur mesure vise une
                  personnalisation complète, une structure plus robuste, et une exécution mieux contrôlée —
                  particulièrement important dans une résidence principale.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="timeline">
                <AccordionTrigger>Quels sont les délais typiques ?</AccordionTrigger>
                <AccordionContent>
                  Les délais varient selon la complexité et la charge de production. Un processus structuré
                  (validation avant fabrication + coordination installation) permet une planification plus
                  prévisible et moins d’imprévus.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="turnkey">
                <AccordionTrigger>Gérez-vous la rénovation complète ?</AccordionTrigger>
                <AccordionContent>
                  Oui, lorsque requis : coordination des étapes clés et intégration avec le design, la
                  fabrication et l’installation. L’objectif est de réduire la fragmentation et d’assurer une
                  exécution cohérente.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Prêt à cadrer votre projet correctement ?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Obtenez une soumission claire et structurée, adaptée à un projet durable et maîtrisé.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild size="lg">
                  <Link href="/contact/">Obtenir une soumission</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/espaces/cuisine/">Cuisine sur mesure</Link>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground lg:text-right">
                Montréal • Laval • Rive-Sud — résidentiel & commercial
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}