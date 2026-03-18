"use server";

import { Resend } from "resend";
import { z } from "zod";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const contactFormSchema = z.object({
  nom: z.string().trim().min(2, "Entrez votre nom.").max(120),
  courriel: z.email("Entrez un courriel valide.").max(160),
  telephone: z
    .string()
    .trim()
    .min(7, "Entrez un numero de telephone valide.")
    .max(40),
  ville: z.string().trim().min(2, "Entrez votre ville ou secteur.").max(120),
  espace: z.enum(
    ["cuisine", "salle-de-bain", "walk-in", "salle-de-lavage", "commercial"],
    {
      error: () => ({ message: "Selectionnez un type d'espace." }),
    },
  ),
  type_projet: z.enum(["sur-mesure", "renovation", "a-determiner"], {
    error: () => ({ message: "Selectionnez la nature du projet." }),
  }),
  budget: z.enum(
    [
      "moins-15000",
      "15000-25000",
      "25000-40000",
      "40000-60000",
      "60000-plus",
      "a-discuter",
    ],
    {
      error: () => ({ message: "Selectionnez un budget approximatif." }),
    },
  ),
  echeance: z.enum(["0-3", "3-6", "6-12", "flexible"], {
    error: () => ({ message: "Selectionnez un calendrier souhaite." }),
  }),
  message: z
    .string()
    .trim()
    .min(20, "Ajoutez quelques details sur votre projet.")
    .max(4000),
});

const labelMap = {
  espace: {
    cuisine: "Cuisine",
    "salle-de-bain": "Salle de bain / vanite",
    "walk-in": "Walk-in / rangement",
    "salle-de-lavage": "Salle de lavage",
    commercial: "Commercial",
  },
  type_projet: {
    "sur-mesure": "Sur mesure (design + fabrication + installation)",
    renovation: "Renovation avec coordination",
    "a-determiner": "A determiner / besoin de conseils",
  },
  budget: {
    "moins-15000": "Moins de 15 000 $",
    "15000-25000": "15 000 $ a 25 000 $",
    "25000-40000": "25 000 $ a 40 000 $",
    "40000-60000": "40 000 $ a 60 000 $",
    "60000-plus": "60 000 $ et plus",
    "a-discuter": "A discuter",
  },
  echeance: {
    "0-3": "0-3 mois",
    "3-6": "3-6 mois",
    "6-12": "6-12 mois",
    flexible: "Flexible",
  },
} as const;

function getStringValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function submitContactLead(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // if (getStringValue(formData, "website")) {
  //   return {
  //     status: "success",
  //     message: "Votre demande a ete envoyee.",
  //   };
  // }

  const parsed = contactFormSchema.safeParse({
    nom: getStringValue(formData, "nom"),
    courriel: getStringValue(formData, "courriel"),
    telephone: getStringValue(formData, "telephone"),
    ville: getStringValue(formData, "ville"),
    espace: getStringValue(formData, "espace"),
    type_projet: getStringValue(formData, "type_projet"),
    budget: getStringValue(formData, "budget"),
    echeance: getStringValue(formData, "echeance"),
    message: getStringValue(formData, "message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;

    return {
      status: "error",
      message: "Corrigez les champs indiques puis renvoyez le formulaire.",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).flatMap(([key, value]) =>
          value && value[0] ? [[key, value[0]]] : [],
        ),
      ),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "La configuration de l'envoi courriel est incomplete.",
    };
  }

  const toEmail = process.env.RESEND_CONTACT_TO_EMAIL ?? "ventes@dilamco.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!fromEmail) {
    return {
      status: "error",
      message: "Ajoutez RESEND_FROM_EMAIL avant d'envoyer des demandes.",
    };
  }

  const data = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const summary = {
    nom: data.nom,
    courriel: data.courriel,
    telephone: data.telephone,
    ville: data.ville,
    espace: labelMap.espace[data.espace],
    natureProjet: labelMap.type_projet[data.type_projet],
    budget: labelMap.budget[data.budget],
    echeance: labelMap.echeance[data.echeance],
    message: data.message,
  };

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.courriel,
    subject: `Nouvelle demande de soumission - ${data.nom}`,
    text: [
      "Nouvelle demande de soumission Dilamco",
      "",
      `Nom: ${summary.nom}`,
      `Courriel: ${summary.courriel}`,
      `Telephone: ${summary.telephone}`,
      `Ville / secteur: ${summary.ville}`,
      `Type d'espace: ${summary.espace}`,
      `Nature du projet: ${summary.natureProjet}`,
      `Budget approximatif: ${summary.budget}`,
      `Calendrier souhaite: ${summary.echeance}`,
      "",
      "Message:",
      summary.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouvelle demande de soumission Dilamco</h2>
        <p><strong>Nom:</strong> ${escapeHtml(summary.nom)}</p>
        <p><strong>Courriel:</strong> ${escapeHtml(summary.courriel)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(summary.telephone)}</p>
        <p><strong>Ville / secteur:</strong> ${escapeHtml(summary.ville)}</p>
        <p><strong>Type d'espace:</strong> ${escapeHtml(summary.espace)}</p>
        <p><strong>Nature du projet:</strong> ${escapeHtml(summary.natureProjet)}</p>
        <p><strong>Budget approximatif:</strong> ${escapeHtml(summary.budget)}</p>
        <p><strong>Calendrier souhaite:</strong> ${escapeHtml(summary.echeance)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(summary.message)}</p>
      </div>
    `,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Impossible d'envoyer votre demande pour le moment. Reessayez sous peu.",
    };
  }

  return {
    status: "success",
    message: "Votre demande a ete envoyee. Nous vous recontacterons sous peu.",
  };
}
