'use client';

import React, { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY } from './CookieConsent';

export default function AnalyticsGate({ gaId }: { gaId: string }) {
  const [accepted, setAccepted] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
  });

  useEffect(() => {
    const onConsentChange = (e: Event) => {
      const choice = (e as CustomEvent<'accepted' | 'rejected'>).detail;
      setAccepted(choice === 'accepted');
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
  }, []);

  if (!accepted) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
