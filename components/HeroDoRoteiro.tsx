import React from 'react';
import DiaDeRoteiro from './DiaDeRoteiro';

/**
 * O topo das páginas de entrada: a promessa à esquerda e um dia de
 * roteiro de verdade à direita (20/10).
 *
 * **A ação é uma só: gerar o roteiro.** A lista de espera saiu do topo:
 * ela é o aviso das lojas, e mora na chamada final. Duas ações no hero,
 * uma delas para "mais tarde", dividiam a atenção do único botão que
 * importa.
 *
 * E a linha embaixo do botão destrava o clique sem falar de plano: o
 * primeiro roteiro é grátis e não pede cartão. Preço vem depois do
 * valor (Paulo, 20/10).
 */
export default function HeroDoRoteiro({
  rotulo,
  titulo,
  resumo,
}: {
  rotulo?: string;
  titulo: React.ReactNode;
  resumo: string;
}) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-14 md:grid-cols-2 md:pt-20">
      <div className="space-y-6">
        {rotulo && <p className="rotulo-secao text-petroleo">{rotulo}</p>}
        <h1 className="titulo-hero text-4xl leading-[1.06] text-navy-500 md:text-6xl">
          {titulo}
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-neutro-600">{resumo}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
          <a
            href="https://app.trix.travel"
            className="titulo-secao inline-block rounded-2xl bg-terracota-700 px-6 py-3.5 text-base text-white transition-colors hover:bg-terracota-900"
          >
            Gerar meu roteiro
          </a>
          <a
            href="#roteiros"
            className="titulo-secao text-base text-navy-500 underline-offset-4 hover:underline"
          >
            Ver roteiros prontos
          </a>
        </div>
        <p className="text-sm text-neutro-600">
          Seu primeiro roteiro é grátis e não pede cartão.
        </p>
      </div>
      <DiaDeRoteiro />
    </section>
  );
}
