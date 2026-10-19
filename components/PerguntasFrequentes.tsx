import React from 'react';

/**
 * As objeções de quem chega pela primeira vez, respondidas antes de
 * virarem dúvida (20/10).
 *
 * **Sem preço**, por decisão do Paulo: a página vende o valor antes de
 * falar de plano. A única coisa dita sobre dinheiro é a que destrava o
 * primeiro roteiro -- que ele é grátis e não pede cartão.
 *
 * Cada resposta é o que o app faz hoje, e nada além: "confere no Google"
 * é a validação de lugares do backend; "de novo com as datas" é a
 * checagem de datas. Promessa que o app não cumpre vira reclamação.
 */
const PERGUNTAS = [
  {
    p: 'Preciso pagar para testar?',
    r: 'Não. Seu primeiro roteiro é grátis e não pede cartão. Para guardar o roteiro, você cria uma conta com o seu e-mail.',
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
];

export default function PerguntasFrequentes() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="rotulo-secao text-petroleo">Perguntas</p>
      <h2 className="titulo-secao mt-3 text-3xl text-navy-500 md:text-4xl">
        Antes de começar.
      </h2>
      <div className="mt-10 divide-y divide-neutro-300 border-y border-neutro-300">
        {PERGUNTAS.map(({ p, r, link }) => (
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
