import type { Metadata } from "next";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ListSection } from "@/components/sections/ListSection";
import { SliderSection, type SliderItem } from "@/components/sections/SliderSection";
import { Section } from "@/components/Section";
import { ActionButtons } from "@/components/ActionButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Contact & soumission",
  description:
    "Contactez Dilamco pour une soumission : cuisine, salle de bain, walk-in, salle de lavage ou commercial. Sur mesure haut de gamme et option clé en main à Montréal, Laval et sur la Rive-Sud.",
  alternates: {
    canonical: "https://dilamco.com/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://dilamco.com/contact/",
    title: "Contact & soumission | Dilamco",
    description:
      "Contactez Dilamco pour une soumission : cuisine, salle de bain, walk-in, salle de lavage ou commercial. Sur mesure haut de gamme et option clé en main à Montréal, Laval et sur la Rive-Sud.",
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact Dilamco — Sur mesure haut de gamme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & soumission | Dilamco",
    description:
      "Contactez Dilamco pour une soumission : cuisine, salle de bain, walk-in, salle de lavage ou commercial.",
    images: ["/opengraph-image"],
  },
};

export default function Contact() {
  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact/" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <main id="contenu">
        <HeroSection
          heading="Contact & soumission, Dilamco"
          description="Parlez-nous de votre projet de cuisine, vanité ou rangement sur mesure. Selon l'ampleur du projet, nous pouvons aussi prendre en charge une rénovation clé en main (coordination des travaux connexes). Nous réalisons des projets principalement à Montréal, Laval et sur la Rive-Sud."
          actionsSlot={
            <ActionButtons className="justify-start" buttons={[
              {
                text: "Voir des projets",
                href: "/projets/",
                variant: "outline",
              },
              {
                text: "Voir les espaces",
                href: "/espaces/",
                variant: "outline",
              },
            ]} />
          }
        />

        <ProofSection
          aria-labelledby="infos-contact"
          heading="Nous joindre"
          items={[
            {
              title: "Courriel",
              description: "info@dilamco.com",
              icon: Mail,
            },
            {
              title: "Téléphone",
              description: "À définir",
              icon: Phone,
            },
            {
              title: "Zones",
              description: "Montréal • Laval • Rive-Sud",
              icon: MapPin,
            },
          ]}
        />

        <Section aria-labelledby="formulaire">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <Heading variant="h2" className="mb-4">
                Demande de soumission
              </Heading>
              <p className="text-lg text-muted-foreground">
                Donnez-nous quelques détails (espace, secteur, échéance). Plus
                l'information est précise, plus la soumission sera fiable.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <form action="/contact/" method="post" className="space-y-6">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-10000px]"
                  />

                  <fieldset className="space-y-4">
                    <legend className="mb-4 text-lg font-semibold">
                      Informations de base
                    </legend>

                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input
                        id="nom"
                        name="nom"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="courriel">Courriel</Label>
                      <Input
                        id="courriel"
                        name="courriel"
                        type="email"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ville">Ville / secteur</Label>
                      <Input
                        id="ville"
                        name="ville"
                        autoComplete="address-level2"
                        placeholder="Montréal, Laval, Rive-Sud"
                        required
                      />
                    </div>
                  </fieldset>

                  <fieldset className="space-y-4">
                    <legend className="mb-4 text-lg font-semibold">
                      Détails du projet
                    </legend>

                    <div className="space-y-2">
                      <Label htmlFor="espace">Espace concerné</Label>
                      <Select name="espace" required>
                        <SelectTrigger id="espace" className="w-full">
                          <SelectValue placeholder="Sélectionner…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cuisine">Cuisine</SelectItem>
                          <SelectItem value="salle-de-bain">
                            Salle de bain / vanité
                          </SelectItem>
                          <SelectItem value="walk-in">
                            Walk-in / rangement
                          </SelectItem>
                          <SelectItem value="salle-de-lavage">
                            Salle de lavage
                          </SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type-projet">Type de projet</Label>
                      <Select name="type_projet" required>
                        <SelectTrigger id="type-projet" className="w-full">
                          <SelectValue placeholder="Sélectionner…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sur-mesure">
                            Sur mesure (design + fabrication + installation)
                          </SelectItem>
                          <SelectItem value="renovation">
                            Rénovation clé en main (selon le projet)
                          </SelectItem>
                          <SelectItem value="a-determiner">
                            À déterminer / besoin de conseils
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="echeance">Échéance souhaitée</Label>
                      <Select name="echeance" required>
                        <SelectTrigger id="echeance" className="w-full">
                          <SelectValue placeholder="Sélectionner…" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-3">0–3 mois</SelectItem>
                          <SelectItem value="3-6">3–6 mois</SelectItem>
                          <SelectItem value="6-12">6–12 mois</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Décrivez votre projet</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={8}
                        required
                        placeholder="Ex. cuisine complète, dimensions approximatives, état actuel, besoins (îlot, rangement), matériaux souhaités, contraintes, etc."
                      />
                    </div>
                  </fieldset>

                  <Button type="submit" size="lg" className="w-full">
                    Envoyer
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Section>

        <ListSection
          aria-labelledby="suite"
          heading="À quoi s'attendre après l'envoi"
          items={[
            "Confirmation : on accuse réception de votre demande.",
            "Questions rapides : si des détails manquent (mesures, photos, échéance).",
            "Planification : rendez-vous / prise d'information selon le projet.",
            "Soumission : proposition claire avec prochaines étapes.",
          ]}
          variant="numbered"
        />

        <ListSection
          aria-labelledby="filtrage"
          heading="Ce que nous faisons (et ce que nous ne faisons pas)"
          items={[
            "Oui : cuisines, vanités et espaces sur mesure, installation professionnelle, et rénovation clé en main selon l'ampleur du projet.",
            "Selon disponibilité : projets hors Montréal/Laval/Rive-Sud (cas par cas).",
            "À éviter : réparations mineures urgentes ou projets très petits (si votre besoin est une intervention ponctuelle, mentionnez-le et on vous orientera).",
          ]}
          variant="bullets"
        />

        <SliderSection
          aria-labelledby="espaces"
          heading="Choisissez votre espace"
          description="Découvrez nos solutions sur mesure pour chaque espace de votre maison ou entreprise."
          items={[
            {
              id: "cuisine",
              title: "Cuisine sur mesure",
              description: "Transformez votre cuisine en un espace unique, pensé pour vous et sans compromis sur la qualité ni explosion du budget.",
              href: "/espaces/cuisine/",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Custom kitchen cabinets and design",
              },
            },
            {
              id: "salle-de-bain",
              title: "Salle de bain & vanités sur mesure",
              description: "Offrez-vous une salle de bain élégante, fonctionnelle et durable, conçue selon vos goûts et vos besoins.",
              href: "/espaces/salle-de-bain/",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Custom bathroom vanity and design",
              },
            },
            {
              id: "walk-in",
              title: "Walk-in & rangement",
              href: "/espaces/walk-in/",
              description: "Maximisez chaque espace avec une garde-robe ou un walk-in conçu pour vous, élégant, fonctionnel et durable.",
              image: {
                src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
                alt: "Custom walk-in closet and storage",
              },
            },
            {
              id: "salle-de-lavage",
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage/",
              description: "Optimisez vos tâches quotidiennes avec une salle de lavage sur-mesure, pensée pour être pratique, durable et élégante.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Custom laundry room cabinets",
              },
            },
            {
              id: "commercial",
              title: "Commercial",
              href: "/espaces/commercial/",
              description: "Transformez vos espaces commerciaux en des lieux de vente attrayants et fonctionnels, conçus pour maximiser votre rentabilité.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Commercial custom spaces",
              },
            },
          ]}
        />
      </main>
    </>
  );
}
