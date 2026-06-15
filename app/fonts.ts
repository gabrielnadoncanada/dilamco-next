import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});

// Classe à poser sur <body> dans tous les layouts qui rendent <html>.
export const fontBodyClassName = `${plusJakartaSans.variable} ${fraunces.variable} font-sans overflow-x-hidden!`;
