"use server";

import { Resend } from "resend";
import { z } from "zod";

export type SoumissionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

const itemSchema = z.object({
  name: z.string().trim().max(200),
  color: z.string().trim().max(80).optional().default(""),
  molding: z.string().trim().max(80).optional().default(""),
  qty: z.number().int().min(1).max(999),
  price: z.number().min(0).max(1_000_000),
  w: z.number().optional(),
  h: z.number().optional(),
  d: z.number().optional(),
  productId: z.string().trim().max(120).optional().default(""),
});

export const soumissionSchema = z.object({
  prenom: z.string().trim().min(1, "Entrez votre prénom.").max(120),
  nom: z.string().trim().min(1, "Entrez votre nom.").max(120),
  email: z.email("Entrez un courriel valide.").max(160),
  tel: z
    .string()
    .trim()
    .min(7, "Entrez un numéro de téléphone valide.")
    .max(40),
  code_postal: z
    .string()
    .trim()
    .min(3, "Entrez le code postal de l'installation.")
    .max(20),
  type_projet: z.enum(["cuisine", "renovation", "rangement", "commercial"], {
    error: () => ({ message: "Sélectionnez un type de projet." }),
  }),
  budget: z.enum(["25-40k", "40-60k", "60-90k", "90k+"], {
    error: () => ({ message: "Sélectionnez un budget approximatif." }),
  }),
  timeline: z.enum(["urgent", "1-3mois", "3-6mois", "6mois+"], {
    error: () => ({ message: "Sélectionnez un échéancier." }),
  }),
  notes: z
    .string()
    .trim()
    .max(4000)
    .optional()
    .or(z.literal(""))
    .transform((v) => v ?? ""),
  // Honeypot anti-spam : un bot remplit ce champ.
  website: z.string().optional().default(""),
  items: z.array(itemSchema).max(300).default([]),
});

export type SoumissionPayload = z.input<typeof soumissionSchema>;

const labelMap = {
  type_projet: {
    cuisine: "Cuisine complète",
    renovation: "Rénovation partielle",
    rangement: "Rangement sur mesure",
    commercial: "Projet commercial",
  },
  budget: {
    "25-40k": "25 000 $ à 40 000 $",
    "40-60k": "40 000 $ à 60 000 $",
    "60-90k": "60 000 $ à 90 000 $",
    "90k+": "90 000 $ et plus",
  },
  timeline: {
    urgent: "Sous 1 mois",
    "1-3mois": "1 à 3 mois",
    "3-6mois": "3 à 6 mois",
    "6mois+": "Plus de 6 mois",
  },
} as const;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatPrice(amount: number) {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export async function submitSoumission(
  payload: SoumissionPayload,
): Promise<SoumissionState> {
  const parsed = soumissionSchema.safeParse(payload);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Corrigez les champs indiqués puis renvoyez le formulaire.",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).flatMap(([key, value]) =>
          value && value[0] ? [[key, value[0]]] : [],
        ),
      ),
    };
  }

  const data = parsed.data;

  // Honeypot : on simule un succès pour les bots sans envoyer de courriel.
  if (data.website) {
    return { status: "success", message: "Votre demande a été envoyée." };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message: "La configuration de l'envoi courriel est incomplète.",
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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const nomComplet = `${data.prenom} ${data.nom}`.trim();
  const subtotal = data.items.reduce((s, it) => s + it.price * it.qty, 0);
  const totalQty = data.items.reduce((s, it) => s + it.qty, 0);

  const summary = {
    nom: nomComplet,
    courriel: data.email,
    telephone: data.tel,
    codePostal: data.code_postal,
    typeProjet: labelMap.type_projet[data.type_projet],
    budget: labelMap.budget[data.budget],
    timeline: labelMap.timeline[data.timeline],
    notes: data.notes,
  };

  const itemsTextLines =
    data.items.length === 0
      ? ["(aucun module sélectionné — accompagnement à prévoir)"]
      : data.items.map((it) => {
          const dims =
            it.w || it.h || it.d
              ? ` [${[it.w, it.h, it.d].filter(Boolean).join(" x ")}]`
              : "";
          const finition = [it.color, it.molding].filter(Boolean).join(" / ");
          return `- ${it.qty} x ${it.name}${dims}${
            finition ? ` — ${finition}` : ""
          } — ${formatPrice(it.price * it.qty)}`;
        });

  const itemsHtmlRows =
    data.items.length === 0
      ? `<tr><td colspan="4" style="padding:8px;color:#6b7280;">Aucun module sélectionné — accompagnement à prévoir.</td></tr>`
      : data.items
          .map((it) => {
            const dims =
              it.w || it.h || it.d
                ? [it.w, it.h, it.d].filter(Boolean).join(" x ")
                : "";
            const finition = [it.color, it.molding]
              .filter(Boolean)
              .join(" / ");
            return `<tr>
              <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;">${escapeHtml(
                it.name,
              )}${dims ? `<br><span style="color:#6b7280;font-size:12px;">${escapeHtml(dims)}</span>` : ""}</td>
              <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;color:#6b7280;">${escapeHtml(
                finition,
              )}</td>
              <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:center;">${it.qty}</td>
              <td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:right;">${escapeHtml(
                formatPrice(it.price * it.qty),
              )}</td>
            </tr>`;
          })
          .join("");

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    cc: ["gabriel@dilamco.com"],
    replyTo: data.email,
    subject: `Nouvelle demande de soumission boutique - ${nomComplet}`,
    text: [
      "Nouvelle demande de soumission - Boutique Dilamco",
      "",
      `Nom: ${summary.nom}`,
      `Courriel: ${summary.courriel}`,
      `Téléphone: ${summary.telephone}`,
      `Code postal: ${summary.codePostal}`,
      `Type de projet: ${summary.typeProjet}`,
      `Budget approximatif: ${summary.budget}`,
      `Échéancier souhaité: ${summary.timeline}`,
      "",
      `Modules sélectionnés (${totalQty}) — sous-total catalogue ${formatPrice(subtotal)}:`,
      ...itemsTextLines,
      "",
      "Notes:",
      summary.notes || "(aucune)",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin-bottom: 16px;">Nouvelle demande de soumission - Boutique Dilamco</h2>
        <p><strong>Nom:</strong> ${escapeHtml(summary.nom)}</p>
        <p><strong>Courriel:</strong> ${escapeHtml(summary.courriel)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(summary.telephone)}</p>
        <p><strong>Code postal:</strong> ${escapeHtml(summary.codePostal)}</p>
        <p><strong>Type de projet:</strong> ${escapeHtml(summary.typeProjet)}</p>
        <p><strong>Budget approximatif:</strong> ${escapeHtml(summary.budget)}</p>
        <p><strong>Échéancier souhaité:</strong> ${escapeHtml(summary.timeline)}</p>
        <h3 style="margin:20px 0 8px;">Modules sélectionnés (${totalQty})</h3>
        <table style="border-collapse:collapse;width:100%;font-size:13px;">
          <thead>
            <tr style="text-align:left;color:#6b7280;">
              <th style="padding:6px 8px;border-bottom:2px solid #111827;">Module</th>
              <th style="padding:6px 8px;border-bottom:2px solid #111827;">Finition</th>
              <th style="padding:6px 8px;border-bottom:2px solid #111827;text-align:center;">Qté</th>
              <th style="padding:6px 8px;border-bottom:2px solid #111827;text-align:right;">Total</th>
            </tr>
          </thead>
          <tbody>${itemsHtmlRows}</tbody>
        </table>
        <p style="margin-top:8px;text-align:right;"><strong>Sous-total catalogue : ${escapeHtml(
          formatPrice(subtotal),
        )}</strong></p>
        <h3 style="margin:20px 0 8px;">Notes</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(summary.notes) || "(aucune)"}</p>
      </div>
    `,
  });

  if (error) {
    return {
      status: "error",
      message:
        "Impossible d'envoyer votre demande pour le moment. Réessayez sous peu.",
    };
  }

  return {
    status: "success",
    message: "Votre demande a été envoyée. Nous vous recontacterons sous peu.",
  };
}
