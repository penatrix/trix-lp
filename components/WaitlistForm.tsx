'use client';

import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

type Props = {
  source: string;
  variant?: 'hero' | 'cta';
  /** Sobre o bloco navy da chamada final, onde o contraste inverte. */
  sobreNavy?: boolean;
};

export default function WaitlistForm({
  source,
  variant = 'hero',
  sobreNavy = false,
}: Props) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

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
        // Era "Você está na lista VIP do Trix": "VIP" é hype e "do Trix"
        // põe a marca no masculino, que a regra da casa não admite.
        // Aqui a confirmação diz o que acontece a seguir, que é o que a
        // pessoa quer saber.
        text: 'Pronto. A gente avisa por e-mail quando abrir a próxima leva.',
        type: 'success',
      });
      setEmail('');
      setConsent(false);
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      setMessage({
        // Erro sem drama, e com a próxima ação visível.
        text: 'Não consegui registrar seu e-mail. Tente de novo em instantes.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  // **A base do CTA é terracota 700, não 500.** Decisão do Paulo de
  // 09/09: branco sobre 500 mede 3,66:1 e reprova em WCAG AA; sobre 700
  // mede 5,73:1. É o único par de cor que o brandbook mandava testar e
  // que reprovava, e o teste automatizado do app trava isso.
  const botao =
    'bg-terracota-700 text-white hover:bg-terracota-900 disabled:opacity-60';

  const campo = sobreNavy
    ? 'border-navy-300 bg-navy-700 text-areia placeholder:text-navy-300 focus:ring-terracota-300'
    : 'border-neutro-300 bg-white text-neutro-950 placeholder:text-neutro-600 focus:ring-terracota-700';

  const consentimento = sobreNavy ? 'text-navy-100' : 'text-neutro-600';

  return (
    <div className={isCentered ? 'text-center' : ''}>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${
          isCentered ? 'mx-auto justify-center' : ''
        }`}
      >
        <label htmlFor={`email-${source}`} className="sr-only">
          Seu e-mail
        </label>
        <input
          id={`email-${source}`}
          type="email"
          placeholder="seu@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`flex-1 rounded-2xl border px-4 py-3 outline-none focus:ring-2 ${campo}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`titulo-secao rounded-2xl px-6 py-3 text-base transition-colors ${botao}`}
        >
          {loading ? 'Enviando…' : 'Quero avisar'}
        </button>
      </form>

      <label
        className={`mt-3 flex max-w-md items-start gap-2 text-xs leading-relaxed ${consentimento} ${
          isCentered ? 'mx-auto justify-center text-left' : ''
        }`}
      >
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 accent-terracota-700"
        />
        Quero receber também conteúdo sobre viagens e outras novidades da
        Trix, além do aviso de lançamento.
      </label>

      {message && (
        <p
          role="status"
          className={`mt-3 text-sm font-semibold ${
            message.type === 'success'
              ? sobreNavy
                ? 'text-terracota-300'
                : 'text-sucesso'
              : sobreNavy
                ? 'text-terracota-300'
                : 'text-erro'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  );
}
