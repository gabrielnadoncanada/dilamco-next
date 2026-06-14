import type { Metadata } from "next";

// Les landings (campagnes / pubs) ne doivent JAMAIS être indexées.
// Appliqué au niveau du segment pour couvrir /landing et toute landing
// présente ou future sous /landing/*, sans avoir à le répéter par page.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
