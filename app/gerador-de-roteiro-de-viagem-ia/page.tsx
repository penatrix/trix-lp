'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import WaitlistForm from '../../components/WaitlistForm';

export default function GeradorRoteiroPage() {
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

        <WaitlistForm source="gerador-de-roteiro-de-viagem-ia_hero" variant="hero" />
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
        <WaitlistForm source="gerador-de-roteiro-de-viagem-ia_cta" variant="cta" />
      </section>

      <Footer />
    </div>
  );
}
