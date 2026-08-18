'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';
import Footer from '../../components/Footer';

export default function GeradorRoteiroPage() {
  const [emailHero, setEmailHero] = useState('');
  const [loadingHero, setLoadingHero] = useState(false);
  const [messageHero, setMessageHero] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const [emailCTA, setEmailCTA] = useState('');
  const [loadingCTA, setLoadingCTA] = useState(false);
  const [messageCTA, setMessageCTA] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleSubscribe = async (
    e: React.FormEvent<HTMLFormElement>,
    emailInput: string,
    setLoading: (state: boolean) => void,
    setMessage: (msg: { text: string; type: 'success' | 'error' } | null) => void,
    setEmail: (text: string) => void
  ) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const formattedEmail = emailInput.trim().toLowerCase();

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: formattedEmail }]);

      if (error) throw error;

      setMessage({
        text: 'Inscrição confirmada! Você está na lista VIP do Trix.',
        type: 'success',
      });
      setEmail('');
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
    <div className="min-h-screen bg-secondary-bg text-primary-text font-sans">
      {/* HEADER */}
      <header className="w-full h-20 flex items-center justify-between px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-org-white-bg.jpeg"
            alt="Trix Travel Logo"
            width={48}
            height={48}
            className="w-12 h-12 rounded-md object-cover shadow-sm"
          />
          <span className="font-outfit font-semibold text-xl text-primary">Trix Travel</span>
        </div>
        <div className="block md:hidden">
          <a
            href="https://app.trix.travel"
            className="text-sm font-medium text-secondary-text hover:text-primary transition-colors"
          >
            Já é Beta? Faça Login
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <span className="text-tertiary font-semibold text-sm uppercase tracking-wider">
          Planejador de Viagem com Inteligência Artificial
        </span>
        <h1 className="font-outfit text-4xl md:text-5xl font-bold leading-tight text-primary-text mt-4 mb-6">
          O gerador de roteiro de viagem que pensa a logística de verdade.
        </h1>
        <p className="text-lg text-secondary-text max-w-2xl mb-8">
          Não é uma lista de lugares bonitos. É um roteiro dia a dia calculado com deslocamento real, no seu ritmo, pronto em segundos.
        </p>

        <form
          onSubmit={(e) => handleSubscribe(e, emailHero, setLoadingHero, setMessageHero, setEmailHero)}
          className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Digite seu melhor e-mail..."
            required
            value={emailHero}
            onChange={(e) => setEmailHero(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-alternate bg-primary-bg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loadingHero}
            className="px-6 py-3 bg-primary text-info font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50"
          >
            {loadingHero ? 'Enviando...' : 'Entrar na Lista VIP'}
          </button>
        </form>
        <p className="text-xs text-secondary-text mt-2">
          Junte-se a outros viajantes. Sem spam, descadastre-se quando quiser.
        </p>
        {messageHero && (
          <p className={`text-sm font-medium mt-2 ${messageHero.type === 'success' ? 'text-success' : 'text-error'}`}>
            {messageHero.text}
          </p>
        )}
      </section>

      {/* CONTEUDO UNICO */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-alternate">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-text mb-4">
          O que separa um gerador de roteiro de verdade de um chatbot genérico
        </h2>
        <p className="text-lg text-secondary-text mb-10 max-w-2xl">
          Pedir &quot;monte um roteiro&quot; pra um chatbot qualquer devolve texto bonito. Não devolve um roteiro que funciona no mundo real.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Geolocalização de verdade, nunca inventada</h3>
            <p className="text-secondary-text leading-relaxed">
              O Trix nunca gera coordenadas por conta própria — ele devolve o nome exato do lugar, e quem resolve a localização é o Google Maps, aberto direto no seu celular. Sem endereço inventado.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Validação de que o lugar está aberto</h3>
            <p className="text-secondary-text leading-relaxed">
              Sugestão de lugar fechado é o pior tipo de erro num roteiro de viagem. Cada sugestão passa por checagem de horário e status antes de chegar até você.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Suas vibes, levadas ao pé da letra</h3>
            <p className="text-secondary-text leading-relaxed">
              Disse que quer ritmo de mochileiro? O roteiro reflete isso de verdade — sem reinterpretar sua preferência do jeito que o modelo &quot;acha&quot; que você quis dizer.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4 text-primary-text">Pronto para viajar melhor?</h2>
        <p className="text-lg text-secondary-text mb-8">
          Junte-se à lista VIP e receba acesso antecipado antes do lançamento oficial.
        </p>
        <form
          onSubmit={(e) => handleSubscribe(e, emailCTA, setLoadingCTA, setMessageCTA, setEmailCTA)}
          className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Digite seu melhor e-mail..."
            required
            value={emailCTA}
            onChange={(e) => setEmailCTA(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-alternate bg-primary-bg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={loadingCTA}
            className="px-6 py-3 bg-primary text-info font-medium rounded-lg hover:opacity-90 transition-opacity shadow-md disabled:opacity-50"
          >
            {loadingCTA ? 'Enviando...' : 'Entrar na Lista VIP'}
          </button>
        </form>
        {messageCTA && (
          <p className={`mt-4 text-sm font-medium ${messageCTA.type === 'success' ? 'text-success' : 'text-error'}`}>
            {messageCTA.text}
          </p>
        )}
        <p className="text-xs text-secondary-text mt-4">Junte-se a outros viajantes. Sem spam, cancele quando quiser.</p>
      </section>

      <Footer />
    </div>
  );
}
