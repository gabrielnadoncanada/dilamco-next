import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

// Corps de texte : Plus Jakarta Sans (identité existante du site).
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Titres : Bricolage Grotesque, grotesque contemporaine à fort contraste de
// graisse. Remplace Georgia (refonte 2026-09) : grands titres sans-serif
// serrés, comme les références « Construction Agency » / « NexaCargo ».
export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

// Classe à poser sur <body> dans tous les layouts qui rendent <html>.
export const fontBodyClassName = `${plusJakartaSans.variable} ${bricolageGrotesque.variable} font-sans overflow-x-hidden!`;
