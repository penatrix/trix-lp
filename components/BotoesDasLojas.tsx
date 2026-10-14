import React from 'react';
import { LINK_APP_STORE, LINK_GOOGLE_PLAY } from '../lib/lojas';

/**
 * Os dois botões das lojas, em texto.
 *
 * Contorno, e não terracota: a ação da página continua sendo uma só
 * ("Gerar meu roteiro"), e terracota é só para ela. Os selos oficiais
 * da Apple e do Google são imagem com regra de uso própria; trocar o
 * texto por eles é decisão da Lais.
 */
export default function BotoesDasLojas({ sobreNavy = false }: { sobreNavy?: boolean }) {
  const estilo = sobreNavy
    ? 'border-areia text-areia hover:bg-navy-700'
    : 'border-navy-500 text-navy-500 hover:bg-navy-100';
  const botao = `titulo-secao inline-block rounded-2xl border px-5 py-3 text-base transition-colors ${estilo}`;
  return (
    <div className="flex flex-wrap gap-3">
      {LINK_APP_STORE && (
        <a href={LINK_APP_STORE} className={botao}>
          Baixar na App Store
        </a>
      )}
      <a href={LINK_GOOGLE_PLAY} className={botao}>
        Baixar no Google Play
      </a>
    </div>
  );
}
