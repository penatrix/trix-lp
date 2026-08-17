import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'; // <-- NOVO IMPORT AQUI
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://trix.travel'),
  title: 'Trix Travel | Menos planilhas. Mais malas prontas.',
  description: 'Seu roteiro perfeito de 15 dias criado em segundos com Inteligência Artificial. Junte-se à lista VIP.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Trix Travel',
    description: 'A logística real para o mundo real, no seu ritmo.',
    url: 'https://trix.travel',
    siteName: 'Trix Travel',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trix Travel - Planejador de Viagens com IA',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-secondary-bg text-primary-text`}>
        {children}
        
        {/* NOVO: Componente do GA4 */}
        <GoogleAnalytics gaId="G-PTDW9BXK9F" /> 
      </body>
    </html>
  );
}