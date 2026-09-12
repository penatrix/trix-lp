import React from 'react';

export type Bloco = { titulo: string; corpo: string };

/**
 * A seção de texto longo que aparece em seis páginas.
 *
 * A barra à esquerda é neutro 300, e não terracota: terracota é ação, e
 * uma lista de argumentos não age. Foi o tipo de uso que espalhava a cor
 * de ação por toda a página e a fazia perder o significado.
 */
export default function Blocos({
  titulo,
  intro,
  blocos,
  fecho,
}: {
  titulo: string;
  intro: string;
  blocos: Bloco[];
  fecho?: string;
}) {
  return (
    <section className="mx-auto max-w-4xl border-t border-neutro-300/60 px-6 py-16">
      <h2 className="titulo-secao mb-4 text-3xl text-navy-500 md:text-4xl">
        {titulo}
      </h2>
      <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutro-600">
        {intro}
      </p>

      <div className="space-y-8">
        {blocos.map(({ titulo: t, corpo }) => (
          <div key={t} className="border-l-2 border-neutro-300 pl-6">
            <h3 className="titulo-secao mb-2 text-xl text-navy-500">{t}</h3>
            <p className="leading-relaxed text-neutro-600">{corpo}</p>
          </div>
        ))}
      </div>

      {fecho && <p className="mt-10 leading-relaxed text-neutro-800">{fecho}</p>}
    </section>
  );
}
