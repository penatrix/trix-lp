'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

type Props = {
  source: string;
  variant?: 'hero' | 'cta';
};

export default function WaitlistForm({ source, variant = 'hero' }: Props) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const isCentered = variant === 'cta';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formattedEmail = email.trim().toLowerCase();

    try {
      const { error } = await supabase.from('waitlist').insert([
        {
          email: formattedEmail,
          consent_marketing: consent,
          consent_timestamp: new Date().toISOString(),
          consent_source: source,
        },
      ]);

      if (error) throw error;

      setMessage({
        text: 'Inscrição confirmada! Você está na lista VIP do Trix.',
        type: 'success',
      });
      setEmail('');
      setConsent(false);
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      setMessage({
        text: 'Erro ao cadastrar e-mail. Tente novamente.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={isCentered ? 'text-center' : ''}>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${isCentered ? 'justify-center mx-auto' : ''}`}
      >
        <input
          type="email"
          placeholder="Digite seu melhor e-mail..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-alternate bg-primary-bg focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-primary text-info font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50"
        >
          {loading ? 'Enviando...' : 'Entrar na Lista VIP'}
        </button>
      </form>

      <label className={`flex items-start gap-2 mt-3 text-xs text-secondary-text max-w-md ${isCentered ? 'mx-auto justify-center' : ''}`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-primary"
        />
        Quero receber novidades sobre o lançamento do Trix Travel por e-mail.
      </label>

      {message && (
        <p className={`text-sm font-medium mt-2 ${message.type === 'success' ? 'text-success' : 'text-error'}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}
