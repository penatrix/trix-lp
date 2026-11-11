import React from 'react';
import type { Idioma } from '../lib/idioma';

/**
 * As objeções de quem chega pela primeira vez, respondidas antes de
 * virarem dúvida (20/10).
 *
 * **Sem preço**, por decisão do Paulo: a página vende o valor antes de
 * falar de plano. E **sem "testar"** (20/10): a Trix é grátis, com
 * alguns recursos pagos, e não um teste que acaba.
 *
 * Cada resposta é o que o app faz hoje, e nada além: "confere no Google"
 * é a validação de lugares do backend; "de novo com as datas" é a
 * checagem de datas. Promessa que o app não cumpre vira reclamação.
 *
 * Em inglês (11/11), os custos dizem que saem em reais, que é a moeda do
 * app hoje, e a Política de Privacidade avisa que está em português.
 */
type Pergunta = { p: string; r: string; link?: { href: string; texto: string } };

const TEXTOS: Record<Idioma, { rotulo: string; titulo: string; perguntas: Pergunta[] }> = {
  pt: {
    rotulo: 'Perguntas',
    titulo: 'Antes de começar.',
    perguntas: [
      {
        p: 'Como usar a Trix?',
        r: 'Gere seu roteiro, crie sua conta e pronto: ele fica salvo para você ajustar, dividir com quem vai junto e consultar na viagem. O acesso é grátis e não pede cartão.',
      },
      {
        p: 'A Trix é uma agência de viagens?',
        r: 'Não. A Trix é uma empresa de tecnologia: monta o roteiro e explica cada escolha. Ela não vende pacote nem passagem, e você reserva onde preferir.',
      },
      {
        p: 'E se o lugar estiver fechado?',
        r: 'Antes de entrar no roteiro, cada lugar é conferido no Google: se está funcionando e se abre no período do dia. Quando você define as datas, a Trix confere de novo o dia da semana e os feriados da cidade, e troca o que não abre.',
      },
      {
        p: 'Os custos são confiáveis?',
        r: 'São estimativas, e cada uma diz se é por pessoa ou do grupo todo. O custo do dia soma tudo para o grupo. Quando o roteiro não tem cidade de origem, o total diz que não inclui a passagem.',
      },
      {
        p: 'Funciona no computador?',
        r: 'Sim. No computador o roteiro abre em três colunas: os dias, o dia escolhido e o mapa do trajeto daquele dia. No celular, abre no navegador.',
      },
      {
        p: 'Dá para planejar com quem vai junto?',
        r: 'Dá. Convide as pessoas por link, e todo mundo vê o mesmo roteiro.',
      },
      {
        p: 'O que acontece com os meus dados?',
        r: 'Eles servem para montar os seus roteiros. Excluir a conta apaga tudo, de forma permanente.',
        link: { href: '/privacidade', texto: 'Política de Privacidade' },
      },
    ],
  },
  en: {
    rotulo: 'Questions',
    titulo: 'Before you start.',
    perguntas: [
      {
        p: 'How do I use Trix?',
        r: 'Generate your itinerary, create your account and you are set: it stays saved so you can adjust it, share it with whoever is coming and check it during the trip. It is free and needs no card.',
      },
      {
        p: 'Is Trix a travel agency?',
        r: 'No. Trix is a technology company: it builds the itinerary and explains each choice. It does not sell packages or flights, and you book wherever you prefer.',
      },
      {
        p: 'What if a place is closed?',
        r: 'Before it goes into the itinerary, every place is checked on Google: whether it is open for business and whether it opens at that time of day. When you set your dates, Trix checks the day of the week and the city’s public holidays again, and swaps whatever will not be open.',
      },
      {
        p: 'Are the costs reliable?',
        r: 'They are estimates, and each one says whether it is per person or for the whole group. The cost of the day adds everything up for the group. When the itinerary has no home city, the total says it does not include flights. For now, costs are shown in Brazilian reais (R$).',
      },
      {
        p: 'Does it work on a computer?',
        r: 'Yes. On a computer the itinerary opens in three columns: the days, the selected day and the map of that day’s route. On your phone, use the app or the browser.',
      },
      {
        p: 'Can I plan with the people coming along?',
        r: 'Yes. Invite them by link, and everyone sees the same itinerary.',
      },
      {
        p: 'What happens to my data?',
        r: 'It is used to build your itineraries. Deleting your account erases everything, permanently.',
        link: { href: '/en/privacy', texto: 'Privacy Policy' },
      },
    ],
  },
};

export default function PerguntasFrequentes({ idioma = 'pt' }: { idioma?: Idioma }) {
  const t = TEXTOS[idioma];
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="rotulo-secao text-petroleo">{t.rotulo}</p>
      <h2 className="titulo-secao mt-3 text-3xl text-navy-500 md:text-4xl">{t.titulo}</h2>
      <div className="mt-10 divide-y divide-neutro-300 border-y border-neutro-300">
        {t.perguntas.map(({ p, r, link }) => (
          <details key={p} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
              <span className="titulo-secao text-lg text-navy-500">{p}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-neutro-600 transition-transform group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-neutro-600">
              {r}
              {link && (
                <>
                  {' '}
                  <a href={link.href} className="text-terracota-700 underline underline-offset-4">
                    {link.texto}
                  </a>
                  .
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
