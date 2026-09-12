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
      <div className="mt-16 py-12 border-t border-neutro-300 text-left">
        {/* Tinha um emoji de avião aqui, que é o mesmo que saiu do
            app na varredura de 09/09 -- e emoji em produto é regra da
            casa. A confirmação agora diz o que acontece a seguir, que é
            o que a pessoa quer saber depois de dar o e-mail. */}
        <h3 className="titulo-secao text-3xl text-navy-500 md:text-4xl mb-4">
          Pronto.
        </h3>
        <p className="text-lg text-neutro-600">
          A gente avisa por e-mail quando abrir a próxima leva do beta.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 py-12 border-t border-neutro-300 text-left">
      <span className="text-petroleo font-semibold text-sm uppercase tracking-wider block mb-3">
        Beta fechado
      </span>
      <h3 className="titulo-secao text-4xl md:text-5xl font-bold text-neutro-950 mb-6 leading-tight">
        São 70 dias planejando<br />uma viagem de 15.
      </h3>
      <p className="text-lg text-neutro-600 mb-8 max-w-2xl">
        A Trix devolve esse tempo: roteiro dia a dia, com os lugares, os trajetos entre eles e o custo estimado de cada dia.
      </p>

      {/* O flex-row com items-stretch garante que o input e o botão tenham exatamente a mesma altura */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4 max-w-xl">
        <input
          type="email"
          required
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-areia border border-neutro-300 rounded-xl px-5 py-4 text-neutro-950 focus:outline-none focus:border-terracota-700 transition-colors placeholder:text-neutro-600"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-terracota-700 text-white font-medium rounded-xl px-8 py-4 hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Enviando…' : 'Quero avisar'}
        </button>
      </form>

      <label className="flex items-start gap-2 mt-4 text-xs text-neutro-600 max-w-xl">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-terracota-700"
        />
        Quero receber também conteúdo sobre viagens e outras novidades da Trix, além do aviso de lançamento.
      </label>

      {status === 'error' && (
        <p className="text-red-500 text-sm mt-4">Ops! Ocorreu um erro. Tente novamente.</p>
      )}
    </div>
  );
}