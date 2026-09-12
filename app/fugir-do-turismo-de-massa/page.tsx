import React from 'react';
import PaginaPilar from '../../components/PaginaPilar';

export default function FugirTurismoMassaPage() {
  return (
    <PaginaPilar
      slug="fugir-do-turismo-de-massa"
      rotulo="Fora do óbvio"
      titulo="Viajar sem virar estatística de guia turístico."
      resumo="Fugir do turismo de massa não é caçar lugar secreto. É não gastar metade do seu tempo numa fila para ver o que todo mundo já viu na mesma foto."
      secao="Como sair do roteiro óbvio sem se perder"
      introSecao="O problema nunca foi visitar lugar famoso. É visitar só os famosos, e no mesmo horário que todo mundo."
      blocos={[
        {
          // Era «Nem todo "imperdível" vale a fila». "Imperdível" está na
          // lista de evitar, e usá-la entre aspas ainda é usá-la.
          titulo: 'Nem toda parada obrigatória vale a fila',
          corpo:
            'Às vezes existe uma alternativa a dez minutos dali, com metade da espera e o mesmo que se foi ver. Ninguém acha porque não é o primeiro resultado da busca.',
        },
        {
          titulo: 'Lista de blog é igual para todo mundo',
          corpo:
            'Os “top 10” de um destino são os mesmos para qualquer pessoa que pesquisar aquele nome. Um roteiro que parte do que você declarou chega a lugares diferentes — na mesma cidade.',
        },
        {
          titulo: 'Ritmo pesa tanto quanto destino',
          corpo:
            'Sair do óbvio também é não empacotar o seu dia no passo de quem viaja de um jeito completamente diferente do seu.',
        },
      ]}
      fecho="A Trix monta o roteiro a partir das vibes e do ritmo que você declarou, não de uma lista padrão — e diz por que cada lugar entrou."
    />
  );
}
