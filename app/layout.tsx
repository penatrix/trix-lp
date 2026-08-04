import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trix Travel | Menos planilhas. Mais malas prontas.",
  description: "Seu roteiro perfeito de 15 dias criado em segundos. A logística real para o mundo real.",
};

// Configurando as duas fontes do Google
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Injetamos as variáveis das fontes na tag html
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      {/* font-sans aplica o Inter por padrão no corpo inteiro do site */}
      <body className="font-sans bg-secondary-bg text-primary-text antialiased">
        {children}
      </body>
    </html>
  );
}