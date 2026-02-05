import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { JsonLd } from "@/seo/JsonLd";
import { localBusinessJsonLd, organizationJsonLd } from "@/seo/schema/builders";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";

const siteUrl = "https://dilamco.com";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cuisines, vanités et armoires sur mesure au Québec | Dilamco",
    template: "%s | Dilamco",
  },

  description:
    "Cuisines, vanités, armoires et rangements sur mesure. Design, fabrication, installation et rénovation clé en main à Montréal, Laval et Rive-Sud.",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Dilamco",
    locale: "fr_CA",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dilamco — Sur mesure, durable, bien exécuté",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className={jakarta.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={localBusinessJsonLd()} />
          
          <Header/>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
