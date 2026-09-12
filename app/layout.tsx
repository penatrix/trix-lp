import type { Metadata } from 'next';
import { Archivo, DM_Mono, Source_Sans_3 } from 'next/font/google';
import AnalyticsGate from '../components/AnalyticsGate';
import CookieConsent from '../components/CookieConsent';
import './globals.css';

// Archivo em título e interface, Source Sans 3 em corpo, DM Mono em
// valor que se confere. Revoga Outfit + Inter, que era o par anterior e
// vinha do desenho antigo.
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['500', '600', '700'],
});
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '600'],
});
const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['400', '500'],
});

// A promessa NÃO tem número de segundos, e isso é decisão do Paulo de
// 08/09: "gerado em segundos" deprecia o valor percebido -- se sai
// rápido, parece que vale pouco. A dor a atacar é a oposta, e é o tempo
// de pesquisa que o produto elimina. Este é o mesmo texto que o app
// serve no `web/index.html`, palavra por palavra: duas promessas
// diferentes para o mesmo produto é como a marca perde o fio.
const PROMESSA =
  'São 70 dias planejando uma viagem de 15. A Trix devolve esse tempo: ' +
  'roteiro dia a dia, com lugares, trajetos e custo estimado.';

export const metadata: Metadata = {
  metadataBase: new URL('https://trix.travel'),
  title: 'Trix | Roteiro de viagem dia a dia, com trajeto e custo',
  description: PROMESSA,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Trix | Roteiro de viagem dia a dia, com trajeto e custo',
    description: PROMESSA,
    url: 'https://trix.travel',
    siteName: 'Trix',
    images: [
      {
        url: '/og-trix.png',
        width: 1200,
        height: 630,
        // A marca Agulha sobre navy. Sem texto na imagem: a wordmark não
        // se redigita, e quem carrega a palavra é o título ao lado.
        alt: 'Trix',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trix | Roteiro de viagem dia a dia, com trajeto e custo',
    description: PROMESSA,
    images: ['/og-trix.png'],
  },
};

// A cor da barra do navegador acompanha o fundo da página em cada tema.
// Roteiros são consultados em avião e de madrugada, então o modo escuro
// não é opcional -- e uma barra clara sobre tela escura é a costura
// aparecendo.
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5efe6' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1729' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${archivo.variable} ${sourceSans.variable} ${dmMono.variable} font-sans antialiased bg-areia text-neutro-800`}
      >
        {children}

        <CookieConsent />
        <AnalyticsGate gaId="G-PTDW9BXK9F" />
      </body>
    </html>
  );
}
