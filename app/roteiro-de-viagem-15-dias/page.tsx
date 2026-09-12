import React from 'react';
import PaginaComVideo from '../../components/PaginaComVideo';

export default function Roteiro15DiasPage() {
  return (
    <PaginaComVideo
      slug="roteiro-de-viagem-15-dias"
      rotulo="Roteiro de 15 dias"
      titulo="Quinze dias cabem melhor em três bases do que em oito."
      // Saíram "em segundos", "logística perfeita" e "em um clique": as
      // três vendem a máquina, e a voz da casa não usa a tecnologia como
      // argumento.
      resumo="Uma viagem longa não quebra por falta de lugares para ver. Quebra na conta de quanto deslocamento cabe em cada dia."
      conteudo={{
        titulo: 'O que decide se quinze dias rendem',
        intro:
          'Antes de escolher o que visitar, vale decidir quantas vezes você vai desfazer a mala.',
        blocos: [
          {
            titulo: 'No máximo três bases',
            corpo:
              'Trocar de cidade todo dia é cansaço disfarçado de aventura. Blocos de quatro a cinco dias por base dão tempo de conhecer o lugar, em vez de passar metade da viagem em estação e portão de embarque.',
          },
          {
            titulo: 'Um dia de folga a cada cinco corridos',
            corpo:
              'Voo atrasado, cansaço, imprevisto. Sem uma folga programada, o roteiro inteiro desmorona no primeiro contratempo — e ele sempre vem.',
          },
          {
            titulo: 'Distância no mapa não é tempo no dia',
            corpo:
              'Seis atividades cabem no mapa e não cabem nas horas. O erro mais comum é somar os lugares e esquecer o trajeto entre eles.',
          },
        ],
        fecho:
          'É esse cálculo — quantas bases, quantas folgas, quanto deslocamento cabe num dia — que a Trix faz antes de escrever a primeira linha do roteiro. E o teto é quinze dias, porque acima disso a qualidade do roteiro cai.',
      }}
    />
  );
}
