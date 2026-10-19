import React from 'react';
import Blocos, { type Bloco } from './Blocos';
import Cabecalho from './Cabecalho';
import ChamadaFinal from './ChamadaFinal';
import Comparativo from './Comparativo';
import Footer from './Footer';
import Recursos from './Recursos';
import HeroDoRoteiro from './HeroDoRoteiro';
import Vitrine from './Vitrine';

/**
 * O molde das três páginas que espelham a home: o hero com um dia de
 * roteiro, o antes e depois, os três argumentos, a vitrine, conteúdo
 * próprio e a chamada final. O vídeo do app antigo saiu em 20/10.
 *
 * Elas eram 234 linhas cada, quase idênticas entre si e à home. Toda a
 * diferença real cabe nas props abaixo — o resto era markup copiado, e
 * era o markup copiado que multiplicava cada erro de marca por quatro.
 */
export default function PaginaDeEntrada({
  slug,
  rotulo,
  titulo,
  resumo,
  conteudo,
}: {
  slug: string;
  rotulo: string;
  titulo: React.ReactNode;
  resumo: string;
  conteudo: { titulo: string; intro: string; blocos: Bloco[]; fecho?: string };
}) {
  return (
    <div className="min-h-screen bg-areia font-sans text-neutro-800">
      <Cabecalho />

      <HeroDoRoteiro rotulo={rotulo} titulo={titulo} resumo={resumo} />

      <Comparativo />
      <Recursos />
      <Vitrine />
      <Blocos {...conteudo} />
      <ChamadaFinal source={`${slug}_cta`} />
      <Footer />
    </div>
  );
}
