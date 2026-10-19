import React from 'react';
import {
  ROTEIROS_MODELO,
  emReais,
  totalDeDias,
  urlDaFicha,
  urlDaFoto,
} from '../lib/vitrine';

/**
 * A vitrine do app, na landing (20/10).
 *
 * São os oito roteiros-modelo da Home do app, e pela mesma razão: ver um
 * roteiro pronto é o que mais puxa o cadastro (Paulo, 15/10). O cartão
 * abre a ficha no app, que funciona sem conta.
 *
 * O texto não vai sobre a foto: o cartão é claro, e a foto fica em cima
 * dele. O crédito da licença do Unsplash vai numa linha só, embaixo da
 * grade, como na Home do app.
 */
export default function Vitrine() {
  const fotografos = Array.from(
    new Set(ROTEIROS_MODELO.map((r) => r.foto.fotografo)),
  );
  return (
    <section id="roteiros" className="scroll-mt-6 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="rotulo-secao text-petroleo">Roteiros prontos</p>
        <h2 className="titulo-secao mt-3 max-w-2xl text-3xl text-navy-500 md:text-4xl">
          Comece de um roteiro que já existe.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutro-600">
          Oito roteiros gerados pela Trix, com o trajeto e o custo de cada
          um. Abra, ajuste as datas e gere o seu.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ROTEIROS_MODELO.map((r) => (
            <li key={r.chave}>
              <a
                href={urlDaFicha(r.chave)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutro-300 bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(20,33,61,0.10)]"
              >
                <div
                  className="aspect-[4/3] w-full overflow-hidden"
                  style={{ backgroundColor: r.foto.cor }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={urlDaFoto(r.foto, 600)}
                    alt={r.trajeto[0].cidade}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="rotulo-secao text-neutro-600">
                    {r.lugar} · {totalDeDias(r)} dias
                  </p>
                  <h3 className="titulo-secao mt-2 text-lg leading-snug text-navy-500">
                    {r.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutro-600">
                    {r.frase}
                  </p>
                  <div className="mt-auto pt-4">
                    <p className="font-mono text-xs text-neutro-800">
                      {emReais(r.custoPorPessoa)} por pessoa, sem passagem
                    </p>
                    <p className="titulo-secao mt-3 text-sm text-terracota-700 group-hover:underline">
                      Usar este roteiro
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs text-neutro-600">
          Fotos: {fotografos.join(', ')} · Unsplash
        </p>
      </div>
    </section>
  );
}
