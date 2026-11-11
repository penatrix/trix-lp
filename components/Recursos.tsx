import React from 'react';
import { Custo, Ritmo, Trajeto } from './Icone';
import type { Idioma } from '../lib/idioma';

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
const ICONES = [Trajeto, Ritmo, Custo];

const TEXTOS = {
  pt: {
    titulo: 'O que chega na sua mão.',
    resumo:
      'A Trix organiza, decide e assume a responsabilidade pela escolha. E explica o critério — nunca decide sem justificar.',
    itens: [
      {
        titulo: 'O trajeto, não só o lugar.',
        corpo:
          'Cada dia vem com o deslocamento entre um ponto e o outro, e o critério da escolha: a 2h15 de Dresden, combina com histórico e gastronomia.',
      },
      {
        titulo: 'No seu ritmo, e ele é seu.',
        corpo:
          'De sete paradas por dia a duas e um café longo. O roteiro nasce do ritmo que você declarou, não de uma média de outras pessoas.',
      },
      {
        titulo: 'Custo que dá para conferir.',
        corpo:
          'Cada dia soma em cinco linhas — passagem, hospedagem, atividades, refeições e transporte local — e diz se o valor é por pessoa ou do grupo todo.',
      },
    ],
  },
  en: {
    titulo: 'What you get.',
    resumo:
      'Trix organises, decides and takes responsibility for each choice. And it explains why: it never decides without a reason.',
    itens: [
      {
        titulo: 'The route, not just the place.',
        corpo:
          'Every day comes with the travel time between one stop and the next, and the reason for each choice: 2h15 from Dresden, fits history and food.',
      },
      {
        titulo: 'Your pace, and only yours.',
        corpo:
          'From seven stops a day to two and a long coffee. The itinerary follows the pace you chose, not an average of other people’s.',
      },
      {
        titulo: 'Costs you can check.',
        corpo:
          'Each day adds up in five lines (flights, accommodation, activities, meals and local transport) and says whether the amount is per person or for the whole group.',
      },
    ],
  },
};

export default function Recursos({ idioma = 'pt' }: { idioma?: Idioma }) {
  const t = TEXTOS[idioma];
  return (
    <section className="bg-neutro-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="titulo-secao mb-4 text-3xl text-navy-500 md:text-4xl">{t.titulo}</h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-neutro-600">{t.resumo}</p>

        <div className="grid gap-8 md:grid-cols-3">
          {t.itens.map(({ titulo, corpo }, i) => {
            const Icone = ICONES[i];
            return (
              <div key={titulo} className="rounded-2xl border border-neutro-300 bg-white p-8">
                {/* Petróleo é categoria, e é exatamente este uso. Nunca
                    terracota aqui: ela é ação, e um ícone não age. */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-petroleo/10 text-petroleo">
                  <Icone tamanho={24} />
                </div>
                <h3 className="titulo-secao mb-3 text-xl text-navy-500">{titulo}</h3>
                <p className="leading-relaxed text-neutro-600">{corpo}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
