'use client';

import React, { useEffect, useState } from 'react';

export const COOKIE_CONSENT_KEY = 'trix_cookie_consent';
export const COOKIE_CONSENT_EVENT = 'trix:consent-changed';

export default function CookieConsent() {
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-alternate bg-secondary-bg shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
        <p className="text-sm text-secondary-text flex-1">
          Usamos cookies estritamente necessários e, mediante seu consentimento, o Google Analytics para entender como as pessoas navegam pelo site. Você pode aceitar ou recusar os cookies de análise a qualquer momento.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose('rejected')}
            className="px-5 py-2.5 rounded-lg border border-alternate text-primary-text font-medium hover:bg-primary-bg transition-colors"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="px-5 py-2.5 rounded-lg bg-primary text-info font-medium hover:opacity-90 transition-opacity"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
