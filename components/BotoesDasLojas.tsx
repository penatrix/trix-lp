import React from 'react';
import { LINK_APP_STORE, LINK_GOOGLE_PLAY } from '../lib/lojas';

/**
 * Os selos oficiais das duas lojas (06/11, pedido do Paulo: o texto
 * "Baixar na App Store" era tímido demais).
 *
 * Os arquivos são os da Apple (Marketing Tools, pt-br, preto) e do Google
 * (badge pt-br), sem redesenho: as duas marcas proíbem selo refeito,
 * recolorido ou com outro texto. Mesma altura para os dois, como as duas
 * pedem, e nada de terracota por perto: a ação da página continua sendo
 * "Gerar meu roteiro".
 */
export default function BotoesDasLojas({ centralizar = false }: { centralizar?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${centralizar ? 'justify-center' : ''}`}>
      {LINK_APP_STORE && (
        <a href={LINK_APP_STORE} aria-label="Baixar na App Store">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/lojas/app-store-pt-br.svg" alt="Baixar na App Store" className="h-12 w-auto" />
        </a>
      )}
      <a href={LINK_GOOGLE_PLAY} aria-label="Disponível no Google Play">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/lojas/google-play-pt-br.png" alt="Disponível no Google Play" className="h-12 w-auto" />
      </a>
    </div>
  );
}
