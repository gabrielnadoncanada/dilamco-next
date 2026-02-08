import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { SPACE_SLIDER_ITEMS } from "@/data/shared-content";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { Section } from "@/components/ui/section";
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
import { Heading } from "@/components/ui/heading";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & soumission",
  description:
    "Contactez Dilamco pour une soumission : cuisine, salle de bain, walk-in, salle de lavage ou commercial.",
  path: "/contact/",
  ogAlt: "Contact Dilamco",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact/" },
  ],
  hero: {
    heading: "Contact & soumission, Dilamco",
    description:
      "Parlez-nous de votre projet de cuisine, vanité ou rangement sur mesure. Selon l'ampleur, nous pouvons aussi prendre en charge une rénovation clé en main.",
    actions: [
      { text: "Voir des projets", href: "/projets/", variant: "outline" },
      { text: "Voir les espaces", href: "/espaces/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "proof",
      ariaLabelledby: "infos-contact",
      heading: "Nous joindre",
      items: [
        { title: "Courriel", description: "info@dilamco.com", icon: Mail },
        { title: "Téléphone", description: "À définir", icon: Phone },
        { title: "Zones", description: "Montréal • Laval • Rive-Sud", icon: MapPin },
      ],
    },
    {
      type: "custom",
      node: (
        <Section aria-labelledby="formulaire">
          <div className="mx-auto max-w-2xl space-y-8">
            <div>
              <Heading variant="h2" className="mb-4">
                Demande de soumission
              </Heading>
              <p className="text-lg text-muted-foreground">
                Donnez-nous quelques détails (espace, secteur, échéance). Plus l'information est précise, plus la soumission sera fiable.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <form action="/contact/" method="post" className="space-y-6">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute left-[-10000px]"
                  />

                  <fieldset className="space-y-4">
                    <legend className="mb-4 text-lg font-semibold">Informations de base</legend>

                    <div className="space-y-2">
                      <Label htmlFor="nom">Nom</Label>
                      <Input id="nom" name="nom" autoComplete="name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="courriel">Courriel</Label>
                      <Input id="courriel" name="courriel" type="email" autoComplete="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">Téléphone</Label>
                      <Input id="telephone" name="telephone" type="tel" autoComplete="tel" />
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
                    <legend className="mb-4 text-lg font-semibold">Détails du projet</legend>

                    <div className="space-y-2">
                      <Label htmlFor="espace">Espace concerné</Label>
                      <Select name="espace" required>
                        <SelectTrigger id="espace" className="w-full">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cuisine">Cuisine</SelectItem>
                          <SelectItem value="salle-de-bain">Salle de bain / vanité</SelectItem>
                          <SelectItem value="walk-in">Walk-in / rangement</SelectItem>
                          <SelectItem value="salle-de-lavage">Salle de lavage</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="type-projet">Type de projet</Label>
                      <Select name="type_projet" required>
                        <SelectTrigger id="type-projet" className="w-full">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sur-mesure">Sur mesure (design + fabrication + installation)</SelectItem>
                          <SelectItem value="renovation">Rénovation clé en main (selon le projet)</SelectItem>
                          <SelectItem value="a-determiner">À déterminer / besoin de conseils</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="echeance">Échéance souhaitée</Label>
                      <Select name="echeance" required>
                        <SelectTrigger id="echeance" className="w-full">
                          <SelectValue placeholder="Sélectionner..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-3">0-3 mois</SelectItem>
                          <SelectItem value="3-6">3-6 mois</SelectItem>
                          <SelectItem value="6-12">6-12 mois</SelectItem>
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
                        placeholder="Ex. cuisine complète, dimensions approximatives, état actuel, besoins (îlot, rangement), matériaux souhaités, contraintes..."
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
      ),
    },
    {
      type: "list",
      ariaLabelledby: "suite",
      heading: "À quoi s'attendre après l'envoi",
      items: [
        "Confirmation de réception.",
        "Questions rapides si des détails manquent.",
        "Planification selon la portée.",
        "Soumission avec prochaines étapes.",
      ],
      variant: "numbered",
    },
    {
      type: "list",
      ariaLabelledby: "filtrage",
      heading: "Ce que nous faisons",
      items: [
        "Cuisines, vanités et espaces sur mesure, avec installation pro.",
        "Rénovation clé en main selon l'ampleur.",
        "Projets hors zone : étude au cas par cas.",
      ],
      variant: "bullets",
    },
    {
      type: "slider",
      ariaLabelledby: "espaces",
      heading: "Choisissez votre espace",
      description: "Découvrez nos solutions sur mesure pour chaque espace.",
      items: SPACE_SLIDER_ITEMS,
    },
  ],
  showCta: false,
};
