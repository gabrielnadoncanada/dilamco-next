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
      id: "contact-form",
      content: {
        type: "split",
        variant: "details-form-card",
        props: {
          heading: "Parlez-nous de votre projet",
          intro:
            "Demandez une soumission pour un projet de cuisine, vanité, rangement sur mesure ou rénovation avec coordination.",
          detailsTitle: "Nous joindre",
          detailsIntro:
            "Nous accompagnons principalement des projets résidentiels et commerciaux qui recherchent une solution durable, bien construite et bien planifiée.",
          details: [
            {
              title: "Courriel",
              description: "info@dilamco.com",
              icon: "mail",
              href: "mailto:info@dilamco.com",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              title: "Téléphone",
              description: "(514) 820-0773",
              icon: "phone",
              href: "tel:+15148200773",
              target: "_blank",
              rel: "noopener noreferrer",
            },
            {
              title: "Zones desservies",
              description: "Montréal, Laval et Rive-Sud",
              icon: "map-pin",
            },
            {
              title: "Délai de retour visé",
              description: "Retour initial sous 24 à 48 heures ouvrables.",
              icon: "clock",
            },
          ],
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
                  label: "Téléphone",
                  autoComplete: "tel",
                  required: true,
                },
                {
                  kind: "text",
                  name: "ville",
                  label: "Ville / secteur",
                  autoComplete: "address-level2",
                  placeholder: "Montréal, Laval, Rive-Sud",
                  required: true,
                },
                {
                  kind: "select",
                  name: "espace",
                  label: "Type d'espace",
                  placeholder: "Sélectionner...",
                  required: true,
                  options: [
                    { label: "Cuisine", value: "cuisine" },
                    { label: "Salle de bain / vanité", value: "salle-de-bain" },
                    { label: "Walk-in / rangement", value: "walk-in" },
                    { label: "Salle de lavage", value: "salle-de-lavage" },
                    { label: "Commercial", value: "commercial" },
                  ],
                },
                {
                  kind: "select",
                  name: "type_projet",
                  label: "Nature du projet",
                  placeholder: "Sélectionner...",
                  required: true,
                  options: [
                    {
                      label: "Sur mesure (design + fabrication + installation)",
                      value: "sur-mesure",
                    },
                    {
                      label: "Rénovation avec coordination",
                      value: "renovation",
                    },
                    {
                      label: "À déterminer / besoin de conseils",
                      value: "a-determiner",
                    },
                  ],
                },
                {
                  kind: "select",
                  name: "budget",
                  label: "Budget approximatif",
                  placeholder: "Sélectionner...",
                  required: true,
                  options: [
                    { label: "Moins de 15 000 $", value: "moins-15000" },
                    { label: "15 000 $ à 25 000 $", value: "15000-25000" },
                    { label: "25 000 $ à 40 000 $", value: "25000-40000" },
                    { label: "40 000 $ à 60 000 $", value: "40000-60000" },
                    { label: "60 000 $ et plus", value: "60000-plus" },
                    { label: "À discuter", value: "a-discuter" },
                  ],
                },
                {
                  kind: "select",
                  name: "echeance",
                  label: "Calendrier souhaité",
                  placeholder: "Sélectionner...",
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
                  label: "Décrivez votre projet",
                  rows: 8,
                  required: true,
                  placeholder:
                    "Ex. type de pièce, dimensions approximatives, état actuel, besoins de rangement, matériaux souhaités, contraintes d'accès ou échéancier.",
                },
              ],
            },
          ],
          submitLabel: "Demander une soumission",
        },
      },
    },
  ],
};
