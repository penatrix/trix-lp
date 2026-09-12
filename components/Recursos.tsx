import React from 'react';
import { Custo, Ritmo, Trajeto } from './Icone';

/**
 * Os três argumentos, e nenhum deles é a tecnologia.
 *
 * A voz da casa põe "sem hype de tecnologia" como um dos quatro
 * princípios: a IA é meio, não argumento. O texto anterior vendia "IA
 * que calcula deslocamentos" e "a inteligência do Trix"; este vende o
 * que chega na mão de quem viaja.
 *
 * E cada frase carrega número, hora ou distância, que é o segundo
 * princípio: sem dado, corta-se a frase.
 */
const RECURSOS = [
  {
    Icone: Trajeto,
    titulo: 'O trajeto, não só o lugar.',
    corpo:
      'Cada dia vem com o deslocamento entre um ponto e o outro, e o ' +
      'critério da escolha: a 2h15 de Dresden, combina com histórico e ' +
      'gastronomia.',
  },
  {
    Icone: Ritmo,
    titulo: 'No seu ritmo, e ele é seu.',
    corpo:
      'De sete paradas por dia a duas e um café longo. O roteiro nasce ' +
      'do ritmo que você declarou, não de uma média de outras pessoas.',
  },
  {
    Icone: Custo,
    titulo: 'Custo que dá para conferir.',
    corpo:
      'Cada dia soma em cinco linhas — passagem, hospedagem, atividades, ' +
      'refeições e transporte local — e diz se o valor é por pessoa ou ' +
      'do grupo todo.',
  },
];

export default function Recursos() {
  return (
    <section className="bg-neutro-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="titulo-secao mb-4 text-3xl text-navy-500 md:text-4xl">
          O que chega na sua mão.
        </h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-neutro-600">
          A Trix organiza, decide e assume a responsabilidade pela escolha.
          E explica o critério — nunca decide sem justificar.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {RECURSOS.map(({ Icone, titulo, corpo }) => (
            <div
              key={titulo}
              className="rounded-2xl border border-neutro-300 bg-white p-8"
            >
              {/* Petróleo é categoria, e é exatamente este uso. Nunca
                  terracota aqui: ela é ação, e um ícone não age. */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-petroleo/10 text-petroleo">
                <Icone tamanho={24} />
              </div>
              <h3 className="titulo-secao mb-3 text-xl text-navy-500">
                {titulo}
              </h3>
              <p className="leading-relaxed text-neutro-600">{corpo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
