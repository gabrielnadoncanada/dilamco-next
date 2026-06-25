import { Plus_Jakarta_Sans } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Les titres éditoriaux utilisent Georgia (police système, voir globals.css
// `--font-display`/`--font-serif`) — aucune police serif n'est chargée via next/font.

// Classe à poser sur <body> dans tous les layouts qui rendent <html>.
export const fontBodyClassName = `${plusJakartaSans.variable} font-sans overflow-x-hidden!`;
