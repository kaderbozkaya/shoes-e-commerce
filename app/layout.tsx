import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "../lib/constants";
const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-Roboto",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Shoes Store",
    default: `${APP_NAME}`,
  },
  description: `${APP_DESC}`,
  metadataBase: new URL(SERVER_URL), //Open Graph veya SEO ile ilgili etiketlerde tam URL gerektiğinde, buraya verilen base URL baz alınır.Bu, özellikle dinamik ortamlarda (development, staging, production) farklı URL'ler kullanmak gerektiğinde faydalıdır.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>{children}</body>
    </html>
  );
}
