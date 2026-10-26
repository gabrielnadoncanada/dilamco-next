"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

// Pousse `lead_submit` dans le dataLayer GTM à chaque soumission réussie ;
// GTM le traduit en `generate_lead` (GA4) et `Lead` (Meta Pixel).
// Le même événement part dans PostHog, qui y rattache la source et le parcours.
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
    if (posthog.__loaded) posthog.capture("lead_submit", { form });
  }, [state, form]);
}
