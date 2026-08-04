'use client';

import React, { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');

  // Olha a mágica do TypeScript aqui: avisamos que o "e" é um evento de formulário HTML
  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aqui entraremos com a integração do Supabase Javascript Client depois
    // await supabase.from('WaitlistTable').insert([{ email }]);
    alert('Inscrição confirmada! Você está na lista VIP do Trix.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER */}
      <header className="w-full h-20 flex items-center justify-between px-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Substituir pelo src correto da logo */}
          <div className="w-10 h-10 bg-teal-600 rounded-md flex items-center justify-center text-white font-bold">T</div>
          <span className="font-semibold text-xl text-teal-600">Trix Travel</span>
        </div>
        <div className="hidden md:flex">
          <a href="/login" className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
            Já é Beta? Faça Login
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Acesso Antecipado Exclusivo
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Menos planilhas.<br />Mais malas prontas.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Seu roteiro perfeito de 15 dias criado em segundos. Esqueça as horas perdidas pesquisando em dezenas de abas.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail..."
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
            >
              Entrar na Lista VIP
            </button>
          </form>
        </div>
        <div className="flex-1">
           {/* Placeholder para a imagem hero */}
           <div className="w-full h-96 bg-gray-100 rounded-xl shadow-2xl flex items-center justify-center text-gray-400 border border-gray-200">
              [Coloque a imagem do app aqui]
           </div>
        </div>
      </section>

      {/* FEATURES SECTION (Por que o Trix?) */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Por que o Trix?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Logística à prova de falhas.</h3>
              <p className="text-gray-600 leading-relaxed">
                O Trix não apenas cospe pontos turísticos. Ele entende a logística real para o mundo real, otimizando seu trajeto.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">O seu ritmo, as suas regras.</h3>
              <p className="text-gray-600 leading-relaxed">
                De uma viagem intensa de mochileiro a um passeio relaxante com a família. O roteiro se adapta à sua vibe.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">O fim das planilhas.</h3>
              <p className="text-gray-600 leading-relaxed">
                Diga adeus às dezenas de abas abertas e planilhas complexas. Gerencie tudo em uma única interface inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Pronto para viajar melhor?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Junte-se à lista VIP e receba acesso antecipado antes do lançamento oficial.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Digite seu melhor e-mail..."
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            Entrar na Lista VIP
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-500 text-lg">Trix Travel</span>
          </div>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="mailto:pena@trix.travel?subject=Trix%20Travel%20-%20Contato" className="hover:text-teal-600 transition-colors">Suporte</a>
            <a href="/termos" className="hover:text-teal-600 transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-teal-600 transition-colors">Política de Privacidade</a>
          </div>

          <div className="text-sm text-gray-400">
            © 2026 Trix Travel. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}