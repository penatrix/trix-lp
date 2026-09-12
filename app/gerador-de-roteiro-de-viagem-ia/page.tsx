import React from 'react';
import PaginaPilar from '../../components/PaginaPilar';

export default function GeradorRoteiroPage() {
  return (
    <PaginaPilar
      slug="gerador-de-roteiro-de-viagem-ia"
      rotulo="Como funciona"
      titulo="Um roteiro que aguenta o mundo real."
      // Saiu o "pronto em segundos": promessa de tempo deprecia o valor
      // percebido, e a dor a atacar é a pesquisa que o produto elimina.
      resumo="Não é uma lista de lugares bonitos. É o dia a dia com o nome de cada lugar, o deslocamento entre eles e o custo estimado — no ritmo que você declarou."
      secao="O que separa um roteiro de um texto bonito"
      introSecao="Pedir “monte um roteiro” devolve parágrafos agradáveis. Não devolve um dia que funciona quando você está lá, com mala e horário."
      blocos={[
        {
          titulo: 'A localização é do Google, não do modelo',
          corpo:
            'A Trix nunca gera coordenada por conta própria. Ela devolve o nome exato do lugar, e quem resolve a localização é o Google Maps, aberto direto no seu aparelho. Endereço inventado é o erro que não acontece aqui, e isso é decisão de arquitetura, não preferência.',
        },
        {
          titulo: 'Lugar fechado é o pior erro possível',
          corpo:
            'Chegar e encontrar a porta trancada estraga o dia inteiro, não a próxima hora. Cada sugestão passa por checagem de horário e funcionamento antes de entrar no seu roteiro.',
        },
        {
          titulo: 'A sua vibe, ao pé da letra',
          corpo:
            'Disse que quer ritmo de maratonista? O dia vem cheio. Nada de reinterpretar sua preferência pelo que o modelo acha que você quis dizer — termo de ritmo é lido literalmente.',
        },
        {
          titulo: 'O custo diz de quem é',
          corpo:
            'Cada valor declara se é por pessoa ou do grupo todo, e o dia soma normalizado. Somar sem normalizar devolve um número que não é nem uma coisa nem outra.',
        },
      ]}
      fecho="A Trix organiza, decide e explica o critério — a 2h15 de Dresden, combina com histórico e gastronomia. Nunca decide sem justificar."
    />
  );
}
