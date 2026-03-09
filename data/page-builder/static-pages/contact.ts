import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Contact et soumission",
    description:
      "Contactez Dilamco pour une soumission de cuisine, salle de bain, rangement ou projet commercial sur mesure.",
    path: "/contact/",
    ogAlt: "Contact Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact/" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          heading: "Parlez-nous de votre projet",
          description:
            "Cuisine, salle de bain, rangement, commercial ou renovation avec coordination: donnez-nous les bonnes informations de depart et nous pourrons cadrer la suite plus clairement.",
          badges: ["Soumission", "Sur mesure", "Montreal et environs"],
          actions: [
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
            },
            {
              label: "Voir notre processus",
              href: "/processus/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "contact-form",
      content: {
        type: "split",
        variant: "details-form-card",
        props: {
          heading: "Contact et soumission",
          intro:
            "Plus la demande est claire, plus il est facile de confirmer rapidement la portee, le type d'intervention et les prochaines etapes.",
          detailsTitle: "Nous joindre",
          detailsIntro:
            "Nous traitons les demandes liees au sur mesure et, selon la portee, a la renovation avec coordination.",
          details: [
            {
              title: "Courriel",
              description: "info@dilamco.com",
              icon: "mail",
            },
            {
              title: "Telephone",
              description: "A confirmer",
              icon: "phone",
            },
            {
              title: "Zones desservies",
              description: "Montreal, Laval et Rive-Sud",
              icon: "map-pin",
            },
            {
              title: "Delai de retour vise",
              description:
                "Retour initial apres reception pour confirmer la demande et les infos manquantes, si applicable.",
              icon: "clock",
            },
          ],
          note:
            "Les projets hors zone ou atypiques peuvent etre analyses au cas par cas selon la portee.",
          formTitle: "Demande de soumission",
          formIntro:
            "Donnez-nous quelques details utiles: type d'espace, localisation, echeance et description du projet.",
          formAction: "/contact/",
          formMethod: "post",
          honeypotName: "website",
          groups: [
            {
              legend: "Informations de base",
              fields: [
                {
                  kind: "text",
                  name: "nom",
                  label: "Nom",
                  autoComplete: "name",
                  required: true,
                },
                {
                  kind: "email",
                  name: "courriel",
                  label: "Courriel",
                  autoComplete: "email",
                  required: true,
                },
                {
                  kind: "tel",
                  name: "telephone",
                  label: "Telephone",
                  autoComplete: "tel",
                },
                {
                  kind: "text",
                  name: "ville",
                  label: "Ville / secteur",
                  autoComplete: "address-level2",
                  placeholder: "Montreal, Laval, Rive-Sud",
                  required: true,
                },
              ],
            },
            {
              legend: "Details du projet",
              fields: [
                {
                  kind: "select",
                  name: "espace",
                  label: "Espace concerne",
                  placeholder: "Selectionner...",
                  required: true,
                  options: [
                    { label: "Cuisine", value: "cuisine" },
                    {
                      label: "Salle de bain / vanite",
                      value: "salle-de-bain",
                    },
                    { label: "Walk-in / rangement", value: "walk-in" },
                    { label: "Salle de lavage", value: "salle-de-lavage" },
                    { label: "Commercial", value: "commercial" },
                  ],
                },
                {
                  kind: "select",
                  name: "type_projet",
                  label: "Type de projet",
                  placeholder: "Selectionner...",
                  required: true,
                  options: [
                    {
                      label: "Sur mesure (design + fabrication + installation)",
                      value: "sur-mesure",
                    },
                    {
                      label: "Renovation cle en main (selon le projet)",
                      value: "renovation",
                    },
                    {
                      label: "A determiner / besoin de conseils",
                      value: "a-determiner",
                    },
                  ],
                },
                {
                  kind: "select",
                  name: "echeance",
                  label: "Echeance souhaitee",
                  placeholder: "Selectionner...",
                  required: true,
                  options: [
                    { label: "0-3 mois", value: "0-3" },
                    { label: "3-6 mois", value: "3-6" },
                    { label: "6-12 mois", value: "6-12" },
                    { label: "Flexible", value: "flexible" },
                  ],
                },
                {
                  kind: "textarea",
                  name: "message",
                  label: "Decrivez votre projet",
                  rows: 8,
                  required: true,
                  placeholder:
                    "Ex. cuisine complete, dimensions approximatives, etat actuel, besoins de rangement, materiaux souhaites, contraintes d'acces ou de chantier...",
                },
              ],
            },
          ],
          submitLabel: "Envoyer la demande",
        },
      },
    },
    {
      id: "next-steps",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "A quoi s'attendre apres l'envoi",
          intro:
            "L'objectif est de qualifier rapidement la demande, verifier la portee et clarifier la meilleure suite.",
          steps: [
            {
              number: "1",
              title: "Reception de la demande",
              description:
                "Nous prenons connaissance des informations envoyees et verifions si la base est suffisante pour avancer.",
            },
            {
              number: "2",
              title: "Questions complementaires",
              description:
                "S'il manque des informations importantes, nous revenons vers vous pour mieux cadrer la demande.",
            },
            {
              number: "3",
              title: "Orientation selon la portee",
              description:
                "Nous determinons s'il s'agit d'un mandat de sur mesure, d'installation, de renovation ou d'un besoin a preciser.",
            },
            {
              number: "4",
              title: "Prochaine etape claire",
              description:
                "Vous savez ensuite comment la suite se structure: appel, validation, visite, ou preparation de soumission.",
            },
          ],
        },
      },
    },
    {
      id: "coverage",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que nous prenons en charge",
          intro:
            "La page contact sert surtout a qualifier si votre demande correspond bien au type de projet que nous executons.",
          columns: "2",
          items: [
            {
              title: "Sur mesure residentiel",
              description:
                "Cuisines, vanites, rangement et autres espaces ou la configuration doit etre adaptee.",
              icon: "doorOpen",
              bullets: [
                "Cuisine",
                "Salle de bain",
                "Walk-in et rangement",
              ],
            },
            {
              title: "Projets commerciaux",
              description:
                "Mobilier et amenagement quand la durabilite, la logistique et l'usage reel comptent.",
              icon: "package2",
              bullets: [
                "Comptoirs et mobilier",
                "Espaces clients ou travail",
                "Execution planifiee",
              ],
            },
            {
              title: "Renovation avec coordination",
              description:
                "Quand le projet implique plusieurs etapes ou corps de metier au-dela des armoires.",
              icon: "wrench",
              bullets: [
                "Selon la portee du projet",
                "Sequence mieux cadree",
                "Moins de fragmentation",
              ],
            },
            {
              title: "Analyse de faisabilite",
              description:
                "Certaines demandes hors format peuvent etre evaluees si les contraintes sont bien expliquees des le depart.",
              icon: "slidersHorizontal",
              bullets: [
                "Hors zone au cas par cas",
                "Contraintes d'acces a preciser",
                "Priorites et echeance a clarifier",
              ],
            },
          ],
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Si vous preferez, commencez par votre type de projet",
          intro:
            "Ces pages aident a valider plus vite l'angle de discussion avant meme la demande de soumission.",
          columns: "2",
          items: [
            {
              title: "Cuisine",
              description: "Voir la page pilier cuisine sur mesure.",
              href: "/espaces/cuisine/",
              badges: ["Residentiel", "Sur mesure"],
              ctaLabel: "Voir cuisine",
            },
            {
              title: "Salle de bain",
              description: "Voir l'approche vanite et salle de bain sur mesure.",
              href: "/espaces/salle-de-bain/",
              badges: ["Vanite", "Humidite"],
              ctaLabel: "Voir salle de bain",
            },
            {
              title: "Walk-in",
              description: "Voir les solutions de rangement et d'organisation.",
              href: "/espaces/walk-in/",
              badges: ["Rangement", "Organisation"],
              ctaLabel: "Voir walk-in",
            },
            {
              title: "Commercial",
              description: "Voir les amenagements commerciaux sur mesure.",
              href: "/espaces/commercial/",
              badges: ["Commercial", "Durable"],
              ctaLabel: "Voir commercial",
            },
          ],
        },
      },
    },
  ],
};
