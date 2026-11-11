import React from 'react';
import Marca from './Marca';
import type { Idioma } from '../lib/idioma';

/**
 * O topo do site.
 *
 * A marca fica aqui e no rodapé, e em nenhum outro lugar da página: o
 * miolo é do conteúdo. É a mesma disciplina do app, onde a marca aparece
 * em três lugares e sai de cena no fluxo de criação de roteiro.
 *
 * Desde 11/11 o topo da home tem o seletor PT/EN (`seletor`): ele leva à
 * outra versão e grava a escolha (`app/idioma`). Fora da home não há
 * outra versão, e o seletor não aparece.
 */
export default function Cabecalho({
  idioma = 'pt',
  seletor = false,
}: {
  idioma?: Idioma;
  seletor?: boolean;
}) {
  const en = idioma === 'en';
  return (
    <header className="w-full border-b border-neutro-300/60">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href={en ? '/en' : '/'} aria-label={en ? 'Trix, home' : 'Trix, página inicial'}>
          <Marca tamanho={30} />
        </a>
        <div className="flex items-center gap-6">
          {seletor && (
            <a
              href={en ? '/idioma/pt' : '/idioma/en'}
              hrefLang={en ? 'pt-BR' : 'en'}
              lang={en ? 'pt-BR' : 'en'}
              aria-label={en ? 'Ver em português' : 'View in English'}
              className="font-mono text-xs uppercase tracking-[0.06em] text-neutro-600 underline-offset-4 transition-colors hover:text-navy-500 hover:underline"
            >
              {en ? 'PT' : 'EN'}
            </a>
          )}
          <a
            href="/abrir"
            className="font-titulo text-sm font-semibold text-terracota-700 underline-offset-4 transition-colors hover:text-terracota-900 hover:underline"
          >
            {en ? 'Sign in' : 'Entrar'}
          </a>
        </div>
      </div>
    </header>
  );
}
