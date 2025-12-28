import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Dilamco | Cuisines, vanités et armoires sur mesure clé en main à Montréal",
  description:
    "Dilamco conçoit et réalise des cuisines, vanités et armoires sur mesure haut de gamme. Design, fabrication, installation et rénovation clé en main à Montréal et partout au Québec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* <Header />
        <Breadcrumbs /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
