import React from 'react';
import type { Metadata } from 'next';
import Cabecalho from '../components/Cabecalho';
import ChamadaFinal from '../components/ChamadaFinal';
import ComoFunciona from '../components/ComoFunciona';
import Comparativo from '../components/Comparativo';
import Descoberta from '../components/Descoberta';
import FaixaDasLojas from '../components/FaixaDasLojas';
import Footer from '../components/Footer';
import HeroDoRoteiro from '../components/HeroDoRoteiro';
import PerguntasFrequentes from '../components/PerguntasFrequentes';
import Recursos from '../components/Recursos';
import Vitrine from '../components/Vitrine';

/**
 * A home, na ordem de quem decide (20/10): o que é e um dia de verdade;
 * a dor; como funciona; o que chega na mão; roteiros prontos para abrir;
 * a descoberta para quem não tem destino; as objeções; o convite.
 *
 * A promessa do topo não tem número de segundos, e isso é decisão do
 * Paulo: "gerado em segundos" deprecia o valor percebido. A dor a atacar
 * é a oposta, e é o tempo de pesquisa que o produto elimina.
 *
 * Desde 11/11 a home tem a versão em inglês, em `/en` (`app/en/page.tsx`):
 * o `proxy.ts` leva até ela quem chega com o navegador em outro idioma, e
 * o seletor PT/EN do topo troca e grava a escolha.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', en: '/en', 'x-default': '/' },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-areia font-sans text-neutro-800">
      <Cabecalho seletor />
      <HeroDoRoteiro
        titulo={
          <>
            São 70 dias planejando
            <br />
            uma viagem de 15.
          </>
        }
        resumo="A Trix devolve esse tempo: roteiro dia a dia, com os lugares, os trajetos entre eles e o custo estimado de cada dia."
      />
      <FaixaDasLojas />
      <Comparativo />
      <ComoFunciona />
      <Recursos />
      <Vitrine />
      <Descoberta />
      <PerguntasFrequentes />
      <ChamadaFinal source="home_cta" />
      <Footer />
    </div>
  );
}
