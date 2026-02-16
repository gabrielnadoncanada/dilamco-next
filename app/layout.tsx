import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { JsonLd } from "@/seo/JsonLd";
import { localBusinessJsonLd, organizationJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SectionHeaderMotion } from "@/components/animations/SectionHeaderMotion";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })


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
      <body className={plusJakartaSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={localBusinessJsonLd()} />


          <Header />
          <Breadcrumbs />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
