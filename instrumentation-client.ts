import posthog from "posthog-js";

// PostHog (parcours, enregistrements de session, origine des demandes).
// Passe par le proxy /ingest (voir rewrites dans next.config.ts) pour ne pas
// être coupé par les bloqueurs de pub. Sans clé, rien n'est chargé.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key) {
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
    person_profiles: "identified_only",
  });
}
