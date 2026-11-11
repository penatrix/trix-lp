'use client';

import React from 'react';
import Marca from './Marca';
import type { Idioma } from '../lib/idioma';

/**
 * Em inglês (11/11) a privacidade aponta para a versão em inglês
 * (`/en/privacy`); suporte, termos e exclusão de conta só existem em
 * português, e o rótulo avisa.
 */
const TEXTOS = {
  pt: {
    suporte: 'Suporte',
    linkPrivacidade: '/privacidade',
    termos: 'Termos de Uso',
    privacidade: 'Política de Privacidade',
    excluir: 'Excluir conta',
    cookies: 'Preferências de Cookies',
    empresa: 'Empresa de tecnologia. Não somos agência de viagens.',
    aviso: '',
  },
  en: {
    suporte: 'Support',
    linkPrivacidade: '/en/privacy',
    termos: 'Terms of Use',
    privacidade: 'Privacy Policy',
    excluir: 'Delete account',
    cookies: 'Cookie preferences',
    empresa: 'A technology company. We are not a travel agency.',
    aviso: 'Support, Terms and account deletion pages are in Portuguese.',
  },
};

export default function Footer({ idioma = 'pt' }: { idioma?: Idioma }) {
  const t = TEXTOS[idioma];
  const reviewCookies = () => {
    window.dispatchEvent(new Event('trix:review-cookies'));
  };

  return (
    <footer className="border-t border-neutro-300/60 bg-areia py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <Marca tamanho={24} />

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutro-600">
          <a href="/suporte" className="transition-colors hover:text-terracota-700">
            {t.suporte}
          </a>
          <a href="/termos" className="transition-colors hover:text-terracota-700">
            {t.termos}
          </a>
          <a href={t.linkPrivacidade} className="transition-colors hover:text-terracota-700">
            {t.privacidade}
          </a>
          <a href="/excluir-conta" className="transition-colors hover:text-terracota-700">
            {t.excluir}
          </a>
          <button
            type="button"
            onClick={reviewCookies}
            className="transition-colors hover:text-terracota-700"
          >
            {t.cookies}
          </button>
        </nav>

        {/* "Empresa de tecnologia, não agência de viagens" é distinção
            deliberada e juridicamente relevante -- CNAE de tecnologia,
            fora do CADASTUR. O rodapé é onde ela cabe sem virar
            discurso. */}
        <p className="text-center text-xs leading-relaxed text-neutro-600 md:text-right">
          © 2026 Trix
          <br />
          {t.empresa}
          {t.aviso && (
            <>
              <br />
              {t.aviso}
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
