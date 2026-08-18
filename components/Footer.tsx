'use client';

import React from 'react';

export default function Footer() {
  const reviewCookies = () => {
    window.dispatchEvent(new Event('trix:review-cookies'));
  };

  return (
    <footer className="bg-secondary-bg py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-outfit font-semibold text-secondary-text text-lg">Trix Travel</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary-text">
          <a href="mailto:pena@trix.travel?subject=Trix%20Travel%20-%20Contato" className="hover:text-primary transition-colors">Suporte</a>
          <a href="/termos" className="hover:text-primary transition-colors">Termos de Uso</a>
          <a href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a>
          <button type="button" onClick={reviewCookies} className="hover:text-primary transition-colors">
            Preferências de Cookies
          </button>
        </div>
        <div className="text-sm text-secondary-text opacity-80">
          © 2026 Trix Travel. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
