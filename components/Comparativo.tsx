import React from 'react';
import { Confere, Dispensa } from './Icone';

/**
 * O antes e o depois, num bloco só.
 *
 * Estava copiado em quatro páginas, e é por isso que cada erro de copy
 * aparecia quatro vezes: o selo "Mágico" -- palavra da lista de evitar
 * --, o "Com o Trix" no masculino, e "pronto para embarcar em menos de
 * 30 segundos", que é a promessa de tempo que a casa abandonou.
 *
 * Agora a copy mora aqui, uma vez. Quem quiser mudar a frase muda num
 * lugar e ela muda nas quatro.
 */
const ANTES = [
  'Dezenas de abas abertas, e a decisão sempre para amanhã.',
  'Planilha que ninguém atualiza e link perdido no WhatsApp.',
  'Descobrir no lugar que o museu fecha na terça.',
  'Duas horas de pesquisa para cada dia de viagem.',
];

const DEPOIS = [
  'O roteiro dia a dia, com o nome de cada lugar.',
  'Deslocamento calculado entre um ponto e o outro.',
  'Horário e funcionamento conferidos antes de entrar no dia.',
  'Custo estimado por dia, dizendo se é por pessoa ou total.',
];

export default function Comparativo() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <h2 className="titulo-secao text-3xl text-navy-500 md:text-4xl">
          Planejar viagem virou trabalho de escritório.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-neutro-600">
          São 70 dias de pesquisa para 15 de viagem. A Trix devolve esse
          tempo — e explica o critério de cada escolha.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutro-300 bg-neutro-100 p-8">
          <h3 className="titulo-secao mb-6 flex items-center gap-2 text-lg text-neutro-800">
            <Dispensa tamanho={20} className="text-neutro-600" />
            Como é hoje
          </h3>
          <ul className="space-y-4 text-neutro-600">
            {ANTES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutro-300"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* O cartão da Trix ganha a borda navy, que é estrutura. A
            terracota fica reservada para ação -- e neste bloco não há
            ação nenhuma, só comparação. */}
        <div className="rounded-2xl border-2 border-navy-500 bg-white p-8">
          <h3 className="titulo-secao mb-6 flex items-center gap-2 text-lg text-navy-500">
            <Confere tamanho={20} className="text-petroleo" />
            Com a Trix
          </h3>
          <ul className="space-y-4 text-neutro-800">
            {DEPOIS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-petroleo"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
