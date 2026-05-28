"use server";

import { Resend } from "resend";
import { z } from "zod";

export type ConstructionLeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export const constructionLeadSchema = z.object({
  nom: z.string().trim().min(2, "Entrez votre nom.").max(120),
  courriel: z.email("Entrez un courriel valide.").max(160),
  telephone: z
    .string()
    .trim()
    .min(7, "Entrez un numero de telephone valide.")
    .max(40),
  ville: z.string().trim().min(2, "Entrez votre ville ou secteur.").max(120),
  type_projet: z.enum(
    [
      "renovation-cuisine-sdb",
      "renovation-complete",
      "portes-fenetres-planchers",
      "sinistre",
      "commercial",
      "a-determiner",
    ],
    { error: () => ({ message: "Selectionnez le type de projet." }) },
  ),
  budget: z.enum(
    ["moins-25000", "25000-50000", "50000-100000", "100000-plus", "a-discuter"],
    { error: () => ({ message: "Selectionnez un budget approximatif." }) },
  ),
  echeance: z.enum(["0-3", "3-6", "6-12", "flexible"], {
    error: () => ({ message: "Selectionnez un calendrier souhaite." }),
  }),
  message: z
    .string()
    .trim()
    .max(4000)
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
});

const labelMap = {
  type_projet: {
    "renovation-cuisine-sdb": "Renovation cuisine / salle de bain",
    "renovation-complete": "Renovation complete / rallonge",
    "portes-fenetres-planchers": "Portes, fenetres & planchers",
    sinistre: "Recuperation apres sinistre (urgence)",
    commercial: "Projet commercial",
    "a-determiner": "A determiner",
  },
  budget: {
    "moins-25000": "Moins de 25 000 $",
    "25000-50000": "25 000 $ a 50 000 $",
    "50000-100000": "50 000 $ a 100 000 $",
    "100000-plus": "100 000 $ et plus",
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

export async function submitConstructionLead(
  _previousState: ConstructionLeadState,
  formData: FormData,
): Promise<ConstructionLeadState> {
  // Honeypot anti-spam : un bot remplit "website".
  if (getStringValue(formData, "website")) {
    return { status: "success", message: "Votre demande a ete envoyee." };
  }

  const parsed = constructionLeadSchema.safeParse({
    nom: getStringValue(formData, "nom"),
    courriel: getStringValue(formData, "courriel"),
    telephone: getStringValue(formData, "telephone"),
    ville: getStringValue(formData, "ville"),
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

  const toEmail = process.env.RESEND_CONTACT_TO_EMAIL ?? "info@dilamco.com";
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
    typeProjet: labelMap.type_projet[data.type_projet],
    budget: labelMap.budget[data.budget],
    echeance: labelMap.echeance[data.echeance],
    message: data.message,
  };

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.courriel,
    subject: `Nouvelle demande construction/renovation - ${data.nom}`,
    text: [
      "Nouvelle demande construction/renovation Dilamco",
      "",
      `Nom: ${summary.nom}`,
      `Courriel: ${summary.courriel}`,
      `Telephone: ${summary.telephone}`,
      `Ville / secteur: ${summary.ville}`,
      `Type de projet: ${summary.typeProjet}`,
      `Budget approximatif: ${summary.budget}`,
      `Calendrier souhaite: ${summary.echeance}`,
      "",
      "Message:",
      summary.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouvelle demande construction/renovation Dilamco</h2>
        <p><strong>Nom:</strong> ${escapeHtml(summary.nom)}</p>
        <p><strong>Courriel:</strong> ${escapeHtml(summary.courriel)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(summary.telephone)}</p>
        <p><strong>Ville / secteur:</strong> ${escapeHtml(summary.ville)}</p>
        <p><strong>Type de projet:</strong> ${escapeHtml(summary.typeProjet)}</p>
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
