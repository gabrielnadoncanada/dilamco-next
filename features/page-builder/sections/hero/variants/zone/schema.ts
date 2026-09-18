import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "@/features/page-builder/sections/shared/schema";

const FactSchema = z.object({
  /** Étiquette courte (« Notre base », « Permis », « Bâti »). 1–3 mots. */
  label: z.string().min(1).max(32),
  /** Valeur courte (« Pierrefonds-Roxboro · 15 min »). ≤ 8 mots. */
  value: z.string().min(1).max(90),
});

/**
 * Hero de page zone : photo pleine largeur, kicker + nom de la ville en très
 * grand, phrase locale, puis une « fiche locale » flottante (3 à 4 faits :
 * base, permis, bâti, délai). Rien d'autre : la ville EST le hero.
 */
export const HeroZoneSchema = z.object({
  /** Kicker au-dessus du nom (« Entrepreneur général à »). */
  eyebrow: z.string().min(1).max(60),
  /** Nom de la ville ou du secteur (H1 visuel court). */
  heading: z.string().min(1).max(60),
  /** Accroche locale, une phrase ≤ 22 mots. */
  description: z.string().min(1),
  actions: ActionsSchema,
  image: ImageSchema,
  facts: z.array(FactSchema).min(2).max(4),
});

export type HeroZoneProps = z.infer<typeof HeroZoneSchema>;
