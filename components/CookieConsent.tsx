'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const COOKIE_CONSENT_KEY = 'trix_cookie_consent';
export const COOKIE_CONSENT_EVENT = 'trix:consent-changed';

/**
 * Em `/en` (11/11) o aviso sai em inglês. Ele mora no layout, que é o
 * mesmo para as duas homes, então o idioma vem do endereço.
 */
const TEXTOS = {
  pt: {
    texto:
      'Usamos cookies estritamente necessários e, mediante seu consentimento, o Google Analytics para entender como as pessoas navegam pelo site. Você pode aceitar ou recusar os cookies de análise a qualquer momento.',
    recusar: 'Recusar',
    aceitar: 'Aceitar',
  },
  en: {
    texto:
      'We use strictly necessary cookies and, with your consent, Google Analytics to understand how people use the site. You can accept or decline analytics cookies at any time.',
    recusar: 'Decline',
    aceitar: 'Accept',
  },
};

export default function CookieConsent() {
  const caminho = usePathname();
  const t = caminho === '/en' || caminho?.startsWith('/en/') ? TEXTOS.en : TEXTOS.pt;
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return stored !== 'accepted' && stored !== 'rejected';
  });

  useEffect(() => {
    const reviewAgain = () => setVisible(true);
    window.addEventListener('trix:review-cookies', reviewAgain);
    return () => window.removeEventListener('trix:review-cookies', reviewAgain);
  }, []);

  const choose = (choice: 'accepted' | 'rejected') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-neutro-300 bg-areia shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-neutro-600 flex-1">{t.texto}</p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="px-5 py-2.5 rounded-lg border border-neutro-300 text-neutro-950 font-medium hover:bg-neutro-100 transition-colors"
          >
            {t.recusar}
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="px-5 py-2.5 rounded-lg bg-terracota-700 text-white font-medium hover:opacity-90 transition-opacity"
          >
            {t.aceitar}
          </button>
        </div>
      </div>
    </div>
  );
}
