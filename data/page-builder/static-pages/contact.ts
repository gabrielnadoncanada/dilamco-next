import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Soumission rénovation gratuite — contactez Dilamco",
    description:
      "Décrivez votre projet de rénovation ou de construction. Estimation gratuite, retour sous 24 à 48 heures ouvrables. Licence RBQ 8306-0806-27.",
    path: "/contact",
    ogAlt: "Contacter Dilamco pour une estimation de rénovation",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Contact", url: SITE.url + "/contact" },
  ],
  blocks: [
    {
      id: "contact-form",
      content: {
        type: "split",
        variant: "details-form-card",
        props: {
          heading: "Décrivez-nous votre projet",
          intro:
            "Plus votre description est précise, plus notre premier retour est utile.",
          detailsTitle: "Nous joindre",
          detailsIntro:
            "Entrepreneur général en rénovation résidentielle à Pierrefonds-Roxboro depuis 2004.",
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
              description:
                "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges.",
              icon: "map-pin",
            },
            {
              title: "Délai de retour",
              description: "Sous 24 à 48 heures ouvrables.",
              icon: "clock",
            },
          ],
          note: "Responsabilité civile et couverture chantier en vigueur.",
          formTitle: "Demander une estimation gratuite",
          formIntro:
            "Ces informations servent uniquement à préparer la visite.",
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
                  helper:
                    "Un appel de deux minutes évite souvent trois échanges de courriels.",
                },
                {
                  kind: "text",
                  name: "ville",
                  label: "Ville / secteur du projet",
                  autoComplete: "address-level2",
                  placeholder: "Pierrefonds, Kirkland, Laval, Vaudreuil...",
                  required: true,
                  helper:
                    "Les exigences de permis changent d'une ville et d'un arrondissement à l'autre.",
                },
                {
                  kind: "select",
                  name: "espace",
                  label: "Type de travaux",
                  placeholder: "Sélectionner...",
                  required: true,
                  options: [
                    { label: "Rénovation de cuisine", value: "cuisine" },
                    {
                      label: "Rénovation de salle de bain",
                      value: "salle-de-bain",
                    },
                    { label: "Finition de sous-sol", value: "sous-sol" },
                    {
                      label: "Agrandissement de maison",
                      value: "agrandissement",
                    },
                    { label: "Plancher", value: "plancher" },
                    {
                      label: "Après sinistre (eau, feu)",
                      value: "apres-sinistre",
                    },
                    {
                      label: "Rénovation complète / plusieurs pièces",
                      value: "renovation-complete",
                    },
                    {
                      label: "Armoires sur mesure seulement",
                      value: "armoires",
                    },
                    { label: "Commercial", value: "commercial" },
                    { label: "Autre", value: "autre" },
                  ],
                },
                {
                  kind: "select",
                  name: "type_projet",
                  label: "Nature du mandat",
                  placeholder: "Sélectionner...",
                  required: true,
                  options: [
                    {
                      label:
                        "Clé en main (entrepreneur général, permis et coordination)",
                      value: "cle-en-main",
                    },
                    {
                      label: "Rénovation avec coordination",
                      value: "renovation",
                    },
                    {
                      label: "Armoires sur mesure seulement",
                      value: "armoires-seulement",
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
                  helper:
                    "Nos mandats de rénovation démarrent généralement autour de 25 000 $.",
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
                  label: "Quand souhaitez-vous commencer ?",
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
                  label: "Décrivez les travaux",
                  rows: 8,
                  required: true,
                  helper:
                    "Type de bâtiment, année de construction, état actuel, contraintes d'accès. Tout ce qui nous évite une surprise vous évite un supplément.",
                  placeholder:
                    "Ex. bungalow 1968, cuisine d'origine à refaire au complet, mur à ouvrir vers la salle à manger, plomberie et électricité jamais touchées, sous-sol fini à revoir plus tard.",
                },
              ],
            },
          ],
          submitLabel: "Demander une estimation gratuite",
        },
      },
    },
  ],
};
