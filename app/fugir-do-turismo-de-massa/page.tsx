'use client';

import React from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import WaitlistForm from '../../components/WaitlistForm';

export default function FugirTurismoMassaPage() {
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
          Viagem Fora do Óbvio
        </span>
        <h1 className="font-outfit text-4xl md:text-5xl font-bold leading-tight text-primary-text mt-4 mb-6">
          Viajar sem virar estatística de guia turístico.
        </h1>
        <p className="text-lg text-secondary-text max-w-2xl mb-8">
          Fugir do turismo de massa não é sobre lugar secreto — é sobre não perder seu tempo de viagem numa fila pra ver o que todo mundo já viu na mesma foto.
        </p>

        <WaitlistForm source="fugir-do-turismo-de-massa_hero" variant="hero" />
      </section>

      {/* CONTEUDO UNICO */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-alternate">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold text-primary-text mb-4">
          Como sair do roteiro óbvio sem se perder
        </h2>
        <p className="text-lg text-secondary-text mb-10 max-w-2xl">
          O problema nunca foi visitar lugares famosos. É visitar só os famosos e gastar metade do seu tempo de viagem em fila e multidão.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Nem todo &quot;imperdível&quot; vale a fila</h3>
            <p className="text-secondary-text leading-relaxed">
              Às vezes existe uma alternativa a poucos minutos dali, com metade da espera e experiência igualmente boa — só que ninguém procura porque não é o primeiro resultado do Google.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Roteiro genérico empurra o mesmo lugar pra todo mundo</h3>
            <p className="text-secondary-text leading-relaxed">
              Os &quot;top 10&quot; de blog de viagem são iguais pra qualquer pessoa que pesquisa aquele destino. Um roteiro que parte das suas preferências reais chega em lugares diferentes — mesmo na mesma cidade.
            </p>
          </div>
          <div>
            <h3 className="font-outfit text-xl font-semibold text-primary-text mb-2">Ritmo importa tanto quanto destino</h3>
            <p className="text-secondary-text leading-relaxed">
              Fugir do óbvio também é não empacotar seu dia igual ao de quem viaja num ritmo totalmente diferente do seu.
            </p>
          </div>
        </div>
        <p className="text-secondary-text mt-10 leading-relaxed">
          O Trix constrói o roteiro a partir das vibes e do ritmo que você realmente declarou — não de uma lista padrão que todo blog de viagem recomenda.
        </p>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4 text-primary-text">Pronto para viajar melhor?</h2>
        <p className="text-lg text-secondary-text mb-8">
          Junte-se à lista VIP e receba acesso antecipado antes do lançamento oficial.
        </p>
        <WaitlistForm source="fugir-do-turismo-de-massa_cta" variant="cta" />
      </section>

      <Footer />
    </div>
  );
}
