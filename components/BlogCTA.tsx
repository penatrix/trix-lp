'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function BlogCTA() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const { error } = await supabase.from('waitlist').insert([
      {
        email,
        consent_marketing: consent,
        consent_timestamp: new Date().toISOString(),
        consent_source: 'blog_cta',
      },
    ]);

    if (error) {
      console.error('Erro ao salvar e-mail:', error);
      setStatus('error');
    } else {
      setStatus('success');
      setEmail('');
      setConsent(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="mt-16 py-12 border-t border-alternate text-left">
        <h3 className="font-outfit text-3xl md:text-4xl font-bold text-primary-text mb-4">Malas prontas! ✈️</h3>
        <p className="text-lg text-secondary-text">Seu e-mail foi adicionado à nossa lista VIP com sucesso. Fique de olho na sua caixa de entrada.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 py-12 border-t border-alternate text-left">
      <span className="text-tertiary font-semibold text-sm uppercase tracking-wider block mb-3">
        Acesso Antecipado Exclusivo
      </span>
      <h3 className="font-outfit text-4xl md:text-5xl font-bold text-primary-text mb-6 leading-tight">
        Menos planilhas.<br />Mais malas prontas.
      </h3>
      <p className="text-lg text-secondary-text mb-8 max-w-2xl">
        Seu roteiro perfeito de 15 dias criado em segundos. Esqueça as horas perdidas pesquisando em dezenas de abas.
      </p>

      {/* O flex-row com items-stretch garante que o input e o botão tenham exatamente a mesma altura */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4 max-w-xl">
        <input
          type="email"
          required
          placeholder="Digite seu melhor e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-secondary-bg border border-alternate rounded-xl px-5 py-4 text-primary-text focus:outline-none focus:border-primary transition-colors placeholder:text-secondary-text"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-primary text-white font-medium rounded-xl px-8 py-4 hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Enviando...' : 'Entrar na Lista VIP'}
        </button>
      </form>

      <label className="flex items-start gap-2 mt-4 text-xs text-secondary-text max-w-xl">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-primary"
        />
        Quero receber novidades sobre o lançamento do Trix Travel por e-mail.
      </label>

      {status === 'error' && (
        <p className="text-red-500 text-sm mt-4">Ops! Ocorreu um erro. Tente novamente.</p>
      )}
    </div>
  );
}