import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import "./globals.css";

// Fonte display: serifada, elegante e feminina (títulos, nome, números)
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Fonte de corpo/UI: humanista, moderna e legível
const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yaguayanaz.com.br"),
  title: "Yá Guayanaz | Media Kit & Portfólio Digital",
  description:
    "Portfólio digital de Yá Guayanaz, criadora de conteúdo, influenciadora digital e estrategista de redes sociais com mais de 6 anos de experiência e mais de 350 marcas atendidas.",
  keywords: [
    "Yá Guayanaz",
    "influenciadora digital",
    "media kit",
    "criadora de conteúdo",
    "estrategista de redes sociais",
    "parcerias",
    "publicidade",
  ],
  authors: [{ name: "Yá Guayanaz" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://yaguayanaz.com.br",
    title: "Yá Guayanaz | Media Kit & Portfólio Digital",
    description:
      "Portfólio digital de Yá Guayanaz, criadora de conteúdo, influenciadora digital e estrategista de redes sociais com mais de 6 anos de experiência e mais de 350 marcas atendidas.",
    siteName: "Yá Guayanaz",
    images: [
      {
        url: "/images/ya-guayanaz/ya-hero.jpg",
        width: 1023,
        height: 1538,
        alt: "Yá Guayanaz — criadora de conteúdo e estrategista digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yá Guayanaz | Media Kit & Portfólio Digital",
    description:
      "Portfólio digital de Yá Guayanaz, criadora de conteúdo, influenciadora digital e estrategista de redes sociais.",
    images: ["/images/ya-guayanaz/ya-hero.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafcfe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Define a política de movimento antes da pintura:
            - respeita prefers-reduced-motion do sistema (classe .reduce-motion);
            - permite forçar as animações com ?motion=1 (classe .motion-force),
              útil para visualizar tudo mesmo com "reduzir movimento" ativo. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var p=new URLSearchParams(location.search);var f=p.get('motion');var ls=null;try{ls=localStorage.getItem('ya-motion');}catch(e){}var force=f==='1'||f==='on'||ls==='on';var off=f==='0'||ls==='off';var r=matchMedia('(prefers-reduced-motion: reduce)').matches;var c=document.documentElement.classList;if(force){c.add('motion-force');}else if(off||r){c.add('reduce-motion');}}catch(e){}})();",
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {/* Skip link para usuários de teclado/leitores de tela */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-azure-700 focus:shadow-card"
        >
          Pular para o conteúdo
        </a>

        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
