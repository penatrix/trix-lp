import React from 'react';

export default function LegalResumo({ children }: { children: React.ReactNode }) {
  return (
    <p className="bg-primary-bg border-l-4 border-secondary rounded-r-lg px-4 py-3 text-sm text-secondary-text mb-4">
      <span className="font-semibold text-primary-text">Em resumo: </span>
      {children}
    </p>
  );
}
