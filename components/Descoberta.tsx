import React from 'react';

/**
 * A descoberta, com as cartas de verdade do "Me surpreenda" (20/10).
 *
 * Era o vídeo antigo do swipe, com o app de antes do brandbook. As
 * cartas agora são as do baralho do app: a foto escolhida para cada vibe
 * em 20/10 e o título e o texto da `trix_vibes`, palavra por palavra.
 *
 * O texto não vai sobre a foto: cada carta tem a foto em cima e o texto
 * num cartão claro embaixo.
 */
const BASE =
  'https://vjtcnzwvoxicdiovpsmb.supabase.co/storage/v1/object/public/images_database/';

const CARTAS = [
  {
    foto: 'vibe-oldtown-v2.jpg',
    titulo: 'Centro histórico e museus',
    texto: 'Ruas antigas, catedral, coleção permanente com audioguia.',
  },
  {
    foto: 'vibe-wine-v2.jpg',
    titulo: 'Vinícolas e degustação',
    texto: 'Tarde entre vinhedos, prova guiada e almoço na propriedade.',
  },
  {
    foto: 'vibe-slow-v2.jpg',
    titulo: 'Dias sem pressa',
    texto: 'Poucas paradas por dia, tempo para voltar no mesmo café.',
  },
];

export default function Descoberta() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-14 border-t border-neutro-300/60 px-6 py-24 md:flex-row-reverse">
      <div className="flex-1 space-y-6">
        <p className="rotulo-secao text-petroleo">Me surpreenda</p>
        <h2 className="titulo-secao text-3xl text-navy-500 md:text-4xl">
          Ainda não sabe para onde ir?
        </h2>
        <p className="max-w-lg text-lg leading-relaxed text-neutro-600">
          Passe as cartas: fica o que tem a ver com você. Com isso e
          quantos dias você tem, a Trix sugere três destinos e explica por
          que cada um entrou.
        </p>
        <a
          href="https://app.trix.travel"
          className="titulo-secao inline-block text-base text-terracota-700 underline-offset-4 hover:underline"
        >
          Descobrir meu destino
        </a>
      </div>

      <div className="relative h-[400px] w-full max-w-sm shrink-0 sm:h-[440px] md:flex-1">
        {CARTAS.map((c, i) => (
          <div
            key={c.foto}
            className="absolute left-1/2 top-0 w-[210px] overflow-hidden rounded-2xl border border-neutro-300 bg-white shadow-[0_10px_28px_rgba(20,33,61,0.12)] sm:w-[240px]"
            style={{
              transform: `translateX(calc(-50% + ${(i - 1) * 44}px)) rotate(${(i - 1) * 5}deg)`,
              transformOrigin: '50% 100%',
              zIndex: i === 1 ? 3 : 1,
              top: i === 1 ? 0 : 24,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={BASE + c.foto}
              alt=""
              loading="lazy"
              className="aspect-[4/5] w-full bg-neutro-300 object-cover"
            />
            <div className="p-4">
              <p className="titulo-secao text-base text-navy-500">{c.titulo}</p>
              <p className="mt-1 text-sm leading-snug text-neutro-600">{c.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
