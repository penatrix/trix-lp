import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trix Travel | Menos planilhas. Mais malas prontas.",
  description: "Seu roteiro perfeito de 15 dias criado em segundos com Inteligência Artificial. Junte-se à lista VIP.",
  openGraph: {
    title: "Trix Travel",
    description: "A logística real para o mundo real, no seu ritmo.",
    url: "https://trix.travel",
    siteName: "Trix Travel",
    images: [
      {
        url: "/og-image.jpg", // Nome exato do arquivo que você colocará na pasta public
        width: 1200,
        height: 630,
        alt: "Trix Travel - Planejador de Viagens com IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
