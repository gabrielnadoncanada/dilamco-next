"use client";

import { useEffect } from "react";

// Pousse `lead_submit` dans le dataLayer GTM à chaque soumission réussie ;
// GTM le traduit en `generate_lead` (GA4) et `Lead` (Meta Pixel).
// Dépend de l'objet d'état (nouveau à chaque envoi) pour compter chaque soumission.
export function useLeadSubmitTracking(
  state: { status: string },
  form: string,
) {
  useEffect(() => {
    if (state.status !== "success") return;
    (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
      event: "lead_submit",
      form,
    });
  }, [state, form]);
}
