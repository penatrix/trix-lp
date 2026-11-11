import React from 'react';
import BotoesDasLojas from './BotoesDasLojas';
import { LOJAS_NO_AR } from '../lib/lojas';
import type { Idioma } from '../lib/idioma';

/**
 * As lojas logo depois do roteiro de exemplo (06/11). Até aqui elas só
 * apareciam no fecho da página, e quem chegava pelo celular não via que
 * o app existe.
 *
 * Faixa e não bloco: borda em cima e embaixo, sem cor cheia, para não
 * competir com o "Gerar meu roteiro" do topo.
 */
export default function FaixaDasLojas({ idioma = 'pt' }: { idioma?: Idioma }) {
  if (!LOJAS_NO_AR) return null;
  const en = idioma === 'en';
  return (
    <section className="border-y border-neutro-300/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="rotulo-secao text-petroleo">
            {en ? 'On iPhone and Android' : 'No iPhone e no Android'}
          </p>
          <p className="text-lg leading-relaxed text-neutro-600">
            {en
              ? 'Your whole itinerary in your pocket, in one app.'
              : 'O roteiro inteiro no bolso, num app só.'}
          </p>
        </div>
        <BotoesDasLojas idioma={idioma} />
      </div>
    </section>
  );
}
