import React from 'react';

export default function LegalResumo({
  children,
  idioma = 'pt',
}: {
  children: React.ReactNode;
  idioma?: 'pt' | 'en';
}) {
  return (
    <p className="bg-neutro-100 border-l-4 border-petroleo rounded-r-lg px-4 py-3 text-sm text-neutro-600 mb-4">
      <span className="font-semibold text-neutro-950">{idioma === 'en' ? 'In short: ' : 'Em resumo: '}</span>
      {children}
    </p>
  );
}
