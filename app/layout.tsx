import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESC, APP_NAME, SERVER_URL } from "../lib/constants";
import { ThemeProvider } from "@/components/shared/header/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      {/* Next.js, Sunucu Tarafında Rendering (SSR) yaptığında bileşenleri HTML olarak render eder ve ardından istemci tarafında React tarafından yeniden işlenir (hydrate edilir). Ancak, dark mode gibi client-side (istemci taraflı) değişkenler, başlangıçta sunucu ve istemci arasında farklı değerlere sahip olabilir.

    Örneğin:
    
    Sunucu tarafında localStorage kullanılamaz, bu yüzden tema varsayılan olarak light olabilir.
    
    İstemci tarafında tarayıcıdaki tema ayarına göre dark olabilir.
    
    Bu farklılık, Next.js’in hydration error (nemlendirme hatası) vermesine neden olur.
    Next.js, hydration sırasında oluşan DOM farklılıklarını göz ardı eder, yani sunucu tarafında gelen HTML ile istemci tarafında oluşan farklılıklar nedeniyle hata vermez.
    Bu sayede dark mode gibi client-side belirlenen temalar için hatayı önleyebilirsiniz.  */}
      <body className={`${roboto.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
