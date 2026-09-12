import React from 'react';
import WaitlistForm from './WaitlistForm';

/**
 * O fecho da página.
 *
 * Era "Junte-se à lista VIP e receba acesso antecipado antes do
 * lançamento oficial", repetido em cinco páginas. "VIP" é hype, e a
 * frase não dizia o que a pessoa ganha ao dar o e-mail.
 *
 * O fundo é navy: é o único bloco da página inteira em cor cheia, e é
 * aqui que a estrutura vira convite. Navy em excesso pesaria -- por isso
 * um bloco, não três.
 */
export default function ChamadaFinal({ source }: { source: string }) {
  return (
    <section className="bg-navy-500 py-24 text-areia">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="titulo-secao text-3xl md:text-4xl">
          Diga onde, e a Trix monta o dia a dia.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-navy-100">
          O beta está fechado em 50 viajantes. Deixe seu e-mail e a gente
          avisa quando abrir a próxima leva.
        </p>
        <div className="mt-8">
          <WaitlistForm source={source} variant="cta" sobreNavy />
        </div>
      </div>
    </section>
  );
}
