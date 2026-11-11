import React from 'react';
import type { Metadata } from 'next';
import Cabecalho from '../../components/Cabecalho';
import ChamadaFinal from '../../components/ChamadaFinal';
import ComoFunciona from '../../components/ComoFunciona';
import Comparativo from '../../components/Comparativo';
import Descoberta from '../../components/Descoberta';
import FaixaDasLojas from '../../components/FaixaDasLojas';
import Footer from '../../components/Footer';
import HeroDoRoteiro from '../../components/HeroDoRoteiro';
import PerguntasFrequentes from '../../components/PerguntasFrequentes';
import Recursos from '../../components/Recursos';

/**
 * A home em inglês (11/11, decisão do Paulo depois do lançamento: o app
 * passou a abrir no idioma do aparelho, e quem chega de fora do Brasil
 * precisa ler a Trix na língua dele).
 *
 * É a home em português, bloco a bloco, sem a vitrine: as fichas dos
 * roteiros-modelo são só em português, e o app também não as mostra em
 * inglês. A promessa é a mesma, sem número de segundos.
 *
 * O `<html>` do layout é pt-BR, porque o layout é um só; o `lang` desta
 * página vai no invólucro, e o `hreflang` nas duas homes diz ao Google
 * qual é qual.
 */
const PROMESSA =
  '70 days planning a 15-day trip. Trix gives that time back: a day-by-day ' +
  'itinerary with places, routes and estimated costs.';

export const metadata: Metadata = {
  title: 'Trix | Day-by-day travel itineraries, with routes and costs',
  description: PROMESSA,
  alternates: {
    canonical: '/en',
    languages: { 'pt-BR': '/', en: '/en', 'x-default': '/' },
  },
  openGraph: {
    title: 'Trix | Day-by-day travel itineraries, with routes and costs',
    description: PROMESSA,
    url: 'https://trix.travel/en',
    siteName: 'Trix',
    images: [{ url: '/og-trix.png', width: 1200, height: 630, alt: 'Trix' }],
    locale: 'en_GB',
    alternateLocale: ['pt_BR'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trix | Day-by-day travel itineraries, with routes and costs',
    description: PROMESSA,
    images: ['/og-trix.png'],
  },
};

export default function LandingPageEn() {
  return (
    <div lang="en" className="min-h-screen bg-areia font-sans text-neutro-800">
      <Cabecalho idioma="en" seletor />
      <HeroDoRoteiro
        idioma="en"
        titulo={
          <>
            70 days planning
            <br />
            a 15-day trip.
          </>
        }
        resumo="Trix gives that time back: a day-by-day itinerary with the places, the routes between them and the estimated cost of each day."
      />
      <FaixaDasLojas idioma="en" />
      <Comparativo idioma="en" />
      <ComoFunciona idioma="en" />
      <Recursos idioma="en" />
      <Descoberta idioma="en" />
      <PerguntasFrequentes idioma="en" />
      <ChamadaFinal source="home_cta_en" idioma="en" />
      <Footer idioma="en" />
    </div>
  );
}
