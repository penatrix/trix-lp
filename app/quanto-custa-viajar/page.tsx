'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import WaitlistForm from '../../components/WaitlistForm';

export default function QuantoCustaViajarPage() {
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

        <WaitlistForm source="quanto-custa-viajar_hero" variant="hero" />
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
        <WaitlistForm source="quanto-custa-viajar_cta" variant="cta" />
      </section>

      <Footer />
    </div>
  );
}
