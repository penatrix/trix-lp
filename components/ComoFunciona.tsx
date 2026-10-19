import React from 'react';

/**
 * Os três passos, na ordem do app: vibe, datas, cidades.
 *
 * A ordem parece invertida e é deliberada (CLAUDE.md do app): com a vibe
 * e a duração na mão, o passo das cidades pode justificar o que sugere.
 * Quem já sabe o destino escreve e segue; quem não sabe recebe sugestão.
 *
 * O número do passo é mono e petróleo: é sinalização de progresso, e
 * petróleo é a cor do progresso. Nenhuma terracota aqui -- nada age.
 */
const PASSOS = [
  {
    titulo: 'Diga o que você quer fazer.',
    corpo:
      'Vinhos, centro histórico, praia, dias sem pressa. E o ritmo: duas paradas por dia ou cinco.',
  },
  {
    titulo: 'Diga quando, e com quem.',
    corpo:
      'As datas, ou só quantos dias. Quantas pessoas vão, e o jeito de gastar: Mochila leve, Conforto na medida ou Primeira classe.',
  },
  {
    titulo: 'Escolha as cidades.',
    corpo:
      'Escreva o destino, ou deixe a Trix sugerir as cidades que cabem nesse tempo, com o motivo de cada uma.',
  },
];

export default function ComoFunciona() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <p className="rotulo-secao text-petroleo">Como funciona</p>
      <h2 className="titulo-secao mt-3 max-w-2xl text-3xl text-navy-500 md:text-4xl">
        Três perguntas, e o roteiro sai inteiro.
      </h2>

      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {PASSOS.map((p, i) => (
          <li key={p.titulo} className="border-t-2 border-petroleo pt-5">
            <span className="font-mono text-sm text-petroleo">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="titulo-secao mt-2 text-xl text-navy-500">{p.titulo}</h3>
            <p className="mt-2 leading-relaxed text-neutro-600">{p.corpo}</p>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-2xl leading-relaxed text-neutro-800">
        O que volta é o dia a dia: o nome de cada lugar, o período, como
        chegar, o que reservar antes e quanto custa, dizendo se é por pessoa
        ou do grupo todo.
      </p>
    </section>
  );
}
