import React from 'react';
import PaginaComVideo from '../../components/PaginaComVideo';

export default function AppPlanejarViagensPage() {
  return (
    <PaginaComVideo
      slug="app-para-planejar-viagens"
      rotulo="Ferramentas"
      titulo="Planilha organiza o que você já decidiu."
      resumo="O trabalho de viagem não é anotar: é pesquisar, comparar e decidir. A Trix faz essa parte e mostra o critério."
      conteudo={{
        titulo: 'Planilha, app de notas, chatbot ou Trix',
        intro:
          'Todo mundo já tentou organizar uma viagem em pelo menos uma dessas. Onde cada uma para:',
        blocos: [
          {
            titulo: 'Planilha',
            corpo:
              'Guarda bem o que você já decidiu e não decide nada por você. Toda pesquisa e todo cálculo de deslocamento continuam sendo trabalho manual, do zero.',
          },
          {
            titulo: 'App de notas',
            corpo:
              'Visual melhor, mais fácil de compartilhar. Mas continua sendo você quem pesquisa, decide e monta a lógica de cada dia.',
          },
          {
            titulo: 'Chatbot genérico',
            corpo:
              'Devolve texto agradável e lugares plausíveis — inclusive os que fecharam, os que não existem e os que ficam a três horas do que ele sugeriu para a mesma tarde.',
          },
          {
            titulo: 'Trix',
            corpo:
              'Devolve o dia a dia com nome de lugar, trajeto entre eles, horário conferido e custo estimado que declara se é por pessoa ou do grupo todo.',
          },
        ],
      }}
    />
  );
}
