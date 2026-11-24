// Limites des pièces jointes du formulaire de contact, partagées entre le
// champ client (components/forms/FileUploadField.tsx) et l'action serveur
// (lib/contact-actions.ts).
//
// Le corps d'une requête vers une fonction Vercel est plafonné à 4,5 Mo : les
// photos sont réduites dans le navigateur avant l'envoi, et le total reste
// sous ce plafond (marge pour les autres champs du formulaire).
// `experimental.serverActions.bodySizeLimit` (next.config.ts) suit ce plafond.

export const CONTACT_FILES_FIELD = "fichiers";
export const CONTACT_FILES_MAX_COUNT = 8;
export const CONTACT_FILES_MAX_TOTAL_BYTES = 4 * 1024 * 1024;
export const CONTACT_FILES_ACCEPT = "image/*,application/pdf";

export function isAllowedContactFileType(type: string) {
  return type.startsWith("image/") || type === "application/pdf";
}

export function formatFileSize(bytes: number, locale: string = "fr") {
  const en = locale === "en";
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} ${en ? "KB" : "Ko"}`;
  }
  const mb = (bytes / (1024 * 1024)).toFixed(1);
  return en ? `${mb} MB` : `${mb.replace(".", ",")} Mo`;
}
