'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // <-- ADICIONE ESTA LINHA
import { supabase } from '../lib/supabase';

export default function LandingPage() {
  // Estados do Formulário Superior (Hero)
  const [emailHero, setEmailHero] = useState('');
  const [loadingHero, setLoadingHero] = useState(false);
  const [messageHero, setMessageHero] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Estados do Formulário Inferior (Bottom CTA)
  const [emailCTA, setEmailCTA] = useState('');
  const [loadingCTA, setLoadingCTA] = useState(false);
  const [messageCTA, setMessageCTA] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Contador real de inscritos na lista VIP
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .rpc('waitlist_count')
      .then(({ data, error }) => {
        if (error) {
          console.error('Erro ao buscar contador da waitlist:', error);
          return;
        }
        if (typeof data === 'number') setWaitlistCount(data);
      });
  }, []);

  const heroJoinCopy =
    waitlistCount !== null && waitlistCount > 0
      ? `Junte-se a ${waitlistCount} viajantes. Sem spam, descadastre-se quando quiser.`
      : 'Junte-se a outros viajantes. Sem spam, descadastre-se quando quiser.';

  const ctaJoinCopy =
    waitlistCount !== null && waitlistCount > 0
      ? `Junte-se a ${waitlistCount} viajantes. Sem spam, cancele quando quiser.`
      : 'Junte-se a outros viajantes. Sem spam, cancele quando quiser.';

  // Função unificada que recebe qual estado deve atualizar
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
    } catch (err: any) {
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

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-tertiary font-semibold text-sm uppercase tracking-wider">
            Acesso Antecipado Exclusivo
          </span>
          <h1 className="font-outfit text-5xl md:text-6xl font-bold leading-tight text-primary-text">
            Menos planilhas.<br />Mais malas prontas.
          </h1>
          <p className="text-lg text-secondary-text max-w-lg">
            Seu roteiro perfeito de 15 dias criado em segundos. Esqueça as horas perdidas pesquisando em dezenas de abas.
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

          {/* NOVO: Microcopy adicionado no Hero para reduzir atrito */}
          <p className="text-xs text-secondary-text mt-2">
          {heroJoinCopy}
          </p>

          {messageHero && (
            <p className={`text-sm font-medium ${messageHero.type === 'success' ? 'text-success' : 'text-error'}`}>
              {messageHero.text}
            </p>
          )}
        </div>
        <div className="flex-1">
           {/* VÍDEO 1: Roteiro Complexo - LIMPO, sem bordas! */}
           <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full max-w-sm mx-auto mix-blend-multiply outline-none border-none"
          >
            <source src="/demo-roteiro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* COMPARAÇÃO: DOR VS SOLUÇÃO */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl font-bold text-primary-text mb-4">Planejar viagens não precisa ser um trabalho.</h2>
          <p className="text-secondary-text">Veja a diferença entre o método tradicional e a inteligência do Trix.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* O Jeito Antigo */}
          <div className="bg-primary-bg p-8 rounded-2xl border border-alternate opacity-80">
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-6 flex items-center gap-2">
              <span className="text-tertiary">✕</span> O Jeito Antigo
            </h3>
            <ul className="space-y-4 text-secondary-text">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-tertiary opacity-70">▪</span>
                Dezenas de abas abertas no navegador.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-tertiary opacity-70">▪</span>
                Planilhas confusas e links perdidos no WhatsApp.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-tertiary opacity-70">▪</span>
                Medo constante de errar a logística ou a distância.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-tertiary opacity-70">▪</span>
                Horas de pesquisa para cada dia de viagem.
              </li>
            </ul>
          </div>

          {/* Com o Trix */}
          <div className="bg-secondary-bg p-8 rounded-2xl border-2 border-primary shadow-lg relative">
            <div className="absolute -top-3 right-6 bg-primary text-info text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Mágico
            </div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-6 flex items-center gap-2">
              <span className="text-primary">✓</span> Com o Trix
            </h3>
            <ul className="space-y-4 text-secondary-text">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">▪</span>
                Tudo centralizado em uma única interface limpa.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">▪</span>
                Roteiros hiper-personalizados baseados no seu ritmo.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">▪</span>
                IA que calcula deslocamentos e logística real.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-primary">▪</span>
                Pronto para embarcar em menos de 30 segundos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-primary-bg py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-center mb-16 text-primary-text">
            Por que o Trix?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-secondary-bg p-8 rounded-xl shadow-md border border-alternate">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              </div>
              <h3 className="font-outfit text-xl font-semibold mb-3 text-primary-text">Logística à prova de falhas.</h3>
              <p className="text-secondary-text leading-relaxed">
                O Trix não apenas cospe pontos turísticos. Ele entende a logística real para o mundo real, otimizando seu trajeto.
              </p>
            </div>
            <div className="bg-secondary-bg p-8 rounded-xl shadow-md border border-alternate">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="font-outfit text-xl font-semibold mb-3 text-primary-text">O seu ritmo, as suas regras.</h3>
              <p className="text-secondary-text leading-relaxed">
                De uma viagem intensa de mochileiro a um passeio relaxante com a família. O roteiro se adapta à sua vibe.
              </p>
            </div>
            <div className="bg-secondary-bg p-8 rounded-xl shadow-md border border-alternate">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="font-outfit text-xl font-semibold mb-3 text-primary-text">O fim das planilhas.</h3>
              <p className="text-secondary-text leading-relaxed">
                Diga adeus às dezenas de abas abertas e planilhas complexas. Gerencie tudo em uma única interface inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY SECTION (VÍDEO 2) */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row-reverse items-center gap-12 border-b border-alternate">
        <div className="flex-1 space-y-6">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Módulo Discovery
          </span>
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-text">
            Não sabe para onde ir? <br /> Dê match com seu destino.
          </h2>
          <p className="text-lg text-secondary-text max-w-lg">
            Deixe as buscas genéricas para trás. Nosso matchmaker de viagens cruza as experiências que você mais ama com destinos no mundo todo. Descubra sua próxima aventura de forma viciante.
          </p>
        </div>
        <div className="flex-1">
           {/* VÍDEO 2: Módulo Discovery - LIMPO, sem bordas! */}
           <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full max-w-sm mx-auto mix-blend-multiply outline-none border-none"
            >
              <source src="/demo-discovery.mp4" type="video/mp4" />
            </video>
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
        <p className="text-xs text-secondary-text mt-4">{ctaJoinCopy}</p>
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