// app/espaces/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { createPageMetadata } from "@/lib/metadata";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = createPageMetadata({
  title: "Espaces sur mesure haut de gamme",
  description:
    "Cuisine, salle de bain, salle de lavage, walk-in et aménagement commercial : conception, fabrication contrôlée et installation précise, avec gestion clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/",
  ogAlt: "Espaces sur mesure Dilamco — haut de gamme, durable, bien exécuté",
});

type SpaceCard = {
  title: string;
  href: string;
  description: string;
  badges: string[];
  image: { src: string; alt: string };
};

type FeaturedProject = {
  title: string;
  href: string;
  location: string;
  description: string;
  image: { src: string; alt: string };
};

const spaces: SpaceCard[] = [
  {
    title: "Cuisine",
    href: "/espaces/cuisine",
    description:
      "Armoires sur mesure, ergonomie, durabilité et coordination complète pour un résultat maîtrisé.",
    badges: ["Sur mesure", "Clé en main", "Haut de gamme"],
    image: { src: "/images/spaces/cuisine.jpg", alt: "Cuisine sur mesure haut de gamme" },
  },
  {
    title: "Salle de bain",
    href: "/espaces/salle-de-bain",
    description:
      "Vanités sur mesure, rangement optimisé et finitions résistantes à l’humidité pour durer.",
    badges: ["Vanités", "Durable", "Finitions"],
    image: { src: "/images/spaces/salle-de-bain.jpg", alt: "Vanité et salle de bain sur mesure" },
  },
  {
    title: "Salle de lavage",
    href: "/espaces/salle-de-lavage",
    description:
      "Solutions de rangement et d’organisation pensées pour le quotidien, sans compromis sur la solidité.",
    badges: ["Rangement", "Fonctionnel", "Sur mesure"],
    image: { src: "/images/spaces/salle-de-lavage.jpg", alt: "Salle de lavage sur mesure" },
  },
  {
    title: "Walk-in",
    href: "/espaces/walk-in",
    description:
      "Organisation personnalisée : tiroirs, penderies, accessoires et configuration adaptée à vos besoins.",
    badges: ["Organisation", "Personnalisé", "Premium"],
    image: { src: "/images/spaces/walk-in.jpg", alt: "Walk-in sur mesure" },
  },
  {
    title: "Commercial",
    href: "/espaces/commercial",
    description:
      "Aménagement durable et reproductible : bureaux, espaces clients, rangements et mobilier sur mesure.",
    badges: ["Commercial", "Durable", "Exécution maîtrisée"],
    image: { src: "/images/spaces/commercial.jpg", alt: "Aménagement commercial sur mesure" },
  },
];

const featuredProjects: FeaturedProject[] = [
  {
    title: "Cuisine sur mesure à Montréal",
    href: "/projets/cuisine/cuisine-sur-mesure-montreal",
    location: "Montréal",
    description: "Conception, fabrication contrôlée et installation précise avec finitions soignées.",
    image: { src: "/images/projects/featured-cuisine.jpg", alt: "Projet cuisine sur mesure Montréal" },
  },
  {
    title: "Vanité sur mesure à Laval",
    href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
    location: "Laval",
    description: "Rangement optimisé, matériaux durables et exécution nette adaptée à la salle de bain.",
    image: { src: "/images/projects/featured-vanite.jpg", alt: "Projet vanité sur mesure Laval" },
  },
  {
    title: "Aménagement sur mesure — bureau au centre-ville",
    href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
    location: "Montréal (centre-ville)",
    description: "Mobilier robuste, lignes épurées et installation planifiée pour minimiser les interruptions.",
    image: { src: "/images/projects/featured-commercial.jpg", alt: "Projet commercial sur mesure Montréal" },
  },
];

export default function SpacesIndexPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-sm text-muted-foreground">Dilamco — Espaces</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Espaces sur mesure haut de gamme à Montréal
              </h1>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Cuisine, salle de bain, salle de lavage, walk-in et commercial — conçus, fabriqués et installés avec
                une gestion clé en main et des standards de qualité constants.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Obtenir une soumission</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projets">Voir nos projets</Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="secondary">Fabrication contrôlée</Badge>
                <Badge variant="secondary">Matériaux durables</Badge>
                <Badge variant="secondary">Installation précise</Badge>
                <Badge variant="secondary">Coordination complète</Badge>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-xl border bg-muted/30">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/spaces/hero-espaces.jpg"
                    alt="Espaces sur mesure Dilamco"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Photos réelles recommandées pour soutenir la crédibilité (à remplacer par vos visuels).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO: what "Espaces" means */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Des espaces conçus pour durer — pas des modules standard
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-muted-foreground">
                Chaque espace Dilamco suit la même logique : design adapté à votre réalité, fabrication contrôlée,
                matériaux premium et exécution structurée. L’objectif est simple : un résultat durable, cohérent et
                maîtrisé, avec un seul responsable du début à la fin.
              </p>

              <Separator className="my-6" />

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">Qualité tangible</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Détails de construction, quincaillerie, finitions et durabilité vérifiables.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">Gestion clé en main</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Moins d’intervenants, moins d’imprévus, une coordination claire.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID: spaces */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Choisissez votre espace</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Accédez à la page pilier correspondante pour découvrir l’approche, les matériaux, des réalisations et
                une FAQ adaptée.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space) => (
              <Card key={space.href} className="overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image src={space.image.src} alt={space.image.alt} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-3">
                    <span>{space.title}</span>
                    <Button asChild variant="ghost" size="sm" className="shrink-0">
                      <Link href={space.href}>Voir</Link>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{space.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {space.badges.map((badge) => (
                      <Badge key={`${space.href}-${badge}`} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={space.href}>Découvrir {space.title.toLowerCase()}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON APPROACH */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Notre standard, peu importe l’espace</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Une méthode reproductible pour protéger la qualité, réduire les imprévus et livrer un résultat cohérent.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">1) Conception</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Plans clairs, configuration adaptée et validations avant fabrication.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">2) Matériaux</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Choix durables et détails de construction pensés pour la longévité.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">3) Fabrication contrôlée</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Standards stables, contrôle qualité et cohérence d’un projet à l’autre.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm font-medium">4) Installation</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Ajustements précis, finitions nettes et coordination structurée sur chantier.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="outline">
                  <Link href="/services">Voir nos services</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/materiaux">Comprendre nos matériaux</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Projets en vedette</h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Des réalisations réelles pour projeter le résultat et réduire le risque perçu.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/projets">Voir tous les projets</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.href} className="overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-muted">
                  <Image src={project.image.src} alt={project.image.alt} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.href}>Voir le projet</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Button asChild variant="outline" className="w-full">
              <Link href="/projets">Voir tous les projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="rounded-xl border bg-muted/20 p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Prêt à planifier votre espace sur mesure ?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Décrivez votre projet, votre ville et votre échéancier. Nous vous répondons avec une prochaine étape
                  claire.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <Button asChild size="lg">
                    <Link href="/contact">Obtenir une soumission</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/processus">Voir le processus</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Note: remplace les images “/images/…” par tes assets réels (ou garde des placeholders tant que la banque
            photo n’est pas finalisée).
          </p>
        </div>
      </section>
    </main>
  );
}