import React from 'react';
import { ROTEIROS_MODELO, urlDaFoto } from '../lib/vitrine';

/**
 * Um dia de roteiro de verdade, no lugar do vídeo do hero (20/10).
 *
 * Os dois vídeos que estavam aqui mostravam o app de antes do brandbook
 * v2: azul Blue Trix, teal e as telas do FlutterFlow. Era a única imagem
 * do produto na página, e contradizia o resto dela.
 *
 * **Nada aqui é inventado.** É o dia 1 de Roma do roteiro-modelo da
 * Itália (trip 425, gerado em 15/10 para 2 pessoas): os três lugares, o
 * período, a logística resumida e o custo do modelo, dividido por 2
 * para ficar por pessoa, como a vitrine mostra. O Fórum vem "incluso"
 * porque o modelo diz que o ingresso do Coliseu cobre a entrada: zero
 * não aparece como R$ 0.
 *
 * A foto é a da ficha, e o texto não vai sobre ela: vai num cartão
 * claro por cima, que é uma das duas soluções que o brandbook autoriza.
 */
const ATIVIDADES = [
  {
    periodo: 'Manhã',
    lugar: 'Coliseu',
    logistica: 'Ingresso no site da CoopCulture, 30 dias antes. Metrô Colosseo, linha B.',
    custo: 'R$ 120 por pessoa',
    reserva: true,
  },
  {
    periodo: 'Tarde',
    lugar: 'Fórum Romano e Monte Palatino',
    logistica: 'A entrada é logo na saída do Coliseu.',
    custo: 'incluso no ingresso',
    reserva: false,
  },
  {
    periodo: 'Noite',
    lugar: 'Armando al Pantheon',
    logistica: 'Trattoria de 1961, ao lado do Panteão. Fecha aos domingos.',
    custo: 'R$ 250 por pessoa',
    reserva: true,
  },
];

const ROMA = ROTEIROS_MODELO.find((r) => r.chave === 'italia')!;

export default function DiaDeRoteiro() {
  return (
    <figure className="relative mx-auto w-full max-w-md">
      <div
        className="aspect-[4/5] w-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: ROMA.foto.cor }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlDaFoto(ROMA.foto, 1080)}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>

      <div className="relative -mt-56 mx-4 rounded-2xl border border-neutro-300 bg-white p-5 shadow-[0_12px_32px_rgba(20,33,61,0.14)] sm:mx-6">
        <div className="flex items-baseline justify-between">
          <p className="rotulo-secao text-navy-500">Dia 1 · Roma</p>
          <p className="font-mono text-xs text-neutro-600">3 paradas</p>
        </div>

        <ol className="mt-4 space-y-4">
          {ATIVIDADES.map((a) => (
            <li key={a.lugar} className="flex gap-3">
              <span className="w-14 shrink-0 pt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-petroleo">
                {a.periodo}
              </span>
              <div className="min-w-0">
                <p className="titulo-secao text-base leading-snug text-neutro-950">
                  {a.lugar}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-neutro-600">
                  {a.logistica}
                </p>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-neutro-800">
                  {a.custo}
                  {a.reserva && (
                    <span className="rounded-full bg-navy-100 px-2 py-0.5 text-[10px] uppercase tracking-[0.06em] text-navy-500">
                      reservar antes
                    </span>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 flex items-baseline justify-between border-t border-neutro-300 pt-3">
          <p className="rotulo-secao text-neutro-600">Custo do dia</p>
          <p className="font-mono text-sm text-neutro-950">R$ 370 por pessoa</p>
        </div>
      </div>

      <figcaption className="mt-3 px-4 text-xs text-neutro-600 sm:px-6">
        Do roteiro-modelo Roma, Florença e Veneza. Foto: {ROMA.foto.fotografo} ·
        Unsplash
      </figcaption>
    </figure>
  );
}
