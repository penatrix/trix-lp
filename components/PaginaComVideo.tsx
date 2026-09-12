import React from 'react';
import Blocos, { type Bloco } from './Blocos';
import Cabecalho from './Cabecalho';
import ChamadaFinal from './ChamadaFinal';
import Comparativo from './Comparativo';
import Footer from './Footer';
import Recursos from './Recursos';
import WaitlistForm from './WaitlistForm';

/**
 * O molde das três páginas que espelham a home: hero com vídeo, o antes
 * e depois, os três argumentos, conteúdo próprio e a chamada final.
 *
 * Elas eram 234 linhas cada, quase idênticas entre si e à home. Toda a
 * diferença real cabe nas props abaixo — o resto era markup copiado, e
 * era o markup copiado que multiplicava cada erro de marca por quatro.
 */
export default function PaginaComVideo({
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

      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
        <div className="flex-1 space-y-6">
          <p className="rotulo-secao text-petroleo">{rotulo}</p>
          <h1 className="titulo-hero text-4xl leading-[1.08] text-navy-500 md:text-5xl">
            {titulo}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-neutro-600">
            {resumo}
          </p>
          <WaitlistForm source={`${slug}_hero`} variant="hero" />
        </div>
        <div className="flex-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="O roteiro dia a dia, na tela do aplicativo"
            // `mix-blend-multiply` volta, e não é enfeite: os dois
            // vídeos têm fundo BRANCO. Na página branca antiga isso não
            // aparecia; sobre areia, sem o blend, cada um viraria um
            // retângulo branco no meio da página. Multiply sobre areia
            // apaga o branco e preserva o resto.
            //
            // E a moldura reserva a altura: sem `aspect-ratio` o
            // elemento colapsa até o vídeo carregar, e o hero abre com
            // metade vazia em conexão lenta.
            className="mx-auto w-full max-w-sm mix-blend-multiply"
            style={{ aspectRatio: '9 / 16' }}
          >
            <source src="/demo-roteiro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <Comparativo />
      <Recursos />
      <Blocos {...conteudo} />
      <ChamadaFinal source={`${slug}_cta`} />
      <Footer />
    </div>
  );
}
