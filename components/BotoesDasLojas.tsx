import React from 'react';
import { LINK_APP_STORE, LINK_GOOGLE_PLAY } from '../lib/lojas';
import type { Idioma } from '../lib/idioma';

/**
 * Os selos oficiais das duas lojas (06/11, pedido do Paulo: o texto
 * "Baixar na App Store" era tímido demais).
 *
 * Os arquivos são os da Apple (Marketing Tools, preto) e do Google
 * (badge), em pt-br e, desde 11/11, em inglês, sem redesenho: as duas
 * marcas proíbem selo refeito, recolorido ou com outro texto. Mesma
 * altura para os dois, como as duas pedem, e nada de terracota por
 * perto: a ação da página continua sendo "Gerar meu roteiro". O PNG do
 * Google traz margem transparente em cima e embaixo (29 de 250 px); por
 * isso ele é maior e encolhe a margem, e o selo visível fica com os
 * mesmos 48 px do da Apple.
 */
const SELOS = {
  pt: {
    apple: '/lojas/app-store-pt-br.svg',
    appleTexto: 'Baixar na App Store',
    google: '/lojas/google-play-pt-br.png',
    googleTexto: 'Disponível no Google Play',
  },
  en: {
    apple: '/lojas/app-store-en-us.svg',
    appleTexto: 'Download on the App Store',
    google: '/lojas/google-play-en.png',
    googleTexto: 'Get it on Google Play',
  },
};

export default function BotoesDasLojas({
  centralizar = false,
  idioma = 'pt',
}: {
  centralizar?: boolean;
  idioma?: Idioma;
}) {
  const s = SELOS[idioma];
  return (
    <div className={`flex flex-wrap items-center gap-3 ${centralizar ? 'justify-center' : ''}`}>
      {LINK_APP_STORE && (
        <a href={LINK_APP_STORE} aria-label={s.appleTexto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.apple} alt={s.appleTexto} className="h-12 w-auto" />
        </a>
      )}
      <a href={LINK_GOOGLE_PLAY} aria-label={s.googleTexto}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.google} alt={s.googleTexto} className="-my-[7px] h-[62px] w-auto" />
      </a>
    </div>
  );
}
