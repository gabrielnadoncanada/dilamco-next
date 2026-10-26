"use client";

import posthog from "posthog-js";
import { useEffect, useState } from "react";
import { readLeadAttribution } from "@/lib/lead-attribution";

// Champ caché joint aux formulaires de demande : origine du visiteur
// (lib/lead-attribution.ts), lue par l'action serveur pour le courriel.
export function LeadAttributionInput() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const replay = posthog.__loaded
      ? posthog.get_session_replay_url({ withTimestamp: true })
      : undefined;
    setValue(JSON.stringify(readLeadAttribution(replay)));
  }, []);

  return <input type="hidden" name="attribution" value={value} />;
}
