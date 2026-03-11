import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/seo/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/metadata";
import { localBusinessJsonLd, organizationJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "Cuisines, vanités et armoires sur mesure au Québec | Dilamco",
    template: "%s | Dilamco",
  },

  description:
    "Cuisines, vanités, armoires et rangements sur mesure. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et Rive-Sud.",

  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "fr_CA",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dilamco — Sur mesure, durable, bien exécuté",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },

  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" suppressHydrationWarning>
      <body className={cn(plusJakartaSans.className, 'overflow-x-hidden! ')}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
