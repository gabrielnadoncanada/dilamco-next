import posthog from "posthog-js";

// Écoute globale des clics sur les liens `tel:` (boutons d'appel du header,
// du footer, des CTA…). Pousse `phone_click` dans le dataLayer GTM — à relier
// à une balise GA4 dans GTM, comme `lead_submit` — et dans PostHog.
export function trackPhoneClicks() {
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (!link) return;
      const properties = {
        phone: link.getAttribute("href")?.slice(4),
        page: window.location.pathname,
      };
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "phone_click",
        ...properties,
      });
      if (posthog.__loaded) posthog.capture("phone_click", properties);
    },
    { capture: true },
  );
}
