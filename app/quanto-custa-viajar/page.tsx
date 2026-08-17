'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../lib/supabase';

export default function QuantoCustaViajarPage() {
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
          Orçamento de Viagem
        </span>
        <h1 className="font-outfit text-4xl md:text-5xl font-bold leading-tight text-primary-text mt-4 mb-6">
          Quanto custa viajar? Depende de como você calcula.
        </h1>
        <p className="text-lg text-secondary-text max-w-2xl mb-8">
          A maior fonte de estouro de orçamento não é o que você gasta na viagem — é o que você esqueceu de calcular antes de sair de casa.
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
          Como calcular o orçamento de uma viagem sem se perder
        </h2>
        <p className="text-lg text-secondary-text mb-10 max-w-2xl">
          Antes de olhar preço de passagem, vale separar a conta em partes — é aí que a maioria erra a mão.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Separe custo fixo de custo variável</h3>
            <p className="text-secondary-text leading-relaxed">
              Passagem e hospedagem você define antes de embarcar. Comida, passeio e deslocamento local mudam todo dia — e são justamente os que costumam furar o orçamento.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Confira se o preço é por pessoa ou total</h3>
            <p className="text-secondary-text leading-relaxed">
              É a ambiguidade que mais confunde gente planejando viagem: um preço de hospedagem por pessoa parece metade do custo de um preço total — e não é.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Pesquise sempre em reais, não só na moeda local</h3>
            <p className="text-secondary-text leading-relaxed">
              Câmbio e taxa de cartão internacional mudam a conta rápido. O número que importa é o que sai da sua conta, não o número na etiqueta do outro país.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Reserve uma margem de imprevisto</h3>
            <p className="text-secondary-text leading-relaxed">
              10 a 15% do total, guardado à parte, pra imprevisto que sempre aparece — sem isso, qualquer contratempo vira estresse financeiro no meio da viagem.
            </p>
          </div>
        </div>
        <p className="text-secondary-text mt-10 leading-relaxed">
          O Trix já declara, em cada custo do seu roteiro, se é por pessoa ou total — sem essa ambiguidade que confunde todo mundo.
        </p>
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

      {/* FOOTER */}
      <footer className="bg-secondary-bg py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-semibold text-secondary-text text-lg">Trix Travel</span>
          </div>
          <div className="flex gap-6 text-sm text-secondary-text">
            <a href="mailto:pena@trix.travel?subject=Trix%20Travel%20-%20Contato" className="hover:text-primary transition-colors">Suporte</a>
            <a href="/termos" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
          <div className="text-sm text-secondary-text opacity-80">
            © 2026 Trix Travel. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
