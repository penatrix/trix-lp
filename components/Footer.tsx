'use client';

import React from 'react';
import Marca from './Marca';

export default function Footer() {
  const reviewCookies = () => {
    window.dispatchEvent(new Event('trix:review-cookies'));
  };

  return (
    <footer className="border-t border-neutro-300/60 bg-areia py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <Marca tamanho={24} />

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-neutro-600">
          <a
            href="mailto:pena@trix.travel?subject=Trix%20-%20Contato"
            className="transition-colors hover:text-terracota-700"
          >
            Suporte
          </a>
          <a href="/termos" className="transition-colors hover:text-terracota-700">
            Termos de Uso
          </a>
          <a
            href="/privacidade"
            className="transition-colors hover:text-terracota-700"
          >
            Política de Privacidade
          </a>
          <button
            type="button"
            onClick={reviewCookies}
            className="transition-colors hover:text-terracota-700"
          >
            Preferências de Cookies
          </button>
        </nav>

        {/* "Empresa de tecnologia, não agência de viagens" é distinção
            deliberada e juridicamente relevante -- CNAE de tecnologia,
            fora do CADASTUR. O rodapé é onde ela cabe sem virar
            discurso. */}
        <p className="text-center text-xs leading-relaxed text-neutro-600 md:text-right">
          © 2026 Trix
          <br />
          Empresa de tecnologia. Não somos agência de viagens.
        </p>
      </div>
    </footer>
  );
}
