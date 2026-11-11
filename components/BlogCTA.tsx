import React from 'react';
import BotoesDasLojas from './BotoesDasLojas';

/**
 * O fecho de cada post do blog.
 *
 * Até 11/11 era a lista de espera do "Beta fechado", com o aviso de
 * lançamento. Com o app nas lojas, o fecho leva ao app: o botão passa
 * pelo /abrir, que manda o celular à loja e o computador ao app na web.
 */
export default function BlogCTA() {
  return (
    <div className="mt-16 py-12 border-t border-neutro-300 text-left">
      <h3 className="titulo-secao text-4xl md:text-5xl font-bold text-neutro-950 mb-6 leading-tight">
        São 70 dias planejando<br />uma viagem de 15.
      </h3>
      <p className="text-lg text-neutro-600 mb-8 max-w-2xl">
        A Trix devolve esse tempo: roteiro dia a dia, com os lugares, os trajetos entre eles e o custo estimado de cada dia.
      </p>
      <a
        href="/abrir"
        className="titulo-secao inline-block rounded-2xl bg-terracota-700 px-6 py-3.5 text-base text-white transition-colors hover:bg-terracota-900"
      >
        Gerar meu roteiro
      </a>
      <p className="mt-3 text-sm text-neutro-600">Acesso grátis, sem cartão. No navegador, no iPhone e no Android.</p>
      <div className="mt-6">
        <BotoesDasLojas />
      </div>
    </div>
  );
}
