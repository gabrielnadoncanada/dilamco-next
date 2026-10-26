// Origine des visiteurs, jointe aux demandes de soumission (champ caché
// `attribution`, voir LeadAttributionInput) pour savoir d'où vient chaque
// client sans dépendre de GA4 (bloqué chez une majorité de visiteurs).
//
// - first   : premier passage sur le site (localStorage, conservé 90 jours)
// - session : arrivée de la visite en cours (sessionStorage)

export type Touch = {
  landing: string;
  referrer: string;
  params: Record<string, string>;
  at: string;
};

export type LeadAttribution = {
  first?: Touch;
  session?: Touch;
  replay?: string;
};

const FIRST_KEY = "dlc_first_touch";
const SESSION_KEY = "dlc_session_touch";
const FIRST_TTL_MS = 90 * 24 * 60 * 60 * 1000;
const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
];

function currentTouch(): Touch {
  const url = new URL(window.location.href);
  const params: Record<string, string> = {};
  for (const key of TRACKED_PARAMS) {
    const value = url.searchParams.get(key);
    if (value) params[key] = value.slice(0, 200);
  }
  let referrer = "";
  try {
    if (document.referrer && new URL(document.referrer).host !== url.host) {
      referrer = document.referrer.slice(0, 300);
    }
  } catch {}
  return {
    landing: url.pathname,
    referrer,
    params,
    at: new Date().toISOString(),
  };
}

function read(storage: Storage, key: string): Touch | undefined {
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as Touch) : undefined;
  } catch {
    return undefined;
  }
}

function write(storage: Storage, key: string, touch: Touch) {
  try {
    storage.setItem(key, JSON.stringify(touch));
  } catch {}
}

// Appelé une fois par chargement complet (instrumentation-client.ts).
export function captureLeadAttribution() {
  if (typeof window === "undefined") return;
  const touch = currentTouch();
  const first = read(localStorage, FIRST_KEY);
  if (!first || Date.now() - Date.parse(first.at) > FIRST_TTL_MS) {
    write(localStorage, FIRST_KEY, touch);
  }
  if (!read(sessionStorage, SESSION_KEY)) {
    write(sessionStorage, SESSION_KEY, touch);
  }
}

export function readLeadAttribution(replay?: string): LeadAttribution {
  return {
    first: read(localStorage, FIRST_KEY),
    session: read(sessionStorage, SESSION_KEY),
    replay,
  };
}
