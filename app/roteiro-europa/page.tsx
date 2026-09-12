import React from 'react';
import PaginaComVideo from '../../components/PaginaComVideo';

export default function RoteiroEuropaPage() {
  return (
    <PaginaComVideo
      slug="roteiro-europa"
      rotulo="Europa"
      titulo="Trens, voos curtos e fronteiras, na ordem certa."
      resumo="Numa viagem por vários países, o que estoura o orçamento e o humor não são os lugares. É o que acontece entre eles."
      conteudo={{
        titulo: 'Três erros que encarecem um roteiro pela Europa',
        intro:
          'Nenhum deles aparece enquanto você monta a rota. Todos aparecem no dia.',
        blocos: [
          {
            titulo: 'Subestimar o deslocamento entre países',
            corpo:
              'No mapa parece perto. Na prática entram o tempo de conexão, o trajeto até a estação ou o aeroporto, e o trem que não é tão rápido quanto o nome sugere.',
          },
          {
            titulo: 'Ignorar a regra dos 90 dias do Espaço Schengen',
            corpo:
              'Quem emenda vários países europeus numa viagem longa precisa somar os dias dentro do bloco inteiro, não país por país. A conta errada aqui não custa dinheiro: custa entrada.',
          },
          {
            titulo: 'Copiar uma rota pronta da internet',
            corpo:
              'Paris–Amsterdã–Berlim em dez dias pode ser ótimo para outra pessoa. O que decide é se aquele ritmo de deslocamento bate com o seu, não com o de quem escreveu o texto.',
          },
        ],
        fecho:
          'A Trix calcula o trajeto entre cada par de cidades antes de dizer quantos dias cada uma merece — e diz por que sugeriu cada uma.',
      }}
    />
  );
}
