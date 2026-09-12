import React from 'react';
import Marca from './Marca';

/**
 * O topo do site.
 *
 * A marca fica aqui e no rodapé, e em nenhum outro lugar da página: o
 * miolo é do conteúdo. É a mesma disciplina do app, onde a marca aparece
 * em três lugares e sai de cena no fluxo de criação de roteiro.
 */
export default function Cabecalho() {
  return (
    <header className="w-full border-b border-neutro-300/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="/" aria-label="Trix, página inicial">
          <Marca tamanho={30} />
        </a>
        <a
          href="https://app.trix.travel"
          className="font-titulo text-sm font-semibold text-terracota-700 underline-offset-4 transition-colors hover:text-terracota-900 hover:underline"
        >
          Entrar
        </a>
      </div>
    </header>
  );
}
