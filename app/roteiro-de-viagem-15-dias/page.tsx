'use client';

import React from 'react';
import Image from 'next/image'; // <-- ADICIONE ESTA LINHA
import Footer from '../../components/Footer';
import WaitlistForm from '../../components/WaitlistForm';

export default function LandingPage() {
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
        Gerador de Roteiros com IA
        </span>
        <h1 className="font-outfit text-5xl md:text-6xl font-bold leading-tight text-primary-text">
        Crie seu roteiro de viagem de 15 dias em segundos.
        </h1>
        <p className="text-lg text-secondary-text max-w-lg">
        Pare de quebrar a cabeça montando rotas dia a dia. A inteligência artificial do Trix Travel planeja a logística perfeita da sua viagem em um clique.
        </p>
          
          <WaitlistForm source="roteiro-de-viagem-15-dias_hero" variant="hero" />
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

      {/* CONTEUDO UNICO: COMO ESTRUTURAR 15 DIAS */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-text mb-4">
          Como estruturar um roteiro de 15 dias que funciona
        </h2>
        <p className="text-lg text-secondary-text mb-10 max-w-2xl">
          15 dias é o formato mais comum de viagem longa: tempo suficiente pra não sentir que só bateu foto de longe, curto o bastante pra não pedir um mês de folga. Mas é fácil errar a mão. Alguns princípios que valem pra qualquer destino:
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Divida em no máximo 3 bases</h3>
            <p className="text-secondary-text leading-relaxed">
              Trocar de cidade todo dia é exaustão disfarçada de aventura. Blocos de 4 a 5 dias por base dão tempo real de conhecer o lugar, sem passar metade da viagem fazendo e desfazendo mala.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Reserve um dia de amortecedor a cada 5 dias corridos</h3>
            <p className="text-secondary-text leading-relaxed">
              Voo atrasado, cansaço, imprevisto de última hora — sem uma folga programada, o roteiro inteiro desmorona no primeiro contratempo real.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Não confie só na distância no mapa</h3>
            <p className="text-secondary-text leading-relaxed">
              Seis atividades cabem no mapa, mas nem sempre cabem no dia — o erro mais comum é ignorar o deslocamento real entre cada ponto.
            </p>
          </div>
        </div>
        <p className="text-secondary-text mt-10 leading-relaxed">
          É exatamente esse tipo de cálculo — quantas bases, quantos dias de descanso, quanto deslocamento cabe em cada dia — que a IA do Trix faz por você em segundos, considerando a logística real do seu destino.
        </p>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4 text-primary-text">Pronto para viajar melhor?</h2>
        <p className="text-lg text-secondary-text mb-8">
          Junte-se à lista VIP e receba acesso antecipado antes do lançamento oficial.
        </p>
        <WaitlistForm source="roteiro-de-viagem-15-dias_cta" variant="cta" />
      </section>

      <Footer />
    </div>
  );
}