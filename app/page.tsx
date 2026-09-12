'use client';

import React, { useEffect, useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import ChamadaFinal from '../components/ChamadaFinal';
import Comparativo from '../components/Comparativo';
import Footer from '../components/Footer';
import Recursos from '../components/Recursos';
import WaitlistForm from '../components/WaitlistForm';
import { supabase } from '../lib/supabase';

export default function LandingPage() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.rpc('waitlist_count').then(({ data, error }) => {
      if (error) {
        console.error('Erro ao buscar contador da waitlist:', error);
        return;
      }
      if (typeof data === 'number') setWaitlistCount(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-areia font-sans text-neutro-800">
      <Cabecalho />

      {/* =================================================================
          HERO

          A promessa perdeu o número de segundos, e isso é decisão do
          Paulo: "gerado em segundos" deprecia o valor percebido -- se
          sai rápido, parece que vale pouco. A dor a atacar é a oposta,
          e é o tempo de pesquisa que o produto elimina.

          "Menos planilhas. Mais malas prontas." saiu pelo mesmo motivo
          que o resto: é simpática antes de ser direta, e a voz da casa
          manda a frase começar pela informação.
          ================================================================= */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
        <div className="flex-1 space-y-6">
          <p className="rotulo-secao text-petroleo">Beta fechado</p>

          <h1 className="titulo-hero text-4xl leading-[1.08] text-navy-500 md:text-6xl">
            São 70 dias planejando
            <br />
            uma viagem de 15.
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-neutro-600">
            A Trix devolve esse tempo: roteiro dia a dia, com os lugares,
            os trajetos entre eles e o custo estimado de cada dia.
          </p>

          <WaitlistForm source="home_hero" variant="hero" />

          {/* O número só entra quando existe. Sem dado, corta-se a
              frase -- e "junte-se a 0 viajantes" seria pior que
              silêncio. */}
          {waitlistCount !== null && waitlistCount > 0 && (
            <p className="text-sm text-neutro-600">
              <span className="font-mono">{waitlistCount}</span> viajantes já
              estão na fila.
            </p>
          )}
        </div>

        <div className="flex-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="O roteiro dia a dia, na tela do aplicativo"
            // `mix-blend-multiply` volta, e não é enfeite: os dois
            // vídeos têm fundo BRANCO. Na página branca antiga isso não
            // aparecia; sobre areia, sem o blend, cada um viraria um
            // retângulo branco no meio da página. Multiply sobre areia
            // apaga o branco e preserva o resto.
            //
            // E a moldura reserva a altura: sem `aspect-ratio` o
            // elemento colapsa até o vídeo carregar, e o hero abre com
            // metade vazia em conexão lenta.
            className="mx-auto w-full max-w-sm mix-blend-multiply"
            style={{ aspectRatio: '9 / 16' }}
          >
            <source src="/demo-roteiro.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <Comparativo />
      <Recursos />

      {/* =================================================================
          DESCOBERTA

          Era "Dê match com seu destino" e "descubra sua próxima aventura
          de forma viciante". "Viciante" é hype, e o resto era promessa
          sem dado nenhum. O que o módulo faz de concreto é partir da
          vibe e da duração para sugerir cidade -- e é isso que está
          escrito agora.
          ================================================================= */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 border-b border-neutro-300/60 px-6 py-24 md:flex-row-reverse">
        <div className="flex-1 space-y-6">
          <p className="rotulo-secao text-petroleo">Descoberta</p>
          <h2 className="titulo-secao text-3xl text-navy-500 md:text-4xl">
            Ainda não sabe para onde ir?
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-neutro-600">
            Diga a vibe e quantos dias você tem. A Trix sugere as cidades
            que cabem nesse tempo e explica por que cada uma entrou — o
            destino é o resultado da conversa, não o começo dela.
          </p>
        </div>
        <div className="flex-1">
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="A sugestão de destinos, na tela do aplicativo"
            // `mix-blend-multiply` volta, e não é enfeite: os dois
            // vídeos têm fundo BRANCO. Na página branca antiga isso não
            // aparecia; sobre areia, sem o blend, cada um viraria um
            // retângulo branco no meio da página. Multiply sobre areia
            // apaga o branco e preserva o resto.
            //
            // E a moldura reserva a altura: sem `aspect-ratio` o
            // elemento colapsa até o vídeo carregar, e o hero abre com
            // metade vazia em conexão lenta.
            className="mx-auto w-full max-w-sm mix-blend-multiply"
            style={{ aspectRatio: '9 / 16' }}
          >
            <source src="/demo-discovery.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <ChamadaFinal source="home_cta" />
      <Footer />
    </div>
  );
}
