import React from 'react';
import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import BotoesDasLojas from '../../components/BotoesDasLojas';
import WaitlistForm from '../../components/WaitlistForm';
import {
  LINK_APP_STORE,
  LINK_APP_WEB,
  LINK_GOOGLE_PLAY,
  LOJAS_NO_AR,
  lojaDoAparelho,
} from '../../lib/lojas';

// Um endereço só para divulgar (e-mail, bio, cartão): trix.travel/baixar.
// Com as lojas no ar, o iPhone vai direto para a App Store e o Android
// para o Google Play; o resto (computador, iPad) vê os dois botões. Antes
// disso, a página manda para o app na web e para a lista de espera.

export const metadata: Metadata = {
  title: 'Baixar o app | Trix',
  description: 'A Trix no iPhone, no Android e no navegador.',
  alternates: { canonical: '/baixar' },
};

export default async function Baixar() {
  if (LOJAS_NO_AR) {
    const loja = lojaDoAparelho((await headers()).get('user-agent') ?? '');
    if (loja === 'apple' && LINK_APP_STORE) redirect(LINK_APP_STORE);
    if (loja === 'google') redirect(LINK_GOOGLE_PLAY);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 font-sans text-neutro-800">
      <main className="space-y-8">
        <h1 className="titulo-secao text-4xl text-navy-500 md:text-5xl">
          {LOJAS_NO_AR ? 'Baixe a Trix' : 'A Trix no seu aparelho'}
        </h1>
        {LOJAS_NO_AR ? (
          <>
            <p className="text-lg leading-relaxed text-neutro-600">
              No iPhone e no Android. No computador, o mesmo roteiro abre no navegador.
            </p>
            <BotoesDasLojas />
          </>
        ) : (
          <>
            <p className="text-lg leading-relaxed text-neutro-600">
              O app ainda não está nas lojas. O roteiro já pode ser gerado no navegador, e o e-mail abaixo
              recebe o aviso quando o app chegar.
            </p>
            <div className="space-y-6">
              <a
                href={LINK_APP_WEB}
                className="titulo-secao inline-block rounded-2xl bg-terracota-700 px-6 py-3 text-base text-white transition-colors hover:bg-terracota-900"
              >
                Gerar meu roteiro
              </a>
              <WaitlistForm source="baixar" variant="hero" />
            </div>
          </>
        )}
        {LOJAS_NO_AR && (
          <p className="text-sm text-neutro-600">
            Prefere o navegador?{' '}
            <a href={LINK_APP_WEB} className="text-terracota-700 hover:underline">
              Abrir no navegador
            </a>
          </p>
        )}
      </main>
    </div>
  );
}
