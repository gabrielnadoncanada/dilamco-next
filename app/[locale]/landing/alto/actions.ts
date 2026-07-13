"use server";

import { Resend } from "resend";
import { z } from "zod";

export type PantrySignupState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const pantrySignupSchema = z.object({
  nom: z.string().trim().min(2, "Entrez votre nom complet.").max(120),
  courriel: z.email("Entrez un courriel valide.").max(160),
});

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

export async function submitPantrySignup(
  _previousState: PantrySignupState,
  formData: FormData,
): Promise<PantrySignupState> {
  // Honeypot anti-spam : un bot remplit "website".
  if (getStringValue(formData, "website")) {
    return { status: "success", message: "Votre inscription est confirmée." };
  }

  const parsed = pantrySignupSchema.safeParse({
    nom: getStringValue(formData, "nom"),
    courriel: getStringValue(formData, "courriel"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Corrigez les champs indiqués puis réessayez.",
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
      message: "La configuration de l'envoi courriel est incomplète.",
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

  const { nom, courriel } = parsed.data;
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    cc: ["gabriel@dilamco.com"],
    replyTo: courriel,
    subject: `Intention d'achat ALTO (895 $) — ${nom}`,
    text: [
      "Nouvelle demande de notification — ALTO, garde-manger Dilamco 24 po (895 $)",
      "",
      `Nom : ${nom}`,
      `Courriel : ${courriel}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouvelle demande de notification — ALTO, garde-manger Dilamco 24 po (895 $)</h2>
        <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
        <p><strong>Courriel :</strong> ${escapeHtml(courriel)}</p>
      </div>
    `,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Impossible d'enregistrer votre inscription pour le moment. Réessayez sous peu.",
    };
  }

  return {
    status: "success",
    message:
      "C'est noté. Nous vous aviserons par courriel dès qu'ALTO sera disponible.",
  };
}
