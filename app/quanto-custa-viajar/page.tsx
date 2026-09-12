import React from 'react';
import PaginaPilar from '../../components/PaginaPilar';

export default function QuantoCustaViajarPage() {
  return (
    <PaginaPilar
      slug="quanto-custa-viajar"
      rotulo="Orçamento"
      titulo="Quanto custa viajar depende de como você calcula."
      resumo="A maior fonte de estouro não é o que se gasta na viagem. É o que ficou de fora da conta antes de sair de casa."
      secao="Como montar o orçamento sem se perder"
      introSecao="Antes de olhar preço de passagem, vale separar a conta em partes. É aí que a maioria erra a mão."
      blocos={[
        {
          titulo: 'Separe o fixo do variável',
          corpo:
            'Passagem e hospedagem você fecha antes de embarcar. Comida, passeio e transporte local mudam todo dia — e são justamente os que furam o orçamento.',
        },
        {
          titulo: 'Confira se o preço é por pessoa ou total',
          corpo:
            'É a ambiguidade que mais confunde quem planeja: uma diária por pessoa parece metade de uma diária total, e não é. Um roteiro que não declara isso devolve uma soma que não significa nada.',
        },
        {
          titulo: 'Pesquise em reais, não só na moeda local',
          corpo:
            'Câmbio e taxa de cartão internacional mudam a conta rápido. O número que importa é o que sai da sua conta, não o da etiqueta.',
        },
        {
          titulo: 'Guarde de 10 a 15% à parte',
          corpo:
            'Margem de imprevisto não é luxo: sem ela, qualquer contratempo vira problema financeiro no meio da viagem.',
        },
      ]}
      fecho="Cada custo do roteiro da Trix declara se é por pessoa ou do grupo todo, e o total do dia já vem normalizado — sem a ambiguidade que confunde a conta."
    />
  );
}
